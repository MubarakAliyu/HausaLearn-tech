import { AboutIntro } from "@/components/sections/AboutIntro";
import { MissionVision } from "@/components/sections/MissionVision";
import { Approach } from "@/components/sections/Approach";

/**
 * Shared About content — used both as the home #about section and on the
 * dedicated /about route, so there is a single source of truth.
 */
export function AboutSection() {
  return (
    <>
      <AboutIntro />
      <MissionVision />
      <Approach />
    </>
  );
}
