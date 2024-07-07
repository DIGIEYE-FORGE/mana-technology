import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function VideoDialog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="flex h-full w-full gap-2 rounded-full"
            variant={"ghost"}
            size={"icon"}
          >
            <Play className="h-6 w-6 text-[#dbd520]" />
            <span>Timelapse</span>
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="h-[90%] !min-w-[90vw] p-8"
        >
          <video
          autoPlay
            className="h-full w-full"
            controls
            src="/ignore/3dvideo.mp4"
          ></video>
          <DialogClose asChild>
            <Button
              size={"icon"}
              className={cn(
                "absolute right-1 top-1 rounded-full bg-black/20 text-white",
              )}
            >
              <XIcon className="h-6 w-6" />
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default VideoDialog;
