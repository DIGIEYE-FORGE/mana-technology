import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import CircularGauge from "../progres-circle";
import ProgressBar from "../progres-bar";
import ChloreSVG from "../chlore";

const Data = [
  { id: 1, name: "Float rate xx" },
  { id: 2, name: "Dt Flow xx" },
  { id: 3, name: "Pumped volume xx" },
];
const progressData = [
  { id: 1, name: "Suction tank", percentage: 40 },
  { id: 2, name: "Discharge tank", percentage: 40 },
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
        max: 30,
        // status: "Worked",
        color: "#26E2B3",
      },
      {
        min: 30,
        max: 60,
        // status: "Stopped",
        color: "#E64C3C",
      },
      {
        min: 60,
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
export function DashboardSP01() {
  return (
    <>
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
      <div className="relative mr-4 flex grid h-1 flex-1 grid-cols-2 gap-4 overflow-x-hidden py-4 pl-12 pr-4">
        <Card className="flex h-[10.5rem] flex-col">
          <div className="flex px-2">
            <span>Flows</span>
          </div>
          <div className="h-1 flex-1">
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
        <Card className="flex h-[10.5rem] flex-col">
          <div className="flex px-2">
            <span>Presures</span>
          </div>
          <div className="h-1 flex-1">
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
        <Card className="flex h-[10rem] flex-col">
          <div className="flex px-2">
            <span>Level</span>
          </div>
          <div className="h-1 flex-1">
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
        <Card className="flex h-[10rem] flex-col">
          <div className="flex px-2">
            <span>Chlore</span>
          </div>
          <div className="h-1 flex-1">
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
        <Card className="flex h-[11rem] items-center justify-evenly gap-4 p-4">
          {progressData.map((item) => (
            <div
              className="flex h-full w-full flex-1 flex-col items-center"
              key={item.id}
            >
              <span className="text-xl font-bold">{item.name}</span>
              <LiquidProgress
                percentage={item.percentage}
                className="w-[50%]"
              />
            </div>
          ))}
        </Card>
        <Card className="flex h-[11rem] items-center gap-4 p-6">
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
        <Card className="flex flex-col gap-4">
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
        <Card className="flex flex-col gap-1 p-4">
          <span className="text-xl font-bold">Pumps ring state</span>
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
        </Card>
      </div>
    </>
  );
}


