import { useAppContext } from "@/Context";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LastTelemetry, Widget } from "@/utils";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import useSWR from "swr";

type MultipleProgressWidgetData = {
  telemetries?: {
    serial: string;
    name: string;
    label?: string;
    color?: string;
    icon?: string;
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
      <div className="flex flex-col gap-6 px-3 text-sm">
        {data?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
            className="flex items-end gap-2"
            key={index}
          >
            <div>
              <img
                src={
                  telemetries.find((t) => t.name === item?.name)?.icon ||
                  "/truck.svg"
                }
                alt="truck"
              />
            </div>
            <div key={index} className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  {telemetries.find((t) => t.name === item?.name)?.label ||
                    item?.name}
                </span>
              </div>
              <div className="relative">
                <Progress
                  key={index}
                  style={{ height: "2rem" }}
                  value={parseFloat(item?.value as string) || 0}
                  className="w-full rounded-lg"
                  color={telemetries.find((t) => t.name === item?.name)?.color}
                />

                <div className="absolute left-2 top-2 font-bold text-black">
                  {item?.value as string}%
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  );
}
