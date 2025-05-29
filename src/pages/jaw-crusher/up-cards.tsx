import { Card } from "@/components/card";
import RocketIcon from "@/assets/rocket.svg?react";
import PlugIcon from "@/assets/plug.svg?react";
import ElectricIcon from "@/assets/electric.svg?react";
import SettingIcon from "@/assets/setting.svg?react";
import CrushedIcon from "@/assets/crushed.svg?react";
import LevelIcon from "@/assets/level.svg?react";

interface UpCardsProps {
  flowRateIn: string | number;
  flowRateOut: string | number;
  cadence: string | number;
  crushed: string | number;
  stockpileLevelMin: string | number;
  stockpileLevelMax: string | number;
  crushedOreMin: string | number;
  crushedOreMax: string | number;
  energy: string | number;
  power: string | number;
  jawCrusher: string | number;
  runingState: any;
}

const UpCards = ({
  flowRateIn,
  flowRateOut,
  cadence,
  crushed,
  stockpileLevelMin,
  stockpileLevelMax,
  crushedOreMin,
  crushedOreMax,
  jawCrusher,
  runingState
}: UpCardsProps) => {
  const runingHours = runingState
                ?.filter((ele: any) => ele.value)
                .reduce((acc: number, ele: any) => acc + ele.difTimeHourly, 0) || 
                0
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="grid w-full grid-cols-8 gap-2">
        <Card className="flex grow flex-col items-center gap-2 !rounded p-2">
          <span>Flow Rate (t/h)</span>
          <div className="flex w-full gap-3">
            <Card className="flex grow flex-col items-center justify-center !rounded py-1">
              <span>Input</span>
              <span className="text-lg font-bold text-[#FFC829]">
                {flowRateIn}
              </span>
            </Card>
            <Card className="flex grow flex-col items-center justify-center !rounded py-1">
              <span>Output</span>
              <span className="text-lg font-bold text-[#FFC829]">
                {flowRateOut}
              </span>
            </Card>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5">
          <RocketIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Throughput rate (t/h)</span>
            <span className="text-lg font-bold text-[#FFC829]">{
              runingHours === 0 ? 0 : Number(cadence) / runingHours 
              }</span>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5">
          <CrushedIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Crushed Ore (t)</span>
            <span className="text-lg font-bold text-[#FFC829]">{crushed}</span>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5">
          <LevelIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span className="text-wrap">Rom Stockpile Level (%)</span>
            <div className="flex w-full justify-between">
              <span className="text-lg font-bold text-[#FFC829]">
                {stockpileLevelMin}
              </span>
              <span className="text-lg font-bold text-[#FFC829]">
                {stockpileLevelMax}
              </span>
            </div>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5">
          <SettingIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Crushed Ore Stock Level (%)</span>
            <div className="flex w-full justify-between">
              <span className="text-lg font-bold text-[#FFC829]">
                {crushedOreMin}
              </span>
              <span className="text-lg font-bold text-[#FFC829]">
                {crushedOreMax}
              </span>
            </div>
          </div>
        </Card>
        <Card className="flex grow cursor-none items-center justify-center gap-5 !rounded px-5">
          <PlugIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Power (Kw)</span>
            <span className="text-lg font-bold text-[#FFC829]">##</span>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5 ">
          <ElectricIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Energy (kwh)</span>
            <span className="text-lg font-bold text-[#FFC829]">##</span>
          </div>
        </Card>
        <Card className="flex grow items-center justify-center gap-5 !rounded px-5">
          <ElectricIcon className="size-14 min-h-[3.5rem] min-w-[3.5rem]" />
          <div className="flex flex-col gap-1">
            <span>Jaw Crusher Level (%)</span>
            <span className="text-lg font-bold text-[#FFC829]">
              {jawCrusher}
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpCards;
