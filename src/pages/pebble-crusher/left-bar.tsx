import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

const LeftBar = () => {
  return (
    <div className="relative z-10 flex h-full w-[500px] flex-col gap-3">
      <Card className="!rounded px-5 py-3">
        <div className="mb-2 flex flex-col gap-1">
          <span>Running State</span>
          <span className="text-xl font-bold text-[#FFC829]">xx Hrs</span>
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
        <div className="grid grid-cols-5 grid-rows-4 gap-1">
          <span className="col-start-3">Day</span>
          <span className="">Month</span>
          <span className="">Year</span>
          <span className="col-span-2">Running hours</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="col-span-2">Stop Hours</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="col-span-2">Utilisation (%)</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
          <span className="text-xl font-bold text-[#FFC829]">XX</span>
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
              name: "DE",
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
              name: "V1",
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
            {
              name: "W1",
              data: [
                {
                  x: "2023-10-01T00:00:00.000Z",
                  y: 60,
                },
                {
                  x: "2023-10-02T00:00:00.000Z",
                  y: 70,
                },
                {
                  x: "2023-10-03T00:00:00.000Z",
                  y: 80,
                },
                {
                  x: "2023-10-04T00:00:00.000Z",
                  y: 90,
                },
                {
                  x: "2023-10-05T00:00:00.000Z",
                  y: 100,
                },
              ],
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default LeftBar;
