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
  };
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
      const res = await backendApi.findMany<LastTelemetry>("lasttelemetry", {
        where: {
          name: telemetry.name,
          device: { serial: telemetry.serial },
        },
      });
      return res?.results[0] || 0;
    },
    {
      refreshInterval: interval,
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

  const value = typeof data?.value === "number" ? data.value : 0;
  return (
    <div className={cn(`flex flex-col items-center gap-3`, {})}>
      <h1 className="text-center text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-3 text-5xl font-semibold">
        <span>{value}</span>
        {unit && <span>{unit}</span>}
      </div>
    </div>
  );
};
