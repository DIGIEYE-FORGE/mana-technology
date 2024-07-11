import { Button } from "@/components/ui/button";
import { env } from "@/utils/env";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function VideoPage() {
  const params = useParams<{ name: string }>();
  const { name } = params;

  return (
    <div className="dark relative bg-black">
      <Link
        to="/main-project"
        className="absolute right-1/2 top-4 z-10 translate-x-1/2"
      >
        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-white opacity-50"
        >
          <XIcon className="h-6 w-6" />
        </Button>
      </Link>
      <video
        className="h-[100dvh] w-screen"
        controls
        src={
          `${env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
          name
        }
      ></video>
    </div>
  );
}
