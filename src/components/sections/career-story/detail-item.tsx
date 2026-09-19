import React from "react";
import { type CareerDetailItem } from "@/data/career-detail";
import { cn } from "@/lib/utils";

interface DetailItemProps {
  item: CareerDetailItem;
  isKo: boolean;
  /** 결과 항목처럼 한 단계 강조할 때 */
  strong?: boolean;
}

export const DetailItem = React.memo(function DetailItem({ item, isKo, strong }: DetailItemProps) {
  return (
    <li
      className={cn(
        "leading-[1.8]",
        strong ? "text-[17px] font-semibold tracking-[-0.01em] text-foreground" : "text-[15px] text-foreground/85"
      )}
    >
      {isKo ? item.text : item.textEn}
      {item.subItems && item.subItems.length > 0 && (
        <ul className="mt-3 space-y-2 border-l border-border pl-4">
          {item.subItems.map((sub, k) => (
            <li key={k} className="text-[14px] font-normal leading-[1.75] text-muted-foreground">
              {isKo ? sub.text : sub.textEn}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});
