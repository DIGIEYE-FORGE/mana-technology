/* eslint-disable @typescript-eslint/no-explicit-any */
// import LineChartWidget from "@/components/line-chart-widget";
import { Card } from "@/components/card";
import LiquidProgress from "../progress";
import CircularGauge from "../progres-circle";
import ProgressBar from "../progres-bar";
import ChloreSVG from "../chlore";
import HammerArrestorSVG from "@/assets/hammer-svg.svg?react";
// import SuctionTankSVG from "@/assets/suction-svg.svg?react";
import ReactApexChart from "react-apexcharts";
import { SWRConfig } from "swr";

const Data = [
  { id: 1, name: "Flow rate", key: "flowRate" },
  { id: 2, name: "Δt Flow", key: "deltaFlow" },
  { id: 3, name: "Pumped volume ", key: "pumpedVolume" },
];

const valuesData = [
  { id: 1, name: "V1", value: "XX" },
  { id: 2, name: "V2", value: "XX" },
  { id: 3, name: "V3", value: "XX" },
  { id: 4, name: "I1", value: "XX" },
  { id: 5, name: "I2", value: "XX" },
  { id: 6, name: "I3", value: "XX" },
];

interface DashboardSP01Props {
  data: any;
}

export function DashboardSP01({ data }: DashboardSP01Props) {
  console.log({ data });

  const progressDataLine = [
    {
      id: 1,
      title: "P1",
      data: [
        {
          min: 0,
          max: 100,
          color: data.runningStateP1 ? "#26E2B3" : "#E64C3C",
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
          color: data.runningStateP2 ? "#26E2B3" : "#E64C3C",
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
          color: data.runningStateP3 ? "#26E2B3" : "#E64C3C",
        },
      ],
      value: "XX",
      unite: "Hrs",
    },
  ];

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      {/* Top metrics bar */}
      <div className="absolute right-[1rem] top-[12%] flex gap-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 border-white bg-[#021E3F] p-2 px-4 text-white backdrop-blur-md"
          >
            {item.name} {Number(data[item.key]).toFixed(0) || "0"}
          </div>
        ))}
      </div>

      {/* Main dashboard content */}
      <div className="relative mr-4 flex h-full min-h-0 min-w-0 flex-1 gap-4 overflow-hidden py-4 pl-12 pr-4">
        {/* {JSON.stringify(data)} */}
        {/* 2 columns × 4 rows grid layout */}
        <div className="grid h-full min-h-0 w-full min-w-0 flex-1 grid-cols-2 grid-rows-4 gap-4">
          {/* Row 1, Col 1 - Flows Chart */}
          <Card className="flex h-full flex-col">
            <div className="flex-1 pl-2 pr-2">
              {/* <LineChartWidget
                attributes={{
                  telemetries: [
                    {
                      area: false,
                      label: "Input",
                      color: "#26E2B3",
                      serial: "JZVATMKQ1A8DA2P1",
                      data: data.flowsInput || [],
                    },
                    {
                      area: false,
                      label: "Output",
                      color: "#FFD2A6",
                      serial: "JZVATMKQ1A8DA2P1",
                      data: data.flowsOutput || [],
                    },
                  ],
                }}
              /> */}
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    height: 200,
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
                  title: {
                    text: "Flows",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",

                    },
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

          {/* Row 1, Col 2 - Tank Levels */}
          <Card className="flex h-full items-center justify-center gap-8 border-none bg-transparent p-4 shadow-none">
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-sm font-medium text-white">
                Suction tank
              </span>

              <LiquidProgress
                percentage={[{ value: 50, title: "" }]}
                className="h-[7rem] w-[5rem]"
                textStyle="text-white font-bold"
                stops={
                  [
                    /// TODO
                    // {
                    //   color: "#E64C3C",
                    //   value: data.suctionTankLL,
                    // },
                    // {
                    //   color: "#e9cc0f",
                    //   value: data.suctionTankL,
                    // },
                    // {
                    //   color: "#26E2B3",
                    //   value: data.suctionTankH,
                    // },
                    // {
                    //   color: "#26E2B3",
                    //   value: data.suctionTankHH,
                    // },
                  ]
                }
              />
            </div>
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-sm font-medium text-white">
                Hammer arrestor
              </span>
              <HammerArrestorSVG />
            </div>
          </Card>

          {/* Row 2, Col 1 - Pressures Chart */}
          <Card className="flex h-full flex-col">
            <div className="flex-1 pl-2 pr-2">
              {/* <LineChartWidget
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
              /> */}
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    height: 200,
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
                  title: {
                    text: "Pressures",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
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
                    name: "P1",
                    data: data.pressuresP1 || [],
                  },
                  {
                    name: "P2",
                    data: data.pressuresP2 || [],
                  },
                  {
                    name: "P3",
                    data: data.pressuresP3 || [],
                  },
                ]}
              />
            </div>
          </Card>

          {/* Row 2, Col 2 - Energy and Power section */}
          <Card className="flex h-full items-center gap-2 p-4 opacity-50">
            <div className="flex h-full w-[6rem] flex-col items-center justify-between py-4">
              <span className="text-xl font-bold">Energy</span>
              <div className="flex flex-col items-center">
                <span className="text-bold text-4xl">XX</span>
                <span className="text-md"> KwH</span>
              </div>
            </div>
            <div className="flex min-h-[10rem] w-full flex-1 flex-col items-center justify-center gap-4">
              <span className="text-2xl font-bold">Power</span>
              <CircularGauge
                value={50}
                maxValue={100}
                size={200}
                width={200}
                color="#B29100"
              />
            </div>
            <div className="m-0 grid flex-1 grid-cols-3 grid-rows-2 gap-2">
              {valuesData.map((item) => (
                <div
                  key={item.id}
                  className="flex h-[70px] w-[60px] flex-col items-center justify-center gap-2 rounded-md border-2 border-gray-500 bg-[#021E3F]/60 p-1 text-white backdrop-blur-md"
                >
                  <span className="text-xs">{item.name}</span>
                  <span className="text-xl font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Row 3, Col 1 - Level Chart */}
          <Card className="flex h-[180px] flex-col">
            {/* <div className="m-0 flex p-0 px-4 pt-2">
              <span className="font-medium text-white">Level</span>
            </div> */}
            <div className="flex-1 pl-2 pr-2">
              {/* <LineChartWidget
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
              /> */}
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
                  title: {
                    text: "Level",
                    align: "left",
                    style: {
                      fontSize: "14px",
                      color: "#ffffff",
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: ["#E4A0F5"],
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

          {/* Row 3, Col 2 - Pumps ring state bars */}
          <Card className="flex h-full flex-col gap-0 p-2">
            <span className="text-[14px] font-bold text-white">
              Pumps running state
            </span>
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

          {/* Row 4, Col 1 - Chlore Chart */}
          <Card className="flex h-full flex-col">
            <div className="relative m-0 flex items-center justify-between p-0 px-4 pt-2">
              <span className="text-[14px] font-bold text-white">Chlorine</span>
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
                    data: data.chloreInput || [],
                  },
                  {
                    name: "Output",
                    data: data.chloreOutput || [],
                  },
                ]}
              />
            </div>
          </Card>

          {/* Row 4, Col 2 - Chlore Station */}
          <Card className="flex h-full flex-col gap-0 p-4">
            <span className="text-[14px] font-bold">Chlorine Stations</span>
            <div className="flex items-center justify-center gap-8">
              <ChloreSVG
                topTitle={data.chloreStationH1 || "SP01-M-02"}
                leftTitle={data.chloreStationL1 || "LSLL-01"}
                bottomTitle=""
                value={data.chloreStationvalue1 || "XX"}
              />
              {/* First block */}
              <ChloreSVG
                topTitle={data.chloreStationH2 || "SP01-M-03"}
                leftTitle={data.chloreStationL2 || "LSLL-03"}
                bottomTitle={data.chloreStationH1 || "SP01-M-01"}
                value={data.chloreStationvalue2 || "XX"}
              />
              {/* Second block */}
            </div>
          </Card>
        </div>
      </div>
    </SWRConfig>
  );
}
