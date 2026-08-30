import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "mb-8 text-2xl font-bold tracking-tight text-foreground md:mb-10",
        className
      )}
    >
      {children}
    </h2>
  );
}
