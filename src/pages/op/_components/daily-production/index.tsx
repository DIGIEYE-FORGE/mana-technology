import ReactApexChart from "react-apexcharts";
import { Card } from "@/components/card";

export function DailyProduction() {
  return (
    <Card className="col-span-3 row-span-7 flex flex-col p-6">
      <h3 className="text-center text-lg font-bold">
        Daily Production BreakUp
      </h3>
      <div className="flex-1">
        <ReactApexChart
          options={{
            theme: { mode: "dark" },
            tooltip: { cssClass: "text-black" },
            legend: {
              position: "bottom",

              // markers: { radius: 8 },
              fontWeight: 600,
              fontSize: "12px",
            },
            colors: ["#FFC300", "#E80054"],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "all",
              },
            },
            grid: { show: false },
            chart: {
              type: "bar",
              stacked: true,
              background: "transparent",
              toolbar: { show: false },
              animations: { enabled: true },
              zoom: { enabled: false },
              selection: { enabled: false },
              dropShadow: { enabled: false },
            },
            dataLabels: { enabled: false },
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
                  cssClass: "apexcharts-xaxis-label",
                },
              },
            },
            yaxis: {
              min: 0,
              tickAmount: 4,
              max: Math.max(...data1.map((d, index) => d.y + data2[index].y)),

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
              type: "bar",
              data: data1,
            },
            {
              name: "Consumption",
              type: "bar",
              data: data2,
            },
          ]}
          type={"bar"}
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
