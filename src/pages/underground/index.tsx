import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Minimize, MoveLeftIcon, MoveRightIcon, Shrink } from "lucide-react";
import { useAppContext } from "@/Context";
import { DatePickerWithRange } from "@/components/calander";
import { TDateRange } from "@/utils";
import { cn } from "@/lib/utils";

function UndergroundBar() {
  const { fullScreen, setFullScreen, dateRange, setDateRange } =
    useAppContext();
  const { pathname } = useLocation();
  const parentPath = pathname.split("/").slice(0, -1).join("/");
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-between gap-2 border-b px-6 backdrop-blur md:gap-4">
      <Link
        to={parentPath || "/main-project"}
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost" size={"icon"}>
          <MoveLeftIcon
            size={24}
            className={cn("transition-transform duration-500", {
              "rotate-90": parentPath,
            })}
          />
        </Button>
      </Link>
      <div className="flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 text-xl font-bold">
          Underground
        </span>
      </div>
      <DatePickerWithRange
        className="hidden lg:block"
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
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
        to="/hse"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost" size={"icon"}>
          <MoveRightIcon size={24} className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function UnderGroundPage() {
  return (
    <main
      className="h-fit min-h-full"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-6">
        <UndergroundBar />
        <main className="px-6 pb-6">
          <Outlet />
        </main>
      </main>
    </main>
  );
}
