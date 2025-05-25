// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import Hexagon from "@/assets/icons/hexagon.svg?react";
// import HexagonLock from "@/assets/icons/hexagon-lock.svg?react";
// import ArrowIncrease from "@/assets/icons/arrow-increase.svg?react";
// import ApexChart from "react-apexcharts";
// import HexagonClock from "@/assets/icons/hexagon-clock.svg?react";
// import { cn } from "@/lib/utils";
// import { Card } from "@/components/card";

// interface Props {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   data?: any;
// }

// const LeftBarComponent = ({ data }: Props) => {
//   return (
//     <div className="flex h-full w-[400px] shrink-0 flex-col gap-1">
//       {/* ------------------------------------ 1 ------------------------------------*/}
//       <div className="flex gap-2 [&>div]:grow">
//         <Card className="">
//           <p className="font-semibold text-white">Feed</p>
//           <span className="flex items-center font-black text-[#FFC829] drop-shadow-[#A2EF80] drop-shadow-sm">
//             {data?.feed || "0"} t/h
//             {/* <MoveUpRight className="ml-2 text-[#A2EF80]" /> */}
//             <ArrowIncrease className="ml-2" />
//           </span>
//         </Card>
//         <Card className="flex-1">
//           <p className="font-semibold text-white">Weight</p>
//           <span className="flex items-center font-black text-[#FFC829] drop-shadow-[#A2EF80] drop-shadow-sm">
//             {data?.weight || "0"} t <ArrowIncrease className="ml-2" />
//             {/* <MoveUpRight className="ml-5 text-[#A2EF80]" /> */}
//           </span>
//         </Card>
//         <Card className="flex-1 px-[14px]">
//           <p className="font-semibold text-white">E-house</p>
//           <span className="font-black text-[#FFC829]">
//             {data?.temp1 || "0"}°C | {data?.temp2 || "0"}°C |{" "}
//             {data?.humidity || "0"}%
//           </span>
//         </Card>
//       </div>

//       {/* ------------------------------------ 2 ------------------------------------*/}
//       <Card className="flex flex-col">
//         <div className="flex justify-between">
//           <span className="text-lg font-semibold">Running state</span>
//           <span className="flex gap-1">
//             <HexagonClock />
//             <span className="text-lg font-bold">
//               {data?.runningHours || "0"} h
//             </span>
//             <span className="self-end text-xs text-[#B4C0CC]">
//               Running Hours
//             </span>
//           </span>
//         </div>
//         <div className="mt-3 flex h-8 w-full overflow-hidden rounded">
//           {(data?.upTime || []).map((item: any, index: number) => (
//             <div
//               key={index}
//               className={cn(
//                 "h-full",
//                 item?.status === "ON" ? "bg-[#1DEC86]" : "bg-[#FF6C6B]",
//               )}
//               style={{
//                 width: `${item?.width}%`,
//               }}
//             ></div>
//           ))}
//         </div>
//       </Card>

//       {/* ------------------------------------ 3 ------------------------------------*/}
//       <Card className="flex flex-col px-4">
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-semibold">Reducer Pressure</span>
//           {/* <span className="flex items-center gap-1 font-semibold text-[#78F6EA]">
//             Voir plus <ArrowRight />
//           </span> */}
//         </div>
//         <div className="mt-1 flex gap-2">
//           <div className="flex items-center gap-1">
//             {/* <Hexagon className="h-8 w-8" />
//             <span className="text-xs">Lub Pressure</span>
//             <span className="font-medium text-[#1FC6FF]">
//               {data?.lubPressure || "0"} bar
//             </span> */}
//           </div>
//           <span className="bg-[#1FC6FF]/24 h-10 w-[2px]"></span>
//           <div className="flex items-center gap-1">
//             {/* <Hexagon className="h-8 w-8" />
//             <span className="text-xs">Pip Pressure</span>
//             <span className="font-medium text-[#1FC6FF]">
//               {data?.pipePressure || "0"} bar
//             </span> */}
//           </div>
//         </div>
//       </Card>

//       {/* ------------------------------------ 4 ------------------------------------*/}
//       <Card className="flex flex-col">
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-semibold">Trunnion Pressure</span>
//           {/* <span className="flex items-center gap-1 font-semibold text-[#78F6EA]">
//             Voir plus <ArrowRight />
//           </span> */}
//         </div>
//         <div className="mt-1 flex items-center gap-2">
//           <div className="flex w-[140px] items-center gap-1">
//             <HexagonLock className="h-10 w-10" />
//             <div className="flex flex-col">
//               <span className="text-xs">LP Pressure</span>
//               <span className="font-medium text-[#78F6EA]">
//                 {data?.tLubPressure || "0"}{" "}
//                 <span className="text-[10px]">bar</span>
//               </span>
//             </div>
//           </div>
//           <span className="bg-[#1FC6FF]/24 h-10 w-[2px]"></span>
//           <div className="flex items-center gap-1">
//             <HexagonLock className="h-10 w-10" />
//             <div className="flex flex-col">
//               <span className="text-xs">Pinion Pressure</span>
//               <span className="font-medium text-[#78F6EA]">
//                 {data?.tPinionPressure || "0"}{" "}
//                 <span className="text-[10px]">bar</span>
//               </span>
//             </div>
//           </div>
//           <span className="bg-[#1FC6FF]/24 h-10 w-[2px]"></span>
//           <div className="flex items-center gap-1">
//             <HexagonLock className="h-10 w-10" />
//             <div className="flex flex-col">
//               <span className="text-xs">Acc Pressure</span>
//               <span className="font-medium text-[#78F6EA]">
//                 {data?.tAccPressure || "0"}{" "}
//                 <span className="text-[10px]">bar</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </Card>

//       {/* ------------------------------------ 4 ------------------------------------*/}
//       <Card className="flex flex-col">
//         <span className="text-lg font-semibold">Main motor</span>
//         <div className="w-full">
//           <ApexChart
//             height={250}
//             options={{
//               chart: {
//                 height: 200,
//                 type: "line",
//                 zoom: {
//                   enabled: false,
//                 },
//                 toolbar: {
//                   show: false,
//                 },
//               },
//               tooltip: {
//                 theme: "dark",
//               },
//               title: {
//                 text: "Temperature °C",
//                 align: "center",
//                 style: {
//                   fontSize: "14px",
//                   color: "#ffffff",
//                 },
//               },
//               stroke: {
//                 curve: "smooth",
//                 width: 3,
//               },
//               colors: ["#FAAC18", "#2B97FC", "#E4A0F5"],
//               legend: {
//                 show: false,
//               },
//               xaxis: {
//                 labels: {
//                   style: {
//                     colors: "#A2B0B8",
//                   },
//                 },
//                 type: "datetime",
//               },
//               yaxis: {
//                 labels: {
//                   style: {
//                     colors: "#A2B0B8",
//                   },
//                 },
//                 decimalsInFloat: 2,
//               },
//             }}
//             series={[
//               {
//                 name: "Drive End Bearing",
//                 data: data?.driveTemp || [],
//               },
//               {
//                 name: "N-Drive End Bearing",
//                 data: data?.nDriveTemp || [],
//               },
//               {
//                 name: "Avg Winding Temp",
//                 data: data?.windingTemp || [],
//               },
//             ]}
//           />
//         </div>

//         <div className="w-full">
//           <ApexChart
//             height={250}
//             type="area"
//             options={{
//               chart: {
//                 type: "area",
//                 height: 200,
//                 zoom: {
//                   enabled: false,
//                 },
//                 toolbar: {
//                   show: false,
//                 },
//               },
//               tooltip: {
//                 theme: "dark",
//               },
//               dataLabels: {
//                 enabled: false,
//               },
//               title: {
//                 text: "Vibration mm/s",
//                 align: "center",
//                 style: {
//                   fontSize: "14px",
//                   color: "#ffffff",
//                 },
//               },
//               stroke: {
//                 curve: "smooth",
//                 width: 3,
//               },
//               colors: ["#FAAC18", "#2B97FC"],
//               legend: {
//                 show: false,
//               },
//               xaxis: {
//                 labels: {
//                   style: {
//                     colors: "#A2B0B8",
//                   },
//                 },
//                 type: "datetime",
//               },
//               yaxis: {
//                 labels: {
//                   style: {
//                     colors: "#A2B0B8",
//                   },
//                 },
//                 decimalsInFloat: 2,
//               },
//             }}
//             series={[
//               {
//                 name: "N-Drive End Bearing H",
//                 data: data?.nDriveVibration || [],
//               },
//               {
//                 name: "Drive End Bearing H",
//                 data: data?.driveVibration || [],
//               },
//             ]}
//           />
//         </div>
//       </Card>

//       {/* ------------------------------------ 5 ------------------------------------*/}
//       {/* <Card className="flex flex-col p-4">
//         <div className="mt-1">
//           <div className="flex gap-2">
//             <div className="w-1/2">
//               <p>Lubricant Flow rate</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 cm3/s{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.lubFlow || "0"}
//                 </span>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <p>Lubricant level</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 mm{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.lubLevel || "0"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-1">
//           <p className="font-semibold">HP Pumps Fixed</p>
//           <div className="flex gap-2">
//             <div className="w-1/2">
//               <p>Pump 1</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 LPM{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.fixedPump1 || "0"}
//                 </span>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <p>Pump 2</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 LPM{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.fixedPump2 || "0"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-1">
//           <p className="font-semibold">HP pumps floating</p>
//           <div className="flex gap-2">
//             <div className="w-1/2">
//               <p>Pump 1</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 LPM{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.floatingPump1 || "0"}
//                 </span>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <p>Pump 2</p>
//               <div
//                 className="px-5 font-semibold border-[1px] border-[#78F6EA]/24 border-l-2 border-l-[#78F6EA]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(31, 198, 255, 0.32) 0%, rgba(31, 198, 255, 0) 154.19%)",
//                 }}
//               >
//                 LPM{" "}
//                 <span className="text-[#78F6EA] ml-10">
//                   {data?.floatingPump2 || "0"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card> */}
//     </div>
//   );
// };

// export default LeftBarComponent;
