import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Hls: any;
  }
}

export default function HLSPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      return;
    }

    if (window.Hls) {
      initHls();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
      script.onload = initHls;
      document.head.appendChild(script);
    }

    function initHls() {
      if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls();
        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
            if (video)
          video.play().catch(console.error);
        });
      }
    }

    return () => {
      if (window.Hls && videoRef.current) {
        // Cleanup if needed
      }
    };
  }, [src]);

  return <video className="h-full w-full object-contain" ref={videoRef} controls autoPlay muted playsInline />;
}