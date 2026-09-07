import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  sub?: string;
  className?: string;
}

export function SectionHeading({ children, sub, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-9 md:mb-11", className)}>
      <h2 className="text-[28px] font-bold tracking-tight text-foreground md:text-[36px]">
        {children}
      </h2>
      {sub ? (
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {sub}
        </p>
      ) : null}
    </div>
  );
}
