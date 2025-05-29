/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";

interface RightBarProps {
  conveyorRom: number | string;
  romBinWithdrawal: number | string;
  romStockpileAprf1: number | string;
  romStockpileAprf2: number | string;
  apronDischarge: number | string;
  grizzlyFeeder: number | string;
  diverterChute: number | string;
  crushedOreApronFeeder1: number | string;
  crushedOreApronFeeder2: number | string;
  crushedOreApronFeeder3: number | string;
  crushedDischargeConveyor: number | string;
  plantFeedConveyor: number | string;
  runingState?: any;
}

const RightBar = ({
  conveyorRom,
  romBinWithdrawal,
  romStockpileAprf1,
  romStockpileAprf2,
  apronDischarge,
  grizzlyFeeder,
  diverterChute,
  crushedOreApronFeeder1,
  crushedOreApronFeeder2,
  crushedOreApronFeeder3,
  plantFeedConveyor,
  runingState,
}: RightBarProps) => {
  return (
    <Card className="flex h-full w-[400px] flex-col gap-2 overflow-hidden !rounded px-4 py-3">
      {/* {JSON.stringify(runingState)} */}
      <div className="flex w-full items-center justify-between">
        <span className="text-lg font-semibold">Utilization</span>
        <span className="text-lg font-semibold">Running State</span>
      </div>
      <div className="h-1 flex-1 flex-col gap-2 space-y-2 overflow-auto px-1">
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crusher Discharge Conveyor</span>
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": conveyorRom == "True",
                "bg-[#FF5C5C]": conveyorRom == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6032-CV-1140"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6032-CV-1140"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>

        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Bin Withdrawal</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": romBinWithdrawal == "True",
                "bg-[#FF5C5C]": romBinWithdrawal == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6032-FD-1107"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6032-FD-1107"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Stockpile APRF 1</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": romStockpileAprf1 == "True",
                "bg-[#FF5C5C]": romStockpileAprf1 == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6028-FD-1021"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6028-FD-1021"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Stockpile APRF 2</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": romStockpileAprf2 == "True",
                "bg-[#FF5C5C]": romStockpileAprf2 == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6028-FD-1022"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6028-FD-1022"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Apron feeders discharge conveyor</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": apronDischarge == "True",
                "bg-[#FF5C5C]": apronDischarge == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6028-CV-1037"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6028-CV-1037"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Grizzly feeder</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": grizzlyFeeder == "True",
                "bg-[#FF5C5C]": grizzlyFeeder == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6032-FD-1120"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6032-FD-1120"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Diverter chute</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": diverterChute == "True",
                "bg-[#FF5C5C]": diverterChute != "True",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6026-ZA-1004"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6026-ZA-1004"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 1</span>
            {
              /* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */
              <span
                className={cn("flex h-3 w-6 rounded-xl", {
                  "bg-[#8AFF8A]": crushedOreApronFeeder1 == "True",
                  "bg-[#FF5C5C]": crushedOreApronFeeder1 == "False",
                })}
              ></span>
            }
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6120-FD-2021"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6120-FD-2021"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 2</span>
            {
              /* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */
              <span
                className={cn("flex h-3 w-6 rounded-xl", {
                  "bg-[#8AFF8A]": crushedOreApronFeeder2 == "True",
                  "bg-[#FF5C5C]": crushedOreApronFeeder2 == "False",
                })}
              ></span>
            }
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6120-FD-2022"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6120-FD-2022"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 3</span>
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": crushedOreApronFeeder3 == "True",
                "bg-[#FF5C5C]": crushedOreApronFeeder3 == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6120-FD-2023"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6120-FD-2023"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
        {/* <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crusher Discharge Conveyor Scale</span>
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": crushedDischargeConveyor == "True",
                "bg-[#FF5C5C]": crushedDischargeConveyor != "True",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6032-ZM-1142"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6032-ZM-1142"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card> */}
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Plant feed conveyor</span>
            {/* <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span> */}
            <span
              className={cn("flex h-3 w-6 rounded-xl", {
                "bg-[#8AFF8A]": plantFeedConveyor == "True",
                "bg-[#FF5C5C]": plantFeedConveyor == "False",
              })}
            ></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-[#BFC1FA]">
            <div
              className="h-full rounded-xl bg-[#62E3CA]"
              style={{
                width: `${
                  (runingState?.["count"]["s=6120-CV-2040"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>{
                  (runingState?.["count"]["s=6120-CV-2040"]
                    .filter((ele: any) => {
                      return ele == "True";
                    })
                    .reduce(
                      (acc: any, curr: any) => acc + curr.difTimeHourly,
                      0,
                    ) /
                    24) *
                    100 || 0
                }%</span>
          </div>
        </Card>
      </div>
    </Card>
  );
  1165;
};

export default RightBar;
