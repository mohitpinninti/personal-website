import { OrbitControls } from "@react-three/drei";
import { Avatar } from "../components/Avatar";
// import Experience from "../components/Experience";
import { Canvas } from "@react-three/fiber";

const Testing = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      {/* <>
        <OrbitControls />
        <group position-y={-1}>
          <Avatar />
        </group>
        <ambientLight intensity={1} />
        
      </> */}

<>
      <OrbitControls />
      <group position-y={-1}>
      <Avatar />
      </group>
      <ambientLight intensity={1} />
      
    </>
    </Canvas>
  );
};

export default Testing;
