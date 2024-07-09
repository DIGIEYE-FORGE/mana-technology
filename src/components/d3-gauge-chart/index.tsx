import { useEffect, useRef } from "react";
import * as d3 from "d3";

export type pxSizeType = `${number}px` | `${number}rem`;

interface GaugeChartProps {
  value: number;
  maxValue: number;
  ticks?: {
    count?: number;
    color?: string;
    fontSize?: pxSizeType;
  };
  backgroundColor?: string;
  foregroundColor?: string;
}

const convertRemOrPxToNumber = (size: pxSizeType) => {
  if (size.includes("px")) return Number(size.split("px")[0]);
  return (
    Number(size.split("rem")[0]) *
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
};

export const D3GaugeChart = ({
  value,
  maxValue,
  ticks = { count: 5, color: "#000", fontSize: "1rem" },
  backgroundColor = "#ddd",
  foregroundColor = "#ffab00",
}: GaugeChartProps) => {
  const ref = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const tickSize = convertRemOrPxToNumber(ticks.fontSize as pxSizeType);
    console.log(tickSize);

    const margin = {
      top: 0,
      right: maxValue.toString().length * tickSize,
      bottom: 10,
      left: maxValue.toString().length * tickSize * 0.5,
    };
    console.log(maxValue.toString().length);

    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    d3.select(ref.current).select("svg").remove();

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const radius = Math.min(width, (height - margin.bottom) * 2) / 2;

    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI / 2;

    const arc = d3
      .arc()
      .innerRadius(radius * 0.8)
      .outerRadius(radius)
      .startAngle(startAngle)
      .endAngle((value / maxValue) * (endAngle - startAngle) + startAngle);

    const arcBackground = d3
      .arc()
      .innerRadius(radius * 0.8)
      .outerRadius(radius)
      .startAngle(startAngle)
      .endAngle(endAngle);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height - margin.bottom})`);

    // Draw background arc
    g.append("path")
      .datum({ endAngle: endAngle })
      .style("fill", backgroundColor)
      .attr("d", arcBackground as any);

    // Draw foreground arc
    g.append("path")
      .datum({
        endAngle: (value / maxValue) * (endAngle - startAngle) + startAngle,
      })
      .style("fill", foregroundColor)
      .attr("d", arc as any);

    const labelsArray = Array.from(
      { length: (ticks.count as number) + 1 },
      (_, i) => Math.round((maxValue / (ticks.count as number)) * i),
    );

    // Draw the ticks
    const scale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([startAngle, endAngle]);

    const tickData = labelsArray.map((d) => ({
      value: d,
      angle: scale(d),
    }));

    // Draw the tick labels outside the gauge
    g.selectAll(".tick-label")
      .data(tickData)
      .enter()
      .append("text")
      .attr("class", "tick-label")
      .attr("x", (d) => (radius + 10) * Math.cos(d.angle - Math.PI / 2)) // Increase radius offset
      .attr("y", (d) => (radius + 10) * Math.sin(d.angle - Math.PI / 2)) // Increase radius offset
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) =>
        d.angle === 0 ? "middle" : d.angle < 0 ? "end" : "start",
      )
      .style("font-size", ticks.fontSize as string)
      .text((d) => d.value)
      .style("fill", ticks.color as string);

    // Draw the center value
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-1em")
      .style("font-size", "2.5rem")
      .style("fill", "#fff")
      .text(value);
  }, [value, maxValue, ticks]);

  return <div ref={ref} className="font-semibold" />;
};
