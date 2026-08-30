export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  team: string;
  teamEn: string;
  period: string;
  periodEn: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  descriptionEn: string[];
  tags: string[];
}

// 해커톤·캠프·수료 이력은 Projects / Credentials로 옮겼습니다. 여기엔 실제 조직에서 맡은 역할만 둡니다.
export const experiences: Experience[] = [
  {
    company: "멋쟁이사자처럼",
    companyEn: "LIKELION",
    role: "커뮤니티 매니저 인턴",
    roleEn: "Community Manager Intern",
    team: "에듀비즈니스본부 유니브사업 Group 커뮤니티팀",
    teamEn: "EduBusiness Div. Univ. Business Group, Community Team",
    period: "2026.04. ~ 현재",
    periodEn: "Apr 2026 — Present",
    startDate: "2026-04",
    endDate: null,
    description: [
      "전국 80개 대학, 2,500여 명 규모의 대학(유니브) 커뮤니티 운영·관리",
      "전국 단위 연합 아이디어톤 운영 참여 (1,822명 · 378개 프로젝트), 실시간 Q&A·문의 대응",
      "공지·SNS 콘텐츠 제작, 플랫폼 기반 운영 업무 자동화, 중앙 해커톤 운영 예정",
    ],
    descriptionEn: [
      "Managing the nationwide LIKELION Univ. community — 80 universities, ~2,500 members",
      "Helped operate the national ideathon (1,822 participants, 378 projects); handled real-time Q&A and inquiries",
      "Producing announcements and SNS content, automating ops workflows; national hackathon upcoming",
    ],
    tags: ["Community", "Event Ops", "Content", "Automation"],
  },
  {
    company: "CleanB (RoomiClean)",
    companyEn: "CleanB (RoomiClean)",
    role: "PM · 프론트엔드 · 디자인",
    roleEn: "PM · Frontend · Design",
    team: "에어비앤비 청소 매칭 플랫폼 (3인 팀, 실서비스 운영 중)",
    teamEn: "Airbnb cleaning matching platform (3-person team, in production)",
    period: "2025.12. ~ 현재",
    periodEn: "Dec 2025 — Present",
    startDate: "2025-12",
    endDate: null,
    description: [
      "전체 PM으로 기획·디자인·릴리스 우선순위를 잡고, 청소자용 화면 전체를 직접 개발",
      "PR 170개+ 저장소의 코드 리뷰와 릴리스 머지, 배포·QA 프로세스 관리",
      "Docker · GitHub Actions · CDN으로 구성한 배포 환경에서 실서비스 운영",
    ],
    descriptionEn: [
      "Overall PM — owning planning, design, and release priorities while building the entire cleaner-side frontend",
      "Code review, release merges, deployment and QA process across a 170+ PR repository",
      "Operating a live service on Docker, GitHub Actions, and CDN infrastructure",
    ],
    tags: ["PM", "Next.js", "TypeScript", "CI/CD"],
  },
  {
    company: "SSAFY (삼성 청년 SW·AI 아카데미)",
    companyEn: "SSAFY (Samsung SW·AI Academy For Youth)",
    role: "15기 교육생",
    roleEn: "15th Cohort Trainee",
    team: "비전공 Java 트랙",
    teamEn: "Non-CS Java Track",
    period: "2026.01. ~ 2026.04.",
    periodEn: "Jan 2026 — Apr 2026",
    startDate: "2026-01",
    endDate: "2026-04",
    description: [
      "알고리즘·자료구조·백엔드(Java) 중심의 비전공 Java 트랙 교육 과정 참여",
      "실전 프로젝트 기반 학습으로 프로덕트 관점과 개발 역량을 함께 보강",
    ],
    descriptionEn: [
      "Trained in the Non-CS Java track — algorithms, data structures, and Java backend development",
      "Strengthened both product mindset and development skills through project-based learning",
    ],
    tags: ["Java", "Algorithm", "Backend"],
  },
  {
    company: "한국외국어대학교 멋쟁이사자처럼",
    companyEn: "HUFS LIKELION",
    role: "13기 운영진",
    roleEn: "13th Cohort Staff",
    team: "운영팀",
    teamEn: "Operations Team",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    startDate: "2025-01",
    endDate: "2025-12",
    description: [
      "13기 학생 교육 세션 기획·진행, 학생 관리 및 강의 진도 체크",
      "HUFS 멋쟁이사자처럼 공식 홈페이지 기획·디자인·개발 리드",
      "운영과 병행해 16P!ay · TCP · Y:Wave 프로젝트 리드 (교내 최우수상 2회, 전국 예선 진출 2회)",
    ],
    descriptionEn: [
      "Planned and led educational sessions; managed students and lecture progress for the 13th cohort",
      "Led planning, design, and development of the official HUFS LIKELION website",
      "Led 16P!ay · TCP · Y:Wave projects alongside operations (2 campus Grand Prizes, 2 national semifinals)",
    ],
    tags: ["Education", "Next.js", "Figma", "Notion"],
  },
  {
    company: "풍생고등학교",
    companyEn: "Pungsaeng High School",
    role: "코딩 교육 봉사",
    roleEn: "Coding Education Volunteer",
    team: "프론트엔드·기획 교육",
    teamEn: "Frontend & Planning Education",
    period: "2025.03. ~ 2025.11.",
    periodEn: "Mar 2025 — Nov 2025",
    startDate: "2025-03",
    endDate: "2025-11",
    description: [
      "HTML · CSS · JS · React · Figma · Notion 등 프론트엔드·기획 전반 교육",
      "학생들과 '수행평가 알리미' 프로젝트를 기획·개발해 3학년 2반에서 실사용 중",
    ],
    descriptionEn: [
      "Taught frontend and planning: HTML, CSS, JS, React, Figma, Notion",
      "Planned and built an assignment-notification app with students — in live use by class 3-2",
    ],
    tags: ["Education", "React", "Figma"],
  },
];
