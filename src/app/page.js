"use client"
import Scooter from "@/components/scooter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [position, setposition] = useState(false)
  return (
    <div className=" relative overflow-hidden w-full h-full">
      <div className={`${position ? 'move' : ''} absolute top-0 right-0 overflow-hidden  w-full h-full bg-dots text-black text-5xl font-fjalla flex justify-center items-center flex-col`}>
      <div className="relative inline-block h-12 w-full text-center flex justify-center">
        <h1 className={` relative ${position ? 'hidden' : ''} text-6xl  text-center animate-bounce drop-shadow-sm shadow-black cursor-pointer`} onClick={()=>{
          setposition(true)
        }}>Start</h1>
      </div>
      <div className="relative inline-block h-16 w-full text-center flex justify-center">
      <img className={`${position ? 'scooter' : ''} hidden absolute  h-24`} src="/scooter.svg" />
      </div>
      <div className="w-full p-0 -m-3">
      <div className={`${position ? 'line' :''} left-0 `}></div>
      </div>
    </div>
    </div>
  );
}
