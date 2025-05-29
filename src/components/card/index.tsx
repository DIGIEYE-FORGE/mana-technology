import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, style, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded bg-card/10",

        className,
      )}
      style={{
        ...style,
      }}
      {...props}
    >
      <span className="absolute left-0 top-0 z-10 h-5 w-8 rounded-tl-lg border-l-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute right-0 top-0 z-10 h-5 w-8 rounded-tr-lg border-r-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute bottom-0 left-0 z-10 h-5 w-8 rounded-bl-lg border-b-[2px] border-l-[2px] border-[#ffffff]"></span>
      <span className="absolute bottom-0 right-0 z-10 h-5 w-8 rounded-br-lg border-b-[2px] border-r-[2px] border-[#ffffff]"></span>
      {children}
    </div>
  );
}
6;
