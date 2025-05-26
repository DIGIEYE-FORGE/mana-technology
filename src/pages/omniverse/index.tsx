import { Card } from "@/components/card";
import React from "react";

function Omniverse() {
  return (
    <div className="pointer-events-none relative flex">
      <div className="pointer-events-auto relative z-10 flex h-full w-[20rem] flex-1 flex-col gap-3 [&>*]:min-h-[21vh]">
        <Card className="gap-2"></Card>
        <Card className=""></Card>
        <Card className=""></Card>
        <Card className=""></Card>
      </div>
      {/* ------------------------- middle side ------------------------- */}
      <div className="relative isolate flex flex-1 flex-col gap-2 px-6">
        <Card className="mt-auto min-h-[20vh] w-full"></Card>
      </div>

      {/* ------------------------- right side ------------------------- */}
      <div className="pointer-events-auto relative z-10 flex h-full w-[20rem] flex-1 flex-col gap-3 [&>*]:min-h-[21vh]">
        <Card className="gap-2"></Card>
        <Card className=""></Card>
        <Card className=""></Card>
        <Card className=""></Card>
      </div>
    </div>
  );
}

export default Omniverse;
