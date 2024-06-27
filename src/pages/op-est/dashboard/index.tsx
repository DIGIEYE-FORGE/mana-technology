import { Card } from "@/components/card";
import { ProgressAccumulation } from "../_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import ProgressMultiple from "@/components/progress-multiple";

export default function HomeDashboard() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[80px] grid-cols-3 gap-3 sm:auto-rows-[92px] md:grid-cols-6 lg:grid-cols-12 lg:gap-4 2xl:grid-cols-[repeat(15,minmax(0,1fr))]">
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée
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
          Production par Fosse
        </h1>
        <div className="flex-1">
          <BarChartWidget
            moyenne={["EST11_REALISE_ROCHE", "EST12_REALISE_ROCHE"]}
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
        <h1 className="text-center text-lg font-semibold">Stérile / Minera</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
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
                  name: "EST_REALISE_MINERAI",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Minerai Realisé",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
                {
                  name: "EST_PLANIFIE_STERILE",
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
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution de la Production vs Planifié
        </h1>
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
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production journalière
        </h1>
        <div className="flex-1">
          <BarChartWidget
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
          Production par qualité
        </h1>
        <div className="flex-1">
          <ProgressMultiple
            attributes={[
              {
                title: "Sulfures (HG,MG,LG)",
                telemetries: [
                  {
                    name: "EST_REALISE_ORE_HG_SULF",
                    serial: "U9XQMQ1DXYT7LJIP",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "EST_REALISE_ORE_MG_SULF",
                    serial: "U9XQMQ1DXYT7LJIP",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "EST_REALISE_ORE_LG_SULF",
                    serial: "U9XQMQ1DXYT7LJIP",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
              {
                title: "Oxydes (HG,MG,LG)",
                telemetries: [
                  {
                    name: "EST_REALISE_ORE_HG_OXYD",
                    serial: "U9XQMQ1DXYT7LJIP",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "EST_REALISE_ORE_MG_OXYD",
                    serial: "U9XQMQ1DXYT7LJIP",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "EST_REALISE_ORE_LG_OXYD",
                    serial: "U9XQMQ1DXYT7LJIP",
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
            serial: "AATT1JKEZ2V1YVMA",
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
        <h1 className="text-center text-lg font-semibold">
        Foration (ml)
        </h1>
        <div className="flex-1">
          <LineChartWidget
          moyenne={["EST_REALISE_FORATION", "EST_PLANIFIE_FORATION"]}
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
      <Card className="col-span-full row-span-3 flex flex-col gap-3 p-4 2xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engine GMC
        </h3>
        <MultiProgressWidget
          attributes={{
            telemetries: [
              {
                name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (2)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc T35 ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (2) ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT374_03_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (3)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT350_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350 (1)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT350_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_PELLE_CAT_0000_01",
                color: "#ecc94b",
                label: " Pelle CAT ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_CAMIONS_SCANIA50T_GROUPE",
                color: "#ecc94b",
                label: "Camions Scania 50t (15)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_DOZER_D8_01",
                color: "#ecc94b",
                label: "D8 ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_DOZER_D8_02",
                color: "#ecc94b",
                label: "D8 (2)",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_NIVELEUSE_01",
                color: "#ecc94b",
                label: "Niveleuse ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_COMPACTEUR_01",
                color: "#ecc94b",
                label: "Compacteur ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                name: "GMC_CITERNE_01",
                color: "#ecc94b",
                label: "Citerne d'arrosage ",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col gap-3 p-4 2xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">Comment</h3>
      </Card>
    </main>
  );
}
