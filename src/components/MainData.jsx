"use client"
import React, { useState } from 'react'
import Datawrapper from './Datawrapper'
import data from "../utils/data.js"


const MainData = () => {
    const [count, setcount] = useState(0)
    console.log(count)
  return (
    <div className='maindata overflow-y-scroll font-mitr w-full h-full  bg-dots flex justify-start flex-col items-center '>
    <div className='text-6xl md:text-8xl lg:text-9xl font-anton text-light my-5 lg:my-10 '><h1>KARAN GOYAL</h1></div>
        <div className=' rounded-lg my-2 w-[92%] md:w-9/12 scale-90'>
            <Datawrapper count={count} content={data}/>
        </div>
    </div>
  )
}

export default MainData