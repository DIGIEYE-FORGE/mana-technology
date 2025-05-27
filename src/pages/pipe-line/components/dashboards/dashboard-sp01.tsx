import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
// import LiquidProgress from "../progress";
import CircularGauge from "../progres-circle";
import ProgressBar from "../progres-bar";
import ChloreSVG from "../chlore";
import HammerArrestorSVG  from "@/assets/hammer-svg.svg?react";
import SuctionTankSVG from "@/assets/suction-svg.svg?react";

const Data = [
  { id: 1, name: "Flow rate XX" },
  { id: 2, name: "Δt Flow XX" },
  { id: 3, name: "Pumped volume XX" },
];

const progressData = [
  { id: 1, name: "Suction tank", percentage: 80 },
  { id: 2, name: "Hammer arrestor", percentage: 80 },
];

const valuesData = [
  { id: 1, name: "V1", value: "XX" },
  { id: 2, name: "V2", value: "XX" },
  { id: 3, name: "V3", value: "XX" },
  { id: 4, name: "I1", value: "XX" },
  { id: 5, name: "I2", value: "XX" },
  { id: 6, name: "I3", value: "XX" },
];

const progressDataLine = [
  {
    id: 1,
    title: "P1",
    data: [
      {
        min: 0,
        max: 70,
        color: "#26E2B3",
      },
      {
        min: 70,
        max: 85,
        color: "#E64C3C",
      },
      {
        min: 85,
        max: 100,
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "Hrs",
  },
  {
    id: 2,
    title: "P2",
    data: [
      {
        min: 0,
        max: 100,
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "Hrs",
  },
  {
    id: 3,
    title: "P3",
    data: [
      {
        min: 0,
        max: 100,
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "Hrs",
  },
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

const pressuresData = {
  Output: [
    { x: 1, y: 80 }, { x: 3, y: 85 }, { x: 5, y: 90 }, { x: 7, y: 95 }, { x: 9, y: 100 },
    { x: 11, y: 90 }, { x: 13, y: 95 }, { x: 15, y: 100 }, { x: 17, y: 90 }, { x: 19, y: 95 }, { x: 21, y: 100 }
  ],
  P1: [
    { x: 1, y: 20 }, { x: 3, y: 40 }, { x: 5, y: 60 }, { x: 7, y: 50 }, { x: 9, y: 70 },
    { x: 11, y: 40 }, { x: 13, y: 30 }, { x: 15, y: 60 }, { x: 17, y: 80 }, { x: 19, y: 60 }, { x: 21, y: 70 }
  ],
  P2: [
    { x: 1, y: 60 }, { x: 3, y: 70 }, { x: 5, y: 80 }, { x: 7, y: 90 }, { x: 9, y: 80 },
    { x: 11, y: 100 }, { x: 13, y: 90 }, { x: 15, y: 80 }, { x: 17, y: 100 }, { x: 19, y: 90 }, { x: 21, y: 80 }
  ],
  P3: [
    { x: 1, y: 40 }, { x: 3, y: 60 }, { x: 5, y: 50 }, { x: 7, y: 70 }, { x: 9, y: 60 },
    { x: 11, y: 50 }, { x: 13, y: 40 }, { x: 15, y: 60 }, { x: 17, y: 80 }, { x: 19, y: 70 }, { x: 21, y: 60 }
  ]
};

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
  { x: 21, y: 50 }
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
  { x: 21, y: 65 }
];
const chloreOutputData = [
  { x: 1, y: 30 },
  { x: 3, y: 40 },
  { x: 5, y: 50 },
  { x: 7, y: 60 },
  { x: 9, y: 70 },
  { x: 11, y: 90 },
  { x: 13, y: 60 },
  { x: 15, y: 70 },
  { x: 17, y: 75 },
  { x: 19, y: 60 },
  { x: 21, y: 70 }
];

export function DashboardSP01() {
  return (
    <>
      {/* Top metrics bar */}
      <div className="absolute right-[1rem] top-[12%] flex gap-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 border-white bg-[#021E3F] p-2 px-4 text-white backdrop-blur-md"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Main dashboard content */}
      <div className="relative mr-4 flex h-full flex-1 min-h-0 min-w-0 gap-4 overflow-hidden py-4 pl-12 pr-4">
        
        {/* 2 columns × 4 rows grid layout */}
        <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full w-full min-h-0 min-w-0 flex-1">
          
          {/* Row 1, Col 1 - Flows Chart */}
          <Card className="flex flex-col h-full">
            <div className="flex px-4 py-2 border-b border-gray-600">
              <span className="text-white font-medium">Flows</span>
            </div>
            <div className="flex-1 p-2">
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

          {/* Row 1, Col 2 - Tank Levels */}
          <Card className="flex items-center justify-center gap-8 p-4 h-full bg-transparent border-none shadow-none">
            <div className="flex flex-col items-center flex-1">
              <span className="text-sm text-white font-medium mb-2">Suction tank</span>
              <SuctionTankSVG />
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-sm text-white font-medium mb-2">Hammer arrestor</span>
              <HammerArrestorSVG />
            </div>
          </Card>

          {/* Row 2, Col 1 - Pressures Chart */}
          <Card className="flex flex-col h-full">
            <div className="flex px-4 py-2 border-b border-gray-600">
              <span className="text-white font-medium">Presures</span>
            </div>
            <div className="flex-1 p-2">
              <LineChartWidget
                attributes={{
                  telemetries: [
                    {
                      area: false,
                      label: "Output",
                      color: "#26E2F3",
                      data: pressuresData.Output,
                    },
                    {
                      area: false,
                      label: "P1",
                      color: "#FFC829",
                      data: pressuresData.P1,
                    },
                    {
                      area: false,
                      label: "P2",
                      color: "#26E2B3",
                      data: pressuresData.P2,
                    },
                    {
                      area: false,
                      label: "P3",
                      color: "#E64C3C",
                      data: pressuresData.P3,
                    },
                  ],
                }}
              />
            </div>
          </Card>

          {/* Row 2, Col 2 - Energy and Power section */}
          <Card className="flex items-center gap-4 p-4 h-full">
            <div className="flex h-full w-[6rem] flex-col items-center justify-center gap-[5rem]">
            <span className="text-xl font-bold">Energy</span>
            <div className="flex flex-col items-center">
              <span className="text-bold text-xl">XX</span>
              <span className="text-xs"> kWh</span>
            </div>
          </div>
          <div className="flex min-h-[10rem] w-full flex-1 flex-col items-center justify-center gap-4">
            <span className="text-2xl font-bold">Power</span>
            <CircularGauge
              value={50}
              maxValue={100}
              size={200}
              width={200}
              color="#ef8f08"
            />
          </div>
          <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-4">
            {valuesData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-white bg-[#021E3F]/60 p-1 px-2 text-white backdrop-blur-md"
              >
                <span className="text-xs">{item.name}</span>
                <span className="text-xl font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          </Card>

          {/* Row 3, Col 1 - Level Chart */}
          <Card className="flex flex-col h-full">
            <div className="flex px-4 py-2 border-b border-gray-600">
              <span className="text-white font-medium">Level</span>
            </div>
            <div className="flex-1 p-2">
              <LineChartWidget
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

          {/* Row 3, Col 2 - Pumps ring state bars */}
          <Card className="flex flex-col gap-0 p-2 h-full">
            <span className="text-sm font-bold text-white">Pumps ring state</span>
            <div className="flex-1 flex flex-col justify-center gap-0">
              {progressDataLine.map((item) => (
                <ProgressBar
                  data={item.data}
                  key={item.id}
                  value={item.value || "--"}
                  unite={item.unite || "--"}
                  title={item.title || "--"}
                  className="h-6 overflow-hidden bg-white/20"
                />
              ))}
            </div>
          </Card>

          {/* Row 4, Col 1 - Chlore Chart */}
          <Card className="flex flex-col h-full">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-600 relative">
              <span className="text-white font-medium">r</span>
              <div className="absolute right-4 flex gap-2 text-xs">
                <span className="bg-[#021E3F] border border-white rounded-full px-3 py-1 text-white">Input XX</span>
                <span className="bg-[#021E3F] border border-white rounded-full px-3 py-1 text-white">Output XX</span>
              </div>
            </div>
            <div className="flex-1 p-2">
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

          {/* Row 4, Col 2 - Chlore Station */}
          <Card className="flex flex-col gap-4 p-4 h-full">
          <span className="text-xl font-bold">Pumps ring state</span>
            <div className="flex items-center justify-center gap-4">
              {progressDataLine.map((item) => (
                <ChloreSVG
                  key={item.id}
                  value={item.value}
                  topTitle={"telemetry"}
                  bottomTitle={"telemetry"}
                  leftTitle={"telemetry"}
                />
              ))}
            </div>
          </Card>

        </div>
      </div>
    </>
  );
}