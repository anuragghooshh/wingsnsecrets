import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type Symbols =
  | "none"
  | "brackets" // [ >_ ]
  | "chevrons" // < >_ >
  | "pipes" // | >_ |
  | "slashes" // / >_ \
  | { left?: string; prefix?: string; right?: string };

export interface TerminalButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "prefix" | "disabled"
  > {
  as?: "button" | "a";
  href?: string;

  variant?: "terminal" | "ghost" | "danger" | "success";
  size?: "xs" | "sm" | "md" | "lg";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;

  /** Match Typewriter API */
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  cursor?: React.ReactNode; // default: "_"
  cursorBlinkRate?: number; // ms; default: 450 (same as your Typewriter)
  hideCursor?: boolean;

  /** Hacker framing */
  symbols?: Symbols; // preset or custom
  caret?: boolean; // show cursor after label (default true)
  scanlines?: boolean; // CRT overlay on hover/focus
  glitch?: boolean; // subtle glow hover

  leading?: React.ReactNode;
  trailing?: React.ReactNode;

  className?: string;
}

/* ----- helpers ----- */
const PRESETS: Record<
  Exclude<Symbols, "none" | { left?: string }>,
  { left: string; prefix: string; right: string }
> = {
  brackets: { left: "[", prefix: " >_ ", right: "]" },
  chevrons: { left: "<", prefix: " >_ ", right: ">" },
  pipes: { left: "|", prefix: " >_ ", right: "|" },
  slashes: { left: "/", prefix: " >_ ", right: "\\" },
};

const terminalButton = cva(
  [
    "group relative inline-flex items-center font-mono tracking-tight",
    "border rounded-[2px] outline-none select-none transition-transform",
    "focus-visible:ring-1 focus-visible:ring-current",
    "active:translate-y-[1px]",
    "shadow-[0_0_0_1px_rgba(0,0,0,0.5)_inset]",
  ],
  {
    variants: {
      variant: {
        terminal:
          "cursor-pointer text-danger-red border-danger-red/60 hover:text-danger-red/80 focus-visible:text-danger-red",
        ghost:
          "cursor-pointer bg-transparent text-emerald-300 border-emerald-400/40 hover:bg-emerald-400/5",
        danger:
          "cursor-pointer text-rose-300 border-rose-400/60 hover:text-rose-200",
        success:
          "cursor-pointer text-lime-300 border-lime-400/60 hover:text-lime-200",
      },
      size: {
        xs: "text-[11px]",
        sm: "text-[12px]",
        md: "text-sm",
        lg: "text-base",
      },
      block: {
        true: "w-full justify-center",
      },
      disabled: {
        true: "opacity-60 pointer-events-none",
      },
      glitch: {
        true: "hover:[text-shadow:0_0_8px_currentColor]",
      },
      scanlines: {
        true: "hover:scanlines focus-visible:scanlines",
      },
    },
    defaultVariants: {
      variant: "terminal",
      size: "md",
    },
  }
);

/* The “cursor” after the label, matching your Typewriter’s blink rate */
const Caret: React.FC<{ rateMs?: number; children?: React.ReactNode }> = ({
  rateMs = 450,
  children = "_",
}) => (
  <span
    aria-hidden
    style={{
      animationDuration: `${rateMs}ms`,
      animationTimingFunction: "steps(1, end)",
    }}
    className="ml-1 inline-block w-[0.6ch] caret-blink"
  >
    {children}
  </span>
);

export const TerminalButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TerminalButtonProps
>(function TerminalButton(
  {
    as = "button",
    href,
    children,
    className,
    variant = "terminal",
    size = "md",
    block,
    disabled,
    loading,
    prefix,
    suffix,
    cursor = "_",
    cursorBlinkRate = 450, // <- default equals your Typewriter
    hideCursor = false,
    symbols = "brackets",
    caret = true,
    scanlines = true,
    glitch = true,
    leading,
    trailing,
    ...rest
  },
  ref
) {
  /* resolve symbol framing */
  const frame = React.useMemo(() => {
    if (symbols === "none") return { left: "", prefix: "", right: "" };
    if (typeof symbols === "string") {
      return PRESETS[symbols] ?? { left: "", prefix: "", right: "" };
    }
    return {
      left: symbols.left ?? "",
      prefix: symbols.prefix ?? "",
      right: symbols.right ?? "",
    };
  }, [symbols]);

  const base = clsx(
    terminalButton({
      variant,
      size,
      block,
      disabled: disabled || loading,
      glitch,
      scanlines,
    }),
    className
  );

  const content = (
    <span className="relative inline-flex items-center gap-2">
      {/* “Typewriter-like” prefix/suffix (your props) + the frame’s own prefix */}
      {frame.left ? (
        <span aria-hidden className="opacity-60">
          {frame.left}
        </span>
      ) : null}

      {prefix ? <span className="opacity-90">{prefix}</span> : null}
      {frame.prefix ? (
        <span aria-hidden className="opacity-70">
          {frame.prefix}
        </span>
      ) : null}

      {leading ? <span className="opacity-90">{leading}</span> : null}

      <span className="relative">
        {children}
        {/* cursor/caret to match Typewriter */}
        {!hideCursor && caret && !loading ? (
          <Caret rateMs={cursorBlinkRate}>{cursor}</Caret>
        ) : null}
      </span>

      {trailing ? <span className="opacity-90">{trailing}</span> : null}

      {suffix ? <span className="opacity-90">{suffix}</span> : null}
      {frame.right ? (
        <span aria-hidden className="opacity-60">
          {frame.right}
        </span>
      ) : null}
    </span>
  );

  if (as === "a" && href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={base}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      disabled={disabled || loading}
      className={base}
      {...rest}
    >
      {content}
    </button>
  );
});
