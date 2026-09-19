import { siteConfig } from "@/config/site";

// 공유 미리보기 카드 — 사이트 표지와 같은 톤(검정 바탕, 화면 폭 워드마크, 작은 메타 줄).
// edge 런타임에는 한글 폰트가 없어 한글이 두부(□)로 깨지므로 영문만 쓴다.
export function OgCard({ word, sub, wordSize = 212 }: { word: string; sub: string; wordSize?: number }) {
  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#fafafa",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 56px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#8a8a8a" }}>
        <span>Portfolio 2026</span>
        <span>{siteConfig.author.name.en}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            borderBottom: "2px solid #fafafa",
            paddingBottom: 14,
            marginBottom: 8,
          }}
        >
          <span>{sub}</span>
          <span style={{ color: "#8e9aff" }}>{siteConfig.url.replace("https://", "")}</span>
        </div>
        <div style={{ fontSize: wordSize, fontWeight: 800, letterSpacing: `-${Math.round(wordSize * 0.055)}px`, lineHeight: 1 }}>
          {word}
        </div>
      </div>
    </div>
  );
}
