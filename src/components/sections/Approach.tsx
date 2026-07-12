"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import type { IconProps } from "react-feather";
import { PlayCircle, Edit3, Award } from "react-feather";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

type FeatherIcon = ComponentType<IconProps>;
const EASE = [0.22, 1, 0.36, 1] as const;

export function Approach() {
  const t = useT();
  const a = t.about.approach;

  const steps: { icon: FeatherIcon; title: string; body: string }[] = [
    { icon: PlayCircle, title: a.step1Title, body: a.step1Body },
    { icon: Edit3, title: a.step2Title, body: a.step2Body },
    { icon: Award, title: a.step3Title, body: a.step3Body },
  ];

  return (
    <Section alt>
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{a.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{a.subtitle}</p>
        </SectionReveal>
      </div>

      {/* Desktop — horizontal timeline */}
      <div className="relative mt-14 hidden lg:block">
        {/* Animated gradient line connecting the node centers */}
        <div className="absolute top-8 right-[16.6%] left-[16.6%]">
          <motion.div
            className="bg-brand-gradient h-1 origin-left rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: EASE }}
          />
        </div>
        <SectionReveal stagger className="grid grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <RevealItem key={i}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-surface border-kore text-kore-700 dark:text-kore relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-[var(--shadow-card)]">
                  <Icon size={26} />
                  <span className="bg-brand-gradient-strong absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="text-slate mt-2 max-w-xs text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="relative mt-12 lg:hidden">
        <div className="absolute top-0 bottom-0 left-8 w-1">
          <motion.div
            className="bg-brand-gradient h-full w-full origin-top rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: EASE }}
          />
        </div>
        <SectionReveal stagger className="flex flex-col gap-8">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <RevealItem key={i}>
              <div className="flex items-start gap-5">
                <div className="bg-surface border-kore text-kore-700 dark:text-kore relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 shadow-[var(--shadow-card)]">
                  <Icon size={24} />
                  <span className="bg-brand-gradient-strong absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-slate mt-1 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </Section>
  );
}
