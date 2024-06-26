import { Card } from "@/components/card";
import { widgetsData } from "./data";
import MachineFrame from "@/assets/machine-frame.svg?react";
import { CircularProgressChart } from "@/components/circular-progress-chart";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";

export const Dashboard2 = () => {
  return (
    <main className="grid max-h-full auto-rows-[11.5rem] grid-cols-4 gap-4">
      <Card className="col-span-2 flex flex-col p-2">
        <span className="py-2 text-center text-lg font-semibold">
          {widgetsData[0]?.title}
        </span>
        <div className="flex h-1 flex-1 gap-4">
          <div
            className="flex-1 object-contain"
            style={{
              backgroundImage: `url(${widgetsData[0].attributes.image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
          <div
            className="flex-1 object-contain"
            style={{
              backgroundImage: `url(${widgetsData[0].attributes.image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
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
              <div className="absolute bottom-0 right-4 z-10 w-32">
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
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[2]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget attributes={widgetsData[2].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[3]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget attributes={widgetsData[3].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[4]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget attributes={widgetsData[4].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[5]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <BarChartWidget attributes={widgetsData[5].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[6]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <BarChartWidget attributes={widgetsData[6].attributes} />
        </div>
      </Card>
    </main>
  );
};
