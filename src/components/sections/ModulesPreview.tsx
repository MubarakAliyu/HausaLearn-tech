"use client";

import type { ComponentType } from "react";
import { Monitor, Layers, Shield, ArrowRight, CheckCircle } from "react-feather";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionReveal, RevealItem } from "@/components/motion/SectionReveal";
import { useT, useLocale } from "@/i18n/LanguageProvider";
import { getModules } from "@/data/videos";
import type { IconProps } from "react-feather";

type FeatherIcon = ComponentType<IconProps>;

/** Icon + accent per module, keyed by the English module name. */
const MODULE_META: Record<string, { icon: FeatherIcon; accent: "kore" | "shudi" }> = {
  "Computer Basics": { icon: Monitor, accent: "kore" },
  "Application Package": { icon: Layers, accent: "shudi" },
  "Cyber Security": { icon: Shield, accent: "kore" },
};

export function ModulesPreview() {
  const t = useT();
  const { locale } = useLocale();
  const modules = getModules();

  return (
    <Section id="modules" alt>
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>{t.home.modules.title}</GradientText>
          </h2>
          <p className="text-slate mt-4 text-lg">{t.home.modules.subtitle}</p>
        </SectionReveal>
      </div>

      <SectionReveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const meta = MODULE_META[mod.module] ?? {
            icon: Monitor,
            accent: "kore" as const,
          };
          const Icon = meta.icon;
          const name = locale === "ha" ? mod.moduleHa : mod.module;

          return (
            <RevealItem key={mod.module}>
              <Card accent={meta.accent} className="flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <span
                    className={
                      meta.accent === "kore"
                        ? "bg-kore-tint text-kore-700 dark:text-kore flex h-12 w-12 items-center justify-center rounded-md"
                        : "bg-shudi-tint text-shudi-700 dark:text-shudi flex h-12 w-12 items-center justify-center rounded-md"
                    }
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <Pill variant={meta.accent === "kore" ? "kore" : "shudi"}>
                      {mod.videos.length} {t.home.modules.lessonsLabel}
                    </Pill>
                  </div>
                </div>

                <ul className="mt-6 mb-8 space-y-3">
                  {mod.videos.map((v) => (
                    <li key={v.id} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={18}
                        className={
                          meta.accent === "kore" ? "text-kore mt-0.5" : "text-shudi mt-0.5"
                        }
                      />
                      <span className="text-slate">
                        {locale === "ha" ? v.titleHa : v.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    href="#videos"
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    {t.home.modules.viewLessons}
                  </Button>
                </div>
              </Card>
            </RevealItem>
          );
        })}
      </SectionReveal>
    </Section>
  );
}
