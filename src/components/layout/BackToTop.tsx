"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "react-feather";
import { useT } from "@/i18n/LanguageProvider";

export function BackToTop() {
  const t = useT();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label={t.a11y.scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={reduced ? undefined : { scale: 1.1 }}
          whileTap={reduced ? undefined : { scale: 0.9 }}
          className="bg-brand-gradient-strong focus-visible:outline-shudi fixed right-5 bottom-24 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[var(--shadow-card)] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
