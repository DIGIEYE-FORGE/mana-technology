import { Card } from "@/components/card";

import ReactApexChart from "react-apexcharts";
import { ModelCanvas } from "./model-viewer";

function Omniverse() {
  return (
    <div className="pointer-events-none relative flex [&>div]:pointer-events-auto">
      <div className="relative z-10 flex h-full w-[35rem] flex-col gap-3">
        <div className="flex w-full gap-2 [&>div]:!rounded">
          <Card className="flex h-16 grow flex-col justify-center px-5">
            <span className="font-medium">Cadence</span>
            <span>100 avg/h</span>
          </Card>
          <Card className="flex h-16 grow flex-col justify-center px-5">
            <span className="font-medium">Crushed Ore</span>
            <span>100 t</span>
          </Card>
          <Card className="flex h-16 grow flex-col justify-center px-5">
            <span className="font-medium">Stockpile Level</span>
            <span>100 %</span>
          </Card>
          <Card className="flex h-16 grow flex-col justify-center px-5">
            <span className="font-medium">Energie</span>
            <span>100 kw</span>
          </Card>
        </div>
        <h1 className="text-xl font-semibold">Jaw Crusher</h1>
        <Card className="!rounded px-5 py-3">
          <div className="mb-5 flex flex-col gap-2">
            <span>Running State</span>
            <div className="flex h-8 w-full overflow-hidden rounded-sm">
              <div className="h-full w-[44%] bg-green-600"></div>
              <div className="h-full w-[20%] bg-gray-500"></div>
              <div className="flex-1 bg-red-500"></div>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-x-1 gap-y-3">
            <span className="col-start-2">Day</span>
            <span className="">Month</span>
            <span className="">Year</span>
            <span className="">Running hours</span>
            <span className="">100</span>
            <span className="">100</span>
            <span className="">100</span>
            <span className="">Stop Hours</span>
            <span className="">100</span>
            <span className="">100</span>
            <span className="">100</span>
            <span className="">Utilisation</span>
            <span className="">100 %</span>
            <span className="">100 %</span>
            <span className="">100 %</span>
          </div>
        </Card>
        <Card className="w-full">
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
                text: "Frame Bearing Temperature",
                align: "center",
                style: {
                  fontSize: "14px",
                  color: "#ffffff",
                },
              },
              stroke: {
                curve: "smooth",
                width: 3,
              },
              colors: ["#FAAC18", "#2B97FC", "#E4A0F5"],
              legend: {
                labels: {
                  colors: "#A2B0B8",
                },
                markers: {
                  shape: "square",
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
                name: "Left",
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
                name: "Right",
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
        <Card className="w-full">
          <ReactApexChart
            height={275}
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
                text: "Pitman Bearing Temperature",
                align: "center",
                style: {
                  fontSize: "14px",
                  color: "#ffffff",
                },
              },
              stroke: {
                curve: "smooth",
                width: 3,
              },
              colors: ["#FAAC18", "#2B97FC", "#E4A0F5"],
              legend: {
                labels: {
                  colors: "#A2B0B8",
                },
                markers: {
                  shape: "square",
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
                name: "Left",
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
                name: "Right",
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
      {/* ------------------------- middle side ------------------------- */}
      <div className="relative isolate flex flex-1 flex-col gap-2 px-6">
        <div className="absolute inset-0 isolate z-0 flex flex-1 items-center justify-center p-0">
          <ModelCanvas
            url={"/model/jaw02.glb"}
            position={[-40, 15, -20]}
            fov={10}
          />
        </div>
        <Card className="mt-auto w-full">
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
                text: "Crushed Ore Flow",
                align: "center",
                style: {
                  fontSize: "14px",
                  color: "#ffffff",
                },
              },
              stroke: {
                curve: "smooth",
                width: 3,
              },
              colors: ["#FAAC18", "#2B97FC", "#E4A0F5"],
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
                name: "Ore Flow",
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
            ]}
          />
        </Card>
      </div>

      {/* ------------------------- right side ------------------------- */}
      <div className="relative z-10 flex h-full w-[35rem] flex-col gap-3">
        <Card className="mt-10 !rounded px-5 py-5">
          <div className="grid grid-cols-4 gap-x-1 gap-y-[22px]">
            <span className="col-start-3">Running State</span>
            <span>Utilisation</span>
            <span className="col-span-2">Convoyer Rom</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">ROM bin withdrawal</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">ROM Stockpile Apron feeder 1</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">ROM Stockpile Apron feeder 2</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Apron feeders discharge convoyer</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Jaw Crusher grizzly feeder</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Diverter chute</span>
            <span className="w-fit rounded bg-red-400/40 px-2 py-1 text-red-400">
              Stopped
            </span>
            <span>100 %</span>
            <span className="col-span-2">Rock Breaker</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Ore Apron feeder 1</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Ore Apron feeder 2</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Ore Apron feeder 3</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed discharge convoyer</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Stockpile Apron feeder 1</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Stockpile Apron feeder 2</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Crushed Stockpile Apron feeder 3</span>
            <span className="w-fit rounded bg-green-400/40 px-2 py-1 text-green-400">
              Running
            </span>
            <span>100 %</span>
            <span className="col-span-2">Plant feed convoyer</span>
            <span className="w-fit rounded bg-red-400/40 px-2 py-1 text-red-400">
              Stopped
            </span>
            <span>100 %</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Omniverse;
