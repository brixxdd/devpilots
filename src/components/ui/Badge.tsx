import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function Badge({ icon: Icon, children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-cyan-200/90 bg-white/70 px-3.5 py-2.5 text-sm font-extrabold text-dev-navy shadow-[0_12px_30px_rgba(53,189,242,0.11)] backdrop-blur-md",
        className,
      )}
    >
      {Icon ? <Icon aria-hidden="true" size={18} className="text-dev-orange" /> : null}
      {children}
    </div>
  );
}
