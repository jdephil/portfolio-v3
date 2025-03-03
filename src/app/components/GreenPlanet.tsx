import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"

export default function GreenPlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  function MeshComponent() {
    const { scene } = useGLTF("/green_planet/scene.gltf")
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
      className="w-24 h-24 m-auto flex"
    >
      <div
        onClick={() => router.push("/data4living")}
        className="border-4 border-cyan-500 w-full rounded-full cursor-pointer hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight intensity={0.7} />
          <MeshComponent />
        </Canvas>
      </div>
      <div className="bg-black text-white text-center rounded px-2 h-fit py-1 opacity-80">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
