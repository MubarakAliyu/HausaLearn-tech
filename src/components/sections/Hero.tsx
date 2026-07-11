"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "react-feather";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { RevealItem, SectionReveal } from "@/components/motion/SectionReveal";
import { HeroCollage } from "@/components/sections/HeroCollage";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const t = useT();
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-b from-surface to-surface-2 pt-24 pb-16 lg:min-h-[calc(100vh-5rem)] lg:pt-28"
    >
      {/* Soft blurred brand blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-kore/20 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-shudi/20 absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl" />
        <div className="bg-kore/10 absolute -bottom-32 left-1/3 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left column */}
          <SectionReveal stagger className="flex flex-col items-start gap-6">
            <RevealItem>
              <Pill variant="kore">{t.hero.eyebrow}</Pill>
            </RevealItem>
            <RevealItem>
              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {t.hero.headingLead}{" "}
                <GradientText>{t.hero.headingHighlight}</GradientText>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-slate max-w-lg text-lg leading-relaxed">
                {t.hero.subheading}
              </p>
            </RevealItem>
            <RevealItem>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="#videos" size="lg" rightIcon={<ArrowRight size={18} />}>
                  {t.nav.cta}
                </Button>
                <Button
                  href="#videos"
                  size="lg"
                  variant="outline"
                  leftIcon={<PlayCircle size={18} />}
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </RevealItem>
          </SectionReveal>

          {/* Right column — animated photo collage */}
          <div className="relative pb-6 lg:pb-0">
            <HeroCollage />
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#featured"
        aria-label={t.hero.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-slate absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold sm:flex"
      >
        {t.hero.scrollCue}
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
