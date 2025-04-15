import { Button } from "@/components/ui/button";
import { env } from "@/utils/env";
import { XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export default function VideoPage() {
  const params = useParams<{ name: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const { name } = params;

  useEffect(() => {
    const enablePlaybackOnInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("User interaction required for playback:", error);
        });
      }
      // Remove the event listener after playback starts
      document.removeEventListener("click", enablePlaybackOnInteraction);
    };

    if (name === "Progress_Tizert_a_Mars_2025.mp4" && videoRef.current) {
      // Attempt to play without muting
      videoRef.current.play().catch((error) => {
        console.error("AutoPlay blocked, waiting for user interaction:", error);
        // Add a listener for user interaction
        document.addEventListener("click", enablePlaybackOnInteraction);
      });
    }

    return () => {
      document.removeEventListener("click", enablePlaybackOnInteraction);
    };
  }, [name]);

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
        ref={videoRef}
        className="h-[100dvh] w-screen"
        controls
        loop={name === "Progress_Tizert_a_Mars_2025.mp4"}
        src={
          `${env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
          name
        }
      ></video>
    </div>
  );
}
