"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ExternalLink } from "react-feather";
import { thumb } from "@/data/videos";
import { useT } from "@/i18n/LanguageProvider";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";

interface LiteYouTubeProps {
  youtubeId: string;
  title: string;
  url: string;
  /** Localized module label shown as a chip. */
  moduleLabel?: string;
  /** Localized level label shown as a chip. */
  levelLabel?: string;
  className?: string;
  /** Prioritize the thumbnail (above-the-fold, e.g. featured). */
  priority?: boolean;
  /** Show the on-thumbnail chrome (pills, title, watch link). Default true. */
  overlay?: boolean;
}

/**
 * Lightweight YouTube facade. Renders only the thumbnail + play affordance
 * until clicked; mounts the real iframe (autoplay) on click. Keeps the page
 * fast (no iframe until requested). Falls back to a brand-gradient placeholder
 * if the thumbnail fails to load. Respects prefers-reduced-motion.
 */
export function LiteYouTube({
  youtubeId,
  title,
  url,
  moduleLabel,
  levelLabel,
  className,
  priority = false,
  overlay = true,
}: LiteYouTubeProps) {
  const t = useT();
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-lg bg-black",
        className,
      )}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${t.video.play}: ${title}`}
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* Thumbnail or gradient fallback */}
          {imgError ? (
            <div className="bg-brand-gradient absolute inset-0" />
          ) : (
            <Image
              src={thumb(youtubeId)}
              alt={title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}

          {/* Gradient overlay for legibility */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
              !overlay && "opacity-40",
            )}
          />

          {overlay && (
            <>
              {/* Chips */}
              {(moduleLabel || levelLabel) && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {moduleLabel && <Pill variant="kore">{moduleLabel}</Pill>}
                  {levelLabel && <Pill variant="shudi">{levelLabel}</Pill>}
                </div>
              )}

              {/* Title */}
              <h3 className="absolute right-4 bottom-4 left-4 text-left text-lg font-bold text-white drop-shadow sm:text-xl">
                {title}
              </h3>
            </>
          )}

          {/* Play button with hover pulse ring */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center">
              {!reduced && (
                <motion.span
                  aria-hidden
                  className="bg-surface/50 absolute h-16 w-16 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <motion.span
                whileHover={reduced ? undefined : { scale: 1.1 }}
                className="bg-brand-gradient relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[var(--shadow-card)]"
              >
                <Play size={26} className="ml-1 fill-white" />
              </motion.span>
            </span>
          </span>
        </button>
      )}

      {/* Watch on YouTube link */}
      {!playing && overlay && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill text-shudi-700 absolute top-4 right-4 z-10 hidden items-center gap-1.5 bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors hover:bg-white sm:inline-flex"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={13} />
          {t.video.watchOnYoutube}
        </a>
      )}
    </div>
  );
}
