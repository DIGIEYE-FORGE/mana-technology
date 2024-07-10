import { useEffect, useRef } from "react";

const FullscreenVideo = ({ src }: { src: string }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      (videoRef?.current as any)?.requestFullscreen().catch((err: any) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    }
  }, []);

  return (
    <video
      autoPlay
      className="aspect-video w-full object-contain opacity-90"
      controls
      src={src}
      ref={videoRef}
    />
  );
};

export default FullscreenVideo;
