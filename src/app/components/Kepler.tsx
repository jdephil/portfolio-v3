import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import Loading from "./Loading"
export default function Kepler({ src, scale, title, lightPosition }: any) {
  function MeshComponent(props: any) {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} {...props} />
  }
  return (
    <div className="m-auto pl-28 w-56  cursor-pointer">
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight />
          <MeshComponent />
        </Canvas>
      </Suspense>
      <div className="text-center pl-10">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
