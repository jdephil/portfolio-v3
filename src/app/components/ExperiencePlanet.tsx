import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { PlanetProps } from "../utils/types"
export default function ExperiencePlanet({
  scale,
  lightPosition,
  src,
  directionalIntensity,
  ambientIntensity,
  rotateSpeed,
}: PlanetProps) {
  function MeshComponent() {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += rotateSpeed // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} />
  }
  return (
    <div className=" h-full w-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight
          intensity={directionalIntensity}
          position={lightPosition}
        />
        <ambientLight intensity={ambientIntensity} />
        <OrbitControls />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
