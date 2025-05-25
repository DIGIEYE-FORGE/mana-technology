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
      className={"min-w-[14rem]rounded-lg relative isolate bg-[#021E3F]"}
      style={style}
    >
      <span className="absolute left-0 top-0 z-10 h-5 w-5 rounded-tl-lg border-l-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute right-0 top-0 z-10 h-5 w-5 rounded-tr-lg border-r-[2px] border-t-[2px] border-[#ACB171]"></span>
      <span className="absolute bottom-0 left-0 z-10 h-5 w-5 rounded-bl-lg border-b-[2px] border-l-[2px] border-[#ffffff]"></span>
      <span className="absolute bottom-0 right-0 z-10 h-5 w-5 rounded-br-lg border-b-[2px] border-r-[2px] border-[#ffffff]"></span>
      <div
        className={cn(
          "z-1 flex h-full w-full flex-col justify-center rounded-lg p-2 text-white backdrop-blur-md",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomCardComponent;
