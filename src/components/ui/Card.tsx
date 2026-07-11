"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardAccent = "kore" | "shudi";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Enable the hover lift interaction (default true). */
  interactive?: boolean;
  /** Which brand tint the border shifts to on hover. */
  accent?: CardAccent;
}

/**
 * Rounded surface card: line border, soft card shadow, and a framer-motion
 * hover lift (y -6, deeper shadow, border shifts to a brand tint).
 * Respects prefers-reduced-motion.
 */
export function Card({
  children,
  className,
  interactive = true,
  accent = "kore",
}: CardProps) {
  const reduced = useReducedMotion();

  const hoverBorder =
    accent === "kore" ? "hover:border-kore/40" : "hover:border-shudi/40";

  return (
    <motion.div
      whileHover={
        interactive && !reduced
          ? {
              y: -6,
              boxShadow: "0 20px 40px -16px rgba(20,48,74,0.24)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-surface border-line rounded-lg border p-6 shadow-[var(--shadow-card)] transition-colors",
        interactive && hoverBorder,
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
