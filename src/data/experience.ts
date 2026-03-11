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

export const experiences: Experience[] = [
  {
    company: "한국외국어대학교 멋쟁이사자처럼",
    companyEn: "Likelion at HUFS",
    role: "13기 운영진",
    roleEn: "13th Staff Organizer",
    team: "운영팀",
    teamEn: "Operations Team",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    startDate: "2025-01",
    endDate: "2025-12",
    description: [
      "13기 노션 관리 및 학생 교육 세션 기획·진행",
      "13기 학생 관리 및 Techit 강의 이수 진도 체크",
      "HUFS 멋쟁이사자처럼 공식 홈페이지 총괄 기획·디자인·개발",
      "MBTI 커뮤니티 '16P!ay' 총괄 기획·디자인·개발 → 교내 미니프로젝트 최우수상",
      "AI 기반 약관 분석 서비스 'TCP' 총괄 기획 → 아이디어톤 최우수상·2차 예선 진출",
      "AI 기반 경기도 지역화폐 추천 서비스 'Y:Wave' 총괄 기획·디자인·개발 → 2차 예선 진출(247팀 중 상위 12%)",
    ],
    descriptionEn: [
      "Managed Notion workspace and planned/led educational sessions for 13th cohort",
      "Handled student management and tracked Techit lecture completion progress",
      "Led overall planning, design, and development of the official HUFS Likelion website",
      "Led '16P!ay' MBTI community project — won campus Mini-Project Grand Prize",
      "Led planning of AI-based ToS analysis service 'TCP' — won Ideathon Grand Prize, advanced to 2nd round",
      "Led 'Y:Wave' regional currency recommendation service — advanced to 2nd round (top 12% of 247 teams)",
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Notion"],
  },
  {
    company: "풍생고등학교",
    companyEn: "Pungsaeng High School",
    role: "코딩 교육 봉사",
    roleEn: "Coding Education Volunteer",
    team: "교육봉사",
    teamEn: "Education Volunteer",
    period: "2025.03. ~ 현재",
    periodEn: "Mar 2025 — Present",
    startDate: "2025-03",
    endDate: null,
    description: [
      "HTML, CSS, JS, React, Figma, Notion 등 프론트엔드·기획 전반 교육",
      "담당 학생과 함께 풍생고등학교 수행평가 알리미 프로젝트 기획 및 개발",
      "3학년 2반 대상 실사용 진행 중 → 전교 확대 예정",
    ],
    descriptionEn: [
      "Taught frontend development and planning tools: HTML, CSS, JS, React, Figma, Notion",
      "Co-developed a school assignment notification app with students",
      "Currently live for a class of 40 students — planning school-wide expansion",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Figma", "Notion"],
  },
  {
    company: "한국외국어대학교 멋쟁이사자처럼",
    companyEn: "Likelion at HUFS",
    role: "12기 프론트엔드 트랙",
    roleEn: "12th Frontend Track Member",
    team: "개발팀",
    teamEn: "Development Team",
    period: "2024.01. ~ 2024.12.",
    periodEn: "Jan 2024 — Dec 2024",
    startDate: "2024-01",
    endDate: "2024-12",
    description: [
      "팀 프로젝트 todo 리스트 관리 서비스 'TO GATHER' 개발",
      "자세 교정 도우미 서비스 '허리UP!' 기획",
      "식단교환표 기반 혈당·식단 관리 서비스 'Meal당' 기획·디자인·개발",
      "AI 기반 모의 면접 앱 'AInterview' 기획·디자인·개발",
    ],
    descriptionEn: [
      "Developed 'TO GATHER' todo-list management service as a team project",
      "Planned 'HuriUP!' posture correction assistant service",
      "Planned, designed, and developed 'Meal당' blood sugar & meal management app",
      "Planned, designed, and developed 'AInterview' AI-based mock interview app",
    ],
    tags: ["React", "JavaScript", "Figma", "Azure Speech API", "GPT-4o"],
  },
  {
    company: "한국외국어대학교 경상대학",
    companyEn: "HUFS College of Business",
    role: "학생회 대외협력국 차장",
    roleEn: "Vice Director, External Affairs, Student Council",
    team: "대외협력국",
    teamEn: "External Affairs Division",
    period: "2021.03. ~ 2021.10.",
    periodEn: "Mar 2021 — Oct 2021",
    startDate: "2021-03",
    endDate: "2021-10",
    description: [
      "신입생 환영 행사와 학과 교류 행사 기획 및 운영",
      "행사 예산 관리 및 견적 업무 담당",
    ],
    descriptionEn: [
      "Planned and organized freshman welcome events and inter-department exchange programs",
      "Managed event budgets and handled cost estimation",
    ],
    tags: ["기획", "예산관리", "행사운영"],
  },
];
