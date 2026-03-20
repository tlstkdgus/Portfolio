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
    id: "rzi",
    title: "AI 기반 알뜰 지출관리 플랫폼 — RZi(알뜰하게 지출관리하기)",
    titleEn: "AI-Powered Smart Expense Manager — RZi",
    background: [
      {
        text: "전통시장 이용률을 높이기 위해서는 대형마트 대비 가격을 빠르게 비교하고, 원하는 상품을 쉽게 찾을 수 있어야 한다는 문제의식을 발견했습니다.",
        textEn:
          "Identified that increasing traditional market usage requires quick price comparison and an easy way to discover desired products.",
      },
      {
        text: "K-HTML 해커톤의 과제를 해결하며, 실사용이 가능한 형태로 사용자 경험 중심의 기능을 설계하는 것이 핵심이라고 정리했습니다.",
        textEn:
          "During the K-HTML hackathon, I concluded that the key is designing UX-centered features that work in real life.",
      },
    ],
    role: [
      {
        title: "총괄 기획 및 개발",
        titleEn: "Overall Planning & Development",
        items: [
          {
            text: "OCR 기술과 AI 추천을 결합한 쇼핑 도우미 PWA의 전체 흐름을 기획하고 설계했습니다.",
            textEn:
              "Planned the full product flow for a shopping assistant PWA that combines OCR and AI recommendations.",
          },
          {
            text: "실시간 가격비교, OCR 스캔, Google Maps 경로안내, AI 상품추천 기능을 핵심 경험으로 구현했습니다.",
            textEn:
              "Implemented real-time price comparison, OCR scanning, Google Maps navigation, and AI product recommendations as core experiences.",
          },
        ],
      },
      {
        title: "아키텍처 설계 및 구현",
        titleEn: "Architecture & Implementation",
        items: [
          {
            text: "Next.js 15 + React 19 기반의 PWA 아키텍처를 설계하고 개발을 총괄했습니다.",
            textEn:
              "Designed and led development of a Next.js 15 + React 19-based PWA architecture.",
          },
        ],
      },
    ],
    results: [
      {
        text: "K-HTML 해커톤을 수료하며, 실용적인 지역사회 문제 해결 서비스 완성까지 경험했습니다.",
        textEn:
          "Completed the K-HTML hackathon and delivered a practical service that solves a real community problem.",
      },
    ],
    lessons: [
      {
        text: "문제를 '사용자의 행동 흐름(비교/탐색/구매)' 관점으로 정의하면, 필요한 기능이 자연스럽게 UX 가치로 연결된다는 점을 배웠습니다.",
        textEn:
          "Learned that when you frame a problem as a user's behavior flow (compare/discover/purchase), features naturally map to UX value.",
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
