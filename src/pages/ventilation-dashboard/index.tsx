/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
import { BarChart } from "./components/bar-chart";
import { data, qualitédair, ventilation } from "./data";
import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";
import { cn } from "@/lib/utils";
// import LineChartWidget from "@/components/line-chart-widget";

const VentilationDashboard = () => {
  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[9rem] grid-cols-[repeat(16,minmax(0,1fr))] gap-4 [&>*]:p-4">
      {data.map((item, index) => (
        <Card key={index} className={item.cardClassNames}>
          <h1 className="text-center text-lg font-semibold">{item.title}</h1>
          <div className="grid flex-1 auto-rows-[1rem] gap-2">
            {item.children.map((child, index) => (
              <div
                key={index}
                className={cn(
                  "row-span-4 flex flex-col",
                  index !== 0 && "pt-4",
                )}
              >
                <h4 className="text-left text-xs font-semibold">
                  {child.title}
                </h4>
                <MoteurCard
                  color={child.color}
                  attributes={child.attributes}
                  interval={5000}
                />
                {/* <LineChartWidget attributes={child.attributes} /> */}
              </div>
            ))}
          </div>
        </Card>
      ))}
      <Card className="col-span-4 row-span-6 flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-semibold">Qualité d’air</h1>
        <div className="grid flex-1 grid-rows-3 gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="text-lg font-semibold">{qualitédair[0].title}</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <QualitAir {...qualitédair[0].children[0]} />
              <QualitAir {...qualitédair[0].children[1]} />
              <QualitAir {...qualitédair[0].children[2]} />
              <div className="col-span-2">
                <BarChart attributes={qualitédair[0].children[4].attributes} />
              </div>
              <QualitAir {...qualitédair[0].children[3]} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="text-lg font-semibold">{qualitédair[1].title}</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <QualitAir {...qualitédair[1].children[0]} />
              <QualitAir {...qualitédair[1].children[1]} />
              <QualitAir {...qualitédair[1].children[2]} />
              <div className="col-span-2">
                <BarChart attributes={qualitédair[1].children[4].attributes} />
              </div>
              <QualitAir {...qualitédair[1].children[3]} />
            </div>
          </div>
          <div className="flex flex-1 cursor-not-allowed flex-col opacity-50">
            <h4 className="text-lg font-semibold">{qualitédair[2].title}</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <QualitAir {...qualitédair[2].children[0]} />
              <QualitAir {...qualitédair[2].children[1]} />
              <QualitAir {...qualitédair[2].children[2]} />
              <div className="col-span-2">
                <BarChart
                  attributes={qualitédair[0].children[4].attributes}
                  disabled={true}
                />
              </div>
              <QualitAir {...qualitédair[2].children[3]} />
            </div>
          </div>
        </div>
      </Card>
      <div className="col-span-9 row-span-3 !p-0">
        <img
          src="/animation.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <Card
        className={cn(
          "col-span-3 row-span-1 flex flex-col items-center gap-3 rounded-none",
        )}
      >
        <VentilationCard {...ventilation[0]} interval={5000} />
      </Card>
      <Card className="col-span-3 row-span-1 flex flex-col items-center gap-3">
        <VentilationCard {...ventilation[1]} interval={5000} />
      </Card>
      <Card
        className={cn(
          "col-span-3 row-span-1 flex cursor-not-allowed flex-col items-center gap-3 rounded-none opacity-50",
        )}
      >
        <VentilationCard {...ventilation[2]} interval={5000} />
      </Card>
    </main>
  );
};

export default VentilationDashboard;
