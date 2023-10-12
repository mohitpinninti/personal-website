import {
  OrbitControls,
  useAnimations,
  useGLTF,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, Suspense } from "react";
import LoadingModal from "../components/LoadingModal";

const PlainAvatar = () => {
  const avatar = useGLTF("\\models\\AnimatedAvatar.glb");

  // Currently 2 actions, named: neutralIdle, standingGreeting
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  // console.log(actions);
  useEffect(() => {
    // actions.standingGreeting.play();
    actions.neutralIdle.play();
  }, []);

  const Animations = {
    Greeting: "greeting",
    Idle: "idle",
  };

  // const [animationState, setAnimationState] = new useState(Animations.Greeting);

  // useEffect(() => {

  //   if (animationState === Animations.Greeting) {
  //     actions.standingGreeting.play();
  //     setTimeout(setAnimationState(Animations.Idle), 1);
  //   } else {
  //     actions.neutralIdle.play();
  //   }
  // })

  // useEffect(() => {
  //   async function switchAnimation() {
  //     actions.standingGreeting.play();
  //     await new Promise(
  //       resolve => setTimeout(resolve, 5000)
  //     );

  //     actions.neutralIdle.play();
  //   }

  //   switchAnimation();
  // }, []);

  const avatarRef = useRef(null);

  let speed = 0.001;

  const rotateDirs = {
    Left: "left",
    Right: "right"
  };

  const [rotate, setRotate] = useState(rotateDirs.Right);

  useFrame(() => {
    if (!avatarRef) {
      return;
    }

    // update rotations
    if (avatarRef.current.rotation.y < - 0.8 && rotate === rotateDirs.Right) {
      setRotate(rotateDirs.Left);
    } else if (avatarRef.current.rotation.y > 0.05 && rotate === rotateDirs.Left) {
      setRotate(rotateDirs.Right);
    }

    // update speed
    if (avatarRef.current.rotation.y < -0.6) {
      speed = 0.0002;
    } else if (avatarRef.current.rotation.y > -0.15) {
      speed = 0.0002;
    } else {
      speed = 0.0005;
    }

    rotate === rotateDirs.Left ? avatarRef.current.rotation.y += speed : avatarRef.current.rotation.y -= speed;
  });

  return (
    <group>
      {/* <Float floatingRange={[0, 0]} rotationIntensity={10} rotateOnWorldAxis={[0, 0, 1]}> */}
      <primitive
        object={avatar.scene}
        scale={[-3, 3, 3]}
        rotation-y={-Math.PI / 6}
        position={[0, -5, 0]}
        ref={avatarRef}
      />
      {/* </Float> */}
    </group>
  );
};

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
    <group position={[0, 0.3, 0]}>
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
      <CameraRig />
      <pointLight position={[2, 0.5, 1]} castShadow intensity={1} />
      <spotLight castShadow intensity={50} position={[0, 1, 5]} />

      <Suspense fallback={<LoadingModal />}>
        <PlainAvatar />
      </Suspense>
    </group>
  );
}

const AvatarCanvas = () => {
  return (
    <Canvas>
      {/* <OrbitControls target={[0.5, 0.2, 0]}/> */}
      {/* <OrbitControls target0={[0.5, 0.2, 0]} /> */}
      <AvatarGroup />
    </Canvas>
  );
};

export default AvatarCanvas;
