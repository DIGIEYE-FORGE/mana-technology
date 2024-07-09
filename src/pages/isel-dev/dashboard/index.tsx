import { Card } from "@/components/card";
import { widgetData } from "./data";
import Telemetry from "@/components/telemetry";
import React from "react";
import LineChartWidget from "@/components/line-chart-widget";
import { JsonObject } from "@/utils";
import BarChartWidget from "@/components/bar-chart-widget";
import GaugeWidget from "@/components/gauge-widget";

export default function Dashboard() {
  return (
    <main className="mx-auto grid max-w-[1920px] auto-rows-[4.5rem] grid-cols-5 gap-4 p-6 [&>*]:p-4">
      <Card className="col-span-3 row-span-3 flex flex-col gap-4">
        <h3 className="text-center text-lg font-semibold capitalize">
          {widgetData[0].title}
        </h3>
        <div className="flex h-1 flex-1 justify-evenly gap-4">
          {widgetData[0].telemetries.map((telemetry, index) => {
            return (
              <div className="flex h-full flex-col" key={index}>
                <h4 className="text-center font-semibold">{telemetry.label}</h4>
                <GaugeWidget attributes={telemetry as unknown as JsonObject} />
              </div>
            );
          })}
        </div>
      </Card>
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
          {widgetData[4].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget
            attributes={widgetData[4].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-4 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[5].title}
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
