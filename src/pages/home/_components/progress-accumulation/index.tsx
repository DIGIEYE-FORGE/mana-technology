import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ProgressAccumulation() {
  const { currentTarget, finalTarget, progress } = {
    currentTarget: 60,
    finalTarget: 100,
    progress: 50,
  };
  const { progressColor, currentTargetColor, finalTargetColor } = {
    progressColor: "#FFC300",
    currentTargetColor: "#E80054",
    finalTargetColor: "#4D09E8",
  };
  const strokeWidth = 20;
  return (
    <Card className="col-span-3 row-span-7 flex flex-col gap-4 p-4">
      <h3 className="text-center text-lg font-bold">
        % Actual vs Monthly Planned
      </h3>

      <div className="relative h-1 flex-1 p-4">
        {currentTarget && progress ? (
          <span
            className={cn(
              "absolute right-1/2 top-1/2 translate-x-1/2 text-3xl font-bold text-green-500",
              {
                "text-red-500": progress < currentTarget,
              },
            )}
          >
            {progress >= currentTarget && "+"}
            {(((progress - currentTarget) / currentTarget) * 100).toFixed(2)}%
          </span>
        ) : null}
        <svg
          className="h-full w-full"
          width="144"
          height="74"
          viewBox="0 0 144 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
            stroke={finalTargetColor}
            strokeWidth={strokeWidth}
            pathLength={100}
            strokeDasharray={100}
            initial={{
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 0,
            }}
          />
          {progress >= currentTarget && (
            <motion.path
              d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={80}
              initial={{
                strokeDashoffset: 100,
              }}
              animate={{
                strokeDashoffset: 100 - (progress / finalTarget) * 100,
              }}
            />
          )}
          <motion.path
            d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
            stroke={currentTargetColor}
            strokeWidth={strokeWidth}
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={80}
            initial={{
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 100 - (currentTarget / finalTarget || 0) * 100,
            }}
          />
          {progress < currentTarget && (
            <motion.path
              d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
              stroke={progressColor}
              strokeWidth="20"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={80}
              initial={{
                strokeDashoffset: 100,
              }}
              animate={{
                strokeDashoffset: 100 - (progress / finalTarget) * 100,
              }}
            />
          )}
        </svg>
      </div>
      <div className="relative flex flex-wrap justify-center gap-x-4 text-xs font-medium">
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: finalTargetColor }}
          ></span>
          <span>Final Target: {finalTarget}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: currentTargetColor }}
          ></span>
          <span>Current Target: {currentTarget}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: progressColor }}
          ></span>
          <div className="flex items-center gap-2">
            <span>progress: {progress}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
