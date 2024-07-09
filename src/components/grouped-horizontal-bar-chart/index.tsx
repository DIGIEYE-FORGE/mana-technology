import { useAppContext } from "@/Context";

import useSWR from "swr";
import Loader from "@/components/loader";
import { HorizontalBarChart } from "../horizontal-bar-chart";

interface GroupedHorizontalBarChartProps {
  attributes: {
    telemetries: {
      group: string;
      name: string;
      color: string;
      label: string;
      serial: string;
    }[];
  };
}

export const GroupedHorizontalBarChart = ({
  attributes,
}: GroupedHorizontalBarChartProps) => {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetryDonutChartProps${JSON.stringify(attributes)}`,
    async () => {
      if (!attributes.telemetries?.length) return [];
      const res1 = await Promise.all(
        attributes.telemetries.map(async (device) => {
          const { name, color, serial, label, group } = device;
          const res = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name,
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
            name: label,
            group,
            value: res.results[0].value,
          };
        }),
      );
      const groupedData = res1?.reduce((acc: any, entry: any) => {
        if (!acc[entry.group]) {
          acc[entry.group] = [];
        }
        const { group, ...rest } = entry;
        acc[group].push(rest);
        return acc;
      }, {});

      return groupedData;
    },
  );

  if (isLoading) {
    return (
      <main className="grid place-content-center">
        <Loader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid place-content-center">
        <h3>Something went wrong.</h3>
      </main>
    );
  }

  const finalData = Object.entries(data).map(([name, telemetries]: any) => ({
    name,
    telemetries,
  }));

  return <HorizontalBarChart data={finalData} className="h-1 flex-1 gap-8" />;
};
