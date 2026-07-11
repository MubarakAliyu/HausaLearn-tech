import { Hero } from "@/components/sections/Hero";
import { FeaturedVideo } from "@/components/sections/FeaturedVideo";
import { ModulesPreview } from "@/components/sections/ModulesPreview";
import { WhyHausaLearn } from "@/components/sections/WhyHausaLearn";
import { Audience } from "@/components/sections/Audience";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Home page — composes every section in order. Each section is its own client
 * component; the anchors (#home, #about, #videos, #contact) power the navbar.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedVideo />
      <ModulesPreview />
      <WhyHausaLearn />
      <Audience />
      <StatsStrip />
      <CtaBand />
      <AboutSection />
      <VideoGallery />
      <ContactSection />
    </>
  );
}
