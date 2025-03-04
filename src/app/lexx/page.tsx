"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Lexx() {
  return (
    <div className="experienceContainer">
      <div className="experiencePlanet">
        <ExperiencePlanet
          src="/ringed_gas_giant/scene.gltf"
          scale={0.35}
          directionalIntensity={5}
          ambientIntensity={1}
          rotateSpeed={0.01}
        />
      </div>
      <div className="experience">
        <Experience
          imgSource="/lexx.png"
          description="Connecting life-long learners to the knowledge they seek using the power of AI. Lexx creates a personalized curriculum and learning map, which the user can explore at their own pace. Unlock new learning nodes as you complete knowledge checks."
          stack="React, Django, OpenAI, PostgreSQL, Heroku"
        />
      </div>
    </div>
  )
}
