import { cn } from "@/lib/utils";
import React from "react";

interface HexagonImageProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  // size in pixels
}

const HexagonImage: React.FC<HexagonImageProps> = ({
  src,
  alt = "Hexagon Image",
  size = 100, // default ~10rem
}: HexagonImageProps & {
  className?: string;
  style?: React.CSSProperties;
}) => {
  // const hexagonClipPath =
  //   "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)";

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url("/lines-images/card.png")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        top: "-120%",
        left: "-5%",
      }}
    >
      <img
        src={src}
        alt={alt}
        className={cn("absolute rounded-lg bg-white/20")}
        style={{
          clipPath:
            "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
          objectFit: "contain",
          width: `${size * 0.8}px`,
          height: `${size * 0.8}px`,
        }}
      />
    </div>
  );
};

export default HexagonImage;
