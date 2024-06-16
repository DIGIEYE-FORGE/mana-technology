import { Card } from "@/components/card";
import { ProductionEvolution } from "./_components/production-evolution";
import { DailyProductionBreakUp } from "./_components/daily-production-break-up";
import { DailyProduction } from "./_components/daily-production";
import { ProgressAccumulation } from "./_components/progress-accumulation";
import { Drilling } from "./_components/drilling";
import TableWidget from "@/components/table-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[28px] gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <ProductionEvolution />
      <DailyProductionBreakUp />
      <DailyProduction />
      <ProgressAccumulation />
      <Card className="lex col-span-9 row-span-9 flex-col gap-4 p-4">
        <TableWidget title="Production" attributes={attributes} />
      </Card>
      <Drilling />
      <Card className="col-span-6 row-span-8 p-4">
        <TableWidget title="Production" attributes={attributes} />
      </Card>
      <Card className="col-span-6 row-span-8 p-4">
        <TableWidget title="Production" attributes={attributes} />
      </Card>
    </main>
  );
}

const attributes = {
  serial: "C6XPYU0D920L1M07",
  mappings: [
    { displayName: "", telemetryName: "NUMERO_DE_TIR" },
    { displayName: "", telemetryName: "NUMERO_DE_TIR" },
    { displayName: "", telemetryName: "QUNTITE_EXPLOSIF_TIRE" },
    { displayName: "", telemetryName: "ZONE DE TIRE" },
    { displayName: "", telemetryName: "TONNAE_MINERAI_ABATTU" },
    { displayName: "", telemetryName: "TONNAE_STERILE_ABATTU" },
  ],
};
