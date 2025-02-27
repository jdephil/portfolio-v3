"use client"
import ExperiencePlanet from "../components/ExperiencePlanet"
import Experience from "../components/Experience"

export default function Squirrel() {
  return (
    <div className="flex justify-around items-end h-svh">
      <div className="h-[600px] w-[650px] ">
        <ExperiencePlanet
          src="/odious/scene.gltf"
          scale={0.6}
          lightPosition={[-1, -0.5, 0]}
          directionalIntensity={3}
          ambientIntensity={0.8}
        />
      </div>
      <div className="w-[500px] self-center ">
        <Experience
          imgSource="/squirrel.png"
          description="Squirrel Financial Literacy Programme is a web-based application that can be accessed via desktop, tablet or smartphone. It is designed to give 7-18 year olds the opportunity to experience a wide range of real world financial management activities. Students learn to manage bank accounts, earn income, pay bills, and purchase items."
          stack="React, Django, GraphQL, PostgreSQL, Heroku"
          link="https://app.squirreledu.co/log-in"
        />
      </div>
    </div>
  )
}
