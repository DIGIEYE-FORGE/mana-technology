import { Card } from "@/components/card";
import { ProgressAccumulation } from "../_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import ProgressMultiple from "@/components/progress-multiple";

export default function HomeDashboard() {
  return (
    <div className="grid min-h-full w-full grid-flow-dense grid-cols-3 gap-6 md:grid-cols-6 xl:auto-rows-[17rem] xl:grid-cols-9 2xl:auto-rows-[19rem]">
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée (t)
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "EST_PLANIFIE_ROCHE_CUMUL",
                  color: "#78F6EA",
                  label: "Cumulatif Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  area: true,
                  name: "EST_REALISE_ROCHE_CUMUL_Ton",
                  color: "#B98EFF",
                  label: "Cumulatif Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Production Journalière (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
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
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Stérile / Minerai (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
            attributes={{
              telemetries: [
                {
                  name: "EST_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "Minerai Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Minerai Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_MIENRAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "Stérile Planifié",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Stérile Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4 xl:col-span-3 2xl:col-span-2">
        <h1 className="text-center text-lg font-semibold">
          Évolution de la Production vs Planifié
        </h1>
        <ProgressAccumulation
          attributes={{
            serial: "U9XQMQ1DXYT7LJIP",
            progressColor: "#EBC94A",
            currentTargetColor: "#78F6EA",
            progressTelemetryName: "EST_REALISE_ROCHE_CUMUL_Ton",
            accumulationTelemetryName: "EST_PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-3 flex flex-col p-4 xl:col-span-3 2xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production par qualité (t)
        </h1>
        <div className="flex-1">
          <ProgressMultiple
            attributes={[
              {
                title: "Sulfures (HG,MG,LG)",
                telemetries: [
                  {
                    name: "SUD4_REALISEORE_HG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD4_REALISE_ORE_MG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD4_REALISE_ORE_LG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
              {
                title: "Oxydes (HG,MG,LG)",
                telemetries: [
                  {
                    name: "SUD4_REALISE_ORE_HG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD4_REALISE_ORE_MG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD4_REALISE_ORE_LG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
            ]}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex items-center justify-center overflow-hidden text-3xl font-bold xl:row-span-2">
        <img
          src="/est11.jpeg"
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </Card>
      <Card className="col-span-full flex flex-col p-4 xl:col-span-6">
        <h3 className="text-center text-lg font-semibold">Suivi des Tirs</h3>
        <TableWidget
          className="h-1 flex-1"
          attributes={{
            serial: "C6XPYU0D920L1M07",
            element: "telemetries",
            mappings: [
              {
                displayName: "N° de tir",
                telemetryName: "NUMERO_DE_TIR",
              },
              {
                displayName: "Quantité d'explosif tirée (kg)",
                telemetryName: "QUNTITE_EXPLOSIF_TIRE",
              },
              {
                displayName: "Zone de Tir",
                telemetryName: "ZONE DE TIRE",
              },
              {
                displayName: "Tonnage Roche Abattu Minerai (t)",
                telemetryName: "TONNAE_MINERAI_ABATTU",
              },
              {
                displayName: "Tonnage Roche Abattu Stérile (t)",
                telemetryName: "TONNAE_STERILE_ABATTU",
              },
              {
                displayName: "Charge instantanée (kg)",
                telemetryName: "CHARGE_INSTANTANEE",
              },
              {
                displayName: "Charge spécifique (g/t)",
                telemetryName: "CHARGE_SPECIFIQUE",
              },
            ],
          }}
        />
      </Card>
    </div>
  );
}
