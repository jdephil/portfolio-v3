import { Canvas } from "@react-three/fiber"
import { PlanetProps } from "../utils/types"
import { MarsScene } from "./MarsScene"
import { useRouter } from "next/navigation"

export default function Mars({ scale, title, lightPosition }: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-36  cursor-pointer m-auto flex">
      <div
        onClick={() => router.push("/data4living")}
        className="h-24 w-24 m-auto planetBorder"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight />
          <MarsScene scale={scale} rotateSpeed={0.005} />
        </Canvas>
      </div>
      <div className="planetLabel">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
