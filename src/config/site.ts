export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",

  author: {
    name: { ko: "신상현", en: "Sanghyeon Shin" },
    title: { ko: "PM/PO 지망생", en: "Aspiring PM/PO" },
    email: "tlstkdgus9@naver.com",
  },

  social: {
    github: "https://github.com/tlstkdgus",
    linkedin: "",
    blog: "",
  },

  nav: [
    "about",
    "experience",
    "career-highlights",
    "speaking",
    "certified",
    "projects",
    "contact",
  ] as const,

  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: true,
    certified: true,
    projects: true,
    contact: true,
  },

  seo: {
    titleTemplate: "%s | 신상현",
    defaultTitle: "신상현 | Aspiring PM/PO",
    description:
      "PM/PO를 목표로 다양한 프로젝트를 기획·개발하며 성장 중인 신상현의 포트폴리오입니다.",
    keywords: ["포트폴리오", "PM", "PO", "프론트엔드", "기획", "신상현"],
  },

  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];
