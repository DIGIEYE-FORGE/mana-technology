import { useAppContext } from "@/Context";
import { LastTelemetry, Widget, flatten } from "@/utils";
import useSWR from "swr";
import GaugeChart from "react-gauge-chart";
import Loader from "@/components/loader";

const defaultArs = [
  {
    stop: 1,
    color: "#0c2364",
  },
];

export type GaugeWidgetData = {
  serial: string;
  telemetryName: string;
  unit?: string;
  showNeedle?: boolean;
  stops: {
    stop: number;
    color: string;
  }[];
  value?: number;
};

export default function GaugeWidget({ attributes }: Widget) {
  const { backendApi } = useAppContext();

  const {
    serial,
    telemetryName,
    unit,
    showNeedle = true,
    stops = defaultArs,
  } = attributes as GaugeWidgetData;
  const name = telemetryName?.split(".")[0];

  const {
    data: telemetry,
    isLoading,
    error,
  } = useSWR(
    `${serial}/${telemetryName}`,
    async () => {
      if (attributes?.value) return { value: attributes.value };
      if (!serial || !telemetryName) return null;

      const { results } = await backendApi.findMany<LastTelemetry>(
        "lasttelemetry",
        {
          where: { device: { serial }, name: telemetryName },
          // select: { lastTelemetries: { where: { name } } },
        },
      );

      return results[0];
    },
    { refreshInterval: 60_000 },
  );

  const value =
    parseFloat(
      flatten({
        [name!]: telemetry?.value,
      })?.[telemetryName] as string,
    ) || 0;

  const sortedArcs = stops?.sort((a, b) => a.stop - b.stop);
  const max = stops.at(-1)?.stop || 100;
  const arcsLength = sortedArcs?.reduce((acc, arc, index, arr) => {
    if (index === 0) return [arc.stop];
    const lastArc = arr[index - 1];
    const arcLength = arc.stop - lastArc.stop;
    acc.push(arcLength);
    return acc;
  }, [] as number[]);

  const colors = sortedArcs?.map((arc) => arc.color);

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
  if (!telemetry)
    return (
      <div className="flex h-full w-full items-center justify-center">
        no data
      </div>
    );

  const needleColor = showNeedle ? "#7f7f7f" : "transparent";
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GaugeChart
        colors={colors}
        percent={value / max}
        animate={false}
        needleBaseColor={needleColor}
        needleColor={needleColor}
        arcsLength={arcsLength}
        formatTextValue={() => `${value.toFixed(2)} ${unit}`}
        textColor={"#fff"}
      />
    </div>
  );
}
