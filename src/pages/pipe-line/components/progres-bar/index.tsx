import { cn } from "@/lib/utils";

interface ProgressBarProps {
  data: {
    percent: number;
    // status: string;
    value: string;
  }[];
  className?: string;
  value?: string;
  unite?: string;
  title: string;
}

function ProgressBar({
  data,
  className,
  value,
  unite,
  title,
}: ProgressBarProps) {
  return (
    <div className={cn("flex w-full items-center px-2")}>
      {/* Render each segment of the progress bar */}
      <span className="p-4 text-xs text-white">{!title ? "--" : title}</span>
      <div className={cn("flex flex-1 gap-0", className)}>
        {(data || [])?.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.value === "True" ? "#26E2B3" : "#E64C3C",
              width: `${item.percent}%`,
              position: "relative",
              height: "100%",
              color: "#fff",
              textAlign: "center",
            }}
            className=""
          ></div>
        ))}
      </div>
      <span className="p-4 text-xs text-white">
        {value ? value : "--"} {unite ? unite : ""}
      </span>
    </div>
  );
}

export default ProgressBar;
