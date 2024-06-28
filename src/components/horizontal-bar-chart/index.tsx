import { cn } from "@/lib/utils";
import Chart from "react-apexcharts";

export type TData = {
  name: string;
  telemetries: {
    name: string;
    value: number;
    color: string;
  }[];
}[];

interface HorizontalBarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TData;
}

export function HorizontalBarChart({
  data: groups,
  className,
  ...props
}: HorizontalBarChartProps) {
  const max = groups.reduce((acc, group) => {
    return Math.max(
      acc,
      group.telemetries.reduce((acc, telemetry) => {
        return Math.max(acc, telemetry.value);
      }, 0),
    );
  }, 0);
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {groups.map((group, index) => (
        <div key={index} className="flex h-1 flex-1 gap-4">
          <div className="grid w-10 place-content-center overflow-hidden">
            <span className="-rotate-90">{group.name}</span>
          </div>
          <div className="flex h-full flex-1 flex-col">
            {group.telemetries.map((telemetry, idx) => (
              <div key={idx} className="flex h-1 flex-1 gap-2">
                <div className="flex w-16 items-center truncate">
                  {telemetry.name}
                </div>
                <div className="w-1 flex-1">
                  <Chart
                    type="bar"
                    width={"100%"}
                    height={"100%"}
                    series={[
                      {
                        data: [telemetry.value],
                        name: "value",
                      },
                    ]}
                    options={{
                      chart: {
                        type: "bar",
                        background: "transparent",
                        toolbar: { show: false },
                        zoom: { enabled: false },
                        selection: { enabled: false },
                        dropShadow: { enabled: false },
                        sparkline: { enabled: true },
                      },
                      theme: { mode: "dark" },

                      plotOptions: {
                        bar: {
                          borderRadius: 4,
                          borderRadiusApplication: "end",
                          horizontal: true,
                        },
                      },
                      fill: {
                        type: "gradient",
                        gradient: {
                          shade: "dark",
                          gradientToColors: [telemetry.color],
                          shadeIntensity: 1,
                          type: "horizontal",
                          opacityFrom: 1,
                          opacityTo: 0,
                          stops: [0, 100],
                        },
                      },

                      dataLabels: { enabled: true },
                      grid: {
                        yaxis: { lines: { show: false } },
                      },
                      yaxis: {
                        axisBorder: { show: true },
                        axisTicks: { show: false },
                      },
                      xaxis: {
                        max,
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { show: false },
                        categories: [telemetry.name],
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
