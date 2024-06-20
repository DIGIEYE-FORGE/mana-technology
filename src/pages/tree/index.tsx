/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState } from "react";

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

  const [selected, setSelected] = useState<"SUD" | "EST" | null>(null);
  return (
    <div className="relative overflow-hidden">
      <canvas ref={canvasRef} className="relative"></canvas>
      <div className="absolute left-4 top-2">
        <select
          className="h-[2rem] min-w-[14rem] border bg-transparent"
          value={selected || undefined}
          onChange={(e) => setSelected(e.target.value as any)}
        >
          <option value="SUD">SUD</option>
          <option value="EST">EST</option>
        </select>
      </div>
    </div>
  );
};

export default TreePge;
