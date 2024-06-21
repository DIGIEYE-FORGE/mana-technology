import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, style, ...props }: CardProps) {
  return (
    <div
      className={cn("card", className)}
      style={{
        ...style,
      }}
      {...props}
    >
      <>{children}</>
      <span className="absolute left-0 top-0 h-1/4 w-1/4 rounded-[24px_0_0_0] border-l-2 border-t-2 border-primary"></span>
      <span className="absolute right-0 top-0 h-1/4 w-1/4 rounded-[0_24px_0_0] border-r-2 border-t-2 border-primary"></span>
      <span className="absolute bottom-0 left-0 h-1/4 w-1/4 rounded-[0_0_0_24px] border-b-2 border-l-2 border-white/75"></span>
      <span className="absolute bottom-0 right-0 h-1/4 w-1/4 rounded-[0_0_24px_0] border-b-2 border-r-2 border-white/75"></span>
    </div>
  );
}
