import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import HammerArrestorSVG from "@/assets/hammer-svg.svg?react";

import CircularGauge from "../progres-circle";
// import ProgressBar from "../progres-bar";
// import ChloreSVG from "../chlore";
import ProgressBar from "../progres-bar";

const Data = [
  { id: 1, name: "Float rate xx" },
  { id: 2, name: "Dt Flow xx" },
  { id: 3, name: "Pumped volume xx" },
];
const progressData = [
  { id: 1, name: "Suction tank", percentage: 40 },
  { id: 2, name: "Hammer arrestor", percentage: 40 },
];
const valuesData = [
  { id: 1, name: "v1", value: "XX" },
  { id: 2, name: "v2", value: "XX" },
  { id: 3, name: "v3", value: "XX" },
  { id: 4, name: "l1", value: "XX" },
  { id: 5, name: "l2", value: "XX" },
  { id: 6, name: "l3", value: "XX" },
];
const progressDataLine = [
  {
    id: 1,
    title: "p1",
    data: [
      {
        min: 0,
        max: 60,
        // status: "Worked",
        color: "#26E2B3",
      },
      {
        min: 60,
        max: 70,
        // status: "Stopped",
        color: "#E64C3C",
      },
      {
        min: 70,
        max: 100,
        // status: "Worked",
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "kWh",
  },
  {
    id: 2,
    title: "p2",
    data: [
      {
        min: 0,
        max: 100,
        // status: "Worked",
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "kWh",
  },
  {
    id: 3,
    title: "p3",
    data: [
      {
        min: 0,
        max: 100,
        // status: "Worked",
        color: "#26E2B3",
      },
    ],
    value: "XX",
    unite: "kWh",
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
              <div className="px-4 pt-2 text-lg font-bold">Flows</div>
              <div className="flex-1">
                <LineChartWidget
                  attributes={{
                    telemetries: [
                      {
                        area: true,
                        name: "EST_PLANIFIE_ROCHE_CUMUL",
                        color: "#E800534D",
                        label: "Planifié (Cumulé)",
                        serial: "JZVATMKQ1A8DA2P1",
                      },
                    ],
                  }}
                />
              </div>
            </Card>
            <Card className="flex h-[202px] flex-col">
              <div className="px-4 pt-2 text-lg font-bold">Pressure</div>
              <div className="flex-1">
                <LineChartWidget
                  attributes={{
                    telemetries: [
                      {
                        area: true,
                        name: "EST_PLANIFIE_ROCHE_CUMUL",
                        color: "#E800534D",
                        label: "Planifié (Cumulé)",
                        serial: "JZVATMKQ1A8DA2P1",
                      },
                    ],
                  }}
                />
              </div>
            </Card>
            <Card className="flex h-[202px] flex-col">
              <div className="px-4 pt-2 text-lg font-bold">Level</div>
              <div className="flex-1">
                <LineChartWidget
                  attributes={{
                    telemetries: [
                      {
                        area: true,
                        name: "EST_PLANIFIE_ROCHE_CUMUL",
                        color: "#E800534D",
                        label: "Planifié (Cumulé)",
                        serial: "JZVATMKQ1A8DA2P1",
                      },
                    ],
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col gap-[0.5rem]">
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
                  size={300}
                  width={250}
                  color="#ef8f08"
                />
              </div>
              <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-4">
                {valuesData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-2 rounded-md border-[0.5px] border-white bg-[#021E3F]/60 p-2 px-4 text-white backdrop-blur-md"
                  >
                    <span className="text-xs font-bold">{item.name}</span>
                    <span className="text-xl font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* <Card className="flex h-[202px] items-center justify-evenly gap-4 p-4"> */}
            {/* {progressData.map((item) => (
                <div
                  className="flex h-full w-full flex-1 flex-col items-center"
                  key={item.id}
                >
                  <span className="text-xl font-bold pb-2">{item.name}</span>
                  <LiquidProgress
                    percentage={item.percentage}
                    className="w-[90px]"
                  />
                </div>
              ))} */}
            {/* </Card> */}

            <Card className="flex h-full items-center justify-center gap-8 border-none bg-transparent p-4 shadow-none">
              <div className="flex flex-1 flex-col items-center">
                <span className="mb-2 text-sm font-medium text-white">
                  Suction tank
                </span>
                <LiquidProgress
                  percentage={[{ value: 80, title: "" }]}
                  className="h-[7rem] w-[5rem]"
                  textStyle="text-white font-bold"
                />
              </div>
              <div className="flex flex-1 flex-col items-center">
                <span className="mb-2 text-sm font-medium text-white">
                  Hammer arrestor
                </span>
                <HammerArrestorSVG />
              </div>
            </Card>

            <Card className="flex h-[202px] flex-col gap-1 p-4">
              <div className="mb-2 text-lg font-bold">Pumps ring state</div>
              <div className="flex flex-1 flex-col justify-around">
                {progressDataLine.map((item) => (
                  <ProgressBar
                    data={item.data}
                    key={item.id}
                    value={item.value || "--"}
                    unite={item.unite || "--"}
                    title={item.title || "--"}
                    className="h-[2rem] overflow-hidden rounded-md bg-white/20"
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
