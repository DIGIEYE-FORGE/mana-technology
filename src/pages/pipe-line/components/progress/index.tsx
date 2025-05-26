import { cn } from "@/lib/utils";
import React from "react";

interface LiquidProgressProps {
  percentage: number | number[];
  className?: string;
  style?: React.CSSProperties;
}

const LiquidProgress: React.FC<LiquidProgressProps> = ({
  percentage,
  className,
  style,
}) => {
  const clamped =
    typeof percentage === "number"
      ? [Math.min(100, Math.max(0, percentage))]
      : [
          Math.min(100, Math.max(0, percentage[0])),
          Math.min(100, Math.max(0, percentage[1])),
        ];

  return (
    <div
      className="relative flex h-full w-full"
      style={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden",
      }}
    >
      {clamped.map((value, index) => (
        <div
          key={index}
          className={cn("h-full w-full flex-1", className)}
          style={{
            ...style,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* FILL CONTAINER */}
          <div
            className="absolute -bottom-2 left-0 w-full overflow-hidden"
            style={{
              height: `${clamped}%`,
            }}
          >
            <svg viewBox="0 0 78 98.5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="waterGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#5ED4FF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#53EFFF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#04B7F8", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#4a90e2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2563eb", stopOpacity: 1 }}
                />
              </radialGradient>
              <path
                d="M74.8439 0.668895C71.5074 1.6981 69.0374 3.9997 65.0002 3.9997C59.8002 3.9997 57.2002 0.181641 52.0002 0.181641C46.8002 0.181641 44.2002 3.9997 39.0002 3.9997C33.8003 3.9997 31.2001 0.181641 26.0001 0.181641C20.8001 0.181641 18.2001 3.9997 13.0001 3.9997C8.96286 3.9997 6.49275 1.6981 3.15642 0.668895C1.65644 0.20625 0 1.02628 0 2.22082V94.6818C0 96.7905 2.32812 98.4999 5.19996 98.4999H72.8C75.6719 98.4999 78 96.7905 78 94.6818V2.22082C78.0002 1.02628 76.3437 0.20625 74.8439 0.668895Z"
                fill="url(#waterGradient)"
              />
            </svg>
          </div>
          <div className="absolute top-4 h-[0.3rem] w-full rounded-md bg-gradient-to-r from-[#98FFE5] to-[#009670]"></div>
          <div className="absolute top-1 h-[0.3rem] w-full rounded-md bg-gradient-to-r from-[#98FFE5] to-[#009670]"></div>
          <div className="absolute bottom-4 h-[0.3rem] w-full rounded-md bg-gradient-to-r from-[#98FFE5] to-[#009670]"></div>
          <div className="absolute bottom-1 h-[0.3rem] w-full rounded-md bg-gradient-to-r from-[#98FFE5] to-[#009670]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white mix-blend-difference">
              {value}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiquidProgress;
