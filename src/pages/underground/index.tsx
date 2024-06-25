import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import { useAppContext } from "@/Context";
import { DatePickerWithRange } from "@/components/calander";
import { TDateRange } from "@/utils";

function UndergroundBar() {
  const { dateRange, setDateRange } = useAppContext();

  return (
    <div className="h-up-bar group sticky top-0 z-10 flex w-[calc(10)] shrink-0 items-center gap-4 rounded-[0_0_24px_0] border-b border-r px-6 backdrop-blur">
      <Link to="/main-project">
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
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
    <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pb-6 pr-6">
      <UndergroundBar />
      <main className="pl-6">
        <Outlet />
      </main>
    </main>
  );
}
