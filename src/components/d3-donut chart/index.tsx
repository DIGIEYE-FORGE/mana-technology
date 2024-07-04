/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/Context";
import useSWR from "swr";
import Loader from "../loader";
import { HistoryType } from "@/utils";
import Chart from "react-apexcharts";

interface D3DonutChartProps {
  attribute: {
    bfsLabelTelemetry: string;
    bfsTelemetry: string;
    color: string;
    nameLabelTelemetry: string;
    nameTelemetry: string;
    serial: string;
  }[];
}

export const D3DonutChart = ({ attribute }: D3DonutChartProps) => {
  const { backendApi, dateRange } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetryDonutChartProps${JSON.stringify(attribute)}${dateRange?.from}${dateRange?.to}`,
    async () => {
      if (!attribute?.length) return [];
      const res1 = await Promise.all(
        attribute.map(async (device) => {
          const {
            bfsLabelTelemetry,
            bfsTelemetry,
            color,
            nameLabelTelemetry,
            nameTelemetry,
            serial,
          } = device;
          const resWithouyAvg = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: {
                page: 1,
                perPage: 10_00,
              },
              select: [nameTelemetry],
              where: {
                serial,
                createdAt: dateRange && {
                  $gt: new Date(dateRange?.from as Date),
                  $lte: dateRange?.to && new Date(dateRange?.to as Date),
                },
              },
            },
          );
          const sum = resWithouyAvg.results.reduce(
            (acc, curr) => acc + Number(curr[nameTelemetry]),
            0,
          );

          let avg = 0;
          if (sum) {
            avg = sum / resWithouyAvg.results?.length;
          }
          const res2 = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name: bfsTelemetry,
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
            name: nameLabelTelemetry,
            value: avg,
            valueBfs: res2?.results[0]?.value || 0,
            bfsLabel: bfsLabelTelemetry,
          };
        }),
      );
      return res1;
    },
  );

  if (isLoading)
    return (
      <div className="line-clamp-1 flex h-full w-full flex-1 items-center justify-center">
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

  return (
    <div className="grid w-full grid-cols-10 items-center justify-center">
      <div className="relative col-span-4 flex h-full flex-col px-5 pt-5">
        <h3 className="text-center font-semibold">BFS</h3>
        <div className="my-1 h-[0.05rem] w-full bg-[#6981C0]"></div>
        <div className="flex h-full w-full flex-col">
          {(data || []).map((d, i) => (
            <div key={i} className="grid grid-cols-10 items-center gap-2 py-1">
              <span
                className="col-span-2 h-3 rounded-md"
                style={{
                  backgroundColor: d.color,
                }}
              ></span>
              <span className="col-span-7 line-clamp-1 text-xs font-semibold">
                {d?.bfsLabel || ""}
              </span>
              <span className="col-span-1 text-xs font-semibold">
                {(d?.valueBfs || 0).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-6 flex w-full flex-1 items-end justify-end pt-6">
        <Chart
          options={{
            chart: {
              type: "donut",
              toolbar: { show: false },
              zoom: { enabled: false },
              selection: { enabled: false },
              dropShadow: { enabled: false },
              sparkline: { enabled: true },
            },
            grid: {
              padding: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
            },
            labels: data.map((d) => d.name),
            colors: data.map((d) => d.color),
            dataLabels: {
              enabled: true,
              formatter: function (val, opts) {
                val;
                return `${opts.w.config.series[opts.seriesIndex].toFixed(2)}`;
              },
              style: {
                fontSize: "0.7rem",
                colors: ["#fff"],
              },
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "40%",
                },
                dataLabels: {
                  offset: -5,
                },
              },
            },
            legend: {
              show: false,
            },
            stroke: {
              show: false,
              width: 0,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val.toFixed(2);
                },
              },
            },
          }}
          series={data.map((d) => d.value / 60)}
          width="100%"
          height="130%"
          type="donut"
        />
      </div>
    </div>
  );
};
