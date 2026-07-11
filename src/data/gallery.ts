export interface GalleryPhoto {
  id: string;
  src: string;
  /** Portrait vs landscape — used for masonry sizing. */
  orientation: "portrait" | "landscape";
  alt: string;
  altHa: string;
  caption: string;
  captionHa: string;
}

/**
 * Field / outreach photos from HausaLearn Tech school visits.
 * Consumed by the gallery in Batch 6. Captions flagged for HA review.
 */
export const gallery: GalleryPhoto[] = [
  {
    id: "outreach-1",
    src: "/gallery/outreach-1.jpeg",
    orientation: "portrait",
    alt: "HausaLearn Tech team members in branded apparel during a school outreach visit",
    altHa: "Membobin HausaLearn Tech sanye da tufafin alama a lokacin ziyarar makaranta", // TODO: HA review
    caption: "Meeting learners on the ground",
    captionHa: "Haɗuwa da ɗalibai a fagen aiki", // TODO: HA review
  },
  {
    id: "outreach-2",
    src: "/gallery/outreach-2.jpeg",
    orientation: "landscape",
    alt: "HausaLearn Tech team with school staff outside the Vice Principal's office",
    altHa: "Tawagar HausaLearn Tech tare da ma'aikatan makaranta a gaban ofishin Mataimakin Shugaba", // TODO: HA review
    caption: "Partnering with schools",
    captionHa: "Haɗin gwiwa da makarantu", // TODO: HA review
  },
  {
    id: "outreach-3",
    src: "/gallery/outreach-3.jpeg",
    orientation: "landscape",
    alt: "HausaLearn Tech representatives standing with educators during a campus visit",
    altHa: "Wakilan HausaLearn Tech tare da malamai a lokacin ziyarar makaranta", // TODO: HA review
    caption: "Bringing digital skills to the community",
    captionHa: "Kawo ƙwarewar dijital ga al'umma", // TODO: HA review
  },
  {
    id: "outreach-4",
    src: "/gallery/outreach-4.jpeg",
    orientation: "portrait",
    alt: "Two HausaLearn Tech team members in branded shirt and cap at a school",
    altHa: "Membobin HausaLearn Tech biyu sanye da riga da hula mai alama a makaranta", // TODO: HA review
    caption: "A team rooted in the community",
    captionHa: "Tawagar da ta samo asali daga al'umma", // TODO: HA review
  },
  {
    id: "outreach-5",
    src: "/gallery/outreach-5.jpeg",
    orientation: "portrait",
    alt: "A HausaLearn Tech team member holding up a branded HausaLearn Tech t-shirt",
    altHa: "Wata membar HausaLearn Tech tana ɗauke da rigar HausaLearn Tech mai alama", // TODO: HA review
    caption: "Wearing the mission with pride",
    captionHa: "Sanye da manufa cikin alfahari", // TODO: HA review
  },
];
