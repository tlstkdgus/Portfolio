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
  problem: Localized;
  decision: Localized;
  /** 성과 화면 상단의 한 줄 — 이 프로젝트의 판단을 요약 */
  statement: Localized;
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
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "hackathon14",
    cover: { ko: "Hackathon.", en: "Hackathon." },
    kicker: { ko: "멋쟁이사자처럼 인턴 · 14기 중앙해커톤", en: "LIKELION Internship · 14th Hackathon" },
    status: { ko: "완료 · 2026.08 본선", en: "Completed · Finals Aug 2026" },
    scope: {
      ko: ["심사 정책 설계", "기능명세서", "도구 구현", "현장 운영"],
      en: ["Judging policy", "Feature specs", "Tool build", "On-site ops"],
    },
    title: { ko: "14기 중앙해커톤 운영", en: "LIKELION 14th Hackathon Ops" },
    period: { ko: "2026.06 – 2026.08", en: "Jun – Aug 2026" },
    role: { ko: "커뮤니티 매니저 인턴 · 운영", en: "Community Manager Intern · Ops" },
    headline: {
      ko: "80개 대학, 2,000명 해커톤의\n규칙과 도구를 만들었습니다.",
      en: "Rules and tools for an 80‑university, 2,000‑person hackathon.",
    },
    did: {
      ko: [
        "심사 정책·100점 배점 공동 설계",
        "플랫폼 기능명세서 2종 공동 작성",
        "제출물 검사 도구 check.py 직접 제작",
        "본선 콘솔 ANIMAL LEAGUE 직접 제작·운영",
        "FAQ 디스코드 봇 직접 제작·운영",
      ],
      en: [
        "Co-designed the judging policy and 100‑pt rubric",
        "Co-wrote two platform feature specs",
        "Built check.py, the submission checker",
        "Built and ran ANIMAL LEAGUE, the finals console",
        "Built and ran the FAQ Discord bot",
      ],
    },
    problem: {
      ko: "313팀 · 562개 레포의 '마감 후 수정 금지' 검증과 2,000명 앞 실시간 토너먼트. 참가자·심사위원·파트너의 이해가 부딪히는 곳마다 규칙이 필요했고, 수작업으로는 불가능했습니다.",
      en: "Verifying 562 repos from 313 teams against a 'no edits after deadline' rule, and running a live tournament for 2,000 people. Every collision between participants, judges, and partners needed a rule, and none of it could be done by hand.",
    },
    decision: {
      ko: "도구는 근거만 내고 판정은 사람이 합니다. 위반 차등 기준(기능 수정 실격 · README 감점 · 직후 커밋 정상참작)을 검사 전에 합의했습니다. 콘솔은 '되돌릴 수 없는 현장'을 전제로 심사위원 명단제, 롤백 없는 결과 공개, 네트워크 장애 백업 모드를 먼저 설계했습니다.",
      en: "Tools present evidence; people decide. Graded violation criteria (code changes = DQ, README edits = deduction, just-late commits = leniency) were agreed before scanning. The console assumed an irreversible live event: a judge allowlist, no rollback after reveal, and a network-failure backup mode came first.",
    },
    statement: { ko: "도구는 근거만 내고,\n판정은 사람이 합니다.", en: "Tools show evidence. People decide." },
    stats: [
      { v: { ko: "562개", en: "562" }, k: { ko: "레포 전 브랜치 전수 검사", en: "repos swept, every branch" } },
      { v: { ko: "5팀", en: "5" }, k: { ko: "위반 적발 · 2팀 실격", en: "violations caught · 2 DQ'd" } },
      { v: { ko: "2.2초", en: "2.2s" }, k: { ko: "콘솔 조작이 무대 스크린에 뜨기까지 (실측)", en: "console-to-stage latency, measured" } },
      { v: { ko: "229건", en: "229" }, k: { ko: "FAQ 봇 응대 · 미응답 0건", en: "questions answered by the bot · 0 missed" } },
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
          { label: { ko: "가설", en: "Hypothesis" }, note: { ko: "마감 후에도 커밋하는 팀이 있습니다. 562개 레포는 손으로 검사할 수 없습니다", en: "Some teams commit after the deadline; 562 repos can't be checked by hand" } },
          { label: { ko: "기준 합의", en: "Agree criteria" }, note: { ko: "검사 전에 결정: 기능 수정 실격 · README 감점 · 직후 커밋 정상참작", en: "Before scanning: code change = DQ · README = deduction · just-late = leniency" } },
          { label: { ko: "전수 검사", en: "Full scan" }, note: { ko: "check.py로 전 브랜치의 마감 후 커밋 · force-push · 비공개 전환 탐지", en: "check.py sweeps every branch for late commits, force-pushes, private flips" } },
          { label: { ko: "근거 리포트", en: "Evidence" }, note: { ko: "결과를 엑셀로 정리해 운영진 회의에 넘깁니다. 자동 판정은 하지 않습니다", en: "Results go to the staff meeting as a spreadsheet. No automatic verdicts" } },
          { label: { ko: "사람의 판정", en: "People decide" }, note: { ko: "위반 5팀 적발, 차등 기준으로 2팀 실격", en: "5 violations found; 2 disqualified under the graded criteria" } },
        ],
        caption: {
          ko: "도구가 사람 대신 판정하는 순간 규칙의 정당성이 무너집니다.",
          en: "The moment a tool judges instead of people, the rule loses its legitimacy.",
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
      ko: "비개발 동료가 개발자와\n대화할 수 있도록, 점심 여섯 번.",
      en: "Six lunch breaks to help non-developers talk with developers.",
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
    problem: {
      ko: "비전공 동료에게 '배포'·'API'는 여전히 어렵습니다. AI에게 물어보면 답이 나오는 시대지만, 기본 흐름을 모르면 무엇을 물어야 할지조차 모릅니다.",
      en: "For non-developer colleagues, 'deploy' and 'API' were still hard. You can ask AI anything now, but without the basic flow, you don't know what to ask.",
    },
    decision: {
      ko: "코드를 가르치지 않기로 했습니다. 목표를 '개발자 되기'에서 '개발자와 대화하기'로 좁히고, 설치·계정 없이 브라우저에서 바로 되는 실습만 남겼습니다. 밥 먹으면서 듣는 환경이 전제였습니다.",
      en: "I decided not to teach code, narrowing the goal from 'becoming a developer' to 'talking with developers', and keeping only demos that run in the browser with no installs or accounts. People would be listening over lunch.",
    },
    statement: { ko: "개발자가 되는 게 아니라,\n개발자와 대화하는 법을 가르쳤습니다.", en: "Not becoming a developer. Talking with one." },
    stats: [
      { v: "5/5", k: { ko: "만족도, 수강자 6명 전원", en: "satisfaction, all 6 attendees" } },
      { v: "9.7/10", k: { ko: "추천 의향", en: "would recommend" } },
      { v: "4.7/5", k: { ko: "개발자와의 대화가 더 이해됩니다", en: "better grasp of developer conversations" } },
      { v: { ko: "6회", en: "6" }, k: { ko: "점심 강의 · 6주", en: "lunch sessions over 6 weeks" } },
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
      ko: "무기명 법인카드 정산을\n8단계에서 3단계로.",
      en: "Anonymous corporate card reconciliation, from 8 steps to 3.",
    },
    did: {
      ko: [
        "현업 회계담당자 인터뷰 · 가설 피벗",
        "Flow ID 익명 태깅 설계",
        "React 대시보드 · FIDO2 생체인증",
        "시장 분석 · IR 발표",
      ],
      en: [
        "Interviews with working accountants · pivot",
        "Flow ID anonymous tagging",
        "React dashboard · FIDO2 biometrics",
        "Market sizing · IR pitch",
      ],
    },
    problem: {
      ko: "지출보고서 1건에 20분, 회계담당자는 월 100건 이상. 기업당 연 약 1,000시간이 정산에 사라집니다. 근본 원인은 무기명 카드에 사용자가 기록되지 않는 구조였습니다.",
      en: "20 minutes per expense report, 100+ a month for each accountant: about 1,000 hours a year per company. The root cause: anonymous cards record no user.",
    },
    decision: {
      ko: "첫 가설 '결제가 불편하다'는 인터뷰에서 깨졌습니다. 진짜 고통은 결제 이후의 수기 전표였습니다. 실명인증 대신 익명성을 지키는 가명토큰을 택하고, MVP를 ERP 전체 연동에서 지출보고서 자동 생성으로 좁혔습니다.",
      en: "The first hypothesis, 'paying is inconvenient,' broke in interviews; the real pain was manual vouchers after payment. We chose pseudonymous tokens over real-name auth to keep anonymity, and cut the MVP from full ERP integration to auto-generated expense reports.",
    },
    statement: { ko: "첫 가설은\n인터뷰에서 깨졌습니다.", en: "The first hypothesis broke in interviews." },
    stats: [
      { v: "8→3", k: { ko: "정산 단계 수, 8단계에서 3단계로", en: "steps in the reconciliation flow, 8 down to 3" } },
      { v: { ko: "5위", en: "5th" }, k: { ko: "102팀 중 · FIN:NECT 장려상", en: "of 102 teams · FIN:NECT award" } },
      { v: { ko: "20분", en: "20 min" }, k: { ko: "기존 지출보고서 1건 작성 시간", en: "per expense report, before" } },
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
    kicker: { ko: "사이드 프로젝트 · 루미클린(RumiClean)", en: "Side Project · RumiClean" },
    status: { ko: "배포 완료 · 결제 연동 전", en: "Deployed · Payments pending" },
    scope: {
      ko: ["상태 흐름 설계", "프론트엔드", "릴리스 관리", "배포"],
      en: ["State-flow design", "Frontend", "Release management", "Deployment"],
    },
    title: { ko: "CleanB", en: "CleanB" },
    period: { ko: "2025.11 – 현재", en: "Nov 2025 – Present" },
    role: { ko: "PM · 프론트엔드 · 디자인 (3인 팀)", en: "PM · Frontend · Design (team of 3)" },
    headline: {
      ko: "해커톤처럼 끝나지 않도록,\n운영 가능한 구조부터.",
      en: "Built to be operated, not just demoed.",
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
    problem: {
      ko: "에어비앤비 호스트는 믿을 청소 인력을, 청소자는 안정적인 일감을 구하기 어렵습니다. 목표는 해커톤처럼 만들고 끝나는 게 아니라 실제 사용자를 받는 서비스로 운영하는 것이었습니다.",
      en: "Airbnb hosts struggle to find reliable cleaners; cleaners struggle to find steady work. The goal was to run it with real users, not ship it once like a hackathon project.",
    },
    decision: {
      ko: "k3s/ArgoCD는 3인 팀에게 과해서 Docker Compose + Caddy로 단순화했습니다. 배포 중 페이지가 깨지는 문제는 정적 파일을 CDN(CloudFront)으로 분리해 해결했습니다.",
      en: "k3s/ArgoCD was too much for three people, so we simplified to Docker Compose + Caddy. Pages breaking mid-deploy were fixed by serving static files from a CDN (CloudFront).",
    },
    statement: { ko: "운영 복잡도는\n팀 크기에 맞춥니다.", en: "Match ops complexity to team size." },
    stats: [
      { v: "170+", k: { ko: "PR 리뷰 · 릴리스 머지", en: "PRs reviewed and released" } },
      { v: { ko: "5단계", en: "5" }, k: { ko: "작업 상태, 수락 대기부터 정산 대기까지", en: "job states, pending to settlement" } },
      { v: { ko: "3인", en: "3" }, k: { ko: "팀, 기획·디자인·개발 분담", en: "people: planning, design, dev" } },
    ],
    hero: {
      src: "/projects/cleanb/01.png",
      alt: { ko: "루미클린 첫 화면: 에어비앤비 청소, 이제 루미클린과 함께", en: "RumiClean home screen: Airbnb cleaning, now with RumiClean" },
    },
    heroTone: "muted",
    diagrams: [
      {
        title: { ko: "작업 상태가 곧 화면 구조", en: "The job's state is the screen structure" },
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
