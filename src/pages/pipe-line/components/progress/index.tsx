import { cn } from "@/lib/utils";
import React from "react";

interface LiquidProgressProps {
  percentage: {
    title?: string;
    value: number;
  }[];
  className?: string;
  style?: React.CSSProperties;
  textStyle?: string;
  colorHH?: string;
  colorH?: string;
  colorL?: string;
  colorLL?: string;
  indictors: [boolean, boolean, boolean, boolean];
}

const LiquidProgress: React.FC<LiquidProgressProps> = ({
  percentage,
  className,
  style,
  textStyle = "text-gray-700",
  indictors,
}) => {
  // Ensure percentage is always an array and has valid values
  const percentageArray = Array.isArray(percentage) ? percentage : [percentage];

  const clamped = percentageArray
    ?.filter((item) => item && typeof item.value !== "undefined")
    ?.map((item) =>
      Math.max(0, Math.min(100, parseFloat(String(item.value || 0)))),
    );

  if (clamped?.length === 0) {
    return <div className={cn("h-0 w-0", className)} style={style} />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex min-w-[7rem] justify-between gap-4 text-center text-xs font-semibold">
        {percentage?.map((item, index) => (
          <div
            key={index}
            className={cn("flex flex-col items-center", textStyle)}
          >
            {item.title && (
              <span className="text-2xl font-semibold">{item?.title || ""}</span>
            )}
          </div>
        ))}
      </div>
      <div
        className={cn("relative flex h-fit w-fit gap-2")}
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
        }}
      >
        {clamped?.map((value, index) => (
          <div
            key={index}
            className={cn("relative h-full", className)}
            style={{
              background: "white",
              ...style,
            }}
          >
            <div
              className={cn(
                "absolute bottom-0 left-0 h-full w-full overflow-hidden",
                // className,
              )}
              style={{
                height: `${value}%`,
                width: "100%",
              }}
            >
              <svg
                viewBox="0 0 78 98.5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="M74.8439 0.668895C71.5074 1.6981 69.0374 3.9997 65.0002 3.9997C59.8002 3.9997 57.2002 0.181641 52.0002 0.181641C46.8002 0.181641 44.2002 3.9997 39.0002 3.9997C33.8003 3.9997 31.2001 0.181641 26.0001 0.181641C20.8001 0.181641 18.2001 3.9997 13.0001 3.9997C8.96286 3.9997 6.49275 1.6981 3.15642 0.668895C1.65644 0.20625 0 1.02628 0 2.22082V94.6818C0 96.7905 2.32812 98.4999 5.19996 98.4999H72.8C75.6719 98.4999 78 96.7905 78 94.6818V2.22082C78.0002 1.02628 76.3437 0.20625 74.8439 0.668895Z"
                  fill={"#0553fb"}
                />
              </svg>
            </div>
            {[10, 20, 80, 90]?.map((bottom, index) => (
              <div
                key={index}
                className={cn(
                  "absolute h-1 w-full translate-y-1/2 bg-red-500",
                  {
                    "bg-gradient-to-r from-[#98FFE5] to-[#009670]":
                      // index <= 1 ? !indictors[index] : indictors[index],
                      !indictors[index],
                  },
                )}
                style={{
                  bottom: `${bottom}%`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white mix-blend-difference">
                {value?.toFixed?.(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquidProgress;
