/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
// import { BarChart } from "./components/bar-chart";
import { data, ventilation } from "./data";
// qualitédair
// import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";

const VentilationDashboard1 = () => {
  return (
    <div className="flex h-fit min-h-full w-full flex-wrap gap-8">
      <div className="flex w-1 min-w-[30rem] flex-1 flex-col gap-4">
        {data[0].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                interval={5000}
                max={child?.max}
              />
            </div>
          </Card>
        ))}
        {data[2].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard attributes={child.attributes} interval={5000} />
            </div>
          </Card>
        ))}
      </div>
      <div className="flex w-1 min-w-[30rem] flex-1 flex-col gap-4">
        <div className="flex h-[11rem] justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 gap-4">
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard {...ventilation[1]} interval={5000} />
              </Card>
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard {...ventilation[2]} interval={5000} />
              </Card>
            </div>
            <Card className="flex-1 !rounded !px-2 !py-3">
              <VentilationCard {...ventilation[0]} interval={5000} />
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
        {data[1].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard attributes={child.attributes} interval={5000} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VentilationDashboard1;
