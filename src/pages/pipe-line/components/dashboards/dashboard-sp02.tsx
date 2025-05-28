// import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import HammerArrestorSVG from "@/assets/hammer-svg.svg?react";

import CircularGauge from "../progres-circle";
// import ProgressBar from "../progres-bar";
// import ChloreSVG from "../chlore";
import ProgressBar from "../progres-bar";
import ReactApexChart from "react-apexcharts";

const Data = [
  { id: 1, name: "Flow rate", key: "flowRate" },
  { id: 2, name: "Δt Flow", key: "deltaFlow" },
  { id: 3, name: "Pumped volume", key: "pumpedVolume" },
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export function DashboardSP02({ data }: DashboardSP02Props) {
  return (
    <>
      <div className="debug absolute right-[1rem] top-[13%] flex gap-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 border-white bg-[#021E3F] p-2 px-4 text-white backdrop-blur-md"
          >
            {item.name} {data[item.key] || 0}
          </div>
        ))}
      </div>
      <div className="relative flex h-1 flex-1 overflow-auto pb-6 pl-14 pr-10 pt-4">
        <div className="flex w-full flex-1 gap-[2rem]">
          <div className="flex flex-1 flex-col gap-[0.5rem] [&>*]:flex-1">
            <Card className="flex h-[202px] flex-col">
              <div className="flex-1 pl-2 pr-2">
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
                    colors: ["#E4A0F5", "#FFCA05"],
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
                      data: data.flowsInput || [],
                    },
                    {
                      name: "Output",
                      data: data.flowsOutput || [],
                    },
                  ]}
                />
              </div>
            </Card>
            <Card className="flex h-[202px] flex-col">
              <div className="m-0 flex p-0 px-4 pt-2">
                <span className="font-medium text-white">Presures</span>
              </div>
              <div className="flex-1 pl-2 pr-2">
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
                      text: "Presures",
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
                    colors: ["#E4A0F5", "#FFCA05", "#26E2B3", "#E64C3C"],
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
                      name: "Output",
                      data: data.pressuresOutput || [],
                    },
                    {
                      name: "p1",
                      data: data.pressuresP1 || [],
                    },
                    {
                      name: "p2",
                      data: data.pressuresP2 || [],
                    },
                    {
                      name: "p3",
                      data: data.pressuresP3 || [],
                    },
                  ]}
                />
              </div>
            </Card>
            <Card className="flex h-[202px] flex-col">
              <div className="m-0 flex p-0 px-4 pt-2">
                <span className="font-medium text-white">Level</span>
              </div>
              <div className="flex-1 pl-2 pr-2">
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
                      text: "Presures",
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
                    colors: ["#0843e4"],
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
                      name: "level",
                      data: data.level || [],
                    },
                  ]}
                />
              </div>
            </Card>
          </div>

          <div className="flex flex-1 flex-col gap-[0.5rem] [&>*]:flex-1">
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
