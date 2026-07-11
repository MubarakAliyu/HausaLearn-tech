import type { Metadata, Viewport } from "next";
import "./globals.css";
import { montserrat, inter } from "./fonts";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider, themeNoFlashScript } from "@/components/theme/ThemeProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { cn } from "@/lib/cn";

const SITE_NAME = "HausaLearn Tech";
const SITE_DESCRIPTION =
  "Digital skills education in the Hausa language — practical, high-quality lessons in your mother tongue, so language is never a barrier to opportunity.";
// TODO: set to the real production domain before launch.
const SITE_URL = "https://hausalearn.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HausaLearn Tech — Koyi Fasahar Zamani a Saukake",
    template: "%s — HausaLearn Tech",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/brand/hausalearn-mark.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "HausaLearn Tech — Koyi Fasahar Zamani a Saukake",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en",
    images: [
      {
        url: "/brand/hausalearn-mark.png",
        width: 512,
        height: 512,
        alt: "HausaLearn Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HausaLearn Tech — Koyi Fasahar Zamani a Saukake",
    description: SITE_DESCRIPTION,
    images: ["/brand/hausalearn-mark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#35608C",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/hausalearn-mark.png`,
  description: SITE_DESCRIPTION,
  email: "saratubsalihu@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sokoto",
    addressCountry: "NG",
  },
  areaServed: "Hausa-speaking learners",
  sameAs: ["https://www.youtube.com/@hausalearntech"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(montserrat.variable, inter.variable, "h-full")}
      suppressHydrationWarning
    >
      <body className="bg-surface text-slate flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
