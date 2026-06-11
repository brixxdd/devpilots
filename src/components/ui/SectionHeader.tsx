import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, copy, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-10 flex items-end justify-between gap-7 max-lg:block", className)}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="max-w-[820px] font-display text-[clamp(2.125rem,4.6vw,4rem)] font-black leading-[1.02] tracking-[-0.02em] text-dev-black text-balance">
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-[460px] text-[17px] text-dev-gray max-lg:mt-4">{copy}</p> : null}
    </Reveal>
  );
}
