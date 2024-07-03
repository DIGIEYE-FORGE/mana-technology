import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { MoveLeft, MoveRight, XIcon } from "lucide-react";
import { useState } from "react";
import HseButton from "../hse-button";

const tabs = [
  {
    title: "timeline",
    subTabs: [
      {
        title: "master plant",
        image: "/timeline.svg",
      },
    ],
  },
  {
    title: "Progress",
    subTabs: [
      {
        title: "Performance Indicators",
        image: "/usins1.png",
      },
    ],
  },
  {
    title: "S-curve",
    subTabs: [
      {
        title: "project progress",
        image: "/progress.svg",
      },
    ],
  },
  {
    title: "planning",
    subTabs: [
      {
        title: "planning",
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
    title: "cost report",
    subTabs: [
      {
        title: "cost report",
        image: "/cost1.svg",
      },
      {
        title: "Earned Value Management",
        image: "/cost2.svg",
      },
    ],
  },
  {
    title: "ESG",
    subTabs: [
      {
        title: "hse",
        image: "",
      },
    ],
  },
];

interface ProjectPlaningButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

function ProjectPlaningButton({
  className,
  ...props
}: ProjectPlaningButtonProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("", className)} {...props} />
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
                "custom-button flex flex-1 justify-center rounded-lg py-2 text-xl font-bold uppercase transition-colors hover:brightness-125",
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
            backgroundImage: "url(/public/dashboard-frame.png)",
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
            <div className="mr-4 mt-5 flex w-[62%] items-center px-6">
              {activeSubTab > 0 && (
                <Button
                  variant={"ghost"}
                  onClick={() => setActiveSubTab(activeSubTab - 1)}
                >
                  <MoveLeft className="h-6 w-6" />
                </Button>
              )}
              {activeSubTab < tabs[activeTab].subTabs.length - 1 && (
                <Button
                  variant={"ghost"}
                  className="ml-auto"
                  onClick={() => setActiveSubTab(activeSubTab + 1)}
                >
                  <MoveRight className="h-6 w-6" />
                </Button>
              )}
            </div>
          </div>
          <div className="mb-8 ml-16 mr-8 h-1 flex-1">
            {tabs[activeTab].subTabs[activeSubTab].title === "hse" ? (
              <div className="h-full w-full">
                <HseButton />
              </div>
            ) : (
              <img
                src={tabs[activeTab].subTabs[activeSubTab].image}
                alt={tabs[activeTab].subTabs[activeSubTab].title}
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectPlaningButton;
