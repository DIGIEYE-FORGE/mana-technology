import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";

export const QrCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <QrCode />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="rounded-lg border-none p-6 text-white"
      >
        <img src="/mobile-qr-code.svg" alt="qr-code" className="rounded-lg" />
        <div className="px-3 pb-3">
          <DialogClose className="h-10 w-full rounded-lg bg-primary px-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
            Cancel
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
