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
    return <>{parseFloat(stringify(value || 0)).toFixed(2)}</>;
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
      className={cn("flex h-full w-full flex-col text-sm", className)}
    >
      <div
        className="grid max-w-full font-semibold [&>*]:truncate [&>*]:px-2 [&>*]:capitalize"
        style={{
          gridTemplateColumns: `repeat(${mappings.length + 1}, 1fr)`,
        }}
      >
        <div>date</div>
        {mappings.map((m) => (
          <div key={m.telemetryName}>{m.displayName || m.telemetryName}</div>
        ))}
      </div>
      <VirtualizedList
        containerHeight={1200}
        itemHeight={48}
        items={data || []}
        className="h-2 flex-1"
      >
        {({ item, index, style }) => {
          return (
            <div style={style}>
              <div
                key={index}
                className="grid items-center gap-2 rounded-full bg-black/10 px-2 py-2 [&>*]:truncate [&>*]:px-2"
                style={{
                  gridTemplateColumns: `repeat(${mappings.length + 1}, 1fr)`,
                }}
              >
                <div className="text-[#FEC33A]">
                  {format(new Date(item.date || item.createdAt), "PP ")}
                </div>
                {mappings.map((m) => {
                  const value = flatten(item)[m.telemetryName];
                  return (
                    <div key={m.telemetryName} className="text-[#FEC33A]">
                      <Formatter
                        value={value}
                        displayFormat={m.displayFormat}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </VirtualizedList>
      {isLoading && (
        <main className="absolute inset-0 grid place-content-center">
          <Loader />
        </main>
      )}
    </main>
  );
}
