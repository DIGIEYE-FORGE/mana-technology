import { Card } from "@/components/card";
import { ProgressAccumulation } from "./_components/progress-accumulation";
import { Drilling } from "./_components/drilling";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[28px] gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <LineChartWidget
          title="Production Evolution"
          attributes={{
            telemetries: [
              {
                area: false,
                name: "EST_PLANIFIE_ROCHE_CUMUL",
                color: "#0c2364",
                label: "Cumulative planifié",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: true,
                name: "EST_REALISE_ROCHE_CUMUL_Ton",
                color: "#ed8936",
                label: "Cumulative realisé",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <LineChartWidget
          title="Production Evolution"
          attributes={{
            telemetries: [
              {
                area: false,
                name: "EST_PLANIFIE_ROCHE_CUMUL",
                color: "#0c2364",
                label: "Cumulative planifié",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST_REALISE_ROCHE_CUMUL_Ton",
                color: "#ed8936",
                label: "Cumulative realisé",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <BarChartWidget
          title="Daily Production BreakUp"
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "EST_PLANIFIE_ROCHE",
                unit: "T",
                color: "#4299e1",
                label: "Planifié",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "EST_REALISE_ROCHE_Ton",
                unit: "T",
                color: "#ed8936",
                label: "Realisé",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <ProgressAccumulation />
      <Card className="lex col-span-9 row-span-9 flex-col gap-4 p-4">
        <TableWidget
          title="Production"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            mappings: [
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "QUNTITE_EXPLOSIF_TIRE" },
              { displayName: "", telemetryName: "ZONE DE TIRE" },
              { displayName: "", telemetryName: "TONNAE_MINERAI_ABATTU" },
              { displayName: "", telemetryName: "TONNAE_STERILE_ABATTU" },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 row-span-9 flex flex-col p-6">
        <BarChartWidget
          title="Daily Production BreakUp"
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "EST_PLANIFIE_ROCHE",
                unit: "T",
                color: "#4299e1",
                label: "Planifié",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "EST_REALISE_ROCHE_Ton",
                unit: "T",
                color: "#ed8936",
                label: "Realisé",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-6 row-span-8 p-4">
        <TableWidget
          title="Production"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            mappings: [
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "QUNTITE_EXPLOSIF_TIRE" },
              { displayName: "", telemetryName: "ZONE DE TIRE" },
              { displayName: "", telemetryName: "TONNAE_MINERAI_ABATTU" },
              { displayName: "", telemetryName: "TONNAE_STERILE_ABATTU" },
            ],
          }}
        />
      </Card>
      <Card className="col-span-6 row-span-8 p-4">
        <TableWidget
          title="Production"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            mappings: [
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "NUMERO_DE_TIR" },
              { displayName: "", telemetryName: "QUNTITE_EXPLOSIF_TIRE" },
              { displayName: "", telemetryName: "ZONE DE TIRE" },
              { displayName: "", telemetryName: "TONNAE_MINERAI_ABATTU" },
              { displayName: "", telemetryName: "TONNAE_STERILE_ABATTU" },
            ],
          }}
        />
      </Card>
    </main>
  );
}
