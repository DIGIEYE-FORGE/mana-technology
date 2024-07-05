import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import Color from "color";

export interface ProgressCircleProps
  extends Omit<
    React.HTMLAttributes<SVGAElement>,
    "children" | "viewBox" | "color"
  > {
  color?: string;
  progress: number;
  unit?: string;
}

export function ProgressCircle({
  color = "red",
  className,
  progress,
  unit = "%",
}: ProgressCircleProps) {
  return (
    <div className={cn("relative size-32 text-sm font-semibold", className)}>
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
        <circle cx="50" cy="50" r="40" fill={color} opacity={0.2} />
        <circle cx="50" cy="50" r="30" fill={Color(color).darken(0.2).hex()} />
        <circle
          cx="50"
          cy="50"
          r="30.25"
          fill="none"
          stroke="currentColor"
          opacity={0.2}
        />
        <motion.circle
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          cx="50"
          cy="50"
          r="36"
          fill="none"
          strokeWidth="3"
          stroke={`url(#gradient-${color})`}
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
        <motion.circle
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          cx="50"
          cy="50"
          r="36"
          fill="none"
          strokeWidth="6"
          opacity={0.66}
          stroke={`url(#gradient-${color})`}
          style={{
            filter: "url(#dropshadow)",
          }}
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
            id={`gradient-${color}`}
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={Color(color).darken(0.2).hex()} />
            <stop offset="1" stopColor={Color(color).lighten(0.2).hex()} />
          </linearGradient>
        </defs>
        <filter id="dropshadow" x="-2" y="-2" width="200" height="200">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </svg>
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 whitespace-nowrap">
        {progress.toFixed(2) + " " + unit}
      </span>
    </div>
  );
}
