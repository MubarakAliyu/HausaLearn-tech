"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { VideoCard } from "@/components/sections/VideoCard";
import { useT, useLocale } from "@/i18n/LanguageProvider";
import { getModules } from "@/data/videos";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

export function VideoGallery() {
  const t = useT();
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const modules = getModules();

  const [active, setActive] = useState<string>("all");

  const filters = [
    { key: "all", label: t.videosPage.all },
    ...modules.map((m) => ({
      key: m.module,
      label: locale === "ha" ? m.moduleHa : m.module,
    })),
  ];

  const visibleGroups =
    active === "all" ? modules : modules.filter((m) => m.module === active);

  return (
    <Section id="videos">
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.videosPage.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.videosPage.subtitle}</p>
        </SectionReveal>
      </div>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              className={cn(
                "rounded-pill relative overflow-hidden border px-5 py-2 text-sm font-semibold",
                isActive
                  ? "border-transparent text-white"
                  : "border-line bg-surface text-slate hover:border-kore/50 hover:text-ink",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="videos-filter-pill"
                  className="bg-brand-gradient-strong rounded-pill absolute inset-0"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 34 }
                  }
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid — remounts on filter change and fades in (no exit-wait). */}
      <div className="mt-12">
        <motion.div
          key={active}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="space-y-12"
        >
          {visibleGroups.map((group) => (
            <div key={group.module}>
              {active === "all" && (
                <h3 className="text-ink mb-5 text-xl font-bold">
                  {locale === "ha" ? group.moduleHa : group.module}
                </h3>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
