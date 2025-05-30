/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface RightBarProps {
  crushing: { x: Date; y: number }[];
  crushingValue: string | number;
  grinding: { x: Date; y: number }[];
  grindingValue: string | number;
  flotation: { x: Date; y: number }[];
  flotationValue: string | number;
  tailing: { x: Date; y: number }[];
  tailingValue: string | number;
  concentrate: { x: Date; y: number }[];
  concentrateValue: string | number;
  regeant: { x: Date; y: number }[];
  regeantValue: string | number;
}

const RightBar = ({
  crushing,
  crushingValue,
  grinding,
  grindingValue,
  flotation,
  flotationValue,
  tailing,
  tailingValue,
  concentrate,
  concentrateValue,
  regeant,
  regeantValue,
}: RightBarProps) => {
  return (
    <div className="relative z-10 flex h-full min-h-fit w-[400px] shrink-0 flex-col gap-2 overflow-x-hidden px-1 [&>.card]:h-1 [&>.card]:flex-1">
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Crushing(Kw)</span>
          <span className="font-bold text-[#FFC829]">{crushingValue}</span>
        </div>
        <ReactApexChart
          height={95}
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

            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#78F6EA"],
            legend: {
              show: false,
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
              name: "crushing",
              data: crushing || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Grinding(Kw)</span>
          <span className="font-bold text-[#FFC829]">{grindingValue}</span>
        </div>
        <ReactApexChart
          height={95}
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
            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#40EFDE"],
            legend: {
              show: false,
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
              name: "grinding",
              data: grinding || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Flotation (Mw)</span>
          <span className="font-bold text-[#FFC829]">{flotationValue}</span>
        </div>
        <ReactApexChart
          height={95}
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

            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#78F6EA", "#FF5C5C"],
            legend: {
              show: false,
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
              name: "flotation",
              data: flotation || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Tailing(Kw)</span>
          <span className="font-bold text-[#FFC829]">{tailingValue}</span>
        </div>
        <ReactApexChart
          height={95}
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

            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#78F6EA", "#FF5C5C"],
            legend: {
              show: false,
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
              name: "tailing",
              data: tailing || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Concentrate (Kw)</span>
          <span className="font-bold text-[#FFC829]">{concentrateValue}</span>
        </div>
        <ReactApexChart
          height={95}
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

            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#78F6EA", "#FF5C5C"],
            legend: {
              show: false,
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
              name: "concentrate",
              data: concentrate || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Reagents (Kw)</span>
          <span className="font-bold text-[#FFC829]">{regeantValue}</span>
        </div>
        <ReactApexChart
          height={95}
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

            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#78F6EA", "#FF5C5C"],
            legend: {
              show: false,
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
              name: "regeant",
              data: regeant || [],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default RightBar;
