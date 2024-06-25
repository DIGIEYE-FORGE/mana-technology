import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { useEffect, useRef } from "react";

function MainProjectUpBar() {
  return (
    <div className="h-up-bar group sticky top-0 z-10 flex w-[calc(10)] shrink-0 items-center gap-4 border-b px-6 backdrop-blur">
      <Link to="/">
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <Link to="/underground" className="ml-auto">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function MainProjectPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "/magazine.png"; // Ensure the correct path to your image
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pb-6">
      <MainProjectUpBar />
      {/* <main className="flex h-full w-full flex-col gap-2 px-6 [&>*]:flex-1">
        <canvas
          ref={canvasRef}
          id="canvas"
          className="flex-1"
          width={"100%"}
          h-
        />
        <div className="debug flex-1">hello</div>
      </main> */}
    </main>
  );
}
