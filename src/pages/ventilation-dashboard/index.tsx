import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
import { CircularProgress } from "@/components/circular-progress";
import { BarChart } from "./components/bar-chart";

const VentilationDashboard = () => {
  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[9rem] grid-cols-[repeat(16,minmax(0,1fr))] gap-4 [&>*]:p-4">
      <Card className="col-span-3 row-span-3 flex flex-col gap-1">
        <h1 className="text-center text-lg font-semibold">Moteur 1</h1>
        <div className="grid flex-1 auto-rows-[1rem] gap-2">
          <div className="row-span-4 flex flex-col">
            <h4 className="text-left text-xs font-semibold">Kw</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Speed</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Température</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Vibration</h4>
            <MoteurCard color="#78F6EA" />
          </div>
        </div>
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-1">
        <h1 className="text-center text-lg font-semibold">Moteur 1</h1>
        <div className="grid flex-1 auto-rows-[1rem] gap-2">
          <div className="row-span-4 flex flex-col">
            <h4 className="text-left text-xs font-semibold">Kw</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Speed</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Température</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Vibration</h4>
            <MoteurCard color="#78F6EA" />
          </div>
        </div>
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-1">
        <h1 className="text-center text-lg font-semibold">Moteur 1</h1>
        <div className="grid flex-1 auto-rows-[1rem] gap-2">
          <div className="row-span-4 flex flex-col">
            <h4 className="text-left text-xs font-semibold">Kw</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Speed</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Température</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Vibration</h4>
            <MoteurCard color="#78F6EA" />
          </div>
        </div>
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-1">
        <h1 className="text-center text-lg font-semibold">Moteur 1</h1>
        <div className="grid flex-1 auto-rows-[1rem] gap-2">
          <div className="row-span-4 flex flex-col">
            <h4 className="text-left text-xs font-semibold">Kw</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Speed</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Température</h4>
            <MoteurCard color="#FF5AF1" />
          </div>
          <div className="row-span-4">
            <h4 className="text-left text-xs font-semibold">Vibration</h4>
            <MoteurCard color="#78F6EA" />
          </div>
        </div>
      </Card>
      <Card className="col-span-4 row-span-6 flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-semibold">Qualité d’air</h1>
        <div className="grid flex-1 grid-rows-3 gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="text-lg font-semibold">Niveau 100</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">O2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.5rem]"
                  legend="60%"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">CO</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">NO2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="col-span-2">
                <BarChart />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">Vitesse air</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="0.2 m/s"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="text-lg font-semibold">Niveau 500</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">O2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.5rem]"
                  legend="60%"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">CO</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">NO2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="col-span-2">
                <BarChart />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">Vitesse air</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="0.2 m/s"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="text-lg font-semibold">Niveau 500</h4>
            <div className="grid flex-1 grid-cols-3 rounded-2xl border-2 border-[#26E2B3] py-2">
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">O2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.5rem]"
                  legend="60%"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">CO</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">NO2</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="60 ppm"
                />
              </div>
              <div className="col-span-2">
                <BarChart />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-sm font-semibold">Vitesse air</h5>
                <CircularProgress
                  progress={60}
                  color="#E6BF68"
                  strokeWidth={11}
                  className="size-[5.7rem]"
                  legend="0.2 m/s"
                />
              </div>
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
      <Card className="col-span-3 row-span-1 flex flex-col items-center gap-3">
        <h1 className="text-center text-xl font-semibold">
          Puissance Totale KW
        </h1>
        <div className="flex items-center gap-3 text-5xl font-semibold">
          <span>1200</span>
          <span>KW</span>
        </div>
      </Card>
      <Card className="col-span-3 row-span-1 flex flex-col items-center gap-3">
        <h1 className="text-center text-xl font-semibold">
          Puissance Thermique galerie
        </h1>
        <div className="flex items-center gap-3 text-5xl font-semibold">
          <span>160</span>
          <span>KW</span>
        </div>
      </Card>
      <Card className="col-span-3 row-span-1 flex flex-col items-center gap-3 text-[#CAD2D6]">
        <h1 className="text-center text-xl font-semibold">
          Nombre d’Engins Présents
        </h1>
        <div className="flex items-center gap-3 text-5xl font-semibold">
          <span>0000</span>
        </div>
      </Card>
    </main>
  );
};

export default VentilationDashboard;
