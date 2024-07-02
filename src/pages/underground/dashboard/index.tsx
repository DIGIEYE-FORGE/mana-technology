import { useAppContext } from "@/Context";
import BarLineWidget from "@/components/bar-line-widget";
import { Card } from "@/components/card";
// import { ConeChart } from "@/components/cone-chart";
import { D3DonutChart } from "@/components/d3-donut chart";
import Engins from "@/components/engins";
import { GroupedHorizontalBarChart } from "@/components/grouped-horizontal-bar-chart";
import LineChartWidget from "@/components/line-chart-widget";
import LinesWidget from "@/components/lines-chart-widget";
import { Button } from "@/components/ui/button";
import Ventillation from "@/components/ventillation";
import { ChevronsDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function UndergroundDashboardPage() {
  const { dateRange } = useAppContext();
  return (
    <div className="grid h-fit w-full auto-rows-[17rem] grid-cols-3 gap-6 md:grid-cols-6 xl:grid-cols-9 2xl:auto-rows-[19rem] [&>*]:col-span-3">
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement cumulatif annuel (m)
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
          Avancement Cumulé (m):
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
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement journalier (m/j)
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
      <Card className="flex flex-col items-center gap-1 p-4">
        <h1 className="text-center text-lg font-semibold">
          Dashboard ventilation
        </h1>
        <div className="w-full flex-1">
          <Ventillation
            attribute={[
              {
                telemetryName: "s=plc1_DB_Conso2_KWHTotale",
                labelTelemetry: "Energie1",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 104,
                unit: "kWh",
              },
              {
                telemetryName: "s=plc1_DB_Conso2_KWHTotale",
                labelTelemetry: "Energie2",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 106,
                unit: "kWh",
              },
              {
                telemetryName: "s=Ventil1_Q",
                labelTelemetry: "Ventilateur N°1",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 0,
              },
              {
                telemetryName: "s=Ventil2_Q",
                labelTelemetry: "Ventilateur N°2",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 230,
              },
              {
                telemetryName: "s=plc1_DB_Conso1_HcpTotalMarche",
                labelTelemetry: "Marche1",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 230,
              },
              {
                telemetryName: "s=plc1_DB_Conso1_HcpTotalMarche",
                labelTelemetry: "Marche2",
                serial: "GQKOD91C6LNG9UGM",
                randomValue: 230,
              },
              {
                telemetryName: "s=Plc2_O²",
                randomValue: 19.6,
                unit: "%",
                labelTelemetry: "Oxygène",
                serial: "GQKOD91C6LNG9UGM",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_CO",
                randomValue: 1,
                unit: "ppm",
                labelTelemetry: "co2",
                serial: "GQKOD91C6LNG9UGM",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_NO²",
                randomValue: 0.5,
                unit: "ppm",
                labelTelemetry: "no2",
                serial: "GQKOD91C6LNG9UGM",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_T°S",
                randomValue: 22.2,
                unit: "°C",
                labelTelemetry: "T. Sèche",
                serial: "GQKOD91C6LNG9UGM",
                icon: "seche.svg",
              },
              {
                telemetryName: "s=Plc2_T°H",
                randomValue: 21.9,
                unit: "°C",
                labelTelemetry: "T. Humide",
                serial: "GQKOD91C6LNG9UGM",
                icon: "vites.svg",
              },
            ]}
          />
        </div>
        <Link to="/underground/ventilation">
          <Button className="flex w-fit gap-2" size={"sm"} variant={"link"}>
            <ChevronsDown size={16} />
            <span>Voir plus</span>
          </Button>
        </Link>
      </Card>

      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Underground{" "}
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
      <Card className="flex flex-col gap-4 p-4">
        <h1 className="text-center text-lg font-semibold">
          Performance avancement
        </h1>
        <GroupedHorizontalBarChart
          attributes={{
            telemetries: [
              {
                group: "Arrachement",
                name: "UG_TIR_REALISE",
                color: "#FFDC8C",
                label: "Réalisé",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                group: "Arrachement",
                name: "UG_TIR_PLANIFIE",
                color: "#25A18E",
                label: "Foré",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                group: "Avancement",
                name: "UG_TIR_PLANIFIE_CUMULE",
                color: "#FFDC8C",
                label: "Réalisé",
                serial: "DABF7PAT2G4BAG21",
              },
              {
                group: "Avancement",
                name: "UG_TIR_REALISE_CUMULE",
                color: "#25A18E",
                label: "Planifié",
                serial: "DABF7PAT2G4BAG21",
              },
            ],
          }}
        />
      </Card>
      <Card className="relative flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Cycle de développement (h)
        </h1>
        <div className="h-1 flex-1">
          <D3DonutChart
            attribute={[
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Préparation",
                bfsTelemetry: "UG_TAUX_ARRACHEMENT_PREPARATION_BFS",
                bfsLabelTelemetry: "Préparation",
                color: "#F2E205",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
                nameLabelTelemetry: "Temps de foration",
                bfsTelemetry: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
                bfsLabelTelemetry: "T. foration",
                color: "#F2A104",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                nameTelemetry:
                  "UG_FORATION_TIRS_TEMPS_DE_CHARGEMENT_EXPLOSIF-min",
                nameLabelTelemetry: "Temps de chargement explosif",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_CHARGEMENT_EXPLOSIF_BFS",
                bfsLabelTelemetry: "T. chargement explosif",
                color: "#F25C05",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                nameLabelTelemetry: "Temps de déblayage",
                bfsTelemetry: "UG_FORATION_TIRS_PREPARATION-min",
                bfsLabelTelemetry: "T. déblayage",
                color: "#F20574",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
                nameLabelTelemetry:
                  "Temps retour après le tir et le lavage du front",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_PURGE_ET_SOUFLAGE_BFS",
                bfsLabelTelemetry: "T. Purge et Souflage",
                color: "#05F2C7",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                nameTelemetry:
                  "UG_SOUTENEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT-min",
                nameLabelTelemetry: "Temps de mise en place Souténement",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT_BFS",
                bfsLabelTelemetry: "T. Mise en place Souténement",
                color: "#009AB6",
                serial: "Y1UMITGTHATVAUQI",
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
      <Card className="flex flex-col gap-1 p-4">
        <h1 className="text-center text-lg font-semibold">
          Temps Moyen de cycle (h)
        </h1>
        <div className="h-1 flex-1">
          <LineChartWidget
            selectionDate={false}
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "UG_SUIVI_TEMPS_MOYEN_CYCLE",
                  color: "#78F6EA",
                  label: "Realisé ML/J",
                  serial: "Y1UMITGTHATVAUQI",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col gap-2 px-6 pt-4">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité et utilisation des Engins
        </h3>
        <div className="h-1 flex-1 overflow-y-auto">
          <Engins
            attribute={[
              {
                label: "BOLTEC M10",
                icon: "/truck.svg",
                utilisationTelemetry: "BOLTEC_M10_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "BOLTEC_M10_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "CHARGEUR D'EXPLOSIF TITAN BAC2X350",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "CHARGEUR_D'EXPLOSIF_TITAN_BAC2X350_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "CHARGEUR_D'EXPLOSIF_TITAN_BAC2X350_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "CHARGEUSE CAT R1700 14T N°1",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N1_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N1_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "CHARGEUSE CAT R1700 14T N°2",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N2_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N2_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "CHARIOT ELEVATEUR",
                icon: "/truck.svg",
                utilisationTelemetry: "CHARIOT_ELEVATEUR_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "CHARIOT_ELEVATEUR_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "CHARGEUSE CAT R1700 14T N°2",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N2_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "CHARGEUSE_CAT_R1700_14T_N2_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "COMPRESSEUR ATLAS COPCO XAVS600 PACE SQE N°1",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "COMPRESSEUR_ATLAS_COPCO_XAVS600_PACE_SQE_N1_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "COMPRESSEUR_ATLAS_COPCO_XAVS600_PACE_SQE_N1_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "COMPRESSEUR ATLAS COPCO XAVS600 PACE SQE N°2",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "COMPRESSEUR_ATLAS_COPCO_XAVS600_PACE_SQE_N2_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "COMPRESSEUR_ATLAS_COPCO_XAVS600_PACE_SQE_N2_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "DUMPER CAT AD 45T N°1",
                icon: "/truck.svg",
                utilisationTelemetry: "DUMPER_CAT_AD_45T_N1_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "DUMPER_CAT_AD_45T_N1_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "DUMPER CAT AD 45T N°2",
                icon: "/truck.svg",
                utilisationTelemetry: "DUMPER_CAT_AD_45T_N2_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "DUMPER_CAT_AD_45T_N2_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "GROUPE ELECTROGENE DEUTZ DPS 450 N°1",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N1_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N1_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "GROUPE ELECTROGENE DEUTZ DPS 450 N°2",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N2_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N2_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "GROUPE ELECTROGENE DEUTZ DPS 450 N°3",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N3_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "GROUPE_ELECTROGENE_DEUTZ_DPS_450_N3_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "MECANISE TIZERT JUMBO EPIROC T1D N°1",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "MECANISE_TIZERT_JUMBO_EPIROC_T1D_N1_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "MECANISE_TIZERT_JUMBO_EPIROC_T1D_N1_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "MECANISE TIZERT JUMBO M20",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "MECANISE_TIZERT_JUMBO_M20_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "MECANISE_TIZERT_JUMBO_M20_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "PLATEFORME A TABLE ELEVATRICE TITAN BMP2X3				",
                icon: "/truck.svg",
                utilisationTelemetry:
                  "PLATEFORME_A_TABLE_ELEVATRICE_TITAN_BMP2X3_TAUX_D'UTILISATION",
                disponibilliteTelemetry:
                  "PLATEFORME_A_TABLE_ELEVATRICE_TITAN_BMP2X3_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "SIMBA",
                icon: "/truck.svg",
                utilisationTelemetry: "SIMBA_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "SIMBA_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "TRACTEUR",
                icon: "/truck.svg",
                utilisationTelemetry: "TRACTEUR_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "TRACTEUR_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "VEHICULE  MUV11",
                icon: "/truck.svg",
                utilisationTelemetry: "VEHICULE__MUV11_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "VEHICULE__MUV11_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
              {
                label: "VEHICULE  MUV5",
                icon: "/truck.svg",
                utilisationTelemetry: "VEHICULE__MUV5_TAUX_D'UTILISATION",
                disponibilliteTelemetry: "VEHICULE__MUV5_PERC_DISPO",
                serial: "Y1UMITGTHATVAUQI",
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
