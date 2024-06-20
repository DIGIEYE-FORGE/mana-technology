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

  return (
    <div className="h-full w-full">
      <select className="h-[2rem] min-w-[14rem] border bg-transparent">
        <option>select EST/SUD</option>
        <option value="EST">EST</option>
        <option value="SUD">SUD</option>
      </select>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default TreePge;
