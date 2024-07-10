import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { MoveLeft, MoveRight, XIcon } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    title: "ESG Commitment",
    subTabs: [
      {
        image: "/esgcom.svg",
        title: "ESG Commitment",
      },
    ],
  },
  {
    title: "Permitting",
    subTabs: [
      {
        image: "/Onsite.svg",
        title: "On Site - Initial Situation",
      },
      {
        image: "/Onsite2.svg",
        title: "On Site - Exploration Phase",
      },
      {
        image: "/Onsite3.svg",
        title: "On Site - Operations Phase",
      },
      {
        image: "/Onsite4.svg",
        title: "On Site - Operation  Phase",
      },
      {
        image: "/offsite.svg",
        title: "Off Site",
      },
    ],
  },

  {
    title: "Actions",
    subTabs: [
      {
        title: "Actions",
        image: "/action.png",
      },
    ],
  },
  {
    title: "Operations readiness",
    subTabs: [
      {
        image: "/readiness.svg",
        title: "Commitment to excellence and growth",
      },
    ],
  },
];

interface EsgButtonProps extends ButtonProps {}

export function EsgButton({ className, ...props }: EsgButtonProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("", className)} {...props}></Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="dark bottom-0 top-[4rem] z-[102] flex w-[100%] max-w-none translate-y-0 flex-col rounded-none border-none bg-card/10 p-4 text-foreground backdrop-blur-xl"
        overlayClassName="bg-transparent"
      >
        <div className="hide-scrollbar relative mx-auto flex w-full max-w-[1920px] gap-2 overflow-x-auto">
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
          className="relative mx-auto flex h-1 max-h-[16rem] w-full max-w-[1920px] flex-1 flex-col gap-4 2xl:max-h-[920px]"
          style={{
            backgroundImage: "url(/dashboard-frame.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="hidden h-20 justify-between lg:flex">
            <div className="mb-5 ml-16 flex items-center">
              <span className="text-2xl font-bold first-letter:uppercase">
                {tabs[activeTab].subTabs[activeSubTab].title}
              </span>
            </div>
            <div className="mr-4 mt-5 flex w-[62%] items-center justify-end gap-4 px-6">
              {activeSubTab > 0 && (
                <Button
                  variant={"ghost"}
                  className="mr-auto"
                  size={"icon"}
                  onClick={() => setActiveSubTab(activeSubTab - 1)}
                >
                  <MoveLeft className="h-6 w-6" />
                </Button>
              )}
              {activeSubTab < tabs[activeTab].subTabs.length - 1 && (
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => setActiveSubTab(activeSubTab + 1)}
                >
                  <MoveRight className="h-6 w-6" />
                </Button>
              )}
            </div>
          </div>
          <div className="relative ml-3 mr-1 mt-8 h-1 flex-1 sm:ml-4 sm:mr-4 sm:mt-10 md:ml-6 md:mr-6 lg:mb-8 lg:ml-16 lg:mr-8 lg:mt-20">
            {activeSubTab > 0 && (
              <Button
                variant={"ghost"}
                className="absolute bottom-full right-1/2 translate-y-1/2 lg:hidden"
                size={"icon"}
                onClick={() => setActiveSubTab(activeSubTab - 1)}
              >
                <MoveLeft className="size-4" />
              </Button>
            )}
            {activeSubTab < tabs[activeTab].subTabs.length - 1 && (
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setActiveSubTab(activeSubTab + 1)}
                className="absolute bottom-full right-0 translate-y-1/2 lg:hidden"
              >
                <MoveRight className="size-4" />
              </Button>
            )}

            <img
              src={tabs[activeTab].subTabs[activeSubTab].image}
              alt={tabs[activeTab].subTabs[activeSubTab].title}
              className="h-full w-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
