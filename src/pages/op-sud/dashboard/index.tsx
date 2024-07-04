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
          Stérile / Minerai (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "SUD_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "Minerai Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD_REALISE_MIENRAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "Minerai Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Stérile Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD_REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Stérile Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée (t)
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "SUD_PLANIFIE_ROCHE_CUMUL",
                  color: "#78F6EA",
                  label: "Cumulatif Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  area: true,
                  name: "SUD_REALISE_ROCHE_CUMUL",
                  color: "#B98EFF",
                  label: "Cumulatif Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Production Journalière (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
            attributes={{
              stacked: false,
              telemetries: [
                {
                  name: "SUD_PLANIFIE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD_REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>

      <Card className="col-span-full row-span-3 flex flex-col p-4 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-base font-semibold 2xl:text-lg">
          Évolution de la Production vs Planifié
        </h1>
        <ProgressAccumulation
          attributes={{
            serial: "C6XPYU0D920L1M07",
            progressColor: "#FF5AF1",
            currentTargetColor: "#727DC6",
            progressTelemetryName: "SUD_REALISE_ROCHE_CUMUL",
            accumulationTelemetryName: "SUD_PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production Roche par Fosse (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
            moyenne={["SUD2_REALISE_ROCHE", "SUD4_REALISE_ROCHE"]}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "SUD2_REALISE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Sud 2",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD4_REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Sud 4",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production cumulée par qualité (t)
        </h1>
        <div className="flex-1">
          <ProgressMultiple
            attributes={[
              {
                title: "Sulfures (HG,MG,LG)",
                telemetries: [
                  {
                    name: "SUD_REALISE_ORE_HG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD_REALISE_ORE_MG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD_REALISE_ORE_LG_SULF",
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
                    name: "SUD_REALISE_ORE_HG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD_REALISE_ORE_MG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD_REALISE_ORE_LG_OXYD",
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
      <Card className="col-span-full row-span-3 flex flex-col p-4 lg:col-span-8">
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
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "SUD_REALISE_FORATION",
                  color: "#B98EFF",
                  label: "Realisé ML/J",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  area: false,
                  name: "SUD_PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Objectif ML/J",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-3 p-4 lg:col-span-6 xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engins CADEX
        </h3>
        <MultiProgressWidget
          attributes={{
            telemetries: [
              {
                name: "CADEX_CAMION30T_GROUPE",
                color: "#ecc94b",
                label: "CAMIONS 30 T",
                serial: "C6XPYU0D920L1M07",
                icon: "camions.svg",
              },
              {
                name: "CADEX_CAMION60T_GROUPE",
                color: "#ecc94b",
                label: "CAMIONS 60 T",
                serial: "C6XPYU0D920L1M07",
                icon: "camions.svg",
              },
              {
                name: "CADEX_FOREUSE_DX700_01",
                color: "#ecc94b",
                label: "DX700 (1)",
                serial: "C6XPYU0D920L1M07",
                icon: "foreuse.svg",
              },
              {
                name: "CADEX_FOREUSE_DX700_02",
                color: "#ecc94b",
                label: "DX700 (2)",
                serial: "C6XPYU0D920L1M07",
                icon: "foreuse.svg",
              },
              {
                name: "CADEX_FOREUSE_EPIROCT35_01",
                color: "#ecc94b",
                label: "Epiroc T35",
                serial: "C6XPYU0D920L1M07",
                icon: "foreuse.svg",
              },
              {
                name: "CADEX_PELLE_CAT320_02",
                color: "#ecc94b",
                label: "CAT320",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_DOSAN_01",
                color: "#ecc94b",
                label: "DOSAN",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_HYUNDAI_01",
                color: "#ecc94b",
                label: "HYUNDAI",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_SANY_01",
                color: "#ecc94b",
                label: "SANY N°1 ",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_SANY_02",
                color: "#ecc94b",
                label: "SANY N°2",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_VOLVO380_01",
                color: "#ecc94b",
                label: "VOLVO 380",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
              {
                name: "CADEX_PELLE_VOLVO480_01",
                color: "#ecc94b",
                label: "VOLVO 480",
                serial: "C6XPYU0D920L1M07",
                icon: "pelle.svg",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-3 p-4 lg:col-span-6 xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">Commentaires</h3>
      </Card>
    </main>
  );
}
