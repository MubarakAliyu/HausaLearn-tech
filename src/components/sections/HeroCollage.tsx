"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { gallery } from "@/data/gallery";
import { useLocale, useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

interface TileProps {
  index: number;
  aspect: string;
  reduced: boolean | null;
  alt: string;
}

function Tile({ index, aspect, reduced, alt }: TileProps) {
  const photo = gallery[index % gallery.length];
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28, scale: reduced ? 1 : 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div
      variants={item}
      whileHover={reduced ? undefined : { y: -8, zIndex: 10 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn(
        "group border-line relative overflow-hidden rounded-2xl border shadow-[var(--shadow-card)]",
        aspect,
      )}
    >
      <Image
        src={photo.src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 50vw, 260px"
        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
      />
      {/* Hover gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* Hover caption */}
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-3 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {photo.caption}
      </div>
    </motion.div>
  );
}

/**
 * Animated photo collage of HausaLearn Tech field / outreach work.
 * Two masonry-style columns; each tile lifts and its image expands on hover.
 */
export function HeroCollage() {
  const reduced = useReducedMotion();
  const { locale } = useLocale();
  const t = useT();

  const alt = (i: number) =>
    locale === "ha" ? gallery[i].altHa : gallery[i].alt;

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-md"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <Tile index={0} aspect="aspect-[3/4]" reduced={reduced} alt={alt(0)} />
          <Tile index={2} aspect="aspect-[4/3]" reduced={reduced} alt={alt(2)} />
        </div>
        {/* Right column, offset down for a dynamic feel */}
        <div className="mt-8 flex flex-col gap-4">
          <Tile index={1} aspect="aspect-[4/3]" reduced={reduced} alt={alt(1)} />
          <Tile index={3} aspect="aspect-[3/4]" reduced={reduced} alt={alt(3)} />
        </div>
      </div>

      {/* Floating brand badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduced ? 0 : 0.6, duration: 0.5, ease: EASE }}
        className="bg-surface border-line absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border px-4 py-3 shadow-[var(--shadow-card)]"
      >
        <Image
          src="/brand/hausalearn-mark.svg"
          alt=""
          width={40}
          height={40}
          className="h-8 w-8"
        />
        <span className="text-ink font-[family-name:var(--font-heading)] text-sm font-bold whitespace-nowrap">
          {t.brand.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
