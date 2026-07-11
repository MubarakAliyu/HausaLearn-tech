/**
 * Central site + contact configuration.
 */
export const site = {
  name: "HausaLearn Tech",

  email: "saratubsalihu@gmail.com",
  whatsappNumber: "2348136459945", // international format, no "+" (for wa.me)
  whatsappDisplay: "+234 813 645 9945",
  // Public WhatsApp learning-group invite.
  whatsappGroup: "https://chat.whatsapp.com/KhoMvTqf8s7JrdtY76Gm5f",
  // TODO: client to confirm the real YouTube channel URL before launch.
  youtubeChannel: "https://www.youtube.com/@hausalearntech",
  location: "Sokoto, Nigeria",
  locationCity: "Sokoto",
  locationCountry: "NG",
} as const;

/** Build a mailto: link with optional subject/body. */
export function mailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
}

/** Build a wa.me link with an optional prefilled message. */
export function whatsapp(message?: string): string {
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsappNumber}${q}`;
}

/** Anchor targets used by nav + footer. */
export const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "videos", href: "#videos" },
  { key: "contact", href: "#contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
