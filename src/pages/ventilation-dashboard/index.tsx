import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
import { useRef } from "react";

const VentilationDashboard = () => {
  const video = useRef<HTMLVideoElement>(null);
  // const handleVideoEnd = () => {
  //   if (!video.current) return;
  //   video.current.currentTime = 0;
  //   video.current.play();
  // };
  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[9rem] grid-cols-5 gap-4 [&>*]:p-4">
      <Card className="row-span-3 flex flex-col gap-1">
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
      <Card className="row-span-3 flex flex-col gap-1">
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
      <Card className="row-span-3 flex flex-col gap-1">
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
      <Card className="row-span-3 flex flex-col gap-1">
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
      <Card className="row-span-6">5</Card>
      <div className="col-span-3 row-span-3 !p-0">
        <video
          ref={video}
          className="h-full w-full object-cover"
          src="/animation.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <Card className="row-span-1 flex flex-col items-center gap-3">
        <h1 className="text-center text-xl font-semibold">
          Puissance Totale KW
        </h1>
        <div className="flex items-center gap-3 text-5xl font-semibold">
          <span>1200</span>
          <span>KW</span>
        </div>
      </Card>
      <Card className="row-span-1 flex flex-col items-center gap-3">
        <h1 className="text-center text-xl font-semibold">
          Puissance Thermique galerie
        </h1>
        <div className="flex items-center gap-3 text-5xl font-semibold">
          <span>160</span>
          <span>KW</span>
        </div>
      </Card>
      <Card className="row-span-1 flex flex-col items-center gap-3 text-[#CAD2D6]">
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
