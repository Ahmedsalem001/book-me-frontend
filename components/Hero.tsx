'use client'
import Image from "next/image"
import hero from "@/public/Hero.jpg"
import searchIcon from "@/public/searchIcon.svg"
import {pacifico} from "../app/fonts"
import { useRef } from "react"
const Hero = () => {
  const inputRef = useRef(null);
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <Image src={hero} alt="hero" fill className="-z-10" />
      <h1  className={`${pacifico.className} text-6xl text-center leading-relaxed text-white mb-12 mt-28`}>“There Is No Friend As <br /> Loyal As A Book.”</h1>
      <p className="text-xl text-white ">“The more that you read, the more things you will know. The more that you learn.”</p>
      <div   className="flex justify-between  rounded-3xl overflow-hidden items-center px-10 py-1 cursor-pointer mt-24 bg-[#FFFFFFA6] w-[70%] h-20" id="search" onClick={() => {inputRef.current.focus()}}>
        <input ref={inputRef} name="searsh" type="search" placeholder="search for the book you want..." className="placeholder:text-[#756AB6] pl-2 focus:outline-none bg-transparent w-full h-16
      "/>
        <Image src={searchIcon} alt="search" width={50} height={50}/>
        </div>
    </div>
  )
}

export default Hero