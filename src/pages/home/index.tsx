import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";
import { DatePickerWithRange } from "@/components/calander";
import { useAppContext } from "@/Context";
import { TDateRange } from "@/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, MoveRightIcon } from "lucide-react";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/op-sud",
    name: "op sud",
  },
  {
    path: "/op",
    name: "op",
  },
  {
    path: "/op-sud2",
    name: "op sud 2",
  },
  {
    path: "/op-sud4",
    name: "op sud 4",
  },
];

function HomeUpBar() {
  const { dateRange, setDateRange } = useAppContext();
  const { pathname } = useLocation();
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
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="gap- ml-auto w-28 justify-between">
            <span className="font-semibold capitalize">
              {links.find((link) => link.path === pathname)?.name || "home"}
            </span>
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="dark flex w-44 flex-col bg-card/10 backdrop-blur">
          {links.map((link, i) => (
            <Link key={i} to={link.path} className="block w-full">
              <Button variant="ghost" className="w-full justify-between">
                <span className="font-semibold capitalize">{link.name}</span>
                <span className="w-6 justify-center">
                  {link.path === pathname && <Check />}
                </span>
              </Button>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
      <Link to="/main-project">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pb-6 pl-6">
      <HomeUpBar />
      <main className="pr-6">
        <Outlet />
        {/*  */}
      </main>
    </main>
  );
}
