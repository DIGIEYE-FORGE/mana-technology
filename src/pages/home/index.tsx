import { Card } from "@/components/card";
import { ProgressAccumulation } from "./_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[28px] grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <Card className="col-span-4 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Evolution Production cumule
        </h1>
        <div className="flex-1">
          <LineChartWidget
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
        </div>
      </Card>
      <Card className="col-span-4 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Production Est11 vs Est12
        </h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "EST11_REALISE_ROCHE",
                  unit: "T",
                  color: "#4299e1",
                  label: "Est 11",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST12_REALISE_ROCHE",
                  unit: "T",
                  color: "#ecc94b",
                  label: "Est 12",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-4 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">STERILE / MINERAI</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "EST_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#ed8936",
                  label: "MINERAI Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#ecc94b",
                  label: "STERILE Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_MIENRAI",
                  unit: "T",
                  color: "#38b2ac",
                  label: "MINERAI Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_STERILE",
                  unit: "T",
                  color: "#4299e1",
                  label: "STERILE Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>

      <ProgressAccumulation
        attributes={{
          serial: "U9XQMQ1DXYT7LJIP",
          progressColor: "#e5ec4b",
          currentTargetColor: "#38b2ac",
          progressTelemetryName: "EST_REALISE_ROCHE_CUMUL_Ton",
          accumulationTelemetryName: "EST_PLANIFIE_ROCHE_CUMUL",
        }}
      />
      <Card className="col-span-4 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Production journalière
        </h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              stacked: false,
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
        </div>
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Evolution Production cumule
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "EST_REALISE_FORATION",
                  color: "#f56565",
                  label: "Realisé ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: false,
                  name: "EST_PLANIFIE_FORATION",
                  color: "#4299e1",
                  label: "Objectif ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-10 row-span-8 p-4">
        <h3 className="text-center text-lg font-semibold">Production</h3>
        <TableWidget
          className="flex-1"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            element: "telemetries",
            mappings: [
              {
                displayName: "",
                telemetryName: "NUMERO_DE_TIR",
              },
              {
                displayName: "",
                telemetryName: "NUMERO_DE_TIR",
              },
              {
                displayName: "",
                telemetryName: "QUNTITE_EXPLOSIF_TIRE",
              },
              {
                displayName: "",
                telemetryName: "ZONE DE TIRE",
              },
              {
                displayName: "",
                telemetryName: "TONNAE_MINERAI_ABATTU",
              },
              {
                displayName: "",
                telemetryName: "TONNAE_STERILE_ABATTU",
              },
            ],
          }}
        />
      </Card>
    </main>
  );
}
