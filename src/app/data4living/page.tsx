"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Data4Living() {
  return (
    <div className="flex justify-around items-end h-svh">
      <div className="h-[600px] w-[650px] ">
        <ExperiencePlanet
          src="/mars_gltf/scene.gltf"
          scale={0.05}
          directionalIntensity={4}
          ambientIntensity={0.7}
          rotateSpeed={0.001}
        />
      </div>
      <div className="experience ">
        <Experience
          imgSource="/data4living.png"
          description="Data4Living simplifies your document management and helps prepare your
          documents to complete significant life events."
          stack="Vue, Django, PostgreSQL, Heroku, Stripe"
          link="https://app.data4living.com/login"
        />
      </div>
    </div>
  )
}
