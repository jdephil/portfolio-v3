"use client"

import Kepler from "./components/Kepler"
import PurplePlanet from "./components/PurplePlanet"
import RingedGasGiant from "./components/RingedGasGiant"
import Odious from "./components/Odious"
import GreenPlanet from "./components/GreenPlanet"
import Mars from "./components/Mars"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-[url('/galaxy.jpeg')] bg-cover h-screen">
      <div className="m-5">
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
      <div className="grid grid-cols-4 grid-rows-3 ">
        <div
          onClick={() => router.push("/basta")}
          className="row-start-2  col-start-1 col-span-2 "
        >
          {" "}
          <PurplePlanet
            title="Project Basta"
            scale={0.5}
            lightPosition={[1, -0.5, 0]}
          />
        </div>
        <div
          onClick={() => router.push("/lexx")}
          className="col-start-1 col-span-2 row-start-3 "
        >
          {" "}
          <RingedGasGiant scale={0.1} />{" "}
        </div>
        <div className="col-span-2 col-start-2 row-start-1 flex align-bottom justify-end  ">
          <Mars title="Data4Living" scale={0.01} lightPosition={[0, -1, 0]} />
        </div>
        <div
          onClick={() => router.push("/squirrel")}
          className="col-start-3 row-start-2 col-span-2"
        >
          {" "}
          <Odious scale={0.3} />
        </div>
        <div className="col-start-3 col-span-2 row-start-3">
          <Kepler title="Wedding" scale={0.008} lightPosition={[-1, 0.5, 0]} />
        </div>
        <div
          onClick={() => router.push("/data4living")}
          className="col-span-2 col-start-2 row-start-1"
        >
          {" "}
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <GreenPlanet
            title="Frog Story"
            scale={0.006}
            lightPosition={[0, 1, 0]}
          />
        </div>
      </div>
    </div>
  )
}
