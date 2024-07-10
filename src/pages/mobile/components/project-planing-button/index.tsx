import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    title: "timeline",
    subTabs: [
      {
        title: "",
        image: "/timeline.svg",
      },
    ],
  },
  {
    title: "Governance",
    subTabs: [
      {
        title: "Project Governance",
        image: "/siir.svg",
      },
    ],
  },
  {
    title: "Progress",
    subTabs: [
      {
        title: "",
        image: "/usins.png",
      },
    ],
  },
  {
    title: "S-curve",
    subTabs: [
      {
        title: "",
        image: "/Progress.png",
      },
    ],
  },
  {
    title: "planning",
    subTabs: [
      {
        title: "",
        image: "/planning1.svg",
      },
      {
        title: "planning",
        image: "/planning2.svg",
      },
    ],
  },
  {
    title: "risk",
    subTabs: [
      {
        title: "risk",
        image: "/risk.svg",
      },
      {
        title: "risk",
        image: "/schedule.svg",
      },
    ],
  },
  {
    title: "cost ",
    subTabs: [
      {
        title: "cost report",
        image: "/cost1.svg",
      },
      {
        title: "Earned Value",
        image: "/cost2.svg",
      },
    ],
  },
];

interface ProjectPlaningButtonProps extends ButtonProps {}

function ProjectPlaningButton({
  className,
  ...props
}: ProjectPlaningButtonProps) {
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
          <div className="relative mb-2 ml-3 mr-1 mt-6 flex h-1 flex-1 items-center justify-center sm:mb-2 sm:ml-4 sm:mr-4 sm:mt-7 md:ml-6 md:mr-6 lg:mb-8 lg:ml-16 lg:mr-8 2xl:mt-20">
            {activeSubTab > 0 && (
              <Button
                variant={"ghost"}
                className="absolute bottom-full right-[60%] size-4 lg:size-8 lg:-translate-y-2 2xl:size-10"
                size={"icon"}
                onClick={() => setActiveSubTab(activeSubTab - 1)}
              >
                <ChevronLeftIcon className="size-4 lg:size-6 2xl:size-8" />
              </Button>
            )}
            {activeSubTab < tabs[activeTab].subTabs.length - 1 && (
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setActiveSubTab(activeSubTab + 1)}
                className="absolute bottom-full right-[5%] size-4 lg:size-8 lg:-translate-y-2 2xl:size-10"
              >
                <ChevronRightIcon className="size-4 lg:size-6 2xl:size-8" />
              </Button>
            )}
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

export default ProjectPlaningButton;
