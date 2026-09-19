export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-tlstkdgus.vercel.app",

  author: {
    name: { ko: "신상현", en: "Sanghyeon Shin" },
    title: {
      ko: "데이터로 문제를 정의하고, 직접 만들어 배포하는 IT 기획자",
      en: "IT planner who defines problems with data, then builds and ships",
    },
    email: "tlstkdgus9@naver.com",
  },

  social: {
    github: "https://github.com/tlstkdgus",
    linkedin: "https://www.linkedin.com/in/%EC%83%81%ED%98%84-%EC%8B%A0-83267a337",
    blog: "https://velog.io/@tlstkdgus",
  },

  nav: [
    "about",
    "experience",
    "projects",
    "certified",
    "contact",
  ] as const,

  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    certified: true,
    projects: true,
    contact: true,
  },

  seo: {
    titleTemplate: "%s | 신상현",
    defaultTitle: "신상현 | 데이터로 문제를 정의하고, 직접 만들어 배포하는 IT 기획자",
    description:
      "멋쟁이사자처럼 커뮤니티 매니저 인턴으로 80개 대학 2,000명+ 연합 해커톤을 운영하고 운영 도구 3종을 직접 만든 IT 기획자 신상현의 포트폴리오입니다. 서비스 15개+ 기획·개발, 교내외 수상 11회.",
    keywords: [
      "포트폴리오",
      "IT 기획",
      "PM",
      "PO",
      "프론트엔드 개발",
      "신상현",
      "SSAFY",
      "신상현 포트폴리오"
    ],
  },
  // Google Search Console 등록 후 메타 태그의 content 값을 여기에 입력
  // 등록 방법: https://search.google.com/search-console → 속성 추가 → HTML 태그 방식
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
};

export type NavKey = (typeof siteConfig.nav)[number];
