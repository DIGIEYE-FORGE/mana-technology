/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  power: { x: Date; y: number }[];
  energy: { x: Date; y: number }[];
  plantPower: { x: Date; y: number }[];
  minePower: { x: Date; y: number }[];
  offsitePower: { x: Date; y: number }[];
  powerValue: string | number;
  energyValue: string | number;
  plantPowerValue: string | number;
  minePowerValue: string | number;
  offsitePowerValue: string | number;
}

const LeftBar = ({
  power,
  energy,
  plantPower,
  minePower,
  offsitePower,
  powerValue,
  energyValue,
  plantPowerValue,
  minePowerValue,
  offsitePowerValue,
}: LeftBarProps) => {
  console.log({
    power: power,
  });
  return (
    <div className="relative z-10 flex h-full min-h-fit w-[400px] shrink-0 flex-col gap-2 overflow-x-hidden px-1 [&>.card]:h-1 [&>.card]:flex-1">
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Power (Mw)</span>
          <span className="font-bold text-[#FFC829]">{powerValue}</span>
        </div>
        {/* {JSON.stringify(power.map((item) => item.y))} */}
        <ReactApexChart
          height={140}
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
              name: "power",
              data: power || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Energy (Mwh)</span>
          <span className="font-bold text-[#FFC829]">{energyValue}</span>
        </div>
        <ReactApexChart
          height={140}
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
              name: "energy",
              data: energy || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Plant power (Mw)</span>
          <span className="font-bold text-[#FFC829]">{plantPowerValue}</span>
        </div>
        <ReactApexChart
          height={140}
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
              name: "plantPower",
              data: plantPower || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Mine power (Kw)</span>
          <span className="font-bold text-[#FFC829]">{minePowerValue}</span>
        </div>
        <ReactApexChart
          height={140}
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
              name: "UG",
              data: minePower || [], //TODO Get data from tag
            },
            {
              name: "OP",
              data: minePower || [],
            },
          ]}
        />
      </Card>
      <Card className="card w-full pl-2 pt-2">
        <div className="flex justify-between px-2">
          <span className="font-semibold">Offsite power (Kw)</span>
          <span className="font-bold text-[#FFC829]">{offsitePowerValue}</span>
        </div>
        <ReactApexChart
          height={140}
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
              name: "Pipeline",
              data: offsitePower || [], //TODO get data from tag of ALL yaxis
            },
            {
              name: "TSF",
              data: offsitePower || [],
            },
            {
              name: "G5",
              data: offsitePower || [],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default LeftBar;
