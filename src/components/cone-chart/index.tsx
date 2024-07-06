import { useAppContext } from "@/Context";
import { cn } from "@/lib/utils";
import Color from "color";
import { HTMLMotionProps, motion } from "framer-motion";
import useSWR from "swr";
import Loader from "../loader";
interface ConeProps extends HTMLMotionProps<"div"> {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const Cone = ({ data, style, children, ...props }: ConeProps) => {
  const gdF = 0.15;
  const colors2 = data.map((item, index) => {
    const start = (index / data.length) * 100;
    const end = ((index + 1) / data.length) * 100;
    const color = Color(item.color);
    return `${color} ${start}% , ${color.darken(gdF)} ${end}%`;
  });
  const colors1 = data.map((item, index) => {
    const start = (index / data.length) * 100;
    const end = ((index + 1) / data.length) * 100;
    const color = Color(item.color);
    return `${color.darken(gdF)} ${start}% , ${color.darken(2 * gdF)} ${end}%`;
  });

  return (
    <motion.div
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        backgroundImage: `linear-gradient(to top, ${colors1.join(",")}), linear-gradient(to top, ${colors2.join(",")})`,
        backgroundSize: "50% 100% , 100% 100%",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      {...props}
    >
      <>{children}</>
    </motion.div>
  );
};

interface ConChartProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  legendWidth?: number;
  attributes: {
    name: string;
    label: string;
    serial: string;
    color: string;
    value?: number;
  }[];
  coneClassName?: string;
  progressClassName?: string;
}

export function ConeChart({
  className,
  attributes,
  legendWidth = 200,
  coneClassName,
}: ConChartProps) {
  const { backendApi } = useAppContext();
  const {
    data: res,
    isLoading,
    error,
  } = useSWR(`telemetry${JSON.stringify(attributes)}`, async () => {
    if (!attributes?.length) return [];
    return await Promise.all(
      attributes.map(async (device) => {
        const { name, label, color, serial, value } = device;
        if (value !== undefined) return { name: label, color, value };
        const res = await backendApi.findMany<{
          name: string;
          value: number;
        }>("lasttelemetry", {
          where: {
            name,
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
          color: color,
          name: label,
          value: res.results?.[0]?.value,
        };
      }),
    );
  });
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="flex h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        failed to load
      </div>
    );

  if (!res)
    return (
      <div className="h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
        no data
      </div>
    );

  const data = res.map((item, index) => {
    return {
      ...item,
      name: attributes[index].label,
    };
  });
  return (
    <div className={cn("flex w-full flex-col justify-between", className)}>
      <div className={cn("relative h-full w-full flex-1", coneClassName)}>
        <div
          className={cn("full relative h-full")}
          style={{
            width: `calc(100% - ${legendWidth + 12}px)`,
          }}
        >
          <Cone className="h-full" data={data} />
          {data.map((item, index) => {
            return (
              <div
                style={{
                  bottom: `${((index + 0.5) / data.length) * 100}%`,
                }}
                key={index}
                className="absolute left-1/2 flex w-full translate-y-1/2 items-center gap-3 rounded"
              >
                <div className="h-1 w-1/2 shrink-0 rounded bg-[#DBDBDB]"></div>
                <div
                  className="flex shrink-0 gap-2 overflow-hidden"
                  style={{ width: legendWidth }}
                >
                  <span className="text-base font-bold text-[#FAAC18]">
                    {item.value}
                  </span>
                  <span className="w-full  whitespace-nowrap text-base">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
