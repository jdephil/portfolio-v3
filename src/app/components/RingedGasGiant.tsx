import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"

import { PlanetProps } from "../utils/types"
import { RingedGasGiantScene } from "./RingedGasGiantScene"
export default function RingedGasGiant({ scale }: PlanetProps) {
  const router = useRouter()

  return (
    <div className=" m-auto flex ">
      <div
        onClick={() => router.push("/lexx")}
        className="h-28 w-28 border-4 border-cyan-500 rounded-full cursor-pointer border-opacity-60 hover:border-[#F3DAAF] hover:border-opacity-60"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <directionalLight intensity={5} position={[1, 0.5, 0]} />

          <RingedGasGiantScene scale={scale} rotateSpeed={0.01} />
        </Canvas>
      </div>
      <div className="text-center h-fit bg-black text-white rounded bg-opacity-80 px-2">
        <p className="opacity-100">Lexx</p>
      </div>
    </div>
  )
}
