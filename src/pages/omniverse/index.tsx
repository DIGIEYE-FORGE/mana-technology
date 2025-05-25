/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";

import { Card } from "@/components/card";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useAppContext } from "@/Context";
import { Loader } from "lucide-react";
// import LeftBarComponent from "./left-bar";

function OmniversePage() {
  const { dateRange } = useAppContext();

  const [, setDataRight] = useState<any>(null);
  const [dataLeft, setDataLeft] = useState<any>(null);
  // const [dataCenter, setDataCenter] = useState<any>(null);
  const [, setDataModel] = useState<any>(null);

  const { isLoading } = useSWR(
    `omniversepage${JSON.stringify(dateRange)}`,
    async () => {
      const { data } = await axios.get("dpc-history/api/history", {
        params: {
          where: JSON.stringify({
            serial: "MO5EPYU2VBADKLYS",
            createdAt: {
              $gte: dateRange?.from?.toISOString(),
              $lte: dateRange?.to?.toISOString(),
            },
          }),
        },
      });

      return data;
    },
    {
      onSuccess: (data) => {
        let lastStatus = data.results[0]["Retour_de_marche-SM_MillRun"];
        let lastTime = data.results[0]["createdAt"];
        let frequency = 1;
        const upTime: any[] = [];

        const rst = data.results?.reduce(
          (acc: any, curr: any, index: number) => {
            if (lastStatus !== curr["Retour_de_marche-SM_MillRun"]) {
              upTime.unshift({
                status: lastStatus,
                width: (frequency * 100) / data?.totalResult,
                startTime: lastTime,
              });
              frequency = 1;
              lastStatus = curr["Retour_de_marche-SM_MillRun"];
              lastTime = curr.createdAt;
            } else {
              frequency++;
              if (index === data.totalResult - 1) {
                upTime.unshift({
                  status: lastStatus,
                  width: (frequency * 100) / data?.totalResult,
                  startTime: lastTime,
                });
                frequency = 1;
                lastStatus = curr["Retour_de_marche-SM_MillRun"];
                lastTime = curr.createdAt;
              }
            }

            acc["left"] = {
              ...acc["left"],
              windingTemp: [
                {
                  x: curr.createdAt,
                  y:
                    (curr["Main_Motor_Winding_Temperature_1-SMTE019"] +
                      curr["Main_Motor_Winding_Temperature_2_-_SMTE020"] +
                      curr["Main_Motor_Winding_Temperature_3_-_SMTE021"] +
                      curr["Main_Motor_Winding_Temperature_4_-_SMTE022"] +
                      curr["Main_Motor_Winding_Temperature_5_-_SMTE023"] +
                      curr["Main_Motor_Winding_Temperature_6_-_SMTE024"]) /
                    6,
                },
                ...(acc["left"].windingTemp || []),
              ],
              driveTemp: [
                {
                  x: curr.createdAt,
                  y: curr[
                    "Main_Motor_Drive_Endive_End_Bearing_Temperature_-_SMTE028"
                  ],
                },
                ...(acc["left"].driveTemp || []),
              ],
              nDriveTemp: [
                {
                  x: curr.createdAt,
                  y: curr[
                    "Main_Motor_Non-Drive_Endive_End_Bearing_Temperature_-_SMTE029"
                  ],
                },
                ...(acc["left"].nDriveTemp || []),
              ],
              driveVibration: [
                {
                  x: curr.createdAt,
                  y: curr[
                    "Main_Motor_Drive_End_Bearing_Horizontal_Vibration_-_SMVT010"
                  ],
                },
                ...(acc["left"].driveVibration || []),
              ],
              nDriveVibration: [
                {
                  x: curr.createdAt,
                  y: curr[
                    "Main_Motor_Non-Drive_End_Bearing_Horizontal_Vibration_-_SMVT009"
                  ],
                },
                ...(acc["left"].nDriveVibration || []),
              ],
            };

            acc["right"] = {
              ...acc["right"],
              reducerBearing: [
                {
                  x: curr.createdAt,
                  y:
                    (curr[
                      "Reducer_Drive_End_High_Speed_Bearing_Temperature_-_SMTE012"
                    ] +
                      curr[
                        "Reducer_Drive_End_Low_Speed_Bearing_Temperature_-_SMTE009"
                      ] +
                      curr[
                        "Reducer_Non-Drive_End_High_Speed_Bearing_Temperature_-_SMTE011"
                      ] +
                      curr[
                        "Reducer_Non-Drive_End_Low_Speed_Bearing_Temperature_-_SMTE010"
                      ]) /
                    4,
                },
                ...(acc["right"].reducerBearing || []),
              ],
              reducerSump: [
                {
                  x: curr.createdAt,
                  y: curr["Reducer_Sump_Temperature_-_SMTE013"],
                },
                ...(acc["right"].reducerSump || []),
              ],
              pinionBearing: [
                {
                  x: curr.createdAt,
                  y:
                    (curr[
                      "Pinion_Fixed_Ended_End_Bearing_Temperature_-_SMTE007"
                    ] +
                      curr[
                        "Pinion_Floating_End_Bearing_Temperature_-_SMTE008"
                      ]) /
                    2,
                },
                ...(acc["right"].pinionBearing || []),
              ],
              pinionGuard: [
                {
                  x: curr.createdAt,
                  y:
                    (curr["Pinion_Infrared_Temperature_1_-_SMTT001"] +
                      curr["Pinion_Infrared_Temperature_2_-_SMTT002"] +
                      curr["Pinion_Infrared_Temperature_3_-_SMTT003"] +
                      curr["Gear_Guard_Temperature_1_-_SMTE030"] +
                      curr["Gear_Guard_Temperature_2_-_SMTE031"] +
                      curr["Gear_Guard_Temperature_3_-_SMTE032"] +
                      curr["Gear_Guard_Temperature_4_-_SMTE033"]) /
                    7,
                },
                ...(acc["right"].pinionGuard || []),
              ],
              trunnionFloating: [
                {
                  x: curr.createdAt,
                  y:
                    (curr["Mill_Bearing_Floating_End_Temperature_1_-_SMTE001"] +
                      curr[
                        "Mill_Bearing_Floating_End_Temperature_2_-_SMTE002"
                      ] +
                      curr[
                        "Mill_Bearing_Floating_End_Temperature_3_-_SMTE003"
                      ]) /
                    3,
                },
                ...(acc["right"].trunnionFloating || []),
              ],
              trunnionFixed: [
                {
                  x: curr.createdAt,
                  y:
                    (curr[
                      "Mill_Bearing_Fixed_Ended_End_Temperature_1_-_SMTE004"
                    ] +
                      curr[
                        "Mill_Bearing_Fixed_Ended_End_Temperature_2_-_SMTE005"
                      ] +
                      curr[
                        "Mill_Bearing_Fixed_Ended_End_Temperature_3_-_SMTE006"
                      ]) /
                    3,
                },
                ...(acc["right"].trunnionFixed || []),
              ],
              reducerVibration: [
                {
                  x: curr.createdAt,
                  y:
                    (curr[
                      "Reducer_Drive_End_High_Speed_Bearing_Vibration_-_SMVT003"
                    ] +
                      curr[
                        "Reducer_Drive_End_Low_Speed_Bearing_Vibration_-_SMVT002"
                      ] +
                      curr[
                        "Reducer_Non-Drive_End_High_Speed_Bearing_Vibration_-_SMVT004"
                      ] +
                      curr[
                        "Reducer_Non-Drive_End_Low_Speed_Bearing_Vibration_-_SMVT001"
                      ]) /
                    4,
                },
                ...(acc["right"].reducerVibration || []),
              ],
              pinionVibration: [
                {
                  x: curr.createdAt,
                  y:
                    (curr[
                      "Pinion_Fixed_End_Bearing_Horizontal_Vibration_-_SMVT005"
                    ] +
                      curr[
                        "Pinion_Fixed_End_Bearing_Vertical_Vibration_-_SMVT006"
                      ] +
                      curr[
                        "Pinion_Floating_End_Bearing_Horizontal_Vibration_-_SMVT007"
                      ] +
                      curr[
                        "Pinion_Floating_End_Bearing_Vertical_Vibration_-_SMVT008"
                      ]) /
                    4,
                },
                ...(acc["right"].pinionVibration || []),
              ],
              fixedEnd1: [
                {
                  x: curr.createdAt,
                  y: curr["Trunnion_Lub_HP_Pressure_Fixed_End_1_-_SMPIT002"],
                },
                ...(acc["right"].fixedEnd1 || []),
              ],
              fixedEnd2: [
                {
                  x: curr.createdAt,
                  y: curr["Trunnion_Lub_HP_Pressure_Fixed_End_2_-_SMPIT003"],
                },
                ...(acc["right"].fixedEnd2 || []),
              ],
              floatingEnd1: [
                {
                  x: curr.createdAt,
                  y: curr["Trunnion_Lub_HP_Pressure_Floating_End_1_-_SMPIT004"],
                },
                ...(acc["right"].floatingEnd1 || []),
              ],
              floatingEnd2: [
                {
                  x: curr.createdAt,
                  y: curr["Trunnion_Lub_HP_Pressure_Floating_End_2_-_SMPIT005"],
                },
                ...(acc["right"].floatingEnd2 || []),
              ],
            };

            return acc;
          },
          {
            left: {},
            right: {},
          },
        );

        setDataRight({
          power: Math.floor(data.results[0]["SM_POWER_-_SMPOWER"]),
          water: Math.floor(data.results[0]["FEED_WATER_-_31FIT001"]),
          ...rst?.right,
        });

        setDataLeft({
          runningHours: Math.floor(
            data.results[0]["SAG_RUNNING_HOUR-SAG_RUNNING_HOUR"],
          ),
          upTime,
          feed: Math.floor(data.results[0]["WET_ORE_MILL_FEED_-_22WIT005"]),
          weight: Math.floor(data.results[0]["SAG_MILL_LOAD_-_SMWEIGHT"]),
          temp1: Math.floor(
            data.results[0]["E_HOUSETEMPERATURE_1SM_Ehouse_Temp_1"],
          ),
          temp2: Math.floor(
            data.results[0]["E_HOUSETEMPERATURE_2SM_Ehouse_Temp_2"],
          ),
          humidity: Math.floor(
            data.results[0]["SM_E_House_Humidity_-_SM_Ehouse_Humidity"],
          ),
          lubPressure: Math.floor(
            data.results[0]["Reducer_Lub_Pressure_-_SMPIT008"],
          ),
          pipePressure: Math.floor(
            data.results[0]["Reducer_Pipe_Pressure_-_SMPIT009"],
          ),
          tLubPressure: Math.floor(
            data.results[0]["Trunnion_Lub_LP_Pressure_-_SMPIT001"],
          ),
          tPinionPressure: Math.floor(
            data.results[0]["Trunnion_Lub_Pinion_Pressure_-_SMPIT006"],
          ),
          tAccPressure: Math.floor(
            data.results[0]["Trunnion_Lub_Accumlator_Pressure_-_SMPIT007"],
          ),
          lubFlow: Math.floor(data.results[0]["Reducer_Lub_Flow_-_SMFIT007"]),
          lubLevel: Math.floor(data.results[0]["Reducer_Lub_Level_-_SMLT003"]),
          fixedPump1: Math.floor(
            data.results[0]["Trunnion_Lub_HP_Flow_Fixed_End_1_-_SMFIT001"],
          ),
          fixedPump2: Math.floor(
            data.results[0]["Trunnion_Lub_HP_Flow_Fixed_End_2_-_SMFIT002"],
          ),
          floatingPump1: Math.floor(
            data.results[0]["Trunnion_Lub_HP_Flow_Floating_End_1_-_SMFIT003"],
          ),
          floatingPump2: Math.floor(
            data.results[0]["Trunnion_Lub_HP_Flow_Floating_End_2_-_SMFIT004"],
          ),
          ...rst?.left,
        });

        setDataModel({
          gear1Temp: Math.floor(
            (data.results[0][
              "Main_Motor_Drive_Endive_End_Bearing_Temperature_-_SMTE028"
            ] +
              data.results[0][
                "Main_Motor_Non-Drive_Endive_End_Bearing_Temperature_-_SMTE029"
              ]) /
              2,
          ),
          gear1Vibration: Math.floor(
            (data.results[0][
              "Main_Motor_Drive_End_Bearing_Horizontal_Vibration_-_SMVT010"
            ] +
              data.results[0][
                "Main_Motor_Non-Drive_End_Bearing_Horizontal_Vibration_-_SMVT009"
              ]) /
              2,
          ),
          gear2Temp: Math.floor(
            (data.results[0][
              "Reducer_Drive_End_Low_Speed_Bearing_Temperature_-_SMTE009"
            ] +
              data.results[0][
                "Reducer_Drive_End_High_Speed_Bearing_Temperature_-_SMTE012"
              ] +
              data.results[0][
                "Reducer_Non-Drive_End_High_Speed_Bearing_Temperature_-_SMTE011"
              ] +
              data.results[0][
                "Reducer_Non-Drive_End_Low_Speed_Bearing_Temperature_-_SMTE010"
              ]) /
              4,
          ),
          gear2Vibration: Math.floor(
            (data.results[0][
              "Reducer_Drive_End_Low_Speed_Bearing_Vibration_-_SMVT002"
            ] +
              data.results[0][
                "Reducer_Drive_End_High_Speed_Bearing_Vibration_-_SMVT003"
              ] +
              data.results[0][
                "Reducer_Non-Drive_End_Low_Speed_Bearing_Vibration_-_SMVT001"
              ] +
              data.results[0][
                "Reducer_Non-Drive_End_High_Speed_Bearing_Vibration_-_SMVT004"
              ]) /
              4,
          ),
          gear3Temp: Math.floor(
            (data.results[0][
              "Mill_Bearing_Floating_End_Temperature_1_-_SMTE001"
            ] +
              data.results[0][
                "Mill_Bearing_Floating_End_Temperature_2_-_SMTE002"
              ] +
              data.results[0][
                "Mill_Bearing_Floating_End_Temperature_3_-_SMTE003"
              ] +
              data.results[0][
                "Mill_Bearing_Fixed_Ended_End_Temperature_1_-_SMTE004"
              ] +
              data.results[0][
                "Mill_Bearing_Fixed_Ended_End_Temperature_2_-_SMTE005"
              ] +
              data.results[0][
                "Mill_Bearing_Fixed_Ended_End_Temperature_3_-_SMTE006"
              ]) /
              6,
          ),
          gear3FloatPres: Math.floor(
            (data.results[0][
              "Trunnion_Lub_HP_Pressure_Floating_End_1_-_SMPIT004"
            ] +
              data.results[0][
                "Trunnion_Lub_HP_Pressure_Floating_End_2_-_SMPIT005"
              ]) /
              2,
          ),
          gear3FixPres: Math.floor(
            (data.results[0][
              "Trunnion_Lub_HP_Pressure_Fixed_End_1_-_SMPIT002"
            ] +
              data.results[0][
                "Trunnion_Lub_HP_Pressure_Fixed_End_2_-_SMPIT003"
              ]) /
              2,
          ),
          gear4Temp: Math.floor(
            (data.results[0][
              "Pinion_Fixed_Ended_End_Bearing_Temperature_-_SMTE007"
            ] +
              data.results[0][
                "Pinion_Floating_End_Bearing_Temperature_-_SMTE008"
              ] +
              data.results[0]["Pinion_Infrared_Temperature_1_-_SMTT001"] +
              data.results[0]["Pinion_Infrared_Temperature_2_-_SMTT002"] +
              data.results[0]["Pinion_Infrared_Temperature_3_-_SMTT003"] +
              data.results[0]["Gear_Guard_Temperature_1_-_SMTE030"] +
              data.results[0]["Gear_Guard_Temperature_2_-_SMTE031"] +
              data.results[0]["Gear_Guard_Temperature_3_-_SMTE032"] +
              data.results[0]["Gear_Guard_Temperature_4_-_SMTE033"]) /
              9,
          ),
          gear4Vibration: Math.floor(
            (data.results[0][
              "Pinion_Fixed_End_Bearing_Horizontal_Vibration_-_SMVT005"
            ] +
              data.results[0][
                "Pinion_Fixed_End_Bearing_Vertical_Vibration_-_SMVT006"
              ] +
              data.results[0][
                "Pinion_Floating_End_Bearing_Horizontal_Vibration_-_SMVT007"
              ] +
              data.results[0][
                "Pinion_Floating_End_Bearing_Vertical_Vibration_-_SMVT008"
              ]) /
              4,
          ),
        });
        return data;
      },
    },
  );

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="debug flex max-h-full w-full gap-5 px-10 py-5">
      <div className="absolute inset-0 isolate z-0 flex flex-1 items-center justify-center p-0">
        <Canvas
          camera={{ position: [30, 30, 40], fov: 15 }}
          className="h-full w-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[30, 40, 60]} intensity={2} />
          <OrbitControls makeDefault />

          {/* <Suspense fallback={<ModelLoader />}>
            <ModelViewer data={dataModel} />
          </Suspense> */}
        </Canvas>
      </div>
      {/* <LeftBarComponent data={dataLeft} /> */}
      <div className="flex h-full w-full flex-col gap-1 self-end">
        <Card className="flex justify-around">
          {/* <span className="text-lg font-semibold">Lubricant Flow rate </span> */}
          <div>
            <p className="font-semibold">Lubrication system</p>
            <div className="flex gap-1">
              <div className="">
                <p>Lubricant Flow rate</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  cm3/s{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.lubFlow || "---"}
                  </span>
                </div>
              </div>
              <div className="">
                <p>Lubricant level</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  mm{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.lubLevel || "---"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold">HP Pumps Fixed</p>
            <div className="flex gap-1">
              <div className="">
                <p>Pump 1</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  LPM{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.fixedPump1 || "---"}
                  </span>
                </div>
              </div>
              <div className="">
                <p>Pump 2</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  LPM{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.fixedPump2 || "---"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold">HP pumps floating</p>
            <div className="flex gap-1">
              <div className="">
                <p>Pump 1</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  LPM{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.floatingPump1 || "---"}
                  </span>
                </div>
              </div>
              <div className="">
                <p>Pump 2</p>
                <div
                  className="border-[#78F6EA]/24 border-[1px] border-l-2 border-l-[#78F6EA] px-5 font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
                  }}
                >
                  LPM{" "}
                  <span className="ml-10 text-[#78F6EA]">
                    {dataLeft?.floatingPump2 || "---"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* <RightBarComponent data={dataRight} /> */}
      {/* </Suspense> */}
    </div>
  );
}
export default OmniversePage;
