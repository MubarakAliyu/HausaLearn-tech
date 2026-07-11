import { Montserrat, Inter } from "next/font/google";
// import localFont from "next/font/local";

/**
 * Heading font — Montserrat. Used for headings and all button/label text.
 * Exposed as CSS variable --font-montserrat, consumed by --font-heading.
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Body fallback — Inter. Served until licensed Google Sans files are added.
 * Exposed as CSS variable --font-inter, consumed by --font-body.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * DROP-IN: licensed Google Sans (see /public/fonts/README.md).
 * Uncomment this block once the woff2 files are in /public/fonts, then apply
 * `googleSans.variable` alongside the others in the root <html> className.
 * Keep the CSS variable name so nothing downstream needs to change.
 *
 * export const googleSans = localFont({
 *   variable: "--font-google-sans",
 *   display: "swap",
 *   src: [
 *     { path: "../../public/fonts/GoogleSans-Regular.woff2", weight: "400", style: "normal" },
 *     { path: "../../public/fonts/GoogleSans-Medium.woff2",  weight: "500", style: "normal" },
 *     { path: "../../public/fonts/GoogleSans-Bold.woff2",    weight: "700", style: "normal" },
 *   ],
 * });
 */
