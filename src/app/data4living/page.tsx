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
          lightPosition={[0, -1, 0]}
          directionalIntensity={3}
          ambientIntensity={0.6}
          rotateSpeed={0.001}
        />
      </div>
      <div className="w-[500px] self-center ">
        <Experience
          imgSource="/data4Living.png"
          description="Data4Living simplifies your document management and helps prepare your
          documents to complete significant life events."
          stack="Vue, Django, PostgreSQL, Heroku, Stripe"
          link="https://app.data4living.com/login"
        />
      </div>
    </div>
  )
}
