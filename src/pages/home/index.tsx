import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";
import useSWR from "swr";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[86px] gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <ProductionEvolution />
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-9 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-6 row-span-3"></Card>
      <Card className="col-span-6 row-span-3"></Card>
    </main>
  );
}

function ProductionEvolution() {
  // const { data, isLoading, error } = useSWR(
  //   `histories?${JSON.stringify({
  //     telemetries,
  //     dateRange,
  //   })}`,
  //   async () => {
  //     if (!dateRange.from || telemetries.length === 0) return [];
  //     const res = await Promise.all(
  //       telemetries.map(async ({ serial, name }) => {
  //         const { results } = await backendApi.findMany<HistoryType>(
  //           "/dpc-history/api/history",
  //           {
  //             pagination: {
  //               page: 1,
  //               perPage: 10_00,
  //             },
  //             select: [name],
  //             where: {
  //               serial,
  //               // createdAt: {
  //               //   $gt: new Date(dateRange.from as Date),
  //               //   $lte: dateRange.to && new Date(dateRange.to as Date),
  //               // },
  //             },
  //           },
  //         );
  //         return results;
  //       }),
  //     );
  //     return res.map((item, index) => ({
  //       name: telemetries[index].label || telemetries[index].name,
  //       type: telemetries[index].area ? "area" : "line",
  //       data: item.map((item) => ({
  //         x: new Date(item.createdAt),
  //         y: Number(flatten(item)[telemetries[index].name]),
  //       })),
  //     }));
  //   },
  // );
  return (
    <Card className="col-span-3 row-span-3 flex-col p-6">
      <h3 className="text-center text-lg font-bold">Production Evolution</h3>
      {/* <ReactApexChart
        options={{
          theme: {
            mode: "dark",
          },
          tooltip: {
            cssClass: "text-black",
          },
          colors: telemetries.map((item) => item.color),
          chart: {
            id,
            // type: "area",
            background: "transparent",
            toolbar: {
              show: false,
            },
            animations: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
            selection: {
              enabled: false,
            },
            dropShadow: {
              enabled: false,
            },
          },
          stroke: {
            width: 3,
            curve: "smooth",
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "solid",
            opacity: telemetries.map((item) => (item.area ? 0.33 : 1)),
          },
          xaxis: {
            type: "datetime",
            max: dateRange.to ? new Date(dateRange.to).getTime() : undefined,
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
          yaxis: {
            min: 0,
            tickAmount: 4,
            labels: {
              show: true,
              formatter: function (value) {
                return value.toFixed(2);
              },
              style: {
                fontSize: "12px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },
        }}
        series={data || []}
        // type={"area"}
        width={"100%"}
        height={"100%"}
      /> */}
    </Card>
  );
}
