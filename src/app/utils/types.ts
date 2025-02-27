export interface PlanetProps {
  src: string
  scale: number
  lightPosition: [x: number, y: number, z: number]
  directionalIntensity?: number
  ambientIntensity?: number
  rotateSpeed?: number
  title?: string
}
