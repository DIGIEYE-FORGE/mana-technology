import { Card } from "@/components/card";

interface RightBarProps {}

const RightBar = ({}: RightBarProps) => {
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
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 7</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 7</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
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
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
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
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">2nd Cleaner</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 6</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">Rougher</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">2nd Cleaner</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 4</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 5</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
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
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-start-3">level</span>
              <span className="col-span-3 ml-auto">Running state</span>
              <span className="col-span-2">Cell 1</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 2</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">Cell 3</span>
              <span className="">100%</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>

              <span className="col-span-2 mt-1">C.Pump 1</span>
              <span className="ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto mt-1">T.Pump 1</span>
              <span className="col-start-6 ml-auto mt-1 flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2">C.Pump 2</span>
              <span className="ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-2 mx-auto">T.Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col !rounded px-2 py-1">
          <h1 className="font-semibold">Regrind Mill</h1>
          <div className="flex gap-2">
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-span-4">Cyclone Feed Pump 1</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-4">Cyclone Feed Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-4">Product Pump 1</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
            <div className="h-full w-[1px] bg-[#f5f5f579]"></div>
            <div className="grid grow grid-cols-6 gap-x-2 gap-y-1 text-xs">
              <span className="col-span-4">Mill Feed Pump 1</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-4">Mill Feed Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
              <span className="col-span-4">Product Pump 2</span>
              <span className="col-start-6 ml-auto flex h-3 w-6 rounded-[2px] bg-[#26E2B3]"></span>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default RightBar;
