/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import Loader from "../loader";

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
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetryDonutChartProps${JSON.stringify(attribute)}`,
    async () => {
      if (!attribute?.length) return [];
      const res1 = await Promise.all(
        attribute.map(async (device) => {
          // const { name, label, color, serial } = device;
          const {
            bfsLabelTelemetry,
            bfsTelemetry,
            color,
            nameLabelTelemetry,
            nameTelemetry,
            serial,
          } = device;
          const res1 = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name: nameTelemetry,
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
            value: res1?.results[0]?.value || 0,
            valueBfs: res2?.results[0]?.value || 0,
            bfsLabel: bfsLabelTelemetry,
          };
        }),
      );
      const sum = res1.reduce((acc, curr) => acc + curr.value, 0);
      return res1.map((d) => ({ ...d, valueName: (d.value / sum) * 100 }));
    },
  );

  const drawChart = (data: any) => {
    if (!data) return;
    const width = 100;
    const height = 100;
    const radius = Math.min(width, height) / 4;

    const svg = d3
      .select(ref.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3
      .pie()
      .value((d: any) => d.value)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.3)
      .outerRadius(radius * 0.8);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg
      .selectAll("polyline")
      .data(pie(data as any))
      .enter()
      .append("polyline")
      .attr("points", function (d: any) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      } as any)
      .style("fill", "none")
      .style("stroke", "#FFFFFF")
      .style("stroke-width", "0.02rem");

    svg
      .selectAll("path")
      .data(pie(data as any))
      .enter()
      .append("path")
      .attr("d", arc as any)
      .attr("fill", (d: any) => d?.data?.color);

    svg
      .selectAll("text")
      .data(pie(data as any))
      .enter()
      .append("text")
      .text((d: any) => {
        const test: string = d?.data?.name || "";
        const wrapedText = test?.slice(0, 10) + "...";
        console.log(wrapedText);
        return wrapedText;
      })
      .attr("transform", function (d) {
        const pos = outerArc.centroid(d as any);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style("text-anchor", function (d) {
        return midAngle(d) < Math.PI ? "start" : "end";
      })
      .style("fill", "#FFFFFF")
      .style("font-size", "0.28rem")
      .style("dominant-baseline", "auto");

    function midAngle(d: any) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
  };

  const ref = useRef(null);
  useEffect(() => {
    if (!data) return;
    drawChart(data);
  }, [data, ref]);

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
      <div className="col-span-6 flex w-full items-center justify-center">
        <svg viewBox="0 20 100 55" ref={ref}></svg>
      </div>
    </div>
  );
};
