/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from "react-apexcharts";
import { ReactNode } from "react";
import { Widget } from "@/utils";

type Props = Widget & {
  children?: ReactNode;
  interval?: number;
  max?: number;
  min?: number;
  val:
    | {
        name: string;
        color: string;
        data: {
          x: Date;
          y: number;
        }[];
      }
    | any;
};

export const MoteurCard = (props: Props) => {
  return (
    <ReactApexChart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
          padding: { top: -15 },
        },
        chart: {
          id: "realtime",
          background: "transparent",
          toolbar: { show: false },
          animations: {
            enabled: false,
            easing: "linear",
            dynamicAnimation: { speed: 1000 },
          },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { width: 2, curve: "smooth" },
        dataLabels: { enabled: false },
        fill: { type: "solid" },
        xaxis: {
          type: "datetime",
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            showDuplicates: false,
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
          min: props?.min || 0,
          max: props.max,
          tickAmount: 1,
          labels: {
            show: true,
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
            formatter(value) {
              return value.toFixed(2);
            },
          },
        },
      }}
      series={props.val || []}
      type="line"
      height={"100%"}
      width={"100%"}
    />
  );
};
