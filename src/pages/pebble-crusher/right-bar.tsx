import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";
import DropIcon from "@/assets/drop.svg?react";
import HydrolicIcon from "@/assets/hydrolic.svg?react";
import ClampIcon from "@/assets/clamp.svg?react";
import TrampIcon from "@/assets/tramp.svg?react";
import LubIcon from "@/assets/lub.svg?react";

const RightBar = () => {
  return (
    <div className="relative z-10 flex h-full w-[500px] flex-col gap-3">
      <Card className="flex flex-col gap-2 !rounded px-5 py-3">
        <span className="font-semibold">Hydrolic System</span>
        <Card className="flex items-center justify-center gap-5 !rounded px-5 py-1">
          <DropIcon className="size-16" />
          <span className="text-lg font-medium">Pressure</span>{" "}
          <span className="ml-auto text-xl font-bold text-[#FFC829]">xx</span>
        </Card>
        <Card className="flex items-center justify-center gap-5 !rounded px-5 py-1">
          <HydrolicIcon className="size-16" />
          <span className="text-lg font-medium">Hydraulic Filter</span>{" "}
          <span className="ml-auto text-xl font-bold text-[#FFC829]">xx</span>
        </Card>
        <Card className="flex items-center justify-center gap-5 !rounded px-5 py-1">
          <ClampIcon className="size-16" />
          <span className="text-lg font-medium">Clamping Circuit</span>{" "}
          <span className="ml-auto text-xl font-bold text-[#FFC829]">xx</span>
        </Card>
        <Card className="flex items-center justify-center gap-5 !rounded px-5 py-1">
          <TrampIcon className="size-16" />
          <span className="text-lg font-medium">
            Tramp Release Circuit
          </span>{" "}
          <span className="ml-auto text-xl font-bold text-[#FFC829]">xx</span>
        </Card>
      </Card>
      <Card className="flex flex-col gap-2 !rounded px-5 py-3">
        <span className="font-semibold">Lubrication System</span>
        <Card className="flex items-center justify-center gap-5 !rounded px-5 py-1">
          <LubIcon className="size-16" />
          <span className="text-lg font-medium">
            Lub Filter Differentiel
          </span>{" "}
          <span className="ml-auto text-xl font-bold text-[#FFC829]">xx</span>
        </Card>
      </Card>
      <Card className="w-full p-2">
        <ReactApexChart
          height={280}
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
              text: "Oil Temperature",
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
              name: "Tank",
              data: [
                {
                  x: "2023-10-01T00:00:00.000Z",
                  y: 100,
                },
                {
                  x: "2023-10-02T00:00:00.000Z",
                  y: 120,
                },
                {
                  x: "2023-10-03T00:00:00.000Z",
                  y: 80,
                },
                {
                  x: "2023-10-04T00:00:00.000Z",
                  y: 150,
                },
                {
                  x: "2023-10-05T00:00:00.000Z",
                  y: 200,
                },
              ],
            },
            {
              name: "Return",
              data: [
                {
                  x: "2023-10-01T00:00:00.000Z",
                  y: 70,
                },
                {
                  x: "2023-10-02T00:00:00.000Z",
                  y: 80,
                },
                {
                  x: "2023-10-03T00:00:00.000Z",
                  y: 90,
                },
                {
                  x: "2023-10-04T00:00:00.000Z",
                  y: 100,
                },
                {
                  x: "2023-10-05T00:00:00.000Z",
                  y: 110,
                },
              ],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default RightBar;
