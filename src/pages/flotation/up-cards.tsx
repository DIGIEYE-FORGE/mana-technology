import { Card } from "@/components/card";

interface UpCardsProps {
  flotYield: string | number;
  sulfideYield: string | number;
  oxydeYield: string | number;
  concentrateProduction: string | number;
  metalProduction: string | number;
  energy: string | number;
  water: string | number;
}

const UpCards = ({
  flotYield,
  sulfideYield,
  oxydeYield,
  concentrateProduction,
  metalProduction,
  energy,
  water,
}: UpCardsProps) => {
  return (
    <div className="flex w-full gap-2">
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Flot Yield (%)</span>
        <span className="text-lg font-bold text-[#FFC829]">{flotYield}</span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Sulfide Yield (%)</span>
        <span className="text-lg font-bold text-[#FFC829]">{sulfideYield}</span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Oxyde Yield (%)</span>
        <span className="text-lg font-bold text-[#FFC829]">{oxydeYield}</span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Concentrate Production (t)</span>
        <span className="text-lg font-bold text-[#FFC829]">
          {concentrateProduction}
        </span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Metal Production (t)</span>
        <span className="text-lg font-bold text-[#FFC829]">
          {metalProduction}
        </span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Energy (Kwh)</span>
        <span className="text-lg font-bold text-[#FFC829]">{energy}</span>
      </Card>
      <Card className="flex h-16 grow items-center justify-center gap-5 !rounded px-5">
        <span>Water (m3)</span>
        <span className="text-lg font-bold text-[#FFC829]">{water}</span>
      </Card>
    </div>
  );
};

export default UpCards;
