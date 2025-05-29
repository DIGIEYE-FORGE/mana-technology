import { Card } from "@/components/card";
import RocketIcon from "@/assets/rocket.svg?react";
import PlugIcon from "@/assets/plug.svg?react";
import ElectricIcon from "@/assets/electric.svg?react";
import SettingIcon from "@/assets/setting.svg?react";

interface UpCardsProps {
  flowRate: string | number;
  energy: string | number;
  utilization: string | number;
  bounce1: string | number;
  bounce2: string | number;
  bounce3: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const UpCards = ({
  flowRate,
  energy,
  utilization,
  bounce1,
  bounce2,
  bounce3,
}: UpCardsProps) => {
  return (
    <div className="flex w-full gap-2">
      <Card className="flex grow flex-col items-center gap-2 !rounded p-2">
        <span>Flow Rate (t/h)</span>
        <div className="flex w-full gap-3">
          <Card className="flex grow flex-col items-center justify-center !rounded py-1">
            <span>Input</span>
            <span className="text-lg font-bold text-[#FFC829]">{flowRate}</span>
          </Card>
          <Card className="flex grow flex-col items-center justify-center !rounded py-1">
            <span>Output</span>
            <span className="text-lg font-bold text-[#FFC829]">{flowRate}</span>
          </Card>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <RocketIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Speed (tr/min)</span>
          <span className="text-lg font-bold text-[#FFC829]">xx</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <PlugIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Power (Kw)</span>
          <span className="text-lg font-bold text-[#FFC829]">xx</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <ElectricIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Energy (kwh)</span>
          <span className="text-lg font-bold text-[#FFC829]">{energy}</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <SettingIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Utilization (%)</span>
          <span className="text-lg font-bold text-[#FFC829]">
            {utilization}
          </span>
        </div>
      </Card>
      <Card className="flex grow flex-col items-center gap-2 !rounded p-2">
        <span>Adjustment Ring Bounce</span>
        <div className="flex w-full gap-3">
          <Card className="flex grow flex-col items-center justify-center !rounded py-1">
            <span>1</span>
            <span className="text-lg font-bold text-[#FFC829]">{bounce1}</span>
          </Card>
          <Card className="flex grow flex-col items-center justify-center !rounded py-1">
            <span>2</span>
            <span className="text-lg font-bold text-[#FFC829]">{bounce2}</span>
          </Card>
          <Card className="flex grow flex-col items-center justify-center !rounded py-1">
            <span>3</span>
            <span className="text-lg font-bold text-[#FFC829]">{bounce3}</span>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default UpCards;
