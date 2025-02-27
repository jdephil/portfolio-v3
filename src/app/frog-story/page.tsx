"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Wedding() {
  return (
    <div className="flex justify-around items-end h-svh">
      <div className="h-[500px] w-[500px] ">
        <ExperiencePlanet
          directionalIntensity={4}
          ambientIntensity={0.19}
          src="/green_planet/scene.gltf"
          scale={0.015}
          lightPosition={[0, 1, 0]}
        />
      </div>
      <div className="w-[500px] self-center ">
        <Experience
          imgSource="/frogStory.png"
          description="A choose-your-own-adventure game about a lonely, little frog (and the first app I ever built)."
          stack="Javascript, CSS, HTML"
          link="https://jdephil.github.io/Frog-Story/"
        />
      </div>
    </div>
  )
}
