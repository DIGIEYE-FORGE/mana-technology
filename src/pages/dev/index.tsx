import { ProgressCircle } from "@/components/progress-circle";
import { useEffect, useState } from "react";

export default function DevPage() {
  const [progress, setProgress] = useState(50);
  useEffect(() => {
    const intervale = setInterval(() => {
      setProgress((prev) => (prev + 10) % 100);
    }, 1000);
    return () => clearInterval(intervale);
  }, []);
  return (
    <main className="grid place-content-center">
      <ProgressCircle
        className="size-72"
        progress={progress}
        backgroundColor="#6d0c1a"
        gradientStartColor="#E80054"
        gradientEndColor="teal"
      />
    </main>
  );
}

<svg
  width="34"
  height="34"
  viewBox="0 0 34 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="17"
    cy="17"
    r="15"
    fill="#D9D9D9"
    stroke="#FF0000"
    stroke-opacity="0.5"
    stroke-width="4"
  />
</svg>;
