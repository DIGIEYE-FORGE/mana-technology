import { useAppContext } from "@/Context";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LastTelemetry, Widget } from "@/utils";
import { Loader } from "lucide-react";
import useSWR from "swr";

type MultipleProgressWidgetData = {
  telemetries?: {
    serial: string;
    name: string;
    label?: string;
    color?: string;
  }[];
};

export default function MultiProgressWidget({ attributes }: Widget) {
  const { backendApi } = useAppContext();
  const { telemetries } = attributes as MultipleProgressWidgetData;

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({ telemetries })}`,
    async () => {
      if (!telemetries?.length) return [];
      return await Promise.all(
        telemetries.map(async (device) => {
          const { serial, name } = device;
          const res = await backendApi.findMany<LastTelemetry>(
            "lasttelemetry",
            {
              where: {
                name,
                device: { serial },
              },
              select: { name: true, value: true },
            },
          );
          return res.results[0];
        }),
      );
    },
  );

  if (isLoading)
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="grid h-full w-full place-content-center">
        <h3>Something went wrong.</h3>
      </div>
    );

  if (!data || !telemetries)
    return (
      <div className="grid h-full w-full place-content-center">
        <h3>No data available.</h3>
      </div>
    );
  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col gap-4 px-3 text-sm">
        {data?.map((item, index) => (
          <div key={index} className="space-y-1">
            <div
              className="flex items-center gap-2"
              style={{
                color: telemetries.find((t) => t.name === item?.name)?.color,
              }}
            >
              <span className="font-semibold">
                {telemetries.find((t) => t.name === item?.name)?.label ||
                  item?.name}
              </span>
              <span className="font-bold">{item?.value as string}</span>
            </div>
            <Progress
              key={index}
              style={{ height: "0.75rem" }}
              value={parseFloat(item?.value as string) || 0}
              className="w-full"
              color={telemetries.find((t) => t.name === item?.name)?.color}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
