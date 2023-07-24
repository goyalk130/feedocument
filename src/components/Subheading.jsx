"use client"
import getsize from '@/utils/getsize'
import React from 'react'
import Datawrapper from './Datawrapper'

const Subheading = ({count,content}) => {
  const percent = getsize(count)
  console.log(content)
  return (
    <div style={{width:`${percent}`}} className='flex justify-center items-end flex-col'>
      {content?.map((item,num)=>{
        return(<Datawrapper count={count} content={item} />)
      })}
    </div>
  )
}

export default Subheading