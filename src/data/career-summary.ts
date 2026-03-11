export interface CareerHighlight {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const careerOverview = {
  ko: "PM/PO를 목표로 기획·디자인·개발을 아우르는 풀사이클 경험을 쌓아가고 있습니다. 한국외국어대학교에서 Global Business & Technology와 AI 융합전공을 복수전공하며, 멋쟁이사자처럼 운영진, 교내외 해커톤, 창업 프로그램 등 다양한 활동을 통해 사용자 문제를 발견하고 데이터 기반으로 해결하는 역량을 키우고 있습니다.",
  en: "Aspiring PM/PO building full-cycle experience across planning, design, and development. Double-majoring in Global Business & Technology and Software & AI at HUFS, I develop user-centered problem-solving and data-driven decision-making skills through Likelion operations, hackathons, and startup programs.",
};

export const careerHighlights: CareerHighlight[] = [
  {
    title: "서비스 기획 & 프로덕트 리드",
    titleEn: "Product Planning & Project Lead",
    items: [
      "7개 이상의 프로젝트에서 PM 역할 수행: 문제 정의부터 기획·디자인·개발까지 전과정 총괄",
      "시장 조사 및 사용자 리서치 기반 비즈니스 모델 설계 경험 다수",
      "Figma를 활용한 와이어프레임·프로토타입 제작 및 사용자 중심 UI/UX 설계",
    ],
    itemsEn: [
      "Served as PM on 7+ projects: led from problem definition through planning, design, and development",
      "Conducted market research and user research to design business models",
      "Created wireframes and prototypes in Figma; designed user-centered UI/UX",
    ],
  },
  {
    title: "수상 및 성과",
    titleEn: "Awards & Achievements",
    items: [
      "교내외 대회 9회 수상 (최우수상·대상 다수 포함)",
      "G-RISE 2025 창업 비즈니스 모델 경진대회 대상 수상",
      "2025 창업캠프 IR 피칭 경진대회 최우수상, HUFS H-UP 진리상[최우수상]",
    ],
    itemsEn: [
      "9 awards at campus and external competitions (including multiple Grand Prizes)",
      "Grand Prize at G-RISE 2025 Startup Business Model Competition",
      "Grand Prize at 2025 HUFS Startup Camp IR Pitching, Grand Prize at HUFS H-UP",
    ],
  },
  {
    title: "AI 기반 프로덕트 개발",
    titleEn: "AI-Powered Product Development",
    items: [
      "GPT-4o, Azure Speech Service, BERT 등 AI/ML 기술을 활용한 서비스 기획·개발",
      "AInterview: Fine-tuned GPT-4o-mini 기반 AI 모의 면접 서비스 개발",
      "TCP: BERT/GPT 기반 NLP로 약관 위험 조항을 자동 분석하는 서비스 기획",
    ],
    itemsEn: [
      "Planned and built services leveraging GPT-4o, Azure Speech, BERT and other AI/ML tech",
      "AInterview: Built AI mock interview app using fine-tuned GPT-4o-mini",
      "TCP: Planned ToS risk analysis service using BERT/GPT NLP models",
    ],
  },
  {
    title: "교육 & 커뮤니티 리더십",
    titleEn: "Education & Community Leadership",
    items: [
      "멋쟁이사자처럼 13기 운영진: 세션 기획·진행, 학생 관리, 공식 홈페이지 개발",
      "풍생고등학교 코딩 교육 봉사: 프론트엔드·기획 전과정 교육 및 실사용 프로젝트 진행",
      "전체 평점 4.14/4.5 (1전공 4.25, 복수전공 4.1)",
    ],
    itemsEn: [
      "Likelion 13th staff: planned sessions, managed students, developed official website",
      "Coding volunteer at Pungsaeng HS: taught frontend dev and ran a live student project",
      "GPA 4.14/4.5 overall (1st major 4.25, double major 4.1)",
    ],
  },
];

export const selfDevelopedTools = [
  { ko: "수행평가 알리미 (풍생고등학교 실사용)", en: "Assignment Notifier App (live at Pungsaeng HS)" },
  { ko: "HUFS 멋쟁이사자처럼 공식 홈페이지", en: "Official HUFS Likelion Website" },
];

export const coreCompetencies = [
  {
    ko: "사용자 중심 서비스 기획 및 비즈니스 모델 설계",
    en: "User-centered product planning and business model design",
  },
  {
    ko: "데이터 기반 의사결정 및 시장·사용자 리서치",
    en: "Data-driven decision making and market/user research",
  },
  {
    ko: "프론트엔드 개발 (React, Next.js, TypeScript, Tailwind CSS)",
    en: "Frontend development (React, Next.js, TypeScript, Tailwind CSS)",
  },
  {
    ko: "팀 리딩 및 프로젝트 전과정 총괄",
    en: "Team leadership and end-to-end project management",
  },
];
