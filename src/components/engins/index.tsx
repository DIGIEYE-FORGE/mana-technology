import { useAppContext } from "@/Context";
import { Progress } from "@/components/ui/progress";
import useSWR from "swr";
import Loader from "../loader";
interface EnginsProps {
  attribute: {
    label: string;
    icon: string;
    utilisationTelemetry: string;
    disponibilliteTelemetry: string;
    serial: string;
  }[];
}

function Engins({ attribute }: EnginsProps) {
  const { backendApi } = useAppContext();

  const { data, isLoading, error } = useSWR(
    `enginsTelemetry${JSON.stringify(attribute)}`,
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
          const res1 = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name: utilisationTelemetry,
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
          });
          const res2 = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name: disponibilliteTelemetry,
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
          });
          return {
            label,
            icon,
            value: res1?.results?.[0]?.value || 0,
            value2: res2?.results?.[0]?.value || 0,
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
      <div className="flex min-h-[14rem] flex-col overflow-auto">
        {(data || [])?.map((engin, index) => (
          <div key={index} className="flex flex-1 flex-wrap items-center gap-4">
            <div className="flex w-[25%] min-w-[3rem] items-center gap-2">
              <span className="text-sm font-bold text-white">
                {engin.label}
              </span>
              <img
                src={engin.icon}
                alt={engin?.label}
                className="size-[3rem]"
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
                  {engin?.value || 0}%
                </span>
              </div>
            </div>
            <div className="relative h-[2rem] flex-1">
              <Progress
                key={index}
                value={engin?.value2 || 0}
                className="h-full w-full rounded-lg bg-[#2B50C0]/30"
                color="#D2DDFF"
              />
              <div className="absolute left-2 top-[10%]">
                <span className="font-bold text-[#2B50C0]">
                  {engin.value2}%
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
