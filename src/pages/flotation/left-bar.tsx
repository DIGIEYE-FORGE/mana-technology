import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  oThickner: { x: Date; y: number }[];
  iFilter: { x: Date; y: number }[];
  oFilterWet: { x: Date; y: number }[];
  oFilterDry: { x: Date; y: number }[];
  oThicknerTonnage: number | string;
  iFilterTonnage: number | string;
  oFilterWetTonnage: number | string;
  oFilterDryTonnage: number | string;
  iSulfide: { x: Date; y: number }[];
  cSulfide: { x: Date; y: number }[];
  iOxyde: { x: Date; y: number }[];
  cOxyde: { x: Date; y: number }[];
  tOxyde: { x: Date; y: number }[];
  iSulfideCop: number | string;
  iSulfideSil: number | string;
  cSulfideCop: number | string;
  cSulfideSil: number | string;
  iOxydeCop: number | string;
  iOxydeSil: number | string;
  cOxydeCop: number | string;
  cOxydeSil: number | string;
  tOxydeCop: number | string;
  tOxydeSil: number | string;
  iRegrind: { x: Date; y: number }[];
  iCyclRegrind: { x: Date; y: number }[];
  iCyclDesl: { x: Date; y: number }[];
  oThickner2: { x: Date; y: number }[];
  iThickner: { x: Date; y: number }[];
  iRegrindVal: number | string;
  iCyclRegrindVal: number | string;
  iCyclDeslVal: number | string;
  iThicknerVal: number | string;
  oThickner2Val: number | string;
  pax1: { x: Date; y: number }[];
  pax2: { x: Date; y: number }[];
  pax1Val: number | string;
  pax2Val: number | string;
  mibc1: { x: Date; y: number }[];
  mibc2: { x: Date; y: number }[];
  mibc1Val: number | string;
  mibc2Val: number | string;
  nahs1: { x: Date; y: number }[];
  nahs2: { x: Date; y: number }[];
  nahs1Val: number | string;
  nahs2Val: number | string;
  air1: { x: Date; y: number }[];
  air2: { x: Date; y: number }[];
  air1Val: number | string;
  air2Val: number | string;
  oreFlow: { x: Date; y: number }[];
  oreFlowVal: number | string;
}

const LeftBar = ({
  oThickner,
  iFilter,
  oFilterWet,
  oFilterDry,
  oThicknerTonnage,
  iFilterTonnage,
  oFilterWetTonnage,
  oFilterDryTonnage,
  iSulfide,
  cSulfide,
  iOxyde,
  cOxyde,
  tOxyde,
  iSulfideCop,
  iSulfideSil,
  cSulfideCop,
  cSulfideSil,
  iOxydeCop,
  iOxydeSil,
  cOxydeCop,
  cOxydeSil,
  tOxydeCop,
  tOxydeSil,
  iRegrind,
  iCyclRegrind,
  iCyclDesl,
  oThickner2,
  iThickner,
  iRegrindVal,
  iCyclRegrindVal,
  iCyclDeslVal,
  iThicknerVal,
  oThickner2Val,
  pax1,
  pax2,
  pax1Val,
  pax2Val,
  mibc1,
  mibc2,
  mibc1Val,
  mibc2Val,
  nahs1,
  nahs2,
  nahs1Val,
  nahs2Val,
  air1,
  air2,
  air1Val,
  air2Val,
  oreFlow,
  oreFlowVal,
}: LeftBarProps) => {
  return (
    <div className="relative z-10 flex h-full w-full flex-col gap-2">
      <Card className="flex w-[500px] justify-between gap-2 px-2 py-1">
        <ReactApexChart
          height={120}
          options={{
            chart: {
              height: 200,
              type: "line",
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              theme: "dark",
            },
            title: {
              text: "Concentrate Production (t/h)",
              align: "left",
              style: {
                fontSize: "14px",
                color: "#ffffff",
              },
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#FF5C5C", "#05E8D2", "#FFFFFF"],
            legend: {
              show: false,
            },
            xaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              type: "datetime",
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              decimalsInFloat: 2,
            },
          }}
          series={[
            {
              name: "O.Thickner",
              data: oThickner || [],
            },
            {
              name: "I.Filter",
              data: iFilter || [],
            },
            {
              name: "O.Filtre (WET)",
              data: oFilterWet || [],
            },
            {
              name: "O.Filtre (DRY)",
              data: oFilterDry || [],
            },
          ]}
        />
        <Card className="flex grow flex-col justify-around !rounded p-2 text-[#CAD2D6]">
          <h1 className="font-semibold">Tonnage (t)</h1>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFCA05]"></div>
            <span className="text-sm font-medium">O.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {oThicknerTonnage}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">I.Filter</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iFilterTonnage}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">O.Filtre (WET)</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {oFilterWetTonnage}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">O.Filtre (DRY)</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {oFilterDryTonnage}
            </span>
          </div>
        </Card>
      </Card>
      <Card className="flex w-[500px] justify-between gap-2 px-2 py-1">
        <ReactApexChart
          height={120}
          options={{
            chart: {
              height: 200,
              type: "line",
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              theme: "dark",
            },
            title: {
              text: "Grade analysis (%)",
              align: "left",
              style: {
                fontSize: "14px",
                color: "#ffffff",
              },
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#FF5C5C", "#05E8D2", "#3DCBFF", "#FFFFFF"],
            legend: {
              show: false,
            },
            xaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              type: "datetime",
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              decimalsInFloat: 2,
            },
          }}
          series={[
            {
              name: "I.Sulfide",
              data: iSulfide || [],
            },
            {
              name: "C.Sulfide",
              data: cSulfide || [],
            },
            {
              name: "I.Oxyde",
              data: iOxyde || [],
            },
            {
              name: "C.Oxyde",
              data: cOxyde || [],
            },
            {
              name: "T.Oxyde",
              data: tOxyde || [],
            },
          ]}
        />
        <Card className="flex grow flex-col justify-around !rounded p-2 text-[#CAD2D6]">
          <div className="ml-auto flex">
            <span className="font-semibold">Cop</span>
            <span className="ml-3 font-semibold">Sil</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFCA05]"></div>
            <span className="text-sm font-medium">I. Sulfide</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iSulfideCop}
            </span>
            <span className="ml-1 font-semibold text-[#FFC829]">
              {iSulfideSil}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">C.Sulfide</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {cSulfideCop}
            </span>
            <span className="ml-1 font-semibold text-[#FFC829]">
              {cSulfideSil}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">I.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iOxydeCop}
            </span>
            <span className="ml-1 font-semibold text-[#FFC829]">
              {iOxydeSil}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#3DCBFF]"></div>
            <span className="text-sm font-medium">C.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {cOxydeCop}
            </span>
            <span className="ml-1 font-semibold text-[#FFC829]">
              {cOxydeSil}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">T.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {tOxydeCop}
            </span>
            <span className="ml-1 font-semibold text-[#FFC829]">
              {tOxydeSil}
            </span>
          </div>
        </Card>
      </Card>
      <Card className="flex w-[500px] justify-between gap-2 px-2 py-1">
        <ReactApexChart
          height={120}
          options={{
            chart: {
              height: 200,
              type: "line",
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              theme: "dark",
            },
            title: {
              text: "Densities(t/m3)",
              align: "left",
              style: {
                fontSize: "14px",
                color: "#ffffff",
              },
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            colors: ["#FFCA05", "#FF5C5C", "#05E8D2", "#3DCBFF", "#FFFFFF"],
            legend: {
              show: false,
            },
            xaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              type: "datetime",
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#A2B0B8",
                },
              },
              decimalsInFloat: 2,
            },
          }}
          series={[
            {
              name: "I.Regrind",
              data: iRegrind || [],
            },
            {
              name: "I.Cycl Regrind",
              data: iCyclRegrind || [],
            },
            {
              name: "I.Cycl Desl",
              data: iCyclDesl || [],
            },
            {
              name: "O.Thickner",
              data: oThickner2 || [],
            },
            {
              name: "I.Thickner",
              data: iThickner || [],
            },
          ]}
        />
        <Card className="flex grow flex-col justify-around !rounded p-2 text-[#CAD2D6]">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFCA05]"></div>
            <span className="text-sm font-medium">I.Regrind</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iRegrindVal}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">I.Cycl Regrind</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iCyclRegrindVal}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">I.Cycl Desl</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iCyclDeslVal}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#3DCBFF]"></div>
            <span className="text-sm font-medium">O.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {oThickner2Val}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">I.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {iThicknerVal}
            </span>
          </div>
        </Card>
      </Card>
      <div className="flex justify-between gap-2">
        <Card className="flex w-[500px] shrink-0 flex-col !rounded p-2">
          <div className="mb-2 flex items-center pl-4">
            <span className="text-sm font-semibold">Reagents (m3/h)</span>
            <span className="ml-auto text-xs">CONS.</span>
            <span className="ml-2 text-xs">SPEC.</span>
          </div>
          <div className="flex items-center gap-3">
            <Card className="!rounded">
              <ReactApexChart
                height={100}
                options={{
                  chart: {
                    height: 100,
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  tooltip: {
                    theme: "dark",
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: [
                    "#FFCA05",
                    "#FF5C5C",
                    "#05E8D2",
                    "#3DCBFF",
                    "#FFFFFF",
                  ],
                  legend: {
                    show: false,
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "PAX1",
                    data: pax1 || [],
                  },
                  {
                    name: "PAX2",
                    data: pax2 || [],
                  },
                ]}
              />
            </Card>
            <Card className="flex h-fit grow items-center !rounded px-2 py-3">
              <span>PAX</span>
              <span className="ml-auto font-semibold text-[#FFC829]">
                {pax1Val}
              </span>
              <span className="ml-3 font-semibold text-[#FFC829]">
                {pax2Val}
              </span>
            </Card>
          </div>
          <div className="flex items-center gap-3">
            <Card className="!rounded">
              <ReactApexChart
                height={100}
                options={{
                  chart: {
                    height: 100,
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  tooltip: {
                    theme: "dark",
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: [
                    "#FFCA05",
                    "#FF5C5C",
                    "#05E8D2",
                    "#3DCBFF",
                    "#FFFFFF",
                  ],
                  legend: {
                    show: false,
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "MIBC1",
                    data: mibc1 || [],
                  },
                  {
                    name: "MIBC2",
                    data: mibc2 || [],
                  },
                ]}
              />
            </Card>
            <Card className="flex h-fit grow items-center !rounded px-2 py-3">
              <span>MIBC</span>
              <span className="ml-auto font-semibold text-[#FFC829]">
                {mibc1Val}
              </span>
              <span className="ml-3 font-semibold text-[#FFC829]">
                {mibc2Val}
              </span>
            </Card>
          </div>
          <div className="flex items-center gap-3">
            <Card className="!rounded">
              <ReactApexChart
                height={100}
                options={{
                  chart: {
                    height: 100,
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  tooltip: {
                    theme: "dark",
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: [
                    "#FFCA05",
                    "#FF5C5C",
                    "#05E8D2",
                    "#3DCBFF",
                    "#FFFFFF",
                  ],
                  legend: {
                    show: false,
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "nahs1",
                    data: nahs1 || [],
                  },
                  {
                    name: "nahs2",
                    data: nahs2 || [],
                  },
                ]}
              />
            </Card>
            <Card className="flex h-fit grow items-center !rounded px-2 py-3">
              <span>NAHS</span>
              <span className="ml-auto font-semibold text-[#FFC829]">
                {nahs1Val}
              </span>
              <span className="ml-3 font-semibold text-[#FFC829]">
                {nahs2Val}
              </span>
            </Card>
          </div>
          <div className="flex items-center gap-3">
            <Card className="!rounded">
              <ReactApexChart
                height={100}
                options={{
                  chart: {
                    height: 100,
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  tooltip: {
                    theme: "dark",
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  colors: [
                    "#FFCA05",
                    "#FF5C5C",
                    "#05E8D2",
                    "#3DCBFF",
                    "#FFFFFF",
                  ],
                  legend: {
                    show: false,
                  },
                  xaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    type: "datetime",
                  },
                  yaxis: {
                    labels: {
                      style: {
                        colors: "#A2B0B8",
                      },
                    },
                    decimalsInFloat: 2,
                  },
                }}
                series={[
                  {
                    name: "air1",
                    data: air1 || [],
                  },
                  {
                    name: "air2",
                    data: air2 || [],
                  },
                ]}
              />
            </Card>
            <Card className="flex h-fit grow items-center !rounded px-2 py-3">
              <span>AIR</span>
              <span className="ml-auto font-semibold text-[#FFC829]">
                {air1Val}
              </span>
              <span className="ml-3 font-semibold text-[#FFC829]">
                {air2Val}
              </span>
            </Card>
          </div>
        </Card>
        {/************************************************************************ */}
        <Card className="flex h-fit flex-1 shrink-0 flex-col self-end !rounded px-5 pt-5">
          <div className="flex items-center text-base">
            <span className="font-semibold">Milled ore flow (t/h)</span>
            <span className="ml-auto font-semibold text-[#FFC829]">
              {oreFlowVal}
            </span>
          </div>
          <ReactApexChart
            height={200}
            width={"100%"}
            options={{
              chart: {
                height: 100,
                type: "line",
                zoom: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },
              tooltip: {
                theme: "dark",
              },
              stroke: {
                curve: "smooth",
                width: 3,
              },
              colors: ["#FFCA05", "#FF5C5C", "#05E8D2", "#3DCBFF", "#FFFFFF"],
              legend: {
                show: false,
              },
              xaxis: {
                labels: {
                  style: {
                    colors: "#A2B0B8",
                  },
                },
                type: "datetime",
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#A2B0B8",
                  },
                },
                decimalsInFloat: 2,
              },
            }}
            series={[
              {
                name: "flow",
                data: oreFlow || [],
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default LeftBar;
