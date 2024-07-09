import { Card } from "@/components/card";
import { widgetData } from "./data";
import Telemetry from "@/components/telemetry";
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
        <div className="flex h-1 flex-1 justify-between gap-4">
          {/* <div className="flex h-full flex-col">
            <h4 className="text-center font-semibold">
              {widgetData[0].telemetries[0].label}
            </h4>
            <GaugeWidget
              attributes={widgetData[0].telemetries[0] as unknown as JsonObject}
            />
            <div className="flex justify-center gap-2">
              <Telemetry
                telemetry={widgetData[0].telemetries[0]}
                displayFormat={widgetData[1].telemetries[0].displayFormat}
              />
              <span className="whitespace-nowrap">
                {widgetData[1].telemetries[0].unit}
              </span>
            </div>
          </div>
          <div className="flex h-full flex-col">
            <h4 className="text-center font-semibold">
              {widgetData[0].telemetries[1].label}
            </h4>
            <GaugeWidget
              attributes={widgetData[0].telemetries[1] as unknown as JsonObject}
            />
          </div>
          <div className="flex h-full flex-col">
            <h4 className="text-center font-semibold">
              {widgetData[0].telemetries[2].label}
            </h4>
            <GaugeWidget
              attributes={widgetData[0].telemetries[2] as unknown as JsonObject}
            />
            <div className="flex justify-center gap-6">
              <div className="flex justify-center gap-2">
                <Telemetry
                  telemetry={widgetData[1].telemetries[1]}
                  displayFormat={widgetData[1].telemetries[1].displayFormat}
                />
                <span className="whitespace-nowrap">
                  {widgetData[1].telemetries[1].unit}
                </span>
              </div>
              <div className="flex justify-center gap-2">
                <Telemetry
                  telemetry={widgetData[1].telemetries[2]}
                  displayFormat={widgetData[1].telemetries[2].displayFormat}
                />
                <span className="whitespace-nowrap">
                  {widgetData[1].telemetries[2].unit}
                </span>
              </div>
            </div>
          </div> */}
          {widgetData[0].telemetries.map((telemetry, index) => {
            const { extraTelemetries, label, ...rest } = telemetry;
            return (
              <div className="flex h-full flex-col" key={index}>
                <h4 className="text-center font-semibold">{label}</h4>
                <GaugeWidget attributes={rest as unknown as JsonObject} />
                <div className="flex justify-center gap-6">
                  {extraTelemetries.map((extraTelemetry, index) => {
                    return (
                      <div className="flex justify-center gap-2" key={index}>
                        <Telemetry
                          telemetry={extraTelemetry}
                          displayFormat={extraTelemetry.displayFormat}
                        />
                        <span className="whitespace-nowrap">
                          {extraTelemetry.unit}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="row-span-3 flex flex-col gap-2">
        <h3 className="text-center text-2xl font-semibold text-yellow-600">
          CAT R1700_01
        </h3>
        <div className="h-1 flex-1">
          <img
            src={widgetData[1].image}
            alt="image"
            className="h-full w-full rounded-lg object-contain"
          />
        </div>
      </Card>

      <Card className="row-span-3 flex flex-col justify-evenly gap-8">
        {widgetData[2].telemetries.map(
          ({ unit, label, displayFormat, ...telemetry }, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="whitespace-nowrap text-xl font-semibold">
                {label}
              </div>
              <div className="flex gap-2 text-lg text-yellow-600">
                <Telemetry
                  telemetry={telemetry}
                  displayFormat={displayFormat}
                />
                <span className="whitespace-nowrap">{unit}</span>
              </div>
            </div>
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
      <Card className="row-span-3 flex flex-col gap-4">
        <h3 className="col-span-2 text-center text-lg font-semibold">
          {widgetData[4].title}
        </h3>
        <div className="flex h-1 flex-1 flex-col justify-evenly">
          {widgetData[4].telemetries.map(
            ({ label, unit, displayFormat, ...telemetry }, index) => (
              <div key={index} className="flex gap-4">
                <div className="whitespace-nowrap font-semibold">{label}</div>
                <div className="flex gap-2">
                  <Telemetry
                    telemetry={telemetry}
                    displayFormat={displayFormat}
                  />
                  <span>{unit}</span>
                </div>
              </div>
            ),
          )}
        </div>
      </Card>
      <Card className="row-span-3 flex flex-col gap-4">
        <h3 className="col-span-2 text-center text-lg font-semibold">
          {widgetData[5].title}
        </h3>
        <div className="flex h-1 flex-1 flex-col justify-evenly">
          {widgetData[5].telemetries.map(
            ({ unit, label, displayFormat, ...telemetry }, index) => (
              <div className="flex gap-2" key={index}>
                <div className="whitespace-nowrap font-semibold">{label}</div>
                <div className="flex gap-2">
                  <Telemetry
                    telemetry={telemetry}
                    displayFormat={displayFormat}
                  />
                  <span className="whitespace-nowrap">{unit}</span>
                </div>
              </div>
            ),
          )}
        </div>
      </Card>
      <Card className="col-span-2 row-span-5 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[6].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget
            attributes={widgetData[6].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-4 flex flex-col">
        <h3 className="text-center text-lg font-semibold">
          {widgetData[7].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget
            attributes={widgetData[7].attributes as unknown as JsonObject}
          />
        </div>
      </Card>
    </main>
  );
}
