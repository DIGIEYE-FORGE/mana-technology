import { useAppContext } from "@/Context";
import { Progress } from "@/components/ui/progress";
import useSWR from "swr";
import Loader from "../loader";
import { HistoryType } from "@/utils";
interface EnginsProps {
  selectedWithDate?: boolean;
  attribute: {
    label: string;
    icon: string;
    utilisationTelemetry: string;
    disponibilliteTelemetry: string;
    serial: string;
    icon2?: string;
  }[];
}

function Engins({ attribute, selectedWithDate = false }: EnginsProps) {
  const { backendApi, dateRange } = useAppContext();

  const { data, isLoading, error } = useSWR(
    `enginsTelemetry${JSON.stringify(attribute)}${selectedWithDate ? JSON.stringify(dateRange) : ""}`,
    async () => {
      const res = await Promise.all(
        attribute.map(async (engin) => {
          const {
            label,
            icon,
            utilisationTelemetry,
            disponibilliteTelemetry,
            serial,
          } = engin;
          const res1 = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: {
                page: 1,
                perPage: 10_000,
              },
              select: [utilisationTelemetry],
              where: {
                serial,
                createdAt: {
                  $gt: new Date(dateRange?.from as Date),
                  $lte: dateRange?.to && new Date(dateRange.to as Date),
                },
              },
            },
          );

          const res2 = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: {
                page: 1,
                perPage: 10_000,
              },
              select: [disponibilliteTelemetry],
              where: {
                serial,
                createdAt: {
                  $gt: new Date(dateRange?.from as Date),
                  $lte: dateRange?.to && new Date(dateRange.to as Date),
                },
              },
            },
          );

          const sum1 = (res1?.results || [])?.reduce(
            (acc, item) => acc + Number(item?.[utilisationTelemetry]),
            0,
          );
          const sum2 = (res2.results || [])?.reduce(
            (acc, item) => acc + Number(item?.[disponibilliteTelemetry]),
            0,
          );
          return {
            label,
            icon,
            value: (Number(sum1) / res1?.results.length) ,
            value2: (Number(sum2) / res2?.results.length),
          };
        }),
      );
      return res;
    },
  );

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span>Error {error.message}</span>
      </div>
    );
  }

  if (!data || !data.length) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span>No data</span>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex gap-2 [&>*]:flex-1 [&>*]:text-gray-400">
        <h3 className="w-[25%]">Engins</h3>
        <h3 className="w-[35%]">Utilisation</h3>
        <h3 className="w-[40%]">Disponibillité</h3>
      </div>
      <div className="flex min-h-[14rem] flex-col gap-2 overflow-auto">
        {(data || [])?.map((engin, index) => (
          <div key={index} className="flex flex-1 flex-wrap items-center gap-4">
            <div className="item flex shrink-0 items-center justify-between gap-2">
              <span className="w-[7rem] shrink-0 text-sm font-bold text-white">
                {engin.label}
              </span>
              <img
                src={engin.icon}
                alt={engin?.label}
                className="w-[4rem] rounded-lg"
              />
            </div>
            <div className="relative h-[2rem] flex-1">
              <Progress
                key={index}
                value={engin?.value || 0}
                className="h-full w-full rounded-lg bg-[#2B50C0]/30"
                color="#D2DDFF"
              />
              <div className="absolute left-2 top-[10%]">
                <span className="font-bold text-[#2B50C0]">
                  {Number(engin?.value || 0)?.toFixed(2) || 0}%
                </span>
              </div>
            </div>
            <div className="relative h-[2rem] flex-1">
              <Progress
                key={index}
                value={Number(engin?.value2) || 0}
                className="h-full w-full rounded-lg bg-[#2B50C0]/30"
                color="#D2DDFF"
              />
              <div className="absolute left-2 top-[10%]">
                <span className="font-bold text-[#2B50C0]">
                  {Number(engin.value2 || 0)?.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engins;
