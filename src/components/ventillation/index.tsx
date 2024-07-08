import { useAppContext } from "@/Context";
import useSWR from "swr";
import Loader from "../loader";

const floatOrDecimal = (value: number) => {
  return value % 1 === 0 ? value : value.toFixed(2);
};

interface VentillationProps {
  attribute: {
    telemetryName: string;
    serial: string;
    labelTelemetry:
      | "Oxygène"
      | "co"
      | "no2"
      | "Energie"
      | "T. Sèche"
      | "T. Humide"
      | "CO2"
      | "CO"
      | "NO2"
      | "Vitesse de l’air"
      | "Energie1"
      | "Energie2"
      | "Marche1"
      | "Marche2"
      | "Ventilateur N°1"
      | "Ventilateur N°2";

    icon?: string;
    randomValue?: number;
    unit?: "m/s" | "ppm" | "%" | "°C" | "RPM" | "kw" | "m3/h" | "kWh" | "m3";
  }[];
}
function Ventillation({ attribute }: VentillationProps) {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetryDonutChartProps${JSON.stringify(attribute)}`,
    async () => {
      if (!attribute?.length) return [];
      const res1 = await Promise.all(
        attribute.map(async (device) => {
          const {
            telemetryName,
            labelTelemetry,
            icon,
            unit,
            randomValue,
            serial,
          } = device;
          const res = await backendApi.findMany<{
            name: string;
            value: number;
          }>("lasttelemetry", {
            where: {
              name: telemetryName,
              device: { serial },
            },
            select: { name: true, value: true },
            orderBy: {
              updatedAt: "desc",
            },
            pagination: {
              page: 1,
              perPage: 1,
            },
          });
          return {
            name: labelTelemetry,
            value:
              (
                floatOrDecimal(Number(res?.results[0]?.value)) ||
                randomValue ||
                0
              )
                .toString()
                .replace(".", ",") +
              "" +
              (unit || ""),

            icon,
          };
        }),
      );
      return res1;
    },
    {
      refreshInterval: 60_000,
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
      <div className="flex h-full w-full items-center justify-center">
        failed to load
      </div>
    );
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-start [&>*]:flex-1">
        <div className="flex items-center justify-center gap-2">
          <img src="/energy.svg" alt="" width={15} height={15} />
          Energie
          <span className="text-sm text-[#FAAC18]">
            {data?.find((item) => item?.name === "Energie1")?.value ?? "--"}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src="/energy.svg" alt="" width={15} height={15} />
          Energie
          <span className="text-sm text-[#FAAC18]">
            {data?.find((item) => item?.name === "Energie2")?.value ?? "--"}
          </span>
        </div>
      </div>
      <div className="flex gap-2 divide-x-2 divide-white [&>*]:px-2">
        <div className="flex flex-1 items-center gap-2">
          <img src="/ventilateur.svg" alt="" width={60} height={60} />
          <div className="flex flex-col [&>*]:text-sm">
            <h3 className="font-semibold">Ventilateur N°1</h3>
            <h3 className="flex gap-2 font-bold text-[#FAAC18]">
              <span>
                {data?.find((item) => item?.name === "Ventilateur N°1")
                  ?.value ?? "--"}
              </span>
              <span className="space-x-2">m3/s</span>
            </h3>
            <div className="flex gap-2 text-sm">
              <span>H.marche</span>
              <span className="text-[#FAAC18]/80">
                {data?.find((item) => item?.name === "Marche1")?.value ?? "--"}{" "}
                {" H"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <img src="/ventilateur.svg" alt="" width={60} height={60} />
          <div className="flex flex-col [&>*]:text-sm">
            <h3 className="font-semibold">Ventilateur N°2</h3>
            <h3 className="flex gap-2 text-sm font-bold text-[#FAAC18]">
              <span>
                {data?.find((item) => item?.name === "Ventilateur N°2")
                  ?.value ?? "--"}
              </span>
              <span className="space-x-2">m3/s</span>
            </h3>
            <div className="flex gap-2 text-sm">
              <span>H.marche</span>
              <span className="text-[#FAAC18]/80">
                {data?.find((item) => item?.name === "Marche2")?.value ?? "--"}
                {"  H"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-between">
        {data
          ?.filter(
            (item) =>
              item?.name !== "Ventilateur N°1" &&
              item?.name !== "Ventilateur N°2" &&
              item?.name !== "Energie1" &&
              item?.name !== "Energie2" &&
              item?.name !== "Marche1" &&
              item?.name !== "Marche2",
          )
          .map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="rounded-full bg-[#061781] p-3">
                <img
                  src={item?.icon ? item?.icon : "/co2.svg"}
                  alt=""
                  width={25}
                  height={25}
                />
              </div>

              <h3 className="text-xs font-light md:text-sm">{item?.name}</h3>
              <h3 className="text-xs text-[#FAAC18] md:text-sm">
                {item?.value}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ventillation;
