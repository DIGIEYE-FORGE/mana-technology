import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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

function ProgressCircle({
  backgroundColor = "red",
  gradientStartColor = "red",
  gradientEndColor = "blue",
  className,
  progress,
}: ProgressCircleProps) {
  return (
    <div className={cn("relative h-40 w-40 text-xl font-semibold", className)}>
      <svg viewBox="0 0 100 100" className="rotate-180">
        <circle
          cx="50"
          cy="50"
          r="49"
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
          stroke="url(#paint0_linear_62_1156)"
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
            id="paint0_linear_62_1156"
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

export default function DevPage() {
  const [progress, setProgress] = useState(50);
  useEffect(() => {
    const intervale = setInterval(() => {
      setProgress((prev) => (prev + 10) % 100);
    }, 1000);
    return () => clearInterval(intervale);
  }, []);
  return (
    <main className="grid place-content-center">
      <ProgressCircle
        className="size-72"
        progress={progress}
        gradientStartColor="#E80054"
        gradientEndColor="#F725D5"
        backgroundColor="#6d0c1a"
      />
    </main>
  );
}

<svg
  width="34"
  height="34"
  viewBox="0 0 34 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="17"
    cy="17"
    r="15"
    fill="#D9D9D9"
    stroke="#FF0000"
    stroke-opacity="0.5"
    stroke-width="4"
  />
</svg>;
