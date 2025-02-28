// import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
// import { useGLTF } from "@react-three/drei"
// import { Mesh } from "three"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
export default function PurplePlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  // function MeshComponent() {
  //   const { scene } = useGLTF("/purple_planet/scene.gltf")
  //   const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

  //   // Rotate the model on every frame
  //   useFrame(() => {
  //     if (meshRef.current) {
  //       meshRef.current.rotation.y += 0.01 // Adjust speed as needed
  //     }
  //   })
  //   return <primitive object={scene} ref={meshRef} scale={scale} />
  // }
  return (
    <div className="m-auto w-72 pr-28  cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight intensity={5} position={lightPosition} />
        <ambientLight intensity={0.3} />
        {/* <MeshComponent /> */}
        <PurplePlanetScene rotateSpeed={0.01} scale={scale} />
      </Canvas>
      <div className="flex flex-col items-center ml-10">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
