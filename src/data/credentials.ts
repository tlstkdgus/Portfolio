export interface Certification {
  name: string;
  nameEn: string;
  date: string;
  issuer: string;
  issuerEn: string;
  url?: string;
  highlight?: boolean;
  category: "security" | "kubernetes" | "general";
}

export interface Award {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  date: string;
  highlight?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "SQL 개발자 (SQLD)",
    nameEn: "SQL Developer (SQLD)",
    date: "2024.06.21",
    issuer: "한국데이터산업진흥원",
    issuerEn: "Korea Data Agency",
    highlight: true,
    category: "general",
  },
  {
    name: "데이터 분석 준전문가 (ADsP)",
    nameEn: "Associate Data Scientist (ADsP)",
    date: "2025.09.05",
    issuer: "한국데이터산업진흥원",
    issuerEn: "Korea Data Agency",
    highlight: true,
    category: "general",
  },
  {
    name: "OPIc IH",
    nameEn: "OPIc IH (English)",
    date: "2025.10.05",
    issuer: "ACTFL",
    issuerEn: "ACTFL",
    category: "general",
  },
  {
    name: "유통관리사 2급",
    nameEn: "Distribution Manager Level 2",
    date: "2023.06.13",
    issuer: "대한상공회의소",
    issuerEn: "Korea Chamber of Commerce and Industry",
    category: "general",
  },
  {
    name: "회계관리 2급",
    nameEn: "Accounting Manager Level 2",
    date: "2023.03.31",
    issuer: "삼일회계법인",
    issuerEn: "Samil PricewaterhouseCoopers",
    category: "general",
  },
  {
    name: "한국사능력검정시험 2급",
    nameEn: "Korean History Proficiency Test Level 2",
    date: "2023.04.28",
    issuer: "교육부 국사편찬위원회",
    issuerEn: "National Institute of Korean History",
    category: "general",
  },
];

export const awards: Award[] = [
  {
    title: "G-RISE X 경상대학 2025 창업 비즈니스 모델 경진대회 대상",
    titleEn: "Grand Prize — G-RISE X 2025 Startup Business Model Competition",
    issuer: "한국외국어대학교 경상대학",
    issuerEn: "HUFS College of Business",
    date: "2025.11.20",
    highlight: true,
  },
  {
    title: "2025 창업캠프 실전 IR 피칭 경진대회 최우수상",
    titleEn: "Grand Prize — 2025 HUFS Startup Camp IR Pitching",
    issuer: "한국외국어대학교 글로벌창업지원단",
    issuerEn: "HUFS Global Startup Support",
    date: "2025.06.25",
    highlight: true,
  },
  {
    title: "2025 HUFS H-UP 진로탐색학점제 진리상 [최우수상]",
    titleEn: "Grand Prize (Truth Award) — 2025 HUFS H-UP Career Exploration Program",
    issuer: "한국외국어대학교",
    issuerEn: "Hankuk University of Foreign Studies",
    date: "2025.06.21",
    highlight: true,
  },
  {
    title: "KIITI 아이디어/앱 콘테스트 우수상",
    titleEn: "Excellence Award — KIITI Idea/App Contest",
    issuer: "한국정보기술전략혁신학회",
    issuerEn: "Korea Institute of IT Strategy and Innovation",
    date: "2025.11.30",
  },
  {
    title: "한국핀테크지원센터 X 카카오뱅크 FIN:NECT 챌린지 장려상",
    titleEn: "Encouragement Award — FIN:NECT Challenge (Korea Fintech Center × Kakaobank)",
    issuer: "한국핀테크지원센터",
    issuerEn: "Korea Fintech Center",
    date: "2025.08.29",
  },
  {
    title: "2025 1학기 HUFStudy 최우수상",
    titleEn: "Grand Prize — 2025 HUFStudy (1st Semester)",
    issuer: "한국외국어대학교 교육혁신단",
    issuerEn: "HUFS Educational Innovation Institute",
    date: "2025.08.22",
  },
  {
    title: '"PICK YOUR IDEA" IR PITCHING 우수상',
    titleEn: 'Excellence Award — "PICK YOUR IDEA" IR Pitching',
    issuer: "서울 AI 허브 / MOVE",
    issuerEn: "Seoul AI Hub / MOVE",
    date: "2025.07.03",
  },
  {
    title: "2025 HUFS Start-up Platform 학생창업팀 선발대회 입선",
    titleEn: "Selection — 2025 HUFS Start-up Platform Student Startup Team Competition",
    issuer: "한국외국어대학교 글로벌 창업지원단",
    issuerEn: "HUFS Global Startup Support",
    date: "2025.03.06",
  },
  {
    title: "제 7회 한국외국어대학교 경상대 X SPRINT 학술제 우수상",
    titleEn: "Excellence Award — 7th HUFS Business School × SPRINT Academic Festival",
    issuer: "한국외국어대학교 경상대학",
    issuerEn: "HUFS College of Business",
    date: "2024.11.14",
  },
  {
    title: "제 1회 G-RISE 창업경진대회 최우수상",
    titleEn: "Grand Prize — 1st G-RISE Startup Competition",
    issuer: "한국외국어대학교 G-RISE 사업단",
    issuerEn: "HUFS G-RISE Office",
    date: "2025.12.05",
    highlight: true,
  },
  {
    title: "제 12회 Bring Your Own Ideas 최우수상",
    titleEn: "Grand Prize — 12th Bring Your Own Ideas",
    issuer: "한국외국어대학교",
    issuerEn: "Hankuk University of Foreign Studies",
    date: "2025.12.23",
  },
];
