import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import Loading from "./Loading"
import { PlanetProps } from "../utils/types"
import { useRouter } from "next/navigation"

export default function Kepler({
  src,
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()
  function MeshComponent() {
    const modelLink = src ? src : ""

    const { scene } = useGLTF("/kepler-452b/scene.gltf")
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
    <div className="m-auto pl-28 w-56 h-28 flex">
      <div
        onClick={() => router.push("/data4living")}
        className="border-2 border-cyan-500 w-full rounded-full cursor-pointer"
      >
        <Suspense fallback={<Loading />}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <directionalLight intensity={5} position={lightPosition} />
            <ambientLight />
            <MeshComponent />
          </Canvas>
        </Suspense>
      </div>
      <div className="text-center h-fit bg-[#010034] text-white rounded px-2">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
