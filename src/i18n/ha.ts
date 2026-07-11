import type { Dictionary } from "./en";

/**
 * Hausa dictionary — MUST mirror the exact key shape of `en.ts`.
 * Marketing / professional copy flagged with // TODO: HA review
 * for the client (Malama Saratu) to confirm before launch.
 */
export const ha: Dictionary = {
  brand: {
    name: "HausaLearn Tech",
    tagline: "Koyi Fasahar Zamani a Saukake",
    taglineGloss: "Koyi Fasahar Zamani a Saukake",
  },
  nav: {
    home: "Gida",
    about: "Game da Mu",
    videos: "Bidiyoyi",
    contact: "Tuntuɓe Mu",
    cta: "Fara Koyo",
  },
  toggle: {
    label: "Canza harshe",
    en: "EN",
    ha: "HA",
  },
  hero: {
    eyebrow: "Ƙwarewar dijital cikin Hausa", // TODO: HA review
    headingLead: "Ƙwarewar dijital, ana koyarwa", // TODO: HA review
    headingHighlight: "cikin harshenka", // TODO: HA review
    subheading:
      "Koyi Fasahar Zamani a Saukake — darussan fasaha masu amfani cikin harshenka na uwa, don kada harshe ya zama cikas ga dama.", // TODO: HA review
    ctaSecondary: "Kalli Bidiyoyi",
    scrollCue: "Gungura don ƙarin bayani", // TODO: HA review
  },
  featured: {
    eyebrow: "Darasi na musamman", // TODO: HA review
    title: "Fara daga inda komai ke farawa", // TODO: HA review
    subtitle:
      "Darasinka na farko: fahimtar menene kwamfuta a haƙiƙa — an bayyana cikin sauƙi, da Hausa.", // TODO: HA review
  },
  home: {
    modules: {
      title: "Abin da za ka koya", // TODO: HA review
      subtitle:
        "Ɓangarori biyu masu mai da hankali waɗanda ke kai ka daga tushe zuwa ƙwarewar yau da kullum.", // TODO: HA review
      viewLessons: "Duba darussa", // TODO: HA review
      lessonsLabel: "darussa",
    },
    why: {
      title: "Me ya sa HausaLearn", // TODO: HA review
      subtitle: "Koyo da aka gina bisa yadda kake koyo da kyau.", // TODO: HA review
      pillars: {
        languageTitle: "Koyo da harshe a gaba", // TODO: HA review
        languageBody: "Ana koyar da kowane darasi cikin Hausa bayyananna — babu ɓacewar ma'ana.", // TODO: HA review
        practicalTitle: "Mai amfani da aiki", // TODO: HA review
        practicalBody: "Ƙwarewar da za ka iya amfani da ita nan take.", // TODO: HA review
        accessibleTitle: "Mai sauƙi da araha", // TODO: HA review
        accessibleBody: "Darussa kyauta a YouTube, a buɗe ga kowane mai koyo.", // TODO: HA review
        rootedTitle: "Asali na gida, dacewa a duniya", // TODO: HA review
        rootedBody: "An kafa shi cikin duniyarka, a shirye don tattalin arziƙin dijital.", // TODO: HA review
      },
    },
    audience: {
      title: "Ga wa aka yi shi", // TODO: HA review
      subtitle: "Ko wanene kai — idan kana jin Hausa, waɗannan darussa naka ne.", // TODO: HA review
      secondary: "Ɗaliban sakandare", // TODO: HA review
      university: "Ɗaliban jami'a", // TODO: HA review
      civilServants: "Ma'aikatan gwamnati", // TODO: HA review
      entrepreneurs: "'Yan kasuwa", // TODO: HA review
      graduates: "Waɗanda suka kammala & masu neman aiki", // TODO: HA review
    },
    stats: {
      lessons: "Darussa",
      modules: "Ɓangarori",
      language: "Harshe",
      languageValue: "Hausa",
    },
    partners: {
      title: "Cikin haɗin gwiwa da", // TODO: HA review
    },
    cta: {
      title: "A shirye kake ka fara koyo?", // TODO: HA review
      subtitle: "Shiga darasinka na farko cikin Hausa — babu rajista, babu shinge.", // TODO: HA review
      primary: "Kalli Bidiyoyi",
      secondary: "Tuntuɓe mu",
    },
  },
  about: {
    eyebrow: "Game da HausaLearn", // TODO: HA review
    title: "Ilimin dijital cikin harshen da ka fahimta sosai", // TODO: HA review
    intro:
      "HausaLearn Tech dandali ne na ilimin ƙwarewar dijital wanda ke isar da ingantaccen koyo cikin harshen Hausa. Bai kamata harshe ya zama cikas ga dama ba. Ko kai ɗalibin sakandare ne, ɗalibin jami'a, ma'aikacin gwamnati, ɗan kasuwa, ko wanda ya kammala, HausaLearn na kawo maka ilimin dijital cikin harshen da ka fahimta sosai.", // TODO: HA review
    missionLabel: "Manufarmu",
    mission:
      "Mu sanya ilimin ƙwarewar dijital ya kai ga kowane mai magana da Hausa ta hanyar isar da horo mai amfani, mai inganci cikin harshensa na uwa.", // TODO: HA review
    visionLabel: "Hangen Nesanmu", // TODO: HA review
    vision:
      "Makoma inda kowane ɗalibi da ƙwararren mai magana da Hausa zai iya shiga tattalin arziƙin dijital cikin ƙarfin gwiwa, ba tare da la'akari da ƙwarewar Turancinsa ba.", // TODO: HA review
    approach: {
      title: "Yadda muke koyarwa", // TODO: HA review
      subtitle: "Hanya mai sauƙi daga kallo zuwa aiki zuwa ƙwarewa.", // TODO: HA review
      step1Title: "Kalli da Hausa", // TODO: HA review
      step1Body: "Darussa bayyanannu, masu amfani, an bayyana cikin harshenka na uwa.", // TODO: HA review
      step2Title: "Yi aiki da ƙwarewar", // TODO: HA review
      step2Body: "Bi tare kuma gwada kowane mataki a na'urarka.", // TODO: HA review
      step3Title: "Gina ƙarfin gwiwa", // TODO: HA review
      step3Body: "Yi amfani da abin da ka koya a makaranta, aiki, da kasuwanci.", // TODO: HA review
    },
    audience: {
      title: "Wa muke koyarwa", // TODO: HA review
      subtitle: "Mutane na gaske, buri na gaske — koyon ƙwarewar dijital masu muhimmanci a gare su.", // TODO: HA review
      secondaryCtx: "Gina ingantaccen tushe don jarrabawa da abin da ke gaba.", // TODO: HA review
      universityCtx: "Ƙarfafa ƙwarewa don karatu, ayyuka, da bincike.", // TODO: HA review
      civilServantsCtx: "Yin aiki da sauri da hikima da kayan aikin ofis na yau da kullum.", // TODO: HA review
      entrepreneursCtx: "Haɓaka kasuwanci da kayan aikin dijital da kasancewa.", // TODO: HA review
      graduatesCtx: "Fitowa fili a kasuwar aiki da ƙwarewa mai amfani.", // TODO: HA review
    },
  },
  videosPage: {
    title: "Darussan Bidiyo", // TODO: HA review
    subtitle:
      "Darussa kyauta, masu amfani cikin Hausa — zaɓi ɓangare ka fara kallo.", // TODO: HA review
    all: "Duka",
  },
  contact: {
    eyebrow: "Tuntuɓe mu", // TODO: HA review
    title: "Bari mu yi magana", // TODO: HA review
    subtitle:
      "Tambayoyi, haɗin gwiwa, ko ra'ayi — aiko mana saƙo za mu amsa ta WhatsApp.", // TODO: HA review
    form: {
      name: "Suna",
      namePlaceholder: "Sunanka",
      email: "Imel",
      emailPlaceholder: "kai@misali.com",
      message: "Saƙo",
      messagePlaceholder: "Yaya za mu taimaka?", // TODO: HA review
      send: "Aika saƙo",
      sending: "Ana buɗe WhatsApp…", // TODO: HA review
      sent: "Na gode! Ci gaba a WhatsApp.", // TODO: HA review
      mailtoFallback: "Ko aika imel maimakon haka", // TODO: HA review
      errorRequired: "Ana buƙatar wannan filin.", // TODO: HA review
      errorEmail: "Da fatan shigar da ingantaccen adireshin imel.", // TODO: HA review
    },
    details: {
      title: "Tuntuɓe mu kai tsaye", // TODO: HA review
      email: "Imel",
      whatsapp: "WhatsApp",
      youtube: "YouTube",
      location: "Wuri", // TODO: HA review
    },
    whatsappIntro: "Sannu HausaLearn Tech, ina son ƙarin bayani game da darussanku.", // TODO: HA review
  },
  video: {
    watchOnYoutube: "Kalla a YouTube", // TODO: HA review
    play: "Kunna bidiyo",
    loading: "Ana loda bidiyo…", // TODO: HA review
    levels: {
      Beginner: "Mai Farawa", // TODO: HA review
      Intermediate: "Matsakaici", // TODO: HA review
      Advanced: "Babban Mataki", // TODO: HA review
    },
  },
  a11y: {
    skipToContent: "Tsallake zuwa abun ciki",
    openMenu: "Buɗe menu",
    closeMenu: "Rufe menu",
    scrollToTop: "Koma sama",
    logoHome: "HausaLearn Tech — koma gida",
    primaryNav: "Babban jerin abubuwa",
    toggleTheme: "Sauya jigo mai haske / duhu", // TODO: HA review
    whatsappGroup: "Shiga ƙungiyar koyo ta WhatsApp", // TODO: HA review
  },
  footer: {
    about:
      "Ilimin ƙwarewar dijital cikin harshen Hausa — don kada harshe ya zama cikas ga dama.", // TODO: HA review
    quickLinks: "Hanyoyin Gaggawa", // TODO: HA review
    modules: "Ɓangarorin Karatu",
    moduleComputerBasics: "Tushen Kwamfuta",
    moduleApplicationPackage: "Fakitin Manhaja",
    connect: "Tuntuɓe Mu",
    email: "Imel",
    whatsapp: "WhatsApp",
    youtube: "YouTube",
    newsletterTitle: "Kasance tare da mu", // TODO: HA review
    newsletterSubtitle: "Sabbin darussa cikin Hausa, kai tsaye zuwa akwatin saƙonninka.", // TODO: HA review
    newsletterPlaceholder: "Adireshin imel ɗinka",
    newsletterCta: "Biyan kuɗi", // TODO: HA review
    rights: "Duk haƙƙoƙi na kariya.", // TODO: HA review
  },
};
