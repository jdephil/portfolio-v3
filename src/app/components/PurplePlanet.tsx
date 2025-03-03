import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
export default function PurplePlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-24 m-auto pr-0 flex">
      <div
        onClick={() => router.push("/basta")}
        className="h-24 border-4 hover:border-[#F3DAAF] hover:border-opacity-60 border-cyan-500 w-full rounded-full cursor-pointer border-opacity-60"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight intensity={0.3} />
          <PurplePlanetScene rotateSpeed={0.01} scale={scale} />
        </Canvas>
      </div>
      <div className="bg-black text-white text-center rounded px-2 h-fit py-1 opacity-80">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
