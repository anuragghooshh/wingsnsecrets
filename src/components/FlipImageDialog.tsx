"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export type FlipImageDialogProps = {
  trigger: React.ReactNode;
  frontSrc: string;
  backSrc: string;
  altFront?: string;
  altBack?: string;

  aspectRatio?: number;

  className?: string;

  sizes?: string;
};

export default function FlipImageDialog(props: FlipImageDialogProps) {
  const {
    trigger,
    frontSrc,
    backSrc,
    altFront = "Front image",
    altBack = "Back image",
    aspectRatio,
    className,
    sizes = "(min-width: 768px) 60vh, 90vw",
  } = props;

  const [flipped, setFlipped] = React.useState(false);
  const [ratio, setRatio] = React.useState<number | null>(aspectRatio ?? null);

  const computedWidth = React.useMemo(() => {
    if (ratio && isFinite(ratio) && ratio > 0) {
      return `min(90vw, ${85 * ratio}vh)`;
    }
    return "90vw";
  }, [ratio]);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogContent
          className="p-0 bg-transparent border-0 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onEscapeKeyDown={() => setFlipped(false)}
          onPointerDownOutside={() => setFlipped(false)}
          aria-label="Flip image dialog"
        >
          <DialogTitle className="sr-only">Flip Image</DialogTitle>
          <div className="relative select-none">
            <DialogClose
              aria-label="Close"
              className="absolute -right-2 -top-2 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80 focus-visible:outline-none"
              onClick={() => setFlipped(false)}
            >
              <X className="h-4 w-4" />
            </DialogClose>

            <div
              className={`relative mx-auto ${className ?? ""}`}
              style={{
                perspective: 1200,
                aspectRatio: (ratio ?? 2 / 3).toString(), // sensible fallback to avoid layout shift
                width: computedWidth,
                maxHeight: "85vh",
              }}
            >
              <motion.div
                role="button"
                aria-label="Flip image"
                tabIndex={0}
                onClick={() => setFlipped((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlipped((v) => !v);
                  }
                }}
                className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
                animate={{ rotateY: flipped ? 180 : 0 }}
                initial={false}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={frontSrc}
                    alt={altFront}
                    sizes={sizes}
                    className="object-contain"
                    onLoad={(e) => {
                      if (!aspectRatio) {
                        const img = e.currentTarget;
                        setRatio(img.naturalWidth / img.naturalHeight);
                      }
                    }}
                  />
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img
                    src={backSrc}
                    alt={altBack}
                    sizes={sizes}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

/*
Notes
-----
1) Fully responsive: no fixed width/height props. The frame uses CSS `aspect-ratio` and clamps to `90vw` and `85vh`.
2) Auto-detects aspect ratio from the front image via `onLoadingComplete`; or pass `aspectRatio` to lock it.
3) Images use Next/Image with `fill` + `object-contain` to scale crisply.
4) If front/back images have different ratios, the frame follows the front (or provided) ratio to avoid wobble during flip.
*/
