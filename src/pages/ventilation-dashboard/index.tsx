/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
// import { BarChart } from "./components/bar-chart";
import { data, ventilation } from "./data";
// import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";
// import { cn } from "@/lib/utils";

const VentilationDashboard = () => {
  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[6.5rem] grid-cols-[repeat(9,minmax(0,1fr))] gap-4 [&>*]:p-4">
      <Card className="col-span-3 row-span-7 flex flex-col justify-evenly gap-2">
        {data[0].children.map((child, index) => (
          <div
            key={index}
            className="flex h-[12rem] w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                interval={5000}
                max={child?.max}
              />
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <VentilationCard {...ventilation[0]} interval={5000} />
      </Card>
      <Card>
        <VentilationCard {...ventilation[1]} interval={5000} />
      </Card>
      <Card>
        <VentilationCard {...ventilation[2]} interval={5000} />
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col justify-between gap-2">
        {data[1].children.map((child, index) => (
          <div
            key={index}
            className="flex h-[12rem] w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                interval={5000}
                max={child?.max}
              />
            </div>
          </div>
        ))}
      </Card>
      <Card className="col-span-3 row-span-3">
        <img
          src="/animation.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </Card>
      <Card className="col-span-3 row-span-3">
        {data[2].children.map((child, index) => (
          <div
            key={index}
            className="flex h-full w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="flex-1">
              <MoteurCard
                attributes={child.attributes}
                interval={5000}
                max={child?.max}
              />
            </div>
          </div>
        ))}
      </Card>
    </main>
  );
};

export default VentilationDashboard;
