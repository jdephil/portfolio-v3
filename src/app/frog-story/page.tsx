"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function FrogStory() {
  return (
    <div className="experienceContainer">
      <div className="experiencePlanet ">
        <ExperiencePlanet
          directionalIntensity={5}
          ambientIntensity={0.25}
          src="/green_planet/scene.gltf"
          scale={0.015}
          rotateSpeed={0.001}
        />
      </div>
      <div className="experience">
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
