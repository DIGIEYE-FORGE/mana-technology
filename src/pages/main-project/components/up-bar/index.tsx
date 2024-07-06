import { Button } from "@/components/ui/button";
import {
  FilePieChart,
  Minimize,
  MoveLeftIcon,
  MoveRightIcon,
  Shrink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { OverviewButton } from "../overview-button";
import { useAppContext } from "@/Context";

export function MainProjectUpBar() {
  const { fullScreen, setFullScreen } = useAppContext();
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-between gap-2 border-b px-6 backdrop-blur md:gap-4">
      
      <div className="flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="font-ethnocentric h-3/4 border-l py-3 pl-4 text-xl font-bold">
          Tizert Project Digital Twin
        </span>
      </div>
      <OverviewButton className="absolute right-1/2 top-full flex translate-x-1/2 translate-y-2 items-center gap-2 whitespace-nowrap border text-lg font-semibold">
        <FilePieChart size={20} />
        Project Overview
      </OverviewButton>
      
      <Button
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
        className="ml-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
      <Link
        to="/"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost" size={"icon"}>
          <MoveLeftIcon size={24} className="size-6" />
        </Button>
      </Link>
      <Link
        to="/underground"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost" size={"icon"}>
          <MoveRightIcon size={24} className="size-6" />
        </Button>
      </Link>
    </div>
  );
}
