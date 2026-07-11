import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HausaLearn Tech — questions, partnerships, or feedback. We reply on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <ContactSection />
    </div>
  );
}
