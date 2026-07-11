"use client";

import { notFound } from "next/navigation";
import { ArrowRight, PlayCircle, Download, Cpu, Monitor } from "react-feather";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  SectionReveal,
  RevealItem,
} from "@/components/motion/SectionReveal";

/**
 * Dev-only kitchen sink to review every UI primitive and Button variant.
 * Hidden (404) in production builds.
 */
export default function KitchenSinkPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="py-10">
      <Container>
        <h1 className="mb-2 text-3xl font-extrabold">
          Kitchen Sink — <GradientText>UI Primitives</GradientText>
        </h1>
        <p className="text-slate mb-10">
          Dev-only review of tokens, colors, and components.
        </p>
      </Container>

      {/* Color tokens */}
      <Section alt>
        <h2 className="mb-6 text-xl font-bold">Color tokens</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {[
            ["kore", "bg-kore"],
            ["kore-600", "bg-kore-600"],
            ["kore-700", "bg-kore-700"],
            ["kore-tint", "bg-kore-tint"],
            ["shudi", "bg-shudi"],
            ["shudi-600", "bg-shudi-600"],
            ["shudi-700", "bg-shudi-700"],
            ["shudi-tint", "bg-shudi-tint"],
            ["ink", "bg-ink"],
            ["slate", "bg-slate"],
            ["surface-2", "bg-surface-2"],
            ["line", "bg-line"],
          ].map(([name, bg]) => (
            <div key={name} className="text-center">
              <div className={`${bg} border-line h-16 w-full rounded-md border`} />
              <span className="text-slate mt-1 block text-xs">{name}</span>
            </div>
          ))}
        </div>
        <div className="bg-brand-gradient mt-4 flex h-16 items-center justify-center rounded-md text-sm font-semibold text-white">
          .bg-brand-gradient
        </div>
      </Section>

      {/* Typography */}
      <Section>
        <h2 className="mb-6 text-xl font-bold">Typography</h2>
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold">Heading 1 — Montserrat 800</h1>
          <h2 className="text-3xl font-bold">Heading 2 — Montserrat 700</h2>
          <h3 className="text-xl font-bold">Heading 3</h3>
          <p className="max-w-2xl text-lg">
            Body copy set in the body stack (Google Sans → Inter fallback). Language
            should never be a barrier to opportunity.
          </p>
          <p className="text-2xl font-extrabold">
            <GradientText>GradientText clipped to the brand gradient</GradientText>
          </p>
        </div>
      </Section>

      {/* Pills */}
      <Section alt>
        <h2 className="mb-6 text-xl font-bold">Pills</h2>
        <div className="flex flex-wrap gap-3">
          <Pill variant="kore">Computer Basics</Pill>
          <Pill variant="shudi">Application Package</Pill>
          <Pill variant="ink">Beginner</Pill>
          <Pill variant="outline">All lessons</Pill>
          <Pill variant="kore" icon={<Cpu size={14} />}>
            With icon
          </Pill>
        </div>
      </Section>

      {/* Buttons */}
      <Section>
        <h2 className="mb-6 text-xl font-bold">Buttons</h2>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Start Learning</Button>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button rightIcon={<ArrowRight size={18} />}>Trailing icon</Button>
            <Button variant="outline" leftIcon={<PlayCircle size={18} />}>
              Watch Videos
            </Button>
            <Button variant="solid" leftIcon={<Download size={18} />}>
              Download
            </Button>
            <Button href="https://youtu.be/GIAlXO8PblI" target="_blank" variant="ghost">
              As a link
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </Section>

      {/* Cards + reveal */}
      <Section alt>
        <h2 className="mb-6 text-xl font-bold">Cards (hover to lift) + staggered reveal</h2>
        <SectionReveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Monitor />, title: "Computer Basics", accent: "kore" as const },
            { icon: <Cpu />, title: "Application Package", accent: "shudi" as const },
            { icon: <PlayCircle />, title: "Video Lessons", accent: "kore" as const },
          ].map((c) => (
            <RevealItem key={c.title}>
              <Card accent={c.accent}>
                <div
                  className={
                    c.accent === "kore"
                      ? "bg-kore-tint text-kore-700 mb-4 inline-flex rounded-md p-3"
                      : "bg-shudi-tint text-shudi-700 mb-4 inline-flex rounded-md p-3"
                  }
                >
                  {c.icon}
                </div>
                <h3 className="mb-1 text-lg font-bold">{c.title}</h3>
                <p className="text-slate text-sm">
                  A rounded card with a soft shadow and a hover lift that shifts the
                  border to the brand tint.
                </p>
              </Card>
            </RevealItem>
          ))}
        </SectionReveal>
      </Section>
    </div>
  );
}
