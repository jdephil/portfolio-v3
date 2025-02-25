"use client"
import Header from "./components/Header"
import Experience from "./components/Experience"
import Planet from "./components/Planet"
import Planet2 from "./components/Planet2"
import Planet3 from "./components/Planet3"
import Planet4 from "./components/Planet4"
import Planet5 from "./components/Planet5"
export default function Home() {
  return (
    <div>
      <Planet src="/mars_gltf/scene.gltf" scale={0.02} />
      <div className="grid grid-template-rows-2 grid-template-columns-4">
        <div className="row-start-1 col-start-1">
          <Planet src="/purple_planet/scene.gltf" scale={2} />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div>
          {" "}
          <Planet2 src="/purple_planet/scene.gltf" scale={2} />
        </div>
        <div className="col-start-1 row-start-2">
          {" "}
          <Planet src="/kepler-452b/scene.gltf" scale={0.02} />
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-1">
          {" "}
          <Planet3 src="/the_star_sun/scene.gltf" scale={0.02} />
        </div>
        <div className="col-start-4 row-start-1">
          {" "}
          <Planet4 src="/green_planet/scene.gltf" scale={0.02} />
        </div>
        <div className="col-start-4 row-start-2">
          {" "}
          <Planet4 src="/ringed_gas_giant/scene.gltf" scale={1} />
        </div>
      </div>
      <Planet2 src="/odious/scene.gltf" scale={1} />
    </div>
  )
}
