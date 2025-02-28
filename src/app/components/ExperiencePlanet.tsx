// import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
// import { Mesh } from "three"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
export default function ExperiencePlanet({
  scale,
  lightPosition,
  src,
  directionalIntensity,
  ambientIntensity,
  rotateSpeed,
}: PlanetProps) {
  function switchModel() {
    if (src === "/purple_planet/scene.gltf") {
      return <PurplePlanetScene rotateSpeed={rotateSpeed} scale={scale} />
    }
  }
  // function MeshComponent() {
  //   const { scene } = useGLTF(src)
  //   const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

  //   // Rotate the model on every frame
  //   useFrame(() => {
  //     if (meshRef.current) {
  //       meshRef.current.rotation.y += rotateSpeed // Adjust speed as needed
  //     }
  //   })
  //   return <primitive object={scene} ref={meshRef} scale={scale} />
  // }
  return (
    <div className=" h-full w-full cursor-pointer">
      <p className="text-center">
        Click & drag to observe planet, scroll to zoom
      </p>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight
          intensity={directionalIntensity}
          position={lightPosition}
        />
        <ambientLight intensity={ambientIntensity} />
        <OrbitControls />
        {/* <MeshComponent /> */}
        {switchModel()}
      </Canvas>
    </div>
  )
}
