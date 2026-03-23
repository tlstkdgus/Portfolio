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
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "FlowPay — 무기명 법인카드 지출·회계 자동화 B2B SaaS",
    titleEn: "FlowPay — Anonymous Corporate Card Expense Automation B2B SaaS",
    period: "2025.06. ~ 2025.08.",
    periodEn: "Jun 2025 — Aug 2025",
    goals: [
      "직원 1인당 지출보고서 작성 20분, 회계담당자 월 100건 처리로 연간 약 1,000시간·8천만 원 손실을 일으키는 무기명 법인카드 관리 비효율 문제 해결",
      "Flow ID 기반 익명 태깅과 FIDO2 생체인증으로 업무 프로세스를 8단계 → 3단계로 단축하는 B2B SaaS 설계",
    ],
    goalsEn: [
      "Address inefficiencies in anonymous corporate card management causing ~1,000 hours/year and ₩80M in labor costs per company",
      "Design a B2B SaaS that shortens the workflow from 8 steps to 3 using Flow ID anonymous tagging and FIDO2 biometric auth",
    ],
    contents: [
      "현업 회계담당자 인터뷰를 통한 Pain Point 발굴 및 솔루션 재정의 (PM 역할)",
      "Flow ID 기반 익명 태깅 시스템 아이디어 도출 및 사용자 여정 맵핑·정보구조 설계",
      "React 기반 실시간 대시보드 및 FIDO2 API 연동 생체인증 결제 시스템 개발 (프론트엔드)",
      "3개 유효 시장 분석 → 총 1조 6,200억 원 시장 규모 산정, FINNECT IR 발표 담당 (사업 전략)",
    ],
    contentsEn: [
      "Discovered Pain Points and redefined solution through interviews with actual accountants (PM role)",
      "Conceived Flow ID anonymous tagging system, mapped user journeys, and designed IA",
      "Built real-time dashboard with React and integrated FIDO2 biometric payment (frontend)",
      "Analyzed 3 addressable markets totaling ₩1.62T; led FINNECT IR pitch (business strategy)",
    ],
    results: [
      "FINNECT 챌린지 장려상 수상 (5등/102팀)",
      "3인팀 PM + 프론트엔드 + IR 피칭 전 역할 수행",
    ],
    resultsEn: [
      "Won Encouragement Prize at FINNECT Challenge (5th out of 102 teams)",
      "Served as PM + frontend developer + IR presenter in a 3-person team",
    ],
    tags: ["React", "TypeScript", "FIDO2", "B2B SaaS", "Figma", "기획", "IR피칭"],
    image: "/projects/flowpay/01.png",
    images: [
      "/projects/flowpay/01.png",
      "/projects/flowpay/02.png",
      "/projects/flowpay/03.png",
      "/projects/flowpay/04.png",
      "/projects/flowpay/05.png",
      "/projects/flowpay/06.png",
      "/projects/flowpay/07.png",
      "/projects/flowpay/08.png",
    ],
  },
  {
    title: "Y:Wave — AI 기반 경기도 지역화폐 가맹점 추천 서비스",
    titleEn: "Y:Wave — AI-Powered Gyeonggi Local Currency Store Recommendation",
    period: "2025.03. ~ 2025.05.",
    periodEn: "Mar 2025 — May 2025",
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
    image: "/projects/ywave/01.png",
    images: [
      "/projects/ywave/01.png",
      "/projects/ywave/02.png",
      "/projects/ywave/03.png",
      "/projects/ywave/04.png",
      "/projects/ywave/05.png",
      "/projects/ywave/06.png",
    ],
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
    image: "/projects/hai/01.png",
    images: [
      "/projects/hai/01.png",
      "/projects/hai/02.png",
      "/projects/hai/03.png",
      "/projects/hai/04.png",
      "/projects/hai/05.png",
      "/projects/hai/06.png",
    ],
  },
  {
    title: "NeuroSight — AI 기반 마취 시술 보조 서비스",
    titleEn: "NeuroSight — AI-Assisted Anesthesia Guidance System",
    period: "2025.07.22. ~ 2025.07.25. (4일)",
    periodEn: "Jul 22–25, 2025 (4 days)",
    goals: [
      "마취 사고의 78.1%가 사망으로 이어지며 92.3%가 비전문의에 의해 발생하는 구조적 문제 해결",
      "배럴아이의 정량적 초음파(QUS) 기술을 기반으로 실시간 조직 분석·니들 트래킹·3D 마취제 확산 예측 기능 컨셉 설계",
    ],
    goalsEn: [
      "Address the structural problem where 78.1% of anesthesia incidents result in death and 92.3% involve non-specialists",
      "Design concept features using Barrel Eye's QUS technology: real-time tissue analysis, needle tracking, and 3D anesthetic diffusion prediction",
    ],
    contents: [
      "마취 의료 사고 현황 및 비전문의 의존 구조 문제 분석, 글로벌 의료 AI 시장 587억 달러 규모 조사",
      "B2B SaaS + OEM 파트너십 하이브리드 수익 모델 설계, 3년 내 3% 시장 점유율 단계별 로드맵 수립",
      "멀티모달 AI 아키텍처(CNN + PINN + Transformer) 활용 방안 연구 및 의료진 페르소나 설정",
      "해커톤 발표자료 작성 및 아이디어 피칭 담당 (6인팀, GRAFFITI 2025: AI Startup by KAIST ICISTS)",
    ],
    contentsEn: [
      "Analyzed anesthesia incident trends and over-reliance on non-specialists; researched $58.7B global medical AI market",
      "Designed hybrid B2B SaaS + OEM partnership revenue model with phased roadmap targeting 3% market share in 3 years",
      "Researched multimodal AI architecture (CNN + PINN + Transformer) and defined medical personnel persona",
      "Produced pitch deck and led idea pitching (6-person team, GRAFFITI 2025: AI Startup by KAIST ICISTS)",
    ],
    results: [
      "GRAFFITI 2025 AI Startup 해커톤 참가 (KAIST ICISTS 주최)",
      "의료 AI 규제 환경(FDA/CE) 기반 현실적 사업화 전략 수립",
    ],
    resultsEn: [
      "Participated in GRAFFITI 2025 AI Startup Hackathon (hosted by KAIST ICISTS)",
      "Developed realistic commercialization strategy based on FDA/CE medical AI regulatory environment",
    ],
    tags: ["Medical AI", "QUS", "B2B SaaS", "Figma", "기획", "IR피칭"],
    image: "/projects/neurosight/01.png",
    images: [
      "/projects/neurosight/01.png",
      "/projects/neurosight/02.png",
      "/projects/neurosight/03.png",
      "/projects/neurosight/04.png",
      "/projects/neurosight/05.png",
      "/projects/neurosight/06.png",
      "/projects/neurosight/07.png",
    ],
  },
  {
    title: "TCP — AI 기반 약관 및 위험 알림 서비스",
    titleEn: "TCP — AI-Based Terms of Service Analysis Service",
    period: "2025.04. ~ 2025.05.",
    periodEn: "Apr 2025 — May 2025",
    goals: [
      "131명 설문조사 결과 93%가 약관을 제대로 읽지 않는 문제를 해결하는 AI 기반 실시간 약관 분석 서비스 기획",
      "스크린 오버레이 기술로 백그라운드에서 자동 약관 감지 및 위험 조항 알림 시스템 설계",
    ],
    goalsEn: [
      "Planned an AI-based real-time ToS analysis service addressing the fact that 93% of 131 surveyed users skip reading terms",
      "Designed a system to auto-detect ToS in the background via screen overlay and alert users to risky clauses",
    ],
    contents: [
      "BERT·GPT 기반 NLP 모델을 법률 특화 데이터셋으로 미세조정하여 핵심 조항·위험 요소 자동 추출 설계",
      "복잡한 약관을 쉬운 언어로 요약하고 잠재적 위험 조항을 시각적으로 강조하는 시스템 기획",
      "프리미엄 구독, 기업용 API, 파트너십 등 5가지 수익원 구조화 및 글로벌 리걸테크 시장 분석 ($30.33억, CAGR 7.6~8.7%)",
      "총괄 기획 담당 (멋쟁이사자처럼 13기)",
    ],
    contentsEn: [
      "Designed auto-extraction of key clauses and risk terms using BERT/GPT models fine-tuned on legal datasets",
      "Planned a system to summarize complex ToS in plain language and visually highlight risky clauses",
      "Structured 5 revenue streams and analyzed the global legaltech market ($3.03B, CAGR 7.6–8.7%)",
      "Led overall planning as Likelion 13th cohort",
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
    image: "/projects/tcp/01.png",
    images: [
      "/projects/tcp/01.png",
      "/projects/tcp/02.png",
      "/projects/tcp/03.png",
      "/projects/tcp/04.png",
      "/projects/tcp/05.png",
      "/projects/tcp/06.png",
    ],
  },
  {
    title: "손글 (SonGeul) — 시니어를 위한 AI-OCR 모바일 뱅킹",
    titleEn: "SonGeul — AI-OCR Mobile Banking for Seniors",
    period: "2025",
    periodEn: "2025",
    goals: [
      "65세 이상 고령층 모바일뱅킹 이용률 53.4% vs 비고령층 95% — 41.2%p 격차 해소",
      "손으로 쓴 메모지를 촬영하면 AI-OCR이 자동 인식해 가족 2단계 승인 후 송금 완료하는 초간편 뱅킹 서비스 설계",
    ],
    goalsEn: [
      "Bridge the 41.2%p mobile banking gap between seniors (53.4%) and non-seniors (95%)",
      "Design an ultra-simple banking service where AI-OCR reads a handwritten memo, then completes transfer after 2-step family approval",
    ],
    contents: [
      "고령층 금융 소외 데이터 리서치 및 '입력 제거' UX 플로우 설계 (촬영 → 확인 → 승인 3단계)",
      "CLOVA OCR + Google Vision + 자체 파인튜닝 앙상블 아키텍처 설계 및 3단계 이상 패턴 감지 로드맵",
      "SAFE 프레임워크(Security·Assets·Family·Education) 기반 부가 기능 체계화",
      "TAM 455만 명 → SAM 150~180만 명 시장 규모 산정, 4개 수익원 설계 (개인 기획·개발 프로젝트)",
    ],
    contentsEn: [
      "Researched senior financial exclusion data; designed 'input-free' UX flow (capture → confirm → approve)",
      "Designed CLOVA OCR + Google Vision + fine-tuned ensemble architecture with 3-stage anomaly detection roadmap",
      "Systematized features using SAFE framework (Security · Assets · Family · Education)",
      "Sized market at TAM 4.55M → SAM 1.5–1.8M; designed 4 revenue streams (solo planning + dev project)",
    ],
    results: [
      "2025 한국정보기술전략혁신학회(KIITI) 동계 학술대회 우수상 수상",
      "개인 프로젝트로 기획·AI 설계·프론트엔드 개발 전 과정 수행",
    ],
    resultsEn: [
      "Won Excellence Award at 2025 KIITI Winter Academic Conference",
      "Completed entire pipeline (planning, AI architecture, frontend) as a solo project",
    ],
    tags: ["React", "TypeScript", "AI-OCR", "FinTech", "Figma", "기획"],
    image: "/projects/songeul/01.png",
    images: [
      "/projects/songeul/01.png",
      "/projects/songeul/02.png",
      "/projects/songeul/03.png",
      "/projects/songeul/04.png",
      "/projects/songeul/05.png",
      "/projects/songeul/06.png",
    ],
  },
  {
    title: "커넥트 — 은둔형 청년 지원 플랫폼",
    titleEn: "Connect — Support Platform for Socially Isolated Youth",
    period: "2024.09. ~ 2024.12.",
    periodEn: "Sep 2024 — Dec 2024",
    goals: [
      "국내 은둔형 청년 54만 명 중 80% 이상이 극복 의지 있으나 지원 부족 문제를 해결",
      "전 과정 비대면·익명 기반 AI 활용 사회 적응 학습 플랫폼 기획 및 개발",
    ],
    goalsEn: [
      "Address the lack of support for 540,000 socially isolated youth in Korea — over 80% want to overcome their situation",
      "Plan and build an AI-powered social adaptation platform fully accessible via anonymous, non-face-to-face interaction",
    ],
    contents: [
      "텍스트 시뮬레이션, AI 역할극 채팅, 사용자 매칭 대화 등 사회 적응 훈련 기능 설계",
      "AI 취업 컨설팅, 외부 기관 연계, 일간 뉴스레터 등 사회 참여 훈련 기능 개발",
      "구독 모델(사회 적응 6,900원 / 사회 참여 9,900원) 및 3단계 확장 전략 수립",
      "React 기반 40개 페이지 UI 구현, Spring Boot 백엔드 연동, 카카오맵 API 연동",
      "총괄 기획·UI/UX 디자인·프론트엔드 개발 담당 (3인팀, 멋쟁이사자처럼 12기)",
    ],
    contentsEn: [
      "Designed social adaptation training features: text simulation, AI role-play chat, and user matching dialogue",
      "Developed social participation training: AI job consulting, institution links, and daily newsletters",
      "Established subscription model (₩6,900 / ₩9,900/month) and 3-phase growth strategy",
      "Implemented 40-page React UI, integrated Spring Boot backend and Kakao Maps API",
      "Led planning, UI/UX design, and frontend development (3-person team, Likelion 12th cohort)",
    ],
    results: [
      "시장 테스트 평균 유용성 8.9점 달성 (목표 8.0점 초과)",
      "주간 챌린지 9.4점으로 최고 기능 평가",
      "전체 서비스 기획 및 40페이지 프론트엔드 개발 완성",
    ],
    resultsEn: [
      "Achieved average market test usefulness score of 8.9 (exceeded 8.0 target)",
      "Weekly challenge feature received highest rating of 9.4",
      "Completed full service planning and 40-page frontend development",
    ],
    tags: ["React", "Spring Boot", "AI", "Figma", "Kakao Maps", "Planning"],
    image: "/projects/connect/01.png",
    images: [
      "/projects/connect/01.png",
      "/projects/connect/02.png",
      "/projects/connect/03.png",
      "/projects/connect/04.png",
      "/projects/connect/05.png",
      "/projects/connect/06.png",
      "/projects/connect/07.png",
      "/projects/connect/08.png",
    ],
  },
  {
    title: "허리UP! — 웹캠 기반 자세 교정 서비스",
    titleEn: "HuriUP! — Webcam-Based Posture Correction Service",
    period: "2024.05.01. ~ 2024.05.16.",
    periodEn: "May 1 — May 16, 2024",
    goals: [
      "20~40대 젊은 층 허리디스크 환자 급증 문제를 해결하는 웹캠 기반 실시간 자세 분석·교정 서비스 기획",
      "IT 직장인 및 대기업 HR을 타겟으로 한 B2C → B2B 구독 모델 서비스 전략 수립",
    ],
    goalsEn: [
      "Planned a webcam-based real-time posture analysis and correction service to address the surge in back disc problems among people in their 20s–40s",
      "Established B2C → B2B subscription model strategy targeting IT workers and corporate HR departments",
    ],
    contents: [
      "건강보험심사평가원 통계 기반 시장 조사 및 Pain Point 도출",
      "웹캠 자세 분석, 실시간 가이드라인 비교, 경고 알림, 웨어러블 연동 핵심 기능 설계",
      "체험 마케팅, 웨비나, 숏폼 콘텐츠 중심 마케팅 전략 기획",
      "UI/UX 설계 및 프로토타입 제작 완료 (PM 역할, 6인팀, 멋쟁이사자처럼 12기)",
    ],
    contentsEn: [
      "Conducted market research based on Health Insurance Review & Assessment Service statistics and identified Pain Points",
      "Designed core features: webcam posture analysis, real-time guideline overlay, warning alerts, and wearable integration",
      "Planned marketing strategy centered on experiential marketing, webinars, and short-form content",
      "Completed UI/UX design and prototype (PM role, 6-person team, Likelion 12th cohort)",
    ],
    results: [
      "UI/UX 설계 및 프로토타입 제작 완료",
      "멋쟁이사자처럼 12기 아이디어톤 참가",
    ],
    resultsEn: [
      "Completed UI/UX design and prototype",
      "Participated in Likelion 12th cohort Ideathon",
    ],
    tags: ["Figma", "Planning", "UX/UI", "Healthcare"],
    image: "/projects/huriup/01.png",
    images: [
      "/projects/huriup/01.png",
      "/projects/huriup/02.png",
      "/projects/huriup/03.png",
      "/projects/huriup/04.png",
      "/projects/huriup/05.png",
    ],
  },
  {
    title: "Meal당 — 당뇨병 환자를 위한 AI 식단 관리 서비스",
    titleEn: "Meal당 — AI Diet Management Service for Diabetics",
    period: "2024.07. ~ 2024.08.",
    periodEn: "Jul 2024 — Aug 2024",
    goals: [
      "예측보다 30년 빠르게 600만 명을 돌파한 국내 당뇨 인구의 가장 큰 어려움인 식단 관리(44%) 문제 해결",
      "대한당뇨병학회 식품교환표 기반 개인 맞춤 권장 칼로리 계산 및 ChatGPT 활용 식단 자동 생성",
    ],
    goalsEn: [
      "Address the #1 difficulty (diet management, 44%) for Korea's diabetic population of 6M, 30 years ahead of projections",
      "Calculate personalized recommended calories using the Korean Diabetes Association's food exchange table and auto-generate meal plans via ChatGPT",
    ],
    contents: [
      "식품교환표 기반 맞춤 칼로리 계산 알고리즘 설계 및 ChatGPT 연동 개인화 식단 생성 기능 개발",
      "혈당 모니터링, 당뇨 친화 식당 지도 등 핵심 기능 포함한 React 기반 웹 애플리케이션 개발",
      "프리미엄 구독, 데이터 판매, 당뇨 관련 제품 쇼핑몰 등 다각적 비즈니스 모델 구축",
      "서비스 기획·UI/UX 디자인·프론트엔드 개발 전 과정 총괄 (멋쟁이사자처럼 12기)",
    ],
    contentsEn: [
      "Designed food-exchange-table calorie algorithm and developed ChatGPT-integrated personalized meal generation",
      "Built React web app including blood glucose monitoring and diabetes-friendly restaurant map",
      "Established multi-channel business model: premium subscription, data sales, and diabetic product store",
      "Led entire process from planning to UI/UX design to frontend development (Likelion 12th cohort)",
    ],
    results: [
      "서비스 배포 완료 (mealdang.vercel.app)",
      "멋쟁이사자처럼 12기 프로젝트 완성",
    ],
    resultsEn: [
      "Service deployed (mealdang.vercel.app)",
      "Completed as Likelion 12th cohort project",
    ],
    tags: ["React", "ChatGPT", "AI", "Healthcare", "Figma"],
    url: "https://mealdang.vercel.app",
    image: "/projects/mealdang/01.png",
    images: [
      "/projects/mealdang/01.png",
      "/projects/mealdang/02.png",
      "/projects/mealdang/03.png",
      "/projects/mealdang/04.png",
      "/projects/mealdang/05.png",
      "/projects/mealdang/06.png",
    ],
  },
  {
    title: "AInterview — AI 기반 모의 면접 서비스",
    titleEn: "AInterview — AI-Powered Mock Interview App",
    period: "2024.07. ~ 2024.11.",
    periodEn: "Jul 2024 — Nov 2024",
    goals: [
      "취업 준비생 46%가 면접을 가장 어려워한다는 문제 확인, 실전 연습 기회 부족 해결",
      "음성 인식과 GPT Fine-tuning을 결합한 AI 기반 실시간 모의 면접 서비스 개발",
    ],
    goalsEn: [
      "Addressed the problem that 46% of job seekers find interviews most difficult with insufficient practice opportunities",
      "Developed an AI-based real-time mock interview service combining voice recognition and GPT fine-tuning",
    ],
    contents: [
      "Azure Speech Service 활용 음성-텍스트 변환(STT/TTS) 처리 시스템 구현",
      "Fine-tuned GPT-4o-mini 기반 직무별 맞춤 면접 질문 자동 생성",
      "React 기반 인터랙티브 UI 설계 및 Spring Boot 백엔드 연동",
      "기획·디자인·프론트엔드 개발 총괄 (멋쟁이사자처럼 12기 최종 프로젝트)",
    ],
    contentsEn: [
      "Implemented voice-to-text (STT/TTS) processing with Azure Speech Service",
      "Built auto job-specific question generation using fine-tuned GPT-4o-mini",
      "Designed interactive React UI and integrated with Spring Boot backend",
      "Led planning, design, and frontend development (Likelion 12th cohort final project)",
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
    image: "/projects/ainterview/01.png",
    images: [
      "/projects/ainterview/01.png",
      "/projects/ainterview/02.png",
      "/projects/ainterview/03.png",
      "/projects/ainterview/04.png",
      "/projects/ainterview/05.png",
    ],
  },
  {
    title: "RZi — AI 기반 알뜰 지출관리 플랫폼",
    titleEn: "RZi — AI-Powered Smart Expense Manager",
    period: "2025.07. ~ 2025.08.",
    periodEn: "Jul 2025 — Aug 2025",
    goals: [
      "동대문구 청년층 전통시장 이용률(8.2%) 저조 문제를 전통시장·대형마트 실시간 가격 비교로 해결",
      "K-HTML 해커톤(서울시 동대문구청 × 경희대) 과제 해결",
    ],
    goalsEn: [
      "Address low traditional market usage (8.2%) among youth in Dongdaemun-gu through real-time price comparison with large marts",
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
    image: "/projects/rzi/01.png",
    images: [
      "/projects/rzi/01.png",
      "/projects/rzi/02.png",
      "/projects/rzi/03.png",
      "/projects/rzi/04.png",
      "/projects/rzi/05.png",
      "/projects/rzi/06.png",
    ],
  },
  {
    title: "ARtliving — AR 기반 가구 추천 플랫폼",
    titleEn: "ARtliving — AR-Powered Furniture Recommendation Platform",
    period: "2024.12. ~ 2025.06.",
    periodEn: "Dec 2024 — Jun 2025",
    goals: [
      "증강현실(AR) 기술을 활용하여 가구 구매 전 사용자가 실제 공간에 가상으로 배치해볼 수 있는 플랫폼 개발",
    ],
    goalsEn: [
      "Build a platform using AR technology to let users virtually place furniture in their real space before purchasing",
    ],
    contents: [
      "AR 기반 가구 시각화 및 맞춤 추천 기능 기획·개발",
      "사용자 공간 데이터와 AI 추천 알고리즘 결합",
      "HUFS H-UP 진로탐색학점제 참가 프로젝트 총괄 기획",
    ],
    contentsEn: [
      "Planned and developed AR-based furniture visualization and personalized recommendation",
      "Combined user space data with AI recommendation algorithm",
      "Led overall planning as HUFS H-UP Career Exploration Program project",
    ],
    results: [
      "2025 HUFS H-UP 진로탐색학점제 진리상 [최우수상] 수상",
    ],
    resultsEn: [
      "Won Grand Prize (Truth Award) at 2025 HUFS H-UP Career Exploration Program",
    ],
    tags: ["AR", "React", "AI", "Figma"],
  },
];
