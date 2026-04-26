"use client";

import { AnimatePresence, motion, type Transition } from "motion/react";
import {
  type ComponentProps,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface TextLoopProps {
  staticText?: string;
  rotatingTexts?: string[];
  className?: string;
  interval?: number;
  transition?: Transition;
  staticTextClassName?: string;
  rotatingTextClassName?: string;
  backgroundClassName?: string;
  cursorClassName?: string;
}

export function TextLoopRotatingText({
  rotatingTexts = ["Limitless", "Timeless", "Flawless"],
  className,
  interval = 3000,
  transition = { duration: 0.6, ease: "easeOut" },
  rotatingTextClassName,
  backgroundClassName,
  cursorClassName,
}: TextLoopProps & PropsWithChildren) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [rotatingTexts.length, interval]);

  return (
    <div className={cn("relative flex items-center", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={rotatingTexts[index]}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
          transition={transition}
          className="overflow-hidden whitespace-nowrap relative"
        >
          {/* Background gradient box */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-linear-to-r from-transparent via-purple-200/30 to-purple-200",
              "dark:from-transparent dark:via-violet-950/30 dark:to-violet-950/60",
              backgroundClassName,
            )}
          />

          <span
            className={cn(
              "relative text-secondary pr-1",
              rotatingTextClassName,
            )}
          >
            {rotatingTexts[index]}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Cursor Line */}
      <motion.div
        className={cn(
          "w-0.75 md:w-1 bg-violet-500 h-[1.375em] sm:h-[1em]",
          cursorClassName,
        )}
        animate={{ opacity: [1, 0.5] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

export function TextLoop({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-4xl md:text-7xl font-medium tracking-tight leading-snug",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
