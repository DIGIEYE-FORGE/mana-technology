/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartsWidgetData, HistoryType, Widget, flatten } from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Chart from "react-apexcharts";
import Loader from "@/components/loader";

type Props = Widget;

export default function LinesWidget(props: Props) {
  const { backendApi, dateRange } = useAppContext();
  const telemetries = (props.attributes?.telemetries ||
    []) as ChartsWidgetData[];
  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({
      telemetries,
      dateRange,
    })}`,
    async () => {
      if (!dateRange?.from || telemetries.length === 0) return [];
      const res = await Promise.all(
        telemetries.map(async ({ serial, name }) => {
          const { results } = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: {
                page: 1,
                perPage: 10_00,
              },
              select: [name],
              where: {
                serial,
                createdAt: {
                  $gt: new Date(dateRange.from as Date),
                  $lte: dateRange?.to && new Date(dateRange.to as Date),
                },
              },
            },
          );
          return results;
        }),
      );
      return res.map((item, index) => ({
        name: telemetries[index].label || telemetries[index].name,
        type: telemetries[index].type,
        data: item.map((item) => ({
          x: new Date(item.createdAt),
          y: Number(flatten(item)[telemetries[index].name]),
        })),
      }));
    },
  );

  if (isLoading)
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="grid h-full w-full place-content-center">
        <h3>Something went wrong.</h3>
      </div>
    );
  return (
    <Chart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        chart: {
          stacked: false,
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: {
          width: [4, 4],
        },

        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              // color: "#008FFB",
            },
            labels: {
              formatter: function (value) {
                return value.toFixed(2);
              },
            },
            // labels: {
            //   style: {
            //     colors: "#008FFB",
            //   },
            // },
            title: {
              style: {
                color: "#008FFB",
              },
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            labels: {
              formatter: function (value) {
                return value.toFixed(2);
              },
            },
            axisBorder: {
              show: true,
              // color: "#FEB019",
            },
            title: {
              style: {
                color: "#FEB019",
              },
            },
          },
        ],
        xaxis: {
          type: "datetime",
          max: dateRange?.to ? new Date(dateRange?.to).getTime() : undefined,
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
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        colors: telemetries.map((item) => item.color),
        plotOptions: {
          bar: {
            columnWidth: "20%",
          },
        },
        legend: {
          position: "bottom",
          markers: { width: 26, height: 12, radius: 8 },
          fontWeight: 600,
          fontSize: "12px",
        },
      }}
      series={data?.map((item) => {
        return {
          name: item.name,
          type: item.type,
          data: item.data.map((item) => {
            return {
              x: item.x,
              y: item.y,
            };
          }),
        };
      })}
      type="line"
      width={"100%"}
      height={"100%"}
    />
  );
}
