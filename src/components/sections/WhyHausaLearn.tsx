"use client";

import type { ComponentType } from "react";
import type { IconProps } from "react-feather";
import { MessageCircle, Zap, Unlock, Globe } from "react-feather";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

type FeatherIcon = ComponentType<IconProps>;
type Accent = "kore" | "shudi";

export function WhyHausaLearn() {
  const t = useT();
  const p = t.home.why.pillars;

  const pillars: {
    icon: FeatherIcon;
    title: string;
    body: string;
    accent: Accent;
  }[] = [
    { icon: MessageCircle, title: p.languageTitle, body: p.languageBody, accent: "kore" },
    { icon: Zap, title: p.practicalTitle, body: p.practicalBody, accent: "shudi" },
    { icon: Unlock, title: p.accessibleTitle, body: p.accessibleBody, accent: "kore" },
    { icon: Globe, title: p.rootedTitle, body: p.rootedBody, accent: "shudi" },
  ];

  return (
    <Section id="why">
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.home.why.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.home.why.subtitle}</p>
        </SectionReveal>
      </div>

      <SectionReveal
        stagger
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pillars.map(({ icon: Icon, title, body, accent }, i) => (
          <RevealItem key={i}>
            <Card accent={accent} className="h-full">
              <span
                className={
                  accent === "kore"
                    ? "bg-kore-tint text-kore-700 dark:text-kore mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                    : "bg-shudi-tint text-shudi-700 dark:text-shudi mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                }
              >
                <Icon size={24} />
              </span>
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="text-slate text-sm leading-relaxed">{body}</p>
            </Card>
          </RevealItem>
        ))}
      </SectionReveal>
    </Section>
  );
}
