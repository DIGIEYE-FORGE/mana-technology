import { useAppContext } from "@/Context";
import useSWR from "swr";
import Loader from "../loader";
import { cn } from "@/lib/utils";
import { HistoryType } from "@/utils";

interface props {
  attributes: {
    title: string;
    telemetries: {
      name: string;
      serial: string;
      label: string;
      color: string;
      showLabel?: boolean;
    }[];
  }[];
}

interface ProgressTo {
  data: {
    value: number;
    name: string;
    color: string;
    label?: string;
  }[];
  sum: number;
  className?: string;
}

function ProgressData({ data, sum, className }: ProgressTo) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-2">
        {data.map((telemetry, index) => {
          return (
            <div key={index} className="flex flex-col">
              {telemetry.value.toFixed(0)}
            </div>
          );
        })}
      </div>
      <div
        className={cn(
          "flex h-[2.5rem] w-full overflow-hidden rounded-lg border border-black",
          className,
        )}
      >
        {data.map((telemetry, index) => {
          return (
            <div
              className="text-bold flex flex-col items-center justify-center text-white"
              key={index}
              style={{
                width:
                  telemetry?.value > 0
                    ? `${(telemetry.value * 100) / sum}%`
                    : "0%",
                backgroundColor: telemetry.color,
              }}
            >
              <span className="text-sm">
                {telemetry?.value > 0 &&
                  ((telemetry.value * 100) / sum).toFixed(2) + "%"}
              </span>
              {/* {telemetry?.value && (
                <div className="text-xs">{telemetry.label}</div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProgressMultiple({ attributes }: props) {
  const { backendApi, dateRange } = useAppContext();

  const { data, isLoading, error } = useSWR(
    `telemetries?${JSON.stringify({ attributes, dateRange })}`,
    async () => {
      if (!dateRange?.from || !attributes?.length) return [];
      return await Promise.all(
        attributes.map(async (device) => {
          const { telemetries } = device;
          const res = await Promise.all(
            telemetries.map(async (telemetry) => {
              const { name, serial } = telemetry;
              const { results } = await backendApi.findMany<HistoryType>(
                "/dpc-history/api/history",
                {
                  pagination: {
                    page: 1,
                    perPage: 10_00,
                  },
                  select: [name],
                  where: {
                    serial,
                    createdAt: {
                      $gt: new Date(dateRange.from as Date),
                      $lte: dateRange?.to && new Date(dateRange.to as Date),
                    },
                  },
                },
              );
              const value = results?.reduce((acc, curr) => {
                const val = typeof curr[name] === "number" ? curr[name] : 0;
                return acc + Number(val);
              }, 0);
              return {
                value: value,
                name,
              };
            }),
          );
          return res;
        }),
      );
    },
  );

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        failed to load
      </div>
    );
  if (!data)
    return (
      <div className="h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        no data
      </div>
    );
  return (
    <div className="flex flex-col gap-3 overflow-y-auto">
      {attributes.map((device, index) => {
        const { telemetries, title } = device;
        const sum = data[index]?.reduce(
          (acc, curr) => acc + curr?.value || 0,
          0,
        );

        return (
          <div key={index} className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <ProgressData
              data={data[index].map((ele) => {
                console.log(ele);

                return {
                  value: ele?.value || 0,
                  name: ele?.name || "",
                  label: telemetries.find((tel) => tel?.name === ele?.name)
                    ?.showLabel
                    ? telemetries.find((tel) => tel?.name === ele?.name)?.label
                    : "",
                  color:
                    telemetries.find((tel) => tel?.name === ele?.name)?.color ||
                    "red",
                };
              })}
              sum={sum}
            />
          </div>
        );
      })}

      <div className="flex w-full justify-center gap-7">
        {/* {data[index].map((ele, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-sm">{ele?.name}</span>
            </div>
          );
        })} */}
        <div className="flex items-center gap-1">
          <span className="flex h-4 w-4 rounded-full bg-[#bf212f]"></span>
          <span>HG</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex h-4 w-4 rounded-full bg-[#27b376]"></span>
          <span>MG</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex h-4 w-4 rounded-full bg-[#3366ff]"></span>
          <span>LG</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressMultiple;
