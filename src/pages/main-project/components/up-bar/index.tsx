import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function MainProjectUpBar() {
  return (
    <div
      style={{
        backgroundImage: "url(/main-project-upbar.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "500% 100%",
      }}
      className="sticky top-0 z-10 flex h-[5rem] w-full shrink-0 backdrop-blur"
    >
      <div className="group relative flex h-[60%] w-full shrink-0 items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <Button variant="ghost">
            <MoveLeftIcon className="size-6" />
          </Button>
        </Link>
        <div className="relative top-3 text-2xl font-medium">
          Tizert Mine Project Overview
        </div>
        <Link
          to="/underground"
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <Button variant="ghost">
            <MoveRightIcon className="size-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
