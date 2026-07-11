"use client";

import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/motion/CountUp";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { Partners } from "@/components/sections/Partners";
import { useT } from "@/i18n/LanguageProvider";
import { videos, getModules } from "@/data/videos";

export function StatsStrip() {
  const t = useT();
  const lessonCount = videos.length;
  const moduleCount = getModules().length;

  return (
    <section className="bg-surface border-line border-y py-12">
      <Container>
        <SectionReveal
          stagger
          staggerDelay={0.1}
          className="grid grid-cols-3 gap-4 text-center"
        >
          <RevealItem>
            <div className="text-gradient text-4xl font-extrabold sm:text-5xl">
              <CountUp to={lessonCount} />
            </div>
            <p className="text-slate mt-2 text-sm font-semibold tracking-wide uppercase">
              {t.home.stats.lessons}
            </p>
          </RevealItem>
          <RevealItem>
            <div className="text-gradient text-4xl font-extrabold sm:text-5xl">
              <CountUp to={moduleCount} />
            </div>
            <p className="text-slate mt-2 text-sm font-semibold tracking-wide uppercase">
              {t.home.stats.modules}
            </p>
          </RevealItem>
          <RevealItem>
            <div className="text-gradient text-4xl font-extrabold sm:text-5xl">
              {t.home.stats.languageValue}
            </div>
            <p className="text-slate mt-2 text-sm font-semibold tracking-wide uppercase">
              {t.home.stats.language}
            </p>
          </RevealItem>
        </SectionReveal>

        <Partners />
      </Container>
    </section>
  );
}
