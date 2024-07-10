import { useAppContext } from "@/Context";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useSWR from "swr";
import { format } from "date-fns";

import {
  HistoryType,
  JsonValue,
  TableDisplayForma,
  flatten,
  stringify,
} from "@/utils";
import Loader from "@/components/loader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface HistoryTableProps {
  title: string;
  telemetries: {
    name: string;
    serial: string;
    label?: string;
  }[];
  interval?: number;
}

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
  return <>{stringify(value)}</>;
};

export const HistoryTable = ({
  title,
  telemetries,
  interval,
}: HistoryTableProps) => {
  const { backendApi, dateRange } = useAppContext();
  const fetchInterval = interval || 10000; // Default to 10 seconds if no interval is provided

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({ telemetries, dateRange })}`,
    async () => {
      const { results } = await backendApi.findMany<HistoryType>(
        "/dpc-history/api/history",
        {
          pagination: {
            page: 1,
            perPage: 20,
          },
          select: telemetries?.map((item) => item.name),
          where: {
            serial: {
              $in: telemetries?.map((item) => item.serial),
            },
            createdAt: {
              $gt: new Date(dateRange?.from as Date),
              $lte: new Date(dateRange?.to || (new Date() as Date)),
            },
          },
        },
      );
      return results;
    },
    { refreshInterval: fetchInterval },
  );

  const histories = data || [];

  return (
    <>
      {error ? (
        <div className="grid min-h-28 place-content-center">
          <h3>Something went wrong.</h3>
        </div>
      ) : (
        <ScrollArea className="relative h-full max-h-[calc(100vh_-_7.5rem)] w-full">
          <div className="relative h-full min-h-48 w-full">
            <Table
              className={cn(
                "w-full border-separate border-spacing-y-1 p-0 odd:[&>tbody>tr]:bg-black/10",
                isLoading && "h-full",
              )}
            >
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-base text-white">Date</TableHead>
                  {telemetries?.map((telemetry) => (
                    <TableHead
                      key={telemetry.name}
                      className="text-base text-white"
                    >
                      {telemetry.label ? title + " " + telemetry.label : title}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {histories?.map((item, index) => (
                  <TableRow key={index} className="hover:bg-transparent">
                    <TableCell>
                      {format(
                        new Date(item.date || item.createdAt),
                        "MM/dd/yyyy HH:mm:ss",
                      )}
                    </TableCell>
                    {telemetries?.map((telemetry) => (
                      <TableCell key={telemetry.name}>
                        <Formatter
                          value={flatten(item)[telemetry.name]}
                          displayFormat="float"
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {isLoading && (
              <main className="absolute inset-0 grid place-content-center">
                <Loader />
              </main>
            )}
          </div>
        </ScrollArea>
      )}
    </>
  );
};
