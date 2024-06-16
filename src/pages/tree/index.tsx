/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";

const TreePge: React.FC = () => {
  const canvasRef = useRef(null);
  const drawCanvas = () => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = "./test.svg";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };
  };

  useEffect(() => {
    drawCanvas();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default TreePge;
