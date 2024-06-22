import BarLineWidget from "@/components/bar-line-widget";
import BarsChartWidget from "@/components/bars-chart-widget";
import { Card } from "@/components/card";
import LinesWidget from "@/components/lines-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import Ventillation from "@/components/ventillation";

function DashboardPage2() {
  return (
    <div className="grid h-fit w-full grid-flow-dense grid-cols-3 gap-6 lg:grid-cols-6 xl:grid-cols-9 [&>*]:min-h-[20rem]">
      <Card className="col-span-3">1</Card>
      <Card className="col-span-3 p-2">
        <h1 className="text-center text-lg font-semibold">
          Avancement cumulatif annuel
        </h1>
        <div className="w-full text-center text-xs text-gray-400">
          Piloting Work - S-curve for Planned % Vs Actual %
        </div>
        <BarLineWidget
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "realise",
                unit: "T",
                color: "#78F6EA",
                label: "Réalisé",
                serial: "DABF7PAT2G4BAG21",
                type: "bar",
              },
              {
                name: "forcast",
                unit: "T",
                color: "#B98EFF",
                label: "Forecast (Monthly)",
                serial: "DABF7PAT2G4BAG21",
                type: "bar",
              },

              {
                name: "FC",
                unit: "T",
                color: "#5c07e5",
                label: "Planifié (Cumulé)",
                serial: "DABF7PAT2G4BAG21",
                type: "line",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 p-2">
        <h1 className="text-center text-lg font-semibold">
          Avancement cumulatif annuel
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <LinesWidget
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "EST11_REALISE_ROCHE",
                unit: "T",
                color: "#78F6EA",
                label: "Est 11",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "line",
              },
              {
                name: "EST12_REALISE_ROCHE",
                unit: "T",
                color: "#B98EFF",
                label: "Est 12",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "line",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 px-4 py-6">
        <h1 className="text-center text-lg font-semibold">
          Dashboard ventillation
        </h1>
        <Ventillation />
      </Card>
      <Card className="col-span-3 p-2">
        <h1 className="text-center text-lg font-semibold">
          Avancement/Arrachement journalier
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <BarsChartWidget
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "EST11_REALISE_ROCHE",
                unit: "T",
                color: "#78F6EA",
                label: "Est 11",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "bar",
              },
              {
                name: "EST12_REALISE_ROCHE",
                unit: "T",
                color: "#B98EFF",
                label: "Est 12",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "bar",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3 p-2">
        <h1 className="text-center text-lg font-semibold">
          Nombre Tir{" "}
          <span className="text-gray-500">(planifié vs réalisé)</span>
        </h1>
        <div className="w-full text-center text-xs text-gray-400"></div>
        <BarsChartWidget
          attributes={{
            stacked: true,
            telemetries: [
              {
                name: "EST11_REALISE_ROCHE",
                unit: "T",
                color: "#78F6EA",
                label: "Est 11",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "bar",
              },
              {
                name: "EST12_REALISE_ROCHE",
                unit: "T",
                color: "#B98EFF",
                label: "Est 12",
                serial: "U9XQMQ1DXYT7LJIP",
                type: "bar",
              },
            ],
          }}
        />
      </Card>
      <Card className="col-span-3">7</Card>
      <Card className="col-span-3">8</Card>
      <Card className="p2-2 col-span-3">
        <h3 className="text-center text-lg font-semibold">
          Disponibilité Engine GMC
        </h3>
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
      </Card>
    </div>
  );
}

export default DashboardPage2;
