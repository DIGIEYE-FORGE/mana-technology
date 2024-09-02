import { useEffect } from "react";

declare global {
  interface Window {
    embedpano: (options: any) => void;
  }
}

export default function Projection360Page() {
  useEffect(() => {
    // Load the KRpano script
    const script = document.createElement("script");
    script.src = "/360/krpano/tour.js"; // Adjust the path if necessary
    script.onload = () => {
      // Initialize KRpano viewer
      if (window.embedpano) {
        window.embedpano({
          xml: "/360/krpano/tour.xml", // Path to your tour.xml file
          target: "krpanoContainer",
          html5: "prefer",
          passQueryParameters: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="krpanoContainer"
      className="h-full max-h-[100dvh] w-full overflow-hidden"
    >
      {/* KRpano will be embedded here */}
    </div>
  );
}
