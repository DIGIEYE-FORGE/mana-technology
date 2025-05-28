// import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
// import CircularGauge from "../progres-circle";
import ChloreSVG from "../chlore";
import ReactApexChart from "react-apexcharts";
// import ProgressBar from "../progres-bar";

interface DashboardSPUProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export function DashboardSPU({ data }: DashboardSPUProps) {
  const progressData = [
    { id: 1, name: "B1", percentage: Number(data.levelB1?.at(-1)?.y) || 0 },
    { id: 2, name: "B2", percentage: Number(data.levelB2?.at(-1)?.y) || 0 },
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
  ];

  return (
    <div className="relative mb-8 flex h-full min-h-0 flex-1 flex-col overflow-hidden pl-12 pr-6">
      {/* Summary bar */}
      <div className="mb-6 ml-auto grid w-full max-w-[60rem] grid-cols-3 grid-rows-1 gap-2">
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
                      {dataItem.key
                        ? data[dataItem.key] || dataItem.value
                        : dataItem.value}
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
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  title: {
                    text: "Flows",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                  },
                  tooltip: {
                    theme: "dark",
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
                    text: "Level",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                  },
                  tooltip: {
                    theme: "dark",
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
                    name: "B1",
                    data: data.levelB1 || [],
                  },
                  {
                    name: "B2",
                    data: data.levelB2 || [],
                  },
                ]}
              />
            </div>
          </Card>
          <Card className="flex h-[22%] min-h-0 flex-1 flex-col">
            <div className="relative flex items-center justify-between p-0 px-4 pt-2">
              <span className="text-[14px] font-bold text-white">Chlorine</span>
              <div className="absolute right-4 flex gap-2 text-xs">
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Input {data.chloreInput?.at(-1)?.y ?? "XX"}
                </span>
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Output {data.chlorePlant?.at(-1)?.y ?? "XX"}
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
              stops={[]}
              percentage={progressData.map((item) => ({
                value: item.percentage,
                title: item.name,
              }))}
              style={{ background: "#87EFD5" }}
              className="h-[14rem] !w-[9rem]"
            />
          </Card>
          <Card className="flex min-h-0 flex-1 flex-col">
            <span className="mb-2 p-2 text-[14px] font-bold text-white">
              Chlorine Stations
            </span>
            <div className="flex min-h-0 flex-1 items-center justify-center gap-0">
              <ChloreSVG
                topTitle="SP01-M-03"
                leftTitle="LSLL-03"
                bottomTitle="SP01-M-01"
                value={data.station1 ?? "XX"}
                width={240}
                height={170}
              />
              <ChloreSVG
                topTitle="SP01-M-03"
                leftTitle="LSLL-04"
                bottomTitle="SP01-M-02"
                value={data.station2 ?? "XX"}
                width={240}
                height={170}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
