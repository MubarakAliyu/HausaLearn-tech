"use client";

import type { ComponentType } from "react";
import type { IconProps } from "react-feather";
import { BookOpen, Award, Briefcase, TrendingUp, UserCheck } from "react-feather";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

type FeatherIcon = ComponentType<IconProps>;

export interface AudienceGroup {
  icon: FeatherIcon;
  label: string;
}

/** Shared list of audience personas (reused/extended by /about in Batch 5). */
export function useAudienceGroups(): AudienceGroup[] {
  const t = useT();
  const a = t.home.audience;
  return [
    { icon: BookOpen, label: a.secondary },
    { icon: Award, label: a.university },
    { icon: Briefcase, label: a.civilServants },
    { icon: TrendingUp, label: a.entrepreneurs },
    { icon: UserCheck, label: a.graduates },
  ];
}

export function Audience({ alt = true }: { alt?: boolean }) {
  const t = useT();
  const groups = useAudienceGroups();

  return (
    <Section id="audience" alt={alt}>
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.home.audience.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.home.audience.subtitle}</p>
        </SectionReveal>
      </div>

      <SectionReveal
        stagger
        staggerDelay={0.08}
        className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {groups.map(({ icon: Icon, label }, i) => (
          <RevealItem key={i}>
            <div className="border-line bg-surface rounded-pill hover:border-kore/40 flex items-center gap-2.5 border px-5 py-3 shadow-[var(--shadow-card)] transition-colors">
              <span className="text-kore">
                <Icon size={18} />
              </span>
              <span className="text-ink font-semibold">{label}</span>
            </div>
          </RevealItem>
        ))}
      </SectionReveal>
    </Section>
  );
}
