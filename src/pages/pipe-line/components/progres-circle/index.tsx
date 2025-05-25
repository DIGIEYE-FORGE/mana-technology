/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { cn } from "@/lib/utils";

interface CircularGaugeProps {
  value: number;
  maxValue: number;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CircularGauge = ({
  value,
  maxValue,
  size = 300,
  width = 200,
  height = size / 2,
  color = "#14CDF0",
  className,
}: CircularGaugeProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear

    const margin = 0;
    const radius = (size - margin * 2) / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI / 2;

    svg
      .attr("viewBox", `0 0 ${size} ${size / 2}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const g = svg
      .append("g")
      .attr("transform", `translate(${size / 2},${size / 2})`);

    const backgroundArc = d3
      .arc()
      .innerRadius(radius - 15)
      .outerRadius(radius - 5)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .cornerRadius(50);

    const progressArc = d3
      .arc()
      .innerRadius(radius - 25)
      .outerRadius(radius)
      .startAngle(startAngle)
      .cornerRadius(50);

    g.append("path")
      .attr("d", backgroundArc as any)
      .style("fill", "#CAECF8")
      .style("filter", "url(#glow)");

    const progress = value / maxValue;
    const progressEndAngle = startAngle + (endAngle - startAngle) * progress;

    g.append("path")
      .datum({ endAngle: progressEndAngle })

      .attr("d", progressArc as any)
      .style("fill", color)
      .style("filter", "url(#glow)");

    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");

    filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");
  }, [value, maxValue, size]);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center",
        className,
      )}
    >
      <svg
        ref={svgRef}
        className="h-auto w-24"
        style={{
          width: `${width}px`,
          height: `${height * 0.8}px`,
          maxWidth: "100%",
          maxHeight: "100%",
          aspectRatio: `${width} / ${height}`,
          display: "block",
          margin: "0 auto",
          // backgroundColor: "transparent",
          // borderRadius: "50%",
        }}
      ></svg>
      <div></div>
      <div className="absolute left-1/2 top-[50%] flex -translate-x-1/2 transform items-center text-2xl text-3xl font-bold">
        <span>{(value || 0)?.toFixed(2) || 0}</span>
        <span className="text-[0.75em]">%</span>
      </div>
    </div>
  );
};

export default CircularGauge;
