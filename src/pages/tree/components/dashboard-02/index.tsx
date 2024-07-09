import { Card } from "@/components/card";
import { widgetsData } from "./data";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import { PerformanceEngins } from "../performance-engins";
import ModelVideo from "./video-model";

export const Dashboard2 = () => {
  return (
    <main className="grid max-h-full auto-rows-[11.5rem] grid-cols-4 gap-4">
      <Card className="relative col-span-2 flex flex-col gap-2 p-2">
        <div className="flex">
          <div className="flex-1 text-center font-semibold">
            {widgetsData[0]?.title}
          </div>
          <div className="absolute top-0 z-[999]">
            <ModelVideo />
          </div>
        </div>
        <div className="flex h-1 flex-1 gap-12 px-8">
          <div
            className="flex-1 rounded-lg"
            style={{
              backgroundImage: `url(${widgetsData[0].attributes.image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="flex-1 rounded-lg"
            style={{
              backgroundImage: `url(${widgetsData[0].attributes.image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </Card>
      <Card className="relative col-span-2 flex flex-col p-2">
        <PerformanceEngins
          selectionDate={true}
          title={widgetsData[1].title}
          attributes={widgetsData[1].attributes}
        />
      </Card>
      <Card className="col-span-2 flex flex-col p-2">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[2]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <BarChartWidget attributes={widgetsData[2].attributes} />
        </div>
      </Card>
      <Card className="flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[3]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget attributes={widgetsData[3].attributes} max={100} />
        </div>
      </Card>
      <Card className="flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[4]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget attributes={widgetsData[4].attributes} max={100} />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col">
        <h4 className="pt-2 text-center text-lg font-semibold">
          {widgetsData[5]?.title}
        </h4>
        <div className="relative h-1 flex-1 -translate-y-4">
          <LineChartWidget
            yAxis="one"
            correction={{
              UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS: 60,
            }}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
                  color: "#18a5c1",
                  label: "Temps de foration",
                  serial: "GHZIN57J7EOVXG0C",
                  type: "line",
                },
                {
                  name: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
                  color: "#cda943",
                  label: "BFS",
                  serial: "GHZIN57J7EOVXG0C",
                  type: "line",
                },
              ],
            }}
          />
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
