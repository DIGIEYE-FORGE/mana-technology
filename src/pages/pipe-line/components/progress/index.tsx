import { cn } from "@/lib/utils";
import React from "react";

interface LiquidProgressProps {
  percentage: number;
  className?: string;
  style?: React.CSSProperties;
}

const LiquidProgress: React.FC<LiquidProgressProps> = ({
  percentage,
  className,
  style,
}) => {
  const clamped = Math.min(100, Math.max(0, percentage));

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        ...style,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#0A4B51",
      }}
    >
      {/* FILL CONTAINER */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{
          height: `${clamped}%`,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 78 99"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.8439 0.668895C71.5074 1.6981 69.0374 3.9997 65.0002 3.9997C59.8002 3.9997 57.2002 0.181641 52.0002 0.181641C46.8002 0.181641 44.2002 3.9997 39.0002 3.9997C33.8003 3.9997 31.2001 0.181641 26.0001 0.181641C20.8001 0.181641 18.2001 3.9997 13.0001 3.9997C8.96286 3.9997 6.49275 1.6981 3.15642 0.668895C1.65644 0.20625 0 1.02628 0 2.22082V94.6818C0 96.7905 2.32812 98.4999 5.19996 98.4999H72.8C75.6719 98.4999 78 96.7905 78 94.6818V2.22082C78.0002 1.02628 76.3437 0.20625 74.8439 0.668895Z"
            fill="#53EFFF"
          />
        </svg>
      </div>

      {/* CENTERED TEXT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-black text-white">
          {clamped}%
        </span>
      </div>
    </div>
  );
};

export default LiquidProgress;
