import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

interface OverviewButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function OverviewButton({ className, ...props }: OverviewButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "rounded-lg bg-white/10 px-3 py-1.5 text-primary active:bg-white/20",
            className,
          )}
          {...props}
        />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max dark bottom-0 top-[4rem] flex w-[100%] max-w-none translate-y-0 flex-col rounded-none border-none bg-card/10 p-4 text-foreground backdrop-blur-xl"
        overlayClassName="bg-transparent"
      >
        <div className="relative mx-auto flex w-full max-w-[1920px] gap-2">
          <DialogClose>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="absolute right-2 top-2"
            >
              <XIcon size={20} />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
