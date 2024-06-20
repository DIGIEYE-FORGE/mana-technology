import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, style, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg bg-[#0A59B7]/20 shadow-inner shadow-white/50",
        className,
      )}
      style={{
        boxShadow: "inset 0 0 1rem 0px rgba(255,255,255,0.2)",
        ...style,
      }}
      {...props}
    >
      <>{children}</>
      <span className="absolute left-0 top-0 h-6 w-8 rounded-[0.5rem_0_0_0] border-l-2 border-t-2 border-white/75"></span>
      <span className="absolute right-0 top-0 h-6 w-8 rounded-[0_0.5rem_0_0] border-r-2 border-t-2 border-white/75"></span>
      <span className="absolute bottom-0 left-0 h-6 w-8 rounded-[0_0_0_0.5rem] border-b-2 border-l-2 border-white/75"></span>
      <span className="absolute bottom-0 right-0 h-6 w-8 rounded-[0_0_0.5rem_0] border-b-2 border-r-2 border-white/75"></span>
    </div>
  );
}
