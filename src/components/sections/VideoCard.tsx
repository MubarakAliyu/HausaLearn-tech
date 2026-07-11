"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "react-feather";
import { LiteYouTube } from "@/components/media/LiteYouTube";
import { Pill } from "@/components/ui/Pill";
import { useT, useLocale } from "@/i18n/LanguageProvider";
import type { Video } from "@/data/videos";

export function VideoCard({ video }: { video: Video }) {
  const t = useT();
  const { locale } = useLocale();
  const reduced = useReducedMotion();

  const title = locale === "ha" ? video.titleHa : video.title;
  const moduleLabel = locale === "ha" ? video.moduleHa : video.module;

  return (
    <motion.div
      layout
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-brand-gradient rounded-[18px] p-px shadow-[var(--shadow-card)]"
    >
      <div className="bg-surface flex h-full flex-col overflow-hidden rounded-[17px]">
        <LiteYouTube
          youtubeId={video.youtubeId}
          title={title}
          url={video.url}
          overlay={false}
          className="rounded-none"
        />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-wrap gap-2">
            <Pill variant="kore">{moduleLabel}</Pill>
            <Pill variant="shudi">{t.video.levels[video.level]}</Pill>
          </div>
          <h3 className="text-ink text-lg font-bold">{title}</h3>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-shudi mt-auto inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
          >
            <ExternalLink size={15} />
            {t.video.watchOnYoutube}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
