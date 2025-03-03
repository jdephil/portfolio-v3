import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { PlanetProps } from "../utils/types"
import { OdiousScene } from "./OdiousScene"
export default function Odious({ scale }: PlanetProps) {
  const router = useRouter()

  return (
    <div className="w-28 h-28 m-auto cursor-pointer flex">
      <div
        onClick={() => router.push("/squirrel")}
        className="border-4 border-cyan-500 w-full rounded-full cursor-pointer border-opacity-60 hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Canvas camera={{ position: [0, -1, 5] }}>
          <ambientLight />
          <directionalLight intensity={5} position={[-1, -0.5, 0]} />

          <OdiousScene rotateSpeed={0.03} scale={scale} />
        </Canvas>
      </div>
      <div className="text-center h-fit bg-black text-white rounded bg-opacity-60 px-2">
        <p className="">Squirrel</p>
      </div>
    </div>
  )
}
