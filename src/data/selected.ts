// 메인 화면의 대표 프로젝트. 레퍼런스(Behance 'Portfolio 2026')의 슬라이드 흐름을 따른다:
// 검은 표지(divider) → 헤드라인 + 한 일 목록 → 대표 화면 → 문제·결정 → 블루 성과 화면.
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

/** 흐름 다이어그램 — PNG 대신 사이트 글꼴로 그린다.
 *  원본 PNG(3200×1900)는 여백이 넓어 화면에 넣으면 글씨가 작고 휑했다 (2026-09-19 상현 피드백). */
export interface SelectedDiagram {
  title: Localized;
  steps: { label: Localized; note: Localized }[];
  caption?: Localized;
}

export interface SelectedImage {
  src: string;
  /** 이미지 안의 글·숫자를 대신 전달하는 설명 (다이어그램은 내용 그대로) */
  alt: Localized;
}

export interface SelectedProject {
  id: string;
  /** 검은 표지에 화면 폭으로 들어가는 단어 */
  cover: Localized;
  kicker: Localized;
  /** 상태 뱃지 — 사실 그대로. CleanB는 결제 연동 전이라 'LIVE'라고 쓰지 않는다 */
  status: Localized;
  /** 이 프로젝트에서 맡은 범위. 설계 → 구현 → 운영 순서로, 실제 한 것만 */
  scope: { ko: string[]; en: string[] };
  title: Localized;
  period: Localized;
  role: Localized;
  headline: Localized;
  did: { ko: string[]; en: string[] };
  /** 문제 → 조치 → 결과, 완결형 세 문장 (v9 어투 규칙) */
  body: Localized;
  stats: SelectedStat[];
  hero: SelectedImage;
  /** 대표 화면 배경 — 어두운 스크린샷은 ink, 밝은 화면은 muted */
  heroTone: "ink" | "muted";
  diagrams?: SelectedDiagram[];
  gallery: SelectedImage[];
  caseId: string;
  liveUrl?: string;
  repo?: string;
  /** 외부 공개 케이스 (예: 브랜드 디자인 랩의 Behance) */
  behanceUrl?: string;
  /** 현장 사진과 제3자 기술 — 출처를 반드시 같이 보여준다 */
  field?: {
    images: SelectedImage[];
    quote: Localized;
    source: { label: Localized; url: string };
  };
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "hackathon14",
    cover: { ko: "Hackathon.", en: "Hackathon." },
    kicker: { ko: "멋쟁이사자처럼 인턴 · 14기 중앙해커톤", en: "LIKELION Internship · 14th Hackathon" },
    status: { ko: "완료 · 2026.08 본선", en: "Completed · Finals Aug 2026" },
    scope: {
      ko: ["가이드·워밍업 기획", "정책·명세 공동 설계", "운영 도구 3개 직접 제작", "본선 현장 운영"],
      en: ["Guide & warm-ups", "Policy & specs (co-)", "3 tools, built", "On-site finals"],
    },
    title: { ko: "14기 중앙해커톤 기획·운영", en: "LIKELION 14th Hackathon" },
    period: { ko: "2026.06 – 2026.08", en: "Jun – Aug 2026" },
    role: { ko: "커뮤니티 매니저 인턴 · 기획·운영", en: "Community Manager Intern · Planning & Ops" },
    headline: {
      ko: "2,000명의 참가자가 평가 기준을\n예측할 수 있는 해커톤을 만들었습니다.",
      en: "I made a hackathon where 2,000 participants could predict how they'd be judged.",
    },
    did: {
      ko: [
        "참가자 가이드 · 워밍업 세션 3회 기획",
        "심사 정책 · 100점 배점 공동 설계",
        "플랫폼 기능명세서 2종 공동 작성",
        "제출물 검사 · 본선 콘솔 · FAQ 봇 직접 제작·운영",
        "본선 현장 운영 (코엑스 마곡)",
      ],
      en: [
        "Participant guide · 3 warm-up sessions",
        "Co-designed the judging policy and 100‑pt rubric",
        "Co-wrote 2 platform feature specs",
        "Built and ran the submission checker, finals console, FAQ bot",
        "On-site finals operations",
      ],
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
    diagrams: [
      {
        title: { ko: "313팀에서 1팀까지, 예측 가능한 3단계 심사", en: "From 313 teams to one, in three predictable stages" },
        steps: [
          { label: { ko: "313팀", en: "313" }, note: { ko: "제출 · 562개 레포 · 80개 대학", en: "teams submitted · 562 repos · 80 universities" } },
          { label: { ko: "60팀", en: "60" }, note: { ko: "서류 심사 100점 배점 · 트랙별 15팀", en: "by 100-point document review · 15 per track" } },
          { label: { ko: "8팀", en: "8" }, note: { ko: "트랙 피칭 발표 5분 + Q&A · 트랙별 2팀", en: "by 5-minute track pitch + Q&A · 2 per track" } },
          { label: { ko: "1팀", en: "1" }, note: { ko: "본선 토너먼트 1:1 3라운드 · 2,000명 앞 실시간 발표", en: "by a 1:1, three-round live tournament before 2,000" } },
        ],
        caption: {
          ko: "배점의 절반 가까이를 문제 정의(25점)와 실현 가능성(20점)에 두었습니다. 제출 항목과 심사 기준을 1:1로 연결해, 무엇을 쓰면 어떻게 평가받는지 예측할 수 있게 했습니다.",
          en: "Nearly half the points went to problem definition (25) and feasibility (20). Submission items mapped 1:1 to criteria, so teams could predict how they'd be scored.",
        },
      },
      {
        title: { ko: "'마감 후 수정 금지'를 선언이 아니라 집행으로", en: "Enforcing 'no edits after deadline', not just announcing it" },
        steps: [
          { label: { ko: "가설", en: "Hypothesis" }, note: { ko: "마감 후에도 커밋하는 팀이 있습니다. 제출된 레포 전부를 손으로 검사할 수 없습니다", en: "Some teams commit after the deadline; 562 repos can't be checked by hand" } },
          { label: { ko: "기준 합의", en: "Agree criteria" }, note: { ko: "검사 전에 결정: 기능 수정 실격 · README 감점 · 직후 커밋 정상참작", en: "Before scanning: code change = DQ · README = deduction · just-late = leniency" } },
          { label: { ko: "전수 검사", en: "Full scan" }, note: { ko: "check.py로 전 브랜치의 마감 후 커밋 · force-push · 비공개 전환 탐지", en: "check.py sweeps every branch for late commits, force-pushes, private flips" } },
          { label: { ko: "근거 리포트", en: "Evidence" }, note: { ko: "결과를 엑셀로 정리해 운영진 회의에 넘깁니다. 자동 판정은 하지 않습니다", en: "Results go to the staff meeting as a spreadsheet. No automatic verdicts" } },
          { label: { ko: "사람의 판정", en: "People decide" }, note: { ko: "위반 5팀 적발, 차등 기준으로 2팀 실격", en: "5 violations found; 2 disqualified under the graded criteria" } },
        ],
        caption: {
          ko: "판정 기준을 검사 전에 합의하고 도구는 근거만 제시하도록 했기 때문에, 위반 5팀을 합의된 기준으로 판정할 수 있었습니다.",
          en: "Because the criteria were agreed before scanning and the tool only presented evidence, the five violations were judged against a standard everyone had accepted.",
        },
      },
    ],
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
      quote: {
        ko: "무대 스크린, 심사 화면, 운영 콘솔을 하나의 시스템으로 개발해 심사와 무대 연출이 끊기지 않게 했다. 심사위원 평가는 운영 콘솔에서 실시간으로 집계되어 무대 스크린에 즉시 표시됐다.",
        en: "The stage screens, judging interface, and operations console were developed as an integrated system to create a seamless flow between the evaluation process and stage presentation. Judges' evaluations were aggregated in real time within the operations console and immediately displayed on the stage screens.",
      },
      source: {
        label: { ko: "멋쟁이사자처럼 브랜드 디자인 랩, Behance 케이스 'STAGE SYSTEM' (사진 · 브랜드 디자인: 브랜드 디자인 랩)", en: "LIKELION Brand Design Lab, Behance case study, 'Stage System' (photos and brand design: Brand Design Lab)" },
        url: "https://www.behance.net/gallery/255861853/ANIMAL-LEAGUE-LIKELION-HACKATHON-2026",
      },
    },
    repo: "https://github.com/tlstkdgus/animal-league",
    behanceUrl: "https://www.behance.net/gallery/255861853/ANIMAL-LEAGUE-LIKELION-HACKATHON-2026",
  },
  {
    id: "devsite",
    cover: { ko: "Dev Class.", en: "Dev Class." },
    kicker: { ko: "멋쟁이사자처럼 인턴 · 사내 교육", en: "LIKELION Internship · Internal Course" },
    status: { ko: "완료 · 사이트 공개 중", en: "Completed · Site live" },
    scope: {
      ko: ["문제 정의", "커리큘럼 설계", "사이트 구현", "강의"],
      en: ["Problem definition", "Curriculum", "Site build", "Teaching"],
    },
    title: { ko: "사내 개발 교육", en: "Internal Dev Literacy Course" },
    period: { ko: "2026.07 – 2026.08", en: "Jul – Aug 2026" },
    role: { ko: "기획·제작·강의 단독", en: "Planned, built, and taught solo" },
    headline: {
      ko: "비개발 동료가 개발자와 대화할 수 있도록\n점심 강의 6회를 설계했습니다.",
      en: "I designed six lunchtime sessions so non-developers could talk with developers.",
    },
    did: {
      ko: [
        "6회 커리큘럼 설계 · 직접 강의",
        "식당 비유 하나로 개념 통일",
        "교육 사이트 제작 (React · TS · Vite)",
        "SVG 도식 14종 · 용어 사전 51개",
      ],
      en: [
        "6-session curriculum, taught myself",
        "One restaurant metaphor for every concept",
        "Companion site (React · TS · Vite)",
        "14 SVG diagrams · 51-term glossary",
      ],
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
    repo: "https://github.com/tlstkdgus/likelion-dev-site",
  },
  {
    id: "flowpay",
    cover: { ko: "FlowPay.", en: "FlowPay." },
    kicker: { ko: "B2B 핀테크 · FIN:NECT 챌린지", en: "B2B Fintech · FIN:NECT Challenge" },
    status: { ko: "수상 · 102팀 중 5위", en: "Award · 5th of 102" },
    scope: {
      ko: ["사용자 인터뷰", "IA 설계", "프론트엔드", "IR 발표"],
      en: ["User interviews", "IA design", "Frontend", "IR pitch"],
    },
    title: { ko: "FlowPay", en: "FlowPay" },
    period: { ko: "2025.06 – 2025.08", en: "Jun – Aug 2025" },
    role: { ko: "PM · 프론트엔드 · IR", en: "PM · Frontend · IR" },
    headline: {
      ko: "무기명 법인카드 정산 8단계를\n3단계로 줄였습니다.",
      en: "I cut anonymous corporate card reconciliation from 8 steps to 3.",
    },
    did: {
      ko: [
        "현업 회계담당자 인터뷰 · 문제 정의",
        "Flow ID 익명 태깅 설계",
        "React 대시보드 · FIDO2 생체인증",
        "시장 분석 · IR 발표",
      ],
      en: [
        "Interviews with working accountants · problem definition",
        "Flow ID anonymous tagging",
        "React dashboard · FIDO2 biometrics",
        "Market sizing · IR pitch",
      ],
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
    repo: "https://github.com/tlstkdgus/FlowPay",
  },
  {
    id: "cleanb",
    cover: { ko: "CleanB.", en: "CleanB." },
    kicker: { ko: "외주 프로젝트 · 루미클린(RumiClean)", en: "Client Project · RumiClean" },
    status: { ko: "배포 완료 · 결제 연동 전", en: "Deployed · Payments pending" },
    scope: {
      ko: ["상태 흐름 설계", "프론트엔드", "릴리스 관리", "배포"],
      en: ["State-flow design", "Frontend", "Release management", "Deployment"],
    },
    title: { ko: "CleanB", en: "CleanB" },
    period: { ko: "2025.11 – 현재", en: "Nov 2025 – Present" },
    role: { ko: "PM · 프론트엔드 · 디자인 (3인 팀)", en: "PM · Frontend · Design (team of 3)" },
    headline: {
      ko: "호스트와 청소자가 '청소 완료'를 두고\n다투지 않는 서비스를 설계했습니다.",
      en: "I designed a service where hosts and cleaners don't argue over whether the cleaning was done.",
    },
    did: {
      ko: [
        "작업 상태 머신에서 화면 도출",
        "청소자 화면 전체 개발",
        "PR 170+ 리뷰 · 릴리스 관리",
        "카카오맵 · Firebase 푸시 연동",
      ],
      en: [
        "Screens derived from the job state machine",
        "Built the entire cleaner-side frontend",
        "Reviewed and released 170+ PRs",
        "Kakao Map · Firebase push integration",
      ],
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
    diagrams: [
      {
        title: { ko: "작업 상태가 화면을 정합니다", en: "The job's state decides the screen" },
        steps: [
          { label: { ko: "수락 대기", en: "Pending" }, note: { ko: "청소 요청 도착", en: "A cleaning request arrives" } },
          { label: { ko: "진행 예정", en: "Scheduled" }, note: { ko: "청소자가 수락", en: "A cleaner accepts" } },
          { label: { ko: "진행 중", en: "In progress" }, note: { ko: "현장 작업", en: "On-site work" } },
          { label: { ko: "검수 대기", en: "Review" }, note: { ko: "전·후 사진 최소 5장으로 완료 인증", en: "Completion proven with 5+ before/after photos" } },
          { label: { ko: "정산 대기", en: "Settlement" }, note: { ko: "검수 후 정산", en: "Paid out after review" } },
        ],
        caption: {
          ko: "기능 목록 대신 상태 흐름을 먼저 확정하자 필요한 화면과 입력이 저절로 추려졌습니다.",
          en: "Fixing the state flow before the feature list distilled the screens and inputs we actually needed.",
        },
      },
    ],
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
