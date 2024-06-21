import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/Context";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { DatePickerWithRange } from "../calander";
import { TDateRange } from "@/utils";
const links = [
  { name: "Home", path: "/" },
  { name: "Tree", path: "/tree" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const {
    backendApi,
    refreshToken,
    setUser,
    setAccessToken,
    setRefreshToken,
    dateRange,
    setDateRange,
  } = useAppContext();

  const { pathname } = useLocation();
  return (
    <nav
      className="sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 border border-primary px-4 py-4 lg:px-6"
      style={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        borderTop: "none",
      }}
    >
      <DatePickerWithRange
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
      <div className="flex">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={cn(
              "rounded-xl px-3 py-1.5 text-foreground transition-colors hover:bg-foreground/5 active:bg-foreground/10 lg:px-4",
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
        <span className="hidden text-sm font-bold sm:inline-block">Logout</span>
      </Button>
    </nav>
  );
}
