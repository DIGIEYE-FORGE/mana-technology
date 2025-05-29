/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  runningState: any;
  frameLeft: { x: Date; y: number }[];
  frameRight: { x: Date; y: number }[];
  pitmanLeft: { x: Date; y: number }[];
  pitmanRight: { x: Date; y: number }[];
  v1: { x: Date; y: number }[];
  u1: { x: Date; y: number }[];

  w1: { x: Date; y: number }[];
}

const LeftBar = ({
  runningState,
  frameLeft,
  frameRight,
  pitmanLeft,
  pitmanRight,
  v1,
  u1,
  w1,
}: LeftBarProps) => {
  return (
    <div className="relative z-10 flex h-full min-h-fit w-[400px] shrink-0 flex-col gap-2 overflow-x-hidden px-1 [&>.card]:h-1 [&>.card]:flex-1">
      <h1 className="text-xl font-bold">Jaw Crusher</h1>
      <Card className="card !rounded px-5 py-3">
        {/* {JSON.stringify(runningState)} */}
        <div className="mb-2 flex flex-col gap-1">
          <span>Running State</span>
          <span className="text-xl font-bold text-[#FFC829]">
            {runningState
              ?.filter((ele: any) => ele.value)
              .reduce((acc: number, ele: any) => acc + ele.difTimeHourly, 0) ||
              0}
            Hrs
          </span>
          <div className="flex h-8 w-full overflow-hidden rounded-sm">
            {runningState?.map((ele: any) => {
              return (
                <div
                  key={ele.value}
                  className={`flex h-full items-center justify-center font-semibold text-[#FFC829] ${
                    ele.value == "True" ? "bg-[#8AFF8A]" : "bg-[#FF5C5C]"
                  }`}
                  style={{
                    width: `${(ele.difTimeHourly / 24) * 100}%`,
                  }}
                >
                  {ele.value == "True" ? "Running" : "Stopped"}
                </div>
              );
            })}
            {/* <div className="flex h-full w-[44%] items-center justify-center bg-[#8AFF8A] font-semibold text-black"></div>
            <div className="flex h-full w-[20%] items-center justify-center bg-[#334DBB] font-semibold text-black"></div>
            <div className="flex flex-1 items-center justify-center bg-[#FF5C5C] font-semibold text-black"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between">
            <span>Operating hours (h)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {runningState
                ?.filter((ele: any) => ele.value)
                .reduce(
                  (acc: number, ele: any) => acc + ele.difTimeHourly,
                  0,
                ) || 0}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span>Downtime hours (h)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {Math.floor(
                runningState
                  ?.filter((ele: any) => !ele.value)
                  .reduce(
                    (acc: number, ele: any) => acc + ele.difTimeHourly,
                    0,
                  ) || 0,
              )}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span>Utilisation (%)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {runningState
                ?.filter((ele: any) => ele.value)
                .reduce(
                  (acc: number, ele: any) => acc + ele.difTimeHourly,
                  0,
                ) || 0}
            </span>
          </div>
        </div>
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <ReactApexChart
          height={170}
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
              text: "Frame bearing temperature (°C)",
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
            colors: ["#FFCA05", "#78F6EA"],
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
              name: "left",
              data: frameLeft || [],
            },
            {
              name: "right",
              data: frameRight || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <ReactApexChart
          height={170}
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
              text: "Pitman bearing temperature (°C)",
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
            colors: ["#FFCA05", "#40EFDE"],
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
              name: "V1",
              data: pitmanLeft || [],
            },
            {
              name: "W1",
              data: pitmanRight || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <ReactApexChart
          height={170}
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
              text: "Motor winding temperatures (°C)",
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
            colors: ["#FFCA05", "#78F6EA", "#FF5C5C"],
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
              name: "u1",
              data: u1 || [],
            },
            {
              name: "v1",
              data: v1 || [],
            },
            {
              name: "w1",
              data: w1 || [],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default LeftBar;
