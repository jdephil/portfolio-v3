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
      <Planet title="Data4Living" src="/mars_gltf/scene.gltf" scale={0.05} />

      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
        <div>
          {" "}
          <Planet2
            src="/purple_planet/scene.gltf"
            title="Project Basta"
            scale={2.5}
          />
        </div>
        <div className="col-start-1 row-start-2">
          {" "}
          <Planet4 src="/ringed_gas_giant/scene.gltf" scale={0.5} />{" "}
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-1">
          <Planet3 src="/the_star_sun/scene.gltf" scale={0.13} />
        </div>
        <div className="col-start-4 row-start-1">
          {" "}
          <Planet5 src="/odious/scene.gltf" scale={0.8} />
        </div>
        <div
          onClick={() => console.log("click")}
          className="col-start-4 row-start-2"
        >
          <Planet title="Lexx" src="/kepler-452b/scene.gltf" scale={0.02} />
        </div>
      </div>
      <Planet2
        src="/green_planet/scene.gltf"
        title="Frog Story"
        scale={0.015}
      />
    </div>
  )
}
