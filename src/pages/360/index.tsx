import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

function VrUndergroundPage() {
  return (
    <div className="relative h-full w-full">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Link
          to={"/main-project"}
          className="absolute left-1 top-1 flex h-[2.5rem] w-[5rem] cursor-pointer items-center justify-center rounded-lg bg-[#F5A71C]"
        >
          <MoveLeft />
        </Link>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src="https://walidbiya.viewin360.co/share/collection/7KvRk?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
        ></iframe>
      </Suspense>
    </div>
  );
}

export default VrUndergroundPage;
