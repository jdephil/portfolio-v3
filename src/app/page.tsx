"use client"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { GreenPlanetScene } from "./components/GreenPlanetScene"
import { PurplePlanetScene } from "./components/PurplePlanetScene"
import { OrbitControls } from "@react-three/drei"
import { RingedGasGiantScene } from "./components/RingedGasGiantScene"
import { OdiousScene } from "./components/OdiousScene"
import { MarsScene } from "./components/MarsScene"
import { KeplerScene } from "./components/KeplerScene"
import { PLANET_LABELS } from "./utils/consts"

export default function Home() {
  const [planetLabel, setPlanetLabel] = useState(PLANET_LABELS[0])

  return (
    <div className="flex flex-col h-screen">
      <video
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/stars.mp4" type="video/mp4" />
      </video>
      <div className="m-5 text-white z-10">
        <p>Jennifer De Phillips</p>
        <p>Full Stack Software Engineer</p>
        <div className="flex">
          <a target="_blank" rel="noreferrer" href="https://github.com/jdephil">
            Github
          </a>
          <p className="mx-2">|</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jenniferpaigedephillips/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className=" flex flex-col justify-center flex-1">
        <Canvas
          camera={{ zoom: 40, near: 0.1, far: 3000, position: [0, 2, 300] }}
          orthographic={true}
          fallback={<div>Sorry no WebGL supported!</div>}
        >
          <directionalLight intensity={5} position={[-2, -1, 0]} />
          <ambientLight intensity={0.7} />
          <OrbitControls />
          <PurplePlanetScene
            rotateSpeed={0.005}
            scale={2}
            landing={true}
            setPlanetLabel={setPlanetLabel}
            position={[-16, -6, 0]}
          />
          <OdiousScene
            rotateSpeed={0.03}
            scale={1}
            position={[-6, -1, 0]}
            landing={true}
            setPlanetLabel={setPlanetLabel}
          />
          <MarsScene
            scale={0.028}
            rotateSpeed={0.005}
            landing={true}
            setPlanetLabel={setPlanetLabel}
          />
          <RingedGasGiantScene scale={0.25} rotateSpeed={0.01} />
          <GreenPlanetScene scale={0.004} rotateSpeed={0.001} />
          <KeplerScene rotateSpeed={0.005} scale={0.004} />
        </Canvas>
      </div>
      <div className="bg-black border-4 border-white w-56 h-64 z-20 absolute right-20 top-[60%] m-auto p-5 border-double flex flex-col gap-2">
        <p>Click planets to explore</p>
        <p className="font-bold mt-5">Project:</p>
        <p>{planetLabel.name}</p>
        <p className="font-bold">Year:</p>
        <p>{planetLabel.year}</p>
      </div>
    </div>
  )
}
