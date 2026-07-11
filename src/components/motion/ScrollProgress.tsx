"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin fixed scroll-progress bar in the brand gradient, pinned to the top.
 * Driven by page scroll; smoothed with a spring.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="bg-brand-gradient fixed inset-x-0 top-0 z-[100] h-[3px] origin-left"
      style={{ scaleX }}
    />
  );
}
