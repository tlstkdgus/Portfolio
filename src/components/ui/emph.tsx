import { Fragment } from "react";

// 문구 파일의 **강조** 표기를 <strong>으로 바꾼다. 훑어 읽는 사람이 핵심 구절만 잡을 수 있게.
export function Emph({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
