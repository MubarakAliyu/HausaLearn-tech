"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Youtube, ArrowRight, MapPin } from "react-feather";
import { Container } from "@/components/ui/Container";
import { useT } from "@/i18n/LanguageProvider";
import { navLinks } from "@/data/site";
import { site, mailto, whatsapp } from "@/data/site";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, label: t.footer.email, href: mailto() },
    { icon: MessageCircle, label: t.footer.whatsapp, href: whatsapp() },
    { icon: Youtube, label: t.footer.youtube, href: site.youtubeChannel },
  ];

  return (
    <footer className="bg-footer text-white/80">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-lg bg-white p-4 shadow-lg">
              <Image
                src="/brand/hausalearn-logo-stacked.svg"
                alt="HausaLearn Tech"
                width={900}
                height={620}
                className="h-24 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {t.footer.about}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
              <MapPin size={16} />
              {site.location}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.quickLinks}>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="inline-block text-white/70 transition-colors hover:text-white"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Modules */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">
              {t.footer.modules}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#videos"
                  className="inline-block text-white/70 transition-colors hover:text-white"
                >
                  {t.footer.moduleComputerBasics}
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="inline-block text-white/70 transition-colors hover:text-white"
                >
                  {t.footer.moduleApplicationPackage}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect + newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">
              {t.footer.connect}
            </h3>
            <ul className="mb-6 space-y-3 text-sm">
              {socials.map(({ icon: Icon, label, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    className="group inline-flex items-center gap-3 text-white/70 hover:text-white"
                  >
                    <span className="bg-white/10 text-white rounded-md flex h-9 w-9 items-center justify-center transition-colors group-hover:bg-kore">
                      <Icon size={17} />
                    </span>
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Newsletter — styled only, non-functional */}
            <p className="text-sm font-semibold text-white">{t.footer.newsletterTitle}</p>
            <p className="mb-3 text-xs text-white/60">{t.footer.newsletterSubtitle}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                aria-label={t.footer.newsletterPlaceholder}
                placeholder={t.footer.newsletterPlaceholder}
                className="rounded-md min-w-0 flex-1 border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kore"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t.footer.newsletterCta}
                className="bg-brand-gradient rounded-md inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center text-white"
              >
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p className="font-[family-name:var(--font-heading)] font-semibold text-white/75">
            {t.brand.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
