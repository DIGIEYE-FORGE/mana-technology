import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  runningState: string;
  nde: { x: Date; y: number }[];
  de: { x: Date; y: number }[];
  u1: { x: Date; y: number }[];
  v1: { x: Date; y: number }[];
  w1: { x: Date; y: number }[];
}

const LeftBar = ({ runningState, nde, de, u1, v1, w1 }: LeftBarProps) => {
  return (
    <div className="relative z-10 flex h-full w-[500px] flex-col gap-3">
      <Card className="!rounded px-5 py-3">
        <div className="mb-2 flex flex-col gap-1">
          <span>Running State</span>
          <span className="text-xl font-bold text-[#FFC829]">
            {runningState} Hrs
          </span>
          <div className="flex h-8 w-full overflow-hidden rounded-sm">
            <div className="flex h-full w-[44%] items-center justify-center bg-[#8AFF8A] font-semibold text-black">
              XX
            </div>
            <div className="flex h-full w-[20%] items-center justify-center bg-[#FF5C5C] font-semibold text-black">
              XX
            </div>
            <div className="flex flex-1 items-center justify-center bg-[#8AFF8A] font-semibold text-black">
              XX
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between">
            <span>Running hours</span>
            <span className="text-xl font-bold text-[#FFC829]">XX</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Stop Hours</span>
            <span className="text-xl font-bold text-[#FFC829]">XX</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Utilisation (%)</span>
            <span className="text-xl font-bold text-[#FFC829]">XX</span>
          </div>
        </div>
      </Card>
      <Card className="w-full p-2">
        <ReactApexChart
          height={250}
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
              text: "Motor beering temperature",
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
          height={250}
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
              text: "Motor winding temperature",
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
