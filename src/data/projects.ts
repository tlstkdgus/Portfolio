export interface Project {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  goals: string[];
  goalsEn: string[];
  contents: string[];
  contentsEn: string[];
  results: string[];
  resultsEn: string[];
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "TCP — AI 기반 약관 및 위험 알림 서비스",
    titleEn: "TCP — AI-Based Terms of Service Analysis Service",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    goals: [
      "93%가 약관을 제대로 읽지 않는 문제를 해결하는 AI 기반 실시간 약관 분석 서비스 개발",
      "스크린 오버레이 기술로 백그라운드에서 자동 약관 감지 및 위험 조항 알림",
    ],
    goalsEn: [
      "Develop an AI-based real-time ToS analysis service addressing the fact that 93% skip reading terms",
      "Auto-detect ToS in the background via screen overlay and alert users to risky clauses",
    ],
    contents: [
      "BERT·GPT 기반 NLP 모델을 법률 특화 데이터셋으로 미세조정하여 핵심 조항·위험 요소 자동 추출 설계",
      "복잡한 약관을 쉬운 언어로 요약하고 잠재적 위험 조항을 시각적으로 강조하는 시스템 기획",
      "프리미엄 구독, 기업용 API, 파트너십 등 5가지 수익원 구조화 및 글로벌 리걸테크 시장 분석",
    ],
    contentsEn: [
      "Designed auto-extraction of key clauses and risk terms using BERT/GPT models fine-tuned on legal datasets",
      "Planned a system to summarize complex ToS in plain language and visually highlight risky clauses",
      "Structured 5 revenue streams and analyzed the global legaltech market ($3.03B, CAGR 7.6–8.7%)",
    ],
    results: [
      "교내 아이디어톤 최우수상 수상",
      "전국 해커톤 2차 예선 진출",
    ],
    resultsEn: [
      "Won campus Ideathon Grand Prize",
      "Advanced to 2nd round of national hackathon",
    ],
    tags: ["AI", "NLP", "BERT", "GPT", "Planning"],
  },
  {
    title: "Y:Wave — AI 기반 경기도 지역화폐 가맹점 추천 서비스",
    titleEn: "Y:Wave — AI-Powered Gyeonggi Local Currency Store Recommendation",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    goals: [
      "경기도 지역화폐 사용자에게 AI 기반 맞춤형 가맹점을 추천하여 지역 경제 활성화 기여",
    ],
    goalsEn: [
      "Contribute to local economic vitality by providing AI-powered personalized store recommendations for Gyeonggi local currency users",
    ],
    contents: [
      "총괄 기획·디자인·개발 담당",
      "사용자 위치 및 소비 패턴 기반 AI 가맹점 추천 기능 설계 및 구현",
      "React + TypeScript + Tailwind CSS 기반 반응형 UI 개발",
    ],
    contentsEn: [
      "Led overall planning, design, and development",
      "Designed and implemented AI-powered store recommendation based on user location and spending patterns",
      "Built responsive UI with React + TypeScript + Tailwind CSS",
    ],
    results: [
      "전국 해커톤 2차 예선 진출 (247팀 중 상위 12%)",
    ],
    resultsEn: [
      "Advanced to 2nd round of national hackathon (top 12% of 247 teams)",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "AI", "Figma"],
  },
  {
    title: "16P!ay — MBTI 기반 소통 커뮤니티",
    titleEn: "16P!ay — MBTI-Based Community Platform",
    period: "2025.01. ~ 2025.12.",
    periodEn: "Jan 2025 — Dec 2025",
    goals: [
      "MBTI를 매개로 사람들이 자연스럽게 소통하고 교류할 수 있는 커뮤니티 플랫폼 개발",
      "멋쟁이사자처럼 13기 미니 프로젝트로 기획부터 개발까지 전과정 총괄",
    ],
    goalsEn: [
      "Build a community platform where people connect naturally through MBTI",
      "Lead all phases from planning to development as a 13th Likelion mini-project",
    ],
    contents: [
      "MBTI 유형별 게시판, 궁합 확인, 소통 기능 설계 및 구현",
      "총괄 기획·디자인(Figma)·프론트엔드 개발 담당",
      "React + TypeScript + Tailwind CSS 기반으로 반응형 UI 개발",
    ],
    contentsEn: [
      "Designed and implemented MBTI-type boards, compatibility checker, and social features",
      "Led overall planning, Figma design, and frontend development",
      "Built responsive UI with React + TypeScript + Tailwind CSS",
    ],
    results: [
      "교내 미니프로젝트 최우수상 수상",
    ],
    resultsEn: [
      "Won campus Mini-Project Grand Prize",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "RZi — AI 기반 알뜰 지출관리 플랫폼",
    titleEn: "RZi — AI-Powered Smart Expense Manager",
    period: "2025.07. ~ 2025.08.",
    periodEn: "Jul 2025 — Aug 2025",
    goals: [
      "전통시장과 대형마트 가격을 실시간 비교하여 동대문구 청년층의 전통시장 이용률 제고",
      "K-HTML 해커톤(서울시 동대문구청 × 경희대) 과제 해결",
    ],
    goalsEn: [
      "Promote traditional market usage among youth in Dongdaemun-gu by enabling real-time price comparison with large marts",
      "Address the challenge set by K-HTML Hackathon (Dongdaemun-gu × KHU)",
    ],
    contents: [
      "OCR 기술 + AI 추천을 결합한 종합 쇼핑 도우미 PWA 개발",
      "실시간 가격비교, OCR 스캔, Google Maps 경로안내, AI 상품추천 핵심 기능 구현",
      "Next.js 15 + React 19 기반 PWA 아키텍처 설계 및 개발 총괄",
    ],
    contentsEn: [
      "Built a comprehensive shopping assistant PWA combining OCR and AI recommendations",
      "Implemented real-time price comparison, OCR scanning, Google Maps navigation, and AI product recommendations",
      "Led PWA architecture design and development on Next.js 15 + React 19",
    ],
    results: [
      "K-HTML 해커톤 수료 및 실용적인 지역사회 문제 해결 서비스 완성",
    ],
    resultsEn: [
      "Completed K-HTML Hackathon and delivered a practical community problem-solving service",
    ],
    tags: ["Next.js", "React", "PWA", "OCR", "Google Maps API", "AI"],
    url: "https://github.com/tlstkdgus",
  },
  {
    title: "AInterview — AI 기반 모의 면접 서비스",
    titleEn: "AInterview — AI-Powered Mock Interview App",
    period: "2024.01. ~ 2024.12.",
    periodEn: "Jan 2024 — Dec 2024",
    goals: [
      "취업 준비생을 위한 실전형 AI 기반 모의 면접 서비스 개발",
      "음성 인식과 GPT Fine-tuning을 결합한 맞춤형 면접 경험 제공",
    ],
    goalsEn: [
      "Develop a realistic AI-based mock interview service for job seekers",
      "Provide personalized interview experience combining voice recognition and GPT fine-tuning",
    ],
    contents: [
      "Azure Speech Service 활용 STT/TTS 처리 시스템 구현",
      "Fine-tuned GPT-4o-mini 기반 직무별 맞춤 면접 질문 자동 생성",
      "React 기반 인터랙티브 UI 설계 및 Spring Boot 백엔드 연동",
    ],
    contentsEn: [
      "Implemented STT/TTS processing with Azure Speech Service",
      "Built auto job-specific question generation using fine-tuned GPT-4o-mini",
      "Designed interactive React UI and integrated with Spring Boot backend",
    ],
    results: [
      "멋쟁이사자처럼 12기 최종 프로젝트 발표 완료",
      "음성 인식 기반 AI 면접 플로우 구현 성공",
    ],
    resultsEn: [
      "Presented as the 12th Likelion cohort's final project",
      "Successfully implemented voice-based AI interview flow",
    ],
    tags: ["React", "Spring Boot", "Azure Speech", "GPT-4o", "AI"],
  },
  {
    title: "ARtliving — AR 기반 가구 추천 플랫폼",
    titleEn: "ARtliving — AR-Powered Furniture Recommendation Platform",
    period: "2025.03. ~ 2025.06.",
    periodEn: "Mar 2025 — Jun 2025",
    goals: [
      "증강현실(AR) 기술을 활용하여 가구 구매 전 사용자가 실제 공간에 가상으로 배치해볼 수 있는 플랫폼 개발",
    ],
    goalsEn: [
      "Build a platform using AR technology to let users virtually place furniture in their real space before purchasing",
    ],
    contents: [
      "AR 기반 가구 시각화 및 맞춤 추천 기능 기획·개발",
      "사용자 공간 데이터와 AI 추천 알고리즘 결합",
    ],
    contentsEn: [
      "Planned and developed AR-based furniture visualization and personalized recommendation",
      "Combined user space data with AI recommendation algorithm",
    ],
    results: [
      "2025 HUFS H-UP 진로탐색학점제 진리상 [최우수상] 수상",
    ],
    resultsEn: [
      "Won Grand Prize (Truth Award) at 2025 HUFS H-UP Career Exploration Program",
    ],
    tags: ["AR", "React", "AI", "Figma"],
  },
  {
    title: "hai — AI 기반 개인 맞춤형 커리어 멘토링 서비스",
    titleEn: "hai — AI-Powered Personalized Career Mentoring Service",
    period: "2025.06.",
    periodEn: "Jun 2025",
    goals: [
      "AI를 활용한 개인 맞춤형 커리어 멘토링 서비스로 취업 준비생의 커리어 방향 설정을 지원",
    ],
    goalsEn: [
      "Support job seekers in setting career direction with AI-powered personalized mentoring",
    ],
    contents: [
      "CHALLKATHON(한국외국어대학교 컴퓨터공학부 × UMC 공동 주최) 참가",
      "커리어 멘토링 AI 서비스 총괄 기획 및 프론트엔드 개발",
    ],
    contentsEn: [
      "Participated in CHALLKATHON (HUFS CS Dept × UMC joint hackathon)",
      "Led overall planning and frontend development of AI career mentoring service",
    ],
    results: [
      "CHALLKATHON 수료 및 서비스 완성",
    ],
    resultsEn: [
      "Completed CHALLKATHON and delivered working service",
    ],
    tags: ["React", "TypeScript", "AI", "Figma"],
  },
  
];
