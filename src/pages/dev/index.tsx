import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

declare global {
  interface Window {
    embedpano: (options: any) => void;
  }
}

export default function Projection360Page() {
  return (
    <div
      id="krpanoContainer"
      className="h-full max-h-[100dvh] w-full overflow-hidden"
    >
      <Dialog>
        <DialogTrigger>Open 360 Projection</DialogTrigger>
        {/* <DialogClose className="absolute right-2 top-2 z-10">
          <button className="rounded bg-gray-800 p-2 text-white">Close</button>
        </DialogClose> */}
        <DialogContent className="debug w-full p-0">
          <div className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, ducimus, animi consequatur maiores, totam beatae
            corrupti hic iusto voluptatem asperiores exercitationem provident?
            Laudantium debitis corrupti, unde consectetur est ipsam ad.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
