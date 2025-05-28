import { Card } from "@/components/card";
import { cn } from "@/lib/utils";

interface RightBarProps {
  sulfide: {
    rougher: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    scavenger: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner1: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner2: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner3: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    mill: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
  };
  oxyde: {
    rougher: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    scavenger: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner1: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner2: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    cleaner3: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
    mill: {
      cells: {
        level?: number | string;
        runningState?: string;
      }[];
    };
  };
}

const RightBar = ({ oxyde, sulfide }: RightBarProps) => {
  return (
    <div className="relative z-10 flex h-full w-[600px] flex-col gap-3">
      <Card className="flex h-full flex-col gap-1 !rounded px-4 py-3">
        <div className="flex w-full items-center">
          <div className="flex grow justify-center">Sulfide</div>
          <div className="flex grow justify-center">Oxyde</div>
        </div>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">Rougher</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{sulfide.rougher.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{sulfide.rougher.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{sulfide.rougher.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{sulfide.rougher.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{sulfide.rougher.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">{sulfide.rougher.cells[5].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 7</span>
              <span className="">{sulfide.rougher.cells[6].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[9].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.rougher.cells[10].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{oxyde.rougher.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{oxyde.rougher.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{oxyde.rougher.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{oxyde.rougher.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{oxyde.rougher.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">{oxyde.rougher.cells[5].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 7</span>
              <span className="">{oxyde.rougher.cells[6].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[9].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.rougher.cells[10].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">Scavenger</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{sulfide.scavenger.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{sulfide.scavenger.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className=""> {sulfide.scavenger.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{sulfide.scavenger.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{sulfide.scavenger.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">{sulfide.scavenger.cells[5].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.scavenger.cells[9].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{oxyde.scavenger.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{oxyde.scavenger.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{oxyde.scavenger.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{oxyde.scavenger.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{oxyde.scavenger.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">{oxyde.scavenger.cells[5].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.scavenger.cells[9].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">1st Cleaner</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{sulfide.cleaner1.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{sulfide.cleaner1.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{sulfide.cleaner1.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{sulfide.cleaner1.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{sulfide.cleaner1.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">{sulfide.cleaner1.cells[5].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner1.cells[9].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{oxyde.cleaner1.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{oxyde.cleaner1.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{oxyde.cleaner1.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{oxyde.cleaner1.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{oxyde.cleaner1.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner1.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">2nd Cleaner</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">2nd Cleaner</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{sulfide.cleaner2.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{sulfide.cleaner2.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{sulfide.cleaner2.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{sulfide.cleaner2.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">{sulfide.cleaner2.cells[4].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner2.cells[8].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{oxyde.cleaner2.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{oxyde.cleaner2.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{oxyde.cleaner2.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">{oxyde.cleaner2.cells[3].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[5].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[6].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner2.cells[7].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">3rd Cleaner</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{sulfide.cleaner3.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner3.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{sulfide.cleaner3.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner3.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">{sulfide.cleaner3.cells[2].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner3.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner3.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.cleaner3.cells[4].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">{oxyde.cleaner3.cells[0].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner3.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">{oxyde.cleaner3.cells[1].level}</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner3.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span
                className={cn(
                  "ml-auto mt-1 flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner3.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-2">C.Pump 2</span>
              <span
                className={cn(
                  "ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.cleaner3.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Regrind Mill</h1>
            <span
              className={cn(
                "ml-auto flex h-3 w-6 rounded-[2px]",
                oxyde.mill.cells[0].runningState === "True"
                  ? "bg-[#26E2B3]"
                  : "bg-[#FF0000]",
              )}
            ></span>
          </div>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-span-4">Cyclone Feed Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.mill.cells[0].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-4">Cyclone Feed Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.mill.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-4">Product Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  sulfide.mill.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-span-4">Mill Feed Pump 1</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.mill.cells[1].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-4">Mill Feed Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.mill.cells[2].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
              <span className="col-span-4">Product Pump 2</span>
              <span
                className={cn(
                  "col-start-6 ml-auto flex h-3 w-6 rounded-[2px]",
                  oxyde.mill.cells[3].runningState === "True"
                    ? "bg-[#26E2B3]"
                    : "bg-[#FF0000]",
                )}
              ></span>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default RightBar;
