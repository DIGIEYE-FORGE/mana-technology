import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import { Group } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { TriangleAlertIcon } from "lucide-react";

// Component to display when model fails to load
function ModelError() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" />
      <Html position={[0, 3, 0]}>
        <div className="flex -translate-x-1/2 select-none items-start gap-2 rounded-md border border-red-500/10 bg-red-500/5 p-4 font-medium text-red-400 shadow-md backdrop-blur">
          <TriangleAlertIcon className="size-5" />
          <span className="whitespace-nowrap">Failed to load 3D model</span>
        </div>
      </Html>
    </mesh>
  );
}

// Loading placeholder component
export function ModelLoader() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial color="lightblue" wireframe />
      <Html position={[0, 3, 0]}>
        <div className="rounded-md bg-blue-100 p-4 text-blue-700 shadow-md">
          Loading model...
        </div>
      </Html>
    </mesh>
  );
}

interface ModelProps {
  url: string;
  position?: [number, number, number];
  fov?: number;
}

function Model({ url }: ModelProps) {
  const groupRef = useRef<Group>(null);
  const [, setIsHovered] = useState<boolean>(false);
  const [modelError, setModelError] = useState<boolean>(false);

  // Use error handling with useGLTF
  const { scene } = useGLTF(url, true, undefined, (e) => {
    console.error("Error loading model:", e);
    setModelError(true);
  });

  // Error handling through a try-catch in useEffect
  useEffect(() => {
    try {
      // Check if scene is properly loaded
      if (!scene || !scene.children || scene.children.length === 0) {
        console.warn("Model may not have loaded properly");
      }
    } catch (err) {
      console.error("Error processing model:", err);
      setModelError(true);
    }
  }, [scene]);

  // Auto-rotation logic (commented out as in original code)
  // useFrame((state, delta) => {
  //   if (groupRef.current && !isHovered) {
  //     groupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
  //   }
  // });

  // If there's an error, show the error component
  if (modelError) {
    return <ModelError />;
  }

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <primitive object={scene} scale={1} />
    </group>
  );
}

// eslint-disable-next-line no-empty-pattern
export default function ModelViewer({ url }: ModelProps) {
  return <Model url={url} />;
}

// Main Canvas component
export function ModelCanvas({
  url = "",
  position = [-60, 5, 10],
  fov = 20,
}: ModelProps) {
  return (
    <Canvas camera={{ position, fov }} className="h-full w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 40, 30]} intensity={2} />
      <OrbitControls makeDefault />

      <Suspense fallback={<ModelLoader />}>
        <ModelViewer url={url} />
      </Suspense>
    </Canvas>
  );
}
