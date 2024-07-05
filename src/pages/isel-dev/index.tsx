import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import Color from "color";
import { motion } from "framer-motion";

export interface CircularProgressProps
  extends Omit<
    React.HTMLAttributes<SVGAElement>,
    "children" | "viewBox" | "color"
  > {
  progress: number;
  stops: {
    color: string;
    offset: number;
  }[];
  strokeWidth?: number;
  gradientCoefficient?: number;
  unit?: string;
  legend?: string;
  rounded?: boolean;
}

export function CircularProgress({
  className,
  progress,
  stops,
  strokeWidth = 10,
  gradientCoefficient = 0.25,
  rounded = true,
  legend = "",
}: CircularProgressProps) {
  const sortedStops = stops.sort((a, b) => a.offset - b.offset);
  const max = sortedStops[sortedStops.length - 1].offset;
  const color = sortedStops.find((stop) => stop.offset >= progress)?.color;

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
          transition={{ duration: 0.5, delay: 0.25 }}
          cx="50"
          cy="50"
          r={50 - strokeWidth}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={`url(#gradient-${color})`}
          pathLength={100}
          strokeDasharray={150}
          initial={{ strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 150 - (progress / max) * 100 }}
          strokeLinecap={rounded ? "round" : "butt"}
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
            <stop stopColor={"#ffffff"} stopOpacity="0" />
            <stop offset="1" stopColor={"#ffffff"} stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      {legend && (
        <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 whitespace-nowrap">
          {legend}
        </span>
      )}
    </div>
  );
}

function IselDevPage() {
  const progress = 10;
  return (
    <main className="grid h-full place-content-center">
      <Card className="grid aspect-square w-[30rem] flex-col place-content-center gap-4 p-6">
        <CircularProgress
          className="size-72 text-6xl"
          progress={progress}
          legend={`${progress} %`}
          stops={[
            { color: "blue", offset: 10 },
            { color: "green", offset: 30 },
            { color: "red", offset: 50 },
          ]}
        />
      </Card>
    </main>
  );
}

export default IselDevPage;
