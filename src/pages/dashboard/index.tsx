import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressCircle } from "@/components/progress-circle";
import WidgetLabel from "@/components/widget-label";

export default function DashboardPage() {
  return (
    // <main className="grid w-full grid-flow-dense auto-rows-[100px] grid-cols-8 gap-3">

    //   <Card className="col-span-3 row-span-9"> </Card>
    //   <Card className="col-span-3 row-span-5"></Card>
    //   <Card className="col-span-2 row-span-3"></Card>
    //   <Card className="col-span-3 row-span-4"></Card>
    //   <Card className="col-span-2 row-span-4"></Card>
    // </main>
    <main className="3xl:grid-cols-[480px,1fr,540px] grid h-fit w-full gap-4 lg:grid-cols-2 [&>*]:min-h-[10rem]">
      <Card className="flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-bold text-white">
          Safety hazard analysis
        </h1>

        <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={50}
              backgroundColor="#6d0c1a"
              gradientStartColor="#E80054"
              gradientEndColor="#F725D5"
            />

            <span className="text-sm">Safety hazards</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={88.34}
              backgroundColor="#055982"
              gradientStartColor="#00DAA0"
              gradientEndColor="#0083E1"
            />

            <span className="text-sm">Rectifications</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={33.57}
              backgroundColor="#948420"
              gradientStartColor="#C9DA00"
              gradientEndColor="#E19400"
            />

            <span className="text-sm">To be rectified</span>
          </div>
        </div>
      </Card>
      <Card className="row-span-3 flex flex-col gap-4 p-4 text-xl">
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
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "U9XQMQ1DXYT7LJIP",
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
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "U9XQMQ1DXYT7LJIP",
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
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_PLANIFIE_ROCHE_CUMUL",
                color: "#E80053",
                label: "TGMC",
                serial: "U9XQMQ1DXYT7LJIP",
              },
              {
                area: false,
                name: "EST11_REALISE_STERILE",
                color: "#FFC300",
                label: "JCHX",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="row-span-2">3</Card>
      <Card className="flex h-[18rem] flex-col p-4">
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
                  serial: "U9XQMQ1DXYT7LJIP",
                },
              ],
            }}
          />
        </div>
      </Card>
      <Card className="h-[25rem]">5</Card>
      <Card>6</Card>
    </main>
  );
}
