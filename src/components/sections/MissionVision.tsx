"use client";

import { Target, Eye } from "react-feather";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

export function MissionVision() {
  const t = useT();

  return (
    <Section>
      <SectionReveal stagger className="grid gap-6 md:grid-cols-2">
        <RevealItem>
          <Card accent="kore" className="h-full">
            <span className="bg-kore-tint text-kore-700 dark:text-kore mb-5 flex h-14 w-14 items-center justify-center rounded-full">
              <Target size={24} />
            </span>
            <h3 className="text-kore-700 dark:text-kore mb-3 text-sm font-bold tracking-wide uppercase">
              {t.about.missionLabel}
            </h3>
            <p className="text-ink text-xl leading-relaxed font-medium">
              {t.about.mission}
            </p>
          </Card>
        </RevealItem>
        <RevealItem>
          <Card accent="shudi" className="h-full">
            <span className="bg-shudi-tint text-shudi-700 dark:text-shudi mb-5 flex h-14 w-14 items-center justify-center rounded-full">
              <Eye size={24} />
            </span>
            <h3 className="text-shudi-700 dark:text-shudi mb-3 text-sm font-bold tracking-wide uppercase">
              {t.about.visionLabel}
            </h3>
            <p className="text-ink text-xl leading-relaxed font-medium">
              {t.about.vision}
            </p>
          </Card>
        </RevealItem>
      </SectionReveal>
    </Section>
  );
}
