import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { PlanetProps } from "../utils/types"
export default function Sun({ src, scale }: PlanetProps) {
  function MeshComponent() {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.001 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} />
  }
  return (
    <div className="flex flex-col justify-between items-center w-fit cursor-pointer">
      <div className="flex flex-col items-end">
        <p className="">Jennifer De Phillips</p>
        <p>Full Stack Software Engineer</p>
      </div>
      <Canvas className="!h-[200px]" camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
