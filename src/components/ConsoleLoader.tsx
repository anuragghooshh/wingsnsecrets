import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Variant =
  | "spinner" // | / - \
  | "dots" // . .. ...
  | "bar" // [====>     ]
  | "pulse" // ▓▒░▒▓
  | "braille" // ⡀⡄⡆⡇⣇⣧⣷⣿
  | "arrow"; // ⇢ ⇢⇢ ⇢⇢⇢ ...

export interface ConsoleLoaderProps {
  variant?: Variant;
  intervalMs?: number;
  width?: number;
  className?: string;
  mono?: boolean;
  label?: string;

  durationMs?: number;

  running?: boolean;

  onFinish?: (done: boolean) => void;

  freezeOnStop?: boolean;
}

const framesMap: Record<
  Variant,
  string[] | ((t: number, width: number) => string)
> = {
  spinner: ["|", "/", "—", "\\"],
  dots: ["", ".", "..", "..."],
  bar: (t, width) => {
    const len = Math.max(6, width);
    const pos = t % (len - 2);
    const inside = Array.from({ length: len - 2 }, (_, i) =>
      i === pos ? ">" : i < pos ? "=" : " "
    ).join("");
    return `[${inside}]`;
  },
  pulse: ["░", "▒", "▓", "▒"],
  braille: [
    "⡀",
    "⡄",
    "⡆",
    "⡇",
    "⣇",
    "⣧",
    "⣷",
    "⣿",
    "⣷",
    "⣧",
    "⣇",
    "⡇",
    "⡆",
    "⡄",
  ],
  arrow: ["⇢", "⇢⇢", "⇢⇢⇢", "⇢⇢⇢⇢", "⇢⇢⇢", "⇢⇢", "⇢"],
};

const defaultIntervals: Record<Variant, number> = {
  spinner: 90,
  dots: 300,
  bar: 60,
  pulse: 120,
  braille: 80,
  arrow: 100,
};

export const ConsoleLoader: React.FC<ConsoleLoaderProps> = ({
  variant = "spinner",
  intervalMs,
  width = 16,
  className,
  mono = true,
  label,
  durationMs,
  running,
  onFinish,
  freezeOnStop = true,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const [internalRunning, setInternalRunning] = React.useState(true);
  const isRunning = running ?? internalRunning;

  const [t, setT] = React.useState(0);
  const [stoppedOnce, setStoppedOnce] = React.useState(false);

  React.useEffect(() => {
    if (!isRunning || prefersReducedMotion) return;
    const id = setInterval(
      () => setT((x) => x + 1),
      intervalMs ?? defaultIntervals[variant]
    );
    return () => clearInterval(id);
  }, [isRunning, prefersReducedMotion, intervalMs, variant]);

  React.useEffect(() => {
    if (durationMs == null) return;
    if (!isRunning) return;
    const id = setTimeout(() => {
      if (running === undefined) setInternalRunning(false);
      if (!stoppedOnce) {
        setStoppedOnce(true);
        onFinish?.(true);
      }
    }, durationMs);
    return () => clearTimeout(id);
  }, [durationMs, isRunning, running, onFinish, stoppedOnce]);

  React.useEffect(() => {
    if (running === undefined) return;
    if (!running && !stoppedOnce) {
      setStoppedOnce(true);
      onFinish?.(true);
    }
  }, [running, stoppedOnce, onFinish]);

  const frames = framesMap[variant];
  const activeText =
    typeof frames === "function" ? frames(t, width) : frames[t % frames.length];

  const text = isRunning
    ? activeText
    : freezeOnStop
    ? typeof frames === "function"
      ? frames(t, width)
      : frames[
          (t - 1 + (frames as string[]).length) % (frames as string[]).length
        ]
    : "";

  return (
    <motion.span
      aria-label={label}
      aria-live={label ? "polite" : undefined}
      className={[
        mono ? "font-mono tabular-nums" : "",
        "whitespace-pre",
        className,
      ].join(" ")}
      animate={{
        opacity: isRunning && !prefersReducedMotion ? [1, 0.6, 1] : 1,
      }}
      transition={{
        duration: 0.8,
        repeat: isRunning && !prefersReducedMotion ? Infinity : 0,
      }}
    >
      {text}
    </motion.span>
  );
};

export default ConsoleLoader;
