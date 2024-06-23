import { useAppContext } from "@/Context";
import BarLineWidget from "@/components/bar-line-widget";
import { Card } from "@/components/card";
import LinesWidget from "@/components/lines-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import Ventillation from "@/components/ventillation";

function DashboardPage2() {
  const { dateRange } = useAppContext();
  return (
    <div className="grid h-fit w-full grid-flow-dense auto-rows-[19rem] grid-cols-3 gap-6">
      <Card className="">1</Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement cumulatif annuel
        </h1>
        <div className="w-full text-center text-xs text-gray-400">
          Piloting Work - S-curve for Planned % Vs Actual %
        </div>
        <div className="h-1 flex-1">
          <BarLineWidget
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_SUIVI_MENSUEL_AVANCEMENT_FORECAST",
                  unit: "T",
                  color: "#FF5AF1",
                  label: "Forecast (Mensuel)",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },
                {
                  name: "UG_SUIVI_REALISE",
                  unit: "T",
                  color: "#FFDC8C",
                  label: "Réalisé",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },
                {
                  name: "UG_SUIVI_AVANCEMENT_PLANIFIE_CUMUL_OFFRE_INITIALE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié (Cumulé) - Offre initiale",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
                {
                  name: "UG_SUIVI_ANNUEL_AVANCEMENT_REALISE_CUMUL",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Réalisé (Cumulé)",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
                {
                  name: "UG_SUIVI_ANNUEL_AVANCEMENT_FORECAST_CUMUL",
                  unit: "T",

                  color: "#fab006",
                  label: "Forecast (Cumulé)",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement Cumulé :
          <span className="text-md text-gray-400"> Réalisé vs Planifié</span>
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <LinesWidget
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_METRES_PLANIFIE_CUMULE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
                {
                  name: "UG_METRES_REALISE_CUMULE",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Réalisé",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Dashboard ventillation
        </h1>
        <Ventillation />
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Arrachement (m) journalier
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <BarLineWidget
            moyenne={true}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_METRES_PLANIFIE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Prévus",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },
                {
                  name: "UG_METRES_REALISE_TOTAL",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Réalisé",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Nombre Tir{" "}
          <span className="text-gray-500">(planifié vs réalisé)</span>
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <BarLineWidget
            dateRange={dateRange}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_TIR_REALISE",
                  unit: "T",
                  color: "#FFDC8C",
                  label: "TIRS RÉALISÉ",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },
                {
                  name: "UG_TIR_PLANIFIE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "TIRS PRÉVUES",
                  serial: "DABF7PAT2G4BAG21",
                  type: "bar",
                },

                {
                  name: "UG_TIR_PLANIFIE_CUMULE",
                  unit: "T",

                  color: "#B98EFF",
                  label: "TIRS PRÉVUES CUMULÉE",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
                {
                  name: "UG_TIR_REALISE_CUMULE",
                  unit: "T",
                  color: "#FF5AF1",
                  label: "TIRS RÉALISÉ CUMULÉE",
                  serial: "DABF7PAT2G4BAG21",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="">7</Card>
      <Card className="">8</Card>
      <Card className="flex flex-col p-4">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité et utilisation des engins
        </h3>
        <div className="flex-1">
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
              ],
            }}
          />
        </div>
      </Card>
    </div>
  );
}
export default DashboardPage2;
