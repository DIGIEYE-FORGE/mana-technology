import { Card } from "@/components/card";
import { UpBar } from "./components/upbar";
import { useFrame } from "@react-three/fiber";
import { ModelWidget } from "./components/medel-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressAccumulation } from "@/components/progress-accumulation";
import ProgressMultiple from "@/components/progress-multiple";
import Engins from "@/components/engins";
import { D3DonutChart } from "@/components/d3-donut chart";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

export function RotatingModel({
  modelRef,
  isRotating,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelRef: any;
  isRotating?: boolean;
}) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isRotating ? 0.002 : 0;
    }
  });

  return null;
}

export default function GoliaPage() {
  return (
    <main
      className="relative flex flex-col overflow-x-hidden pb-6"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <UpBar />
      <div className="isolate grid grid-flow-dense auto-rows-[19.5rem] gap-4 p-6 md:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 [&>*]:relative">
        <Card className="relative z-10 col-span-3 flex flex-col p-4">
          <h1 className="text-center text-lg font-semibold">
            Stérile / Minerai (t)
          </h1>
          <div className="flex-1">
            <BarChartWidget
              attributes={{
                telemetries: [
                  {
                    name: "EST_PLANIFIE_MINERAI",
                    unit: "T",
                    color: "#FE22EB",
                    label: "Minerai Planifié",
                    serial: "JZVATMKQ1A8DA2P1",
                  },
                  {
                    name: "EST_REALISE_MINERAI",
                    unit: "T",
                    color: "#B98EFF",
                    label: "Minerai Realisé",
                    serial: "D5KP29KL463AZXWE",
                  },
                  {
                    name: "EST_PLANIFIE_STERILE",
                    unit: "T",
                    color: "#FEC33A",
                    label: "Stérile Planifié",
                    serial: "JZVATMKQ1A8DA2P1",
                  },
                  {
                    name: "EST_REALISE_STERILE",
                    unit: "T",
                    color: "#78F6EA",
                    label: "Stérile Realisé",
                    serial: "D5KP29KL463AZXWE",
                  },
                ],
              }}
            />
          </div>
        </Card>
        <ModelWidget className="z-1! col-span-6 row-span-2" />
        <Card className="col-span-3 flex flex-col p-4">
          <h1 className="text-center text-lg font-semibold">
            Évolution Production Cumulée (t)
          </h1>
          <div className="flex-1">
            <LineChartWidget
              attributes={{
                telemetries: [
                  {
                    area: false,
                    name: "EST_PLANIFIE_ROCHE",
                    color: "#78F6EA",
                    label: "Planifié (Cumulé)",
                    serial: "JZVATMKQ1A8DA2P1",
                    accumulated: true,
                  },
                  {
                    accumulated: true,
                    area: true,
                    name: "EST_REALISE_ROCHE_Ton",
                    color: "#B98EFF",
                    label: "Réalisé (Cumulé)",
                    serial: "D5KP29KL463AZXWE",
                  },
                ],
              }}
            />
          </div>
        </Card>
        <Card className="col-span-3 flex flex-col p-4">
          <h1 className="text-center text-lg font-semibold">
            Évolution de la Production vs Planifié
          </h1>
          <ProgressAccumulation
            attributes={{
              targetSerial: "JZVATMKQ1A8DA2P1",
              progressSerial: "D5KP29KL463AZXWE",
              progressColor: "#EBC94A",
              currentTargetColor: "#78F6EA",
              progressTelemetryName: "EST_REALISE_ROCHE_CUMUL_Ton",
              accumulationTelemetryName: "EST_PLANIFIE_ROCHE_CUMUL",
            }}
          />
        </Card>
        <Card className="col-span-3 p-4">
          <h1 className="text-center text-lg font-semibold">
            Production par qualité (t)
          </h1>
          <div className="flex flex-1 flex-col p-4">
            <ProgressMultiple
              attributes={[
                {
                  title: "Sulfures (HG,MG,LG)",
                  telemetries: [
                    {
                      name: "SUD4_REALISEORE_HG_SULF",
                      serial: "PI6PQ8SEZC4BWRP3",
                      label: "HG",
                      color: "#FF5C5C",
                    },
                    {
                      name: "SUD4_REALISE_ORE_MG_SULF",
                      serial: "PI6PQ8SEZC4BWRP3",
                      label: "MG",
                      color: "#8AFF8A",
                    },
                    {
                      name: "SUD4_REALISE_ORE_LG_SULF",
                      serial: "PI6PQ8SEZC4BWRP3",
                      label: "LG",
                      color: "#5C5CFF",
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
                      color: "#FF5C5C",
                    },
                    {
                      name: "SUD4_REALISE_ORE_MG_OXYD",
                      serial: "PI6PQ8SEZC4BWRP3",
                      label: "MG",
                      color: "#8AFF8A",
                    },
                    {
                      name: "SUD4_REALISE_ORE_LG_OXYD",
                      serial: "PI6PQ8SEZC4BWRP3",
                      label: "LG",
                      color: "#5C5CFF",
                    },
                  ],
                },
              ]}
            />
          </div>
        </Card>
        <Card className="col-span-3 flex flex-col p-4">
          <h1 className="text-center text-lg font-semibold">
            Production Journalière (t)
          </h1>
          <div className="flex-1">
            <BarChartWidget
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
                ],
              }}
            />
          </div>
        </Card>
        <Card className="col-span-3 flex flex-col p-4">
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
                  serial: "GHZIN57J7EOVXG0C",
                  bfsValue: 1.9,
                },
                {
                  nameTelemetry: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
                  nameLabelTelemetry: "Foration",
                  bfsTelemetry: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
                  bfsLabelTelemetry: "Foration",
                  color: "#F2A104",
                  serial: "GHZIN57J7EOVXG0C",
                  bfsValue: 4.3,
                },
                {
                  nameTelemetry:
                    "UG_FORATION_TIRS_TEMPS_DE_CHARGEMENT_EXPLOSIF-min",
                  nameLabelTelemetry: "Ch. explosif",
                  bfsTelemetry:
                    "UG_TAUX_ARRACHEMENT_TEMPS_DE_CHARGEMENT_EXPLOSIF_BFS",
                  bfsLabelTelemetry: "Ch. explosif",
                  color: "#F25C05",
                  serial: "GHZIN57J7EOVXG0C",
                  bfsValue: 2,
                },
                {
                  nameTelemetry: "UG_DEBLAYAGE_TEMPS_DE_DEBLAYAGE-min",
                  nameLabelTelemetry: "Déblayage",
                  bfsTelemetry: "UG_TAUX_ARRACHEMENT_TEMPS_DE_DEBLAYAGE_BFS",
                  bfsLabelTelemetry: "Déblayage",
                  color: "#F20574",
                  serial: "GHZIN57J7EOVXG0C",
                  bfsValue: 3.9,
                },
                {
                  nameTelemetry: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
                  nameLabelTelemetry: "Purge et Souflage",
                  // bfsTelemetry:
                  //   "UG_TAUX_ARRACHEMENT_TEMPS_DE_PURGE_ET_SOUFLAGE_BFS",
                  // bfsLabelTelemetry: "Purge et Souflage",
                  color: "#05F2C7",
                  serial: "GHZIN57J7EOVXG0C",
                },
                {
                  nameTelemetry:
                    "UG_SOUTENEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT-min",
                  nameLabelTelemetry: "Soutènement",
                  bfsTelemetry:
                    "UG_TAUX_ARRACHEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT_BFS",
                  bfsLabelTelemetry: "Soutènement",
                  color: "#009AB6",
                  serial: "GHZIN57J7EOVXG0C",
                  bfsValue: 6.3,
                },
              ]}
            />
          </div>
          <Link
            to="/underground/tree"
            className="absolute bottom-5 flex w-full items-center justify-center"
          >
            <Button
              className="flex h-5 w-fit gap-2"
              size={"sm"}
              variant={"link"}
            >
              <ChevronsDown size={16} />
              <span className="text-center">Voir plus</span>
            </Button>
          </Link>
        </Card>
        <Card className="col-span-3"></Card>
        <Card className="col-span-3 flex flex-col gap-2 px-6 pt-4">
          <h3 className="text-center text-lg font-semibold">
            Performance Engins
          </h3>
          <div className="h-1 flex-1 overflow-y-auto">
            <Engins
              selectedWithDate={true}
              attribute={[
                {
                  label: "BOLTEC M10",
                  icon: "JUMBO M20.png",
                  utilisationTelemetry: "UG_BOLTEC_M10_TU",
                  disponibilliteTelemetry: "UG_BOLTEC_M10_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "TITAN BAC2X350",
                  icon: "JUMBO T1.png",
                  utilisationTelemetry: "UG_CHARG_EXP_TITAN_BAC2X350_TU",
                  disponibilliteTelemetry: "UG_CHARG_EXP_TITAN_BAC2X350_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "R1700 - 01",
                  icon: "R17000.png",
                  utilisationTelemetry: "UG_CHARG_CAT_R1700_14T_1_TU",
                  disponibilliteTelemetry: "UG_CHARG_CAT_R1700_14T_1_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "R1700 - 02",
                  icon: "R17000.png",
                  utilisationTelemetry: "UG_CHARG_CAT_R1700_14T_2_TU",
                  disponibilliteTelemetry: "UG_CHARG_CAT_R1700_14T_2_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "CHARIOT ELEVATEUR",
                  icon: "Elévateur électrique.png",
                  utilisationTelemetry: "UG_CHARIOT_ELEVATEUR_TU",
                  disponibilliteTelemetry: "UG_CHARIOT_ELEVATEUR_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "COMPRESSEUR SQE 01",
                  icon: "DEUTZ DPS 450.png",
                  utilisationTelemetry: "UG_COMP_ATLAS_COP_1_TU",
                  disponibilliteTelemetry: "UG_COMP_ATLAS_COP_1_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "COMPRESSEUR SQE 02",
                  icon: "DEUTZ DPS 450.png",
                  utilisationTelemetry: "UG_COMP_ATLAS_COP_2_TU",
                  disponibilliteTelemetry: "UG_COMP_ATLAS_COP_2_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "CAT AD 45T 01",
                  icon: "machine-06.png",
                  utilisationTelemetry: "UG_DUMP_CAT_1_TU",
                  disponibilliteTelemetry: "UG_DUMP_CAT_1_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "CAT AD 45T 02",
                  icon: "machine-06.png",
                  utilisationTelemetry: "UG_DUMP_CAT_2_TU",
                  disponibilliteTelemetry: "UG_DUMP_CAT_2_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "DEUTZ DPS 450 01",
                  icon: "DEUTZ DPS 450.png",
                  utilisationTelemetry: "UG_ELEC_1_TU",
                  disponibilliteTelemetry: "UG_ELEC_1_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "DEUTZ DPS 450 02",
                  icon: "DEUTZ DPS 450.png",
                  utilisationTelemetry: "UG_ELEC_2_TU",
                  disponibilliteTelemetry: "UG_ELEC_2_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "DEUTZ DPS 450 03",
                  icon: "DEUTZ DPS 450.png",
                  utilisationTelemetry: "UG_ELEC_3_TU",
                  disponibilliteTelemetry: "UG_ELEC_3_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "JUMBO T1D 01",
                  icon: "iconesEngin/Epiroc_Jumbo_M20-removebg-preview.png",
                  utilisationTelemetry: "UG_MEC_JUM_1_TU",
                  disponibilliteTelemetry: "UG_MEC_JUM_1_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "JUMBO M20",
                  icon: "iconesEngin/Epiroc_Jumbo_M20-removebg-preview.png",
                  utilisationTelemetry: "UG_MEC_JUM_M20_TU",
                  disponibilliteTelemetry: "UG_MEC_JUM_M20_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "TITAN BMP2X3",
                  icon: "ANFO3000.png",
                  utilisationTelemetry: "UG_PLAT_TU",
                  disponibilliteTelemetry: "UG_PLAT_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "SIMBA",
                  icon: "SIMBA S7.png",
                  utilisationTelemetry: "UG_SIMBA_TU",
                  disponibilliteTelemetry: "UG_SIMBA_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "TRACTEUR",
                  icon: "tractor.png",
                  utilisationTelemetry: "UG_TRAC_TU",
                  disponibilliteTelemetry: "UG_TRAC_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "VEHICULE  MUV11",
                  icon: "/iconesEngin/titan_MUV5_et_MUV1-removebg-preview.png",
                  utilisationTelemetry: "UG_MUV11_TU",
                  disponibilliteTelemetry: "UG_MUV11_TD",
                  serial: "8S287JI0CLP38N38",
                },
                {
                  label: "VEHICULE  MUV5",
                  icon: "iconesEngin/titan_MUV5_et_MUV1-removebg-preview.png",
                  utilisationTelemetry: "UG_MUV5_TU",
                  disponibilliteTelemetry: "UG_MUV5_TD",
                  serial: "8S287JI0CLP38N38",
                },
              ]}
            />
          </div>
        </Card>
      </div>
    </main>
  );
}
