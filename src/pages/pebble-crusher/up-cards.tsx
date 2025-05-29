import { Card } from "@/components/card";
import RocketIcon from "@/assets/rocket.svg?react";
import PlugIcon from "@/assets/plug.svg?react";
import ElectricIcon from "@/assets/electric.svg?react";
import SettingIcon from "@/assets/setting.svg?react";

interface UpCardsProps {
  flowRate: string | number;
  speed: string | number;
  energy: string | number;
  bounce1: string | number;
  bounce2: string | number;
  bounce3: string | number;
  runningState: any;
  telemetryRunningState: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const UpCards = ({
  flowRate,
  speed,
  bounce1,
  bounce2,
  bounce3,
  runningState,
  telemetryRunningState
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
            <span className="text-lg font-bold text-[#FFC829]">##</span>
          </Card>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <RocketIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Rotation frequency (tr/min)</span>
          <span className="text-lg font-bold text-[#FFC829]">{speed}</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <PlugIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Power (Kw)</span>
          <span className="text-lg font-bold text-[#FFC829]">##</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <ElectricIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Energy (kwh)</span>
          <span className="text-lg font-bold text-[#FFC829]">##</span>
        </div>
      </Card>
      <Card className="flex max-w-fit grow items-center justify-center gap-5 !rounded px-5">
        <SettingIcon className="size-16" />
        <div className="flex flex-col gap-1">
          <span>Utilization (%)</span>
          <span className="text-lg font-bold text-[#FFC829]">
            {Math.round(
                (runningState?.count[telemetryRunningState]
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .filter((ele: any) => ele.value == "True")
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .reduce(
                    (acc: any, curr: any) => acc + curr.difTimeHourly,
                    0,
                  ) /
                  24) *
                  100,
              )}
          </span>
        </div>
      </Card>
      <Card className="flex grow flex-col items-center gap-2 !rounded p-2">
        <span>Adjustment Ring Bounce vibrations(mm/s)</span>
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
