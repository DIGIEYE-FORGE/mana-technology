import { Card } from "@/components/card";
import { ProgressAccumulation } from "./_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[28px] grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Production Evolution
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
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">
          Daily Production BreakUp
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "EST11_REALISE_ROCHE",
                  color: "#ecc94b",
                  label: "EST11",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: false,
                  name: "EST12_REALISE_ROCHE",
                  color: "#4299e1",
                  label: "EST12",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col p-6">
        <h1 className="text-center text-lg font-semibold">Daily production</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
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
        </div>
      </Card>
      <Card className="col-span-full row-span-9 flex flex-col gap-4 p-4 lg:col-span-9">
        <h3 className="text-center text-lg font-semibold">Test</h3>
        <TableWidget
          className="flex-1"
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
      <ProgressAccumulation />

      <Card className="col-span-full row-span-7 flex flex-col p-6 lg:col-span-6 xl:col-span-3 xl:row-span-9">
        <h1 className="text-center text-lg font-semibold">
          Daily Production BreakUp
        </h1>
        <div className="flex-1">
          <BarChartWidget
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "EST_REALISE_FORATION",
                  unit: "T",
                  color: "#4299e1",
                  label: "Planned ML",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_PLANIFIE_FORATION",
                  unit: "T",
                  color: "#ed8936",
                  label: "Unplanned ML",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-8 p-4 xl:col-span-6">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engins CADEX DRIL
        </h3>
        <TableWidget
          className="flex-1"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            mappings: [
              { displayName: "", telemetryName: "CADEX_FOREUSE_EPIROCT35_01" },
              { displayName: "", telemetryName: "CADEX_PELLE_VOLVO380_01" },
              { displayName: "", telemetryName: "CADEX_PELLE_HYUNDAI_01" },
              { displayName: "", telemetryName: "CADEX_FOREUSE_DX700_02" },
            ],
          }}
        />
      </Card>
      <Card className="col-span-full row-span-8 p-4 xl:col-span-6">
        <h3 className="text-center text-lg font-semibold">Production</h3>
        <TableWidget
          className="flex-1"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            mappings: [
              { displayName: "", telemetryName: "CADEX_CAMION30T_GROUPE" },
              { displayName: "", telemetryName: "CADEX_PELLE_SANY_01" },
              { displayName: "", telemetryName: "CADEX_PELLE_SANY_02" },
            ],
          }}
        />
      </Card>
    </main>
  );
}
