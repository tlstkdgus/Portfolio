export interface SubSection {
  title: string;
  titleEn: string;
  items: CareerDetailItem[];
}

export interface CareerDetailItem {
  text: string;
  textEn: string;
  subItems?: { text: string; textEn: string }[];
}

export interface CareerDetailSection {
  id: string;
  title: string;
  titleEn: string;
  images?: string[];
  background: CareerDetailItem[];
  role: SubSection[];
  results: CareerDetailItem[];
  lessons: CareerDetailItem[];
}

export const careerDetailSections: CareerDetailSection[] = [
  // ── 1. FlowPay ──────────────────────────────────────────────────────────
  {
    id: "flowpay",
    title: "무기명 법인카드 지출·회계 자동화 B2B SaaS — FlowPay",
    titleEn: "Anonymous Corporate Card Expense Automation B2B SaaS — FlowPay",
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
    background: [
      {
        text: "직원 1인당 지출보고서 작성에 20분, 회계담당자는 월 100건 이상을 처리하며 기업당 연간 약 1,000시간·8천만 원의 인건비 손실이 발생합니다. 2025년 기준 무기명 법인카드 간편결제를 지원하는 카드사는 단 3곳뿐입니다.",
        textEn:
          "Employees spend 20 min per expense report; accountants process 100+ per month — resulting in ~1,000 hours and ₩80M in annual labor costs per company. As of 2025, only 3 card issuers support easy payment for anonymous corporate cards.",
        subItems: [
          {
            text: "현업 회계담당자 인터뷰를 통해 가장 큰 Pain Point가 '결제 후 영수증 수집 → 지출보고서 수기 작성 → 회계 전표 입력'의 3중 반복 작업임을 확인했습니다.",
            textEn:
              "Interviews with accountants confirmed the biggest pain point: triple repetitive work of 'collect receipts → manually write expense report → enter accounting voucher.'",
          },
        ],
      },
      {
        text: "FINNECT 챌린지(핀테크 해커톤) 과제로 3인 팀에서 PM + 프론트엔드 + IR 피칭 전 역할을 수행했습니다. (2025.06 ~ 2025.08)",
        textEn:
          "As a FINNECT Challenge (fintech hackathon) project, performed all roles — PM, frontend developer, and IR presenter — in a 3-person team. (Jun–Aug 2025)",
      },
    ],
    role: [
      {
        title: "PM 및 서비스 기획",
        titleEn: "PM & Product Planning",
        items: [
          {
            text: "Flow ID 기반 익명 태깅 시스템 아이디어를 도출했습니다. 무기명 카드 사용자를 자동 식별·기록하여 8단계 → 3단계로 업무 프로세스를 단축합니다.",
            textEn:
              "Conceived the Flow ID-based anonymous tagging system: auto-identify and log anonymous card users, shortening the workflow from 8 steps to 3.",
            subItems: [
              {
                text: "사용자 여정 맵핑 및 정보구조 설계, 3인팀 스프린트 계획 수립 및 주간 회의 주관.",
                textEn:
                  "Mapped user journeys, designed IA, established sprint plans for the 3-person team, and chaired weekly meetings.",
              },
            ],
          },
        ],
      },
      {
        title: "프론트엔드 개발",
        titleEn: "Frontend Development",
        items: [
          {
            text: "React 기반 실시간 대시보드(부서별 예산 현황, AI 이상 거래 탐지)와 데이터 시각화 컴포넌트를 구현했습니다.",
            textEn:
              "Built real-time dashboard (department budget status, AI anomaly transaction detection) and data visualization components in React.",
          },
          {
            text: "FIDO2 API를 연동하여 지문·Face ID 생체인증 1초 결제 시스템을 개발했습니다. 복잡한 인증 과정을 제거하고 보안을 동시에 확보했습니다.",
            textEn:
              "Integrated FIDO2 API to develop a 1-second biometric payment system (fingerprint/Face ID), eliminating complex authentication while maintaining security.",
          },
        ],
      },
      {
        title: "사업 전략 및 IR 피칭",
        titleEn: "Business Strategy & IR Pitching",
        items: [
          {
            text: "TAM·SAM·SOM 3개 유효 시장을 분석하여 총 1조 6,200억 원 시장 규모를 산정했습니다. Phase 1(50개사 확보) → Phase 2(800개사) → Phase 3(Enterprise·IPO) 로드맵을 수립했습니다.",
            textEn:
              "Analyzed TAM/SAM/SOM across 3 addressable markets, sizing the total at ₩1.62T. Built a phased roadmap: Phase 1 (50 companies) → Phase 2 (800) → Phase 3 (Enterprise/IPO).",
          },
          {
            text: "FINNECT 챌린지 IR 발표를 직접 담당하여 102팀 중 5위(장려상)를 수상했습니다.",
            textEn:
              "Personally delivered the FINNECT Challenge IR pitch, winning 5th place (Encouragement Prize) out of 102 teams.",
          },
        ],
      },
    ],
    results: [
      {
        text: "FINNECT 챌린지 장려상 수상 (5등/102팀) — 틀린 가설을 인터뷰로 빠르게 검증하고 피벗한 것이 결과로 이어졌습니다.",
        textEn:
          "Won Encouragement Prize at FINNECT Challenge (5th of 102 teams) — rapid hypothesis validation through interviews and pivoting led to this outcome.",
      },
      {
        text: "3인 팀에서 PM·프론트엔드·IR 피칭을 모두 수행하며 B2B SaaS 기획의 전 사이클(문제 정의 → 솔루션 설계 → 기술 구현 → 사업화 전략)을 경험했습니다.",
        textEn:
          "Serving as PM, frontend developer, and IR presenter in a 3-person team, I experienced the full B2B SaaS planning cycle: problem definition → solution design → implementation → commercialization strategy.",
      },
    ],
    lessons: [
      {
        text: "처음에는 '직원 편의'를 Pain Point로 설정했지만, 인터뷰를 통해 실제 Pain Point가 '회계담당자의 수기 전표 작성'임을 발견하고 솔루션을 재정의했습니다. 가설은 현장에서 깨진다는 것을 체감했습니다.",
        textEn:
          "Initially set 'employee convenience' as the Pain Point, but interviews revealed the real Pain Point was 'accountants manually entering vouchers.' Re-defined the solution. Felt firsthand that hypotheses break in the field.",
      },
      {
        text: "기술적 참신함(FIDO2, Flow ID)과 명확한 수익 모델(기업 구독 + 거래 수수료)을 함께 제시했을 때 심사위원의 신뢰를 얻을 수 있었습니다. B2B 사업에서는 '기술'보다 '비즈니스 모델의 현실성'이 더 강력한 무기입니다.",
        textEn:
          "Presenting both technical novelty (FIDO2, Flow ID) and a clear revenue model (enterprise subscription + transaction fees) together earned judges' trust. In B2B, 'business model realism' is a more powerful weapon than 'technology.'",
      },
    ],
  },
  // ── 2. Y:Wave ────────────────────────────────────────────────────────────
  {
    id: "ywave",
    title: "AI 기반 경기도 지역화폐 가맹점 추천 서비스 — Y:Wave",
    titleEn: "AI-Powered Gyeonggi Local Currency Store Recommendation — Y:Wave",
    images: [
      "/projects/ywave/01.png",
      "/projects/ywave/02.png",
      "/projects/ywave/03.png",
      "/projects/ywave/04.png",
      "/projects/ywave/05.png",
      "/projects/ywave/06.png",
    ],
    background: [
      {
        text: "경기도 지역화폐 이용자는 많지만, 가맹점 탐색의 어려움으로 소비가 특정 대형 가맹점에 편중되고 소상공인 수혜가 미미한 문제를 파악했습니다.",
        textEn:
          "Despite a large base of Gyeonggi local currency users, spending concentrated in large merchants due to difficulty discovering stores — leaving small business owners with minimal benefit.",
        subItems: [
          {
            text: "멋쟁이사자처럼 13기 프로젝트로, 전국 해커톤에 참가하여 경기도 지역화폐 가맹점 추천이라는 공공 문제를 AI로 해결하는 서비스를 기획·개발했습니다.",
            textEn:
              "As a Likelion 13th cohort project, participated in a national hackathon and planned/developed a service solving the public problem of Gyeonggi local currency store discovery with AI.",
          },
        ],
      },
    ],
    role: [
      {
        title: "총괄 기획 및 디자인",
        titleEn: "Overall Planning & Design",
        items: [
          {
            text: "사용자의 현재 위치, 소비 패턴, 카테고리 선호도를 분석하여 맞춤형 가맹점을 추천하는 AI 기능을 기획했습니다.",
            textEn:
              "Planned an AI feature that analyzes user's current location, spending patterns, and category preferences to recommend personalized merchants.",
          },
          {
            text: "Figma로 전체 UI/UX를 설계하고, 지역 소상공인 홍보 효과와 사용자 혜택을 동시에 달성하는 서비스 구조를 설계했습니다.",
            textEn:
              "Designed the full UI/UX in Figma and structured the service to simultaneously achieve local small business promotion and user benefits.",
          },
        ],
      },
      {
        title: "프론트엔드 개발",
        titleEn: "Frontend Development",
        items: [
          {
            text: "React + TypeScript + Tailwind CSS 기반의 반응형 UI를 개발했습니다. 위치 기반 가맹점 지도, AI 추천 리스트, 카테고리 필터 등 핵심 화면을 구현했습니다.",
            textEn:
              "Developed responsive UI in React + TypeScript + Tailwind CSS. Implemented core screens: location-based merchant map, AI recommendation list, and category filters.",
          },
        ],
      },
    ],
    results: [
      {
        text: "전국 해커톤 2차 예선에 진출했습니다 — 247팀 중 상위 12%에 해당하는 성과입니다.",
        textEn:
          "Advanced to the 2nd round of the national hackathon — achieving top 12% among 247 teams.",
      },
    ],
    lessons: [
      {
        text: "공공 서비스 영역에서 AI를 활용할 때, '추천 알고리즘의 정확도'보다 '사용자가 추천을 신뢰하고 행동으로 이어지는 UX'가 더 중요하다는 것을 배웠습니다.",
        textEn:
          "When applying AI in public services, learned that 'UX that makes users trust and act on recommendations' matters more than 'recommendation algorithm accuracy.'",
      },
      {
        text: "지역 경제 활성화라는 거시적 목표를 개인 사용자의 혜택(가까운 가맹점, 할인 정보)으로 구체화하는 과정이 서비스 기획의 핵심 역량임을 경험했습니다.",
        textEn:
          "Experienced that translating the macro goal of local economic revitalization into concrete individual user benefits (nearby merchants, discount info) is the core PM competency.",
      },
    ],
  },
  // ── 3. hai ───────────────────────────────────────────────────────────────
  {
    id: "hai",
    title: "AI 기반 개인 맞춤형 커리어 멘토링 서비스 — hai",
    titleEn: "AI-Powered Personalized Career Mentoring Service — hai",
    images: [
      "/projects/hai/01.png",
      "/projects/hai/02.png",
      "/projects/hai/03.png",
      "/projects/hai/04.png",
      "/projects/hai/05.png",
      "/projects/hai/06.png",
    ],
    background: [
      {
        text: "취업 준비생들이 자신의 강점과 적합한 직무를 파악하지 못한 채 무분별하게 지원하는 문제, 그리고 1:1 커리어 멘토링을 받기 어려운 비용·접근성 문제를 확인했습니다.",
        textEn:
          "Identified that job seekers often apply indiscriminately without knowing their strengths or best-fit roles, and face cost and accessibility barriers to 1:1 career mentoring.",
        subItems: [
          {
            text: "CHALLKATHON(한국외국어대학교 컴퓨터공학부 × UMC 공동 주최 해커톤)에서 기획·개발한 프로젝트입니다. 제한된 시간 안에 빠르게 기획하고 구현하는 능력이 요구되는 환경이었습니다.",
            textEn:
              "Planned and developed at CHALLKATHON (joint hackathon by HUFS CS Dept × UMC). An environment requiring rapid planning and implementation within a constrained timeframe.",
          },
        ],
      },
    ],
    role: [
      {
        title: "총괄 기획 및 프론트엔드 개발",
        titleEn: "Overall Planning & Frontend Development",
        items: [
          {
            text: "사용자의 경험·역량·관심사를 입력받아 AI가 맞춤형 커리어 로드맵과 취업 전략을 제안하는 서비스 구조를 기획했습니다.",
            textEn:
              "Planned a service structure where AI proposes personalized career roadmaps and job strategies based on user-inputted experience, competencies, and interests.",
            subItems: [
              {
                text: "AI 멘토와의 대화형 인터페이스를 설계하여 딱딱한 분석 결과가 아닌 자연스러운 멘토링 경험을 제공하는 UX를 기획했습니다.",
                textEn:
                  "Designed a conversational interface with an AI mentor to provide a natural mentoring experience rather than rigid analytical outputs.",
              },
            ],
          },
          {
            text: "해커톤의 시간 제약 안에서 기획·설계·개발 우선순위를 빠르게 결정하고 팀 전체의 방향을 이끌었습니다.",
            textEn:
              "Quickly prioritized planning, design, and development within hackathon time constraints and led the overall team direction.",
          },
        ],
      },
    ],
    results: [
      {
        text: "CHALLKATHON을 수료하고 동작 가능한 AI 커리어 멘토링 서비스를 완성했습니다.",
        textEn:
          "Completed CHALLKATHON and delivered a working AI career mentoring service.",
      },
    ],
    lessons: [
      {
        text: "짧은 해커톤 기간 내에 '완벽한 기능'보다 '핵심 가치를 전달하는 최소 기능'에 집중하는 것이 완성도 높은 결과물로 이어진다는 것을 경험했습니다. MVP 사고방식의 중요성을 체감했습니다.",
        textEn:
          "Experienced that focusing on 'minimum features that deliver core value' rather than 'perfect features' within a short hackathon timeframe leads to a higher-quality deliverable. Felt the importance of MVP thinking.",
      },
    ],
  },
  // ── 4. NeuroSight ────────────────────────────────────────────────────────
  {
    id: "neurosight",
    title: "AI 기반 마취 시술 보조 서비스 — NeuroSight",
    titleEn: "AI-Assisted Anesthesia Guidance System — NeuroSight",
    images: [
      "/projects/neurosight/01.png",
      "/projects/neurosight/02.png",
      "/projects/neurosight/03.png",
      "/projects/neurosight/04.png",
      "/projects/neurosight/05.png",
      "/projects/neurosight/06.png",
      "/projects/neurosight/07.png",
    ],
    background: [
      {
        text: "마취 사고의 78.1%가 사망으로 이어지는 고위험 의료행위이며, 92.3%가 비전문의에 의해 발생합니다. 전문 마취과 의사의 부족과 높은 이탈률이 구조적 문제의 근원입니다.",
        textEn:
          "78.1% of anesthesia incidents result in death — a high-risk medical procedure. 92.3% of incidents involve non-specialists. A chronic shortage and high turnover of anesthesiologists is the structural root cause.",
        subItems: [
          {
            text: "기존 B-mode 초음파는 주관적 해석에 의존하며 정량적 조직 분석과 마취제 확산 범위 실시간 파악이 불가합니다. 북미 의료 AI 시장은 587억 달러 규모로 급성장 중입니다.",
            textEn:
              "Existing B-mode ultrasound relies on subjective interpretation, with no quantitative tissue analysis or real-time anesthetic diffusion tracking. The North American medical AI market is growing rapidly at $58.7B.",
          },
        ],
      },
      {
        text: "GRAFFITI 2025: AI Startup (KAIST ICISTS 주최) 해커톤으로, 6인 팀에서 비즈니스 아이디어 기획자 역할을 맡아 4일간 진행했습니다. 배럴아이의 정량적 초음파(QUS) 기술을 마취 분야에 적용하는 컨셉을 설계했습니다.",
        textEn:
          "GRAFFITI 2025: AI Startup (hosted by KAIST ICISTS) hackathon — served as business idea planner in a 6-person team over 4 days. Designed the concept of applying Barrel Eye's QUS technology to anesthesia.",
      },
    ],
    role: [
      {
        title: "시장 조사 및 문제 분석",
        titleEn: "Market Research & Problem Analysis",
        items: [
          {
            text: "마취 의료 사고 현황 및 비전문의 의존 구조의 원인을 데이터로 분석했습니다. 글로벌 의료 AI 시장 587억 달러 규모와 성장성을 확인하고 진입 기회를 도출했습니다.",
            textEn:
              "Analyzed anesthesia incident trends and the structural over-reliance on non-specialists with data. Confirmed the $58.7B global medical AI market size and growth potential, identifying market entry opportunities.",
          },
          {
            text: "배럴아이 QUS 기술의 동향을 연구하고 마취 분야 적용 가능성을 검토하여 세계 최초 정량적 초음파 기반 마취 보조 시스템이라는 포지셔닝을 수립했습니다.",
            textEn:
              "Researched Barrel Eye's QUS technology trends and evaluated applicability to anesthesia, establishing positioning as the world's first QUS-based anesthesia guidance system.",
          },
        ],
      },
      {
        title: "비즈니스 모델 설계",
        titleEn: "Business Model Design",
        items: [
          {
            text: "B2B SaaS(병원 대상 구독) + OEM 파트너십(GE·Philips·Siemens 등 의료기기 제조사 대상 기술 라이선스) 하이브리드 수익 모델을 설계했습니다.",
            textEn:
              "Designed a hybrid revenue model: B2B SaaS (hospital subscriptions) + OEM partnership (technology licensing to medical device manufacturers such as GE, Philips, and Siemens).",
            subItems: [
              {
                text: "OEM 파트너십으로 FDA·CE 규제 리스크를 분산하는 시장 진입 전략을 수립했습니다. Phase 1(북미 3% 점유율) → Phase 2(OEM 글로벌 확대) → Phase 3(아시아·유럽).",
                textEn:
                  "Established a market entry strategy that distributes FDA/CE regulatory risk through OEM partnerships. Phase 1 (3% North American market share) → Phase 2 (global OEM expansion) → Phase 3 (Asia/Europe).",
              },
            ],
          },
        ],
      },
      {
        title: "솔루션 컨셉 설계 및 피칭",
        titleEn: "Solution Concept Design & Pitching",
        items: [
          {
            text: "CNN + PINN + Transformer 멀티모달 AI 아키텍처 활용 방안을 연구하고, 의료진 페르소나와 User Scenario를 작성했습니다. 해커톤 발표자료를 제작하고 아이디어 피칭을 직접 담당했습니다.",
            textEn:
              "Researched CNN + PINN + Transformer multimodal AI architecture use cases, defined medical personnel persona and user scenarios. Created pitch deck and personally delivered the idea pitch.",
          },
        ],
      },
    ],
    results: [
      {
        text: "GRAFFITI 2025 AI Startup 해커톤(KAIST ICISTS 주최) 참가 완료. 4일간 의료 AI 기술·규제·시장을 집중 학습하고 사업화 전략까지 수립했습니다.",
        textEn:
          "Completed GRAFFITI 2025 AI Startup Hackathon (hosted by KAIST ICISTS). Intensively learned medical AI technology, regulation, and market dynamics over 4 days and developed a full commercialization strategy.",
      },
    ],
    lessons: [
      {
        text: "의료 AI는 '기술적 참신함'보다 '현장의 문제를 얼마나 정확히 파악했는가'와 '실현 가능한 사업화 로드맵'이 성공을 결정합니다. 78.1% 사망률이라는 데이터에서 출발해 QUS 기술을 마취 분야에 연결한 것이 기획의 설득력을 만들었습니다.",
        textEn:
          "Medical AI success is determined less by 'technological novelty' and more by 'how accurately you identified field problems' and 'whether the commercialization roadmap is feasible.' Starting from the 78.1% mortality rate data and connecting QUS technology to anesthesia created the planning's persuasiveness.",
      },
      {
        text: "복잡한 기술 컨셉을 '누가 얼마나 편해지는가'로 번역하는 것이 4일 해커톤에서 가장 중요했습니다. 규제(FDA/CE)를 리스크가 아닌 OEM 수익원으로 전환한 BM 설계가 '실현 가능성'의 핵심이었습니다.",
        textEn:
          "Translating complex technology concepts into 'who benefits and by how much' was the most important skill in the 4-day hackathon. Converting regulation (FDA/CE) into an OEM revenue stream rather than a risk was the key to demonstrating feasibility.",
      },
    ],
  },
  // ── 5. TCP ───────────────────────────────────────────────────────────────
  {
    id: "tcp",
    images: [
      "/projects/tcp/01.png",
      "/projects/tcp/02.png",
      "/projects/tcp/03.png",
      "/projects/tcp/04.png",
      "/projects/tcp/05.png",
      "/projects/tcp/06.png",
    ],
    title: "AI 기반 약관 분석 서비스 — TCP",
    titleEn: "AI-Based Terms of Service Analysis — TCP",
    background: [
      {
        text: "131명 설문조사 결과 93%가 약관을 제대로 읽지 않는다는 것을 확인했습니다. SKT 유심 해킹 사태를 계기로 약관을 읽지 않아 발생하는 소비자 피해가 사회적 문제로 부각되었습니다.",
        textEn:
          "A survey of 131 people revealed that 93% don't read terms of service properly. The SKT SIM hacking incident brought consumer damage from unread ToS to the forefront as a social issue.",
        subItems: [
          {
            text: "글로벌 리걸테크 시장 규모는 $30.33억이며 CAGR 7.6~8.7%로 성장 중입니다. 국내에는 아직 자동화된 실시간 약관 분석 서비스가 없는 블루오션임을 확인했습니다.",
            textEn:
              "The global legaltech market stands at $3.03B with a CAGR of 7.6–8.7%. Confirmed a blue ocean — no automated real-time ToS analysis service exists in Korea yet.",
          },
        ],
      },
      {
        text: "기존 약관 검토 서비스는 사용자가 직접 텍스트를 복사해 붙여넣는 방식으로, 복잡한 법률 용어를 쉽게 이해할 수 있는 수단이 없었습니다. 백그라운드에서 자동으로 감지·분석하는 것이 차별점이 될 수 있다고 판단했습니다.",
        textEn:
          "Existing review services required users to manually copy-paste text, with no tools to understand complex legal language. Concluded that background auto-detection and analysis would be the key differentiator.",
      },
    ],
    role: [
      {
        title: "총괄 기획 및 BM 설계",
        titleEn: "Overall Planning & Business Model Design",
        items: [
          {
            text: "스크린 오버레이 기술을 활용해 사용자가 약관에 동의하는 순간 백그라운드에서 자동으로 내용을 감지하고 분석하는 시스템을 기획했습니다.",
            textEn:
              "Planned a system that automatically detects and analyzes ToS content in the background at the moment of user agreement, using screen overlay technology.",
            subItems: [
              {
                text: "BERT·GPT 기반 NLP 모델을 법률 특화 데이터셋으로 미세조정하여 핵심 조항과 위험 요소를 자동 추출하는 기술 방향성을 설계했습니다.",
                textEn:
                  "Designed the technical direction: fine-tuning BERT/GPT-based NLP models on legal-domain datasets to auto-extract key clauses and risk factors.",
              },
              {
                text: "복잡한 약관을 쉬운 언어로 요약하고, 위험 조항을 시각적으로 강조(하이라이트·경고 아이콘)하는 UX를 기획했습니다.",
                textEn:
                  "Planned UX to summarize complex ToS in plain language and visually highlight risky clauses with highlights and warning icons.",
              },
            ],
          },
          {
            text: "5가지 수익원을 구조화했습니다: 프리미엄 구독제(B2C), 기업용 API(B2B), 법무법인·핀테크 파트너십, 익명화 데이터 인사이트 판매, 집단대응 중개 서비스.",
            textEn:
              "Structured 5 revenue streams: premium subscription (B2C), enterprise API (B2B), law firm & fintech partnerships, anonymized data insight sales, and collective action brokerage.",
          },
        ],
      },
      {
        title: "시장 조사 및 경쟁 분석",
        titleEn: "Market Research & Competitive Analysis",
        items: [
          {
            text: "국내외 리걸테크 서비스(DoNotPay, Ironclad 등)를 벤치마킹하여 백그라운드 자동 감지 기능의 차별성을 도출했습니다.",
            textEn:
              "Benchmarked domestic and overseas legaltech services (DoNotPay, Ironclad, etc.) to establish the differentiation of background auto-detection.",
          },
          {
            text: "주요 타겟을 '디지털 서비스를 자주 구독하는 20~40대'로 설정하고, B2B 확장 단계에서 금융·구독 플랫폼 기업을 주요 파트너로 정의했습니다.",
            textEn:
              "Defined primary target as '20s–40s who frequently subscribe to digital services,' with financial and subscription platform companies as key B2B partners in the expansion phase.",
          },
        ],
      },
    ],
    results: [
      {
        text: "교내 아이디어톤 최우수상 수상 — 93%의 설문 데이터와 글로벌 시장 규모 분석을 통해 문제의 심각성과 사업성을 동시에 입증했습니다.",
        textEn:
          "Won campus Ideathon Grand Prize — simultaneously validated the severity of the problem and business viability through 93% survey data and global market size analysis.",
      },
      {
        text: "전국 해커톤 2차 예선 진출 — 기술 구현 가능성(BERT/GPT fine-tuning, 스크린 오버레이)과 수익 모델의 구체성이 심사위원에게 높은 평가를 받았습니다.",
        textEn:
          "Advanced to 2nd round of national hackathon — technical feasibility (BERT/GPT fine-tuning, screen overlay) and specificity of the revenue model received high marks from judges.",
      },
    ],
    lessons: [
      {
        text: "사회 문제를 발견하고 기술로 해결하는 과정에서 '왜 지금까지 없었는가'를 분석하는 것이 중요합니다. TCP는 기술적 실현 가능성과 시장성을 동시에 검증하며, 아이디어를 구체적인 비즈니스 모델로 발전시키는 경험을 제공했습니다.",
        textEn:
          "When solving social problems with technology, analyzing 'why hasn't this existed before' is crucial. TCP gave me experience validating both technical feasibility and market potential while developing an idea into a concrete business model.",
      },
      {
        text: "131명의 설문 데이터라는 정량적 근거가 '93%'라는 강력한 메시지가 되어 심사위원과 투자자를 설득하는 핵심 무기가 된다는 것을 배웠습니다. 기획자의 주장은 데이터로 뒷받침될 때 비로소 설득력을 갖습니다.",
        textEn:
          "Learned that quantitative evidence from 131 survey responses became the powerful message '93%' — the core weapon to persuade judges and investors. A planner's argument only gains persuasive power when backed by data.",
      },
    ],
  },
  // ── 6. SonGeul ───────────────────────────────────────────────────────────
  {
    id: "songeul",
    title: "시니어를 위한 AI-OCR 모바일 뱅킹 — 손글 (SonGeul)",
    titleEn: "AI-OCR Mobile Banking for Seniors — SonGeul",
    images: [
      "/projects/songeul/01.png",
      "/projects/songeul/02.png",
      "/projects/songeul/03.png",
      "/projects/songeul/04.png",
      "/projects/songeul/05.png",
      "/projects/songeul/06.png",
    ],
    background: [
      {
        text: "65세 이상 고령층의 모바일뱅킹 이용률은 53.4%로, 비고령층(95%) 대비 41.2%p 낮습니다. 2030년에는 65세 이상 인구가 1,000만 명을 넘어설 전망이며(통계청 2024), 71.6%의 고령층이 금융 업무를 가족에 의존하고 있습니다.",
        textEn:
          "Mobile banking usage among seniors 65+ is 53.4% — 41.2%p below non-seniors (95%). Senior population is expected to exceed 10M by 2030 (Statistics Korea 2024), and 71.6% rely on family for financial tasks.",
        subItems: [
          {
            text: "은행 점포 폐쇄와 ATM 축소로 지방 소도시 금융 접근성이 급락했고, 착오송금의 주요 원인은 '계좌번호 입력 오류'입니다. 기존 앱은 인증 절차 복잡·보안 불안감으로 고령층 진입 장벽이 높습니다.",
            textEn:
              "Bank branch closures and ATM reductions have devastated rural financial access. The leading cause of erroneous transfers is 'account number input error.' Existing apps have high barriers for seniors due to complex authentication and security anxiety.",
          },
        ],
      },
      {
        text: "2025 한국정보기술전략혁신학회(KIITI) 동계 학술대회 아이디어 및 앱 개발 콘테스트 출품 작품으로, 기획·AI 설계·프론트엔드 개발까지 전 과정을 혼자 수행한 개인 프로젝트입니다.",
        textEn:
          "Submitted to the 2025 KIITI Winter Academic Conference App Development Contest — a solo project covering all phases: planning, AI architecture, and frontend development.",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 UX 설계",
        titleEn: "Product Planning & UX Design",
        items: [
          {
            text: "'입력 제거' 개념의 UX 플로우를 설계했습니다: 촬영(손글씨 메모) → 확인(AI-OCR 인식 결과) → 승인(가족 2단계 인증) 3단계로 단순화.",
            textEn:
              "Designed an 'eliminate input' UX flow: capture (handwritten memo) → confirm (AI-OCR result) → approve (family 2-step auth) — simplified to 3 steps.",
            subItems: [
              {
                text: "SAFE 프레임워크(Security·Assets·Family Connect·Education) 기반 부가 기능 체계화 및 가족 연동 안전망 구조 설계.",
                textEn:
                  "Systematized supporting features under SAFE framework (Security · Assets · Family Connect · Education) and designed family-linked safety net structure.",
              },
            ],
          },
        ],
      },
      {
        title: "AI 시스템 설계",
        titleEn: "AI System Design",
        items: [
          {
            text: "CLOVA OCR + Google Vision + 자체 파인튜닝 모델 앙상블(가중 투표 방식)을 설계하여 OCR 인식률의 한계를 보완했습니다. 3단계 이상 패턴 감지 로드맵(Rule → 통계 → ML·Isolation Forest·LSTM)을 수립했습니다.",
            textEn:
              "Designed a CLOVA OCR + Google Vision + fine-tuned model ensemble (weighted voting) to compensate for OCR accuracy limitations. Established a 3-stage anomaly detection roadmap (Rule → Statistical → ML: Isolation Forest, LSTM).",
          },
          {
            text: "LLM 역할을 NLU(텍스트 의미 구조화)와 XAI(위험 설명)로 분리 설계하고, 사용자 수정 데이터를 자동 학습하는 피드백 루프를 포함했습니다.",
            textEn:
              "Separated LLM roles into NLU (text semantic structuring) and XAI (risk explanation), and included a feedback loop for auto-learning from user correction data.",
          },
        ],
      },
      {
        title: "비즈니스 모델 설계",
        titleEn: "Business Model Design",
        items: [
          {
            text: "TAM 455만 명 → SAM 150~180만 명으로 시장 규모를 산정하고, 4개 수익원을 설계했습니다: B2C 구독 / B2B 라이선싱(금감원 고령자 서비스 의무화 규제 활용) / Financial Brokerage / Government Grants.",
            textEn:
              "Sized the market at TAM 4.55M → SAM 1.5–1.8M and designed 4 revenue streams: B2C subscription / B2B licensing (leveraging FSS senior service mandate) / financial brokerage / government grants.",
          },
        ],
      },
    ],
    results: [
      {
        text: "2025 KIITI 동계 학술대회 아이디어 및 앱 개발 콘테스트 우수상 수상.",
        textEn:
          "Won Excellence Award at the 2025 KIITI Winter Academic Conference App Development Contest.",
      },
      {
        text: "개인 프로젝트로 기획·AI 아키텍처 설계·프론트엔드 개발 전 과정 완수.",
        textEn:
          "Completed the full pipeline as a solo project: planning, AI architecture, and frontend development.",
      },
    ],
    lessons: [
      {
        text: "사용자의 기존 행동(손글씨 메모)을 그대로 인터페이스로 가져온 것이 차별화의 핵심이었습니다. 취약 계층을 위한 서비스일수록 기술의 완성도보다 '사용자가 틀릴 수 없는 구조'를 만드는 것이 중요합니다.",
        textEn:
          "Taking the user's existing behavior (handwritten memo) directly as the interface was the key differentiator. For services targeting vulnerable populations, creating a 'structure where users can't make mistakes' matters more than technical completeness.",
      },
      {
        text: "OCR 인식률 한계를 인정하고 앙상블 방식과 사용자 검증 UI로 보완한 것처럼, 기술 한계를 UX로 보완하는 설계 사고가 금융 수준의 신뢰성 확보로 이어졌습니다. 규제(금감원 의무화)를 B2B 수익원으로 전환한 것도 같은 맥락입니다.",
        textEn:
          "Just as OCR limitations were compensated with ensemble methods and user verification UI, design thinking that compensates for technical limits through UX led to financial-grade trustworthiness. Turning regulation (FSS mandate) into a B2B revenue stream follows the same logic.",
      },
    ],
  },
  // ── 7. AInterview ────────────────────────────────────────────────────────
  {
    id: "ainterview",
    title: "AI 기반 모의 면접 서비스 — AInterview",
    titleEn: "AI-Based Mock Interview Service — AInterview",
    images: [
      "/projects/ainterview/01.png",
      "/projects/ainterview/02.png",
      "/projects/ainterview/03.png",
      "/projects/ainterview/04.png",
      "/projects/ainterview/05.png",
    ],
    background: [
      {
        text: "취업 준비생의 46%가 면접을 가장 어려워한다는 조사 결과를 확인했습니다. 실전과 유사한 환경에서 반복 연습할 수 있는 기회가 절대적으로 부족하다는 문제의식에서 출발했습니다.",
        textEn:
          "Research showed 46% of job seekers find interviews the hardest part of job hunting. The project was born from recognizing a critical lack of opportunities to practice in a realistic, repeatable environment.",
        subItems: [
          {
            text: "기존 면접 준비 서비스들은 단순 질문 목록 제공에 그쳤습니다. 실시간 음성 상호작용, 직무별 맞춤 질문, AI 피드백이 결합된 서비스는 시장에 없었습니다.",
            textEn:
              "Existing prep services only provided question lists. No service combined real-time voice interaction, role-specific questions, and AI feedback.",
          },
        ],
      },
      {
        text: "멋쟁이사자처럼 12기 최종 프로젝트로, 4인 팀에서 기획·디자인·프론트엔드 개발 전반을 총괄했습니다. 2024년 7월부터 11월까지 약 4개월간 진행했습니다.",
        textEn:
          "As the Likelion 12th cohort final project, I led overall planning, design, and frontend development in a 4-person team over approximately 4 months (July–November 2024).",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 PM",
        titleEn: "Product Planning & PM",
        items: [
          {
            text: "취준생의 실제 페인 포인트를 분석하여 세 가지 핵심 기능(음성 인식 면접 시뮬레이션, 직무별 맞춤 질문 자동 생성, AI 피드백)을 정의하고 우선순위를 결정했습니다.",
            textEn:
              "Analyzed actual pain points of job seekers and defined three core features: voice-based interview simulation, auto-generation of role-specific questions, and AI feedback — then prioritized them.",
            subItems: [
              {
                text: "Azure Speech Service를 활용해 음성-텍스트(STT) 및 텍스트-음성(TTS) 변환 시스템을 구현하여 실제 면접과 유사한 음성 기반 인터랙션을 구현했습니다.",
                textEn:
                  "Implemented speech-to-text (STT) and text-to-speech (TTS) conversion using Azure Speech Service, enabling voice-based interaction similar to a real interview.",
              },
              {
                text: "GPT-4o-mini를 직무별 면접 데이터로 Fine-tuning하여 IT, 경영, 마케팅 등 직군별로 적절한 면접 질문을 자동 생성하는 시스템을 설계했습니다.",
                textEn:
                  "Fine-tuned GPT-4o-mini on role-specific interview data to design a system that auto-generates appropriate interview questions for IT, business, marketing, and other fields.",
              },
            ],
          },
          {
            text: "서비스 플로우 설계: 로그인 → 직무 선택 → AI 질문 생성 → 음성 답변 → STT 변환 → 피드백 제공의 전체 사용자 여정을 설계했습니다.",
            textEn:
              "Designed the complete user journey: Login → Role Selection → AI Question Generation → Voice Answer → STT Conversion → Feedback.",
          },
        ],
      },
      {
        title: "UI/UX 디자인 및 프론트엔드 개발",
        titleEn: "UI/UX Design & Frontend Development",
        items: [
          {
            text: "실제 면접 환경을 재현한 인터랙티브 UI를 Figma로 설계하고, React 기반으로 구현했습니다. 음성 녹음 시각화, 타이머, 질문 카드 등 면접 몰입감을 높이는 요소들을 포함했습니다.",
            textEn:
              "Designed an interactive UI replicating a real interview environment in Figma and implemented it in React. Included elements to enhance interview immersion: voice recording visualization, timer, and question cards.",
            subItems: [
              {
                text: "Spring Boot 백엔드와 API를 연동하여 실시간 STT 처리, 질문 생성, 피드백 조회 플로우를 구현했습니다.",
                textEn:
                  "Integrated with Spring Boot backend API to implement real-time STT processing, question generation, and feedback retrieval flow.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "음성 인식 기반 AI 면접 시뮬레이션 서비스를 성공적으로 완성하여 멋쟁이사자처럼 12기 최종 프로젝트로 발표했습니다.",
        textEn:
          "Successfully completed the voice-based AI interview simulation service and presented it as the Likelion 12th cohort's final project.",
      },
      {
        text: "Azure Speech + GPT Fine-tuning 조합으로 실제 직무에 맞는 맞춤형 면접 질문 생성과 음성 기반 인터랙션이 가능한 서비스를 구현했습니다.",
        textEn:
          "Delivered a service capable of generating role-specific interview questions and voice-based interaction through the combination of Azure Speech and GPT fine-tuning.",
      },
    ],
    lessons: [
      {
        text: "AI 기술을 단순히 도입하는 것이 아니라, 사용자 경험 관점에서 어떻게 자연스럽게 녹여낼지가 핵심이라는 것을 배웠습니다. STT의 딜레이, TTS의 어색함 등 기술적 한계를 UX 설계로 보완하는 과정이 PM의 역할이었습니다.",
        textEn:
          "Learned that the key is not just adopting AI technology, but seamlessly integrating it from a UX perspective. Compensating for technical limitations — STT delay, awkward TTS — through UX design was the PM's role.",
      },
      {
        text: "기획자로서 개발팀과 '구현 가능한 것'과 '이상적인 것' 사이의 균형을 조율하는 경험을 했습니다. GPT fine-tuning 범위와 STT 정확도 등 기술적 제약을 이해하고 기획에 반영하는 것이 중요했습니다.",
        textEn:
          "As a planner, I gained experience balancing 'what's implementable' vs. 'what's ideal' with the dev team. Understanding technical constraints — GPT fine-tuning scope, STT accuracy — and incorporating them into planning was critical.",
      },
    ],
  },
  {
    id: "mealdang",
    title: "당뇨병 환자를 위한 AI 식단 관리 서비스 — Meal당",
    titleEn: "AI Diet Management Service for Diabetics — Meal당",
    images: [
      "/projects/mealdang/01.png",
      "/projects/mealdang/02.png",
      "/projects/mealdang/03.png",
      "/projects/mealdang/04.png",
      "/projects/mealdang/05.png",
      "/projects/mealdang/06.png",
    ],
    background: [
      {
        text: "국내 당뇨 인구가 예측보다 30년 빠르게 600만 명을 돌파했습니다. 당뇨병학회 조사에 따르면 당뇨 환자들이 가장 어려워하는 것이 식단 관리(44%)임을 확인했습니다.",
        textEn:
          "Korea's diabetic population surpassed 6M — 30 years ahead of projections. The Korean Diabetes Association survey confirmed that diet management (44%) is the greatest challenge for diabetic patients.",
        subItems: [
          {
            text: "기존 식단 앱(마이피트니스팔, 눔 등)은 일반인 대상으로, 대한당뇨병학회의 식품교환표 기반 칼로리 계산과 혈당 관리를 통합한 의료 수준 서비스는 존재하지 않았습니다.",
            textEn:
              "Existing diet apps (MyFitnessPal, Noom, etc.) targeted general users. No service integrated medical-grade calorie calculation based on the Korean Diabetes Association's food exchange table with blood glucose management.",
          },
        ],
      },
      {
        text: "멋쟁이사자처럼 12기 프로젝트로, 문제 정의부터 비즈니스 모델 설계, UI/UX 디자인, 프론트엔드 개발까지 전 과정을 총괄했습니다.",
        textEn:
          "As a Likelion 12th cohort project, I led the entire process from problem definition to business model design, UI/UX design, and frontend development.",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 BM 설계",
        titleEn: "Product Planning & Business Model Design",
        items: [
          {
            text: "대한당뇨병학회의 식품교환표(6가지 식품군)를 기반으로 사용자의 체중·키·활동량에 따른 개인 맞춤 일일 권장 칼로리를 자동 계산하는 알고리즘을 기획했습니다.",
            textEn:
              "Planned an algorithm to auto-calculate personalized daily recommended calories based on user weight, height, and activity level using the Korean Diabetes Association's food exchange table (6 food groups).",
            subItems: [
              {
                text: "ChatGPT API를 활용해 계산된 칼로리 제한 안에서 사용자 식품교환단위에 맞는 개인화된 식단을 자동 생성하는 기능을 설계했습니다.",
                textEn:
                  "Designed an auto-generation feature that uses the ChatGPT API to create personalized meal plans matching user food exchange units within the calculated calorie limit.",
              },
            ],
          },
          {
            text: "프리미엄 구독(개인화 식단 고도화), 당뇨 관련 제품 쇼핑몰 연계, 익명화 식사 데이터 판매(헬스케어 기업 대상) 등 3가지 수익원을 설계했습니다.",
            textEn:
              "Designed 3 revenue streams: premium subscription (advanced personalization), diabetic product store integration, and anonymized meal data sales (to healthcare companies).",
          },
        ],
      },
      {
        title: "UI/UX 디자인 및 프론트엔드 개발",
        titleEn: "UI/UX Design & Frontend Development",
        items: [
          {
            text: "혈당 모니터링 로그, 식품교환표 기반 식단 생성, 당뇨 친화 식당 지도 등 핵심 기능을 Figma로 설계하고 React로 구현했습니다.",
            textEn:
              "Designed core features — blood glucose logging, exchange-table-based meal generation, and diabetes-friendly restaurant map — in Figma and implemented them in React.",
          },
          {
            text: "당뇨 환자라는 특수 사용자를 고려하여 큰 폰트, 명확한 수치 시각화, 간결한 입력 플로우 등 접근성 중심의 UI를 설계했습니다.",
            textEn:
              "Designed accessibility-centered UI considering the special user group of diabetics: large fonts, clear numerical visualization, and simplified input flow.",
          },
        ],
      },
    ],
    results: [
      {
        text: "mealdang.vercel.app으로 서비스를 실제 배포하여 실사용 가능한 형태로 완성했습니다. 식품교환표 기반 칼로리 계산과 ChatGPT 식단 자동 생성이 정상 작동합니다.",
        textEn:
          "Deployed the service at mealdang.vercel.app in a fully usable form. Food-exchange-table calorie calculation and ChatGPT meal auto-generation work correctly.",
      },
    ],
    lessons: [
      {
        text: "의료·헬스케어 도메인에서는 학회 자료·통계 등 공신력 있는 데이터를 기획의 출발점으로 삼는 것이 신뢰도와 차별성을 동시에 확보하는 방법임을 배웠습니다.",
        textEn:
          "In healthcare, grounding planning in credible sources — academic papers and statistics — simultaneously secures credibility and differentiation.",
      },
      {
        text: "식품교환표라는 의학적 개념을 사용자가 이해하기 쉬운 UX로 풀어내는 과정에서, 도메인 지식을 서비스로 번역하는 것이 PM의 핵심 역량임을 실감했습니다.",
        textEn:
          "Through the process of translating the medical concept of a food exchange table into an understandable UX, I experienced firsthand that translating domain knowledge into service is the core PM competency.",
      },
    ],
  },
  {
    id: "rzi",
    title: "AI 기반 알뜰 지출관리 플랫폼 — RZi",
    titleEn: "AI-Powered Smart Expense Manager — RZi",
    images: [
      "/projects/rzi/01.png",
      "/projects/rzi/02.png",
      "/projects/rzi/03.png",
      "/projects/rzi/04.png",
      "/projects/rzi/05.png",
      "/projects/rzi/06.png",
    ],
    background: [
      {
        text: "K-HTML 해커톤(서울시 동대문구청 × 경희대학교 공동 주최)의 과제로 시작했습니다. 동대문구에 21,343명의 인구가 신규 유입될 것으로 예상되지만, 청년층의 전통시장 이용률은 8.2%에 불과함을 데이터로 확인했습니다.",
        textEn:
          "Initiated as a challenge for the K-HTML Hackathon (co-hosted by Seoul Dongdaemun-gu and KHU). Data confirmed that while 21,343 new residents are expected to move into Dongdaemun-gu, traditional market usage among youth stands at just 8.2%.",
        subItems: [
          {
            text: "전통시장 6대 불편 요소를 분석했습니다: 가격 불투명, 복잡한 동선, 현금결제 의존, 재고 정보 부재, 디지털 검색 불가, 주차 불편. 이 중 '가격 불투명'과 '상품 탐색 어려움'이 핵심 진입 장벽임을 파악했습니다.",
            textEn:
              "Analyzed 6 major pain points of traditional markets: price opacity, complex layout, cash-only payment, no inventory info, unsearchable online, poor parking. Identified 'price opacity' and 'product discovery difficulty' as the core entry barriers.",
          },
        ],
      },
      {
        text: "B2C 개인 사용자 → B2G 지자체 협력 모델로 확장하는 3단계 전략을 수립했습니다. 전통시장 상인회와의 파트너십을 통해 데이터를 축적하고, 지자체에 지역 경제 활성화 인사이트를 제공하는 모델을 구상했습니다.",
        textEn:
          "Established a 3-phase expansion strategy: B2C individual users → B2G local government partnership. Conceived a model to accumulate data through merchant association partnerships and provide local economic revitalization insights to local governments.",
      },
    ],
    role: [
      {
        title: "총괄 기획 및 프로덕트 설계",
        titleEn: "Overall Planning & Product Design",
        items: [
          {
            text: "OCR 기술과 AI 추천을 결합한 종합 쇼핑 도우미 PWA의 전체 서비스 플로우를 기획했습니다.",
            textEn:
              "Planned the complete service flow of a comprehensive shopping assistant PWA combining OCR technology and AI recommendations.",
            subItems: [
              {
                text: "실시간 가격비교(전통시장 vs 대형마트), OCR 영수증 스캔, Google Maps 연동 경로안내, AI 상품 대체 추천 등 4가지 핵심 기능을 정의했습니다.",
                textEn:
                  "Defined 4 core features: real-time price comparison (traditional market vs. large mart), OCR receipt scanning, Google Maps-integrated navigation, and AI alternative product recommendations.",
              },
            ],
          },
        ],
      },
      {
        title: "아키텍처 설계 및 개발 총괄",
        titleEn: "Architecture Design & Development Lead",
        items: [
          {
            text: "Next.js 15 + React 19 기반 PWA 아키텍처를 설계하여 오프라인 지원, 홈 화면 추가, 빠른 로딩 등 PWA 핵심 기능을 구현했습니다.",
            textEn:
              "Designed a Next.js 15 + React 19-based PWA architecture and implemented core PWA features: offline support, home screen installation, and fast loading.",
          },
          {
            text: "팀 전체 기획부터 개발, 디자인, 팀 관리까지 프로젝트 리드 역할을 수행했습니다.",
            textEn:
              "Served as project lead covering the entire team — from planning and development to design and team management.",
          },
        ],
      },
    ],
    results: [
      {
        text: "K-HTML 해커톤(2025.07.16 ~ 2025.08.30)을 수료하고, OCR+AI+Google Maps가 통합된 실용적인 지역사회 문제 해결 서비스를 완성했습니다.",
        textEn:
          "Completed K-HTML Hackathon (Jul 16 – Aug 30, 2025) and delivered a practical community service integrating OCR, AI, and Google Maps.",
      },
    ],
    lessons: [
      {
        text: "문제를 '사용자의 행동 흐름(가격 비교 → 탐색 → 구매)' 관점으로 정의하면, 필요한 기능이 자연스럽게 UX 가치로 연결된다는 점을 배웠습니다. 기술(OCR, AI)은 이 흐름을 원활하게 하는 수단이어야 합니다.",
        textEn:
          "Learned that framing a problem as a user's behavior flow (price compare → discover → purchase) naturally maps features to UX value. Technology (OCR, AI) should be a means to smooth this flow.",
      },
      {
        text: "지자체·전통시장·소비자 세 이해관계자의 니즈를 동시에 충족시키는 서비스를 설계하는 과정에서 멀티 스테이크홀더 기획 역량을 키웠습니다.",
        textEn:
          "Developed multi-stakeholder planning capabilities through designing a service that simultaneously meets the needs of three parties: local government, traditional market merchants, and consumers.",
      },
    ],
  },
  {
    id: "connect",
    title: "은둔형 청년 지원 플랫폼 — 커넥트",
    titleEn: "Support Platform for Socially Isolated Youth — Connect",
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
    background: [
      {
        text: "2024년 한국보건사회연구원 조사에 따르면 국내 은둔형 청년이 약 54만 명에 달합니다. 이 중 80% 이상이 은둔 상태를 벗어나길 원하지만, 절반 이상이 지원을 받은 경험이 없습니다.",
        textEn:
          "A 2024 Korea Institute for Health and Social Affairs survey found approximately 540,000 socially isolated youth in Korea. Over 80% want to overcome their isolation, yet more than half have never received any support.",
        subItems: [
          {
            text: "주요 고립 원인은 취업 실패(24.1%)와 대인관계 어려움(23.5%)이며, 삶의 만족도는 일반 청년 대비 절반 수준입니다. 사회적 손실은 연간 7조 원 규모로 추산됩니다.",
            textEn:
              "Primary causes of isolation: employment failure (24.1%) and interpersonal difficulties (23.5%). Life satisfaction is about half that of general youth. Social losses are estimated at ₩7 trillion annually.",
          },
        ],
      },
      {
        text: "기존 지원 사업은 국가 주도의 대면 프로그램 중심으로, 은둔 청년에게 오히려 높은 진입 장벽이었습니다. 비대면·익명 기반의 단계적 접근이 핵심 차별점이라고 판단했습니다.",
        textEn:
          "Existing programs were government-led and face-to-face — paradoxically creating high barriers for isolated youth. Concluded that a non-face-to-face, anonymous, step-by-step approach would be the key differentiator.",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 PM",
        titleEn: "Product Planning & PM",
        items: [
          {
            text: "2단계 사회 적응 커리큘럼을 설계했습니다: 1단계(사회 적응 훈련) - 텍스트 시뮬레이션, AI 역할극 채팅, 사용자 매칭 대화 / 2단계(사회 참여 훈련) - AI 취업 컨설팅, 외부 기관 연계, 일간 뉴스레터.",
            textEn:
              "Designed a 2-stage social adaptation curriculum: Stage 1 (Social Adaptation Training) — text simulation, AI role-play chat, user matching dialogue / Stage 2 (Social Participation Training) — AI job consulting, institution links, daily newsletter.",
          },
          {
            text: "구독 모델(사회 적응 훈련 6,900원/월, 사회 참여 훈련 9,900원/월)과 3단계 확장 전략(B2C → 기술 안정화 → B2B)을 수립하고 3개년 수익 예측을 작성했습니다.",
            textEn:
              "Established subscription model (₩6,900/month for adaptation, ₩9,900/month for participation) and 3-phase growth strategy (B2C → tech stabilization → B2B), including 3-year revenue projections.",
            subItems: [
              {
                text: "첫 해 당기순이익 563만원 → 3년차 3억 987만원 달성 전망의 손익계산서를 작성했습니다.",
                textEn:
                  "Prepared a P&L statement projecting ₩5.63M net profit in year 1, scaling to ₩309.87M by year 3.",
              },
            ],
          },
        ],
      },
      {
        title: "UI/UX 디자인 및 프론트엔드 개발",
        titleEn: "UI/UX Design & Frontend Development",
        items: [
          {
            text: "와이어프레임부터 스타일 가이드, 아이콘·버튼 등 세부 UI 요소까지 Figma로 전체 디자인 시스템을 구축했습니다.",
            textEn:
              "Built the complete design system in Figma — from wireframes and style guides to detailed UI elements like icons and buttons.",
          },
          {
            text: "React 기반으로 40개 이상의 페이지를 구현하고, Spring Boot 백엔드 API(회원가입, 뉴스레터, OpenAI 연동)와 카카오맵 API를 연동했습니다. (3인팀, 멋쟁이사자처럼 12기)",
            textEn:
              "Implemented 40+ pages in React, integrated Spring Boot backend APIs (registration, newsletter, OpenAI) and Kakao Maps API. (3-person team, Likelion 12th cohort)",
          },
        ],
      },
    ],
    results: [
      {
        text: "26명 대상 시장 테스트에서 전반적 유용성 8.9점(목표 8.0점 초과)을 달성했습니다. 주간 인증 챌린지가 9.4점으로 가장 높은 평가를 받았으며, AI 역할극 채팅은 실제 대화 거부감을 최소화했다는 평가를 받았습니다.",
        textEn:
          "Achieved overall usefulness score of 8.9 (exceeding 8.0 target) in market testing with 26 participants. Weekly challenge received the highest rating (9.4), and AI role-play chat was praised for minimizing aversion to real conversation.",
      },
      {
        text: "전체 서비스 기획, UI/UX 디자인, 40페이지 프론트엔드 개발을 완성하고 최종 발표 및 시연을 총괄했습니다.",
        textEn:
          "Completed full service planning, UI/UX design, and 40-page frontend development, and led the final presentation and demo.",
      },
    ],
    lessons: [
      {
        text: "사회적 약자를 대상으로 하는 서비스는 '접근성'이 곧 핵심 가치임을 배웠습니다. '비대면·익명'이라는 설계 원칙 하나가 타겟 사용자의 진입 장벽을 결정적으로 낮추는 요소가 되었습니다.",
        textEn:
          "Learned that for services targeting vulnerable populations, accessibility is the core value. The single design principle of 'non-face-to-face and anonymous' decisively lowered entry barriers for target users.",
      },
      {
        text: "시장 테스트 결과에서 가격 적정성(38.5% 조정 필요)이라는 피드백을 받아 구독료를 하향 조정한 경험을 통해, 데이터 기반 의사결정이 서비스 완성도를 높인다는 것을 실감했습니다.",
        textEn:
          "After receiving market test feedback that 38.5% found pricing needed adjustment, I reduced subscription fees — experiencing firsthand that data-driven decision-making improves service quality.",
      },
    ],
  },
  {
    id: "artliving",
    title: "AR 기반 가구 추천 플랫폼 — ARtliving",
    titleEn: "AR-Powered Furniture Recommendation Platform — ARtliving",
    background: [
      {
        text: "가구 구매 시 '실제 내 공간에 놓으면 어떻게 보일까'를 미리 확인할 수 없다는 불편함이 반품률 증가와 구매 결정 지연의 주요 원인임을 확인했습니다.",
        textEn:
          "Confirmed that the inability to preview 'how will this look in my actual space' before buying furniture is a primary cause of high return rates and delayed purchase decisions.",
        subItems: [
          {
            text: "2025학년도 1학기 HUFS H-UP 진로탐색학점제 참가 프로젝트로, 배럴아이(인공지능 기반 정량적 초음파 진단 소프트웨어 개발 기업)와의 협업을 통해 AI 기술 적용 방향을 수립했습니다.",
            textEn:
              "As a 2025 Spring HUFS H-UP Career Exploration Program project, collaborated with Barrel Eye (AI-based quantitative ultrasound diagnostic software company) to establish the AI technology application direction.",
          },
        ],
      },
    ],
    role: [
      {
        title: "총괄 기획",
        titleEn: "Overall Product Planning",
        items: [
          {
            text: "AR 기술을 활용해 사용자가 스마트폰 카메라로 실제 공간을 비추면 가상 가구가 실시간으로 배치되는 서비스 컨셉을 기획했습니다.",
            textEn:
              "Planned a service concept where users point their smartphone camera at their actual space and virtual furniture is placed in real time using AR technology.",
            subItems: [
              {
                text: "사용자의 인테리어 취향, 공간 크기, 예산 데이터를 결합한 AI 맞춤 가구 추천 알고리즘 기획을 설계했습니다.",
                textEn:
                  "Designed an AI personalized furniture recommendation algorithm that combines user interior preferences, space dimensions, and budget data.",
              },
              {
                text: "B2C 직접 판매 → 가구 브랜드 B2B 파트너십으로 확장하는 비즈니스 모델을 수립했습니다.",
                textEn:
                  "Established a business model expanding from B2C direct sales to B2B furniture brand partnerships.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "2025 HUFS H-UP 진로탐색학점제에서 진리상(최우수상)을 수상했습니다. AR과 AI 추천의 결합이 실질적인 소비자 문제를 해결한다는 점을 심사위원에게 인정받았습니다.",
        textEn:
          "Won the Grand Prize (Truth Award) at the 2025 HUFS H-UP Career Exploration Program. Judges recognized that the combination of AR and AI recommendation addresses a real consumer problem.",
      },
    ],
    lessons: [
      {
        text: "기술의 참신함(AR)보다 그 기술이 해결하는 사용자 문제(구매 전 공간 시각화)가 핵심 가치임을 배웠습니다. 기술은 솔루션의 수단이지 목적이 아닙니다.",
        textEn:
          "Learned that the user problem solved by technology (space visualization before purchase) is more valuable than the novelty of the technology (AR) itself. Technology is a means, not the end goal.",
      },
      {
        text: "산업 도메인이 다른 기업(배럴아이)과의 협업을 통해 AI 기술을 다양한 산업에 적용하는 방법론을 배웠습니다. 도메인 전문성과 기술 역량의 결합이 만드는 시너지를 경험했습니다.",
        textEn:
          "Through collaboration with a company from a different industry (Barrel Eye), learned methodologies for applying AI technology across various sectors. Experienced the synergy created by combining domain expertise with technical capability.",
      },
    ],
  },
  {
    id: "huriup",
    title: "웹캠 기반 자세 교정 서비스 — 허리UP!",
    titleEn: "Webcam-Based Posture Correction Service — HuriUP!",
    images: [
      "/projects/huriup/01.png",
      "/projects/huriup/02.png",
      "/projects/huriup/03.png",
      "/projects/huriup/04.png",
      "/projects/huriup/05.png",
    ],
    background: [
      {
        text: "건강보험심사평가원 통계를 통해 20~40대 젊은 층의 허리디스크 및 척추 질환 환자가 급증하고 있음을 확인했습니다. 재택·원격근무 확산으로 장시간 앉아 있는 시간이 늘어나 문제가 심화되고 있었습니다.",
        textEn:
          "HIRA statistics confirmed a surge in back disc and spinal disease patients among people in their 20s–40s, worsened by expanded remote work increasing sedentary time.",
        subItems: [
          {
            text: "도수 치료(30~50만원/회), 수술 등 기존 해결책은 비용이 높고 사후 치료 중심이었습니다. 일상에서 지속적으로 자세를 교정하는 저비용 IT 솔루션이 없다는 점에 주목했습니다.",
            textEn:
              "Existing solutions like manual therapy (₩300,000–500,000/session) and surgery were expensive and reactive. Identified the absence of a low-cost IT solution for continuous daily posture correction.",
          },
        ],
      },
      {
        text: "멋쟁이사자처럼 12기 아이디어톤 프로젝트로, 6인 팀에서 PM을 맡아 문제 정의부터 비즈니스 모델 수립, 마케팅 전략, UI/UX 프로토타입까지 전과정을 총괄했습니다. (2024.05.01 ~ 2024.05.16, 16일)",
        textEn:
          "As a Likelion 12th cohort ideathon project, served as PM in a 6-person team leading the entire process from problem definition to business model, marketing strategy, and UI/UX prototype. (May 1–16, 2024, 16 days)",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 PM",
        titleEn: "Product Planning & PM",
        items: [
          {
            text: "웹캠 기반 실시간 자세 분석·교정 서비스의 핵심 기능을 기획했습니다: 모션 캡처로 자세 분석, 올바른 자세 가이드라인 오버레이 비교, 잘못된 자세 시 경고 알림, 웨어러블 기기 연동.",
            textEn:
              "Planned core features for a webcam-based real-time posture analysis and correction service: motion capture posture analysis, correct posture guideline overlay comparison, bad posture warning alerts, and wearable device integration.",
          },
          {
            text: "IT 직장인(B2C) → 대기업 HR·복지 담당부서(B2B)로 확장하는 2단계 비즈니스 전략을 수립했습니다. 초기 B2C 크라우드펀딩으로 제품을 검증한 후 B2B 구독 계약으로 매출을 안정화하는 모델입니다.",
            textEn:
              "Established a 2-phase business strategy: IT workers (B2C) → corporate HR/welfare departments (B2B). A model to validate the product through B2C crowdfunding, then stabilize revenue through B2B subscription contracts.",
          },
        ],
      },
      {
        title: "마케팅 전략 기획",
        titleEn: "Marketing Strategy Planning",
        items: [
          {
            text: "체험 마케팅(오피스 투어·웨비나에서 직접 자세 분석 시연), 숏폼 콘텐츠(자세 교정 전후 비교 영상), 피트니스 센터 파트너십 등 단계별 인지도 확보 전략을 수립했습니다.",
            textEn:
              "Established a step-by-step awareness strategy: experiential marketing (posture analysis demos at office tours/webinars), short-form content (before/after posture correction videos), and fitness center partnerships.",
          },
        ],
      },
      {
        title: "UI/UX 설계 및 프로토타입",
        titleEn: "UI/UX Design & Prototype",
        items: [
          {
            text: "Figma로 실시간 웹캠 자세 분석 화면, 사용자 자세 리포트, 교정 히스토리 대시보드 등 핵심 화면의 UI/UX를 설계하고 인터랙티브 프로토타입을 제작했습니다.",
            textEn:
              "Designed UI/UX and built an interactive prototype in Figma for core screens: real-time webcam posture analysis, user posture report, and correction history dashboard.",
          },
        ],
      },
    ],
    results: [
      {
        text: "16일의 짧은 기간 안에 시장 조사, 비즈니스 모델, 마케팅 전략, UI/UX 프로토타입을 완성하여 멋쟁이사자처럼 12기 아이디어톤에 참가했습니다.",
        textEn:
          "Completed market research, business model, marketing strategy, and UI/UX prototype within 16 days and participated in the Likelion 12th cohort Ideathon.",
      },
    ],
    lessons: [
      {
        text: "데이터 기반 문제 정의(통계 → Pain Point → 솔루션)가 기획의 설득력을 높이는 핵심임을 배웠습니다. '젊은 층 허리디스크 급증'이라는 데이터가 없었다면 문제의 심각성을 전달하기 어려웠을 것입니다.",
        textEn:
          "Learned that data-driven problem definition (statistics → Pain Point → solution) is the key to persuasive planning. Without the data on 'surging back disc cases among young people,' conveying the severity of the problem would have been difficult.",
      },
      {
        text: "PM으로서 개발팀, 디자인팀과 '기술적으로 가능한 범위'를 협의하고 우선순위를 조정하는 역할의 중요성을 실감했습니다. 좋은 아이디어를 실현 가능한 수준으로 구체화하는 것이 PM의 핵심 역할입니다.",
        textEn:
          "As PM, realized the importance of coordinating with dev and design teams on 'technically feasible scope' and adjusting priorities. The core PM role is translating good ideas into realizable specifics.",
      },
    ],
  },
];
