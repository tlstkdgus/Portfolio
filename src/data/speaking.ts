export interface Talk {
  title: string;
  titleEn: string;
  date: string;
  venue: string;
  venueEn: string;
  slidesUrl?: string;
  videoUrl?: string;
  highlight?: boolean;
}

export interface Community {
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  period: string;
  periodEn: string;
  active: boolean;
}

export const talks: Talk[] = [
  {
    title: "프론트엔드 개발 & 기획 입문 교육 (HTML, CSS, JS, React, Figma)",
    titleEn: "Intro to Frontend Dev & Planning (HTML, CSS, JS, React, Figma)",
    date: "2025.03.",
    venue: "풍생고등학교 코딩 교육 봉사",
    venueEn: "Coding Education Volunteer @ Pungsaeng High School",
    highlight: true,
  },
  {
    title: "멋쟁이사자처럼 13기 프론트엔드·기획 세션 기획 및 진행",
    titleEn: "Likelion 13th Cohort — Frontend & Planning Session Lead",
    date: "2025.01.",
    venue: "한국외국어대학교 멋쟁이사자처럼 13기",
    venueEn: "Likelion at HUFS — 13th Cohort",
    highlight: true,
  },
  {
    title: "ARtliving: AR을 활용한 가구 추천 플랫폼 발표",
    titleEn: "ARtliving: AR-Based Furniture Recommendation Platform Pitch",
    date: "2025.06.",
    venue: "2025 HUFS H-UP 진로탐색학점제",
    venueEn: "2025 HUFS H-UP Career Exploration Program",
  },
  {
    title: "dotori: 시각장애인을 위한 점자 교육 플랫폼 IR 피칭",
    titleEn: "dotori: Braille Education Platform for the Visually Impaired — IR Pitch",
    date: "2025.06.",
    venue: "2025 한국외국어대학교 창업캠프",
    venueEn: "2025 HUFS Startup Camp",
  },
  {
    title: "NeuroSight: AI 기반 마취 안전 보조 시스템 발표",
    titleEn: "NeuroSight: AI-Powered Anesthesia Safety Assistant — Pitch",
    date: "2025.07.",
    venue: "GRAFFITI 2025: AI Startup",
    venueEn: "GRAFFITI 2025: AI Startup (KAIST ICISTS)",
  },
];

export const communities: Community[] = [
  {
    role: "운영진",
    roleEn: "Staff Organizer",
    organization: "한국외국어대학교 멋쟁이사자처럼 13기",
    organizationEn: "Likelion at HUFS — 13th Cohort",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    active: false,
  },
  {
    role: "코딩 교육 봉사",
    roleEn: "Coding Education Volunteer",
    organization: "풍생고등학교",
    organizationEn: "Pungsaeng High School",
    period: "2025.03. ~ 현재",
    periodEn: "Mar 2025 — Present",
    active: true,
  },
  {
    role: "프론트엔드 트랙 수료",
    roleEn: "Frontend Track Member",
    organization: "한국외국어대학교 멋쟁이사자처럼 12기",
    organizationEn: "Likelion at HUFS — 12th Cohort",
    period: "2024.01. ~ 2024.12.",
    periodEn: "Jan 2024 — Dec 2024",
    active: false,
  },
];
