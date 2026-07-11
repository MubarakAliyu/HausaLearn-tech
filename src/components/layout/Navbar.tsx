"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "react-feather";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useT } from "@/i18n/LanguageProvider";
import { navLinks, type NavKey } from "@/data/site";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const t = useT();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<NavKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Solidify the bar after a small scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlighting.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as NavKey);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll + Esc-to-close for the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[border-color,box-shadow] duration-300",
        // Mobile: always a solid surface bar.
        "bg-surface border-line",
        // Desktop: transparent over the hero, solidifies on scroll.
        solid
          ? "lg:bg-surface/80 lg:border-line lg:shadow-[0_8px_24px_-16px_rgba(20,48,74,0.28)]"
          : "lg:border-transparent lg:bg-transparent lg:shadow-none",
      )}
    >
      <Container>
        <nav
          aria-label={t.a11y.primaryNav}
          className="flex h-16 items-center justify-between gap-4 lg:h-20"
        >
          {/* Logo */}
          <a
            href="#home"
            aria-label={t.a11y.logoHome}
            className="shrink-0"
            onClick={() => setActive("home")}
          >
            <Image
              src="/brand/hausalearn-logo-horizontal.svg"
              alt="HausaLearn Tech"
              width={1180}
              height={320}
              priority
              className="h-9 w-auto lg:h-11 dark:brightness-0 dark:invert"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setActive(link.key)}
                  className="group relative px-4 py-2 text-sm font-semibold"
                >
                  <span
                    className={cn(
                      "relative inline-block transition-all duration-200 group-hover:-translate-y-0.5",
                      isActive ? "text-ink" : "text-slate group-hover:text-ink",
                    )}
                  >
                    {t.nav[link.key]}
                  </span>
                  {/* Hover underline (grows from left) */}
                  {!isActive && (
                    <span className="bg-kore/50 absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                  {/* Active underline (shared layout) */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="bg-kore absolute inset-x-3 bottom-1 h-0.5 rounded-full"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 480, damping: 34 }
                      }
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LanguageToggle />
            <Button href="#videos" size="sm">
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <LanguageToggle />
            <button
              type="button"
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="text-ink focus-visible:outline-shudi rounded-md inline-flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, rotate: -90 }}
                  animate={reduced ? { opacity: 1 } : { opacity: 1, rotate: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X /> : <Menu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </Container>
      </header>

      {/* Mobile slide-in menu — rendered outside <header> so `fixed` is
          viewport-relative (the header's backdrop-blur creates a containing block). */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              initial={reduced ? { opacity: 0 } : { x: "100%" }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface border-line fixed top-16 right-0 bottom-0 z-40 flex w-[82%] max-w-sm flex-col gap-1 border-l p-6 shadow-2xl lg:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduced ? 0 : 0.08 + i * 0.06, duration: 0.3 }}
                  onClick={() => {
                    setActive(link.key);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "rounded-md px-4 py-3 text-lg font-semibold transition-colors",
                    active === link.key
                      ? "bg-kore-tint text-kore-700 dark:text-kore"
                      : "text-ink hover:bg-surface-2",
                  )}
                >
                  {t.nav[link.key]}
                </motion.a>
              ))}
              <Button
                href="#videos"
                size="lg"
                fullWidth
                className="mt-4"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.cta}
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
