import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function TizertVideo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-black">
      <div className="absolute left-0 top-2 z-[999] flex h-10 w-full items-center justify-between px-4">
        <Button
          size={"icon"}
          className="rounded-full bg-black/20 text-white"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>
      <video
        autoPlay
        className="h-full w-full object-contain"
        controls
        src={
          `${import.meta.env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
          "timelapse.mp4"
        }
      ></video>
    </div>
  );
}

export default TizertVideo;
