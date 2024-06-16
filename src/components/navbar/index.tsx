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
    <nav className="sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 divide-background px-6 py-4">
      <div className="border">date range selector goes here</div>
      <div className="flex">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "rounded px-4 py-2 text-foreground transition-colors hover:bg-foreground/5 active:bg-foreground/10",
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
        <span className="text-sm font-bold"> Logout</span>
      </Button>
    </nav>
  );
}
