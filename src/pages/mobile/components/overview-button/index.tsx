import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    title: "Project Evolution",
    subTabs: [
      {
        title: "",
        image: "/history.svg",
      },
    ],
  },
  {
    title: "Tizert Geology",
    subTabs: [
      {
        title: "",
        image: "/geology.svg",
      },
    ],
  },
  {
    title: "Reserve evolution",
    subTabs: [
      {
        title: "",
        image: "/evolution.svg",
      },
    ],
  },
  {
    title: "Keys Metrics",
    subTabs: [
      {
        title: "Project Design",
        image: "/keys.png",
      },
    ],
  },
  {
    title: "Eco-responsible",
    subTabs: [
      {
        title: "",
        image: "/eco.svg",
      },
    ],
  },
];

interface OverviewButtonProps extends ButtonProps {}

export function OverviewButton({ className, ...props }: OverviewButtonProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("", className)} {...props} />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max over dark bottom-0 top-[4rem] z-[102] flex w-[100%] max-w-none translate-y-0 flex-col gap-2 rounded-none border-none bg-card/10 p-4 text-foreground backdrop-blur-xl lg:gap-4"
        overlayClassName="bg-transparent"
      >
        <div className="hide-scrollbar relative mx-auto flex w-full max-w-[1920px] shrink-0 gap-2 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={cn(
                "custom-button flex flex-1 items-center justify-center whitespace-nowrap rounded-lg px-2 py-2 text-xs uppercase transition-colors hover:brightness-125 sm:text-sm md:text-base lg:text-lg",
                {
                  "bg-[#00A3FF]/50 hover:brightness-110": activeTab === index,
                },
              )}
              onClick={() => {
                setActiveTab(index);
                setActiveSubTab(0);
              }}
            >
              {tab.title}
            </button>
          ))}
          <DialogClose asChild>
            <button
              className={cn(
                "custom-button hidden select-none justify-center rounded-lg bg-[#3A3D3F]/75 px-6 py-2 text-xl font-bold uppercase transition-colors hover:brightness-105 lg:flex",
              )}
            >
              <XIcon className="size-4 md:size-5 lg:size-6" />
            </button>
          </DialogClose>
        </div>
        <div
          className="max-h relative mx-auto flex aspect-video max-h-[calc(100%-2rem)] w-full max-w-[1920px] flex-col gap-4"
          style={{
            backgroundImage: "url(/dashboard-frame.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mb-2 ml-3 mr-1 mt-5 flex h-1 flex-1 items-center justify-center sm:mb-2 sm:ml-4 sm:mr-4 sm:mt-6 md:ml-6 md:mr-6 lg:mb-8 lg:ml-16 lg:mr-8 2xl:mt-20">
            <img
              src={tabs[activeTab].subTabs[activeSubTab].image}
              alt={tabs[activeTab].subTabs[activeSubTab].title}
              className="h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
