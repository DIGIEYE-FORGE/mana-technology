/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

const FullscreenVideo = ({ src }: { src: string }) => {
  const videoRef = useRef(null);
  return (
    <video
      // onPlay={() => {
      //   if (videoRef?.current) {
      //     (videoRef?.current as any)?.requestFullscreen()?.catch((err: any) => {
      //       console.error("Error attempting to enable full-screen mode:", err);
      //     });
      //   }
      // }}
      className="aspect-video w-full object-contain opacity-90"
      controls
      src={src}
      ref={videoRef}
    />
  );
};

export default FullscreenVideo;
