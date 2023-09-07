// import { useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Stats from "three/examples/jsm/libs/stats.module"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


const HomeIntroCard = () => {
//   useEffect(() => {
//     // Three.js necessities --> scene, camera, renderer
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x202225);   //TODO: This color should be passed (because its the same as the background-color)

//     // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const camera = new THREE.PerspectiveCamera(75, 800 / 480, 0.1, 1000);

//     camera.position.z = 1;
//     camera.position.y = 0.2;

//     const canvas = document.getElementById('mohitCanvas');
//     const renderer = new THREE.WebGLRenderer({
//         canvas, 
//         antialias: true
//     });

//     // renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setSize(800, 480);
//     // renderer.outputEncoding = THREE.sRGBEncoding;
//     renderer.outputColorSpace = THREE.SRGBColorSpace;

//     document.body.appendChild(renderer.domElement);


//     //FIXME: Experiment with Lighting
//     // //Lighting - Ambient Lighting and Spotlight
    
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//     ambientLight.castShadow = true;
//     scene.add(ambientLight);

//     // const directionalLight = new THREE.DirectionalLight(0x333388, 8);
//     // directionalLight.position.set(0, 3, 0);
//     // scene.add(directionalLight);

//     // const pointLight = new THREE.PointLight(0xffffff, 1.5);
//     // // X, Y, Z ==> Side, Top, Front
//     // pointLight.position.set(3, 3, 3);
//     // scene.add(pointLight);
//     const spotLight = new THREE.SpotLight(0x3944bc, 5);
//     spotLight.castShadow = true;
//     spotLight.position.set(0, 64, 32);
//     scene.add(spotLight);


//     // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
//     // const boxMaterial = new THREE.MeshNormalMaterial();
//     // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
//     // scene.add(boxMesh);

//     const loader = new GLTFLoader();
//     //loader.load('C:\Users\pinni\OneDrive\Desktop\Programming Projects\Website\threejs-glb-poc\src\assets\editedmohit.glb')
//     //load resource
//     loader.load(
//         //resource url
//         //  '.\\src\\assets\\editedmohit.glb',
//         '..\\assets\\editedmohit.glb',
//         // called when the resource is loaded
//         function ( gltf ) {
//             //scene.add( gltf.scene );
//             // gltf.animations; // Array<THREE.AnimationClip>
//             // gltf.scene; // THREE.Group
//             // gltf.scenes; // Array<THREE.Group>
//             // gltf.cameras; // Array<THREE.Camera>
//             // gltf.asset; // Object

//             // TweenMax.from( object.position, 3, {
//             // y: -8,
//             // yoyo: true,
//             // repeat: -1,
//             // ease: 'Power2.easeInOut'
//             // });

//             let object = gltf.scene;

//             object.position.set(0, -1.5, 0);


//             scene.add( object );
            
//         },
//         // called while loading is progressing
//         function ( xhr ) {
//             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
//         },
//         // called when loading has errors
//         function ( error ) {
//             console.log( 'An error happened' );
//         }
//     );
    
//     //Orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);

//     //FPS Stats
//     const stats = Stats();
//     document.body.appendChild(stats.dom);

//     //animate for every frame
//     const animate = () => {
//         // boxMesh.rotation.x += 0.01;
//         // boxMesh.rotation.y += 0.01;
//         stats.update();
//         controls.update();

//         renderer.render(scene, camera);
//         window.requestAnimationFrame(animate);
//     };
//     animate();

//     throttle(
//         () => {
//           // const width = window.innerWidth;
//           // const height = window.innerHeight;
//           const width = 800;
//           const height = 480;

//           camera.aspect = width / height;
//           camera.updateProjectionMatrix();
//           renderer.setSize(width, height);
//           setCanvasDimensions(renderer.domElement, width, height);
//         },
//         resizeUpdateInterval,
//         { trailing: true }
//     );

//     //Resize window if needed
//     let handleResize = () => {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();

//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.render(scene, camera);
//     };

//     //window.addEventListener('resize', throttle(handleResize, 0.1));
//     window.addEventListener('resize', handleResize) //might have to implement throttling as shown above





// }, [])

  return (
    <>
      <div className="introcard">
        <p className="introcard-text">Hello, my name is</p>
        {/* <span>Mohit Pinninti</span> */}
        <div className="name">
          <p>Mohit</p>
          <p>Pinninti</p>
        </div>

        <p className="introcard-text introcard-spaced">I'm a...</p>
        <ul>
          <li>Software Engineer Intern @ Qualcomm</li>
          <li>Computer Engineering Student @ Georgia Tech</li>
          <li>Research Assistant @ Contextual Computing Group</li>
        </ul>
      </div>
      <div>
        {/* <canvas id="mohitCanvas"/> */}
    </div>
    </>
  );
};

export default HomeIntroCard;
