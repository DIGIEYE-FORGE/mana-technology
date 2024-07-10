import { Card } from "@/components/card";
import { serial, widgetData } from "./data";
import Telemetry from "@/components/telemetry";
import LineChartWidget from "@/components/line-chart-widget";
import { HistoryType, JsonObject, LastTelemetry } from "@/utils";
import GaugeWidget from "@/components/gauge-widget";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Loader from "@/components/loader";

export default function Dashboard() {
  const { backendApi, dateRange } = useAppContext();

  const key = `dashboard11${JSON.stringify(dateRange)}`;
  const { data, isLoading, error } = useSWR(key, async () => {
    const { results: lastTelemetries } =
      await backendApi.findMany<LastTelemetry>("lasttelemetry", {
        where: { device: { serial } },
        pagination: { page: 1, perPage: 10_00 },
      });

    const { results: history } = await backendApi.findMany<HistoryType>(
      "/dpc-history/api/history",
      {
        pagination: { page: 1, perPage: 10_00 },
        select: [
          ...widgetData[3].attributes.telemetries.map((it) => it.name),
          ...widgetData[6].attributes.telemetries.map((it) => it.name),
          ...widgetData[7].attributes.telemetries.map((it) => it.name),
        ],
        orderBy: "createdAt:asc",
        where: {
          serial,
          createdAt: {
            $gt: new Date(dateRange?.from as Date),
            $lte: dateRange?.to && new Date(dateRange?.to as Date),
          },
        },
      },
    );
    return { lastTelemetries, history };
  });
  if (error)
    return (
      <div className="main grid h-[calc(100svh-5rem)] place-content-center">
        <h1 className="text-center text-4xl opacity-50 sm:text-6xl">
          Something went wrong
        </h1>
      </div>
    );
  if (isLoading)
    return (
      <div className="main grid h-[calc(100svh-5rem)] place-content-center">
        <Loader />
      </div>
    );

  if (data)
    return (
      <main className="mx-auto grid max-w-[1920px] auto-rows-[4.5rem] grid-cols-5 gap-4 p-6 [&>*]:p-4">
        <Card className="col-span-3 row-span-3 flex flex-col gap-4">
          <h3 className="text-center text-lg font-semibold capitalize">
            {widgetData[0].title}
          </h3>
          <div className="flex h-1 flex-1 justify-between gap-4">
            {widgetData[0].telemetries.map((telemetry, index) => {
              const { extraTelemetries, label, ...rest } = telemetry;
              return (
                <div className="flex h-full flex-col" key={index}>
                  <h4 className="text-center font-semibold">{label}</h4>
                  <GaugeWidget
                    preLoadData={data?.lastTelemetries}
                    attributes={rest as unknown as JsonObject}
                  />
                  <div className="flex justify-center gap-6">
                    {extraTelemetries.map((extraTelemetry, index) => {
                      return (
                        <div
                          className="flex justify-center gap-2 text-xl"
                          key={index}
                        >
                          <Telemetry
                            telemetry={extraTelemetry}
                            preLoadData={data?.lastTelemetries}
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
            ({ label, displayFormat, ...telemetry }, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="whitespace-nowrap text-xl font-semibold">
                  {label}
                </div>
                <div className="flex gap-2 text-lg font-bold text-yellow-600">
                  <Telemetry
                    preLoadData={data?.lastTelemetries}
                    telemetry={telemetry}
                    displayFormat={displayFormat}
                  />
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
              preLoadData={data?.history}
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
                <div key={index} className="flex w-full justify-between gap-4">
                  <div className="whitespace-nowrap font-semibold">{label}</div>

                  <div className="flex gap-2 font-bold">
                    <Telemetry
                      preLoadData={data?.lastTelemetries}
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
                <div className="flex w-full justify-between gap-2" key={index}>
                  <div className="whitespace-nowrap font-semibold">{label}</div>
                  <div className="flex gap-2 font-bold">
                    <Telemetry
                      preLoadData={data?.lastTelemetries}
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
            <LineChartWidget
              // preLoadData={data?.history}
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
              preLoadData={data?.history}
              attributes={widgetData[7].attributes as unknown as JsonObject}
            />
          </div>
        </Card>
      </main>
    );
}
