/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { getHoursSinceMidnight } from "@/utils";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  runningHours: {
    firstValue: number,
    lastValue: number
  } | undefined
  runningState: any;
  nde: { x: Date; y: number }[];
  de: { x: Date; y: number }[];
  u1: { x: Date; y: number }[];
  v1: { x: Date; y: number }[];
  w1: { x: Date; y: number }[];
  telemetryRunningState: string;
}

const LeftBar = ({
  runningState,
  nde,
  de,
  u1,
  v1,
  w1,
  telemetryRunningState,
  runningHours
}: LeftBarProps) => {
  const operatingHours = runningHours ? runningHours.firstValue - runningHours.lastValue : 0
  const HoursSinceMidnight = getHoursSinceMidnight()
  const downtimeHours = HoursSinceMidnight - operatingHours
  const utilization = (operatingHours/HoursSinceMidnight) * 100
  return (
    <div className="relative z-10 flex h-full w-[500px] flex-col gap-4">
      <Card className="!rounded px-5 py-3">
        <div className="mb-2 flex flex-col gap-4">
          <span>Running State</span>
          <div className="flex h-10 w-full overflow-hidden rounded-sm">
            {/* this for 24h */}
            {runningState?.count[telemetryRunningState].map((ele: any) => {
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
            {/* <div className="flex h-full w-[44%] items-center justify-center bg-[#8AFF8A] font-semibold text-black">
              XX
            </div>
            <div className="flex h-full w-[20%] items-center justify-center bg-[#FF5C5C] font-semibold text-black">
              XX
            </div>
            <div className="flex flex-1 items-center justify-center bg-[#8AFF8A] font-semibold text-black">
              XX
            </div> */}
            {}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <span>Operating hours (h)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {operatingHours.toFixed(1)}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span>Downtime hours (h)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {downtimeHours.toFixed(1)}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span>Utilization (%)</span>
            <span className="text-xl font-bold text-[#FFC829]">
              {utilization}
            </span>
          </div>
        </div>
      </Card>
      <Card className="w-full p-2">
        <ReactApexChart
          height={265}
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
              text: "Motor bearing temperatures (°C)",
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
              name: "NDE",
              data: nde || [],
            },
            {
              name: "DE",
              data: de || [],
            },
          ]}
        />
      </Card>
      <Card className="w-full p-2">
        <ReactApexChart
          height={265}
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
            colors: ["#E4A0F5", "#FFCA05", "#78F6EA"],
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
              name: "U1",
              data: u1 || [],
            },
            {
              name: "V1",
              data: v1 || [],
            },
            {
              name: "W1",
              data: w1 || [],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default LeftBar;
