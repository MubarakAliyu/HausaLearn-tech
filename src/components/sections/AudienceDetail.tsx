"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useAudienceGroups } from "@/components/sections/Audience";
import { useT } from "@/i18n/LanguageProvider";

/**
 * Detailed audience section for the About area — reuses the shared
 * useAudienceGroups() personas and pairs each with a one-line context.
 */
export function AudienceDetail() {
  const t = useT();
  const groups = useAudienceGroups();
  const a = t.about.audience;

  const contexts = [
    a.secondaryCtx,
    a.universityCtx,
    a.civilServantsCtx,
    a.entrepreneursCtx,
    a.graduatesCtx,
  ];

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{a.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{a.subtitle}</p>
        </SectionReveal>
      </div>

      <SectionReveal
        stagger
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {groups.map(({ icon: Icon, label }, i) => (
          <RevealItem key={label}>
            <Card className="flex h-full items-start gap-4">
              <span className="bg-kore-tint text-kore-700 dark:text-kore flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-ink font-bold">{label}</h3>
                <p className="text-slate mt-1 text-sm leading-relaxed">
                  {contexts[i]}
                </p>
              </div>
            </Card>
          </RevealItem>
        ))}
      </SectionReveal>
    </Section>
  );
}
