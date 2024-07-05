import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Video, XIcon } from "lucide-react";
function ModelVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={"icon"}
          className="rounded-full text-[#FEC828]"
        >
          <Video />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="aspect-video max-w-6xl rounded-3xl border-none p-0"
      >
        <DialogClose asChild>
          <Button
            className="absolute right-2 top-2 z-10 text-foreground opacity-50"
            size={"icon"}
            variant={"ghost"}
          >
            <XIcon />
          </Button>
        </DialogClose>
        <video
          src="/video_01.mp4"
          className="aspect-video w-full rounded-lg object-contain"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </DialogContent>
    </Dialog>
  );
}

export default ModelVideo;
