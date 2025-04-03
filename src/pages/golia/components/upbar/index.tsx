import { Button } from "@/components/ui/button";
import { Minimize, MoveLeftIcon, MoveRightIcon, Shrink } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "@/Context";
import { toggleFullScreen } from "@/utils";

export function UpBar() {
  const { fullScreen, setFullScreen } = useAppContext();
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-6 backdrop-blur">
      <div className="mr-auto flex items-center gap-6">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 font-ethnocentric text-lg font-bold">
          Golia
        </span>
        <Link to="/future" className="hidden">
          <Button variant={"ghost"} className="gap-2">
            <span>Mine X.0</span>
          </Button>
        </Link>
      </div>

      <Button
        onClick={() => {
          toggleFullScreen().then((isFullScreen) => {
            if (isFullScreen !== undefined) setFullScreen(isFullScreen);
          });
        }}
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
      <Link to="/" className="duration-500">
        <Button variant="ghost" size={"icon"}>
          <MoveLeftIcon size={24} className="size-6" />
        </Button>
      </Link>
      <Link to="/underground" className="duration-500">
        <Button variant="ghost" size={"icon"}>
          <MoveRightIcon size={24} className="size-6" />
        </Button>
      </Link>
    </div>
  );
}
