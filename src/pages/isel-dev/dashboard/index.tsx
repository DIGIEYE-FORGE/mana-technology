import { Card } from "@/components/card";
import { widgetData } from "./data";
import Telemetry from "@/components/telemetry";
import React from "react";
import LineChartWidget from "@/components/line-chart-widget";
import { JsonObject } from "@/utils";
import BarChartWidget from "@/components/bar-chart-widget";

export default function Dashboard() {
  return (
    <main className="grid auto-rows-[4.5rem] grid-cols-5 gap-4 p-6 [&>*]:p-4">
      <Card className="col-span-3 row-span-3">1</Card>
      <Card className="row-span-3 grid grid-cols-[min-content,1fr] gap-4">
        <h3 className="col-span-2 text-center text-lg font-semibold">
          {widgetData[1].title}
        </h3>
        {widgetData[1].telemetries.map(
          ({ unit, label, displayFormat, ...telemetry }, index) => (
            <React.Fragment key={index}>
              <div className="whitespace-nowrap font-semibold">{label}</div>
              <div className="flex gap-2">
                <Telemetry
                  telemetry={telemetry}
                  displayFormat={displayFormat}
                />
                <span className="whitespace-nowrap">{unit}</span>
              </div>
            </React.Fragment>
          ),
        )}
      </Card>
      <Card className="row-span-3 grid grid-cols-[min-content,1fr] gap-4">
        <h3 className="col-span-2 text-center text-lg font-semibold">
          {widgetData[2].title}
        </h3>
        {widgetData[2].telemetries.map(
          ({ unit, label, displayFormat, ...telemetry }, index) => (
            <React.Fragment key={index}>
              <div className="whitespace-nowrap font-semibold">{label}</div>
              <div className="flex gap-2">
                <Telemetry
                  telemetry={telemetry}
                  displayFormat={displayFormat}
                />
                <span className="whitespace-nowrap">{unit}</span>
              </div>
            </React.Fragment>
          ),
        )}
      </Card>
      <Card className="col-span-3 row-span-4 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[3].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget
            attributes={widgetData[3].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
      <Card className="col-span-2 row-span-8 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[3].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget
            attributes={widgetData[4].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-4 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[3].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget
            attributes={widgetData[5].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
    </main>
  );
}
