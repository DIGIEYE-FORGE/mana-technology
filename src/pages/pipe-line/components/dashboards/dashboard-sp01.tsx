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
import { cn, parseBoolean } from "@/lib/utils";

const Data = [
  { id: 1, name: "Flow rate (l/s) :", key: "flowRate" },
  { id: 2, name: "Δt Flow (l/s) :", key: "deltaFlow" },
  { id: 3, name: "Pumped volume (m3/h) :", key: "pumpedVolume" },
  { id: 4, name: "Turbidity (NTU):", key: "trubidite" },
];

const valuesData = [
  { id: 1, name: "V1", value: "00" },
  { id: 2, name: "V2", value: "00" },
  { id: 3, name: "V3", value: "00" },
  { id: 4, name: "I1", value: "00" },
  { id: 5, name: "I2", value: "00" },
  { id: 6, name: "I3", value: "00" },
];

interface DashboardSP01Props {
  data: any;
}

export function DashboardSP01({ data }: DashboardSP01Props) {
  console.log({ data });

  // const progressDataLine = [
  //   {
  //     id: 1,
  //     title: "P1",
  //     data: [
  //       {
  //         min: 0,
  //         max: 100,
  //         color: data.runningStateP1 ? "#26E2B3" : "#E64C3C",
  //       },
  //     ],
  //     value: "XX",
  //     unite: "Hrs",
  //   },
  //   {
  //     id: 2,
  //     title: "P2",
  //     data: [
  //       {
  //         min: 0,
  //         max: 100,
  //         color: data.runningStateP2 ? "#26E2B3" : "#E64C3C",
  //       },
  //     ],
  //     value: "XX",
  //     unite: "Hrs",
  //   },
  //   {
  //     id: 3,
  //     title: "P3",
  //     data: [
  //       {
  //         min: 0,
  //         max: 100,
  //         color: data.runningStateP3 ? "#26E2B3" : "#E64C3C",
  //       },
  //     ],
  //     value: "XX",
  //     unite: "Hrs",
  //   },
  // ];

  return (
    <>
      {/* Top metrics bar */}
      <div className="absolute right-[1rem] top-[12%] flex gap-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 border-white bg-[#021E3F] p-2 px-4 text-white backdrop-blur-md"
          >
            {item.name} {Number(data[item.key] || 0)?.toFixed?.(2) || "0"}
          </div>
        ))}
      </div>

      {/* Main dashboard content */}
      <div className="relative mr-4 flex h-full min-h-0 min-w-0 flex-1 gap-4 overflow-hidden py-4 pl-12 pr-4">
        <div className="grid h-full min-h-0 w-full min-w-0 flex-1 grid-cols-2 grid-rows-4 gap-4">
          <Card className="flex h-full flex-col">
            <div className="flex-1 pl-2 pr-2">
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    height: 200,
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
                  tooltip: {
                    theme: "dark",
                    // add (l/s) to the tooltip values
                    y: {
                      formatter: (value: any) => {
                        return `${value} l/s`;
                      },
                    },
                  },
                  title: {
                    text: "Flows  (l/s)",
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
                Suction sump
              </span>
              {JSON.stringify(data.progress || "-------")}
              {/* {JSON.stringify({
                suctionTankLL: data.suctionTankLL,
                suctionTankL: data.suctionTankL,
                suctionTankH: data.suctionTankH,
                suctionTankHH: data.suctionTankHH,
              })} */}
              <LiquidProgress
                percentage={[
                  {
                    value: (+Number(data.progress) / 5) * 100 || 0,
                    title: "",
                  },
                ]}
                className="h-[7rem] w-[6rem]"
                textStyle="text-white font-bold"
                indictors={[
                  data.suctionTankLL == "True" ? true : false,
                  data.suctionTankL == "True" ? true : false,
                  data.suctionTankH == "True" ? true : false,
                  data.suctionTankHH == "True" ? true : false,
                ]}
              />
            </div>
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-sm font-medium text-white">
                Surge arrestor
              </span>
              <HammerArrestorSVG
                className={cn("size-[8rem] [&_.indicator]:fill-[#26e2b3]", {
                  // TODO: change this base on state
                  "[&_.indicator-1]:!fill-red-500":
                    data.hammerArrestorH1 === "True" ? true : false,
                  "[&_.indicator-2]:!fill-red-500":
                    data.hammerArrestorH2 === "True" ? true : false,
                })}
              />
            </div>
          </Card>

          {/* Row 2, Col 1 - Pressures Chart */}
          <Card className="flex h-full flex-col">
            {/* <div className="px-4 pt-3 text-sm font-bold text-white">
              Presures
            </div> */}
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
                    animations: {
                      enabled: false, // Disable animations for smoother performance
                    },
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
                      formatter: (value: any) => {
                        return `${Number(value)?.toFixed(2)} (bar)`;
                      },
                    },
                  },
                  title: {
                    text: "Pressures (bar)",
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
                    decimalsInFloat: 0,
                    min: 0,
                    max: 30,
                  },
                  // yaxis: [
                  //   {
                  //     // Axe Y gauche pour Output
                  //     seriesName: "Output",
                  //     labels: {
                  //       style: {
                  //         colors: "#A2B0B8",
                  //       },
                  //     },
                  //     title: {
                  //       text: "Output",
                  //       style: {
                  //         color: "#E4A0F5",
                  //       },
                  //     },
                  //     decimalsInFloat: 2,
                  //   },
                  //   {
                  //     // Axe Y droit pour P1, P2, P3
                  //     seriesName: "P1",
                  //     opposite: true,
                  //     labels: {
                  //       style: {
                  //         colors: "#A2B0B8",
                  //       },
                  //     },
                  //     title: {
                  //       text: "P1, P2, P3",
                  //       style: {
                  //         color: "#A2B0B8",
                  //       },
                  //     },
                  //     decimalsInFloat: 2,
                  //     show: true,
                  //   },
                  // ],
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
          <Card className="flex h-full cursor-not-allowed items-center gap-2 p-4 opacity-40">
            <div className="flex h-full w-[6rem] flex-col items-center justify-between py-4">
              <span className="text-xl font-bold">Energy</span>
              <div className="flex flex-col items-center">
                <span className="text-bold text-4xl">00</span>
                <span className="text-md"> KwH</span>
              </div>
            </div>
            <div className="flex min-h-[10rem] w-full flex-1 flex-col items-center justify-center gap-4">
              <span className="text-2xl font-bold">Power</span>
              <CircularGauge
                value={0}
                maxValue={100}
                size={200}
                width={200}
                color="#B29100"
              />
            </div>
            <div className="m-0 grid flex-1 grid-cols-3 grid-rows-2 gap-2">
              {valuesData?.map((item) => (
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
                    animations: {
                      enabled: false, // Disable animations for smoother performance
                    },
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
                      formatter: (value: any) => {
                        return `${Number(value)?.toFixed(0)} (%)`;
                      },
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
                    name: "level",
                    data: data.level?.map((item: { x: string; y: number }) => ({
                      x: item.x,
                      y: (item.y / 5) * 100,
                    })),
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
              {[
                { ...data?.p1, title: "p1" },
                { ...data?.p2, title: "p2" },
                { ...data?.p3, title: "p3" },
              ]?.map((item) => (
                <ProgressBar
                  data={item?.film}
                  key={item.id}
                  value={item.totalTime?.toFixed(2) || "--"}
                  unite={item.unite || "h"}
                  title={item.title || "--"}
                  className="h-6 overflow-hidden bg-white/20"
                />
              ))}
            </div>
          </Card>

          {/* Row 4, Col 1 - Chlore Chart */}
          <Card className="flex h-full flex-col">
            <div className="relative m-0 flex items-center justify-between p-0 px-4 pt-2">
              <span className="text-[14px] font-bold text-white">
                Chlorine (mg/l)
              </span>
              <div className="absolute right-4 flex gap-2 text-xs">
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Input
                  {data.chloreInput[data.chloreInput.length - 1]?.y?.toFixed?.(
                    2,
                  ) || "0"}
                  {/* TODO:update this later */}
                </span>
                <span className="rounded-full border border-white bg-[#021E3F] px-3 py-1 text-white">
                  Output{" "}
                  {data.chloreOutput[
                    data.chloreOutput.length - 1
                  ]?.y?.toFixed?.(2) || "0"}
                </span>
              </div>
            </div>
            <div className="flex-1 pl-2 pr-2">
              <ReactApexChart
                height={"100%"}
                options={{
                  chart: {
                    animations: {
                      enabled: false, // Disable animations for smoother performance
                    },
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
                      formatter: (value: any) => {
                        return `${Number(value)?.toFixed(2)} (mg/l)`;
                      },
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
                // topTitle={data.chloreStationH1 || "SP01-M-02"}
                // leftTitle={data.chloreStationL1 || "LSLL-01"}
                // bottomTitle=""
                // value={data.chloreStationvalue1 || "0"}
                // width={200}
                // height={200}
                topIndicator={parseBoolean(data.chloreStationH1)}
                leftIndicator={parseBoolean(data.chloreStationL1)}
                bottomIndicator={parseBoolean(data.chloreStationvalue1)}
                className="h-[10rem] w-[10rem]"
              />
              {/* First block */}
              <ChloreSVG
                // topTitle={data.chloreStationH2 || "SP01-M-03"}
                // leftTitle={data.chloreStationL2 || "LSLL-03"}
                // bottomTitle={data.chloreStationH1 || "SP01-M-01"}
                // value={data.chloreStationvalue2 || "0"}
                // width={200}
                // height={200}
                topIndicator={parseBoolean(data.chloreStationH2)}
                leftIndicator={parseBoolean(data.chloreStationL2)}
                bottomIndicator={parseBoolean(data.chloreStationvalue2)}
                className="h-[10rem] w-[10rem]"
              />
              {/* Second block */}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
