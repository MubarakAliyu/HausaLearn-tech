"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

export function AboutIntro() {
  const t = useT();

  return (
    <Section id="about" alt>
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — copy */}
        <SectionReveal className="flex flex-col items-start gap-5">
          <Pill variant="shudi">{t.about.eyebrow}</Pill>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.about.title}</GradientText>
          </h2>
          <p className="text-slate max-w-xl text-lg leading-relaxed">
            {t.about.intro}
          </p>
        </SectionReveal>

        {/* Right — brand plate */}
        <SectionReveal className="flex justify-center lg:justify-end">
          <div className="border-line relative rounded-[28px] border bg-white p-8 shadow-[var(--shadow-card)]">
            <Image
              src="/brand/hausalearn-logo-stacked.svg"
              alt="HausaLearn Tech"
              width={900}
              height={620}
              className="h-auto w-64"
            />
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}
