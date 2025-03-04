"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Wedding() {
  return (
    <div className="experienceContainer">
      <div className="experiencePlanet">
        <ExperiencePlanet
          directionalIntensity={5}
          ambientIntensity={0.4}
          src="/kepler-452b/scene.gltf"
          scale={0.025}
          rotateSpeed={0.001}
        />
      </div>
      <div className="experience">
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
