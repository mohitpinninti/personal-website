import {
  OrbitControls,
  Html,
  useAnimations,
  useGLTF,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const PlainAvatar = () => {
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

// const AvatarGroup = () => {
//   return (
//     <group position={[0, 0, 0]}>
//       {/* <ambientLight intensity={0.25} /> */}
//       <directionalLight
//         position={[6, 6, -6]}
//         color={0xffffff}
//         castShadow
//         intensity={1}
//         shadow-mapsize={[1024, 1024]}
//         shadow-bias={-0.0001}
//       />
//       <directionalLight
//         position={[9, 15, -10]}
//         color={0x002aff}
//         castShadow
//         intensity={20}
//         shadow-mapsize={[1024, 1024]}
//         shadow-bias={-0.0001}
//       />

//       <directionalLight
//         position={[-9, 15, -10]}
//         color={0xffffff}
//         castShadow
//         intensity={3}
//       />
//       <ambientLight position={[0, 0, 0]} color={0xfff5b6} intensity={0.25} />
//       <spotLight
//         color={0xfff5b6}
//         intensity={2}
//         distance={0}
//         angle={0.5}
//         penumbra={0}
//         decay={1}
//       />
//       <PerspectiveCamera
//         makeDefault
//         position={[0, 0, 3]}
//         zoom={1.5}
//       >
//         <directionalLight intensity={0.5} position={[2, 0, 0]} />
//         <directionalLight intensity={0.5} position={[-2, 0, 0]} />
//       </PerspectiveCamera>
//       <pointLight position={[2, 0.5, 1]} castShadow intensity={1} />
//       <spotLight castShadow intensity={50} position={[0, 1, 5]} />
//       <PlainAvatar />
//     </group>
//   );
// };

function CameraRig() {
  const cameraRef = useRef(null);
  const frontDirLight = useRef(null);
  const backDirLight = useRef(null);

  useFrame(() => {
    if (!cameraRef.current) {
      return;
    }

    frontDirLight.current.position.x = cameraRef.current.position.x + 2;
    frontDirLight.current.position.y = cameraRef.current.position.y;
    frontDirLight.current.position.z = cameraRef.current.position.z;

    backDirLight.current.position.x = cameraRef.current.position.x - 2;
    backDirLight.current.position.y = cameraRef.current.position.y;
    backDirLight.current.position.z = cameraRef.current.position.z;
  });

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 3]}
      zoom={1.5}
      ref={cameraRef}
    >
      <directionalLight
        intensity={0.5}
        position={[2, 0, 0]}
        ref={frontDirLight}
      />
      <directionalLight
        intensity={0.5}
        position={[-2, 0, 0]}
        ref={backDirLight}
      />
    </PerspectiveCamera>
  );
}

function AvatarGroup() {
  return (
    // <group position={[0.5, 0.2, 0]}>
    <group position={[0, 0.3 , 0]}>
      {/* <group> */}
      {/* <OrbitControls target={[0.5, 0.2, 0]} /> */}
      <OrbitControls />
      {/* <group position={[0, 0, 0]}> */}
      {/* <ambientLight intensity={0.25} /> */}
      <directionalLight
        position={[6, 6, -6]}
        color={0xffffff}
        castShadow
        intensity={1}
        shadow-mapsize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={[9, 15, -10]}
        color={0x002aff}
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
      {/* <PerspectiveCamera makeDefault position={[0, 0, 3]} zoom={1.5}>
        <directionalLight intensity={0.5} position={[2, 0, 0]} />
        <directionalLight intensity={0.5} position={[-2, 0, 0]} />
      </PerspectiveCamera> */}
      <CameraRig />
      <pointLight position={[2, 0.5, 1]} castShadow intensity={1} />
      <spotLight castShadow intensity={50} position={[0, 1, 5]} />
      <PlainAvatar />
    </group>
  );
}

// const AvatarHtml = () => {
//   return (
//     <Html>
//       <div className="testingcard-textholder">
//           <p className="testingcard-textholder-text">Hello, my name is</p>
//           <div className="name">
//             <p>Mohit</p>
//             <p>Pinninti</p>
//           </div>
//           <p className="testingcard-textholder-text testingcard-textholder-spaced">
//             I'm a...
//           </p>
//           <ul>
//             <li>Software Engineer Intern @ Qualcomm</li>
//             <li>Computer Engineering Student @ Georgia Tech</li>
//             <li>Research Assistant @ Contextual Computing Group</li>
//           </ul>
//         </div>
//     </Html>
//   );
// }

const AvatarCanvas = () => {
  return (
    <Canvas style={{zIndex: 0}}>
      {/* <AvatarGroup /> */}

      {/* <OrbitControls target={[0.5, 0.2, 0]}/> */}
      {/* <OrbitControls target0={[0.5, 0.2, 0]} /> */}
      <AvatarGroup />
      {/* <AvatarHtml /> */}
    </Canvas>
  );
};

export default AvatarCanvas;
