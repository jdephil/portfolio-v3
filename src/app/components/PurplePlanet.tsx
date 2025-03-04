import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
import Loading from "./Loading"
import { MarsScene } from "./MarsScene"
import { OrbitControls } from "@react-three/drei"
export default function PurplePlanet({
  scale,
  title,
  lightPosition,
}: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-56 m-auto flex">
      <div
        onClick={() => router.push("/basta")}
        className="h-56 planetBorder w-full"
      >
        {/* <Suspense fallback={<Loading />}> */}
        <Canvas>
          <directionalLight intensity={5} position={lightPosition} />
          <ambientLight intensity={0.3} />
          <OrbitControls />
          <PurplePlanetScene rotateSpeed={0.01} scale={1.5} />
          <MarsScene scale={0.06} rotateSpeed={0.005} />
        </Canvas>
        {/* </Suspense> */}
      </div>
      <div className="planetLabel">
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  )
}
