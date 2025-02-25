import Image from "next/image"
export default function Experience(props: {
  imgSource: string
  description: string
  stack: string
  link?: string
}) {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image
          src={props.imgSource}
          alt="data4Living"
          width={500}
          height={500}
        />
      </div>
      <div>
        <p>{props.description}</p>
        <p>Stack: {props.stack}</p>
      </div>
      <a href={props.link}>Site</a>
    </div>
  )
}
