import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { GreenPlanetScene } from "./GreenPlanetScene"
import Loading from "./Loading"
export default function GreenPlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-28 flex">
      <div
        onClick={() => router.push("/frog-story")}
        className="h-24 w-24 m-auto border-4 border-cyan-500 rounded-full cursor-pointer hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Suspense fallback={<Loading />}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <directionalLight intensity={5} position={lightPosition} />
            <ambientLight intensity={0.7} />
            <GreenPlanetScene scale={scale} rotateSpeed={0.001} />
          </Canvas>
        </Suspense>
      </div>
      <div className="bg-black text-white text-center rounded px-2 h-fit py-1 opacity-80">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
