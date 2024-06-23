/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
import Model from "@/components/models";
import { Suspense, useRef } from "react";
import Loader from "@/components/loader";

extend({ PlaneGeometry });

function Loader3D() {
  return (
    <Html center>
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    </Html>
  );
}

function RotatingModel({ modelRef }: { modelRef: any }) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Adjust rotation speed as needed
    }
  });

  return null; // This component doesn't render anything visible
}

function TreePage() {
  const modelRef = useRef();

  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [10, 45, 20], fov: 35 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
        }}
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
            url="https://storage.googleapis.com/nextronic/mine00000017.glb"
            ref={modelRef}
          />
        </Suspense>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry attach="geometry" args={[200, 100]} />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
        <RotatingModel modelRef={modelRef} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
export default TreePage;
