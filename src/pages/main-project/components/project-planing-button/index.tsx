import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { MoveLeft, MoveRight, XIcon } from "lucide-react";
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
        image: "/Progress.png",
      },
    ],
  },
  {
    title: "S-curve",
    subTabs: [
      {
        title: "",
        image: "/curve.png",
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
        <Button className={cn("", className)} {...props}></Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max dark bottom-0 top-[4rem] flex w-[100%] max-w-none translate-y-0 flex-col rounded-none border-none bg-card/10 p-4 text-foreground backdrop-blur-xl"
        overlayClassName="bg-transparent"
      >
        <div className="mx-auto flex w-full max-w-[1920px] gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={cn(
                "custom-button flex flex-1 justify-center rounded-lg py-2 text-lg  uppercase transition-colors hover:brightness-125",
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
                "custom-button flex select-none justify-center rounded-lg bg-[#3A3D3F]/75 px-6 py-2 text-xl font-bold uppercase transition-colors hover:brightness-105",
              )}
            >
              <XIcon className="h-6 w-6" />
            </button>
          </DialogClose>
        </div>
        <div
          className="mx-auto flex h-1 max-h-[920px] w-full max-w-[1920px] flex-1 flex-col gap-4"
          style={{
            backgroundImage: "url(/dashboard-frame.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex h-20 justify-between">
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
          <div className="mb-8 ml-16 mr-8 flex h-1 flex-1 justify-center">
            <img
              src={tabs[activeTab].subTabs[activeSubTab].image}
              alt={tabs[activeTab].subTabs[activeSubTab].title}
              className="h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectPlaningButton;
