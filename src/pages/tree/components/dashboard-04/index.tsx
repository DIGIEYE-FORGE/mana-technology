import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import { CircularProgress } from "@/components/circular-progress";
import LineChartWidget from "@/components/line-chart-widget";
import { widgetsData } from "./data";

export const Dashboard4 = () => {
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
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[1].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[1].attributes} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h3 className="text-center text-lg font-semibold">
          {widgetsData[2].title}
        </h3>
        <div className="h-1 flex-1">
          <BarChartWidget attributes={widgetsData[2].attributes} />
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
      <Card className="flex flex-col p-2">
        <h1 className="text-center text-lg font-semibold">
          {widgetsData[6].title}
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget attributes={widgetsData[6].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-2 p-2">
        <h3 className="text-center text-lg font-semibold">
          Production Journaliére
        </h3>
        <div className="flex-1">
          <CircularProgress progress={52} legend="50 min" color="#5CC2B9" />
        </div>
      </Card>
    </main>
  );
};
