import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type LoopMode = boolean | number;

export type TypewriterWord =
  | string
  | {
      text: string;
      pauseMs?: number;
      typingMs?: number;
      deleteMs?: number;
      className?: string;
    };

export interface TypewriterProps {
  words: TypewriterWord[];

  typingSpeed?: number;
  deleteSpeed?: number;
  pauseBetween?: number;
  startDelay?: number;

  loop?: LoopMode;                
  smartBackspace?: boolean;
  shuffle?: boolean;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  cursor?: React.ReactNode;
  cursorBlinkRate?: number;
  hideCursorOnComplete?: boolean;

  className?: string;
  textClassName?: string;
  cursorClassName?: string;

  fadeIn?: boolean;
  ariaLabel?: string;

  onWordChange?: (index: number, word: string) => void;
  onLoopComplete?: (loopIndex: number) => void;
  onFinish?: () => void;

  mode?: "replace" | "stack";      // stack = keep each finished word on its own line
  lineClassName?: string;
  maxStackLines?: number;
}

/** normalize */
function toConfig(
  w: TypewriterWord
): { text: string; pauseMs?: number; typingMs?: number; deleteMs?: number; className?: string } {
  if (typeof w === "string") return { text: w };
  return w;
}

/** Fisher–Yates */
function shuffleArray<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 60,
  deleteSpeed = 40,
  pauseBetween = 900,
  startDelay = 300,
  loop = true,
  smartBackspace = true,
  shuffle = false,
  prefix,
  suffix,
  cursor = "|",
  cursorBlinkRate = 450,
  className,
  textClassName,
  cursorClassName,
  fadeIn = true,
  ariaLabel,
  onWordChange,
  onLoopComplete,
  onFinish,
  mode = "replace",
  lineClassName,
  maxStackLines,
  hideCursorOnComplete=true
}) => {
  const prefersReducedMotion = useReducedMotion();

  /** how many full passes should we do? */
  const loopTarget = React.useMemo<number>(() => {
    if (loop === true) return Number.POSITIVE_INFINITY;
    if (loop === false) return 1;
    const n = Number(loop);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;
  }, [loop]);

  const wordList = React.useMemo(() => {
    const normalized = words.map(toConfig);
    return shuffle ? shuffleArray(normalized) : normalized;
  }, [words, shuffle]);

  const [mounted, setMounted] = React.useState(false);
  const [wIndex, setWIndex] = React.useState(0);
  const [charCount, setCharCount] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const [loopCount, setLoopCount] = React.useState(0); // completed loops
  const [done, setDone] = React.useState(false);       // NEW: hard stop when finished

  /** stack history */
  const [lines, setLines] = React.useState<Array<{ text: string; className?: string }>>([]);

  const current = wordList[wIndex] ?? { text: "" };
  const next = wordList[(wIndex + 1) % wordList.length] ?? { text: "" };

  const sharedPrefix = React.useMemo(() => {
    if (mode === "stack" || !smartBackspace) return 0;
    const a = current.text;
    const b = next.text;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return i;
  }, [current.text, next.text, smartBackspace, mode]);

  React.useEffect(() => {
    if (mounted) onWordChange?.(wIndex, current.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wIndex]);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  React.useEffect(() => {
    if (!mounted || wordList.length === 0 || done) return;

    // reduced motion: snap to full current word and stop timers (still allows stack history that already exists)
    if (prefersReducedMotion) {
      setCharCount(current.text.length);
      return;
    }

    const full = current.text;
    const isWordComplete = !deleting && charCount === full.length;

    /** -------- STACK MODE (no deletion) -------- */
    if (mode === "stack") {
      const delay = isWordComplete ? (current.pauseMs ?? pauseBetween) : (current.typingMs ?? typingSpeed);

      const timer = setTimeout(() => {
        if (!isWordComplete) {
          setCharCount((c) => c + 1);
          return;
        }

        // push completed line
        setLines((prev) => {
          const nextLines = [...prev, { text: full, className: current.className }];
          if (typeof maxStackLines === "number" && nextLines.length > maxStackLines) {
            nextLines.splice(0, nextLines.length - maxStackLines);
          }
          return nextLines;
        });

        // compute next index and whether a loop just finished
        setWIndex((i) => {
          const nextIndex = (i + 1) % wordList.length;
          const completedOneLoop = nextIndex === 0;

          if (completedOneLoop) {
            setLoopCount((lc) => {
              const newLc = lc + 1;
              onLoopComplete?.(newLc);

              if (newLc >= loopTarget) {
                // hard stop
                setDone(true);
                onFinish?.();
                return i; // keep index where it is
              }
              return newLc;
            });
          }

          // only advance if not done (avoid race with setDone above)
          return nextIndex;
        });

        setCharCount(0);
      }, delay);

      return () => clearTimeout(timer);
    }

    /** -------- REPLACE MODE (original type/delete) -------- */
    const isWordEmpty = deleting && charCount === (smartBackspace ? sharedPrefix : 0);
    let delay = deleting ? (current.deleteMs ?? deleteSpeed) : (current.typingMs ?? typingSpeed);
    if (!deleting && isWordComplete) delay = current.pauseMs ?? pauseBetween;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charCount < full.length) {
          setCharCount((c) => c + 1);
          return;
        }
        setDeleting(true);
      } else {
        if (!isWordEmpty) {
          setCharCount((c) => c - 1);
          return;
        }

        setDeleting(false);
        setWIndex((i) => {
          const nextIndex = (i + 1) % wordList.length;
          const completedOneLoop = nextIndex === 0;

          if (completedOneLoop) {
            setLoopCount((lc) => {
              const newLc = lc + 1;
              onLoopComplete?.(newLc);

              if (newLc >= loopTarget) {
                setDone(true);
                onFinish?.();
                return i; // do not wrap
              }
              return newLc;
            });
          }

          return nextIndex;
        });

        // if we just finished all loops, freeze showing the full word (no more deleting)
        if (done) {
          setDeleting(false);
          setCharCount(full.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    mounted,
    wordList,
    done,
    prefersReducedMotion,
    // typing state
    charCount,
    deleting,
    wIndex,
    // options
    typingSpeed,
    deleteSpeed,
    pauseBetween,
    smartBackspace,
    sharedPrefix,
    mode,
    maxStackLines,
    // loop control
    loopTarget,
    // current changes
    current.text,
    current.pauseMs,
    current.typingMs,
    current.deleteMs,
    current.className,
    onLoopComplete,
    onFinish,
  ]);

  // finished flag used only to hide caret while still showing last char
  const finishedNow =
    done ||
    (!prefersReducedMotion &&
      !deleting &&
      charCount === current.text.length &&
      Number.isFinite(loopTarget) &&
      loopCount >= loopTarget);

  const showCaret = !prefersReducedMotion && (!finishedNow || !hideCursorOnComplete);

  const caret = (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: (cursorBlinkRate ?? 450) / 1000,
        repeat: Infinity,
        ease: "linear",
      }}
      className={["inline-block", cursorClassName].filter(Boolean).join(" ")}
    >
      {cursor}
    </motion.span>
  );

  const containerProps = fadeIn
    ? { initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }
    : {};

  const shown = current.text.slice(0, charCount);

  // Safely clone nodes so repeated rendering (stack) doesn't reuse the same element instance
  const renderNode = React.useCallback((node: React.ReactNode) => {
    if (node == null) return null;
    if (typeof node === "string" || typeof node === "number") return node;
    return React.isValidElement(node) ? React.cloneElement(node as React.ReactElement) : node;
  }, []);

  /* ---------- RENDER ---------- */
  if (mode === "stack") {
    return (
      <motion.div
        {...containerProps}
        className={["inline-flex flex-col items-start", className].filter(Boolean).join(" ")}
        aria-label={ariaLabel}
        aria-live={ariaLabel ? "polite" : undefined}
        role={ariaLabel ? "text" : undefined}
      >
        {/* completed lines */}
        {lines.map((l, i) => (
          <span key={i} className={"inline-flex items-baseline"}>
            {prefix ? <span className="mr-1">{renderNode(prefix)}</span> : null}
            <span className={[lineClassName, l.className, textClassName].filter(Boolean).join(" ")}>
              {l.text}
            </span>
            {suffix ? <span className="ml-1">{renderNode(suffix)}</span> : null}
          </span>
        ))}
        {/* active line (still shown when done; caret hidden) */}
        <span className={"inline-flex items-baseline"}>
          {prefix ? <span className="mr-1">{renderNode(prefix)}</span> : null}
          <span className={[current.className, textClassName].filter(Boolean).join(" ")}>
            {shown}
          </span>
          {showCaret ? caret : null}
          {suffix ? <span className="ml-1">{renderNode(suffix)}</span> : null}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.span
      {...containerProps}
      className={["inline-flex items-baseline", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      aria-live={ariaLabel ? "polite" : undefined}
      role={ariaLabel ? "text" : undefined}
    >
      {prefix ? <span className="mr-1">{prefix}</span> : null}
      <span className={[current.className, textClassName].filter(Boolean).join(" ")}>
        {shown}
      </span>
      {showCaret ? caret : null}
      {suffix ? <span className="ml-1">{suffix}</span> : null}
    </motion.span>
  );
};

export default Typewriter;