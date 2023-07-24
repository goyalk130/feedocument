import React from 'react'
import Loaddata from './Loaddata'
import getsize from '@/utils/getsize'

const Data = ({isopen,count,content}) => {
  const percent = getsize(count);
  let len = "";
  let pad= "1.25rem";
  let bor = "1px";
  if(isopen){
      len=" "
      pad= "1.25rem"
      bor = "1px solid black"
  }else{
    len="0px"
    pad= "0rem"
    bor = "0px"
  }

  return (
    <div style={{width:`${percent}`,height:`${len}`,padding:`${pad}`,border:`${bor}`}} className=' relative data overflow-hidden transition-all duration-[5s] flex flex-col items-start gap-5 rounded-br-lg rounded-bl-lg -top-2' >
        {content?.map(((item,num)=>{
          return (<Loaddata key={num} content={item}/>)
        }))}
    </div>
  )
}

export default Data