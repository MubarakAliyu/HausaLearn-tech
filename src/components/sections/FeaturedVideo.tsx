"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { LiteYouTube } from "@/components/media/LiteYouTube";
import { useT, useLocale } from "@/i18n/LanguageProvider";
import { videos } from "@/data/videos";

/** The lesson highlighted on the home page (default: "Minene Computer?"). */
const FEATURED_ID = "GIAlXO8PblI";

export function FeaturedVideo() {
  const t = useT();
  const { locale } = useLocale();
  const reduced = useReducedMotion();

  const video =
    videos.find((v) => v.youtubeId === FEATURED_ID) ?? videos[0];
  const title = locale === "ha" ? video.titleHa : video.title;
  const moduleLabel = locale === "ha" ? video.moduleHa : video.module;

  return (
    <Section id="featured">
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <p className="text-kore-700 dark:text-kore mb-3 text-sm font-bold tracking-wide uppercase">
            {t.featured.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.featured.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.featured.subtitle}</p>
        </SectionReveal>
      </div>

      <SectionReveal className="mx-auto mt-10 max-w-4xl">
        <motion.div
          whileHover={reduced ? undefined : { y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-brand-gradient rounded-[24px] p-[3px] shadow-[var(--shadow-card)]"
        >
          <div className="bg-surface overflow-hidden rounded-[21px] p-2">
            <LiteYouTube
              youtubeId={video.youtubeId}
              title={title}
              url={video.url}
              moduleLabel={moduleLabel}
              levelLabel={t.video.levels[video.level]}
              priority
            />
          </div>
        </motion.div>
      </SectionReveal>
    </Section>
  );
}
