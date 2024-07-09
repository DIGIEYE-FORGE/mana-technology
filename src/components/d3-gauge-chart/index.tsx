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
    offset?: number;
  };
  dataLabels?: {
    show?: boolean;
    color?: string;
    fontSize?: pxSizeType;
    formater?: (d: number) => string;
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
  ticks = {},
  dataLabels = {},
  backgroundColor = "#ddd",
  foregroundColor = "#ffab00",
}: GaugeChartProps) => {
  const ref = useRef(null);
  const mounted = useRef(false);
  const { count = 5, color = "#000", fontSize = "1rem", offset = 10 } = ticks;
  const {
    show = true,
    formater = (d) => d.toString(),
    color: dataLabelColor = "#fff",
    fontSize: dataLabelFontSize = "1rem",
  } = dataLabels;
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const tickSize = convertRemOrPxToNumber(fontSize as pxSizeType);
    console.log(tickSize);

    const margin = {
      top: 0,
      right: maxValue.toString().length * tickSize,
      bottom: 1,
      left: maxValue.toString().length * tickSize,
    };
    console.log(maxValue.toString().length);

    const width = 500;
    const height = 300;

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

    const labelsArray = Array.from({ length: (count as number) + 1 }, (_, i) =>
      Math.round((maxValue / (count as number)) * i),
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
      .attr("x", (d) => (radius + offset) * Math.cos(d.angle - Math.PI / 2)) // Increase radius offset
      .attr("y", (d, index) => {
        if (index === 0 || index === labelsArray.length - 1)
          return (
            (radius + offset) * Math.sin(d.angle - Math.PI / 2) - tickSize / 2.8
          );
        return (radius + offset) * Math.sin(d.angle - Math.PI / 2);
      }) // Increase radius offset
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) =>
        d.angle === 0 ? "middle" : d.angle < 0 ? "end" : "start",
      )
      .style("font-size", fontSize as string)
      .text((d) => d.value)
      .style("fill", color as string);

    // Draw the center value
    if (show) {
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("font-size", dataLabelFontSize)
        .style("fill", dataLabelColor)
        .text(formater(value))
        .attr("transform", `translate(0, ${(-radius / 2) * 0.8})`);
    }
  }, [value, maxValue, ticks]);

  return <div ref={ref} className="debug h-fit font-semibold" />;
};
