"use client";

import { useT } from "@/i18n/LanguageProvider";

/**
 * Keyboard-only skip link — hidden until focused, then jumps to #main.
 */
export function SkipToContent() {
  const t = useT();
  return (
    <a
      href="#main"
      className="bg-ink rounded-md sr-only z-[110] px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
