import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { GreenPlanetScene } from "./GreenPlanetScene"
import Loading from "./Loading"
// import { PurplePlanetScene } from "./PurplePlanetScene"
export default function GreenPlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-28 m-auto flex">
      <div
        onClick={() => router.push("/frog-story")}
        className="h-24 w-24 planetBorder"
      >
        {/* <Suspense fallback={<Loading />}> */}
        <Canvas
          camera={{ position: [0, 0, 5] }}
          fallback={<div>Sorry no WebGL supported!</div>}
        >
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight intensity={0.7} />

          <GreenPlanetScene scale={0.005} rotateSpeed={0.001} />
        </Canvas>
        {/* </Suspense> */}
      </div>
      <div className="planetLabel">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
