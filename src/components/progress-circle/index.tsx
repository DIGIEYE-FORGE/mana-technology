import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ProgressCircleProps
  extends Omit<
    React.HTMLAttributes<SVGAElement>,
    "children" | "viewBox" | "color"
  > {
  gradientStartColor?: string;
  gradientEndColor?: string;
  backgroundColor?: string;
  progress: number;
}

export function ProgressCircle({
  backgroundColor = "red",
  gradientStartColor = "red",
  gradientEndColor = "blue",
  className,
  progress,
}: ProgressCircleProps) {
  return (
    <div className={cn("relative size-32 font-semibold", className)}>
      <svg viewBox="0 0 100 100" className="rotate-180">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          strokeWidth="1"
          stroke="currentColor"
          opacity={0.1}
        />
        <circle cx="50" cy="50" r="40" fill={backgroundColor} opacity={0.4} />
        <circle cx="50" cy="50" r="30" fill={backgroundColor} />
        <circle
          cx="50"
          cy="50"
          r="30.25"
          strokeWidth={0.5}
          fill="none"
          stroke="currentColor"
          opacity={0.2}
        />
        <motion.circle
          startOffset={0.5}
          cx="50"
          cy="50"
          r="35"
          fill="none"
          strokeWidth="2"
          stroke={`url(#${gradientStartColor}-${gradientEndColor})`}
          pathLength={100}
          strokeDasharray={150}
          initial={{
            strokeDashoffset: 150,
          }}
          animate={{
            strokeDashoffset: 150 - progress,
          }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${gradientStartColor}-${gradientEndColor}`}
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientEndColor} />
            <stop offset="1" stopColor={gradientStartColor} />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
        {progress.toFixed(2) + " %"}
      </span>
    </div>
  );
}
