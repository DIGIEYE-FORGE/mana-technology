import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import { useAppContext } from "@/Context";
import { DatePickerWithRange } from "@/components/calander";
import { TDateRange } from "@/utils";
import { cn } from "@/lib/utils";

function UndergroundBar() {
  const { dateRange, setDateRange } = useAppContext();
  const { pathname } = useLocation();

  const parentPath = pathname.split("/").slice(0, -1).join("/");

  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-[calc(10)] shrink-0 items-center gap-4 rounded-[0_0_24px_0] border-b border-r px-6 backdrop-blur">
      <Link
        to={parentPath || "/main-project"}
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost">
          <MoveLeftIcon
            size={24}
            className={cn("transition-transform duration-500", {
              "rotate-90": parentPath,
            })}
          />
        </Button>
      </Link>
      <DatePickerWithRange
        className="hidden lg:block"
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
    </div>
  );
}

export default function MainProjectPage() {
  return (
    <main
      className="h-fit"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pr-6">
        <UndergroundBar />
        <main className="pb-6 pl-6">
          <Outlet />
        </main>
      </main>
    </main>
  );
}
