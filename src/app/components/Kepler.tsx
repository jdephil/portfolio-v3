import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loading from "./Loading"
import { PlanetProps } from "../utils/types"
import { useRouter } from "next/navigation"
import { KeplerScene } from "./KeplerScene"
export default function Kepler({ scale, title, lightPosition }: PlanetProps) {
  const router = useRouter()

  return (
    <div className="m-auto pl-28 w-56 h-28 flex">
      <div
        onClick={() => router.push("/wedding")}
        className="border-4 border-cyan-500 w-full rounded-full cursor-pointer border-opacity-60 hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Suspense fallback={<Loading />}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <directionalLight intensity={5} position={lightPosition} />
            <ambientLight />
            <KeplerScene rotateSpeed={0.005} scale={scale} />
          </Canvas>
        </Suspense>
      </div>
      <div className="text-center h-fit bg-black text-white rounded px-2">
        <p className="">{title}</p>
      </div>
    </div>
  )
}
