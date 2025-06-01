import { Card } from "@/components/card";

interface UpCardsProps {
  energy: number;
  powerDemand: number;
  cosphi: number;
  reactivePower: number;
  totalPower: number;
}

const UpCards = ({
  energy,
  powerDemand,
  cosphi,
  reactivePower,
  totalPower,
}: UpCardsProps) => {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="grid w-full grid-cols-5 gap-2">
        <Card className="flex h-16 items-center justify-between gap-5 !rounded px-5">
          <span>Energy (Mwh)</span>
          <span className="text-lg font-bold text-[#FFC829]">
            {energy.toFixed(2)}
          </span>
        </Card>
        <Card className="flex h-16 items-center justify-between gap-5 !rounded px-5">
          <span>Power demand (Mw))</span>
          <span className="text-lg font-bold text-[#FFC829]">
            {powerDemand.toFixed(2)}
          </span>
        </Card>
        <Card className="flex h-16 items-center justify-between gap-5 !rounded px-5">
          <span>Cosphi</span>
          <span className="text-lg font-bold text-[#FFC829]">{cosphi}</span>
        </Card>
        <Card className="flex h-16 items-center justify-between gap-5 !rounded px-5">
          <span>Reactive power (Mvar)</span>
          <span className="text-lg font-bold text-[#FFC829]">
            {reactivePower.toFixed(2)}
          </span>
        </Card>
        <Card className="flex h-16 items-center justify-between gap-5 !rounded px-5">
          <span>Total power (MVA)</span>
          <span className="text-lg font-bold text-[#FFC829]">{totalPower}</span>
        </Card>
      </div>
    </div>
  );
};

export default UpCards;
