import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";

export function ProductionEvolution() {
  return (
    <Card className="col-span-3 row-span-7 flex flex-col p-6">
      <h3 className="text-center text-lg font-bold">Production Evolution</h3>
      <div className="flex-1">
        <ReactApexChart
          options={{
            theme: {
              mode: "dark",
            },
            tooltip: { cssClass: "text-black" },
            colors: ["#E80053", "#4D09E8"],
            grid: {
              borderColor: "#373737",
              xaxis: { lines: { show: true } },
              yaxis: { lines: { show: false } },
            },
            chart: {
              background: "transparent",
              toolbar: { show: false },
              animations: { enabled: true },
              zoom: { enabled: false },
              selection: { enabled: false },
              dropShadow: { enabled: false },
            },
            stroke: { width: 3, curve: "smooth" },
            dataLabels: { enabled: false },
            fill: { type: "solid", opacity: [0.33, 1] },
            legend: {
              position: "bottom",
              // markers: {
              //   width: 26,
              //   height: 12,
              // },
              fontWeight: 600,
              fontSize: "12px",
            },
            xaxis: {
              type: "datetime",
              // max: dateRange.to ? new Date(dateRange.to).getTime() : undefined,
              axisBorder: { show: false },
              axisTicks: { show: false },

              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  cssClass: "apexcharts",
                },
              },
            },
            yaxis: {
              min: 0,
              tickAmount: 4,
              labels: {
                show: true,
                formatter: function (value) {
                  return value.toFixed(2);
                },
                style: {
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  cssClass: "apexcharts-xaxis-label",
                },
              },
            },
          }}
          series={[
            {
              name: "Production",
              data: data1,
              type: "area",
            },
            {
              name: "Consumption",
              data: data2,
              type: "line",
            },
          ]}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </Card>
  );
}

const data1 = [
  {
    x: new Date("2024-06-01"),
    y: 100,
  },
  {
    x: new Date("2024-06-02"),
    y: 200,
  },
  {
    x: new Date("2024-06-03"),
    y: 300,
  },
  {
    x: new Date("2024-06-04"),
    y: 400,
  },
  {
    x: new Date("2024-06-05"),
    y: 200,
  },
  {
    x: new Date("2024-06-06"),
    y: 300,
  },
  {
    x: new Date("2024-06-07"),
    y: 400,
  },
];

const data2 = [
  {
    x: new Date("2024-06-01"),
    y: 200,
  },
  {
    x: new Date("2024-06-02"),
    y: 100,
  },
  {
    x: new Date("2024-06-03"),
    y: 400,
  },
  {
    x: new Date("2024-06-04"),
    y: 700,
  },
  {
    x: new Date("2024-06-05"),
    y: 300,
  },
  {
    x: new Date("2024-06-06"),
    y: 500,
  },
  {
    x: new Date("2024-06-07"),
    y: 600,
  },
];
