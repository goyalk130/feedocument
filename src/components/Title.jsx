"use client"
import figureoutelement from '@/utils/figureoutelement';
import getsize from '@/utils/getsize'
import React from 'react'

const Title = ({open,openit,count,content}) => {
  let percent = getsize(count);
  let rem ="4.2rem"
  if(count==1){
    rem = ((3.5)/(count))+"rem"
  }
  if(count>1){
    rem = ((3.5*2)/(count+1))+"rem"
  }
  
  return (
    <div onClick={()=>{
      openit(open=>!open)
    }} style={{width:`${percent}`,fontSize:rem}} className={` text-2xl md:text-4xl lg:text-6xl leading-[3rem]   shadow-light shadow-sm  hover:duration-500 font-semibold tracking-wide  relative w-[${percent}] border-8 rounded-lg p-2 py-5 border-black bg-transparent  after:top-0 o after:absolute overflow-hidden after:left-0  hover:after:w-full after:h-full after:duration-500 hover:text-white z-10 after:z-[-10] hover:after:bg-light ${open?"after:bg-light after:w-full text-white":"after:w-1/12"} cursor-pointer`}>{figureoutelement(content)}</div>
  )
}


export default Title