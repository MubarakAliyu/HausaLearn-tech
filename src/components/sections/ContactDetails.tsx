"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle, Youtube, MapPin } from "react-feather";
import { useT } from "@/i18n/LanguageProvider";
import { site, mailto, whatsapp } from "@/data/site";

export function ContactDetails() {
  const t = useT();
  const reduced = useReducedMotion();

  const items = [
    { icon: Mail, label: t.contact.details.email, value: site.email, href: mailto() },
    {
      icon: MessageCircle,
      label: t.contact.details.whatsapp,
      value: site.whatsappDisplay,
      href: whatsapp(t.contact.whatsappIntro),
    },
    {
      icon: Youtube,
      label: t.contact.details.youtube,
      value: "@hausalearntech",
      href: site.youtubeChannel,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-ink text-lg font-bold">{t.contact.details.title}</h3>
      {items.map(({ icon: Icon, label, value, href }, i) => (
        <motion.a
          key={i}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          whileHover={reduced ? undefined : { x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="group border-line bg-surface hover:border-kore/50 flex items-center gap-4 rounded-lg border p-4 shadow-[var(--shadow-card)] transition-colors"
        >
          <span className="bg-kore-tint text-kore-700 dark:text-kore group-hover:bg-kore flex h-11 w-11 items-center justify-center rounded-full transition-colors group-hover:text-white">
            <Icon size={20} />
          </span>
          <span className="flex flex-col">
            <span className="text-slate text-xs font-semibold tracking-wide uppercase">
              {label}
            </span>
            <span className="text-ink font-semibold">{value}</span>
          </span>
        </motion.a>
      ))}

      {/* Location (static) */}
      <div className="border-line bg-surface flex items-center gap-4 rounded-lg border p-4">
        <span className="bg-shudi-tint text-shudi-700 dark:text-shudi flex h-11 w-11 items-center justify-center rounded-full">
          <MapPin size={20} />
        </span>
        <span className="flex flex-col">
          <span className="text-slate text-xs font-semibold tracking-wide uppercase">
            {t.contact.details.location}
          </span>
          <span className="text-ink font-semibold">{site.location}</span>
        </span>
      </div>

      <p className="text-gradient mt-2 font-[family-name:var(--font-heading)] text-lg font-bold">
        {t.brand.tagline}
      </p>
    </div>
  );
}
