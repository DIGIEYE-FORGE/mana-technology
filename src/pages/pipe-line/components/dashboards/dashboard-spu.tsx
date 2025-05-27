import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import CircularGauge from "../progres-circle";
// import ProgressBar from "../progres-bar";

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
    <div className="relative mr-4 flex h-1 flex-1 overflow-x-hidden pl-12 pr-4 pt-2">
      <div className="flex flex-1 gap-[2rem]">
        <div className="flex flex-1 flex-col gap-4 [&>.card]:flex [&>.card]:h-[13.25rem] [&>.card]:flex-col">
          <div className="grid grid-cols-3 grid-rows-1 gap-2">
            {res.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-lg font-bold">{item.name}</span>
                <div className="flex w-full gap-2">
                  {item.data.map((dataItem, dataIndex) => (
                    <div key={dataIndex} className="flex w-full flex-col">
                      <span className="text-center text-sm">
                        {dataItem.name}
                      </span>
                      <div className="flex gap-2 rounded-md border-2 border-white bg-[#021E3F]/20 p-1 px-6 text-white backdrop-blur-md">
                        <span className="text-lg font-bold">
                          {dataItem.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Card className="card">
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
          <Card className="card">
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
          <Card className="card">
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
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <Card className="flex h-[24rem] shrink-0 items-center justify-evenly gap-4 p-4">
            {progressData.map((item) => (
              <div
                className="flex h-full w-full flex-1 flex-col items-center"
                key={item.id}
              >
                <span className="text-xl font-bold">{item.name}</span>
                <LiquidProgress
                  percentage={item.percentage}
                  className="w-[70%]"
                />
              </div>
            ))}
          </Card>
          <Card className="flex h-[23.25rem] shrink-0 items-center gap-4 p-6">
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
                  className="border-1 flex flex-col items-center justify-center gap-2 rounded-xl border-white bg-[#021E3F]/60 p-1 px-2 text-white backdrop-blur-md"
                >
                  <span className="text-xs">{item.name}</span>
                  <span className="text-xl font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


