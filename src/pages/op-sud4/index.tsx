import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressAccumulation } from "@/components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import ProgressMultiple from "@/components/progress-multiple";

function DashboardPage3() {
  return (
    <div className="grid h-full w-full grid-flow-dense auto-rows-[17rem] grid-cols-3 gap-6 md:grid-cols-6 xl:grid-cols-9 2xl:auto-rows-[19rem]">
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Stérile / Minerai (t)
        </h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "SUD4_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "Minerai Planifié",
                  serial: "QXYIV05MSG7F079I",
                },
                {
                  name: "SUD4_REALISE_MIENRAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "Minerai Realisé",
                  serial: "PI6PQ8SEZC4BWRP3",
                },
                {
                  name: "SUD4_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Stérile Planifié",
                  serial: "HPIE60T9Z537QRHY",
                },
                {
                  name: "SUD4_REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Stérile Realisé",
                  serial: "PI6PQ8SEZC4BWRP3",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée (t)
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  accumulated: true,
                  area: false,
                  name: "SUD4_PLANIFIE_ROCHE",
                  color: "#78F6EA",
                  label: "Cumulatif Planifié",
                  serial: "QXYIV05MSG7F079I",
                },
                {
                  accumulated: true,
                  area: true,
                  name: "SUD4_REALISE_ROCHE",
                  color: "#B98EFF",
                  label: "Cumulatif Realisé",
                  serial: "PI6PQ8SEZC4BWRP3",
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
            // moyenne={true}
            attributes={{
              stacked: false,
              telemetries: [
                {
                  name: "SUD4_REALISE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Production",
                  serial: "PI6PQ8SEZC4BWRP3",
                },
              ],
            }}
          />
        </div>
      </Card>

      <Card className="col-span-3 flex flex-col p-4 xl:col-span-2">
        <h1 className="text-center text-base font-semibold 2xl:text-lg">
          Évolution de la Production vs Planifié
        </h1>
        <ProgressAccumulation
          attributes={{
            serial: "C6XPYU0D920L1M07",
            progressColor: "#EBC94A",
            currentTargetColor: "#78F6EA",
            progressTelemetryName: "SUD4_REALISE_ROCHE_CUMUL",
            accumulationTelemetryName: "SUD4_PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-3 flex flex-col p-4 xl:col-span-4">
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
                    serial: "PI6PQ8SEZC4BWRP3",
                    label: "HG",
                    color: "#FFDC8C",
                    // showLabel: true, if you need to show label
                  },
                  {
                    name: "SUD4_REALISE_ORE_MG_SULF",
                    serial: "PI6PQ8SEZC4BWRP3",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD4_REALISE_ORE_LG_SULF",
                    serial: "PI6PQ8SEZC4BWRP3",
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
                    serial: "PI6PQ8SEZC4BWRP3",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD4_REALISE_ORE_MG_OXYD",
                    serial: "PI6PQ8SEZC4BWRP3",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD4_REALISE_ORE_LG_OXYD",
                    serial: "PI6PQ8SEZC4BWRP3",
                    label: "LG",
                    color: "#FFC8FF",
                  },
                ],
              },
            ]}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex items-center justify-center text-3xl font-bold xl:row-span-2">
        <img
          src="/sud4.png"
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </Card>
      <Card className="col-span-6 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">Suivi des Tirs</h3>
        <TableWidget
          className="h-1 flex-1"
          attributes={{
            serial: "USYB2GCUMY3P36OJ",
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
              },
            ],
          }}
        />
      </Card>
    </div>
  );
}

export default DashboardPage3;
