import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VirtualizedList } from "@/components/virtualized-list";
import { cn } from "@/lib/utils";
import {
  HistoryType,
  JsonValue,
  TableDisplayForma,
  TableWidgetData,
  Widget,
  flatten,
  stringify,
} from "@/utils";
import { env } from "@/utils/env";
import { format } from "date-fns";
import { useRef } from "react";
import useSWR from "swr";

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
    return <>====={parseFloat(stringify(value || 0)).toFixed(2)}====</>;
  if (displayFormat === "boolean") return <>{value ? "true" : "false"}</>;
  if (displayFormat === "date")
    return <>{format(new Date(stringify(value)), "PP")}</>;
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

type Props = Widget & {
  className?: string;
};
export default function TableWidget({ attributes, className }: Props) {
  const { backendApi, dateRange } = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const { mappings = [], serial } = attributes as TableWidgetData;

  const { data, isLoading, error } = useSWR(
    `history-table?${JSON.stringify({
      serial,
      mappings,
      dateRange,
    })}`,
    async () => {
      if (!serial) return;
      const { results } = await backendApi.findMany<HistoryType>(
        "/dpc-history/api/history",
        {
          pagination: {
            page: 1,
            perPage: 50_000,
          },
          select: mappings.map((item) => item.telemetryName),
          where: {
            serial,
            createdAt: {
              $gt: new Date(dateRange?.from as Date),
              $lte: new Date(dateRange?.to || (new Date() as Date)),
            },
          },
        },
      );
      return results;
    },
  );

  if (error)
    return (
      <main className="grid place-content-center">
        <h3>Something went wrong.</h3>
      </main>
    );

  return (
    <main
      ref={containerRef}
      className={cn(
        "flex h-full w-full flex-col overflow-auto text-sm",
        className,
      )}
    >
      <table className="table-auto odd:[&>tbody>tr]:bg-black/10 [&_*]:whitespace-nowrap [&_td]:px-3 [&_td]:py-2 [&_td]:pb-3 [&_th]:px-3 [&_th]:pb-3 [&_th]:text-left [&_th]:first-letter:uppercase">
        <thead>
          <tr>
            <th>date</th>
            {mappings.map((m) => (
              <th key={m.telemetryName}>{m.displayName || m.telemetryName}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-yellow-500">
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{format(new Date(item.date || item.createdAt), "PP ")}</td>
              {mappings.map((m) => {
                const value = flatten(item)[m.telemetryName];
                return (
                  <td key={m.telemetryName}>
                    <Formatter value={value} displayFormat={m.displayFormat} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && (
        <main className="absolute inset-0 grid place-content-center">
          <Loader />
        </main>
      )}
    </main>
  );
}
