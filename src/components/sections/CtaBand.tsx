"use client";

import { ArrowRight } from "react-feather";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { useT } from "@/i18n/LanguageProvider";

export function CtaBand() {
  const t = useT();

  return (
    <section className="bg-brand-gradient relative overflow-hidden">
      {/* Soft decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <Container>
        <SectionReveal className="relative flex flex-col items-center gap-6 py-16 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.home.cta.title}
          </h2>
          <p className="max-w-xl text-lg text-white/90">{t.home.cta.subtitle}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="#videos"
              size="lg"
              className="bg-white text-kore-700 shadow-lg hover:bg-white/90"
              rightIcon={<ArrowRight size={18} />}
            >
              {t.home.cta.primary}
            </Button>
            <Button
              href="#contact"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              {t.home.cta.secondary}
            </Button>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
