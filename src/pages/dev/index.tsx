import { D3GaugeChart } from "@/components/d3-gauge-chart";

export default function DevPage() {
  return (
    <div className="debug grid h-screen w-full flex-grow place-content-center font-bold">
      <D3GaugeChart
        value={5}
        maxValue={100}
        backgroundColor="#ddd"
        foregroundColor="#ffab00"
        ticks={{
          count: 5,
          color: "#fff",
          fontSize: "0.8rem",
          offset: 10,
        }}
        dataLabels={{
          show: true,
          color: "#fff",
          fontSize: "8rem",
          formater: (d) => d.toString(),
        }}
      />
    </div>
  );
}
