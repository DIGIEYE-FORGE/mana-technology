import { useAppContext } from "@/Context";
import { ProgressCircle } from "@/components/progress-circle";
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
  const sum = data.reduce((acc, curr) => acc + curr.value, 0);
  const cum = data.reduce((acc, curr, index) => {
    acc.push(index === 0 ? curr.value : acc[index - 1] + curr.value);
    return acc;
  }, [] as number[]);

  const gdF = 0.15;
  const colors2 = data.map((item, index) => {
    const start = index === 0 ? 0 : (cum[index - 1] / sum) * 100;
    const end = (cum[index] / sum) * 100;
    const color = Color(item.color);
    return `${color} ${start}% , ${color.darken(gdF)} ${end}%`;
  });
  const colors1 = data.map((item, index) => {
    const start = index === 0 ? 0 : (cum[index - 1] / sum) * 100;
    const end = (cum[index] / sum) * 100;
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
        // overflow: "hidden",
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
  attribute: {
    name: string;
    label: string;
    serial: string;
    color: string;
  }[];
}

export function ConeChart({
  className,
  attribute,
  legendWidth = 200,
}: ConChartProps) {
  const { backendApi } = useAppContext();
  const {
    data: res,
    isLoading,
    error,
  } = useSWR(`telemetry${JSON.stringify(attribute)}`, async () => {
    if (!attribute?.length) return [];
    return await Promise.all(
      attribute.map(async (device) => {
        const { name, label, color, serial } = device;
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
          value: res.results[0].value,
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
      <div className="debug flex h-full w-full items-center justify-center [&>*]:text-xl [&>*]:font-bold">
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
      name: attribute[index].label,
    };
  });
  const cum = data.reduce((acc, curr, index) => {
    acc.push(index === 0 ? curr.value : acc[index - 1] + curr.value);
    return acc;
  }, [] as number[]);
  const cumAvg = data.reduce((acc, curr, index) => {
    acc.push(index === 0 ? curr.value / 2 : cum[index - 1] + curr.value / 2);
    return acc;
  }, [] as number[]);
  const sum = data.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <div className={cn("flex w-full justify-between", className)}>
      <div className={cn("relative h-full w-full flex-1")}>
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
                  bottom: `${(cumAvg[index] / sum) * 100}%`,
                }}
                key={index}
                className="absolute left-1/2 flex w-full translate-y-1/2 items-center gap-3 rounded"
              >
                <div className="h-1 w-1/2 shrink-0 rounded bg-[#DBDBDB]"></div>
                <div
                  className="flex shrink-0 flex-col overflow-hidden"
                  style={{ width: legendWidth }}
                >
                  <span className="w-full truncate whitespace-nowrap text-base">
                    {item.name}
                  </span>
                  <span className="text-base font-bold text-[#FAAC18]">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-52 flex-wrap items-center justify-evenly">
        {data.map((item, index) => {
          return (
            <ProgressCircle
              key={index}
              className="font-ex size-24 text-xs"
              progress={(item.value / sum) * 100}
              backgroundColor={Color(item.color).alpha(0.1).hex()}
              gradientEndColor={Color(item.color).darken(0.2).hex()}
              gradientStartColor={Color(item.color).lighten(0.2).hex()}
            />
          );
        })}
      </div>
    </div>
  );
}
