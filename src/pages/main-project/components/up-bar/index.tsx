import { Button } from "@/components/ui/button";
import { FilePieChart, MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { OverviewButton } from "../overview-button";

export function MainProjectUpBar() {
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-between gap-4 border-b px-6 backdrop-blur">
      <Link
        to="/"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <img src="/logo.svg" className="absolute left-24" alt="logo" />
      <div className="relative flex items-center gap-2 font-medium">
        <span className="h-full py-3 text-2xl">Tizert Mine</span>

        <OverviewButton className="absolute right-1/2 top-full flex translate-x-1/2 translate-y-2 items-center gap-2 whitespace-nowrap border text-lg font-semibold">
          <FilePieChart size={20} />
          Project Overview
        </OverviewButton>
      </div>
      <Link
        to="/underground"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}
