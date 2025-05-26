import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { useAppContext } from "@/Context";
import useSWR from "swr";

const PebbleCrusher = () => {
  const { backendApi } = useAppContext();

  const { data } = useSWR("last-telemetry", async () => {
    const res = await backendApi.findMany("lastTelemetry", {
      where: {
        device: {
          serial: "0V7ZJGB503H9WGH3",
        },
      },
      pagination: {
        page: 1,
        perPage: 10000,
      },
    });

    const filteredResults = res?.results?.reduce(
      (acc: any, item: any) => {
        acc[item.name] =
          typeof item.value === "number" ? item.value?.toFixed(2) : item.value;
        return acc;
      },
      {} as {
        [key: string]: any;
      },
    );

    return filteredResults;
  });

  return (
    <div
      className="h-[100svh] overflow-auto"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-3">
        <UpBar />
        <main className="flex !h-fit flex-col gap-5 px-6 pb-6">
          <UpCards
            flowRate={data?.["s=6210-WI-2215"] || 0}
            energy={data?.["s=6100-TR-2001"] || 0}
            utilization={data?.["s=6210-WI-2217"] || 0}
            bounce1={data?.["s=6140-VT-2426A"] || 0}
            bounce2={data?.["s=6140-VT-2426B"] || 0}
            bounce3={data?.["s=6140-VT-2426C"] || 0}
          />
          <div className="flex justify-between">
            <LeftBar />
            <RightBar />
          </div>
        </main>
      </main>
    </div>
  );
};

export default PebbleCrusher;
