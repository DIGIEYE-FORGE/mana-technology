import { Card } from "@/components/card";
import Telemetry from "@/components/telemetry";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { widgetsData } from "./data";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import DonutChartWidget from "@/components/donut-chart-widget";
import { ConeChart } from "@/components/cone-chart";

export default function HseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn-3d h-fit">HSE</button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max dark bottom-0 top-[4rem] grid w-[100%] max-w-none translate-y-0 rounded-none border-none bg-card/10 p-0 text-foreground backdrop-blur"
        overlayClassName="bg-transparent"
      >
        <div
          className="mx-auto grid h-full max-h-[1020px] w-full max-w-[1920px] auto-rows-[8rem] grid-cols-3 gap-4 bg-[#062095]/70 p-4"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Card className="flex flex-col items-center justify-center gap-2 p-2">
            <h3 className="text-lg font-semibold">{widgetsData[0].title}</h3>
            <div className="text-4xl font-bold">
              <Telemetry
                telemetry={{
                  name: widgetsData[0].telemetryName,
                  serial: widgetsData[0].serial,
                }}
              />
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center gap-2 p-2">
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
          <Card className="grid place-content-center p-6">
            <img
              src="/security-respect.svg"
              className="size-[6.5rem]"
              alt="security = respect"
            />
          </Card>
          <Card className="row-span-3 flex flex-col gap-4 p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[4].title}
            </h3>
            <div className="h-1 flex-1">
              <ConeChart
                className="h-full gap-4"
                legendWidth={240}
                coneClassName="px-12"
                attributes={widgetsData[3].attributes.telemetries}
              />
            </div>
          </Card>
          <Card className="row-span-3 flex flex-col p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[4].title}
            </h3>
            <div className="h-1 flex-1">
              <LineChartWidget attributes={widgetsData[4].attributes} />
            </div>
          </Card>
          <Card className="row-span-3 flex flex-col p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[5].title}
            </h3>
            <div className="h-1 flex-1">
              <LineChartWidget attributes={widgetsData[5].attributes} />
            </div>
          </Card>
          <Card className="row-span-3 flex flex-col gap-8 p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[6].title}
            </h3>
            <div className="h-1 flex-1 items-center">
              <DonutChartWidget attributes={widgetsData[6].attributes} />
            </div>
          </Card>
          <Card className="row-span-3 flex flex-col p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[7].title}
            </h3>
            <div className="h-1 flex-1">
              <BarChartWidget attributes={widgetsData[7].attributes} />
            </div>
          </Card>
          <Card className="row-span-3 flex flex-col p-6">
            <h3 className="text-center text-lg font-semibold">
              {widgetsData[8].title}
            </h3>
            <div className="h-1 flex-1">
              8<BarChartWidget attributes={widgetsData[8].attributes} />
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
