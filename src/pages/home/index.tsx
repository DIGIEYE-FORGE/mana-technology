import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";
import { DatePickerWithRange } from "@/components/calander";
import { useAppContext } from "@/Context";
import { TDateRange } from "@/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, MoveRightIcon } from "lucide-react";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

type Route = {
  name: string;
  path: string;
  children?: Route[];
};

const routes = [
  {
    name: "Open Pit",
    path: "/",
    children: [
      {
      name: "Fosse Est",
      path: "/op-est",
      children: [
        {
          name: "Est 11",
          path: "/op-est11",
        },
      ],
    },
    {
      name: "Fosse Sud",
      path: "/op-sud",
      children: [
        {
          name: "SUD 2",
          path: "/op-sud2",
        },
        {
          name: "SUD 4",
          path: "/op-sud4",
        },
    ],
  },],},
];

const links = routes.flatMap((route) => {
  return [
    {
      name: route.name,
      path: route.path,
    },
    ...(route.children || []),
  ];
});

export const RoutLink = ({
  route,
  index = 0,
}: {
  route: Route;
  index?: number;
}) => {
  const { pathname } = useLocation();
  return (
    <>
      <Link to={route.path} className="block w-full">
        <Button
          variant="ghost"
          className="w-full justify-between"
          style={{ paddingLeft: `${index * 1 + 0.5}rem` }}
        >
          <span className="font-semibold capitalize">{route.name}</span>
          <span className="w-6 justify-center">
            {route.path === pathname && <Check size={20} />}
          </span>
        </Button>
      </Link>
      {route.children?.map((child, i) => (
        <RoutLink key={i} route={child} index={index + 1} />
      ))}
    </>
  );
};

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
          <Button variant="ghost" className="gap- ml-auto w-36 justify-between">
            <span className="font-semibold capitalize">
              {links.find((link) => link.path === pathname)?.name || "home"}
            </span>
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="dark flex w-48 flex-col bg-card/10 backdrop-blur">
          {routes.map((route, i) => (
            <RoutLink key={i} route={route} />
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
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      redirect("/est11", {});
    }
  }, []);
  return (
    <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pb-6 pl-6">
      <HomeUpBar />
      <main className="pr-6">
        <Outlet />
      </main>
    </main>
  );
}
