/**
 * English dictionary (default locale).
 * `ha.ts` MUST mirror this exact key shape.
 */
export const en = {
  brand: {
    name: "HausaLearn Tech",
    tagline: "Koyi Fasahar Zamani a Saukake",
    taglineGloss: "Learn Modern Technology, Made Simple",
  },
  nav: {
    home: "Home",
    about: "About",
    videos: "Videos",
    contact: "Contact",
    cta: "Start Learning",
  },
  toggle: {
    label: "Change language",
    en: "EN",
    ha: "HA",
  },
  hero: {
    eyebrow: "Digital skills in Hausa",
    headingLead: "Digital skills, taught",
    headingHighlight: "in your language",
    subheading:
      "Koyi Fasahar Zamani a Saukake — practical technology lessons in your mother tongue, so language is never a barrier to opportunity.",
    ctaSecondary: "Watch Videos",
    scrollCue: "Scroll to explore",
  },
  featured: {
    eyebrow: "Featured lesson",
    title: "Start where it all begins",
    subtitle:
      "Your very first lesson: understanding what a computer really is — explained simply, in Hausa.",
  },
  home: {
    modules: {
      title: "What you'll learn",
      subtitle:
        "Two focused modules that take you from first principles to practical, everyday skills.",
      viewLessons: "View lessons",
      lessonsLabel: "lessons",
    },
    why: {
      title: "Why HausaLearn",
      subtitle: "Learning built around how you actually learn best.",
      pillars: {
        languageTitle: "Language-first learning",
        languageBody: "Every lesson taught in clear, natural Hausa — nothing lost in translation.",
        practicalTitle: "Practical & applied",
        practicalBody: "Skills you can use the moment the video ends.",
        accessibleTitle: "Accessible & affordable",
        accessibleBody: "Free lessons on YouTube, open to every learner.",
        rootedTitle: "Locally rooted, globally relevant",
        rootedBody: "Grounded in your world, ready for the digital economy.",
      },
    },
    audience: {
      title: "Who it's for",
      subtitle: "Whoever you are — if you speak Hausa, these lessons are for you.",
      secondary: "Secondary students",
      university: "University students",
      civilServants: "Civil servants",
      entrepreneurs: "Entrepreneurs",
      graduates: "Graduates & job seekers",
    },
    stats: {
      lessons: "Lessons",
      modules: "Modules",
      language: "Language",
      languageValue: "Hausa",
    },
    partners: {
      title: "In partnership with",
    },
    cta: {
      title: "Ready to start learning?",
      subtitle: "Jump into your first lesson in Hausa — no sign-up, no barriers.",
      primary: "Watch Videos",
      secondary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About HausaLearn",
    title: "Digital education in a language you truly understand",
    intro:
      "HausaLearn Tech is a digital skills education platform that delivers quality learning in the Hausa language. Language should never be a barrier to opportunity. Whether a secondary school learner, university student, civil servant, entrepreneur, or graduate, HausaLearn brings digital education in a language you truly understand.",
    missionLabel: "Our Mission",
    mission:
      "To make digital skills education accessible to every Hausa-speaking learner by delivering practical, high-quality training in their mother tongue.",
    visionLabel: "Our Vision",
    vision:
      "A future where every Hausa-speaking student and professional can confidently participate in the digital economy, regardless of their English proficiency.",
    approach: {
      title: "How we teach",
      subtitle: "A simple path from watching to doing to mastering.",
      step1Title: "Watch in Hausa",
      step1Body: "Clear, practical lessons explained in your mother tongue.",
      step2Title: "Practice the skill",
      step2Body: "Follow along and try each step on your own device.",
      step3Title: "Build confidence",
      step3Body: "Apply what you've learned in school, work, and business.",
    },
    audience: {
      title: "Who we teach",
      subtitle: "Real people, real goals — learning digital skills that matter to them.",
      secondaryCtx: "Building a strong foundation for exams and beyond.",
      universityCtx: "Sharpening skills for coursework, projects, and research.",
      civilServantsCtx: "Working faster and smarter with everyday office tools.",
      entrepreneursCtx: "Growing a business with digital tools and presence.",
      graduatesCtx: "Standing out in the job market with practical know-how.",
    },
  },
  videosPage: {
    title: "Video Lessons",
    subtitle:
      "Free, practical lessons in Hausa — pick a module and start watching.",
    all: "All",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Let's talk",
    subtitle:
      "Questions, partnerships, or feedback — send us a message and we'll reply on WhatsApp.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "How can we help?",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent — thank you!",
      error: "Couldn't send. Please try again or email us directly.",
      mailtoFallback: "Or send an email instead",
      errorRequired: "This field is required.",
      errorEmail: "Please enter a valid email address.",
    },
    details: {
      title: "Reach us directly",
      email: "Email",
      whatsapp: "WhatsApp",
      youtube: "YouTube",
      location: "Location",
    },
    whatsappIntro: "Hello HausaLearn Tech, I'd like to know more about your lessons.",
  },
  video: {
    watchOnYoutube: "Watch on YouTube",
    play: "Play video",
    loading: "Loading video…",
    levels: {
      Beginner: "Beginner",
      Intermediate: "Intermediate",
      Advanced: "Advanced",
    },
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    scrollToTop: "Back to top",
    logoHome: "HausaLearn Tech — go to home",
    primaryNav: "Primary",
    toggleTheme: "Toggle light / dark theme",
    whatsappGroup: "Join our WhatsApp learning group",
  },
  footer: {
    about:
      "Digital skills education in the Hausa language — so language is never a barrier to opportunity.",
    quickLinks: "Quick Links",
    modules: "Modules",
    moduleComputerBasics: "Computer Basics",
    moduleApplicationPackage: "Application Package",
    connect: "Connect",
    email: "Email",
    whatsapp: "WhatsApp",
    youtube: "YouTube",
    newsletterTitle: "Stay in the loop",
    newsletterSubtitle: "New lessons in Hausa, straight to your inbox.",
    newsletterPlaceholder: "Your email address",
    newsletterCta: "Subscribe",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
