import useSWR from "swr";
import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { LastTelemetry } from "@/utils";
import { cn } from "@/lib/utils";

interface VentilationCardProps {
  title: string;
  unit?: string;
  telemetry: {
    name: string;
    serial: string;
  }[];
  interval?: number;
  disabled?: boolean;
}

export const VentilationCard = ({
  title,
  unit = "",
  interval,
  telemetry,
}: VentilationCardProps) => {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetry?${JSON.stringify({ telemetry })}`,
    async () => {
      if (!telemetry?.length) return [];
      const res1 = await Promise.all(
        telemetry.map(async (device) => {
          const { name, serial } = device;
          const res = await backendApi.findMany<LastTelemetry>(
            "lasttelemetry",
            {
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
            },
          );
          return res.results[0] || 0;
        }),
      );
      return res1 || [];
    },
    { refreshInterval: interval },
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
  return (
    <div className={cn(`flex flex-col items-center justify-center gap-3`, {})}>
      <h1 className="text-center text-xl font-semibold">{title}</h1>
      <div className="flex h-1 w-full flex-1 flex-col items-center justify-center gap-1">
        {(data || [])?.map((d, i) => {
          return (
            <div
              key={i}
              className={cn("flex items-center gap-3 text-3xl font-semibold", {
                "text-5xl": data?.length === 1,
              })}
            >
              <span>
                {typeof d.value === "number" ? d.value.toFixed(2) : "0"}
              </span>
              {unit && <span>{unit}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
