import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { PlanetProps } from "../utils/types"

export default function Odious({ src, scale }: PlanetProps) {
  function MeshComponent() {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01 // Adjust speed as needed
      }
    })
    return (
      <primitive
        rotation={[Math.PI / 110, 0, 0]}
        object={scene}
        ref={meshRef}
        scale={scale}
      />
    )
  }
  return (
    <div className="w-full m-auto ml-20  cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight intensity={5} position={[-1, -0.5, 0]} />

        <MeshComponent />
      </Canvas>
      <div className="flex flex-col items-center ml-10">
        <p className="">Squirrel</p>
      </div>
    </div>
  )
}
