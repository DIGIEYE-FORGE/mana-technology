import ReactApexChart from "react-apexcharts";
import { ReactNode } from "react";
import {
  // ChartTelemetry,
  // HistoryType,
  Widget,
  // flatten,
  // getRandomColor,
} from "@/utils";

type Props = Widget & {
  children?: ReactNode;
  color: string;
};

export const MoteurCard = (props: Props) => {
  // const { backendApi, dateRange } = useAppContext();
  // const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];
  // const {
  //   data: dym,
  //   isLoading,
  //   error,
  // } = useSWR(
  //   `histories?${JSON.stringify({
  //     telemetries,
  //     dateRange,
  //   })}`,
  //   async () => {
  //     if (!dateRange?.from || telemetries.length === 0) return [];
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
  //               createdAt: {
  //                 $gt: new Date(dateRange?.from as Date),
  //                 $lte: dateRange?.to && new Date(dateRange?.to as Date),
  //               },
  //             },
  //           },
  //         );
  //         return results;
  //       }),
  //     );
  //     const res1 = res.map((item, index) => ({
  //       name: telemetries[index].label || telemetries[index].name,
  //       type: telemetries[index].area ? "area" : "line",
  //       data: item.map((item) => ({
  //         x: new Date(item.createdAt),
  //         y: Number(flatten(item)[telemetries[index].name]),
  //       })),
  //     }));
  //     if (props.moyenne) {
  //       const res2 = res1.map((item, index) => {
  //         return {
  //           name:
  //             (telemetries[index].label || telemetries[index].name) +
  //             " (moyenne)",
  //           type: "line",
  //           color: getRandomColor(),
  //           data: [
  //             {
  //               x: new Date(item.data[0].x),
  //               y:
  //                 item.data.reduce((acc, item) => acc + item.y, 0) /
  //                 item.data.length,
  //             },
  //             {
  //               x: new Date(item.data[item.data.length - 1].x),
  //               y:
  //                 item.data.reduce((acc, item) => acc + item.y, 0) /
  //                 item.data.length,
  //             },
  //           ],
  //         };
  //       });
  //       res1.push(...res2);
  //     }
  //     return res1;
  //   },
  // );

  // if (isLoading)
  //   return (
  //     <main className="grid place-content-center">
  //       <Loader />
  //     </main>
  //   );
  // if (error)
  //   return (
  //     <main className="grid place-content-center">
  //       <h3>Something went wrong.</h3>
  //     </main>
  //   );

  // console.log("color: ", dym);
  const data = [10, 100, 5, 200, 3, 150, 220, 0, 10, 300];
  return (
    <ReactApexChart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        colors: [props.color], // Change the line color to match the image
        grid: {
          borderColor: "#797979", // Adjust grid color to be more visible against the dark background
          xaxis: { lines: { show: false } }, // Hide x-axis grid lines
          yaxis: { lines: { show: true } }, // Hide y-axis grid lines
        },
        chart: {
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Adjust the stroke width to match the image
        dataLabels: { enabled: false },
        fill: {
          type: "solid",
        },
        xaxis: {
          type: "numeric",
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            showDuplicates: false,
            show: true,
            formatter(value: string) {
              return Number(value).toFixed(0);
            },
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
          max: data.reduce((a, b) => Math.max(a, b)) + 50,
          tickAmount: 1,
          labels: {
            show: true,
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
      }}
      series={[
        {
          name: "Series 1",
          data: data,
        },
      ]}
      type="line"
      height="100%"
    />
  );
};
