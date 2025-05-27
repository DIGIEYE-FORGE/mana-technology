import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
// import CircularGauge from "../progres-circle";
import ChloreSVG from "../chlore";
// import ProgressBar from "../progres-bar";

const progressData = [
  { id: 1, name: "", percentage: 80 },
  { id: 2, name: "", percentage: 80 },
];
const flowsInputData = [
  { x: 1, y: 55 },
  { x: 3, y: 60 },
  { x: 5, y: 70 },
  { x: 7, y: 65 },
  { x: 9, y: 100 },
  { x: 11, y: 80 },
  { x: 13, y: 75 },
  { x: 15, y: 95 },
  { x: 17, y: 100 },
  { x: 19, y: 90 },
  { x: 21, y: 95 },
];
const flowsOutputData = [
  { x: 1, y: 70 },
  { x: 3, y: 50 },
  { x: 5, y: 60 },
  { x: 7, y: 80 },
  { x: 9, y: 90 },
  { x: 11, y: 100 },
  { x: 13, y: 60 },
  { x: 15, y: 70 },
  { x: 17, y: 95 },
  { x: 19, y: 60 },
  { x: 21, y: 90 },
];

const levelData = [
  { x: 1, y: 10 },
  { x: 3, y: 40 },
  { x: 5, y: 35 },
  { x: 7, y: 50 },
  { x: 9, y: 30 },
  { x: 11, y: 55 },
  { x: 13, y: 40 },
  { x: 15, y: 60 },
  { x: 17, y: 90 },
  { x: 19, y: 25 },
  { x: 21, y: 50 },
];

const chloreInputData = [
  { x: 1, y: 20 },
  { x: 3, y: 30 },
  { x: 5, y: 40 },
  { x: 7, y: 35 },
  { x: 9, y: 50 },
  { x: 11, y: 70 },
  { x: 13, y: 45 },
  { x: 15, y: 60 },
  { x: 17, y: 80 },
  { x: 19, y: 40 },
  { x: 21, y: 65 },
];

const chloreOutputData = [
  { x: 1, y: 30 },
  { x: 3, y: 40 },
  { x: 5, y: 50 },
  { x: 7, y: 60 },
  { x: 9, y: 70 },
  { x: 11, y: 80 },
  { x: 13, y: 90 },
  { x: 15, y: 100 },
  { x: 17, y: 95 },
  { x: 19, y: 60 },
  { x: 21, y: 90 },
];

const res = [
  {
    name: "Flow rate",
    data: [
      {
        name: "input",
        value: 0,
      },
      {
        name: "to plant",
        value: 0,
      },
    ],
  },
  {
    name: "volume",
    data: [
      {
        name: "input",
        value: 0,
      },
      {
        name: "to plant",
        value: 0,
      },
    ],
  },
  {
    name: "Stock",
    data: [
      {
        name: "input",
        value: 0,
      },
      {
        name: "to plant",
        value: 0,
      },
    ],
  },
];
export function DashboardSPU() {
  return (
    <div className="relative mb-8 flex h-full min-h-0 flex-1 flex-col overflow-hidden pl-12 pr-6">
      {/* Summary bar */}
      <div className="mb-6 ml-auto grid w-full max-w-[60rem] grid-cols-3 grid-rows-1 gap-2">
        {res.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-lg font-bold">{item.name}</span>
            <div className="flex w-full gap-2">
              {item.data.map((dataItem, dataIndex) => (
                <div key={dataIndex} className="flex w-full flex-col">
                  <span className="text-center text-sm">{dataItem.name}</span>
                  <div className="flex items-center justify-center gap-2 rounded-2xl border border-white bg-[#021E3F]/80 p-1 px-6 text-white backdrop-blur-md">
                    <span className="text-lg font-bold">{dataItem.value}</span>
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
            <div className="flex p-0 px-4 pt-2">
              <span className="font-medium text-white">Flows</span>
            </div>
            <div className="flex-1 pl-2 pr-2">
              <LineChartWidget
                attributes={{
                  telemetries: [
                    {
                      area: false,
                      label: "Input",
                      color: "#26E2B3",
                      serial: "JZVATMKQ1A8DA2P1",
                      data: flowsInputData,
                    },
                    {
                      area: false,
                      label: "Output",
                      color: "#FFD2A6",
                      serial: "JZVATMKQ1A8DA2P1",
                      data: flowsOutputData,
                    },
                  ],
                }}
              />
            </div>
          </Card>
          <Card className="flex h-[18%] min-h-0 flex-1 flex-col">
            <div className="flex p-0 px-4 pt-2">
              <span className="font-medium text-white">Level</span>
            </div>
            <div className="flex-1 pl-2 pr-2">
              <LineChartWidget
                max={140}
                attributes={{
                  telemetries: [
                    {
                      area: false,
                      label: "Level",
                      color: "#26E2B3",
                      data: levelData,
                    },
                  ],
                }}
              />
            </div>
          </Card>
          <Card className="flex h-[22%] min-h-0 flex-1 flex-col">
            <div className="relative flex items-center justify-between p-0 px-4 pt-2">
              <span className="font-medium text-white">Chlore</span>
              <div className="absolute right-4 flex gap-2 text-xs">
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Input XX
                </span>
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Output XX
                </span>
              </div>
            </div>
            <div className="flex-1 pl-2 pr-2">
              <LineChartWidget
                attributes={{
                  telemetries: [
                    {
                      area: false,
                      label: "Input",
                      color: "#26E2B3",
                      data: chloreInputData,
                    },
                    {
                      area: false,
                      label: "Output",
                      color: "#FFD2A6",
                      data: chloreOutputData,
                    },
                  ],
                }}
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
                value: item.percentage,
                title: item.name,
              }))}
              style={{ background: "#87EFD5" }}
              className="h-[14rem] !w-[9rem]"
            />
          </Card>
          <Card className="flex min-h-0 flex-1 flex-col">
            <span className="mb-2 p-2 text-lg font-bold text-white">
              Chlore Station
            </span>
            <div className="flex min-h-0 flex-1 items-center justify-center gap-0">
              <ChloreSVG
                topTitle="SP01-M-03"
                leftTitle="LSLL-03"
                bottomTitle="SP01-M-01"
                value="XX"
                width={240}
                height={170}
              />
              <ChloreSVG
                topTitle="SP01-M-03"
                leftTitle="LSLL-04"
                bottomTitle="SP01-M-02"
                value="XX"
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
