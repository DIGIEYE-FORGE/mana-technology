/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { image } from "d3";
import { data } from "../ventilation-dashboard/data";

function MainProjectUpBar() {
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center gap-4 border-b px-6 backdrop-blur">
      <Link to="/">
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <Link to="/underground" className="ml-auto">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function MainProjectPage() {
  // const positions = ["right", "left", "bottom", "top", "buttom"];
  const magazine = [
    {
      name: "EST",
      bottom: "50%",
      right: "25%",
      type: "image",
      image: "/screen1.png",
      // information: {
      //   title: "EST",
      //   attribute: {
      //     Type: "EST",
      //     Location: "Underground",
      //     Status: "Active",
      //     Capacity: "1000",
      //   },
      // },
    },
    {
      name: "SUD",
      bottom: "15%",
      right: "18%",
      type: "image",
      image: "/screen2.png",
      // information: {
      //   title: "SUD",
      //   attribute: {
      //     Type: "SUD",
      //     Location: "Underground",
      //     Status: "Active",
      //     Capacity: "1000",
      //   },
      // },
    },
    {
      name: "PLANT",
      bottom: "10%",
      left: "42%",
      type: "information",
      // data: {
      //   title: "Plant",
      //   attribute: {
      //     Type: "Plant",
      //     Location: "Underground",
      //     Status: "Active",
      //     Capacity: "1000",
      //   },
      // },
    },
    {
      name: "LINE ELECTRIC",
      bottom: "40%",
      left: "10%",
      type: "information",
      // data: {
      //   title: "Nanfeng host",
      //   attribute: {
      //     Flow: "176.9m³/h",
      //     ["wind speed"]: "10.5m/s",
      //     ["Full pressure"]: "0.5MPa",
      //     ["static pressure"]: "0.2MPa",
      //   },
      // },
    },
    {
      name: "LINE ELECTRIC",
      bottom: "10%",
      left: "15%",
      type: "information",
      // data: {
      //   title: "PUMP LINE",
      //   attribute: {
      //     Flow: "176.9m³/h",
      //     ["wind speed"]: "10.5m/s",
      //     ["Full pressure"]: "0.5MPa",
      //     ["static pressure"]: "0.2MPa",
      //   },
      // },
    },
  ];

  const data = [
    {
      type: "image",
      image: "/screen1.png",
      position: {
        bottom: "50%",
        right: "30%",
      },
      background: "url(/shape2.png)",
    },
    {
      title: "Plant",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      position: {
        bottom: "10%",
        left: "42%",
      },
    },
    {
      type: "image",
      image: "/screen1.png",
      position: {
        bottom: "10%",
        right: "30%",
      },
      background: "url(/shape2.png)",
    },
    {
      title: "Plant",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      position: {
        bottom: "10%",
        left: "42%",
      },
    },
    {
      title: "Plant",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      position: {
        bottom: "10%",
        left: "42%",
      },
    },
    {
      title: "Plant",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      position: {
        bottom: "10%",
        left: "42%",
      },
    },
  ];

  return (
    <main
      className="relative mx-auto flex max-w-[1920px] flex-col gap-2 pb-6 2xl:overflow-hidden"
      style={{
        backgroundImage: "url('/sceen24.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MainProjectUpBar />
      {/* <div className="justify-center-center absolute left-[5%] top-[52%] flex flex-col gap-3">
        <button className="btn-3d w-fit">HSE</button>
        <button className="btn-3d">PROJECT PLANNING</button>
      </div> */}
      <div className="flex h-full w-full flex-col gap-4">
        <div className="relative flex items-center justify-center pt-[3rem]">
          <img
            className="object-contain opacity-70"
            src="/magazine2.png"
            alt="Magazine"
          />
          {magazine.map((item, index) => (
            <div
              key={index}
              className={cn(
                "absolute",
                "z-10 h-[4rem] w-[8rem] cursor-pointer",
              )}
              style={{
                ...item,
              }}
            >
              <div
                className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, transparent, #002FBE, transparent)",
                  border: "10px solid",
                  borderImageSlice: 1,
                  borderWidth: "1px",
                  borderImageSource:
                    "linear-gradient(to right, transparent, white, transparent)",
                }}
              >
                {item.name}
              </div>
              <div className="machine-highlight absolute bottom-0 aspect-square size-[8rem] w-full">
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
            </div>
            // <div
            // <Popover key={index} open>
            //   <PopoverTrigger asChild>
            //     <div
            //       key={index}
            //       className={cn(
            //         "absolute",
            //         "z-10 h-[4rem] w-[8rem] cursor-pointer",
            //       )}
            //       style={{
            //         ...item,
            //       }}
            //     >
            //       <div
            //         className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 font-bold"
            //         style={{
            //           backgroundImage:
            //             "linear-gradient(to right, transparent, #002FBE, transparent)",
            //           border: "10px solid",
            //           borderImageSlice: 1,
            //           borderWidth: "1px",
            //           borderImageSource:
            //             "linear-gradient(to right, transparent, white, transparent)",
            //         }}
            //       >
            //         {item.name}
            //       </div>
            //       <div className="machine-highlight absolute bottom-0 aspect-square size-[8rem] w-full">
            //         <div className="circle circle-3 relative h-full w-full">
            //           <Circle3 className="rotate h-full w-full duration-1000" />
            //         </div>
            //         <div className="circle circle-2 relative h-full w-full">
            //           <Circle2 className="rotate h-full w-full duration-1000" />
            //         </div>
            //         <div className="circle circle-1 relative h-full w-full">
            //           <Circle1 className="rotate h-full w-full duration-1000" />
            //         </div>
            //         <Light className="absolute bottom-[40%] right-1/2 w-full translate-x-1/2" />
            //       </div>
            //     </div>
            //   </PopoverTrigger>
            //   <PopoverContent
            //     side={positions[index] as any}
            //     // side="top"
            //     sideOffset={-10}
            //     className={cn(
            //       "flex flex-wrap gap-2 border-none bg-transparent p-0",
            //       {
            //         "w-[30rem]": item?.type === "image",
            //         "w-[20rem]": item?.type === "information",
            //       },
            //     )}
            //   >
            //     <div
            //       className="debug relative w-[20rem] overflow-hidden rounded-lg p-2"
            //       style={{
            //         height: item?.type === "information" ? "14rem" : "10rem",
            //         background:
            //           item?.type === "information"
            //             ? `url("vector.png")`
            //             : `url(${item.image})`,
            //         backgroundSize: "100% 100%",
            //         backgroundRepeat: "no-repeat",
            //         clipPath:
            //           "polygon(0 1%, 31% 6%, 98% 0, 86% 44%, 100% 100%, 0 100%, 0% 70%, 0% 30%);",
            //       }}
            //     >
            //       {item?.type === "information" && (
            //         <div className="flex w-full flex-col gap-1 overflow-y-scroll p-2 text-white">
            //           <h1 className="text-xl font-bold">
            //             {item?.data?.title || ""}
            //           </h1>
            //           {Object.entries(item?.data?.attribute || {}).map(
            //             ([key, value]) => (
            //               <div key={key} className="flex items-center gap-2">
            //                 <span className="min-w-[8rem] text-lg font-bold">
            //                   {key}:
            //                 </span>
            //                 <span className="text-[#A4D3FF]">{value}</span>
            //               </div>
            //             ),
            //           )}
            //         </div>
            //       )}
            //     </div>
            //     {/* {item.type === "image" && (
            //       <div
            //         className="flex flex-1 flex-col gap-2 rounded-lg bg-[#1A1A1A] p-2 text-white"
            //         style={{
            //           background: "url(/vector.png)",
            //           backgroundSize: "contain",
            //           backgroundRepeat: "no-repeat",
            //         }}
            //       >
            //         {
            //           <div className="flex flex-col">
            //             <h1 className="text-xl font-bold">
            //               {item?.information?.title || ""}
            //             </h1>
            //             <div className="flex h-full flex-col overflow-y-auto">
            //               {Object.entries(
            //                 item?.information?.attribute || {},
            //               ).map(([key, value]) => (
            //                 <div key={key} className="flex items-center gap-3">
            //                   <span className="min-w-[8rem] text-lg font-bold">
            //                     {key}:
            //                   </span>
            //                   <span className="text-[#A4D3FF]">{value}</span>
            //                 </div>
            //               ))}
            //             </div>
            //           </div>
            //         }
            //       </div>
            //     )} */}
            //   </PopoverContent>
            // </Popover>
          ))}
          {/* {data.map((item, index) => (
            <div
              key={index}
              style={{
                background: `${item.background}`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                ...item.position,
              }}
            >
              {item.type === "image" && <img src={item.image} alt="image" />}
              {item.type === "information" && (
                <div className="flex flex-col gap-2 p-4">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  {Object.entries(item.attribute).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="min-w-[8rem] text-lg font-bold">
                        {key}:
                      </span>
                      <span className="text-[#A4D3FF]">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))} */}
        </div>
        {/* <div className="relative flex flex-1 justify-center">
          <div
            className="absolute left-[2%] top-[40%] w-[18rem] overflow-y-auto"
            style={{
              backgroundImage: "url(/shape1.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-xl font-bold">Plant</h1>
              {Object.entries(data2.attribute).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="min-w-[8rem] text-lg font-bold">{key}:</span>
                  <span className="text-[#A4D3FF]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <img className="object-cover" src="/shape3.png" alt="Shape" />
          <span className="absolute bottom-[40%] right-[46%] origin-center rotate-[11deg] transform text-xl font-bold text-white">
            800m
          </span>
          <div className="absolute right-[2rem] flex h-full items-center justify-center gap-2">
            <span className="text-xl font-bold">100m</span>
            <div className="h-[80%] w-2 border-r-[6px] border-dashed border-[#FFE37D]"></div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
