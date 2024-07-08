import { Card } from "@/components/card";
import { ProgressAccumulation } from "../_components/progress-accumulation";
import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import ProgressMultiple from "@/components/progress-multiple";
import BarLineWidget from "@/components/bar-line-widget";

export default function HomeDashboard() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[76px] grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-12 lg:gap-4 xl:grid-cols-[repeat(15,minmax(0,1fr))] 2xl:auto-rows-[92px]">
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Production Roche Cumulée annuelle (t)
        </h1>
        <div className="h-1 flex-1">
          <BarLineWidget
            attributes={{
              stacked: true,
              telemetries: [
                {
                  name: "CUMUL_PLANIF_TOT",
                  unit: "T",
                  color: "#FF5AF1",
                  label: "Planifié (mensuelle)",
                  serial: "0AS9Y1JCHRS26P9D",
                  type: "bar",
                },
                {
                  name: "CUMUL_REAL_TOT",
                  unit: "T",
                  color: "#FFDC8C",
                  label: "Réalisé (mensuelle)",
                  serial: "0AS9Y1JCHRS26P9D",
                  type: "bar",
                },
                {
                  name: "CUMUL_PLANIF_TOT_TOT",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Planifié (Cumulé)",
                  serial: "0AS9Y1JCHRS26P9D",
                  type: "line",
                },
                {
                  name: "CUMUL_REAL_TOT_TOT",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Réalisé (Cumulé)",
                  serial: "0AS9Y1JCHRS26P9D",
                  type: "line",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-5">
        <h1 className="text-center text-lg font-semibold">
          Production Roche Cumulée du mois ​(t)
        </h1>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "EST_PLANIFIE_ROCHE",
                  color: "#78F6EA",
                  label: "Cumulative planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                  accumulated: true,
                },
                {
                  area: true,
                  name: "EST_REALISE_ROCHE_Ton",
                  color: "#B98EFF",
                  label: "Cumulative realisé",
                  serial: "D5KP29KL463AZXWE",
                  accumulated: true,
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
                  name: "EST_PLANIFIE_ROCHE",
                  unit: "T",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                },
                {
                  name: "EST_REALISE_ROCHE_Ton",
                  unit: "T",
                  color: "#B98EFF",
                  label: "Realisé",
                  serial: "D5KP29KL463AZXWE",
                },
              ],
            }}
          />
        </div>
      </Card>

      <Card className="col-span-full row-span-3 flex flex-col px-2 py-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-base font-semibold 2xl:text-lg">
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
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
        <h1 className="text-center text-lg font-semibold">
          Production Roche par Fosse (t)
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
      <Card className="col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 xl:col-span-4">
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
                    name: "EST_REALISE_ORE_HG_SULF",
                    serial: "D5KP29KL463AZXWE",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "EST_REALISE_ORE_MG_SULF",
                    serial: "D5KP29KL463AZXWE",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "EST_REALISE_ORE_LG_SULF",
                    serial: "D5KP29KL463AZXWE",
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
                    serial: "D5KP29KL463AZXWE",
                    label: "HG",
                    color: "#FFDC8C",
                  },
                  {
                    name: "EST_REALISE_ORE_MG_OXYD",
                    serial: "D5KP29KL463AZXWE",
                    label: "MG",
                    color: "#42F5FF",
                  },
                  {
                    name: "EST_REALISE_ORE_LG_OXYD",
                    serial: "D5KP29KL463AZXWE",
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
        <h1 className="text-center text-lg font-semibold">Foration (ml/J)</h1>
        <div className="flex-1">
          <LineChartWidget
            moyenne={["EST_REALISE_FORATION", "EST_PLANIFIE_FORATION"]}
            attributes={{
              telemetries: [
                {
                  area: false,
                  name: "EST_PLANIFIE_FORATION",
                  color: "#78F6EA",
                  label: "Planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                },
                {
                  area: true,
                  name: "EST_REALISE_FORATION",
                  color: "#B98EFF",
                  label: "Réalise",
                  serial: "D5KP29KL463AZXWE",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="col-span-3 row-span-3 flex flex-col gap-3 p-4 lg:col-span-6 xl:col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engins pit EST
        </h3>
        <MultiProgressWidget
          attributes={{
            telemetries: [
              {
                name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (1)",
                serial: "LFNP6A1HB923GDV2",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc  T45 (2)",
                serial: "LFNP6A1HB923GDV2",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
                color: "#ecc94b",
                label: "Foreuse Epiroc T35 ",
                serial: "LFNP6A1HB923GDV2",
                icon: "foreuse.svg",
              },
              {
                name: "GMC_PELLE_CAT374_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (1)",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT374_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (2) ",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT374_03_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 374 (3)",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT350_01_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350 (1)",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT350_02_DISPO",
                color: "#ecc94b",
                label: "Pelle CAT 350",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_PELLE_CAT_0000_01",
                color: "#ecc94b",
                label: " Pelle CAT ",
                serial: "LFNP6A1HB923GDV2",
                icon: "pelle.svg",
              },
              {
                name: "GMC_CAMIONS_SCANIA50T_GROUPE",
                color: "#ecc94b",
                label: "Camions Scania 50t (15)",
                serial: "LFNP6A1HB923GDV2",
                icon: "camions.svg",
              },
              {
                name: "GMC_DOZER_D8_01",
                color: "#ecc94b",
                label: "D8 ",
                serial: "LFNP6A1HB923GDV2",
                icon: "d8.svg",
              },
              {
                name: "GMC_DOZER_D8_02",
                color: "#ecc94b",
                label: "D8 (2)",
                serial: "LFNP6A1HB923GDV2",
                icon: "d8.svg",
              },
              {
                name: "GMC_NIVELEUSE_01",
                color: "#ecc94b",
                label: "Niveleuse ",
                serial: "LFNP6A1HB923GDV2",
                icon: "niveleuse.svg",
              },
              {
                name: "GMC_COMPACTEUR_01",
                color: "#ecc94b",
                label: "Compacteur",
                serial: "LFNP6A1HB923GDV2",
                icon: "compacteuse.svg",
              },
              {
                name: "GMC_CITERNE_01",
                color: "#ecc94b",
                label: "Citerne d'arrosage ",
                serial: "LFNP6A1HB923GDV2",
                icon: "citerne.svg",
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
