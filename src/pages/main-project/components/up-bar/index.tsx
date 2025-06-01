import { Button } from "@/components/ui/button";
import { Minimize, MoveLeftIcon, MoveRightIcon, Shrink } from "lucide-react";
import { Link } from "react-router-dom";
import { OverviewButton } from "../overview-button";
import ProjectPlaningButton from "../project-planing-button";
import { EsgButton } from "../esg-button";
import { useAppContext } from "@/Context";
import { QrCodeDialog } from "../qr-code-modal";
import { toggleFullScreen } from "@/utils";

export function MainProjectUpBar() {
  const { fullScreen, setFullScreen } = useAppContext();
  return (
    <div className="debug group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-6 backdrop-blur">
      <div className="mr-auto flex items-center gap-6">
        <img src="/logo.svg" alt="logo" />
        {/* //// TODO  update with logo svg     */}
        <img src="/logo_v2.png" alt="logo" className="h-[2rem]" />
        <span className="h-3/4 border-l py-3 pl-4 font-ethnocentric text-lg font-bold">
          Tizert Project Digital Twin
        </span>
        <Link to="/future">
          <Button variant={"ghost"} className="gap-2">
            <span>Mine X.0</span>
          </Button>
        </Link>
      </div>

      <OverviewButton variant={"ghost"} className="gap-2">
        Project Overview
      </OverviewButton>
      <ProjectPlaningButton variant={"ghost"} className="gap-2">
        <span>Project Planning</span>
      </ProjectPlaningButton>
      <EsgButton variant={"ghost"} className="gap-2">
        <span>ESG</span>
      </EsgButton>
      <QrCodeDialog />
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
