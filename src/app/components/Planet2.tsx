import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"

export default function Planet2({ src, scale, title }: any) {
  function MeshComponent(props: any) {
    const { scene } = useGLTF(src)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.0005 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} scale={scale} {...props} />
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <MeshComponent />
      </Canvas>
      <div className="flex flex-col items-end">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
