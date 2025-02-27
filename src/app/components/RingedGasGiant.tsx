import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"

export default function RingedGasGiant({ src, scale }: any) {
  function MeshComponent(props: any) {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} {...props} />
  }
  return (
    <div className="w-fit min-h-56 hover:cursor-pointer m-auto pr-24">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight intensity={5} position={[1, 0.5, 0]} />

        <MeshComponent />
      </Canvas>
      <div className="flex flex-col items-center ml-20">
        <p className="">Lexx</p>
      </div>
    </div>
  )
}
