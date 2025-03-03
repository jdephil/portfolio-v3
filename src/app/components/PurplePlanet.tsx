import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
import Loading from "./Loading"

export default function PurplePlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-24 m-auto flex">
      <div
        onClick={() => router.push("/basta")}
        className="h-24 planetBorder w-full"
      >
        <Suspense fallback={<Loading />}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <directionalLight intensity={5} position={lightPosition} />
            <ambientLight intensity={0.3} />
            <PurplePlanetScene rotateSpeed={0.01} scale={scale} />
          </Canvas>
        </Suspense>
      </div>
      <div className="planetLabel">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
