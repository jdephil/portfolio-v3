import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Mesh } from "three"

export default function ExperiencePlanet({
  scale,
  lightPosition,
  src,
  directionalIntensity,
  ambientIntensity,
}: any) {
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
    <div className=" h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight
          intensity={directionalIntensity}
          position={lightPosition}
        />
        <ambientLight intensity={ambientIntensity} />
        <OrbitControls />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
