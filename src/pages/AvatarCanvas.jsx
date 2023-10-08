import {
  OrbitControls,
  Html,
  useAnimations,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";
// import { DirectionalLightShadow } from "three";

const Avatar = () => {
  const avatar = useGLTF("\\models\\AnimatedAvatar.glb");

  // Currently 2 actions, named: neutralIdle, standingGreeting
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  // console.log(actions);
  useEffect(() => {
    // actions.standingGreeting.play();
    actions.neutralIdle.play();
  }, []);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={[-3, 3, 3]}
        rotation-y={-Math.PI / 6}
        position={[0, -5, 0]}
      />
    </group>
  );
};

// function CameraHelper() {

//   // const camera = new PerspectiveCamera();
//   // function Rig({position: [x, y, z]}) {
//   //   useThree((state) => {
//   //     state.camera.position.set([x, y, z]);
//   //   })
//   // }
//   // const [position, setPosition] = useState([0, 0, 15]);

//   //   setPosition([0, 0, 15]);

//   // useEffect(() => {
//   //   setCamera(camera);
//   // }, [camera]);

//   // pos
//   // camera.position.set([0, 0, 15]);

//   const camera = new PerspectiveCamera();
//   camera.position.set([0, 0, 5]);

//   return <cameraHelper args={[camera]} />

//   // return <group position={[0, 0, 5]}>
//     // <cameraHelper args={[camera]} />
//   // </group>;
// }

const AvatarCanvas = () => {
  const style = {
    // height: "100vh",
    display: "flex",
  };

  return (
    <Canvas shadows style={style}>
      <mesh position={[0, 0, 0]}>
        {/* <ambientLight intensity={0.25} /> */}
        <directionalLight
          position={[6, 6, -6]}
          color={0xffffff}
          castShadow
          intensity={1}
          // intensity={0.001}
          shadow-mapsize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <directionalLight
          position={[9, 15, -10]}
          color={0x002aff}
          // shadows
          castShadow
          intensity={20}
          shadow-mapsize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        <directionalLight
          position={[-9, 15, -10]}
          color={0xffffff}
          castShadow
          intensity={3}
        />
        <ambientLight position={[0, 0, 0]} color={0xfff5b6} intensity={0.25} />
        <spotLight
          color={0xfff5b6}
          intensity={2}
          distance={0}
          angle={0.5}
          penumbra={0}
          decay={1}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 3]} zoom={1.5}>
          <directionalLight intensity={0.5} position={[2, 0, 0]} />
          <directionalLight intensity={0.5} position={[-2, 0, 0]} />
        </PerspectiveCamera>
        <pointLight position={[2, 0.5, 1]} castShadow intensity={1} />
        <spotLight castShadow intensity={50} position={[0, 1, 5]} />
        <OrbitControls />
        <Avatar />
        {/* <mesh shadows scale={[10, 10, 0]} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
         <planeGeometry/>
         </mesh> */}
      </mesh>
    </Canvas>
  );
};

export default AvatarCanvas;
