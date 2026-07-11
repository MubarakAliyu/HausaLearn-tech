export interface Partner {
  name: string;
  nameHa: string;
  /** Path under /public (e.g. "/brand/partners/foo.svg") once a logo is supplied. */
  logo: string | null;
  /** External link, if any. */
  url: string | null;
}

/**
 * Partner institutions. Seeded with one entry; add more here with no refactor —
 * the Partners strip renders a logo image when `logo` is set, else a branded chip.
 */
export const partners: Partner[] = [
  {
    name: "Argungu Emirate Secondary School",
    nameHa: "Sakandaren Masarautar Argungu",
    logo: null,
    url: null,
  },
];
