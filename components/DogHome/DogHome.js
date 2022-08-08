import React from 'react'
import img from "../../images/husky.jpg"
import Image from "next/image"
import s from "../DogHome/DogHome.module.css"


export default function DogHome() {
  const lazyRoot = React.useRef(null)
  return (
    <>
       <div className={s["dog-container"]}>
        <h2>Dogs</h2>
        <h4>A E-commerce Dog Website...</h4>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Image lazyRoot={lazyRoot} src={img} width={800} height="450"  className={s["dog-image"]} alt="dogs" />
        <div className={s["dog-desc"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        
       </div>
    </>
  )
}
