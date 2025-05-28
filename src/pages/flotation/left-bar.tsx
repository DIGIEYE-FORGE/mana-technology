import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

interface LeftBarProps {
  runningState: string | number;
  frameLeft: { x: Date; y: number }[];
  frameRight: { x: Date; y: number }[];
  pitmanLeft: { x: Date; y: number }[];
  pitmanRight: { x: Date; y: number }[];
  v1: { x: Date; y: number }[];
  u1: { x: Date; y: number }[];
  w1: { x: Date; y: number }[];
}

const LeftBar = ({
  runningState,
  frameLeft,
  frameRight,
  pitmanLeft,
  pitmanRight,
  v1,
  u1,
  w1,
}: LeftBarProps) => {
  return (
    <div className="relative z-10 flex h-full w-[500px] flex-col gap-3">
      <Card className="flex w-full justify-between gap-2 px-2 py-2">
        <ReactApexChart
          height={150}
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
              text: "Concentrate Production",
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
              name: "left",
              data: frameLeft || [],
            },
            {
              name: "right",
              data: frameRight || [],
            },
          ]}
        />
        <Card className="flex grow flex-col justify-around !rounded p-2 text-[#CAD2D6]">
          <h1 className="font-semibold">Tonnage (t)</h1>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFCA05]"></div>
            <span className="text-sm font-medium">O.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">I.Filter</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">O.Filtre (WET)er</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">O.Filtre (DRY)</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
        </Card>
      </Card>
      <Card className="flex w-full justify-between gap-2 px-2 py-2">
        <ReactApexChart
          height={150}
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
              name: "left",
              data: frameLeft || [],
            },
            {
              name: "right",
              data: frameRight || [],
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
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-1 font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">C.Sulfide</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-1 font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">I.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-1 font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#3DCBFF]"></div>
            <span className="text-sm font-medium">C.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-1 font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">T.Oxyde</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-1 font-semibold text-[#FFC829]">XX</span>
          </div>
        </Card>
      </Card>
      <Card className="flex w-full justify-between gap-2 px-2 py-2">
        <ReactApexChart
          height={150}
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
              name: "left",
              data: frameLeft || [],
            },
            {
              name: "right",
              data: frameRight || [],
            },
          ]}
        />
        <Card className="flex grow flex-col justify-around !rounded p-2 text-[#CAD2D6]">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFCA05]"></div>
            <span className="text-sm font-medium">I.Regrind</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FF5C5C]"></div>
            <span className="text-sm font-medium">I.Cycl Regrind</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05E8D2]"></div>
            <span className="text-sm font-medium">I.Cycl Desl</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#3DCBFF]"></div>
            <span className="text-sm font-medium">O.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#FFFFFF]"></div>
            <span className="text-sm font-medium">I.Thickner</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
          </div>
        </Card>
      </Card>
      <Card className="flex w-full flex-col !rounded p-2">
        <div className="mb-2 flex items-center">
          <span>Reagents</span>
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
                  name: "left",
                  data: frameLeft || [],
                },
                {
                  name: "right",
                  data: frameRight || [],
                },
              ]}
            />
          </Card>
          <Card className="flex h-fit grow items-center !rounded px-2 py-3">
            <span>PAX</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-3 font-semibold text-[#FFC829]">XX</span>
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
                  name: "left",
                  data: frameLeft || [],
                },
                {
                  name: "right",
                  data: frameRight || [],
                },
              ]}
            />
          </Card>
          <Card className="flex h-fit grow items-center !rounded px-2 py-3">
            <span>PAX</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-3 font-semibold text-[#FFC829]">XX</span>
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
                  name: "left",
                  data: frameLeft || [],
                },
                {
                  name: "right",
                  data: frameRight || [],
                },
              ]}
            />
          </Card>
          <Card className="flex h-fit grow items-center !rounded px-2 py-3">
            <span>PAX</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-3 font-semibold text-[#FFC829]">XX</span>
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
                  name: "left",
                  data: frameLeft || [],
                },
                {
                  name: "right",
                  data: frameRight || [],
                },
              ]}
            />
          </Card>
          <Card className="flex h-fit grow items-center !rounded px-2 py-3">
            <span>PAX</span>
            <span className="ml-auto font-semibold text-[#FFC829]">XX</span>
            <span className="ml-3 font-semibold text-[#FFC829]">XX</span>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default LeftBar;
