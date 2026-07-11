# Body font — Google Sans drop-in

The body typeface is **Google Sans**. It is **not** distributed on Google Fonts, so
this project ships with **Inter** (loaded via `next/font/google`) as the served
fallback. The CSS body stack already prefers Google Sans:

```
"Google Sans", "Product Sans", var(--font-inter), "Inter", system-ui, sans-serif
```

## To drop in licensed Google Sans files (no refactor needed)

1. Place the licensed font files here, e.g.:
   - `GoogleSans-Regular.woff2`
   - `GoogleSans-Medium.woff2`
   - `GoogleSans-Bold.woff2`

2. In `src/app/fonts.ts`, uncomment the `next/font/local` block and remove (or keep
   as a fallback) the Inter loader. Keep the exported CSS variable named
   `--font-body` so nothing downstream changes.

3. That's it — the `@theme` `--font-body` stack in `globals.css` already points at
   Google Sans first; the local files simply become available.

> The heading font (Montserrat) is loaded from Google Fonts and needs no license drop-in.
