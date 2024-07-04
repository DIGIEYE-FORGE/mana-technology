import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Video } from "lucide-react";
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
      <DialogContent className="h-[60%] w-[1000px] max-w-full">
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
