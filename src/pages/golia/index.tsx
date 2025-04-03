import { Card } from "@/components/card";
import { UpBar } from "./components/upbar";
import { useFrame } from "@react-three/fiber";
import { ModelWidget } from "./components/medel-widget";

export function RotatingModel({
  modelRef,
  isRotating,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelRef: any;
  isRotating?: boolean;
}) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isRotating ? 0.002 : 0;
    }
  });

  return null;
}

export default function GoliaPage() {
  return (
    <main
      className="relative flex flex-col overflow-auto pb-6"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <UpBar />
      <div className="grid grid-flow-dense auto-rows-[19.5rem] gap-4 p-6 md:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12">
        <Card className="col-span-3">1</Card>
        <ModelWidget className="col-span-6 row-span-2" />
        <Card className="col-span-3">3</Card>
        <Card className="col-span-3">4</Card>
        <Card className="col-span-3">5</Card>
        <Card className="col-span-3">6</Card>
        <Card className="col-span-3">7</Card>
        <Card className="col-span-3">8</Card>
        <Card className="col-span-3">9</Card>
      </div>
    </main>
  );
}
