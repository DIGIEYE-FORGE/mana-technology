import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/Context";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { backendApi, refreshToken, setUser, setAccessToken, setRefreshToken } =
    useAppContext();
  return (
    <nav className="mx-auto flex items-center justify-between gap-6 divide-background px-6 py-4">
      <div className="border">date range selector here</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="tree">Tree</Link>
        <Link to="dashboard">Dashboard</Link>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          backendApi.signOut(refreshToken).then(() => {
            setUser(null);
            setAccessToken("");
            setRefreshToken("");
          });
        }}
      >
        <LogOut />
        <span className="text-sm font-bold"> Logout</span>
      </Button>
    </nav>
  );
}
