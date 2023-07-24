"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title'
import Data from './Data'
import Subheading from './Subheading'
import getsize from '@/utils/getsize'

const Datawrapper = ({count,content}) => {
  const percent = getsize(count)
  const [open, setopen] = useState(false)
  useEffect(() => {
      if(count==0){
        setopen(true)
      }
  }, [])
console.log(11," percent ",percent," count ",count)      
  return (
    <div style={{width:`${percent}`}} className={`datawrapper flex justify-center items-end flex-col my-1`}>
        <Title open={open} openit={setopen} count={count} content={content.title}/>
        <Data isopen={open} count={count+1} content={content.data}/>
        <Subheading count={count+1} content={content.subdata}/>
    </div>
  )
}

export default Datawrapper