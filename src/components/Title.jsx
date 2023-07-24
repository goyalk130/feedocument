"use client"
import figureoutelement from '@/utils/figureoutelement';
import getsize from '@/utils/getsize'
import React from 'react'

const Title = ({open,openit,count,content}) => {
  let percent = getsize(count);
  
  return (
    <div onClick={()=>{
      openit(open=>!open)
    }} style={{width:`${percent}`}} className={`  !md:text-6xl  shadow-light shadow-sm  hover:duration-500 font-semibold tracking-wide  relative w-[${percent}] border-8 rounded-lg p-2 py-5 border-black bg-transparent  after:top-0 o after:absolute overflow-hidden after:left-0  hover:after:w-full after:h-full after:duration-500 hover:text-white z-10 after:z-[-10] hover:after:bg-light ${open?"after:bg-light after:w-full text-white":"after:w-1/12"} cursor-pointer`}>{figureoutelement(content)}</div>
  )
}


export default Title