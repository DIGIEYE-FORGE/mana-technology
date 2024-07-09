import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressCircle } from "@/components/progress-circle";
import WidgetLabel from "@/components/widget-label";

import { ScrollArea } from "@/components/ui/scroll-area";
import { columns } from "./_components/production-table/columns";
import { DataTable } from "@/components/data-table";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { LastTelemetry } from "@/utils/types";

const Explosivesconsumption = [
  {
    title: "TGMC",
    data: [
      { label: "Monthly rolled explosives", value: "3826 (25kg/case)" },
      { label: "Monthly rolled explosives", value: "3826 (25kg/case)" },
    ],
  },
  {
    title: "Mining Dept",
    data: [
      { label: "Monthly rolled explosives", value: "157 (25kg/case)" },
      { label: "Monthly emulsion explosives", value: "211552 (kg)" },
      { label: "Annual rolled explosives", value: "1413 (25kg/case)" },
      { label: "Annual emulsion explosives", value: "1876467 (kg)" },
    ],
  },
  {
    title: "JHCX",
    data: [
      { label: "Monthly rolled explosives", value: "386 (25kg/case)" },
      { label: "Monthly emulsion explosives", value: "59820 (kg)" },
      { label: "Monthly emulsion explosives", value: "40 (25kg/case)" },
      { label: "Annual rolled explosives", value: "4372 (25kg/case)" },
      { label: "Annual emulsion explosives", value: "703070 (kg)" },
      { label: "Annual emulsion explosives", value: "1401 (25kg/case)" },
    ],
  },
];

export default function DashboardPage() {
  const { backendApi } = useAppContext();

  const telemetriesNames: string[] = [
    "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
    "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
    "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
    "GMC_PELLE_CAT374_01_DISPO",
    "GMC_PELLE_CAT374_02_DISPO",
    "GMC_PELLE_CAT374_03_DISPO",
    "GMC_PELLE_CAT350_01_DISPO",
    "GMC_PELLE_CAT350_02_DISPO",
    "GMC_CAMIONS_SCANIA50T_GROUPE",
    "GMC_DOZER_D8_01",
    "GMC_DOZER_D8_02",
    "GMC_NIVELEUSE_01",
    "GMC_COMPACTEUR_01",
    "GMC_COMPACTEUR_01",
    "GMC_CITERNE_01",
  ];

  const { data, isLoading } = useSWR("myte", async () => {
    const res = await backendApi.findMany<LastTelemetry>("lastTelemetry", {
      where: {
        name: {
          in: telemetriesNames,
        },
      },
    });
    return res;
  });

  if (isLoading) return <div>Loading...</div>;
  const telemetries = data?.results || [];

  const ProductionEquipment = telemetries.map((telemetry) => {
    return {
      id: telemetry.id,
      equipment: telemetry.name
        .split("_")
        .join(" ")
        .split("GMC")[1]
        .split("DISPO")[0],
      disponibility: telemetry.value,
      date: telemetry.createdAt,
      status: true,
    };
  });

  return (
    <main className="grid h-fit w-full gap-4 lg:grid-cols-2 3xl:grid-cols-[480px,1fr,540px] [&>*]:min-h-[10rem]">
      <Card className="flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-bold text-white">
          Safety hazard analysis
        </h1>

        <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              className="font-bold"
              progress={50}
              backgroundColor="#6a5cc9"
              gradientStartColor="#B98EFF"
              gradientEndColor="#803BF2"
            />

            <span className="text-sm">Safety hazards</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              className="font-bold"
              progress={88.34}
              backgroundColor="#4697bd"
              gradientStartColor="#78F6EA"
              gradientEndColor="#40A097"
            />

            <span className="text-sm">Rectifications</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              className="font-bold"
              progress={33.57}
              backgroundColor="#91806e"
              gradientStartColor="#FFDC8C"
              gradientEndColor="#E19400"
            />

            <span className="text-sm">To be rectified</span>
          </div>
        </div>
      </Card>
      <Card className="row-span-3 flex flex-col gap-6 p-2 text-xl">
        <h1 className="text-center text-lg font-semibold">Power consumption</h1>
        <WidgetLabel
          legendPosition="top"
          attributes={{
            telemetries: [
              {
                area: false,
                name: "EST_REALISE_ROCHE_CUMUL_Ton",
                color: "#6B6B6B",
                label: "Mining Dept",
                serial: "D5KP29KL463AZXWE",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "JZVATMKQ1A8DA2P1",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "D5KP29KL463AZXWE",
              },
            ],
          }}
        />

        <WidgetLabel
          legendPosition="top"
          attributes={{
            telemetries: [
              {
                area: false,
                name: "EST_REALISE_ROCHE_CUMUL_Ton",
                color: "#6B6B6B",
                label: "Mining Dept",
                serial: "D5KP29KL463AZXWE",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "JZVATMKQ1A8DA2P1",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "D5KP29KL463AZXWE",
              },
            ],
          }}
        />
        <WidgetLabel
          legendPosition="top"
          attributes={{
            telemetries: [
              {
                area: false,
                name: "EST_REALISE_ROCHE_CUMUL_Ton",
                color: "#6B6B6B",
                label: "Mining Dept",
                serial: "D5KP29KL463AZXWE",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "JZVATMKQ1A8DA2P1",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "D5KP29KL463AZXWE",
              },
            ],
          }}
        />
      </Card>
      <Card className="row-span-3 flex flex-col gap-3 p-6">
        <h1 className="text-center text-lg font-semibold">
          Southeast ore body production equipment status
        </h1>
        <div className="grid gap-4">
          <div className="max-h-[25rem] rounded-xl border border-primary/50 bg-card/10 p-4">
            <div className="flex h-full flex-col gap-2">
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="rounded-xl bg-[#E80053] px-4 py-2"></span>
                <h2 className="text-sm font-semibold">Beishen District</h2>
              </div>
              <ScrollArea className="h-full w-full border-none">
                <DataTable columns={columns} data={ProductionEquipment} />
              </ScrollArea>
            </div>
          </div>
          <div className="max-h-[25rem] rounded-xl border border-primary/50 bg-card/10 p-4">
            <div className="flex h-full flex-col gap-2">
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="rounded-xl bg-[#FFC300] px-4 py-2"></span>
                <h2 className="text-sm font-semibold">South mining area</h2>
              </div>
              <ScrollArea className="h-full w-full border-none">
                <DataTable columns={columns} data={ProductionEquipment} />
              </ScrollArea>
            </div>
          </div>
        </div>
      </Card>
      <Card className="flex min-h-[18ren] flex-col p-4">
        <h1 className="text-center text-lg font-semibold">Power consumption</h1>
        <div className="flex flex-wrap justify-between gap-x-1 px-1 pt-4 text-xs">
          <h6 className="space-x-2">
            <span>Daily consumption :</span>
            <span className="font-semibold">140610 kwh</span>
          </h6>
          <h6 className="space-x-2">
            <span>Monthly consumption :</span>
            <span className="font-semibold">9908540 kwh</span>
          </h6>
        </div>
        <div className="flex-1">
          <LineChartWidget
            attributes={{
              telemetries: [
                {
                  area: true,
                  name: "EST_PLANIFIE_ROCHE_CUMUL",
                  color: "#E800534D",
                  label: "Cumulative planifié",
                  serial: "JZVATMKQ1A8DA2P1",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="flex h-fit flex-col gap-3 p-4">
        <h2 className="text-center text-lg font-bold">
          Explosives consumption
        </h2>
        <div className="flex h-full flex-col gap-2">
          {Explosivesconsumption.map((explosive, index) => (
            <div
              key={index}
              className="flex h-full gap-2 rounded-xl border border-[#26e2b3] p-3"
            >
              <div className="flex flex-1 items-center justify-center rounded-xl border border-[#26e2b3] px-5 text-center text-xs">
                {explosive.title}
              </div>
              <div className="flex w-full flex-col gap-1">
                {explosive.data.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs"
                  >
                    <h4 className="text-[#98989A]">{data.label}:</h4>
                    <span>{data.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
