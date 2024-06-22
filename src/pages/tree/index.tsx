import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PlaneGeometry } from "three";
import Model from "@/components/models";

extend({ PlaneGeometry });

function TreePage() {
  return (
    <div className="h-full w-full">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 8, 4]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Model url="/mine00017.glb" />
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
export default TreePage;
