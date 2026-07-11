import type { Metadata } from "next";
import { VideoGallery } from "@/components/sections/VideoGallery";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Free, practical digital-skills video lessons in Hausa — Computer Basics, Application Package, and Cyber Security.",
};

export default function VideosPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <VideoGallery />
    </div>
  );
}
