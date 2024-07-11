import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { env } from "@/utils/env";
import { Link } from "react-router-dom";

interface VideoDialogProps {
  className?: string;
}
function VideoDialog({ className }: VideoDialogProps) {
  return (
    <Link to={"/video/timelapse.mp4"}>
      <Button
        className="flex h-full w-full gap-2 rounded-full"
        variant={"ghost"}
        size={"icon"}
      >
        <Play className="h-6 w-6 text-[#dbd520]" />
        <span className="xl:text-bas text-xs lg:text-sm">Timelapse</span>
      </Button>
    </Link>
    // <div>
    //   <Dialog>
    //     <DialogTrigger asChild>
    //       <Button
    //         className="flex h-full w-full gap-2 rounded-full"
    //         variant={"ghost"}
    //         size={"icon"}
    //       >
    //         <Play className="h-6 w-6 text-[#dbd520]" />
    //         <span className="xl:text-bas text-xs lg:text-sm">Timelapse</span>
    //       </Button>
    //     </DialogTrigger>
    //     <DialogContent
    //       showCloseButton={false}
    //       className={cn(
    //         `h-[90%] !min-w-[90vw] overflow-hidden rounded-lg border-none p-8 text-white`,
    //         className,
    //       )}
    //     >
    //       <video
    //         autoPlay
    //         className="h-[97%] w-full object-contain"
    //         controls
    //         src={
    //           `${env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
    //           "timelapse.mp4"
    //         }
    //       ></video>
    //       <DialogClose asChild>
    //         <Button
    //           size={"icon"}
    //           className={cn(
    //             "absolute right-1 top-1 rounded-full bg-black/20 text-white",
    //           )}
    //         >
    //           <XIcon className="h-6 w-6" />
    //         </Button>
    //       </DialogClose>
    //     </DialogContent>
    //   </Dialog>
    // </div>
  );
}

export default VideoDialog;
