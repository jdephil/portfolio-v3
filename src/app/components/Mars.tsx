import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { PlanetProps } from "../utils/types"

export default function Mars({
  src,
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  function MeshComponent() {
    const modelLink = src ? src : ""
    const { scene } = useGLTF(modelLink)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} />
  }
  return (
    <div className="w-36  cursor-pointer m-auto">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight intensity={5} position={lightPosition} />
        <ambientLight />
        <MeshComponent />
      </Canvas>
      <div className="text-right">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
