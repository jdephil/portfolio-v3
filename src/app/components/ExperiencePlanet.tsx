import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { PlanetProps } from "../utils/types"
import { PurplePlanetScene } from "./PurplePlanetScene"
import { OdiousScene } from "./OdiousScene"
import { KeplerScene } from "./KeplerScene"
import { GreenPlanetScene } from "./GreenPlanetScene"
export default function ExperiencePlanet({
  scale,
  lightPosition,
  src,
  directionalIntensity,
  ambientIntensity,
  rotateSpeed,
}: PlanetProps) {
  function switchModel() {
    switch (src) {
      case "/purple_planet/scene.gltf":
        return <PurplePlanetScene rotateSpeed={rotateSpeed} scale={scale} />
      case "/odious/scene.gltf":
        return <OdiousScene rotateSpeed={rotateSpeed} scale={scale} />
      case "/kepler-452b/scene.gltf":
        return <KeplerScene rotateSpeed={rotateSpeed} scale={scale} />
      case "/green_planet/scene.gltf":
        return <GreenPlanetScene rotateSpeed={rotateSpeed} scale={scale} />
    }
  }
  return (
    <div className=" h-full w-full cursor-pointer">
      <p className="text-center">
        Click & drag to observe planet, scroll to zoom
      </p>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <directionalLight
          intensity={directionalIntensity}
          position={lightPosition}
        />
        <ambientLight intensity={ambientIntensity} />
        <OrbitControls />
        {switchModel()}
      </Canvas>
    </div>
  )
}
