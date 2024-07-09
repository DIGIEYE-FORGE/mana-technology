import BarChartWidget from "@/components/bar-chart-widget";
import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressAccumulation } from "../home/_components/progress-accumulation";
import TableWidget from "@/components/table-widget";

function DashboardPage3() {
  return (
    <div className="grid h-full w-full grid-flow-dense auto-rows-[19rem] grid-cols-9 gap-6">
      <Card className="col-span-3 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">
          Evolution Production cumule
        </h3>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "EST_PLANIFIE_ROCHE_CUMUL",
                  color: "#78F6EA",
                  label: "Cumulative planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                },
                {
                  area: true,
                  name: "EST_REALISE_ROCHE_CUMUL_Ton",
                  color: "#B98EFF",
                  label: "Cumulative realisé",
                  serial: "D5KP29KL463AZXWE",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">
          Production Journaliére
        </h3>
        <div className="flex-1">
          <BarChartWidget
            moyenne={["EST11_REALISE_ROCHE", "EST11_REALISE_ROCHE"]}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "EST11_REALISE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Est 11",
                  serial: "D5KP29KL463AZXWE",
                },
                {
                  name: "EST12_REALISE_ROCHE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Est 12",
                  serial: "D5KP29KL463AZXWE",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">STERILE / MINERAI</h3>
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
                  serial: "JZVATMKQ1A8DA2P1",
                },
                {
                  name: "EST_PLANIFIE_STERILE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "STERILE Planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                },
                {
                  name: "EST_REALISE_MINERAI",
                  unit: "T",
                  color: "#FEC33A",
                  label: "MINERAI Realisé",
                  serial: "D5KP29KL463AZXWE",
                },
                {
                  name: "EST_REALISE_STERILE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "STERILE Realisé",
                  serial: "D5KP29KL463AZXWE",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Evolution de la Production vs Planifié
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
      <Card className="col-span-4">1</Card>
      <Card className="col-span-3 flex items-center justify-center text-3xl font-bold">
        Photo
      </Card>
      <Card className="col-span-5 flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">Suivi des Tirs</h3>
        <TableWidget
          className="h-1 flex-1"
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
      <Card className="col-span-4 flex flex-col p-4">
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
                  serial: "D5KP29KL463AZXWE",
                },
                {
                  area: false,
                  name: "EST_PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Objectif ML/J",
                  serial: "JZVATMKQ1A8DA2P1",
                },
              ],
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default DashboardPage3;
