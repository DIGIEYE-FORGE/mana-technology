import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import HammerArrestorSVG from "@/assets/hammer-svg.svg?react";

import CircularGauge from "../progres-circle";
// import ProgressBar from "../progres-bar";
// import ChloreSVG from "../chlore";
import ProgressBar from "../progres-bar";

const Data = [
  { id: 1, name: "Flow rate XX" },
  { id: 2, name: "Δt Flow XX" },
  { id: 3, name: "Pumped volume XX" },
];

// Données statiques pour les graphiques
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
    { x: 1, y: 80 },
    { x: 3, y: 85 },
    { x: 5, y: 90 },
    { x: 7, y: 95 },
    { x: 9, y: 100 },
    { x: 11, y: 90 },
    { x: 13, y: 95 },
    { x: 15, y: 100 },
    { x: 17, y: 90 },
    { x: 19, y: 95 },
    { x: 21, y: 100 },
  ],
  P1: [
    { x: 1, y: 20 },
    { x: 3, y: 40 },
    { x: 5, y: 60 },
    { x: 7, y: 50 },
    { x: 9, y: 70 },
    { x: 11, y: 40 },
    { x: 13, y: 30 },
    { x: 15, y: 60 },
    { x: 17, y: 80 },
    { x: 19, y: 60 },
    { x: 21, y: 70 },
  ],
  P2: [
    { x: 1, y: 60 },
    { x: 3, y: 70 },
    { x: 5, y: 80 },
    { x: 7, y: 90 },
    { x: 9, y: 80 },
    { x: 11, y: 100 },
    { x: 13, y: 90 },
    { x: 15, y: 80 },
    { x: 17, y: 100 },
    { x: 19, y: 90 },
    { x: 21, y: 80 },
  ],
  P3: [
    { x: 1, y: 40 },
    { x: 3, y: 60 },
    { x: 5, y: 50 },
    { x: 7, y: 70 },
    { x: 9, y: 60 },
    { x: 11, y: 50 },
    { x: 13, y: 40 },
    { x: 15, y: 60 },
    { x: 17, y: 80 },
    { x: 19, y: 70 },
    { x: 21, y: 60 },
  ],
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
  { x: 21, y: 50 },
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

interface DashboardSP02Props {
  data: any;
}

export function DashboardSP02({ data }: DashboardSP02Props) {
  return (
    <>
      <div className="absolute right-[1rem] top-[13%] flex gap-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 border-white bg-[#021E3F] p-2 px-4 text-white backdrop-blur-md"
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="relative flex h-1 flex-1 overflow-auto pb-6 pl-14 pr-10 pt-4">
        <div className="grid flex-1 grid-cols-2 gap-[2rem]">
          {/* Première colonne: LineChartWidget empilés verticalement */}
          <div className="flex flex-col gap-[0.5rem]">
            <Card className="flex h-[202px] flex-col">
              <div className="m-0 flex p-0 px-4 pt-2">
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
                        data: flowsInputData,
                      },
                      {
                        area: false,
                        label: "Output",
                        color: "#FFD2A6",
                        data: flowsOutputData,
                      },
                    ],
                  }}
                />
              </div>
            </Card>
            <Card className="flex h-[202px] flex-col">
              <div className="m-0 flex p-0 px-4 pt-2">
                <span className="font-medium text-white">Presures</span>
              </div>
              <div className="flex-1 pl-2 pr-2">
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
            <Card className="flex h-[202px] flex-col">
              <div className="m-0 flex p-0 px-4 pt-2">
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
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col gap-[0.5rem]">
            <Card className="flex h-full items-center justify-center gap-8 border-none bg-transparent p-4 shadow-none">
              <div className="flex flex-1 flex-col items-center">
                <span className="mb-2 text-sm font-medium text-white">
                  Suction tank
                </span>
                <LiquidProgress
                  percentage={[{ value: 80, title: "" }]}
                  className="h-[7rem] w-[5rem]"
                  textStyle="text-white font-bold"
                  stops={[]}
                />
              </div>
              <div className="flex flex-1 flex-col items-center">
                <span className="mb-2 text-sm font-medium text-white">
                  Hammer arrestor
                </span>
                <HammerArrestorSVG />
              </div>
            </Card>
            <Card className="flex h-[202px] items-center gap-4 p-6">
              <div className="flex h-full w-[6rem] flex-col items-center justify-center gap-[5rem]">
                <span className="text-2xl font-bold">Energy</span>
                <div className="flex flex-col items-center">
                  <span className="text-bold text-2xl">XX</span>
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
                    className="flex flex-col items-center justify-center gap-2 rounded-md border-[0.5px] border-white bg-[#021E3F]/60 p-1 px-2 text-white backdrop-blur-md"
                  >
                    <span className="text-xs font-bold">{item.name}</span>
                    <span className="text-xl font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="flex h-[202px] flex-col gap-1 p-4">
              <div className="text-sm font-bold text-white">
                Pumps ring state
              </div>
              <div className="flex flex-1 flex-col justify-center gap-0">
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
          </div>
        </div>
      </div>
    </>
  );
}
