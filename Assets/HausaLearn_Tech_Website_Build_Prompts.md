# HausaLearn Tech — Website Build Prompt Pack (Claude Code)

**Product:** HausaLearn Tech marketing + course-discovery website
**Type:** Multi-section marketing site (Home, About, Videos/Gallery, Contact)
**Language:** English default, live EN / HA toggle (instant, full-page)
**Prepared by:** Starnova Labs

---

## How to use this file

Paste each block into Claude Code **in order**, one batch at a time. Wait for a clean build and confirm the deliverable before moving to the next batch. Do not skip the Shared Reference — every batch assumes it.

- **Master Prompt** — scaffolds the project, locks the design system, fonts, i18n, and folder structure.
- **Batch 1 → 7** — build the components and sections on top of the locked foundation.

Confirmation gate between every batch: `npm run build` must pass and the running dev server must render with no console errors before continuing.

---

## SHARED REFERENCE (applies to every batch — keep locked)

### Tech stack (do not deviate)
- **Next.js 15** (App Router, TypeScript, `src/` directory)
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`)
- **Framer Motion** for all animation
- **react-feather** for all icons (no other icon library)
- **next/font** for Montserrat; self-hosted Google Sans (with fallback) for body
- Client-side i18n via a React context + JSON dictionaries (no runtime machine translation)
- No CMS, no database — content lives in typed local data files

### Fonts (locked)
- **Headings + all button/label text:** `Montserrat` (700 / 800), loaded via `next/font/google`.
- **Body text:** `Google Sans`. Google Sans is **not** on Google Fonts. Serve licensed Google Sans files from `/public/fonts` via `next/font/local` if available; otherwise the served fallback is **Inter** loaded from `next/font/google`. Keep the CSS variable named `--font-body` and the stack `"Google Sans","Product Sans","Inter",system-ui,sans-serif` so licensed files can drop in later with no refactor.
- Expose both as CSS variables: `--font-heading` (Montserrat) and `--font-body`.

### Design system — color tokens (softened "neat" palette from the new logo)
Register these in Tailwind `@theme`. Colors are intentionally desaturated (not the sharp original greens/blues).

| Token | Hex | Use |
|---|---|---|
| `kore` (green) | `#35A07E` | primary brand, primary buttons, accents |
| `kore-600` | `#2F8468` | hover / pressed green |
| `kore-700` | `#2B7259` | deep green |
| `kore-tint` | `#E7F3EE` | green surfaces / chips |
| `shudi` (blue) | `#35608C` | secondary brand, links, tech accents |
| `shudi-600` | `#2B4E73` | hover / pressed blue |
| `shudi-700` | `#24425F` | deep blue |
| `shudi-tint` | `#E9F0F5` | blue surfaces / chips |
| `ink` | `#14304A` | headings, dark text, footer bg |
| `slate` | `#46525E` | body text |
| `surface` | `#FFFFFF` | page background |
| `surface-2` | `#F6F8FA` | alternating section background |
| `line` | `#E4EAF0` | borders, dividers |

- **Brand gradient:** `linear-gradient(120deg, #35A07E 0%, #35608C 100%)` — expose as a `.bg-brand-gradient` utility and a `.text-gradient` (green→blue) utility.
- **Radius:** cards `20px`, inputs/buttons `14px`, pills `999px`.
- **Shadows:** soft, low-contrast only. `--shadow-card: 0 10px 30px -12px rgba(20,48,74,0.18)`.
- **Rules:** no hardcoded hex anywhere in components — use tokens only. No sharp/neon colors. Generous whitespace.

### Animation conventions (locked)
- Use one shared `SectionReveal` wrapper (Framer Motion `whileInView`) for entrance animations: `opacity 0→1`, `y 24→0`, `duration 0.6`, `ease [0.22,1,0.36,1]`, `viewport={{ once: true, margin: "-80px" }}`. Support staggered children.
- Buttons: hover `scale 1.03` + shadow lift; tap `scale 0.97`.
- Cards: hover lift (`y -6`) + shadow + subtle border-color shift.
- Nav: transparent at top → solid white + blur + shadow after ~24px scroll.
- Global: a thin top **scroll-progress bar** in the brand gradient.
- **Always** wrap motion in `prefers-reduced-motion` handling (respect reduced motion; disable transforms, keep opacity).

### i18n architecture (locked)
- `LanguageProvider` (React context) holds `locale: "en" | "ha"`, defaults to `"en"`, persists to `localStorage("hlt-locale")`.
- All copy comes from `src/i18n/en.ts` and `src/i18n/ha.ts` (typed, identical key shape). A `useT()` hook returns the active dictionary. **No literal user-facing strings in components** — everything goes through keys.
- `<LanguageToggle />` is an animated `EN / HA` pill switch. Clicking it swaps the dictionary instantly (no route change, no reload) and animates the sliding thumb. Also set `<html lang>` accordingly.
- Seed Hausa where known; mark uncertain strings `// TODO: HA review` for the client to confirm.

### Content data (locked — real channel videos)
Store in `src/data/videos.ts` as typed objects. Group by module.

**Module: Computer Basics ( Tushen kwamfuta )**
1. `Minene Computer?` — YouTube ID `GIAlXO8PblI` — https://youtu.be/GIAlXO8PblI
2. `Hardware da Software` — YouTube ID `tM3hrRmcUTA` — https://youtu.be/tM3hrRmcUTA

**Module: Application Package ( Fakitin manhaja )**
3. `Microsoft Word` — YouTube ID `bhnS4bSmp3Y` — https://youtu.be/bhnS4bSmp3Y
4. `Microsoft PowerPoint` — YouTube ID `IV4MCaYnB14` — https://youtu.be/IV4MCaYnB14

Each video object: `{ id, title, titleHa, module, moduleHa, youtubeId, url, level }`.
Thumbnail: use `https://i.ytimg.com/vi/{youtubeId}/hqdefault.jpg`.

### Brand copy (source of truth)
- **Tagline:** `Koyi Fasahar Zamani a Saukake` (EN gloss: "Learn Modern Technology, Made Simple")
- **About:** HausaLearn Tech is a digital skills education platform that delivers quality learning in the Hausa language. Language should never be a barrier to opportunity. Whether a secondary school learner, university student, civil servant, entrepreneur, or graduate, HausaLearn brings digital education in a language you truly understand.
- **Mission:** To make digital skills education accessible to every Hausa-speaking learner by delivering practical, high-quality training in their mother tongue.
- **Vision:** A future where every Hausa-speaking student and professional can confidently participate in the digital economy, regardless of their English proficiency.

### Logo assets
Place the provided files in `/public/brand/`: `hausalearn-mark.svg`, `hausalearn-logo-horizontal.svg`, `hausalearn-logo-stacked.svg`. Use the horizontal lockup in the navbar, the mark for the favicon, and the stacked lockup in the footer. Favicon/OG derive from the mark.

---

# MASTER PROMPT — Project scaffold, design system, i18n foundation

```
You are building the HausaLearn Tech website. This is the foundation batch. Do ONLY what is listed here, then stop and report.

STACK
- Scaffold a Next.js 15 app: TypeScript, App Router, ESLint, src/ directory, import alias "@/*". Do NOT use the Pages router.
- Install and configure: Tailwind CSS v4, framer-motion, react-feather, clsx, tailwind-merge.

FONTS
- Load Montserrat (weights 500,600,700,800) via next/font/google -> CSS variable --font-heading.
- Load Inter (weights 400,500,600) via next/font/google as the served body fallback -> CSS variable --font-body.
- In globals.css, set the body font stack to: "Google Sans","Product Sans", var(--font-body), system-ui, sans-serif. Create /public/fonts and add a commented next/font/local block ready for licensed Google Sans files. Leave a README note in /public/fonts explaining the drop-in.

DESIGN SYSTEM (Tailwind v4, CSS-first via @theme in globals.css)
Register these exact tokens as colors:
  kore #35A07E, kore-600 #2F8468, kore-700 #2B7259, kore-tint #E7F3EE,
  shudi #35608C, shudi-600 #2B4E73, shudi-700 #24425F, shudi-tint #E9F0F5,
  ink #14304A, slate #46525E, surface #FFFFFF, surface-2 #F6F8FA, line #E4EAF0.
Add:
  - font families: --font-heading (Montserrat), --font-body.
  - radius scale: sm 10px, md 14px, lg 20px, pill 999px.
  - shadow: --shadow-card: 0 10px 30px -12px rgba(20,48,74,0.18).
  - utilities: .bg-brand-gradient (linear-gradient(120deg,#35A07E,#35608C)),
    .text-gradient (same gradient clipped to text).
Base styles: body uses --font-body, color slate, bg surface; all headings use --font-heading, color ink, font-weight 700+; links use shudi. No hardcoded hex in components after this — tokens only.

I18N FOUNDATION
- Create src/i18n/en.ts and src/i18n/ha.ts exporting a typed dictionary with the SAME key shape. Seed keys for: nav (home, about, videos, contact), a11y labels, and the toggle. Include brand tagline in both (HA: "Koyi Fasahar Zamani a Saukake").
- Create src/i18n/LanguageProvider.tsx: React context, locale "en"|"ha", default "en", persisted to localStorage key "hlt-locale", also sets document.documentElement.lang. Export useT() (returns active dictionary) and useLocale() (returns {locale,setLocale,toggle}).
- Wrap the app in LanguageProvider in the root layout.

MOTION FOUNDATION
- Create src/components/motion/SectionReveal.tsx: a client component using framer-motion whileInView (opacity 0->1, y 24->0, duration 0.6, ease [0.22,1,0.36,1], viewport once, margin -80px), with an optional `stagger` prop for children. Respect prefers-reduced-motion (no transform when reduced).
- Create src/components/motion/ScrollProgress.tsx: a fixed top progress bar (height 3px) filled with the brand gradient, driven by framer-motion useScroll. Mount it in the root layout.

STRUCTURE
Create this folder layout (empty placeholder files where needed):
  src/app/(site)/layout.tsx, src/app/(site)/page.tsx
  src/components/layout/{Navbar,Footer}.tsx
  src/components/ui/{Button,Container,Section,Card,GradientText,Pill}.tsx
  src/components/i18n/LanguageToggle.tsx
  src/components/sections/  (empty for now)
  src/data/videos.ts
  src/lib/cn.ts (clsx + tailwind-merge helper)
Add /public/brand/ and reference the three logo SVGs there (files will be supplied).

ROOT LAYOUT
- Global metadata (title "HausaLearn Tech — Koyi Fasahar Zamani a Saukake", description from mission). Smooth scroll (scroll-behavior smooth, but disabled under reduced motion). Mount ScrollProgress. Provide LanguageProvider.

DELIVERABLE
A running app (npm run dev) showing a minimal placeholder home page that reads its heading from the i18n dictionary, with the design tokens active and the scroll-progress bar visible. `npm run build` passes with zero errors. Report the folder tree and confirm tokens + i18n are wired. Do not build any sections yet.
```

---

# BATCH 1 — UI primitives + data layer

```
Build the reusable UI primitives and the video data layer. Everything must use design tokens only (no hardcoded hex) and pull text via i18n keys where user-facing.

cn helper
- src/lib/cn.ts: export cn(...) using clsx + tailwind-merge.

src/data/videos.ts
- Export a typed Video[] with these four items (module-grouped), each: { id, title, titleHa, module, moduleHa, youtubeId, url, level }.
  1 { title:"What is a computer?", titleHa:"Minene Computer?", module:"Computer Basics", moduleHa:"Tushen Kwamfuta", youtubeId:"GIAlXO8PblI", level:"Beginner" }
  2 { title:"Hardware and Software", titleHa:"Hardware da Software", module:"Computer Basics", moduleHa:"Tushen Kwamfuta", youtubeId:"tM3hrRmcUTA", level:"Beginner" }
  3 { title:"Microsoft Word", titleHa:"Microsoft Word", module:"Application Package", moduleHa:"Fakitin Manhaja", youtubeId:"bhnS4bSmp3Y", level:"Beginner" }
  4 { title:"Microsoft PowerPoint", titleHa:"Microsoft PowerPoint", module:"Application Package", moduleHa:"Fakitin Manhaja", youtubeId:"IV4MCaYnB14", level:"Beginner" }
- url = `https://youtu.be/{youtubeId}`; add a helper thumb(youtubeId) => `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`.
- Add next.config image remotePatterns for i.ytimg.com and img.youtube.com.

Components (all with sensible props + TS types):
- Container: max-width 1200px, responsive horizontal padding.
- Section: vertical rhythm wrapper, optional `alt` prop to use surface-2 background, optional id for anchor scroll.
- GradientText: renders children with the .text-gradient utility.
- Pill: small rounded label (level/module chips) with kore-tint or shudi-tint variants.
- Card: rounded-lg, border line, shadow-card, hover lift (y -6, shadow grow, border shifts to kore/shudi tint) via framer-motion. Respect reduced motion.
- Button: variants primary (bg-brand-gradient, white text), solid (kore), outline (shudi border), ghost. Sizes sm/md/lg. Montserrat 700 label. Hover scale 1.03 + shadow, tap scale 0.97. Optional leading/trailing react-feather icon. Renders as <a> or <button>.

DELIVERABLE
A /_kitchen-sink dev-only page (or a temporary render on home) showing every primitive and Button variant so the styling can be reviewed. Build passes. Report.
```

---

# BATCH 2 — Navbar, Footer, and the EN/HA Language Toggle

```
Build the global chrome and the language switcher. Use the horizontal logo lockup from /public/brand/hausalearn-logo-horizontal.svg.

LanguageToggle (src/components/i18n/LanguageToggle.tsx)
- An animated pill switch showing "EN | HA". The active side is filled with the brand gradient; a framer-motion sliding thumb animates between sides on click.
- Uses useLocale().toggle. Fully keyboard accessible (role=switch, aria-checked, focus ring). Instant swap, no reload. Respect reduced motion (fade instead of slide).

Navbar (src/components/layout/Navbar.tsx) — client
- Sticky, full-width. Transparent over the hero at top; after ~24px scroll becomes white with backdrop blur, bottom border (line), and shadow — animate the transition.
- Left: horizontal logo (links to top). Right: anchor links Home / About / Videos / Contact (labels from i18n), a primary Button CTA "Start Learning" (i18n), and the LanguageToggle.
- Active-section highlight using an IntersectionObserver on section ids; active link gets kore underline that animates (layoutId).
- Mobile (<lg): hamburger opens a full-height animated slide-in menu (framer-motion) with the same links, CTA, and toggle. Lock body scroll when open; close on link click / Esc.

Footer (src/components/layout/Footer.tsx)
- ink background, light text. Columns: stacked logo lockup + tagline; quick links (anchors); "Modules" (Computer Basics, Application Package); contact/socials (email, WhatsApp, YouTube — react-feather icons, YouTube linking to the channel).
- Bottom bar: copyright + "Koyi Fasahar Zamani a Saukake". All copy via i18n. Newsletter/email row optional (non-functional input styled only).

Wire Navbar + Footer into (site)/layout.tsx.

DELIVERABLE
Navbar scroll behavior, mobile menu, footer, and a WORKING EN/HA toggle that instantly translates all nav/footer strings. Build passes. Report.
```

---

# BATCH 3 — Home: Hero + featured video

```
Build the top of the home page. Add all new strings to en.ts and ha.ts (seed Hausa, mark uncertain with // TODO: HA review).

Hero section (src/components/sections/Hero.tsx) — full-viewport-ish, id="home"
- Left column: an animated eyebrow Pill ("Digital skills in Hausa"), a large heading using GradientText on the key phrase, subheading (tagline + one-line value prop), two Buttons ("Start Learning" primary, "Watch Videos" outline scrolling to #videos). Entrance: staggered SectionReveal.
- Right column: a clean visual — the logo mark in a soft rounded card floating with a gentle infinite y-bob (framer-motion, disabled under reduced motion), plus 2–3 soft blurred gradient blobs (kore/shudi, low opacity) behind it. No sharp colors.
- Background: subtle surface -> surface-2. Add a small animated scroll-cue chevron at the bottom.

FeaturedVideo (src/components/sections/FeaturedVideo.tsx)
- Show ONE highlighted lesson on the home page (default: "Minene Computer?", id GIAlXO8PblI) using the LiteYouTube facade pattern (build it now as src/components/media/LiteYouTube.tsx):
    * Render the hqdefault thumbnail (next/image) with a gradient overlay, module Pill, title (localized), and an animated play button (pulse ring on hover).
    * On click, swap the facade for the real iframe (autoplay=1). Lazy — no iframe until clicked (keeps the page fast).
    * Include a "Watch on YouTube" text link to the youtu.be url.
- Frame the video card with a soft brand-gradient border and hover lift. Reveal on scroll.

Compose Hero + FeaturedVideo into home page.tsx (in order).

DELIVERABLE
Animated hero + one working lazy-loaded featured video, fully localized. Build passes. Report.
```

---

# BATCH 4 — Home: Modules preview, Why HausaLearn, Audience, CTA band

```
Build the middle of the home page. All copy via i18n (seed HA).

ModulesPreview (id anchor optional) — "What you'll learn"
- Two module cards: "Computer Basics / Tushen Kwamfuta" and "Application Package / Fakitin Manhaja". Each card: react-feather icon, module name (localized), lesson count derived from videos.ts, a short list of lesson titles (localized), and a "View lessons" button scrolling to #videos. Cards hover-lift; grid reveals with stagger.

WhyHausaLearn — value pillars
- Four pillar cards from the value proposition: Language-first learning; Practical & applied; Accessible & affordable; Locally rooted, globally relevant. Each: react-feather icon in a kore/shudi tinted circle, title, one-line body. Alternating tint accents. Stagger reveal.

Audience — "Who it's for"
- A responsive row of chips/cards: Secondary students, University students, Civil servants, Entrepreneurs, Graduates & job seekers (localized). Simple, animated on scroll.

Optional lightweight stats strip
- Small animated count-up figures (e.g. Lessons, Modules, Language = Hausa). Derive counts from data where possible. Count-up respects reduced motion (shows final value instantly).

CTA band
- Full-width bg-brand-gradient section: heading + subtext + primary Button (inverted style on gradient) linking to #videos / #contact. Reveal on scroll.

Compose these into the home page after FeaturedVideo, using Section `alt` to alternate backgrounds.

DELIVERABLE
A complete, scroll-animated home page. Build passes. Report.
```

---

# BATCH 5 — About section

```
Build the About area as an in-page section (id="about") reachable from the nav, plus a dedicated route /about that reuses the same components.

AboutIntro
- Two-column: left heading + the About paragraph (localized, source copy in Shared Reference); right the stacked logo lockup or mark in a soft card. Reveal on scroll.

MissionVision
- Two contrasting cards side by side: Mission (kore accent) and Vision (shudi accent), each with an icon, label, and the localized statement. Hover lift. Stagger.

Story / Approach (short)
- A brief "How we teach" block: 3 steps (Watch in Hausa -> Practice the skill -> Build confidence), shown as an animated horizontal timeline on desktop / vertical on mobile, connected by an animated gradient line that draws in on scroll.

Audience detail
- Reuse/extend the audience component with one-line context per group (from the personas: students, civil servants, entrepreneurs, graduates).

All strings localized (seed HA, // TODO: HA review where unsure). Ensure /about and the home #about section share components so there is no duplication.

DELIVERABLE
About content available both as a home section and at /about, fully animated and localized. Build passes. Report.
```

---

# BATCH 6 — Videos / Gallery section (all four embeds)

```
Build the Videos section (id="videos") and a dedicated /videos route sharing the same grid.

VideoGallery
- Section header: title "Video Lessons" / localized, subtitle, and animated filter tabs to filter by module: All / Computer Basics / Application Package. Active tab underline animates (layoutId). Filtering re-lays the grid with framer-motion layout animations.
- Grid of VideoCard for all four lessons from videos.ts. Each VideoCard:
    * Uses the LiteYouTube facade (thumbnail + animated play button, click-to-load iframe, no iframe until clicked).
    * Shows module Pill + level Pill, localized title, and a "Watch on YouTube" link to the youtu.be url (opens new tab).
    * Clean rounded-lg card, soft gradient border on hover, hover lift, reveal-on-scroll with stagger.
- Group visually by module with localized module subheadings (Tushen Kwamfuta / Fakitin Manhaja) when filter = All.
- Responsive: 1 col mobile, 2 col tablet, 2–3 col desktop. Keep it airy.

Performance: only the clicked video mounts an iframe; others stay as lightweight thumbnails. Add loading states and a graceful fallback if a thumbnail 404s (use a brand-gradient placeholder).

DELIVERABLE
A polished, filterable video gallery with all four lessons as lazy embeds, available as a home section and at /videos, fully localized. Build passes. Report.
```

---

# BATCH 7 — Contact section + global polish, i18n completion, SEO, QA

```
Finish the site: contact, polish, full translation, SEO, accessibility, and a QA pass.

Contact (id="contact") + /contact route
- Two-column: left = animated contact form (Name, Email, Message) built WITHOUT a native <form> submit reload — controlled inputs, client-side validation, animated focus states (label float / border color to kore), an animated submit Button with loading -> success micro-interaction (framer-motion). On submit, since there is no backend, either (a) open a prefilled mailto:, or (b) open a prefilled WhatsApp wa.me link — implement WhatsApp as primary with mailto fallback. Show a localized success state.
- Right = contact details: email, WhatsApp, YouTube channel (react-feather icons, each an animated link), plus the tagline. Optional: a soft static map/illustration placeholder (no external map key).

Global polish
- Page/section transitions consistent; ensure every section uses SectionReveal.
- Verify the scroll-progress bar, sticky navbar states, active-link highlight, and mobile menu all behave.
- Add a subtle "back to top" floating button (appears after scroll, brand gradient, hover scale).
- Full prefers-reduced-motion audit: no essential content depends on motion; transforms disabled when reduced.

i18n completion
- Sweep the whole app: NO hardcoded user-facing strings remain — all in en.ts / ha.ts with identical keys. Complete the Hausa dictionary for every key; keep // TODO: HA review flags on any professional-copy items the client should verify. Confirm the EN/HA toggle instantly re-renders 100% of visible text and updates <html lang>.

SEO + assets
- Per-route metadata (title/description), Open Graph + Twitter card using the logo mark; favicon + apple-touch-icon derived from /public/brand/hausalearn-mark.svg; site.webmanifest with brand theme color #35608C. Add sensible sr-only headings and alt text. Basic JSON-LD Organization.

QA checklist to run and report against:
- npm run build passes, no console errors/warnings.
- Lighthouse: performance not harmed by videos (facades working), a11y ≥ 95.
- Responsive at 360 / 768 / 1024 / 1440.
- Keyboard: nav, toggle, tabs, form, back-to-top all reachable/operable.
- All four YouTube links open the correct videos; embeds play.
- EN/HA toggle verified on every section.

DELIVERABLE
A complete, polished, fully bilingual HausaLearn Tech website. Provide the final QA report and any remaining // TODO: HA review items for the client. Build passes.
```

---

## Notes for the client / reviewer

- **Hausa copy:** the prompts seed Hausa translations, but professional/marketing lines are flagged `// TODO: HA review` in code. Have Malama Saratu confirm the final Hausa wording before launch — this is authored translation (two locked dictionaries), not live machine translation, which is the reliable approach for a brand site.
- **Google Sans:** it is not distributed on Google Fonts. If you have a license, drop the files into `/public/fonts` and the pre-wired `next/font/local` block uses them; until then the served body font is Inter as the closest clean fallback, with the CSS stack already preferring Google Sans.
- **Colors:** the palette is the softened, less-bright version of the new logo (kore `#35A07E`, shudi `#35608C`, ink `#14304A`) — matched to the redesigned logo files delivered alongside this pack.
