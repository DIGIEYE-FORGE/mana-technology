import { cn } from "@/lib/utils";
import React from "react";

interface CustomCardComponentProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomCardComponent = ({
  className,
  children,
  style,
}: CustomCardComponentProps) => {
  return (
    <div
      className={cn(
        "relative isolate rounded-lg bg-[#021E3F]/60 p-2 backdrop-blur-sm",
        className,
      )}
      style={style}
    >
      <span className="absolute left-0 top-0 z-10 h-5 w-5 rounded-tl-lg border-l-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute right-0 top-0 z-10 h-5 w-5 rounded-tr-lg border-r-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute bottom-0 left-0 z-10 h-5 w-5 rounded-bl-lg border-b-[2px] border-l-[2px] border-[#ffffff]"></span>
      <span className="absolute bottom-0 right-0 z-10 h-5 w-5 rounded-br-lg border-b-[2px] border-r-[2px] border-[#ffffff]"></span>
      {children}
    </div>
  );
};

export default CustomCardComponent;
