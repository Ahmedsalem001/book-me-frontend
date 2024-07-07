'use client'
import Image from "next/image"
import hero from "@/public/Hero.jpg"
import searchIcon from "@/public/searchIcon.svg"
import {pacifico} from "../app/fonts"
import { useRef } from "react"
const Hero = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setFoces = () => {
    if (inputRef.current) inputRef.current.focus();
  }
  return (
    <section className="h-dvh flex flex-col justify-center items-center max-sm:px-6 transition-all duration-500 ease-in-out">
      <Image src={hero} alt="hero" fill className="-z-10" />
      <h1  className={`${pacifico.className} text-6xl max-sm:text-4xl text-center leading-relaxed text-white mb-12 mt-28`}>“There Is No Friend As <br /> Loyal As A Book.”</h1>
      <p className="text-xl text-white max-sm:text-center max-sm:text-lg">“The more that you read, the more things you will know. The more that you learn.”</p>
      <div onClick={setFoces} className="flex justify-between  rounded-3xl overflow-hidden items-center px-10 py-1 cursor-pointer mt-24 bg-[#FFFFFFA6] w-[70%] max-sm:w-[100%] max-sm:h-14 h-20" id="search">
        <input ref={inputRef} name="searsh" type="search" placeholder="search for the book you want..." className="placeholder:text-[#756AB6] pl-2 focus:outline-none bg-transparent w-full h-16
      "/>
        <Image src={searchIcon} alt="search" width={50} height={50}/>
        </div>
    </section>
  )
}

export default Hero