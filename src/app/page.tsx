"use client"

import Kepler from "./components/Kepler"
import PurplePlanet from "./components/PurplePlanet"
import Sun from "./components/Sun"
import RingedGasGiant from "./components/RingedGasGiant"
import Odious from "./components/Odious"
import GreenPlanet from "./components/GreenPlanet"
import Mars from "./components/Mars"
import Loading from "./components/Loading"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-4">
        <div className="col-start-4 flex justify-end m-5">
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
        <div
          onClick={() => router.push("/basta")}
          className="row-start-2  col-start-1 col-span-2 "
        >
          {" "}
          <PurplePlanet
            title="Project Basta"
            scale={2.5}
            lightPosition={[1, -0.5, 0]}
          />
        </div>
        <div
          onClick={() => router.push("/lexx")}
          className="col-start-1 col-span-2 row-start-3 "
        >
          {" "}
          <RingedGasGiant src="/ringed_gas_giant/scene.gltf" scale={0.4} />{" "}
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-2 flex items-center justify-center ">
          <Sun src="/the_star_sun/scene.gltf" scale={0.13} />
        </div>
        <div
          onClick={() => router.push("/squirrel")}
          className="col-start-3 row-start-2 col-span-2"
        >
          {" "}
          <Odious src="/odious/scene.gltf" scale={0.8} />
        </div>
        <div
          onClick={() => router.push("/wedding")}
          className="col-start-3 col-span-2 row-start-3"
        >
          <Kepler
            title="Wedding"
            src="/kepler-452b/scene.gltf"
            scale={0.02}
            lightPosition={[-1, 0.5, 0]}
          />
        </div>
        <div
          onClick={() => router.push("/data4living")}
          className="col-span-2 col-start-2 row-start-1"
        >
          {" "}
          <Mars
            title="Data4Living"
            src="/mars_gltf/scene.gltf"
            scale={0.05}
            lightPosition={[0, -1, 0]}
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-4">
          <GreenPlanet
            src="/green_planet/scene.gltf"
            title="Frog Story"
            scale={0.015}
            lightPosition={[0, 1, 0]}
          />
        </div>
      </div>
    </div>
  )
}
