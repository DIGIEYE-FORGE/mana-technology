// import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
// import CircularGauge from "../progres-circle";
import ChloreSVG from "../chlore";
import ReactApexChart from "react-apexcharts";
import { parseBoolean } from "@/lib/utils";
// import ProgressBar from "../progres-bar";

interface DashboardSPUProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export function DashboardSPU({ data }: DashboardSPUProps) {
  const progressData = [
    {
      id: 1,
      name: "Basin 1",
      percentage: Number(data.levelB1?.at(-1)?.y) || 0,
    },
    {
      id: 2,
      name: "Basin 2",
      percentage: Number(data.levelB2?.at(-1)?.y) || 0,
    },
  ];

  const res = [
    {
      name: "Flow rate",
      data: [
        {
          name: "Input",
          value: data.flowRateInput || 0,
          key: "flowRateInput",
        },
        {
          name: "To plant",
          value: data.flowRatePlant || 0,
          key: "flowRatePlant",
        },
      ],
    },
    {
      name: "Volume",
      data: [
        {
          name: "Input",
          value: data.volumeInput || 0,
          key: "volumeInput",
        },
        {
          name: "To plant",
          value: data.volumePlant || 0,
          key: "volumePlant",
        },
      ],
    },
    {
      name: "Stock",
      data: [
        {
          name: "Value",
          value: data.stock || 0,
          key: "stock",
        },
      ],
    },
    {
      name: "Turbidity (NTU)",
      data: [
        {
          name: "Turbidity",
          value: data.trubidite || 0,
          key: "trubidite",
        },
      ],
    },
  ];

  return (
    <div className="relative mb-8 flex h-full min-h-0 flex-1 flex-col overflow-hidden pl-12 pr-6">
      {/* Summary bar */}
      <div className="mb-6 ml-auto grid w-full max-w-[60rem] grid-cols-4 grid-rows-1 gap-2">
        {res.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-[14px] font-bold">{item.name}</span>
            <div className="flex w-full gap-2">
              {item.data.map((dataItem, dataIndex) => (
                <div key={dataIndex} className="flex w-full flex-col">
                  <span className="text-center text-sm">{dataItem.name}</span>
                  <div className="flex items-center justify-center gap-2 rounded-2xl border border-white bg-[#021E3F]/80 p-1 px-6 text-white backdrop-blur-md">
                    <span className="text-lg font-bold">
                      {(dataItem.key
                        ? data[dataItem.key] || dataItem.value
                        : dataItem.value
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Main dashboard grid */}
      <div className="flex h-full min-h-0 flex-1 flex-row gap-6 overflow-hidden">
        {/* Left column: 3 rows */}
        <div className="flex h-full min-h-0 flex-1 flex-col gap-3">
          <Card className="flex h-[22%] min-h-0 flex-1 flex-col">
            <div className="[&>] flex-1 pl-2 pr-2 [&>*]:h-full [&>*]:w-full">
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    type: "line",
                    animations: {
                      enabled: false, // Disable animations for smoother performance
                    },
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  title: {
                    text: "Flows (l/s)",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                  },
                  tooltip: {
                    theme: "dark",
                    y: {
                      formatter: (val: number) => `${val.toFixed(2)} (l/s)`,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: ["#0843e4", "#26E2B3"],
                  legend: {
                    labels: {
                      colors: "#A2B0B8",
                    },
                    markers: {
                      shape: "circle",
                    },
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "Input",
                    data: data.flowInput || [],
                  },
                  {
                    name: "Output",
                    data: data.flowPlant || [],
                  },
                ]}
              />
            </div>
          </Card>
          <Card className="flex h-[18%] min-h-0 flex-1 flex-col">
            <div className="[&>] flex-1 pl-2 pr-2 [&>*]:h-full [&>*]:w-full">
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  title: {
                    text: "Level (%)",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                  },
                  tooltip: {
                    theme: "dark",
                    y: {
                      formatter: (val: number) => `${val.toFixed(0)} (%)`,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: ["#0843e4", "#26E2B3"],
                  legend: {
                    labels: {
                      colors: "#A2B0B8",
                    },
                    markers: {
                      shape: "circle",
                    },
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    min: 0,
                    max: 100,
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 0,
                  },
                }}
                series={[
                  {
                    name: "B1",
                    data: data.levelB1.map(
                      (item: { x: string; y: number }) => ({
                        x: item.x,
                        y: (item.y / 2.7) * 100, // Assuming max level is 2.7
                      }),
                    ),
                  },
                  {
                    name: "B2",
                    data: data.levelB2.map(
                      (item: { x: string; y: number }) => ({
                        x: item.x,
                        y: (item.y / 2.7) * 100, // Assuming max level is 2.7
                      }),
                    ),
                  },
                ]}
              />
            </div>
          </Card>
          <Card className="flex h-[22%] min-h-0 flex-1 flex-col">
            <div className="relative flex items-center justify-between p-0 px-4 pt-2">
              <span className="text-[14px] font-bold text-white">
                Chlorine (mg/l)
              </span>
              <div className="absolute right-4 flex gap-2 text-xs">
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Input {data.chloreInput?.at(-1)?.y ?? "00"}
                </span>
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Output {data.chlorePlant?.at(-1)?.y ?? "00"}
                </span>
              </div>
            </div>
            <div className="[&>] flex-1 pl-2 pr-2 [&>*]:h-full [&>*]:w-full">
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  tooltip: {
                    theme: "dark",
                    y: {
                      formatter: (val: number) => `${val.toFixed(2)} (mg/l)`,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: ["#0843e4", "#26E2B3"],
                  legend: {
                    labels: {
                      colors: "#A2B0B8",
                    },
                    markers: {
                      shape: "circle",
                    },
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "Input",
                    data: data.chloreInput || [],
                  },
                  {
                    name: "Output",
                    data: data.chlorePlant || [],
                  },
                ]}
              />
            </div>
          </Card>
        </div>
        {/* Right column: 2 rows */}
        <div className="flex h-full min-h-0 flex-1 flex-col gap-3">
          <Card className="flex h-[28%] min-h-0 flex-1 items-center justify-center">
            <LiquidProgress
              textStyle="text-white font-bold"
              percentage={progressData.map((item) => ({
                value: (item.percentage / 2.7) * 100,
                title: item.name,
              }))}
              style={{ background: "white" }}
              className="h-[14rem] !w-[9rem]"
              indictors={[
                [
                  data.basinLL1 == "True" ? true : false,
                  data.basinL1 == "True" ? true : false,
                  data.basinH1 == "True" ? true : false,
                  data.basinHH1 == "True" ? true : false,
                ],
                [
                  data.basinLL2 == "True" ? true : false,
                  data.basinL2 == "True" ? true : false,
                  data.basinH2 == "True" ? true : false,
                  data.basinHH2 == "True" ? true : false,
                ],
              ]}
            />
          </Card>
          <Card className="flex min-h-0 flex-1 flex-col">
            <span className="mb-2 p-2 text-[14px] font-bold text-white">
              Chlorine Stations
            </span>
            <div className="flex min-h-0 flex-1 items-center justify-center gap-0">
              <ChloreSVG
                topIndicator={parseBoolean(false)}
                leftIndicator={parseBoolean(true)}
                bottomIndicator={parseBoolean(data.station1)}
                className="h-[14rem] w-[14rem]"
              />
              <ChloreSVG
                topIndicator={parseBoolean(false)}
                leftIndicator={parseBoolean(false)}
                bottomIndicator={parseBoolean(data.station2)}
                className="h-[14rem] w-[14rem]"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
