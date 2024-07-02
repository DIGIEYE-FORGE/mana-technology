import { Card } from "@/components/card";
import { ProgressAccumulation } from "../_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import ProgressMultiple from "@/components/progress-multiple";

export default function HomeDashboard() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[80px] grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-12 lg:gap-4 xl:grid-cols-[repeat(15,minmax(0,1fr))] 2xl:auto-rows-[92px]">
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "PLANIFIE_ROCHE_CUMUL",
                  color: "#78F6EA",
                  label: "Cumulative planifié",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  area: true,
                  name: "REALISE_ROCHE_CUMUL",
                  color: "#B98EFF",
                  label: "Cumulative realisé",
                  serial: "TIRSIL71OBOT4UB4",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Production par Fosse
        </h1>
        <div className="flex-1">
          <BarChartWidget
            moyenne={["SUD_REALISE_ROCHE", "EST_REALISE_ROCHE_Ton"]}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "EST_REALISE_ROCHE_Ton",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Est",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "SUD_REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Sud",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">Stérile / Minerai</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "Minerai Planifié",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  name: "REALISE_MINERAI",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Minerai Realisé",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  name: "PLANIFIE_STERILE",
                  unit: "T",
                  color: "#FEC33A",
                  label: "Stérile Planifié",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  name: "REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Stérile Realisé",
                  serial: "TIRSIL71OBOT4UB4",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution de la Production vs Planifié
        </h1>
        <ProgressAccumulation
          attributes={{
            serial: "TIRSIL71OBOT4UB4",
            progressColor: "#FF5AF1",
            currentTargetColor: "#727DC6",
            progressTelemetryName: "REALISE_ROCHE_CUMUL",
            accumulationTelemetryName: "PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production journalière
        </h1>
        <div className="flex-1">
          <BarChartWidget
            attributes={{
              stacked: false,
              telemetries: [
                {
                  name: "PLANIFIE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  name: "REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Realisé",
                  serial: "TIRSIL71OBOT4UB4",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production par qualité
        </h1>
        <div className="flex-1">
          <ProgressMultiple
            attributes={[
              {
                title: "Sulfures (HG,MG,LG)",
                telemetries: [
                  {
                    name: "REALISE_ORE_HG_SULF",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "REALISE_ORE_MG_SULF",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "REALISE_ORE_LG_SULF",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
              {
                title: "Oxydes (HG,MG,LG)",
                telemetries: [
                  {
                    name: "REALISE_ORE_HG_OXYD",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "REALISE_ORE_MG_OXYD",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "REALISE_ORE_LG_OXYD",
                    serial: "TIRSIL71OBOT4UB4",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
            ]}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col gap-1 p-4 lg:col-span-8">
        <h3 className="text-center text-lg font-semibold">Suivi des Tirs</h3>
        <TableWidget
          className="h-1 flex-1"
          attributes={{
            serial: "TIRSIL71OBOT4UB4",
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
                displayName: "Tonnage Roche Abattu Minerai",
                telemetryName: "TONNAE_MINERAI_ABATTU",
              },
              {
                displayName: "Tonnage Roche Abattu Stérile",
                telemetryName: "TONNAE_STERILE_ABATTU",
              },
              {
                displayName: "Charge instantanée (kg)",
                telemetryName: "CHARGE_INSTANTANEE",
              },
              {
                displayName: "Charge spécifique (g/t)",
                telemetryName: "CHARGE_SPECIFIQUE",
                displayFormat: "float",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-4">
        <h1 className="text-center text-lg font-semibold">Foration (ml)</h1>
        <div className="flex-1">
          <LineChartWidget
            moyenne={"combined"}
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Objectif ML/J",
                  serial: "TIRSIL71OBOT4UB4",
                },
                {
                  area: true,
                  name: "REALISE_FORATION",
                  color: "#B98EFF",
                  label: "Realisé ML/J",
                  serial: "TIRSIL71OBOT4UB4",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-6 flex flex-col gap-3 p-4 xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engine
        </h3>
        <MultiProgressWidget
          attributes={{
            telemetries: [
              {
                name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (2)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc T35 ",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_PELLE_CAT374_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT374_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (2) ",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT374_03_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (3)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT350_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT350_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT_0000_01",
                color: "#ecc94b",
                label: "Pelle CAT ",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "pelle.svg",
              },
              {
                name: "GMC_CAMIONS_SCANIA50T_GROUPE",
                color: "#ecc94b",
                label: "Camions Scania 50t (15)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "camions.svg",
              },
              {
                name: "GMC_DOZER_D8_01",
                color: "#ecc94b",
                label: "D8",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "d8.svg",
              },
              {
                name: "GMC_DOZER_D8_02",
                color: "#ecc94b",
                label: "D8 (2)",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "d8.svg",
              },
              {
                name: "GMC_NIVELEUSE_01",
                color: "#ecc94b",
                label: "Niveleuse",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "niveleuse.svg",
              },
              {
                name: "GMC_COMPACTEUR_01",
                color: "#ecc94b",
                label: "Compacteur",
                serial: "U9XQMQ1DXYT7LJIP",
                icon: "compacteuse.svg",
              },
              {
                name: "GMC_CITERNE_01",
                color: "#ecc94b",
                label: "Citerne d'arrosage",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
    </main>
  );
}
