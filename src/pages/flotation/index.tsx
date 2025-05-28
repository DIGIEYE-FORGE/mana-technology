/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";

import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { useState } from "react";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { ModelCanvas } from "../omniverse/model-viewer";

const Flotation = () => {
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
        perPage: 1000,
      },
    });

    const filteredResults = res?.results?.reduce(
      (acc: Record<string, any>, item: any) => {
        acc[item.name] =
          typeof item.value === "number" ? item.value?.toFixed(2) : item.value;
        return acc;
      },
      {} as Record<string, any>,
    );

    return filteredResults;
  });

  // const { data: history } = useSWR(
  //   `dpc-history/api/history/${dateRange?.from}/${dateRange?.to}`,
  //   async () => {
  //     const res = await backendApi.findMany("dpc-history/api/history", {
  //       where: {
  //         serial: "0V7ZJGB503H9WGH3",
  //         createdAt: {
  //           $gt: dateRange?.from,
  //           $lte: dateRange?.to,
  //         },
  //       },
  //       pagination: {
  //         page: 1,
  //         perPage: 1000,
  //       },
  //     });

  //     const filteredResults = res?.results?.reduce(
  //       (acc: Record<string, any>, item: any) => {
  //         Object.entries(item).forEach(([key, value]) => {
  //           if (typeof value === "number" && key !== "deviceId")
  //             acc[key] = [
  //               {
  //                 x: new Date(item.createdAt),
  //                 y: value,
  //               },
  //               ...(acc[key] || []),
  //             ];
  //         });
  //         return acc;
  //       },
  //       {} as Record<string, any>,
  //     );

  //     return filteredResults;
  //   },
  // );

  const [history] = useState<any>({});

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
        <main className="relative flex !h-fit gap-5 px-6 pb-6 text-xs">
          <div className="machine-highlight absolute bottom-0 left-1/2 aspect-square w-[500px] -translate-x-1/2">
            <div className="circle circle-3 relative h-full w-full">
              <Circle3 className="rotate h-full w-full duration-1000" />
            </div>
            <div className="circle circle-2 relative h-full w-full">
              <Circle2 className="rotate h-full w-full duration-1000" />
            </div>
            <div className="circle circle-1 relative h-full w-full">
              <Circle1 className="rotate h-full w-full duration-1000" />
            </div>
            <Light className="absolute bottom-[40%] right-1/2 w-full translate-x-1/2" />
          </div>
          <img
            src="/model/bg-pattern.png"
            className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full opacity-60"
          />
          {/* TODO: add model path here */}
          <div className="z-1 absolute inset-0 isolate flex flex-1 items-center justify-center p-0">
            <ModelCanvas
              url={"/ignore/flotation_01.glb"}
              position={[-40, 15, -10]}
              fov={100}
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-1">
            <UpCards
              flotYield={data?.["s=6028-WI-1042"] || 0}
              sulfideYield={data?.["s=6028-WI-1042"] || 0}
              oxydeYield={data?.["s=6028-WI-1042"] || 0}
              concentrateProduction={data?.["s=6028-WI-1042"] || 0}
              metalProduction={data?.["s=6028-WI-1042"] || 0}
              energy={data?.["s=6028-WI-1042"] || 0}
              water={data?.["s=6028-WI-1042"] || 0}
            />
            <LeftBar
              oThickner={history?.["s=6028-WI-1042"] || []}
              iFilter={history?.["s=6028-WI-1042"] || []}
              oFilterWet={history?.["s=6028-WI-1042"] || []}
              oFilterDry={history?.["s=6028-WI-1042"] || []}
              /******************************************** */
              oThicknerTonnage={data?.["s=6028-WI-1042"] || 0}
              iFilterTonnage={data?.["s=6028-WI-1042"] || 0}
              oFilterWetTonnage={data?.["s=6028-WI-1042"] || 0}
              oFilterDryTonnage={data?.["s=6028-WI-1042"] || 0}
              /******************************************** */
              iSulfide={history?.["s=6028-WI-1042"] || []}
              cSulfide={history?.["s=6028-WI-1042"] || []}
              iOxyde={history?.["s=6028-WI-1042"] || []}
              cOxyde={history?.["s=6028-WI-1042"] || []}
              tOxyde={history?.["s=6028-WI-1042"] || []}
              /******************************************** */
              iSulfideCop={data?.["s=6028-WI-1042"] || 0}
              iSulfideSil={data?.["s=6028-WI-1042"] || 0}
              cSulfideCop={data?.["s=6028-WI-1042"] || 0}
              cSulfideSil={data?.["s=6028-WI-1042"] || 0}
              iOxydeCop={data?.["s=6028-WI-1042"] || 0}
              iOxydeSil={data?.["s=6028-WI-1042"] || 0}
              cOxydeCop={data?.["s=6028-WI-1042"] || 0}
              cOxydeSil={data?.["s=6028-WI-1042"] || 0}
              tOxydeCop={data?.["s=6028-WI-1042"] || 0}
              tOxydeSil={data?.["s=6028-WI-1042"] || 0}
              /******************************************** */
              iRegrind={history?.["s=6028-WI-1042"] || []}
              iCyclRegrind={history?.["s=6028-WI-1042"] || []}
              iCyclDesl={history?.["s=6028-WI-1042"] || []}
              oThickner2={history?.["s=6028-WI-1042"] || []}
              iThickner={history?.["s=6028-WI-1042"] || []}
              /******************************************** */
              iRegrindVal={data?.["6330-DIT-3283"] || 0}
              iCyclRegrindVal={data?.["6330-DIT-3311"] || 0}
              iCyclDeslVal={data?.["6610-DIT-5411"] || 0}
              oThickner2Val={data?.["6510-DIT-5121"] || 0}
              iThicknerVal={data?.["6520-DIT-5215"] || 0}
              /******************************************** */
              pax1={history?.["s=6028-WI-1042"] || []}
              pax2={history?.["s=6028-WI-1042"] || []}
              pax1Val={data?.["s=6028-WI-1042"] || 0}
              pax2Val={data?.["s=6028-WI-1042"] || 0}
              /******************************************** */
              mibc1={history?.["s=6028-WI-1042"] || []}
              mibc2={history?.["s=6028-WI-1042"] || []}
              mibc1Val={data?.["s=6028-WI-1042"] || 0}
              mibc2Val={data?.["s=6028-WI-1042"] || 0}
              /******************************************** */
              nahs1={history?.["s=6028-WI-1042"] || []}
              nahs2={history?.["s=6028-WI-1042"] || []}
              nahs1Val={data?.["s=6028-WI-1042"] || 0}
              nahs2Val={data?.["s=6028-WI-1042"] || 0}
              /******************************************** */
              air1={history?.["s=6028-WI-1042"] || []}
              air2={history?.["s=6028-WI-1042"] || []}
              air1Val={data?.["s=6028-WI-1042"] || 0}
              air2Val={data?.["s=6028-WI-1042"] || 0}
            />
          </div>
          <RightBar
            sulfide={{
              rougher: {
                cells: [
                  {
                    level: data?.["S=6310-LIT-3121"] || 0,
                    runningState: data?.["6310-AG-3141"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3122"] || 0,
                    runningState: data?.["6310-AG-3142"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3123"] || 0,
                    runningState: data?.["6310-AG-3143"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3124"] || 0,
                    runningState: data?.["6310-AG-3144"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3125"] || 0,
                    runningState: data?.["6310-AG-3145"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3126"] || 0,
                    runningState: data?.["6310-AG-3146"] || "False",
                  },
                  {
                    level: data?.["S=6310-LIT-3127"] || 0,
                    runningState: data?.["6310-AG-3147"] || "False",
                  },
                  {
                    runningState: data?.["6310-PP-3161"] || "False",
                  },
                  {
                    runningState: data?.["6310-PP-3771"] || "False",
                  },
                  {
                    runningState: data?.["6310-PP-3162"] || "False",
                  },
                  {
                    runningState: data?.["6310-PP-3772"] || "False",
                  },
                ],
              },
              scavenger: {
                cells: [
                  {
                    level: data?.["6320-LIT-3221"] || 0,
                    runningState: data?.["6320-AG-3241"] || "False",
                  },
                  {
                    level: data?.["6320-LIT-3222"] || 0,
                    runningState: data?.["6320-AG-3242"] || "False",
                  },
                  {
                    level: data?.["6320-LIT-3223"] || 0,
                    runningState: data?.["6320-AG-3243"] || "False",
                  },
                  {
                    level: data?.["6320-LIT-3224"] || 0,
                    runningState: data?.["6320-AG-3244"] || "False",
                  },
                  {
                    level: data?.["6320-LIT-3225"] || 0,
                    runningState: data?.["6320-AG-3245"] || "False",
                  },
                  {
                    level: data?.["6320-LIT-3226"] || 0,
                    runningState: data?.["6320-AG-3246"] || "False",
                  },
                  {
                    runningState: data?.["6320-PP-3261"] || "False",
                  },
                  {
                    runningState: data?.["6320-PP-3271"] || "False",
                  },
                  {
                    runningState: data?.["6320-PP-3262"] || "False",
                  },
                  {
                    runningState: data?.["6320-PP-3272"] || "False",
                  },
                ],
              },
              cleaner1: {
                cells: [
                  {
                    level: data?.["6340-LIT-3421"] || 0,
                    runningState: data?.["6340-AG-3441"] || "False",
                  },
                  {
                    level: data?.["6340-LIT-3422"] || 0,
                    runningState: data?.["6340-AG-3442"] || "False",
                  },
                  {
                    level: data?.["6340-LIT-3423"] || 0,
                    runningState: data?.["6340-AG-3443"] || "False",
                  },
                  {
                    level: data?.["6340-LIT-3424"] || 0,
                    runningState: data?.["6340-AG-3444"] || "False",
                  },
                  {
                    level: data?.["6340-LIT-3425"] || 0,
                    runningState: data?.["6340-AG-3445"] || "False",
                  },
                  {
                    level: data?.["6340-LIT-3426"] || 0,
                    runningState: data?.["6340-AG-3446"] || "False",
                  },
                  {
                    runningState: data?.["6340-PP-3461"] || "False",
                  },
                  {
                    runningState: data?.["6340-PP-3471"] || "False",
                  },
                  {
                    runningState: data?.["6340-PP-3462"] || "False",
                  },
                  {
                    runningState: data?.["6340-PP-3472"] || "False",
                  },
                ],
              },
              cleaner2: {
                cells: [
                  {
                    level: data?.["6350-LIT-3525"] || 0,
                    runningState: data?.["6350-AG-3545"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3526"] || 0,
                    runningState: data?.["6350-AG-3546"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3527"] || 0,
                    runningState: data?.["6350-AG-3547"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3528"] || 0,
                    runningState: data?.["6350-AG-3548"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3529"] || 0,
                    runningState: data?.["6350-AG-3549"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3561"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3571"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3562"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3572"] || "False",
                  },
                ],
              },
              cleaner3: {
                cells: [
                  {
                    level: data?.["6350-LIT-3521"] || 0,
                    runningState: data?.["6350-AG-3541"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3522"] || 0,
                    runningState: data?.["6350-AG-3542"] || "False",
                  },
                  {
                    level: data?.["6350-LIT-3523"] || 0,
                    runningState: data?.["6350-AG-3543"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3581"] || "False",
                  },
                  {
                    runningState: data?.["6350-PP-3582"] || "False",
                  },
                ],
              },
              mill: {
                cells: [
                  {
                    runningState: data?.["s=6330-PP-3311"] || "False",
                  },
                  {
                    runningState: data?.["s=6330-PP-3312"] || "False",
                  },
                  {
                    runningState: data?.["s=6330-PP-3287"] || "False",
                  },
                ],
              },
            }}
            oxyde={{
              rougher: {
                cells: [
                  {
                    level: data?.["6410-LIT-4121"] || 0,
                    runningState: data?.["6410-AG-4141"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4122"] || 0,
                    runningState: data?.["6410-AG-4142"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4123"] || 0,
                    runningState: data?.["6410-AG-4143"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4124"] || 0,
                    runningState: data?.["6410-AG-4144"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4125"] || 0,
                    runningState: data?.["6410-AG-4145"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4126"] || 0,
                    runningState: data?.["6410-AG-4146"] || "False",
                  },
                  {
                    level: data?.["6410-LIT-4127"] || 0,
                    runningState: data?.["6410-AG-4147"] || "False",
                  },
                  {
                    runningState: data?.["6410-PP-4161"] || "False",
                  },
                  {
                    runningState: data?.["6410-PP-4171"] || "False",
                  },
                  {
                    runningState: data?.["6410-PP-4162"] || "False",
                  },
                  {
                    runningState: data?.["6410-PP-4172"] || "False",
                  },
                ],
              },
              scavenger: {
                cells: [
                  {
                    level: data?.["6420-LIT-4221"] || 0,
                    runningState: data?.["6420-AG-4241"] || "False",
                  },
                  {
                    level: data?.["6420-LIT-4222"] || 0,
                    runningState: data?.["6420-AG-4242"] || "False",
                  },
                  {
                    level: data?.["6420-LIT-4223"] || 0,
                    runningState: data?.["6420-AG-4243"] || "False",
                  },
                  {
                    level: data?.["6420-LIT-4224"] || 0,
                    runningState: data?.["6420-AG-4244"] || "False",
                  },
                  {
                    level: data?.["6420-LIT-4225"] || 0,
                    runningState: data?.["6420-AG-4245"] || "False",
                  },
                  {
                    level: data?.["6420-LIT-4226"] || 0,
                    runningState: data?.["6420-AG-4246"] || "False",
                  },
                  {
                    runningState: data?.["6420-PP-4261"] || "False",
                  },
                  {
                    runningState: data?.["6420-PP-4271"] || "False",
                  },
                  {
                    runningState: data?.["6420-PP-4262"] || "False",
                  },
                  {
                    runningState: data?.["6420-PP-4272"] || "False",
                  },
                ],
              },
              cleaner1: {
                cells: [
                  {
                    level: data?.["6430-LIT-4321"] || 0,
                    runningState: data?.["6440-AG-4445"] || "False",
                  },
                  {
                    level: data?.["6430-LIT-4322"] || 0,
                    runningState: data?.["6440-AG-4446"] || "False",
                  },
                  {
                    level: data?.["6430-LIT-4323"] || 0,
                    runningState: data?.["6440-AG-4447"] || "False",
                  },
                  {
                    level: data?.["6430-LIT-4324"] || 0,
                    runningState: data?.["6440-AG-4448"] || "False",
                  },
                  {
                    level: data?.["6430-LIT-4325"] || 0,
                    runningState: data?.["6440-AG-4449"] || "False",
                  },
                  {
                    runningState: data?.["6430-PP-4361"] || "False",
                  },
                  {
                    runningState: data?.["6430-PP-4371"] || "False",
                  },
                  {
                    runningState: data?.["6430-PP-4362"] || "False",
                  },
                  {
                    runningState: data?.["6430-PP-4372"] || "False",
                  },
                ],
              },
              cleaner2: {
                cells: [
                  {
                    level: data?.["6440-LIT-4425"] || 0,
                    runningState: data?.["6440-AG-4445"] || "False",
                  },
                  {
                    level: data?.["6440-LIT-4426"] || 0,
                    runningState: data?.["6440-AG-4446"] || "False",
                  },
                  {
                    level: data?.["6440-LIT-4427"] || 0,
                    runningState: data?.["6440-AG-4447"] || "False",
                  },
                  {
                    level: data?.["6440-LIT-4428"] || 0,
                    runningState: data?.["6440-AG-4448"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4461"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4471"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4462"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4472"] || "False",
                  },
                ],
              },
              cleaner3: {
                cells: [
                  {
                    level: data?.["6440-LIT-4421"] || 0,
                    runningState: data?.["6440-AG-4441"] || "False",
                  },
                  {
                    level: data?.["6440-LIT-4422"] || 0,
                    runningState: data?.["6440-AG-4442"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4481"] || "False",
                  },
                  {
                    runningState: data?.["6440-PP-4482"] || "False",
                  },
                ],
              },
              mill: {
                cells: [
                  {
                    runningState: data?.["s=6330-ML-3342"] || "False",
                  },
                  {
                    runningState: data?.["s=6330-PP-3283"] || "False",
                  },
                  {
                    runningState: data?.["s=6330-PP-3284"] || "False",
                  },
                  {
                    runningState: data?.["s=6330-PP-3288"] || "False",
                  },
                ],
              },
            }}
          />
        </main>
      </main>
    </div>
  );
};

export default Flotation;
