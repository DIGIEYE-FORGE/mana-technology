import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/Context";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { DatePickerWithRange } from "../calander";
import React from "react";
import { DateRange } from "react-day-picker";
const links = [
  { name: "Home", path: "/" },
  { name: "Tree", path: "/tree" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const { backendApi, refreshToken, setUser, setAccessToken, setRefreshToken } =
    useAppContext();

  const { pathname } = useLocation();
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  return (
    <nav className="sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 divide-background px-4 py-4 lg:px-6">
      <div className="hidden border lg:inline-block">
        <DatePickerWithRange
          className="w-full"
          date={date}
          onChange={(date) => {
            setDate(date as DateRange);
          }}
        />
      </div>
      <div className="flex">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "rounded px-3 py-2 text-foreground transition-colors hover:bg-foreground/5 active:bg-foreground/10 lg:px-4",
              pathname === link.path && "font-bold text-primary",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => {
          backendApi.signOut(refreshToken).then(() => {
            setUser(null);
            setAccessToken("");
            setRefreshToken("");
          });
        }}
      >
        <LogOut size={20} />
        <span className="hidden text-sm font-bold sm:inline-block">
          {" "}
          Logout
        </span>
      </Button>
    </nav>
  );
}
