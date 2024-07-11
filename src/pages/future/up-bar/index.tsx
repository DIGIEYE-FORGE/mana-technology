import { Button } from "@/components/ui/button";
import { useAppContext } from "@/Context";
import { QrCodeDialog } from "@/pages/main-project/components/qr-code-modal";
import { Minimize, MoveLeftIcon, Shrink } from "lucide-react";
import { Link } from "react-router-dom";
import { InfoButton } from "../info";

function UpBarFuturePage() {
  const { fullScreen, setFullScreen } = useAppContext();
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-6 backdrop-blur">
      <div className="mr-auto flex gap-4">
        <img src="/logo.svg" alt="logo" />
        <span className="h-3/4 border-l py-3 pl-4 font-ethnocentric text-lg font-bold">
          Tizert Mine X.0
        </span>
      </div>
      <InfoButton variant={"ghost"} className="gap-2">
        Digital Twin
      </InfoButton>
      <QrCodeDialog />
      <Button
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
      <Link to="/main-project" className="duration-500">
        <Button variant="ghost" size={"icon"}>
          <MoveLeftIcon
            size={24}
            className="size-6"
            style={{
              transform: "rotate(90deg)",
            }}
          />
        </Button>
      </Link>
    </div>
  );
}

export default UpBarFuturePage;
