import figureoutelement from '@/utils/figureoutelement'
import React from 'react'

const Loaddata = ({content}) => {
  return (
    <div className='w-full self-center w-full'>{figureoutelement(content)}</div>
  )
}

export default Loaddata