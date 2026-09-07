// 메인 화면 전면에 배치하는 대표 프로젝트 3개. 상세는 /career 케이스 스터디로 연결.
export interface SelectedProject {
  id: string;
  label: string;
  labelEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  problem: string;
  problemEn: string;
  decision: string;
  decisionEn: string;
  impact: string;
  impactEn: string;
  image: string;
  caseId: string;
  liveUrl?: string;
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "cleanb",
    label: "LIVE SERVICE",
    labelEn: "LIVE SERVICE",
    title: "CleanB",
    titleEn: "CleanB",
    subtitle: "에어비앤비 청소 매칭 플랫폼 — 3인 팀 PM, 실서비스 운영 중",
    subtitleEn: "Airbnb cleaning matching platform — PM in a 3-person team, live in production",
    problem: "호스트는 믿을 청소 인력을, 청소자는 안정적인 일감을 구하기 어렵다",
    problemEn: "Hosts can't find reliable cleaners; cleaners can't find steady work",
    decision: "작업 '상태 머신'에서 화면을 도출하고, 운영 복잡도를 팀 크기에 맞춰 단순화",
    decisionEn: "Derived screens from the job state machine; matched ops complexity to team size",
    impact: "실서비스 운영 중 · PR 170+ 릴리스 관리",
    impactEn: "Live in production · managing 170+ PR releases",
    image: "/projects/cleanb/03.png",
    caseId: "cleanb",
    liveUrl: "https://www.rumiclean.com",
  },
  {
    id: "hackathon14",
    label: "EVENT OPS · 80개 대학 2,000명+",
    labelEn: "EVENT OPS · 80 UNIVERSITIES, 2,000+",
    title: "14기 중앙해커톤 운영",
    titleEn: "LIKELION 14th Hackathon Ops",
    subtitle: "심사 정책 설계와 AI로 직접 만든 운영 도구 3종",
    subtitleEn: "Judging policy design and 3 self-built AI ops tools",
    problem: "이해관계가 충돌하고, 562개 레포 검증과 실시간 토너먼트는 수작업 불가",
    problemEn: "Colliding interests — and verifying 562 repos or running a live tournament was not a manual job",
    decision: "판정 기준을 먼저 합의하고, 없는 도구 3종(검사·콘솔·봇)을 AI로 직접 제작",
    decisionEn: "Agreed verdict criteria first, then built the 3 missing tools with AI",
    impact: "위반 5팀 적발 · 본선 토너먼트 콘솔로 완주 · FAQ 봇 229건 응대",
    impactEn: "5 violations caught · finals run end-to-end on the console · 229 questions answered by the bot",
    image: "/projects/hackathon14/01.png",
    caseId: "hackathon14",
  },
  {
    id: "flowpay",
    label: "B2B FINTECH",
    labelEn: "B2B FINTECH",
    title: "FlowPay",
    titleEn: "FlowPay",
    subtitle: "법인카드 지출과 회계 처리를 연결하는 SaaS",
    subtitleEn: "A SaaS connecting corporate card spending to accounting",
    problem: "무기명 법인카드는 사용자가 기록되지 않아, 사람이 일일이 정산해야 한다",
    problemEn: "Anonymous corporate cards record no user — every expense is matched by hand",
    decision: "Flow ID 익명 태깅 + FIDO2 생체인증으로 프로세스를 8단계에서 3단계로",
    decisionEn: "Flow ID anonymous tagging + FIDO2 biometric auth — 8 steps down to 3",
    impact: "FIN:NECT 챌린지 102팀 중 5위 · 회계담당자 인터뷰 기반 피벗",
    impactEn: "5th of 102 teams at FIN:NECT · pivoted on accountant interviews",
    image: "/projects/flowpay/04.png",
    caseId: "flowpay",
    liveUrl: "https://flowpay.vercel.app",
  },
];
