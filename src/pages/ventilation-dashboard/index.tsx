/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
import { BarChart } from "./components/bar-chart";
import { data, qualitédair, ventilation } from "./data";
import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";
import { cn } from "@/lib/utils";

const VentilationDashboard = () => {
  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[5.8rem] grid-cols-[repeat(18,minmax(0,1fr))] gap-4 [&>*]:p-4">
      <div className="debug col-span-6 row-span-5 flex flex-col gap-1 !p-0">
        <h1 className="pl-2 text-left text-lg font-semibold">Ventilateur 1</h1>
        <div className="grid auto-rows-[5.35rem] grid-cols-2 gap-4">
          <Card className="row-span-5 flex flex-col p-4">
            <h1 className="text-center text-lg font-semibold">
              {data[0].title}
            </h1>
            <div className="grid flex-1 auto-rows-[1.1rem] gap-2">
              {data[0].children.map((child, index) => (
                <div
                  key={index}
                  className={cn("row-span-4 flex flex-col pt-4")}
                >
                  <h4 className="text-left text-xs font-semibold">
                    {child.title}
                  </h4>
                  <MoteurCard
                    color={child.color}
                    attributes={child.attributes}
                    interval={5000}
                    max={child?.max}
                  />
                </div>
              ))}
            </div>
          </Card>
          <Card className="row-span-5 flex flex-col p-4">
            <h1 className="text-center text-lg font-semibold">
              {data[1].title}
            </h1>
            <div className="grid flex-1 auto-rows-[1.1rem] gap-2">
              {data[1].children.map((child, index) => (
                <div
                  key={index}
                  className={cn("row-span-4 flex flex-col pt-4")}
                >
                  <h4 className="text-left text-xs font-semibold">
                    {child.title}
                  </h4>
                  <MoteurCard
                    color={child.color}
                    attributes={child.attributes}
                    interval={5000}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="col-span-6 row-span-5 flex flex-col gap-4 !p-0 !pt-8">
        <div className="grid w-full grid-cols-3 gap-4">
          <Card className="!rounded !px-2 !py-3">
            <VentilationCard {...ventilation[0]} interval={5000} />
          </Card>
          <Card className="!rounded !px-2 !py-3">
            <VentilationCard {...ventilation[1]} interval={5000} />
          </Card>
          <Card className="!rounded !px-2 !py-3">
            <VentilationCard {...ventilation[2]} interval={5000} />
          </Card>
        </div>
        <Card className="h-ful flex w-full flex-1 flex-col gap-2 p-6">
          <img
            src="/animation.gif"
            alt=""
            className="h-full w-full object-cover"
          />
        </Card>
      </div>
      <div className="col-span-6 row-span-5 flex flex-col gap-1 !p-0">
        <h1 className="pl-2 text-left text-lg font-semibold">Ventilateur 2</h1>
        <div className="grid auto-rows-[5.35rem] grid-cols-2 gap-4">
          <Card className="row-span-5 flex flex-col p-4">
            <h1 className="text-center text-lg font-semibold">
              {data[2].title}
            </h1>
            <div className="grid flex-1 auto-rows-[1.1rem] gap-2">
              {data[2].children.map((child, index) => (
                <div
                  key={index}
                  className={cn("row-span-4 flex flex-col pt-4")}
                >
                  <h4 className="text-left text-xs font-semibold">
                    {child.title}
                  </h4>
                  <MoteurCard
                    color={child.color}
                    attributes={child.attributes}
                    interval={5000}
                  />
                </div>
              ))}
            </div>
          </Card>
          <Card className="row-span-5 flex flex-col p-4">
            <h1 className="text-center text-lg font-semibold">
              {data[3].title}
            </h1>
            <div className="grid flex-1 auto-rows-[1.1rem] gap-2">
              {data[3].children.map((child, index) => (
                <div
                  key={index}
                  className={cn("row-span-4 flex flex-col pt-4")}
                >
                  <h4 className="text-left text-xs font-semibold">
                    {child.title}
                  </h4>
                  <MoteurCard
                    color={child.color}
                    attributes={child.attributes}
                    interval={5000}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <Card className="col-span-full row-span-4 flex flex-col gap-4 p-6">
        <h1 className="text-center text-xl font-semibold">Qualité d’air</h1>
        <div className="grid flex-1 grid-cols-3 gap-3">
          <div className="card relative flex flex-1 flex-col gap-1 bg-card/10 px-2 py-3">
            <h4 className="text-center text-lg font-semibold">
              {qualitédair[0].title}
            </h4>
            <div className="grid flex-1 grid-cols-4 rounded-2xl">
              <QualitAir {...qualitédair[0].children[0]} />
              <QualitAir {...qualitédair[0].children[1]} />
              <QualitAir {...qualitédair[0].children[2]} />
              <QualitAir {...qualitédair[0].children[3]} />
              <div className="col-span-full">
                <BarChart attributes={qualitédair[0].children[4].attributes} />
              </div>
            </div>
          </div>
          <div className="card relative flex flex-1 flex-col gap-1 bg-card/10 px-2 py-3">
            <h4 className="text-center text-lg font-semibold">
              {qualitédair[1].title}
            </h4>
            <div className="grid flex-1 grid-cols-4 rounded-2xl">
              <QualitAir {...qualitédair[1].children[0]} />
              <QualitAir {...qualitédair[1].children[1]} />
              <QualitAir {...qualitédair[1].children[2]} />
              <QualitAir {...qualitédair[1].children[3]} />
              <div className="col-span-full">
                <BarChart attributes={qualitédair[1].children[4].attributes} />
              </div>
            </div>
          </div>
          <div className="card relative flex flex-1 cursor-not-allowed flex-col bg-card/10 px-2 py-3 opacity-50">
            <h4 className="text-center text-lg font-semibold">
              {qualitédair[2].title}
            </h4>
            <div className="grid flex-1 grid-cols-4 rounded-2xl">
              <QualitAir {...qualitédair[2].children[0]} />
              <QualitAir {...qualitédair[2].children[1]} />
              <QualitAir {...qualitédair[2].children[2]} />
              <QualitAir {...qualitédair[2].children[3]} />
              <div className="col-span-full">
                <BarChart
                  attributes={qualitédair[2].children[4].attributes}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default VentilationDashboard;
