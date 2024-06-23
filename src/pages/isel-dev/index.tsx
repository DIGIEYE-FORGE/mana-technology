/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
interface PolarAreaProps extends React.SVGProps<HTMLDivElement> {
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  innerRadius?: number;
  cornerRadius?: number;
}

const PolarArea = ({
  data,
  className,
  innerRadius = 10,
  cornerRadius = 1,
  ...props
}: PolarAreaProps) => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = d3.select(ref.current).data([data]);
    if (!svg) return;
    const max = d3.max(data, (d) => d.value) || 0;

    const arcs = svg
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", (d, i) => {
        const arc: any = d3
          .arc()
          .cornerRadius(cornerRadius)
          .innerRadius(innerRadius)
          .outerRadius(innerRadius + ((50 - innerRadius) * d.value) / max)
          .startAngle((i * (2 * Math.PI)) / data.length)
          .endAngle(((i + 1) * (2 * Math.PI)) / data.length + 0.0005);
        return arc();
      })
      .attr("transform", "translate(50,50)")
      .attr("fill", (d) => d.color || "black");

    svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", innerRadius + cornerRadius)
      .attr("fill", "white");

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data, innerRadius, cornerRadius]);
  return (
    <div className={cn("", className)} {...props}>
      <svg
        ref={ref}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      ></svg>
    </div>
  );
};

export default function IselDevPage() {
  return (
    <main className="grid place-content-center">
      <Card className="aspect-square w-96 p-6">
        <PolarArea
          innerRadius={10}
          cornerRadius={2}
          data={[
            { label: "C", value: 50, color: "#68FF80" },
            { label: "B", value: 45, color: "#05F2C7" },
            { label: "A", value: 40, color: "#7A0BC0" },
            { label: "D", value: 35, color: "#F20574" },
            { label: "D", value: 30, color: "#F25C05" },
            { label: "D", value: 25, color: "#F2A104" },
            { label: "D", value: 20, color: "#F2E205" },
          ]}
        />
      </Card>
    </main>
  );
}
