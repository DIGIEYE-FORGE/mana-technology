import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressAccumulation } from "../home/_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import ProgressMultiple from "@/components/progress-multiple";

function DashboardPage3() {
  return (
    <div className="debug grid h-full w-full grid-flow-dense auto-rows-[19rem] gap-6 2xl:grid-cols-9">
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution Production Cumulée
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "SUD2_PLANIFIE_ROCHE_CUMUL",
                  color: "#78F6EA",
                  label: "Cumulatif Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  area: true,
                  name: "SUD2_REALISE_ROCHE_CUMUL",
                  color: "#B98EFF",
                  label: "Cumulatif Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Production Journalière
        </h1>
        <div className="flex-1">
          <BarChartWidget
            // moyenne={true}
            attributes={{
              stacked: false,
              telemetries: [
                {
                  name: "SUD2_REALISE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Production",
                  serial: "C6XPYU0D920L1M07",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">Stérile / Minerai</h1>
        <div className="flex-1">
          <BarChartWidget
            // title="Daily Production BreakUp"
            attributes={{
              telemetries: [
                {
                  name: "SUD2_PLANIFIE_MINERAI",
                  unit: "T",
                  color: "#FE22EB",
                  label: "Minerai Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD2_REALISE_MIENRAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "Minerai Realisé",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD2_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Stérile Planifié",
                  serial: "C6XPYU0D920L1M07",
                },
                {
                  name: "SUD2_REALISE_STERILE",
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
      <Card className="col-span-2 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Évolution de la Production vs Planifié
        </h1>
        <ProgressAccumulation
          attributes={{
            serial: "C6XPYU0D920L1M07",
            progressColor: "#EBC94A",
            currentTargetColor: "#78F6EA",
            progressTelemetryName: "SUD2_REALISE_ROCHE_CUMUL",
            accumulationTelemetryName: "SUD2_PLANIFIE_ROCHE_CUMUL",
          }}
        />
      </Card>
      <Card className="col-span-4 flex flex-col p-4">
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
                    name: "SUD2_REALISE_ORE_HG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                    // showLabel: true, if you need to show label
                  },
                  {
                    name: "SUD2_REALISE_ORE_MG_SULF",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD2_REALISE_ORE_LG_SULF",
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
                    name: "SUD2_REALISE_ORE_HG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "SUD2_REALISE_ORE_MG_OXYD",
                    serial: "C6XPYU0D920L1M07",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "SUD2_REALISE_ORE_LG_OXYD",
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
      <Card className="col-span-3 row-span-2 flex items-center justify-center text-3xl font-bold">
        <img
          src="/picture1.png"
          alt="machine"
          className="h-full w-full object-contain"
        />
      </Card>
      <Card className="col-span-6 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">Suivi des Tires</h3>
        <TableWidget
          className="h-1 flex-1"
          attributes={{
            serial: "V4Z1NGYWPYCTK1DX",
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
              },
            ],
          }}
        />
      </Card>
    </div>
  );
}

export default DashboardPage3;
