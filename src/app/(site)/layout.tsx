import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
