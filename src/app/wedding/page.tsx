"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Wedding() {
  return (
    <div className="flex justify-around items-end h-svh">
      <div className="h-[500px] w-[500px] ">
        <ExperiencePlanet
          directionalIntensity={4}
          ambientIntensity={0.25}
          src="/kepler-452b/scene.gltf"
          scale={0.028}
          lightPosition={[-1, 0.5, 0]}
          rotateSpeed={0.001}
        />
      </div>
      <div className="w-[500px] self-center ">
        <Experience
          imgSource="/wedding.png"
          description="Wedding website fully designed and created by me."
          stack="React, GSAP"
          link="https://wedding.jenniferdephillips.com"
        />
      </div>
    </div>
  )
}
