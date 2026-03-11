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
  background: CareerDetailItem[];
  role: SubSection[];
  results: CareerDetailItem[];
  lessons: CareerDetailItem[];
}

export const careerDetailSections: CareerDetailSection[] = [
  {
    id: "ainterview",
    title: "AI 기반 모의 면접 서비스 — AInterview",
    titleEn: "AI-Based Mock Interview Service — AInterview",
    background: [
      {
        text: "취업 준비생의 46%가 면접을 가장 어려워한다는 조사 결과를 확인했습니다. 실전과 유사한 환경에서 반복 연습할 수 있는 기회가 부족하다는 문제 의식에서 출발했습니다.",
        textEn:
          "Research showed 46% of job seekers find interviews the hardest part of job hunting. The project was born from recognizing a lack of opportunities to practice in a realistic, repeatable environment.",
      },
      {
        text: "기존 면접 준비 서비스들은 단순 질문 목록 제공에 그쳤고, 사용자 맞춤형 피드백이나 실시간 음성 상호작용 기능이 없었습니다.",
        textEn:
          "Existing prep services only provided question lists with no personalized feedback or real-time voice interaction.",
      },
    ],
    role: [
      {
        title: "서비스 기획 및 PM",
        titleEn: "Product Planning & PM",
        items: [
          {
            text: "취준생 페인 포인트 분석을 통해 핵심 기능(음성 인식 면접, 맞춤형 질문 생성, 피드백)을 정의했습니다.",
            textEn:
              "Analyzed job seeker pain points and defined core features: voice-based interview, personalized question generation, and feedback.",
            subItems: [
              {
                text: "직무별 맞춤 면접 질문을 자동 생성하기 위해 GPT-4o-mini를 Fine-tuning했습니다.",
                textEn: "Fine-tuned GPT-4o-mini to auto-generate role-specific interview questions.",
              },
              {
                text: "Azure Speech Service를 활용해 음성-텍스트(STT) 및 텍스트-음성(TTS) 변환 시스템을 구현했습니다.",
                textEn:
                  "Implemented speech-to-text and text-to-speech conversion using Azure Speech Service.",
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
            text: "React 기반으로 실시간 음성 녹음·STT 처리·질문 생성 플로우를 구현하고 Spring Boot 백엔드와 연동했습니다.",
            textEn:
              "Built real-time voice recording, STT processing, and question generation flow in React, integrated with Spring Boot backend.",
            subItems: [
              {
                text: "실제 면접 환경을 재현한 인터랙티브 UI/UX를 설계하여 몰입감을 높였습니다.",
                textEn:
                  "Designed interactive UI/UX replicating a real interview environment for greater immersion.",
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
          "Successfully completed the voice-based AI interview simulation service and presented it as the 12th Likelion cohort's final project.",
      },
      {
        text: "Azure Speech + GPT Fine-tuning 조합으로 사용자 맞춤형 면접 경험을 실현했습니다.",
        textEn:
          "Delivered a personalized interview experience through the combination of Azure Speech and GPT fine-tuning.",
      },
    ],
    lessons: [
      {
        text: "AI 기술을 단순히 도입하는 것이 아니라, 사용자 경험 관점에서 어떻게 녹여낼지가 핵심이라는 것을 배웠습니다. 기술은 수단이며, 사용자의 문제를 해결하는 것이 목표임을 다시 확인했습니다.",
        textEn:
          "Learned that the key is not just adopting AI technology, but integrating it from a user experience perspective. Technology is a means — solving the user's problem is the goal.",
      },
    ],
  },
  {
    id: "ywave",
    title: "AI 기반 경기도 지역화폐 가맹점 추천 서비스 — Y:Wave",
    titleEn: "AI-Based Local Currency Store Recommendation — Y:Wave",
    background: [
      {
        text: "경기도 지역화폐 사용자들이 가맹점 정보를 찾기 어렵고, 결제 가능한 가맹점을 효율적으로 탐색하는 수단이 부족하다는 문제를 발견했습니다.",
        textEn:
          "Identified that Gyeonggi-do local currency users struggled to find store information and lacked efficient tools to discover participating merchants.",
      },
      {
        text: "지역화폐 활성화를 위해 사용자의 위치와 소비 패턴에 맞는 맞춤형 가맹점 추천이 필요하다고 판단했습니다.",
        textEn:
          "Determined that personalized store recommendations based on user location and spending patterns were needed to promote local currency usage.",
      },
    ],
    role: [
      {
        title: "총괄 기획 및 PM",
        titleEn: "Overall Planning & PM",
        items: [
          {
            text: "사용자 리서치를 바탕으로 서비스 컨셉과 핵심 기능(위치 기반 추천, AI 개인화, 지도 연동)을 정의했습니다.",
            textEn:
              "Defined the service concept and core features (location-based recommendations, AI personalization, map integration) through user research.",
          },
          {
            text: "B2C 개인 사용자 → 경기도 지자체 B2B 협력 확장 비즈니스 모델을 설계했습니다.",
            textEn:
              "Designed a business model expanding from B2C individual users to B2B collaboration with Gyeonggi-do local government.",
          },
        ],
      },
      {
        title: "디자인 및 개발",
        titleEn: "Design & Development",
        items: [
          {
            text: "Figma로 전체 UI/UX를 설계하고, Next.js 기반으로 프론트엔드를 개발했습니다.",
            textEn:
              "Designed full UI/UX in Figma and developed the frontend using Next.js.",
            subItems: [
              {
                text: "AI 가맹점 추천 알고리즘과 지도 API를 연동하여 위치 기반 탐색 기능을 구현했습니다.",
                textEn:
                  "Integrated AI store recommendation algorithm with map API to build location-based discovery.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "멋쟁이사자처럼 전국 해커톤 2차 예선 진출 (247팀 중 상위 12%).",
        textEn: "Advanced to 2nd round of the national Likelion hackathon (top 12% of 247 teams).",
      },
    ],
    lessons: [
      {
        text: "지역사회 문제를 해결하는 프로덕트를 만들 때는 실제 사용자(지역 주민)와 이해관계자(지자체)의 니즈를 동시에 고려해야 함을 배웠습니다. B2B 전환 전략을 초기에 설계하는 것이 서비스의 지속 가능성을 높인다는 점도 깨달았습니다.",
        textEn:
          "Learned that building a product for community problems requires simultaneously addressing the needs of end users (residents) and stakeholders (local government). Planning a B2B pivot strategy early improves long-term sustainability.",
      },
    ],
  },
  {
    id: "tcp",
    title: "AI 기반 약관 분석 서비스 — TCP",
    titleEn: "AI-Based Terms of Service Analysis — TCP",
    background: [
      {
        text: "131명 설문조사 결과 93%가 약관을 제대로 읽지 않는다는 것을 확인했습니다. SKT 유심 사태를 계기로 약관의 중요성이 대두되었고, 디지털 소비자 보호 문제에 주목했습니다.",
        textEn:
          "A survey of 131 people found 93% don't read terms of service properly. The SKT SIM incident highlighted the importance of ToS, drawing attention to digital consumer protection.",
      },
      {
        text: "기존 서비스는 사용자가 직접 약관을 검색해야 했고, 복잡한 법률 용어를 쉽게 이해할 수 있는 수단이 없었습니다.",
        textEn:
          "Existing services required users to manually search for ToS, with no tools to understand complex legal language easily.",
      },
    ],
    role: [
      {
        title: "총괄 기획",
        titleEn: "Overall Product Planning",
        items: [
          {
            text: "스크린 오버레이 기술을 활용한 백그라운드 자동 약관 감지·분석 시스템을 기획했습니다.",
            textEn:
              "Planned a background ToS auto-detection and analysis system using screen overlay technology.",
            subItems: [
              {
                text: "BERT, GPT 기반 NLP 모델을 법률 특화 데이터셋으로 미세조정하여 핵심 내용과 위험 조항을 자동 추출하는 방식을 설계했습니다.",
                textEn:
                  "Designed a system using BERT and GPT-based NLP models fine-tuned on legal datasets to auto-extract key clauses and risk terms.",
              },
            ],
          },
          {
            text: "프리미엄 구독제, 기업용 API, 파트너십, 데이터 인사이트, 집단대응 중개 등 5가지 수익원을 구조화했습니다.",
            textEn:
              "Structured 5 revenue streams: premium subscription, enterprise API, partnerships, data insights, and collective action brokerage.",
          },
        ],
      },
    ],
    results: [
      {
        text: "교내 아이디어톤 최우수상 수상 및 전국 해커톤 2차 예선 진출.",
        textEn: "Won campus Ideathon Grand Prize and advanced to 2nd round of national hackathon.",
      },
      {
        text: "글로벌 리걸테크 시장($30.33억, CAGR 7.6~8.7%) 분석을 통해 차별화 포인트를 명확히 도출했습니다.",
        textEn:
          "Clearly identified differentiators through analysis of the global legaltech market ($3.033B, CAGR 7.6–8.7%).",
      },
    ],
    lessons: [
      {
        text: "사회 문제를 발견하고 기술로 해결하는 과정에서 '왜 지금까지 없었는가'를 분석하는 것이 중요합니다. TCP는 기술적 실현 가능성과 시장성을 동시에 검증하며, 아이디어를 구체적인 비즈니스 모델로 발전시키는 경험을 제공했습니다.",
        textEn:
          "When solving social problems with technology, analyzing 'why hasn't this existed before' is crucial. TCP gave me experience validating both technical feasibility and market potential while developing an idea into a concrete business model.",
      },
    ],
  },
];
