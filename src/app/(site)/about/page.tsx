import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceDetail } from "@/components/sections/AudienceDetail";

export const metadata: Metadata = {
  title: "About",
  description:
    "HausaLearn Tech delivers digital skills education in the Hausa language — so language is never a barrier to opportunity.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <AboutSection />
      <AudienceDetail />
    </div>
  );
}
