import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Color from "color";

interface CircularProgressProps
  extends Omit<
    React.HTMLAttributes<SVGAElement>,
    "children" | "viewBox" | "color"
  > {
  color?: string;
  progress: number;
  strokeWidth?: number;
  gradientCoefficient?: number;
}

export function CircularProgress({
  color = "blue",
  className,
  progress,
  strokeWidth = 10,
  gradientCoefficient = 0.25,
}: CircularProgressProps) {
  return (
    <div className={cn("relative size-32 text-sm font-semibold", className)}>
      <svg viewBox="0 0 100 100" className="rotate-180">
        <circle
          cx="50"
          cy="50"
          r={50 - strokeWidth}
          fill="none"
          strokeWidth={strokeWidth}
          stroke="url(#background-gradient)"
          opacity={0.3}
        />
        <motion.circle
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          cx="50"
          cy="50"
          r={50 - strokeWidth}
          fill="none"
          strokeWidth={strokeWidth}
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
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={Color(color).darken(gradientCoefficient).hex()} />
            <stop
              offset="1"
              stopColor={Color(color).lighten(gradientCoefficient).hex()}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id={`background-gradient`}
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={"#ffffff1f"} />
            <stop offset="1" stopColor={"ffffff7f"} />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 whitespace-nowrap">
        {progress.toFixed(2) + " %"}
      </span>
    </div>
  );
}
