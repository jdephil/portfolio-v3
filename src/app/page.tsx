"use client"
import { useState, Suspense } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { GreenPlanetScene } from "./components/GreenPlanetScene"
import { PurplePlanetScene } from "./components/PurplePlanetScene"
import {
  OrbitControls,
  Environment,
  Sky,
  Clouds,
  Cloud,
} from "@react-three/drei"
import { RingedGasGiantScene } from "./components/RingedGasGiantScene"
import { OdiousScene } from "./components/OdiousScene"
import { MarsScene } from "./components/MarsScene"
import { KeplerScene } from "./components/KeplerScene"
import { PLANET_LABELS } from "./utils/consts"
import Loading from "./components/Loading"
import useWindowDimensions from "./utils/windowDimensions"

export default function Home() {
  const [planetLabel, setPlanetLabel] = useState(PLANET_LABELS[0])
  const { width } = useWindowDimensions()
  const [rayleigh, setRayleigh] = useState(0.03)
  const [showPlanetLabel, setShowPlanetLabel] = useState(false)
  const [bgColor, setBgColor] = useState("bg-[#5C6576]")
  // const [cloudsVisible, setCloudsVisible] = useState(true)
  // const [fov, setFov] = useState(120)
  function cameraPosition() {
    if (width <= 640) {
      return 8
    } else if (width > 640 && width <= 768) {
      return 15
    } else if (width > 768 && width <= 1024) {
      return 18
    } else if (width > 1024 && width <= 1280) {
      return 25
    } else {
      return 10
    }
  }

  function BackgroundUpdater() {
    useFrame(({ camera }) => {
      if (camera.position.z >= 250) {
        setRayleigh(0.03) // blue when zoomed out
        setShowPlanetLabel(false)
        setBgColor("bg-[#5C6576]")
      }
      if (camera.position.z >= 240 && width <= 768) {
        setRayleigh(0.01) // light blue when zoomed out
        setShowPlanetLabel(false)
        setBgColor("bg-[#5C6576]")
      }
      if (camera.position.z <= 239) {
        setRayleigh(0) // Black when zoomed in
        setShowPlanetLabel(true)
        setBgColor("bg-[#000000]")
      }
      // if (navigator.maxTouchPoints === 1) {
      //   setRayleigh(0)
      //   setShowPlanetLabel(true)
      //   setBgColor("bg-[#000000]")
      //   setCloudsVisible(false)
      //   setFov(50)
      // }
    })
    return null
  }
  return (
    <div className={`${bgColor} flex flex-col h-screen`}>
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

      <div className="m-auto block md:hidden">
        <p>zoom to enter</p>
      </div>

      <div className=" flex flex-col justify-center flex-1">
        <Suspense fallback={<Loading />}>
          <Canvas
            camera={{
              fov: 120,
              zoom: cameraPosition(),
              near: 0.1,
              far: 3000,
              position: [1, 20, 900],
              rotation: [10, 5, 0],
            }}
            style={{ touchAction: "none" }}
            // orthographic={true}
            fallback={<div>Sorry no WebGL supported!</div>}
          >
            <Environment preset="night" />
            <Sky
              distance={450000}
              sunPosition={[10, 40, 80]}
              rayleigh={rayleigh}
              turbidity={rayleigh}
              inclination={10}
              azimuth={5.25}
            />
            <directionalLight intensity={5} position={[-2, -1, 0]} />
            <ambientLight intensity={0.7} />
            <OrbitControls
              enablePan={false}
              enableRotate={false}
              maxDistance={1000}
            />
            <Clouds material={THREE.MeshBasicMaterial} position={[0, 0, 250]}>
              <Cloud
                seed={3}
                segments={40}
                bounds={[19, 10, 2]}
                volume={5}
                color="white"
                position={[-15, 25, 0]}
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={1}
                position={[4, 10, 0]}
                bounds={[12, 0, 0]}
                scale={1}
                volume={10}
                color="white"
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={7}
                segments={50}
                bounds={[19, 7, 2]}
                volume={11}
                color="white"
                position={[-6, 1, 0]}
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={5}
                segments={50}
                bounds={[24, 20, 9]}
                volume={11}
                color="white"
                position={[-60, 1, 0]}
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={9}
                segments={50}
                bounds={[19, 7, 14]}
                volume={11}
                color="white"
                position={[50, 1, 0]}
                fade={50}
                growth={10}
                speed={0.05}
              />
            </Clouds>
            <Clouds material={THREE.MeshBasicMaterial} position={[0, 0, 800]}>
              <Cloud
                seed={3}
                segments={40}
                bounds={[5, 2, 5]}
                volume={2}
                color="white"
                position={[-15, 5, 30]}
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={1}
                position={[4, 16, 30]}
                bounds={[12, 0, 0]}
                scale={1}
                volume={10}
                color="white"
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={7}
                segments={40}
                bounds={[13, 6, 2]}
                volume={2}
                color="white"
                position={[25, 22, 30]}
                fade={50}
                growth={10}
                speed={0.05}
              />
              <Cloud
                seed={1}
                segments={40}
                bounds={[13, 6, 2]}
                volume={2}
                color="white"
                position={[-25, 25, 30]}
                fade={50}
                growth={10}
                speed={0.05}
              />
            </Clouds>
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
              position={[1, 2, 0]}
              landing={true}
              setPlanetLabel={setPlanetLabel}
            />
            <RingedGasGiantScene
              scale={0.25}
              rotateSpeed={0.01}
              landing={true}
              setPlanetLabel={setPlanetLabel}
              position={[6, 4.5, 0]}
            />
            <GreenPlanetScene
              scale={0.004}
              rotateSpeed={0.001}
              position={[10, 6.5, 0]}
              landing={true}
              setPlanetLabel={setPlanetLabel}
            />
            <KeplerScene
              rotateSpeed={0.005}
              scale={0.004}
              position={[13, 8, 0]}
              landing={true}
              setPlanetLabel={setPlanetLabel}
            />
            <BackgroundUpdater />
          </Canvas>
        </Suspense>
      </div>

      <div
        className={`${
          showPlanetLabel ? "visible opacity-100" : "invisible opacity-0"
        } bg-black border-4 border-white md:w-56 md:h-64 z-20 absolute bottom-5 right-5 md:right-20 md:top-[60%] m-auto p-5 border-double flex flex-col gap-2 transition-all delay-150 duration-300 ease-out`}
      >
        <p>Click planets to explore</p>
        <div className="hidden md:block">
          <p className="font-bold my-2">Project:</p>
          <p>{planetLabel.name}</p>
        </div>
        <div className="hidden md:block">
          <p className="font-bold my-2">Year:</p>
          <p>{planetLabel.year}</p>
        </div>
      </div>
    </div>
  )
}
