"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"
export default function PurplePlanetPage() {
  return (
    <div className="flex justify-around items-end h-svh">
      <div className="h-[600px] w-[600px] ">
        <ExperiencePlanet
          src="/purple_planet/scene.gltf"
          scale={2.8}
          lightPosition={[1, 0.5, 0]}
          directionalIntensity={5}
          ambientIntensity={0}
        />
      </div>
      <div className="w-[500px] self-center ">
        <Experience
          imgSource="/projectBasta.png"
          description="Basta is bridging the employment gap and building careers for first generation students through award winning technology and robust employer partnerships."
          stack="React, Django, GraphQL, PostgreSQL, Heroku, MongoDB, Airtable, GSheets"
          link="https://seekr.projectbasta.com/log-in"
        />
      </div>
    </div>
  )
}
