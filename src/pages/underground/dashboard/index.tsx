import { useAppContext } from "@/Context";
import BarLineWidget from "@/components/bar-line-widget";
import { Card } from "@/components/card";
// import { ConeChart } from "@/components/cone-chart";
import { D3DonutChart } from "@/components/d3-donut chart";
import Engins from "@/components/engins";
import LineChartWidget from "@/components/line-chart-widget";
import LinesWidget from "@/components/lines-chart-widget";
import { Button } from "@/components/ui/button";
import Ventillation from "@/components/ventillation";
import { ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function UndergroundDashboardPage() {
  const { dateRange } = useAppContext();
  return (
    <div className="grid h-fit w-full grid-flow-dense auto-rows-[19rem] grid-cols-9 gap-6">
      <Card className="col-span-5 flex flex-col p-4">
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
      <Card className="col-span-4 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement Cumulé :
          <span className="text-md text-gray-400"> Réalisé vs Planifié</span>
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <LinesWidget
            yAxis="one"
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

      <Card className="col-span-3 flex flex-col items-center gap-1 p-4">
        <h1 className="text-center text-lg font-semibold">
          Dashboard ventillation
        </h1>
        <div className="w-full flex-1">
          <Ventillation
            attribute={[
              {
                telemetryName: "Energie",
                labelTelemetry: "Energie",
                serial: "DABF7PAT2G4BAG21",
                randomValue: 104,
                unit: "kWh",
              },
              {
                telemetryName: "Ventilateur_N°1",
                labelTelemetry: "Ventilateur N°1",
                serial: "DABF7PAT2G4BAG21",
                randomValue: 0,
              },
              {
                telemetryName: "Ventilateur_N°2",
                labelTelemetry: "Ventilateur N°2",
                serial: "DABF7PAT2G4BAG21",
                randomValue: 230,
              },
              {
                telemetryName: "Oxygène",
                randomValue: 19.6,
                unit: "%",
                labelTelemetry: "Oxygène",
                serial: "DABF7PAT2G4BAG21",
                icon: "co2.svg",
              },
              {
                telemetryName: "co2",
                randomValue: 1,
                unit: "ppm",
                labelTelemetry: "co2",
                serial: "DABF7PAT2G4BAG21",
                icon: "co2.svg",
              },
              {
                telemetryName: "no2",
                randomValue: 0.5,
                unit: "ppm",
                labelTelemetry: "no2",
                serial: "DABF7PAT2G4BAG21",
                icon: "co2.svg",
              },
              {
                telemetryName: "T. Sèche",
                randomValue: 22.2,
                unit: "°C",
                labelTelemetry: "T. Sèche",
                serial: "DABF7PAT2G4BAG21",
                icon: "seche.svg",
              },
              {
                telemetryName: "T. Humide",
                randomValue: 21.9,
                unit: "°C",
                labelTelemetry: "T. Humide",
                serial: "DABF7PAT2G4BAG21",
                icon: "vites.svg",
              },
              {
                telemetryName: "Vitesse de l’air",
                randomValue: 0.2,
                unit: "m/s",
                labelTelemetry: "Vitesse de l’air",
                serial: "DABF7PAT2G4BAG21",
                icon: "vites.svg",
              },
            ]}
          />
        </div>
        <Link to="/underground/ventilation">
          <Button className="flex w-fit gap-2" size={"sm"} variant={"link"}>
            <ChevronsDown size={16} />
            {/* <img src="plus.svg" alt="" width={20} height={20} /> */}
            <span>Voir plus</span>
          </Button>
        </Link>
      </Card>
      <Card className="col-span-3 flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Arrachement (m) journalier
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <BarLineWidget
            moyenne={["UG_METRES_PLANIFIE", "UG_METRES_REALISE_TOTAL"]}
            yAxis="one"
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
      <Card className="col-span-3 flex flex-col p-4">
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
      <Card className="relative col-span-3 p-4">
        <h1 className="text-center text-lg font-semibold">
          Développement du cycle
        </h1>
        <div className="flex-1">
          <D3DonutChart
            attribute={[
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Quasi-accidents & observations",
                bfsTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                bfsLabelTelemetry: "test",
                color: "#009AB6",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Quasi-accidents & observations",
                bfsTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                bfsLabelTelemetry: "Quasi-accidents & observations",
                color: "#009AB6",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Quasi-accidents & observations",
                bfsTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                bfsLabelTelemetry: "Quasi-accidents & observations",
                color: "#009AB6",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Quasi-accidents & observations",
                bfsTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                bfsLabelTelemetry: "Quasi-accidents & observations",
                color: "#009AB6",
                serial: "DABF7PAT2G4BAG21",
              },
            ]}
          />
        </div>
        <Link
          to="/underground/tree"
          className="absolute bottom-5 flex w-full items-center justify-center"
        >
          <Button className="flex h-5 w-fit gap-2" size={"sm"} variant={"link"}>
            <ChevronsDown size={16} />
            <span className="text-center">Voir plus</span>
          </Button>
        </Link>
      </Card>
      <Card className="col-span-3 flex flex-col gap-1 p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement/Arrachement journalier
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "EST_REALISE_FORATION",
                  color: "#78F6EA",
                  label: "Realisé ML/J",
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 flex flex-col gap-2 p-2">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité et utilisation des engins
        </h3>
        <div className="mx-6 flex-1 p-1">
          <Engins
            attribute={[
              {
                label: "LH06",
                icon: "/truck.svg",
                utilisationTelemetry: "UG_LH06_UTILISATION",
                disponibilliteTelemetry: "UG_LH06_DISPONIBILITE",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                label: "LH06",
                icon: "/truck.svg",
                utilisationTelemetry: "UG_LH06_UTILISATION",
                disponibilliteTelemetry: "UG_LH06_DISPONIBILITE",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                label: "LH06",
                icon: "/truck.svg",
                utilisationTelemetry: "UG_LH06_UTILISATION",
                disponibilliteTelemetry: "UG_LH06_DISPONIBILITE",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                label: "LH06",
                icon: "/truck.svg",
                utilisationTelemetry: "UG_LH06_UTILISATION",
                disponibilliteTelemetry: "UG_LH06_DISPONIBILITE",
                serial: "DABF7PAT2G4BAG21",
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
