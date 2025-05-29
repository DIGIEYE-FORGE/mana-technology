// import { DatePickerWithRange } from "@/components/calander";
import { Button } from "@/components/ui/button";

import { MoveRightIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "@/Context";
import { TDateRange } from "@/utils";
import { DatePickerWithRange } from "@/components/calander";

const UpBar = () => {
  const { dateRange, setDateRange } = useAppContext();
  const { pathname } = useLocation();
  const parentPath = pathname.split("/").slice(0, -1).join("/");
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-6 backdrop-blur">
      <div className="flex gap-4 pr-2">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 text-xl font-bold">
          {}
          {parentPath
            ? pathname.split("/").at(-1) === "tree"
              ? "Development Cycle"
              : "VOD"
            : "Pebble crusher"}
        </span>
      </div>
      <DatePickerWithRange
        className="mr-auto hidden lg:block"
        date={dateRange}
        onChange={(date) => {
          setDateRange(date as TDateRange);
        }}
      />
      {/* <Button
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
 */}
      <Link to="/main-project">
        <Button variant="ghost" size={"icon"}>
          <MoveRightIcon size={24} className="size-6" />
        </Button>
      </Link>
    </div>
  );
};

export default UpBar;
