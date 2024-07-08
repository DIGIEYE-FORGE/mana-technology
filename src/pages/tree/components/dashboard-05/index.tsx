import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { widgetsData } from "./data";
import { PerformanceEngins } from "../performance-engins";

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
        <PerformanceEngins
          selectionDate={true}
          title={widgetsData[1].title}
          attributes={widgetsData[1].attributes}
        />
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[2].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[2].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[3].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[3].attributes} max={100} />
        </div>
      </Card>

      <Card className="col-span-2 flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[5].title}
        </h1>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[5].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[4].title}
        </h3>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[4].attributes} max={100} />
        </div>
      </Card>
    </main>
  );
};
