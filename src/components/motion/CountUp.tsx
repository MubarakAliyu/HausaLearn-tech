"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated count-up that fires once when scrolled into view. Uses a passive
 * scroll listener plus an initial in-view check (reliable across browsers and
 * programmatic scrolling). Under prefers-reduced-motion it shows the final
 * value instantly.
 */
export function CountUp({ to, duration = 1.6, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (started.current) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 40 && rect.bottom > 0;
      if (!inView) return;

      started.current = true;
      cleanup();

      if (reduced) {
        setValue(to);
        return;
      }
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setValue(Math.round(eased * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      // Safety net: guarantee the final value lands even if frames are dropped
      // (e.g. a throttled/backgrounded tab where rAF is paused).
      setTimeout(() => setValue(to), duration * 1000 + 150);
    };

    const cleanup = () => {
      window.removeEventListener("scroll", start);
      window.removeEventListener("resize", start);
    };

    window.addEventListener("scroll", start, { passive: true });
    window.addEventListener("resize", start);
    start(); // fire immediately if already in view

    return cleanup;
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
