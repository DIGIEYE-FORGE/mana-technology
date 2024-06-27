import { Link } from "react-router-dom";
import HomeDashboard from "./dashboard";
import Logo from "@/assets/logo.svg?react";
import { DatePickerWithRange } from "@/components/calander";
import { useAppContext } from "@/Context";
import { TDateRange } from "@/utils";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";

function HomeUpBar() {
  const { dateRange, setDateRange } = useAppContext();
  return (
    <div className="group sticky left-6 top-0 z-10 flex h-up-bar w-[calc(10)] shrink-0 items-center gap-4 rounded-[0_0_0_24px] border-b border-l px-6 backdrop-blur">
      <Link to="/">
        <Logo className="h-7 w-40" />
      </Link>
      <DatePickerWithRange
        className="hidden lg:block"
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
      <Link to="/main-project" className="ml-auto">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function HomePage() {
  return <HomeDashboard />;
}
