import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"

export default function GreenPlanet({
  src,
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  function MeshComponent() {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.0005 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} />
  }
  return (
    <div
      onClick={() => router.push("/frog-story")}
      className="w-36 m-auto flex flex-col justify-start cursor-pointer"
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight intensity={5} position={lightPosition} />
        <ambientLight intensity={0.3} />
        <MeshComponent />
      </Canvas>
      <div className="flex flex-col items-center pl-10">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
