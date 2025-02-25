import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"

export default function Planet5({ src, scale }: any) {
  function MeshComponent(props: any) {
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
        {...props}
      />
    )
  }
  return (
    <div className="w-42 m-auto mr-5">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <MeshComponent />
      </Canvas>
      <div className="flex flex-col items-end">
        <p className="">Squirrel</p>
      </div>
    </div>
  )
}
