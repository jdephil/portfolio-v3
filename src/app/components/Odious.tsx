import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { OdiousScene } from "./OdiousScene"
import Loading from "./Loading"
export default function Odious({ scale }: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-52 m-auto flex">
      <div
        onClick={() => router.push("/squirrel")}
        className="w-56 h-56 m-auto planetBorder"
      >
        {/* <Suspense fallback={<Loading />}> */}
        <Canvas camera={{ position: [0, -1, 5] }}>
          <ambientLight />
          <directionalLight intensity={5} position={[-1, -0.5, 0]} />
          <OdiousScene rotateSpeed={0.03} scale={0.5} />
        </Canvas>
        {/* </Suspense> */}
      </div>
      <div className="planetLabel">
        <p className="">Squirrel</p>
      </div>
    </div>
  )
}
