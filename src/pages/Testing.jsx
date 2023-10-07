// import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

// const Avatar = () => {
//   const avatar = useGLTF("\\models\\avatar_animation.glb");
//   const {actions, names} = useAnimations(avatar.animations, avatar.scene);
//   console.log(actions);

//   useEffect(() => {
//     console.log(actions.breathe.play());
//   }, []);

//   return (
//     <group>
//       <primitive object={avatar.scene} scale={2} position-y={-2}/>
//     </group>
//   );
// };

// const Testing = () => {
//   const style = {
//     height: "100vh",
//   };

//   return (
//     // <div style={style}>
//     //   <Canvas>
//     //     <mesh>
//     //       <boxGeometry />
//     //     </mesh>
//     //   </Canvas>
//     // </div>

//     <section style={style}>
//       <Canvas>
//         <ambientLight intensity={1} />
//         <pointLight position={[1, 1, 1]} />
//         <OrbitControls />
//         <Avatar />
//       </Canvas>
//     </section>
//   );
// };

// export default Testing;

// //     <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
// //       <color attach="background" args={["#ececec"]} />
// //       {/* <>
// //         <OrbitControls />
// //         <group position-y={-1}>
// //           <Avatar />
// //         </group>
// //         <ambientLight intensity={1} />

// //       </> */}

// // <>
// //       <OrbitControls />
// //       <group position-y={-1}>
// //       <Avatar />
// //       </group>
// //       <ambientLight intensity={1} />

// //     </>
// //     </Canvas>

const Avatar = () => {
  const avatar = useGLTF("\\models\\AnimatedAvatar.glb");

  // Currently 2 actions, named: neutralIdle, standingGreeting
  const {actions, names} = useAnimations(avatar.animations, avatar.scene);

  // console.log(actions);
  useEffect(() => {
    actions.standingGreeting.play();
  }, []);


  return (
    <group>
      <primitive object={avatar.scene} />
    </group>
  );
};

const Testing = () => {

    const style = {
    height: "100vh",
  };
  return (
    <Canvas style={style}>
      <ambientLight intensity={1} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls />
      <Avatar />
    </Canvas>
  );
};

export default Testing;
