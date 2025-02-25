"use client"
import Header from "./components/Header"
import Experience from "./components/Experience"
import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"
export default function Home() {
  function MeshComponent(props: any) {
    const fileUrl = "/mars_gltf/scene.gltf"
    const { scene } = useGLTF(fileUrl)
    const meshRef = useRef<Mesh>(null) // Create a reference to the mesh

    // Rotate the model on every frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01 // Adjust speed as needed
      }
    })
    return <primitive object={scene} ref={meshRef} {...props} />
  }
  return (
    <div>
      <Header />
      <Experience
        imgSource="/projectBasta.png"
        description="Basta is bridging the employment gap and building careers for first generation students through award winning technology and robust employer partnerships."
        stack="React, Django, GraphQL, PostgreSQL, Heroku, MongoDB, Airtable, GSheets"
        link="https://seekr.projectbasta.com/log-in"
      />
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <OrbitControls />

        <MeshComponent scale={0.02} />
      </Canvas>
      <Experience
        imgSource="/data4Living.png"
        description="Data4Living simplifies your document management and helps prepare your
          documents to complete significant life events."
        stack="Vue, Django, PostgreSQL, Heroku, Stripe"
        link="https://app.data4living.com/login"
      />
      <Experience
        imgSource="/squirrel.png"
        description="Squirrel Financial Literacy Programme is a web-based application that can be accessed via desktop, tablet or smartphone. It is designed to give 7-18 year olds the opportunity to experience a wide range of real world financial management activities. Students learn to manage bank accounts, earn income, pay bills, and unlock rewards."
        stack="React, Django, GraphQL, PostgreSQL, Heroku"
        link="https://app.squirreledu.co/log-in"
      />
      <Experience
        imgSource="/lexx.png"
        description="Connecting life-long learners to the knowledge they seek using the power of AI. Lexx creates a personalized curriculum and learning map, which the user can explore at their own pace. Unlock new learning nodes as you complete knowledge checks."
        stack="React, Django, OpenAI, PostgreSQL, Heroku"
      />
      <Experience
        imgSource="/wedding.png"
        description="Wedding website fully designed and created by me."
        stack="React, GSAP"
        link="https://wedding.jenniferdephillips.com"
      />
      <Experience
        imgSource="/frogStory.png"
        description="A choose-your-own-adventure game about a lonely, little frog (and the first app I ever built)."
        stack="Javascript, CSS, HTML"
        link="https://jdephil.github.io/Frog-Story/"
      />
    </div>
  )
}
