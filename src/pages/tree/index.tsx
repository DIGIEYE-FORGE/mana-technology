// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppContext } from "@/Context";
// import { useRef, useEffect, useState } from "react";
// import useSWR from "swr";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { MenuIcon, XIcon } from "lucide-react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// const TreePge: React.FC = () => {
//   const canvasRef = useRef(null);
//   const drawCanvas = () => {
//     const canvas: any = canvasRef.current;
//     if (!canvas) return;
//     const context = canvas.getContext("2d");
//     const img = new Image();
//     img.src = "./test.svg";
//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       context.drawImage(img, 0, 0);
//     };
//   };

//   useEffect(() => {
//     drawCanvas();
//   }, []);

//   const [selected, setSelected] = useState<"SUD" | "EST">("SUD");
//   const { backendApi } = useAppContext();
//   const [open, setOpen] = useState(false);
//   const { data, isLoading, error } = useSWR(
//     `telemetry_SUD_EST${selected}`,
//     async () => {
//       if (!selected)
//         return {
//           results: [],
//         };
//       const res = await backendApi.findMany<{
//         name: string;
//         value: any;
//       }>(`lastTelemetry`, {
//         pagination: {
//           page: 1,
//           perPage: 10000,
//         },
//         select: {
//           name: true,
//           value: true,
//         },
//         where: {
//           name: {
//             startsWith: selected,
//           },
//         },
//       });
//       return res;
//     },
//   );

//   return (
//     <div className="relative overflow-hidden">
//       <canvas ref={canvasRef} className="relative"></canvas>
//       <div className="absolute left-4 top-2">
//         <select
//           className="h-[2rem] min-w-[14rem] border bg-transparent"
//           value={selected || undefined}
//           onChange={(e) => setSelected(e.target.value as any)}
//         >
//           <option value="SUD">SUD</option>
//           <option value="EST">EST</option>
//         </select>
//       </div>
//       <motion.div
//         className="absolute right-1 top-2 min-h-[calc(100vh-4rem)] w-[24rem] rounded-lg border border-foreground/20 bg-[#0F162B]/75 p-6 pt-10 backdrop-blur-sm"
//         initial={false}
//         animate={{
//           clipPath: open
//             ? "circle(100vh at 100% 0)"
//             : "circle(1.5rem at 92% 2rem)",
//         }}
//         transition={{ duration: 0.5 }}
//       >
//         <Button
//           className="absolute right-4 top-4 size-8"
//           size={"icon"}
//           variant="ghost"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           {open ? <XIcon size={20}></XIcon> : <MenuIcon size={20}></MenuIcon>}
//         </Button>
//         {isLoading ? (
//           <div>Loading...</div>
//         ) : error ? (
//           <div>Error: {error.message}</div>
//         ) : (
//           open && (
//             <ScrollArea>
//               <div className="mb-4 h-[calc(100vh-4rem)] w-full">
//                 {data?.results.map((ele, index) => {
//                   return (
//                     <div key={index}>
//                       {ele.name} : {ele.value}
//                     </div>
//                   );
//                 })}
//               </div>
//             </ScrollArea>
//           )
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TreePge;

import React from "react";

function TreePge() {
  return <div>index</div>;
}

export default TreePge;
