import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Minimize, MoveLeftIcon, Shrink } from "lucide-react";
import { useAppContext } from "@/Context";
import { DatePickerWithRange } from "@/components/calander";
import { TDateRange } from "@/utils";
import { cn } from "@/lib/utils";

function HseBar() {
  const { dateRange, setDateRange, setFullScreen, fullScreen } =
    useAppContext();
  const { pathname } = useLocation();

  const parentPath = pathname.split("/").slice(0, -1).join("/");
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-[calc(10)] shrink-0 items-center gap-2 rounded-[0_0_24px_0] border-b border-r px-4 backdrop-blur sm:px-6 md:gap-4">
      <Link
        to={parentPath || "/underground"}
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
        <img
          src="/logo.svg"
          alt="logo"
          className="border-r pr-4 max-sm:hidden"
        />
        <span className="py-3 text-lg font-bold">HSE</span>
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
        className="ml-auto opacity-0 transition-opacity duration-500 hover:opacity-100"
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
    </div>
  );
}

export default function HsePage() {
  return (
    <main
      className="h-fit min-h-full"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pr-6">
        <HseBar />
        <main className="pb-6 pl-6">
          <Outlet />
        </main>
      </main>
    </main>
  );
}
