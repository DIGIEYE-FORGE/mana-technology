import { Card } from "@/components/card";

interface RightBarProps {
  conveyorRom: number;
  romBinWithdrawal: number;
  romStockpileAprf1: number;
  romStockpileAprf2: number;
  apronDischarge: number;
  grizzlyFeeder: number;
  diverterChute: number;
  crushedOreApronFeeder1: number;
  crushedOreApronFeeder2: number;
  crushedOreApronFeeder3: number;
  crushedDischargeConveyor: number;
  plantFeedConveyor: number;
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
  crushedDischargeConveyor,
  plantFeedConveyor,
}: RightBarProps) => {
  return (
    <div className="relative z-10 flex h-full w-[400px] shrink-0 flex-col gap-3">
      <Card className="flex flex-col gap-1 !rounded px-4 py-3">
        <h1 className="text-lg font-semibold">Running State</h1>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Convoyer Rom</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${conveyorRom}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Bin Withdrawal</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${romBinWithdrawal}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Stockpile APRF 1</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${romStockpileAprf1}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>ROM Stockpile APRF 2</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${romStockpileAprf2}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Apron feeders discharge conveyor</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${apronDischarge}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Grizzly feeder</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${grizzlyFeeder}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Diverter chute</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${diverterChute}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 1</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${crushedOreApronFeeder1}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 2</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${crushedOreApronFeeder2}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed Ore Apron feeder 3</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${crushedOreApronFeeder3}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Crushed discharge conveyor</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${crushedDischargeConveyor}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
        <Card className="flex flex-col gap-1 !rounded px-2 py-1">
          <div className="flex items-center justify-between text-sm">
            <span>Plant feed conveyor</span>
            <span className="flex h-3 w-6 rounded-xl bg-[#8AFF8A]"></span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-xl bg-white">
            <div
              className="h-full rounded-xl bg-[#9799F8]"
              style={{ width: `${plantFeedConveyor}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default RightBar;
