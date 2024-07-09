import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { History, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { BarChart } from "./bar-chart";

interface HistoryDialogProps {
  title: string;
  telemetries: {
    name: string;
    serial: string;
    label?: string;
    color?: string;
  }[];
  interval?: number;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export const HistoryDialog = ({
  title,
  telemetries,
  interval,
}: HistoryDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="absolute -bottom-3 -right-2 z-[99] h-5 bg-transparent p-0 text-white hover:bg-transparent"
          onClick={() => setOpen(true)}
        >
          <History className="size-[1.1rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-fit min-w-[40rem] max-w-xl overflow-auto border-none text-white"
      >
        <DialogHeader>
          <DialogTitle>{title} History</DialogTitle>
          <DialogClose asChild>
            <Button className="absolute right-4 top-2 z-[99] h-5 bg-transparent p-0 text-white hover:bg-transparent">
              <XIcon className="size-5" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="h-96 w-full">
          <BarChart
            title={title}
            telemetries={telemetries}
            interval={interval}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
