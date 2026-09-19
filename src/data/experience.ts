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
// CleanB(루미클린)는 경력이 아니라 프로젝트로만 다룹니다 (2026.09.13 지시). 여기에 추가하지 말 것.
export const experiences: Experience[] = [
  {
    company: "멋쟁이사자처럼",
    companyEn: "LIKELION",
    role: "커뮤니티 매니저 인턴",
    roleEn: "Community Manager Intern",
    team: "유니브 Group 유니브 1팀",
    teamEn: "Univ. Group, Univ. Team 1",
    period: "2026.04.27. ~ 2026.08.31.",
    periodEn: "Apr 27, 2026 — Aug 31, 2026",
    startDate: "2026-04",
    endDate: "2026-08",
    description: [
      "전국 80개 대학, 2,500여 명 규모의 대학(유니브) 커뮤니티 운영·관리",
      "14기 중앙해커톤(80개 대학 · 참가자 2,000명+) 운영 — 심사 정책·해커톤 플랫폼 기능명세서 2종·워밍업 세션 3회 공동 기획, 운영 도구 3종(제출물 검사 · 본선 콘솔 · FAQ 봇) AI로 직접 제작·투입, 본선 현장 운영",
      "비개발 직군 대상 사내 개발 교육 6회 기획·제작·강의 — 설문 6명 만족도 전원 5/5, 추천 의향 9.7/10",
      "전국 단위 연합 아이디어톤 운영 참여 (1,822명 · 378개 프로젝트) — 본선 심사 자동화 시트(Google Sheets)와 만족도조사 설계·470건 분석 보고서(NPS +7.02) 팀원들과 공동 기획, 실시간 Q&A·문의 대응",
      "공지·SNS 콘텐츠 제작, 플랫폼 기반 운영 업무 자동화",
    ],
    descriptionEn: [
      "Managed the nationwide LIKELION Univ. community — 80 universities, ~2,500 members",
      "Ran the 14th national hackathon (80 universities, 2,000+ participants) — co-planned judging policy, 2 platform feature specs, and a 3-part warm-up series; built and deployed 3 ops tools with AI (submission checker, finals console, FAQ bot); ran on-site finals operations",
      "Created and taught a 6-session internal dev-literacy course for non-developers — survey of 6 attendees: 5/5 satisfaction across the board, 9.7/10 recommendation",
      "Helped operate the national ideathon (1,822 participants, 378 projects) — co-planned the finals scoring automation (Google Sheets) and a satisfaction survey with a 470-response analysis report (NPS +7.02); handled real-time Q&A and inquiries",
      "Produced announcements and SNS content, automated ops workflows",
    ],
    tags: ["Community", "Event Ops", "Content", "Automation"],
  },
  {
    company: "SSAFY (삼성 청년 SW·AI 아카데미)",
    companyEn: "SSAFY (Samsung SW·AI Academy For Youth)",
    role: "15기 수료",
    roleEn: "15th Cohort — Completed",
    team: "비전공 Java 트랙",
    teamEn: "Non-CS Java Track",
    period: "2026.01. ~ 2026.04.",
    periodEn: "Jan 2026 — Apr 2026",
    startDate: "2026-01",
    endDate: "2026-04",
    description: [
      "알고리즘·자료구조·백엔드(Java) 중심의 비전공 Java 트랙 교육 과정 수료",
      "실전 프로젝트 기반 학습으로 프로덕트 관점과 개발 역량을 함께 보강",
    ],
    descriptionEn: [
      "Completed the Non-CS Java track — algorithms, data structures, and Java backend development",
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
      "이 프로젝트를 기반으로 제 12회 Bring Your Own Ideas 최우수상 수상 (2025.12)",
    ],
    descriptionEn: [
      "Taught frontend and planning: HTML, CSS, JS, React, Figma, Notion",
      "Planned and built an assignment-notification app with students — in live use by class 3-2",
      "The project went on to win the Grand Prize at the 12th Bring Your Own Ideas (Dec 2025)",
    ],
    tags: ["Education", "React", "Figma"],
  },
];
