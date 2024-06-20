import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/Context";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "Tree", path: "/tree" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const { backendApi, refreshToken, setUser, setAccessToken, setRefreshToken } =
    useAppContext();

  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 divide-background rounded-[0_0_1rem_1rem] bg-[#0A59B7]/20 px-4 py-4 lg:px-6"
      style={{
        boxShadow: "inset 0 0 1rem 0px rgba(255,255,255,0.2)",
      }}
    >
      <div className="hidden border lg:inline-block">
        date range selector goes here
      </div>
      <div className="flex">
        {links.map((link) => (
          <Link
            key={link.path}
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
        <span className="hidden text-sm font-bold sm:inline-block">
          {" "}
          Logout
        </span>
      </Button>
      <span className="absolute bottom-0 left-0 h-6 w-8 rounded-[0_0_0_0.5rem] border-b-2 border-l-2 !border-white/75"></span>
      <span className="absolute bottom-0 right-0 h-6 w-8 rounded-[0_0_0.5rem_0] border-b-2 border-r-2 !border-white/75"></span>
    </nav>
  );
}
