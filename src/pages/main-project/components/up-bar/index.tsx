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
      <div className="absolute left-24 flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 text-2xl">Tizert Mine</span>
      </div>
      <OverviewButton className="absolute right-1/2 top-full flex translate-x-1/2 translate-y-2 items-center gap-2 whitespace-nowrap border text-lg font-semibold">
        <FilePieChart size={20} />
        Project Overview
      </OverviewButton>
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
