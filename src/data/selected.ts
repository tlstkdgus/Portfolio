// 대표 프로젝트 4개. 메인에서는 한 줄 요약·핵심 수치·역할만(selected-projects.tsx),
// 헤드라인·본문 세 문장·전→후 성과·현장 사진은 /work/<id> 상세 페이지(work-detail.tsx)에서 쓴다.
// 한 일 목록·범위 칩·흐름 도식·인용문은 FINAL(2026.09.22)에서 뺐다.
//
// 순서 규칙 (2026.09.13 지시): 멋사 인턴 경험(중앙해커톤·사내 교육)이 항상 앞, CleanB는 FlowPay 뒤.
// 수치는 PORTFOLIO.md에 출처가 있는 것만 쓴다. 역할 경계("공동"/"직접")도 PORTFOLIO.md를 따른다.

export interface Localized {
  ko: string;
  en: string;
}

export interface SelectedStat {
  /** 숫자. 단위가 언어마다 다르면(562개 / 562) Localized로 둔다 — 단위를 설명 쪽에 떼어 두면 읽는 사람이 다시 조립해야 한다 */
  v: string | Localized;
  k: Localized;
}

export interface SelectedImage {
  src: string;
  /** 이미지 안의 글·숫자를 대신 전달하는 설명 (다이어그램은 내용 그대로) */
  alt: Localized;
}

export interface SelectedProject {
  id: string;
  kicker: Localized;
  /** 상태 뱃지 — 사실 그대로. CleanB는 결제 연동 전이라 'LIVE'라고 쓰지 않는다 */
  status: Localized;
  title: Localized;
  period: Localized;
  role: Localized;
  headline: Localized;
  /** 문제 → 조치 → 결과, 완결형 세 문장 (v9 어투 규칙) */
  body: Localized;
  stats: SelectedStat[];
  hero: SelectedImage;
  /** 대표 화면 배경 — 어두운 스크린샷은 ink, 밝은 화면은 muted */
  heroTone: "ink" | "muted";
  gallery: SelectedImage[];
  caseId: string;
  /** 서비스 링크. 저장소 링크는 projects.ts(repo)에 두고 상세 페이지에서만 보여준다 */
  liveUrl?: string;
  /** 외부 공개 케이스 (예: 브랜드 디자인 랩의 Behance) */
  behanceUrl?: string;
  /** 현장 사진(제3자 기록) — 출처를 반드시 같이 보여준다 */
  field?: {
    images: SelectedImage[];
    source: { label: Localized; url: string };
  };
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "hackathon14",
    kicker: { ko: "멋쟁이사자처럼 인턴 · 14기 중앙해커톤", en: "LIKELION Internship · 14th Hackathon" },
    status: { ko: "완료 · 2026.08 본선", en: "Completed · Finals Aug 2026" },
    title: { ko: "14기 중앙해커톤 기획·운영", en: "LIKELION 14th Hackathon" },
    period: { ko: "2026.06 – 2026.08", en: "Jun – Aug 2026" },
    role: { ko: "커뮤니티 매니저 인턴 · 기획·운영", en: "Community Manager Intern · Planning & Ops" },
    headline: {
      ko: "2,000명의 참가자가 평가 기준을\n예측할 수 있는 해커톤을 만들었습니다.",
      en: "I made a hackathon where 2,000 participants could predict how they'd be judged.",
    },
    body: {
      ko: "313팀이 참가하는 해커톤에서 참가자는 무엇을 제출하면 어떻게 평가받는지 알기 어려웠고, 문의는 운영진이 하루 3시간씩 직접 답하고 있었습니다. 제출 항목과 심사 기준을 1:1로 연결해 평가를 예측할 수 있게 했고, 참가자가 겪는 순서대로 가이드를 짜고 FAQ 봇이 즉답하게 했습니다. 본선 결과는 심사위원 투표가 무대 스크린에 바로 반영되도록 콘솔(Next.js · Supabase)을 DB 스키마부터 직접 개발해 진행했습니다.",
      en: "With 313 teams competing, participants couldn't tell what to submit or how it would be judged, and the staff were answering inquiries by hand for three hours a day. I mapped submission items 1:1 to judging criteria so scoring became predictable, structured the guide in the order participants live it, and had an FAQ bot answer instantly. For the finals I built the console (Next.js · Supabase) from the DB schema up so judges' votes showed on the stage screen as they came in.",
    },
    stats: [
      { v: "80.8%", k: { ko: "문의 즉답 · 하루 3시간 직접 답변에서, 미응답 0건", en: "inquiries answered instantly · from 3 hours a day by hand, 0 missed" } },
      { v: { ko: "2.2초", en: "2.2 s" }, k: { ko: "결과 공개 · 엑셀·PPT 집계에서 투표가 스크린에 뜨기까지", en: "result reveal · from Excel and PPT tallies to vote-on-screen" } },
    ],
    hero: {
      src: "/projects/hackathon14/02.png",
      alt: {
        ko: "본선 결승 무대 스크린: 멋쟁이사자들 3 대 호랑이기운 2, 심사위원 5명의 투표 카드",
        en: "Finals stage screen: 3 to 2 in the final, with the five judges' vote cards",
      },
    },
    heroTone: "ink",
    gallery: [
      {
        src: "/projects/hackathon14/04.png",
        alt: {
          ko: "직접 만든 운영 콘솔: 라운드별 대진, 경기 시작, 결과 공개를 조작하는 운영팀 화면",
          en: "The ops console I built: bracket, match start, and result reveal controls",
        },
      },
      {
        src: "/projects/hackathon14/05.png",
        alt: {
          ko: "심사위원 화면: 두 팀 중 승자를 고르는 투표 화면과 발표 타이머",
          en: "Judge view: picking the winner of a match, with the pitch timer",
        },
      },
    ],
    caseId: "hackathon14",
    // 사진·인용: 멋쟁이사자처럼 브랜드 디자인 랩의 Behance 케이스(공동 소유자로 등재). 브랜드 디자인은 랩의 작업이고,
    // 상현의 몫은 본선 무대·심사·운영 콘솔과 해커톤 기획이다. 사진은 콘솔이 실제 무대에서 쓰인 장면 위주로 골랐다.
    field: {
      images: [
        { src: "/projects/hackathon14/field-console.jpg", alt: { ko: "본선 무대 옆에서 운영 콘솔을 조작하는 운영자. 노트북에 브래킷과 경기 진행 화면이 떠 있다", en: "An operator running the ops console beside the stage, bracket and match controls on the laptop" } },
        { src: "/projects/hackathon14/field-stage.jpg", alt: { ko: "본선 무대: 발표 팀 뒤 대형 스크린에 심사 점수가 실시간으로 표시된다", en: "Finals stage: the live judging score on the big screen behind a presenting team" } },
        { src: "/projects/hackathon14/field-pitch.jpg", alt: { ko: "ANIMAL LEAGUE 무대에서 발표 중인 참가 팀", en: "A team pitching on the ANIMAL LEAGUE stage" } },
        { src: "/projects/hackathon14/field-gate.jpg", alt: { ko: "행사장 입구의 ANIMAL LEAGUE 미디어 게이트를 지나는 참가자들", en: "Participants passing the ANIMAL LEAGUE media gate at the venue entrance" } },
        { src: "/projects/hackathon14/field-keyvisual.jpg", alt: { ko: "ANIMAL LEAGUE 키 비주얼: 80개 대학을 상징하는 동물 캐릭터들과 트로피", en: "ANIMAL LEAGUE key visual: animal characters for 80 universities and the trophy" } },
      ],
      source: {
        label: { ko: "멋쟁이사자처럼 브랜드 디자인 랩, Behance 케이스 'STAGE SYSTEM' (사진 · 브랜드 디자인: 브랜드 디자인 랩)", en: "LIKELION Brand Design Lab, Behance case study, 'Stage System' (photos and brand design: Brand Design Lab)" },
        url: "https://www.behance.net/gallery/255861853/ANIMAL-LEAGUE-LIKELION-HACKATHON-2026",
      },
    },
    behanceUrl: "https://www.behance.net/gallery/255861853/ANIMAL-LEAGUE-LIKELION-HACKATHON-2026",
  },
  {
    id: "devsite",
    kicker: { ko: "멋쟁이사자처럼 인턴 · 사내 교육", en: "LIKELION Internship · Internal Course" },
    status: { ko: "완료 · 사이트 공개 중", en: "Completed · Site live" },
    title: { ko: "사내 개발 교육", en: "Internal Dev Literacy Course" },
    period: { ko: "2026.07 – 2026.08", en: "Jul – Aug 2026" },
    role: { ko: "기획·제작·강의 단독", en: "Planned, built, and taught solo" },
    headline: {
      ko: "비개발 동료가 개발자와 대화할 수 있도록\n점심 강의 6회를 설계했습니다.",
      en: "I designed six lunchtime sessions so non-developers could talk with developers.",
    },
    body: {
      ko: "비전공 동료들은 '배포'나 'API' 같은 기본 흐름을 몰라 AI에게 무엇을 물어야 할지조차 어려워했습니다. 목표를 '개발자와 대화하기'로 좁히고, 설치 없이 브라우저에서 바로 되는 실습만 남긴 6회 커리큘럼과 교육 사이트를 직접 만들어 강의했습니다. 수강자 6명 전원이 만족도 5점을 주었고, 개발자와의 대화가 더 이해된다는 응답이 4.7점이었습니다.",
      en: "Non-developer colleagues didn't know basic flows like 'deploy' or 'API', so they couldn't even tell what to ask an AI. I narrowed the goal to 'talking with developers', kept only exercises that run in the browser with no installs, and built the six-session curriculum and course site myself, then taught it. All six attendees rated it 5 out of 5, and 'I understand developer conversations better' scored 4.7.",
    },
    stats: [
      { v: "4.7/5", k: { ko: "개발자와의 대화가 이해된다", en: "I understand developer conversations better" } },
      { v: "5/5", k: { ko: "만족도 · 수강자 6명 전원", en: "satisfaction · all 6 attendees" } },
      { v: "9.7/10", k: { ko: "추천 의향", en: "would recommend" } },
    ],
    hero: {
      src: "/projects/devsite/01.png",
      alt: { ko: "교육 사이트 '개발 아는 척 완전정복' 첫 화면", en: "Home screen of the companion course site" },
    },
    heroTone: "muted",
    gallery: [
      {
        src: "/projects/devsite/02.png",
        alt: { ko: "6회 강의 커리큘럼과 회차별 목차 화면", en: "The six-session curriculum with per-session outlines" },
      },
      {
        src: "/projects/devsite/03.png",
        alt: {
          ko: "로그인 요청 시뮬레이터: 버튼을 누르면 요청이 프론트엔드 → API → 백엔드 → DB를 거치는 과정을 보여주는 브라우저 실습",
          en: "Login request simulator: an in-browser demo showing a request travel frontend → API → backend → DB",
        },
      },
    ],
    caseId: "devsite",
    liveUrl: "https://likelion-dev-site.vercel.app",
  },
  {
    id: "flowpay",
    kicker: { ko: "B2B 핀테크 · FIN:NECT 챌린지", en: "B2B Fintech · FIN:NECT Challenge" },
    status: { ko: "수상 · 102팀 중 5위", en: "Award · 5th of 102" },
    title: { ko: "FlowPay", en: "FlowPay" },
    period: { ko: "2025.06 – 2025.08", en: "Jun – Aug 2025" },
    role: { ko: "PM · 프론트엔드 · IR", en: "PM · Frontend · IR" },
    headline: {
      ko: "무기명 법인카드 정산 8단계를\n3단계로 줄였습니다.",
      en: "I cut anonymous corporate card reconciliation from 8 steps to 3.",
    },
    body: {
      ko: "회계담당자는 지출보고서 1건에 20분씩, 월 100건 이상을 처리하고 있었습니다. 인터뷰해 보니 진짜 병목은 결제 이후 수기로 작성하는 전표라고 판단했고, 익명성을 지키는 가명 토큰 Flow ID로 결제 시점부터 사용자를 식별해 지출보고서가 자동 생성되도록 설계했습니다. FIN:NECT 챌린지에서 102팀 중 5위에 올랐습니다.",
      en: "Accountants were spending 20 minutes per expense report, over 100 reports a month. Interviews showed the real bottleneck was the vouchers written by hand after each payment, so I designed Flow ID, a pseudonymous token that identifies the user at the moment of payment while keeping anonymity, so expense reports generate themselves. It placed 5th of 102 teams at the FIN:NECT Challenge.",
    },
    stats: [
      { v: "8 → 3", k: { ko: "정산 단계", en: "reconciliation steps" } },
      { v: { ko: "자동 생성", en: "Automatic" }, k: { ko: "지출보고서 1건 · 20분 수작업에서", en: "expense reports · from 20 minutes by hand" } },
      { v: { ko: "5위", en: "5th" }, k: { ko: "FIN:NECT 챌린지 · 102팀 중", en: "FIN:NECT Challenge · of 102 teams" } },
    ],
    hero: {
      src: "/projects/flowpay/01.png",
      alt: { ko: "FlowPay 소개 화면: 무기명 카드부터 회계까지, 클릭 한 번으로 끝", en: "FlowPay title screen: from anonymous card to accounting in one click" },
    },
    heroTone: "muted",
    gallery: [
      {
        src: "/projects/flowpay/04.png",
        alt: {
          ko: "해결 방식: 결제 이후의 증빙·전표·세금 신고를 자동화하는 흐름과 지출 내역 화면",
          en: "Solution: automating receipts, vouchers, and tax filing after payment, with the expense list screen",
        },
      },
      {
        src: "/projects/flowpay/02.png",
        alt: {
          ko: "문제 정의: 직원 1건당 20분, 회계담당자 주당 20시간 이상, 기업당 연 약 1,000시간·8천만 원. 회계담당자 인터뷰 '경비 처리에 매달 한 주 가량을 씁니다'",
          en: "Problem: 20 minutes per report for staff, 20+ hours a week for accountants, about 1,000 hours and ₩80M a year per company. An accountant: 'Expense processing takes about a week every month'",
        },
      },
    ],
    caseId: "flowpay",
    liveUrl: "https://flowpay.vercel.app",
  },
  {
    id: "cleanb",
    kicker: { ko: "외주 프로젝트 · 루미클린(RumiClean)", en: "Client Project · RumiClean" },
    status: { ko: "배포 완료 · 결제 연동 전", en: "Deployed · Payments pending" },
    title: { ko: "CleanB", en: "CleanB" },
    period: { ko: "2025.11 – 현재", en: "Nov 2025 – Present" },
    role: { ko: "PM · 프론트엔드 · 디자인 (3인 팀)", en: "PM · Frontend · Design (team of 3)" },
    headline: {
      ko: "호스트와 청소자가 '청소 완료'를 두고\n다투지 않는 서비스를 설계했습니다.",
      en: "I designed a service where hosts and cleaners don't argue over whether the cleaning was done.",
    },
    body: {
      ko: "외주로 맡은 에어비앤비 청소 매칭 서비스입니다. 서로 모르는 호스트와 청소자가 다투지 않으려면 완료 기준이 서비스 안에 있어야 해서, 청소 작업의 상태 흐름 5단계를 먼저 확정하고 전·후 사진 5장을 완료 조건으로 정했습니다. 청소자 화면 전체를 직접 개발해 배포했고, 지금도 수정하고 있습니다.",
      en: "A client project: an Airbnb cleaning matching service. Hosts and cleaners who've never met need the completion standard to live inside the service, so I fixed the five-state job flow first and made five before-and-after photos the condition for completion. I built the entire cleaner-side app myself, shipped it, and I'm still revising it.",
    },
    stats: [
      { v: { ko: "5장", en: "5" }, k: { ko: "완료 인증 · 전·후 사진을 조건으로 확정", en: "before/after photos fixed as the completion condition" } },
      { v: { ko: "5단계", en: "5" }, k: { ko: "화면 설계 · 작업 상태 흐름에서 도출", en: "job states the screens were derived from" } },
      { v: { ko: "개선 중", en: "Ongoing" }, k: { ko: "배포 후 · 화면·정책 지속 개선", en: "after launch · screens and policy still being revised" } },
    ],
    hero: {
      src: "/projects/cleanb/01.png",
      alt: { ko: "루미클린 첫 화면: 에어비앤비 청소, 이제 루미클린과 함께", en: "RumiClean home screen: Airbnb cleaning, now with RumiClean" },
    },
    heroTone: "muted",
    gallery: [
      {
        src: "/projects/cleanb/03.png",
        alt: { ko: "청소자용 작업 요청 목록과 일정 달력 화면", en: "Cleaner-side job request list and schedule calendar" },
      },
      {
        src: "/projects/cleanb/05.png",
        alt: {
          ko: "청소 완료 인증 화면: 청소 전·후 사진 업로드와 작업 특이사항 입력",
          en: "Completion screen: uploading before/after photos and work notes",
        },
      },
    ],
    caseId: "cleanb",
    liveUrl: "https://www.rumiclean.com",
  },
];
