import { Card } from "@/components/card";
import { ProgressAccumulation } from "./_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[80px] grid-cols-3 gap-3 sm:auto-rows-[96px] md:grid-cols-6 lg:grid-cols-12 2xl:grid-cols-[repeat(15,minmax(0,1fr))]">
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5">
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
                  color: "#78F6EA",
                  label: "Cumulative planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: true,
                  name: "EST_REALISE_ROCHE_CUMUL_Ton",
                  color: "#B98EFF",
                  label: "Cumulative realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5">
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
                  color: "#78F6EA",
                  label: "Est 11",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST12_REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Est 12",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">STERILE / MINERAI</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "EST_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "MINERAI Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "STERILE Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_MIENRAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "MINERAI Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "STERILE Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-3">
        <ProgressAccumulation
          attributes={{
            serial: "U9XQMQ1DXYT7LJIP",
            progressColor: "#FF5AF1",
            currentTargetColor: "#727DC6",
            progressTelemetryName: "EST_REALISE_ROCHE_CUMUL_Ton",
            accumulationTelemetryName: "EST_PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5">
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
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_ROCHE_Ton",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production cumulée par qualité
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "EST_REALISE_FORATION",
                  color: "#B98EFF",
                  label: "Realisé ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: false,
                  name: "EST_PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Objectif ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 p-4 lg:col-span-8">
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
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-4">
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
                  color: "#B98EFF",
                  label: "Realisé ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: false,
                  name: "EST_PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Objectif ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-6 flex flex-col gap-3 p-4 2xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engine GMC
        </h3>
        <MultiProgressWidget
          attributes={{
            telemetries: [
              {
                name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
                color: "#FFDC8C",
                label: "Foreuse Epiroc  T45 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
                color: "#FFDC8C",
                label: "Foreuse Epiroc  T45 (2)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
                color: "#FFDC8C",
                label: "Foreuse Epiroc T35 ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_01_DISPO",
                color: "#FFDC8C",
                label: "Pelle CAT 374 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_02_DISPO",
                color: "#FFDC8C",
                label: "Pelle CAT 374 (2) ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_03_DISPO",
                color: "#FFDC8C",
                label: "Pelle CAT 374 (3)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT350_01_DISPO",
                color: "#FFDC8C",
                label: "Pelle CAT 350 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
    </main>
  );
}
