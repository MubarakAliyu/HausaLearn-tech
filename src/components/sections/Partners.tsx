"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award } from "react-feather";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT, useLocale } from "@/i18n/LanguageProvider";
import { partners } from "@/data/partners";

/**
 * Partners strip — sits inside the stats band, below the figures. Renders a
 * partner's logo image when available, otherwise a branded name chip.
 */
export function Partners() {
  const t = useT();
  const { locale } = useLocale();
  const reduced = useReducedMotion();

  if (partners.length === 0) return null;

  return (
    <SectionReveal stagger className="mt-12 flex flex-col items-center">
      {/* Slim brand divider */}
      <RevealItem>
        <span className="bg-brand-gradient mb-6 block h-0.5 w-16 rounded-full" />
      </RevealItem>

      {/* Eyebrow */}
      <RevealItem>
        <p className="text-slate/60 font-[family-name:var(--font-heading)] text-xs font-semibold tracking-widest uppercase">
          {t.home.partners.title}
        </p>
      </RevealItem>

      {/* Partner items */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {partners.map((partner) => {
          const name = locale === "ha" ? partner.nameHa : partner.name;
          return (
            <RevealItem key={partner.name}>
              <PartnerItem
                name={name}
                logo={partner.logo}
                url={partner.url}
                reduced={reduced}
              />
            </RevealItem>
          );
        })}
      </div>
    </SectionReveal>
  );
}

function PartnerItem({
  name,
  logo,
  url,
  reduced,
}: {
  name: string;
  logo: string | null;
  url: string | null;
  reduced: boolean | null;
}) {
  const hover = reduced ? undefined : { y: -3 };

  const inner = logo ? (
    <motion.div
      whileHover={reduced ? undefined : { scale: 1.05 }}
      className="flex items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
    >
      <Image src={logo} alt={name} width={160} height={56} className="h-12 w-auto" />
    </motion.div>
  ) : (
    <motion.div
      whileHover={hover}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="border-line bg-surface rounded-pill hover:border-kore flex items-center gap-3 border px-6 py-3 shadow-[0_6px_20px_-14px_rgba(20,48,74,0.35)] transition-colors"
    >
      <span className="bg-kore-tint text-kore-700 dark:text-kore flex h-9 w-9 items-center justify-center rounded-full">
        <Award size={18} />
      </span>
      <span className="text-ink font-[family-name:var(--font-heading)] text-[15px] font-semibold">
        {name}
      </span>
    </motion.div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {inner}
      </a>
    );
  }
  return inner;
}
