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
  energy,
  power,
}: UpCardsProps) => {
  return (
    <div className="flex w-full gap-2">
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
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <RocketIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Cadence</span>
          <span className="text-lg font-bold text-[#FFC829]">{cadence}</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <CrushedIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Crushed ORE</span>
          <span className="text-lg font-bold text-[#FFC829]">{crushed} %</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <LevelIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Rom Stockpile Level</span>
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
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <SettingIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Crushed Ore Stockpile Level</span>
          <div className="flex w-full justify-between">
            <span className="text-lg font-bold text-[#FFC829]">
              {crushedOreMin} %
            </span>
            <span className="text-lg font-bold text-[#FFC829]">
              {crushedOreMax} %
            </span>
          </div>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <PlugIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Power (Kw)</span>
          <span className="text-lg font-bold text-[#FFC829]">{power}</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <ElectricIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Energy (kwh)</span>
          <span className="text-lg font-bold text-[#FFC829]">{energy}</span>
        </div>
      </Card>
    </div>
  );
};

export default UpCards;
