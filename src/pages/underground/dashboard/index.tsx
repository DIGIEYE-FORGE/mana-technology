import { useAppContext } from "@/Context";
import BarLineWidget from "@/components/bar-line-widget";
import { Card } from "@/components/card";
// import { ConeChart } from "@/components/cone-chart";
import { D3DonutChart } from "@/components/d3-donut chart";
import Engins from "@/components/engins";
import LineChartWidget from "@/components/line-chart-widget";
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
          Avancement Cumulé annuel (ml)
        </h1>
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
                  serial: "HTCBJYTZC333HN7C",
                  type: "bar",
                },
                {
                  name: "UG_SUIVI_REALISE",
                  unit: "T",
                  color: "#FFDC8C",
                  label: "Réalisé",
                  serial: "HTCBJYTZC333HN7C",
                  type: "bar",
                },
                {
                  name: "UG_SUIVI_AVANCEMENT_PLANIFIE_CUMUL_OFFRE_INITIALE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié (Cumulé) - Offre initiale",
                  serial: "HTCBJYTZC333HN7C",
                  type: "line",
                },
                {
                  name: "UG_SUIVI_ANNUEL_AVANCEMENT_REALISE_CUMUL",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Réalisé (Cumulé)",
                  serial: "HTCBJYTZC333HN7C",
                  type: "line",
                },
                {
                  name: "UG_SUIVI_ANNUEL_AVANCEMENT_FORECAST_CUMUL",
                  unit: "T",

                  color: "#fab006",
                  label: "Forecast (Cumulé)",
                  serial: "HTCBJYTZC333HN7C",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement Cumulé mensuel (ml)
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <LineChartWidget
            yAxis="one"
            selectionDate={true}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_METRES_PLANIFIE",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "line",
                  accumulated: true,
                },
                {
                  name: "UG_METRES_REALISE_TOTAL",
                  color: "#B98EFF",
                  label: "Réalisé",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "line",
                  accumulated: true,
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col p-4">
        <h1 className="text-center text-lg font-semibold">
          Avancement journalier (ml/j)
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <BarLineWidget
            moyenne={["UG_METRES_PLANIFIE", "UG_METRES_REALISE_TOTAL"]}
            yAxis="one"
            dateRange={dateRange}
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_METRES_PLANIFIE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "bar",
                },
                {
                  name: "UG_METRES_REALISE_TOTAL",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Réalisé",
                  serial: "WF5CW7A4T9R9VU9F",
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
                telemetryName: "s=plc1_DB_Conso1_kWhTotale",
                labelTelemetry: "Energie1",
                serial: "0TKJJWS26V62QV15",
                randomValue: 104,
                unit: "kWh",
              },
              {
                telemetryName: "s=plc1_DB_Conso2_kWhTotale",
                labelTelemetry: "Energie2",
                serial: "0TKJJWS26V62QV15",
                randomValue: 106,
                unit: "kWh",
              },
              {
                telemetryName: "s=Ventil1_Q",
                labelTelemetry: "Ventilateur N°1",
                serial: "0TKJJWS26V62QV15",
                randomValue: 0,
              },
              {
                telemetryName: "s=Ventil2_Q",
                labelTelemetry: "Ventilateur N°2",
                serial: "0TKJJWS26V62QV15",
                randomValue: 230,
              },
              {
                telemetryName: "s=plc1_DB_Conso1_HcpTotalMarche",
                labelTelemetry: "Marche1",
                serial: "0TKJJWS26V62QV15",
                randomValue: 230,
              },
              {
                telemetryName: "s=plc1_DB_Conso2_HcpTotalMarche",
                labelTelemetry: "Marche2",
                serial: "0TKJJWS26V62QV15",
                randomValue: 230,
              },
              {
                telemetryName: "s=Plc2_O2",
                randomValue: 19.6,
                unit: "%",
                labelTelemetry: "Oxygène",
                serial: "0TKJJWS26V62QV15",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_CO",
                randomValue: 1,
                unit: "ppm",
                labelTelemetry: "CO",
                serial: "0TKJJWS26V62QV15",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_NO2",
                randomValue: 0.5,
                unit: "ppm",
                labelTelemetry: "NO2",
                serial: "0TKJJWS26V62QV15",
                icon: "co2.svg",
              },
              {
                telemetryName: "s=Plc2_ToS",
                randomValue: 22.2,
                unit: "°C",
                labelTelemetry: "T. Sèche",
                serial: "0TKJJWS26V62QV15",
                icon: "seche.svg",
              },
              {
                telemetryName: "s=Plc2_ToH",
                randomValue: 21.9,
                unit: "°C",
                labelTelemetry: "T. Humide",
                serial: "0TKJJWS26V62QV15",
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
        <h1 className="text-center text-lg font-semibold">Nombre de Tirs </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <div className="flex-1">
          <BarLineWidget
            ciel={false}
            dateRange={dateRange}
            hideTooltip
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_TIR_REALISE",
                  unit: "T",
                  color: "#FFDC8C",
                  label: "Réalisé",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "bar",
                },
                {
                  name: "UG_TIR_PLANIFIE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "bar",
                },
                {
                  name: "UG_TIR_PLANIFIE_CUMULE",
                  unit: "T",

                  color: "#B98EFF",
                  label: "Planifié (Cumulé)",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "line",
                },
                {
                  name: "UG_TIR_REALISE_CUMULE",
                  unit: "T",
                  color: "#FF5AF1",
                  label: "Réalisé (Cumulé)",
                  serial: "WF5CW7A4T9R9VU9F",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex flex-col gap-4 p-4">
        <h1 className="text-center text-lg font-semibold">Arrachement (%)</h1>
        <div className="flex-1">
          <BarLineWidget
            dateRange={dateRange}
            ciel={false}
            correction={{
              UG_TAUX_ARRACHEMENT_ARRACHEMENT: 100,
            }}
            // moyenne={["UG_METRES_PLANIFIE", "UG_METRES_REALISE_TOTAL"]}
            yAxis="one"
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "UG_TAUX_ARRACHEMENT_ARRACHEMENT",
                  unit: "%",
                  color: "#78F6EA",
                  label: "Arrachelment",
                  serial: "Y1UMITGTHATVAUQI",
                  type: "bar",
                },
              ],
            }}
          />
        </div>
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
                serial: "34FH0TN9QL2JXCP2",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
                nameLabelTelemetry: "Foration",
                bfsTelemetry: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
                bfsLabelTelemetry: "Foration",
                color: "#F2A104",
                serial: "34FH0TN9QL2JXCP2",
              },
              {
                nameTelemetry:
                  "UG_FORATION_TIRS_TEMPS_DE_CHARGEMENT_EXPLOSIF-min",
                nameLabelTelemetry: "Ch. explosif",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_CHARGEMENT_EXPLOSIF_BFS",
                bfsLabelTelemetry: "Ch. explosif",
                color: "#F25C05",
                serial: "34FH0TN9QL2JXCP2",
              },
              {
                nameTelemetry: "UG_DEBLAYAGE_TEMPS_DE_DEBLAYAGE-min",
                nameLabelTelemetry: "Déblayage",
                bfsTelemetry: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
                bfsLabelTelemetry: "Déblayage",
                color: "#F20574",
                serial: "34FH0TN9QL2JXCP2",
              },
              {
                nameTelemetry: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
                nameLabelTelemetry: "Purge et Souflage",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_PURGE_ET_SOUFLAGE_BFS",
                bfsLabelTelemetry: "Purge et Souflage",
                color: "#05F2C7",
                serial: "34FH0TN9QL2JXCP2",
              },
              {
                nameTelemetry:
                  "UG_SOUTENEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT-min",
                nameLabelTelemetry: "Souténement",
                bfsTelemetry:
                  "UG_TAUX_ARRACHEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT_BFS",
                bfsLabelTelemetry: "Souténement",
                color: "#009AB6",
                serial: "34FH0TN9QL2JXCP2",
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
                  label: "Realisé",
                  serial: "Y1UMITGTHATVAUQI",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full flex flex-col gap-2 px-6 pt-4">
        <h3 className="text-center text-lg font-semibold">
          Performance Engins
        </h3>
        <div className="h-1 flex-1 overflow-y-auto">
          <Engins
            selectedWithDate={true}
            attribute={[
              {
                label: "BOLTEC M10",
                icon: "/iconesEngin/Bottec M10 _2.png",
                utilisationTelemetry: "UG_BOLTEC_M10_TU",
                disponibilliteTelemetry: "UG_BOLTEC_M10_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "TITAN BAC2X350",
                icon: "iconesEngin/titan_MUV5_et_MUV1-removebg-preview.png",
                utilisationTelemetry: "UG_CHARG_EXP_TITAN_BAC2X350_TU",
                disponibilliteTelemetry: "UG_CHARG_EXP_TITAN_BAC2X350_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "R1700 - 01",
                icon: "iconesEngin/Chargeur_CAT_R1700-removebg-preview.png",
                utilisationTelemetry: "UG_CHARG_CAT_R1700_14T_1_TU",
                disponibilliteTelemetry: "UG_CHARG_CAT_R1700_14T_1_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "R1700 - 02",
                icon: "iconesEngin/Chargeur_CAT_R1700-removebg-preview.png",
                utilisationTelemetry: "UG_CHARG_CAT_R1700_14T_2_TU",
                disponibilliteTelemetry: "UG_CHARG_CAT_R1700_14T_2_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "CHARIOT ELEVATEUR",
                icon: "iconesEngin/chariot elevateur.svg",
                utilisationTelemetry: "UG_CHARIOT_ELEVATEUR_TU",
                disponibilliteTelemetry: "UG_CHARIOT_ELEVATEUR_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "COMPRESSEUR SQE 01",
                icon: "iconesEngin/Chargeur_CAT_R1700-removebg-preview.png",
                utilisationTelemetry: "UG_COMP_ATLAS_COP_1_TU",
                disponibilliteTelemetry: "UG_COMP_ATLAS_COP_1_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "COMPRESSEUR SQE 02",
                icon: "iconesEngin/compressor.svg",
                utilisationTelemetry: "UG_COMP_ATLAS_COP_2_TU",
                disponibilliteTelemetry: "UG_COMP_ATLAS_COP_2_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "CAT AD 45T 01",
                icon: "iconesEngin/compressor.svg",
                utilisationTelemetry: "UG_DUMP_CAT_1_TU",
                disponibilliteTelemetry: "UG_DUMP_CAT_1_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "CAT AD 45T 02",
                icon: "iconesEngin/Dumper_CAT_AD45-removebg-preview.png",
                utilisationTelemetry: "UG_DUMP_CAT_2_TU",
                disponibilliteTelemetry: "UG_DUMP_CAT_2_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "DEUTZ DPS 450 01",
                icon: "iconesEngin/Dumper_CAT_AD45-removebg-preview.png",
                utilisationTelemetry: "UG_ELEC_1_TU",
                disponibilliteTelemetry: "UG_ELEC_1_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "DEUTZ DPS 450 02",
                icon: "truck.svg",
                utilisationTelemetry: "UG_ELEC_2_TU",
                disponibilliteTelemetry: "UG_ELEC_2_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "DEUTZ DPS 450 03",
                icon: "iconesEngin/Groupe_électrogène_DEUTZ-removebg-preview.png",
                utilisationTelemetry: "UG_ELEC_3_TU",
                disponibilliteTelemetry: "UG_ELEC_3_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "JUMBO T1D 01",
                icon: "iconesEngin/Epiroc_Jumbo_M20-removebg-preview.png",
                utilisationTelemetry: "UG_MEC_JUM_1_TU",
                disponibilliteTelemetry: "UG_MEC_JUM_1_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "JUMBO M20",
                icon: "iconesEngin/Epiroc_Jumbo_M20-removebg-preview.png",
                utilisationTelemetry: "UG_MEC_JUM_M20_TU",
                disponibilliteTelemetry: "UG_MEC_JUM_M20_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "TITAN BMP2X3",
                icon: "iconesEngin/Table_elevatrice-removebg-preview.png",
                utilisationTelemetry: "UG_PLAT_TU",
                disponibilliteTelemetry: "UG_PLAT_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "SIMBA",
                icon: "truck.svg",
                utilisationTelemetry: "UG_SIMBA_TU",
                disponibilliteTelemetry: "UG_SIMBA_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "TRACTEUR",
                icon: "truck.svg",
                utilisationTelemetry: "UG_TRAC_TU",
                disponibilliteTelemetry: "UG_TRAC_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "VEHICULE  MUV11",
                icon: "/iconesEngin/titan_MUV5_et_MUV1-removebg-preview.png",
                utilisationTelemetry: "UG_MUV11_TU",
                disponibilliteTelemetry: "UG_MUV11_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
              {
                label: "VEHICULE  MUV5",
                icon: "iconesEngin/titan_MUV5_et_MUV1-removebg-preview.png",
                utilisationTelemetry: "UG_MUV5_TU",
                disponibilliteTelemetry: "UG_MUV5_TD",
                serial: "1ET8MCQDVOPFLVBX",
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
