import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Card } from "../card";

const data = [
  { name: "Element 1", value: 18, color: "#F7DC6F" },
  { name: "Element 2", value: 36, color: "#F39C12" },
  { name: "Element 3", value: 14, color: "#C0392B" },
  { name: "Element 4", value: 8, color: "#8E44AD" },
  { name: "Element 5", value: 12, color: "#1ABC9C" },
  { name: "Element 6", value: 15, color: "#2ECC71" },
  { name: "Element 7", value: 6, color: "#3498DB" },
];

export const D3DonutChart = () => {
  const ref = useRef(null);

  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
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
      .style("stroke-width", "0.5px");

    svg
      .selectAll("path")
      .data(pie(data as any))
      .enter()
      .append("path")
      .attr("d", arc as any)
      .attr("fill", (d: any) => d.data.color);

    svg
      .selectAll("text")
      .data(pie(data as any))
      .enter()
      .append("text")
      .text((d: any) => d.data.name)
      .attr("transform", function (d) {
        const pos = outerArc.centroid(d as any);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style("text-anchor", function (d) {
        return midAngle(d) < Math.PI ? "start" : "end";
      })
      .style("fill", "#FFFFFF")
      .style("font-size", "0.23rem");

    function midAngle(d: any) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
  };

  return (
    <Card className="col-span-3 flex flex-col items-center p-4">
      <h1 className="text-center text-lg font-semibold">
        Avancement/Arrachement journalier
      </h1>
      <div className="grid w-full flex-1 grid-cols-10 items-center justify-center">
        <div className="relative col-span-4 flex h-full flex-col p-5">
          <h3 className="text-center font-semibold">BFS</h3>
          <div className="my-2 h-[0.05rem] w-full bg-[#6981C0]"></div>
          <div className="flex h-full w-full flex-col gap-0.5">
            {data.map((d, i) => (
              <div
                key={i}
                className="grid grid-cols-10 items-center gap-2 py-0.5"
              >
                <span
                  className="col-span-2 h-3 rounded-md"
                  style={{
                    backgroundColor: d.color,
                  }}
                ></span>
                <span className="col-span-7 line-clamp-1 text-sm font-semibold">
                  {d.name}
                </span>
                <span className="col-span-1 text-sm font-semibold">
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 flex w-full items-center justify-center">
          <svg viewBox="0 20 100 55" ref={ref}></svg>
        </div>
      </div>
    </Card>
  );
};
