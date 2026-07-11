"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo, type ElementType, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** Render children with a staggered cascade (each direct child animates in turn). */
  stagger?: boolean;
  /** Delay between staggered children (seconds). */
  staggerDelay?: number;
  /** Element to render as (default: div). */
  as?: ElementType;
}

/**
 * Shared entrance-animation wrapper.
 * opacity 0->1, y 24->0, duration 0.6, ease [0.22,1,0.36,1],
 * fires once when scrolled into view. Respects prefers-reduced-motion
 * (fades only, no transform).
 */
export function SectionReveal({
  children,
  className,
  stagger = false,
  staggerDelay = 0.12,
  as = "div",
}: SectionRevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);

  if (stagger) {
    const container: Variants = {
      hidden: {},
      visible: {
        transition: { staggerChildren: reduced ? 0 : staggerDelay },
      },
    };
    return (
      <MotionTag
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Child item for use inside a `<SectionReveal stagger>` container. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
