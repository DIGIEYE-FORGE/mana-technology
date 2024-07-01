import useSWR from "swr";
import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { LastTelemetry } from "@/utils";

// let count = 0;
function OjamilDevPage() {
  const { backendApi } = useAppContext();
  const { data, isLoading, isValidating, error } = useSWR(
    `telemetry`,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await backendApi.findMany<LastTelemetry>("lasttelemetry", {
        where: {
          name: "temperature",
          device: { serial: "123456" },
        },
      });
      return res?.results[0] || 0;
      // return "hello world" + count++;
    },
    {
      refreshInterval: 5000,
    },
  );

  if (isLoading) {
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="grid h-full w-full place-content-center">
        <h3>Something went wrong.</h3>
      </div>
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center">
      {JSON.stringify({
        data,
        isLoading,
        isValidating,
        error,
      })}
    </div>
  );
}

export default OjamilDevPage;
