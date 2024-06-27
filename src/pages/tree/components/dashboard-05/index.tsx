import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { widgetsData } from "./data";
import { CircularProgressChart } from "@/components/circular-progress-chart";
import MachineFrame from "@/assets/machine-frame.svg?react";

export const Dashboard5 = () => {
  return (
    <main className="grid auto-rows-[11.5rem] grid-cols-4 gap-4">
      <Card className="col-span-2 flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[0].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[0].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h4 className="py-2 text-center text-lg font-semibold">
          {widgetsData[1]?.title}
        </h4>
        <div className="flex h-1 flex-1 items-center justify-evenly">
          <div className="flex flex-col items-center gap-1">
            <div className="relative aspect-square h-20">
              <MachineFrame className="h-full w-full" />
              <div className="absolute bottom-2 right-3 z-10 w-32">
                <img
                  src={widgetsData[1].attributes.image}
                  alt="image"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center text-sm font-semibold">
              {widgetsData[1].attributes.name}
            </div>
          </div>
          {widgetsData[1].attributes.telemetries.map((telemetry, index) => {
            const { color, label, ...rest } = telemetry;
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="aspect-square h-20">
                  <CircularProgressChart
                    telemetry={rest}
                    color={color}
                    className="h-full w-full text-sm font-bold"
                  />
                </div>
                <div className="text-center text-sm font-semibold">{label}</div>
              </div>
            );
          })}
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[2].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[2].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[3].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[3].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[4].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[4].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[5].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[5].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[6].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[6].attributes} />
        </div>
      </Card>
    </main>
  );
};
