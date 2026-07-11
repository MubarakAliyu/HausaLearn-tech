export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Video {
  id: string;
  title: string;
  titleHa: string;
  module: string;
  moduleHa: string;
  youtubeId: string;
  url: string;
  level: Level;
}

/** Build a youtu.be share url from a video id. */
export const youtubeUrl = (youtubeId: string) =>
  `https://youtu.be/${youtubeId}`;

/** hqdefault thumbnail for a given video id. */
export const thumb = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

export interface ModuleGroup {
  module: string;
  moduleHa: string;
  videos: Video[];
}

/** Group videos by module, preserving first-seen order. */
export function getModules(): ModuleGroup[] {
  const groups: ModuleGroup[] = [];
  for (const video of videos) {
    let group = groups.find((g) => g.module === video.module);
    if (!group) {
      group = { module: video.module, moduleHa: video.moduleHa, videos: [] };
      groups.push(group);
    }
    group.videos.push(video);
  }
  return groups;
}

export const videos: Video[] = [
  {
    id: "computer-basics-1",
    title: "What is a computer?",
    titleHa: "Minene Computer?",
    module: "Computer Basics",
    moduleHa: "Tushen Kwamfuta",
    youtubeId: "GIAlXO8PblI",
    url: youtubeUrl("GIAlXO8PblI"),
    level: "Beginner",
  },
  {
    id: "computer-basics-2",
    title: "Hardware and Software",
    titleHa: "Hardware da Software",
    module: "Computer Basics",
    moduleHa: "Tushen Kwamfuta",
    youtubeId: "tM3hrRmcUTA",
    url: youtubeUrl("tM3hrRmcUTA"),
    level: "Beginner",
  },
  {
    id: "application-package-1",
    title: "Microsoft Word",
    titleHa: "Microsoft Word",
    module: "Application Package",
    moduleHa: "Fakitin Manhaja",
    youtubeId: "bhnS4bSmp3Y",
    url: youtubeUrl("bhnS4bSmp3Y"),
    level: "Beginner",
  },
  {
    id: "application-package-2",
    title: "Microsoft PowerPoint",
    titleHa: "Microsoft PowerPoint",
    module: "Application Package",
    moduleHa: "Fakitin Manhaja",
    youtubeId: "IV4MCaYnB14",
    url: youtubeUrl("IV4MCaYnB14"),
    level: "Beginner",
  },
  {
    id: "cybersecurity-1",
    title: "Introduction to Cyber Security",
    titleHa: "Darasi na Farko a Cyber Security",
    module: "Cyber Security",
    moduleHa: "Tsaron Yanar Gizo",
    youtubeId: "kf-oXZWNRhI",
    url: youtubeUrl("kf-oXZWNRhI"),
    level: "Beginner",
  },
];
