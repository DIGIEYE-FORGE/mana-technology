import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function VideoDialog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="absolute bottom-[12%] left-[50.5%] right-[0.5%] top-[79%]"></button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="h-[90%] !min-w-[90vw] p-8"
        >
          <video
            className="h-full w-full"
            controls
            src="https://www.youtube.com/watch?v=8JXvqWQ3tZo"
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
