import { Button } from "@/components/ui/button";
import { Minimize, Shrink } from "lucide-react";
import { useAppContext } from "@/Context";
import Dashboard from "./dashboard";

export function UpBar() {
  const { fullScreen, setFullScreen } = useAppContext();
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-6 backdrop-blur">
      <div className="mr-auto flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 font-ethnocentric text-lg font-bold">
          New Dashboard
        </span>
      </div>
      <Button
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
    </div>
  );
}

export default function Dashboard11Page() {
  return (
    <main className="h-[100svh] overflow-auto">
      <UpBar />
      <Dashboard />
    </main>
  );
}
