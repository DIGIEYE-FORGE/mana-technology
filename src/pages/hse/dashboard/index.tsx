import { Card } from "@/components/card";
import Telemetry from "@/components/telemetry";
import { widgetsData } from "./data";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import DonutChartWidget from "@/components/donut-chart-widget";
import { ConeChart } from "@/components/cone-chart";
import { CircularProgressChart } from "@/components/circular-progress-chart";

export default function HseDashboard() {
  return (
    <div
      className="mx-auto grid h-full w-full max-w-[1920px] auto-rows-[7.7rem] grid-cols-12 gap-4 overflow-auto p-1"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Card className="col-span-3 flex flex-col items-center justify-center gap-2 !rounded p-2">
        <h3 className="text-lg font-semibold">{widgetsData[0].title}</h3>
        <div className="text-4xl font-bold">
          <Telemetry
            displayFormat="float"
            telemetry={{
              name: widgetsData[0].telemetryName,
              serial: widgetsData[0].serial,
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col items-center justify-center gap-2 !rounded p-2">
        <h3 className="text-lg font-semibold">{widgetsData[1].title}</h3>
        <div className="text-4xl font-bold">
          <Telemetry
            telemetry={{
              name: widgetsData[1].telemetryName,
              serial: widgetsData[1].serial,
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col items-center justify-center gap-2 !rounded p-2">
        <h3 className="text-lg font-semibold">{widgetsData[2].title}</h3>
        <div className="text-4xl font-bold">
          <Telemetry
            telemetry={{
              name: widgetsData[2].telemetryName,
              serial: widgetsData[2].serial,
            }}
            displayFormat="float"
            correction={widgetsData[2].correction}
          />{" "}
          %
        </div>
      </Card>
      <Card className="col-span-3 grid place-content-center !rounded p-6">
        <img
          src="/security-respect.svg"
          className="size-[6.5rem]"
          alt="security = respect"
        />
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col gap-2 p-6">
        <ConeChart
          className="h-1 flex-1 gap-4"
          legendWidth={160}
          coneClassName="px-12"
          attributes={widgetsData[3].attributes.telemetries}
        />
        <div className="flex items-center justify-evenly gap-2">
          {widgetsData[3].attributes.progressTelemetries.map(
            (telemetry, index) => (
              <div className="flex flex-col">
                <CircularProgressChart
                  className="size-24 text-lg"
                  key={index}
                  telemetry={{
                    name: telemetry.name,
                    serial: telemetry.serial,
                  }}
                  stops={[
                    {
                      color: telemetry.color,
                      offset: 100,
                    },
                  ]}
                />
                <span className="text-center text-sm font-semibold">
                  {telemetry.label}
                </span>
              </div>
            ),
          )}
        </div>
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col p-6">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[4].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[4].attributes} />
        </div>
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col p-6">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[5].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[5].attributes} />
        </div>
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col gap-8 p-6">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[6].title}
        </h3>
        <div className="h-1 flex-1 items-center">
          <DonutChartWidget attributes={widgetsData[6].attributes} />
        </div>
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col p-6">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[7].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[7].attributes} />
        </div>
      </Card>
      <Card className="col-span-4 row-span-3 flex flex-col p-6">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[8].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[8].attributes} />
        </div>
      </Card>
    </div>
  );
}
