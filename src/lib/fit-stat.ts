// 큰 성과 숫자(.stat)가 칸을 넘지 않게 글자 수로 크기를 정한다.
// .stat은 칸 폭의 30%(30cqi)까지 커지는데, "상태 5단계"처럼 한글이 섞인 값은 칸을 넘어 옆 칸을 덮었다 (2026-09-24).
// 글자 폭 근사: 한글 1em, 숫자·영문 0.62em, 공백·구두점 0.3em. 칸 폭의 95% 안에 들어가는 크기로 제한한다.
// 한 줄에 놓인 숫자들은 크기를 하나로 맞춘다(가장 긴 값 기준). 칸마다 크기가 다르면 기준선이 어긋나 보였다.
export function fitStat(texts: string | string[]): React.CSSProperties {
  const list = Array.isArray(texts) ? texts : [texts];
  const em = Math.max(...list.map(width));
  const cqi = Math.min(30, Math.floor((95 / Math.max(em, 1)) * 10) / 10);
  return { fontSize: `min(clamp(3rem, 9vw, 8.5rem), ${cqi}cqi)` };
}

function width(text: string) {
  let em = 0;
  for (const ch of text) {
    if (/[가-힣]/.test(ch)) em += 1;
    else if (/[\s.,·:→/+–-]/.test(ch)) em += 0.32;
    else em += 0.62;
  }
  return em;
}
