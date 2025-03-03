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
        className="h-24 w-24 m-auto border-4 border-cyan-500 rounded-full cursor-pointer hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight />
          <MarsScene scale={scale} rotateSpeed={0.005} />
        </Canvas>
      </div>
      <div className="bg-black text-white text-center rounded px-2 h-fit py-1 opacity-80">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
