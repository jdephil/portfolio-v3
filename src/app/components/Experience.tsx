import Image from "next/image"
export default function Experience(props: {
  imgSource: string
  description: string
  stack: string
  link?: string
}) {
  return (
    <div className="flex-col items-center justify-center">
      <div className="mb-20">
        <Image
          src={props.imgSource}
          alt="data4Living"
          width={500}
          height={500}
        />
      </div>
      <div>
        <p>{props.description}</p>
        <p className="my-5">Stack: {props.stack}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={props.link}>
        Go to Site
      </a>
    </div>
  )
}
