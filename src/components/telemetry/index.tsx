import { useAppContext } from "@/Context";
import {
  JsonValue,
  LastTelemetry,
  TableDisplayForma,
  stringify,
} from "@/utils";
import useSWR from "swr";
import Loader from "../loader";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { env } from "@/utils/env";

const Formatter = ({
  value,
  displayFormat,
}: {
  value: JsonValue;
  displayFormat: TableDisplayForma | undefined;
}) => {
  if (displayFormat === "string" || displayFormat === "json") {
    return <>{stringify(value)}</>;
  }
  if (displayFormat === "integer") return <>{parseInt(stringify(value), 10)}</>;
  if (displayFormat === "float")
    return <>{parseFloat(stringify(value || 0)).toFixed(2)}</>;
  if (displayFormat === "boolean") return <>{value ? "true" : "false"}</>;
  if (displayFormat === "date")
    return <>{format(new Date(stringify(value)), "PP")}</>;
  if (displayFormat === "onOff") return <>{value ? "ON" : "OFF"}</>;
  if (displayFormat === "image")
    return (
      <Avatar className="w-full rounded-none">
        <AvatarImage
          src={`${env.VITE_BACKEND_API}/uploads/${stringify(value)}`}
        />

        <AvatarFallback className="bg-foreground/5 font-bold [&>]:rounded">
          {stringify(value) || "No Image"}
        </AvatarFallback>
      </Avatar>
    );
  return <>{stringify(value)}</>;
};

export default function Telemetry({
  telemetry,
  displayFormat,
  correction,
  preLoadData,
}: {
  telemetry: {
    name: string;
    serial: string;
    value?: JsonValue;
  };
  preLoadData?: LastTelemetry[];
  correction?: number;

  displayFormat?: TableDisplayForma;
}) {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetry?${JSON.stringify({ telemetry })}`,
    async () => {
      if (telemetry.value !== undefined) return { value: telemetry.value };
      if (preLoadData) {
        const item = preLoadData.find((it) => it.name === telemetry.name);
        if (item) return item;
      }
      const res = await backendApi.findMany<LastTelemetry>("lasttelemetry", {
        where: {
          name: telemetry.name,
          device: { serial: telemetry.serial },
        },
      });
      return res.results[0];
    },
  );

  let value = data?.value ?? 0;

  if (typeof value === "number" && correction) value = value * correction;

  if (isLoading) return <Loader />;
  if (error) return "Something went wrong.";
  if (data === undefined || data === null) return "No data";
  return <Formatter value={value} displayFormat={displayFormat} />;
}
