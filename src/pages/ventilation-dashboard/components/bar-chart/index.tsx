import { useAppContext } from "@/Context";
import Chart from "react-apexcharts";

import useSWR from "swr";
import Loader from "@/components/loader";

interface QualitAirProps {
  attributes: {
    telemetries: {
      name: string;
      serial: string;
      color: string;
      label: string;
    }[];
  };
  interval?: number;
  disabled?: boolean;
}

export const BarChart = ({ attributes, disabled = false }: QualitAirProps) => {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetryDonutChartProps${JSON.stringify(attributes)}`,
    async () => {
      if (!attributes.telemetries?.length) return [];
      if (disabled) {
        return attributes.telemetries.map((device) => ({
          color: device.color,
          name: device.label,
          value: 0,
        }));
      }
      const res1 = await Promise.all(
        attributes.telemetries.map(async (device) => {
          const { name, color, serial, label } = device;
          const res = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name,
              device: { serial },
            },
            select: { name: true, value: true },
            orderBy: {
              createdAt: "desc",
            },
            pagination: {
              page: 1,
              perPage: 1,
            },
          });
          return {
            color: color,
            name: label,
            value: res.results[0]?.value || 0,
          };
        }),
      );
      return res1 || [];
    },
  );

  if (isLoading)
    return (
      <div className="line-clamp-1 flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="flex h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        failed to load
      </div>
    );

  if (!data)
    return (
      <div className="h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        no data
      </div>
    );

  console.log(data);
  return (
    <Chart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        chart: {
          type: "bar",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
          background: "transparent",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            // endingShape: "flat",
          },
        },
        dataLabels: {
          enabled: true, // Enable data labels
          formatter: function (val) {
            return Number(val).toFixed(1) + "°C";
          },
          offsetY: 50,
          style: {
            fontSize: "14px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          type: "category",
          categories: data.map((d) => d.name),
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          min: 0,
          max: data.reduce((acc, curr) => Math.max(acc, curr.value), 0) + 10,
          tickAmount: 1,
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            show: true,
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
            formatter: function (val) {
              return Number(val).toFixed(1);
            },
          },
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            colorStops: [
              {
                offset: 0,
                color: disabled ? "#ffffff4d" : "#FFDC8C",
                opacity: 1,
              },
              {
                offset: 100,
                color: disabled ? "#ffffffb3" : "#C99E3E",
                opacity: 1,
              },
            ],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
      }}
      series={[
        {
          name: "Temperature",
          data: data.map((d) => d.value),
        },
      ]}
      type="bar"
      height="100%"
    />
  );
};
