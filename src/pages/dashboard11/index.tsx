import { Button } from "@/components/ui/button";
import { Minimize, MoveUpIcon, Shrink } from "lucide-react";
import { useAppContext } from "@/Context";
import Dashboard from "./dashboard";
import { DatePickerWithRange } from "@/components/calander";
import { TDateRange } from "@/utils";
import { Link } from "react-router-dom";

export function UpBar() {
  const { fullScreen, setFullScreen, dateRange, setDateRange } =
    useAppContext();
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-start gap-2 border-b px-6 backdrop-blur">
      <div className="flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 font-ethnocentric text-lg font-bold">
          CAT R1700_01 overview
        </span>
      </div>
      <DatePickerWithRange
        className="hidden lg:block"
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
      <Link to="/underground/tree" className="ml-auto">
        <Button size="icon" variant="ghost">
          <MoveUpIcon size={24} className="size-6" />
        </Button>
      </Link>
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
