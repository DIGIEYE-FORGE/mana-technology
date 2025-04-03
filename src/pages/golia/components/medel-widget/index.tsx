import { Card, CardProps } from "@/components/card";
import Model from "@/components/models";
import { Suspense, useRef, useState } from "react";
import { env } from "@/utils/env";
import { twMerge } from "tailwind-merge";
import Loader from "@/components/loader";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader3D } from "../../../tree";
import { OrbitControls } from "@react-three/drei";
import { modelName } from "../../data";

export function RotatingModel({
  modelRef,
  isRotating,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelRef: any;
  isRotating?: boolean;
}) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isRotating ? 0.002 : 0;
    }
  });

  return null;
}

interface ModelWidgetProps extends Omit<CardProps, "children"> {}
export function ModelWidget({ className, ...props }: ModelWidgetProps) {
  const modelRef = useRef<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  return (
    <Card {...props} className={twMerge("relative isolate", className)}>
      {loading && (
        <div className="absolute inset-0 z-10 grid place-content-center">
          <Loader />
        </div>
      )}
      <Canvas
        style={{
          position: "absolute",
          bottom: "0",
        }}
        shadows
        camera={{
          position: [30, 30, 30],
          fov: 20,
          localToWorld(vector) {
            return vector;
          },
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
        }}
        onClick={() => setIsRotating(!isRotating)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={<Loader3D />}>
          <Model
            url={
              `${env.VITE_LOCAL_MODELS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
              modelName
            }
            ref={modelRef}
            onLoad={() => setLoading(false)}
          />
        </Suspense>
        <RotatingModel modelRef={modelRef} isRotating={isRotating} />
        <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
      </Canvas>
    </Card>
  );
}
