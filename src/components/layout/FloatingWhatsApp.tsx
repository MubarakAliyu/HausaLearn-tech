"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

/** Authentic WhatsApp glyph (react-feather has no WhatsApp logo). */
function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 4c-6.63 0-12 5.37-12 12 0 2.11.55 4.17 1.6 5.98L4 28l6.19-1.62A11.9 11.9 0 0 0 16.04 28c6.63 0 12-5.37 12-12s-5.37-12-12-12Zm0 21.82c-1.83 0-3.62-.49-5.19-1.42l-.37-.22-3.67.96.98-3.58-.24-.37a9.8 9.8 0 0 1-1.5-5.19c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.43-4.42 9.82-9.85 9.82Zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

/**
 * Persistent floating button (bottom-right) that opens the WhatsApp learning
 * group. Always visible; sits below the back-to-top button when that appears.
 */
export function FloatingWhatsApp() {
  const t = useT();
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={site.whatsappGroup}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.whatsappGroup}
      title={t.a11y.whatsappGroup}
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { scale: 1.08 }}
      whileTap={reduced ? undefined : { scale: 0.92 }}
      className="bg-whatsapp hover:bg-whatsapp-dark focus-visible:outline-whatsapp fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {/* Pulsing ring */}
      {!reduced && (
        <motion.span
          aria-hidden
          className="bg-whatsapp absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10">
        <WhatsAppIcon />
      </span>
    </motion.a>
  );
}
