"use client"
import { useRef, useEffect } from "react"
import Kepler from "./components/Kepler"
import PurplePlanet from "./components/PurplePlanet"
import RingedGasGiant from "./components/RingedGasGiant"
import Odious from "./components/Odious"
import GreenPlanet from "./components/GreenPlanet"
import Mars from "./components/Mars"
import { Canvas } from "@react-three/fiber"
import { GreenPlanetScene } from "./components/GreenPlanetScene"
import { PurplePlanetScene } from "./components/PurplePlanetScene"
import { OrbitControls } from "@react-three/drei"
import { RingedGasGiantScene } from "./components/RingedGasGiantScene"
import { OdiousScene } from "./components/OdiousScene"
import { MarsScene } from "./components/MarsScene"
import { KeplerScene } from "./components/KeplerScene"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.playbackRate = 1
  })
  const setPlayBack = () => {
    if (!videoRef.current) return
    videoRef.current.playbackRate = 1
  }
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
          <PurplePlanetScene rotateSpeed={0.005} scale={2} />
          <OdiousScene
            rotateSpeed={0.03}
            scale={1}
            position={[-6, -1, 0]}
            landing={true}
          />
          <MarsScene scale={0.028} rotateSpeed={0.005} />
          <RingedGasGiantScene scale={0.25} rotateSpeed={0.01} />
          <GreenPlanetScene scale={0.004} rotateSpeed={0.001} />
          <KeplerScene rotateSpeed={0.005} scale={0.004} />
        </Canvas>

        {/* <div className="grid grid-cols-4 grid-rows-4 min-h-full mt-20">
          <div className="row-start-2  col-start-1 col-span-2 flex">
            {" "}
            <RingedGasGiant scale={0.5} />{" "}
          </div>
          <div className="col-start-1 col-span-1 row-start-3">
            {" "}
            <Mars title="Data4Living" scale={0.02} lightPosition={[0, -1, 0]} />
          </div>
          <div className="col-span-2 col-start-2 row-start-1 flex self-end">
            <GreenPlanet
              title="Frog"
              scale={0.008}
              lightPosition={[1, 0.5, 0]}
            />
          </div>
          <div className="col-start-3 row-start-2 col-span-2 flex justify-center">
            {" "}
            <Kepler
              title="Wedding"
              scale={0.008}
              lightPosition={[-1, 0.5, 0]}
            />
          </div>
          <div className="col-start-3 col-span-2 row-start-3">
            <Odious scale={0.3} />
          </div>

          <div className="col-span-2 col-start-2 row-span-2 row-start-3 flex">
            <PurplePlanet
              title="Basta"
              scale={1.1}
              lightPosition={[1, -0.5, 0]}
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
