"use client";

import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { useT } from "@/i18n/LanguageProvider";

export function ContactSection() {
  const t = useT();

  return (
    <Section id="contact" alt>
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <Pill variant="kore" className="mb-4">
            {t.contact.eyebrow}
          </Pill>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.contact.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.contact.subtitle}</p>
        </SectionReveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionReveal>
          <div className="border-line bg-surface rounded-lg border p-6 shadow-[var(--shadow-card)] sm:p-8">
            <ContactForm />
          </div>
        </SectionReveal>
        <SectionReveal>
          <ContactDetails />
        </SectionReveal>
      </div>
    </Section>
  );
}
