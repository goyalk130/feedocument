"use client"
import React, { useState } from 'react'
import Datawrapper from './Datawrapper'
import data from "../../public/data.json"


const MainData = () => {
    const [count, setcount] = useState(0)
    console.log(count)
  return (
    <div className='maindata overflow-y-scroll font-mitr w-full h-full  bg-dots flex justify-center items-start'>
        <div className=' rounded-lg my-20  w-9/12 '>
            <Datawrapper count={count} content={data}/>
        </div>
    </div>
  )
}

export default MainData