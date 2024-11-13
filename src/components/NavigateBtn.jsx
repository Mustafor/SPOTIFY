import React from 'react'
import { NavigateIcon } from '../assets/images/icon'
import { useNavigate } from 'react-router'

function NavigateBtn() {
    const navigate = useNavigate()

  return (
    <div className='flex items-center py-5 px-10 space-x-[22px]'>
    <button onClick={() => navigate(-1)} className='w-[40px] navigate-btn h-[40px] rounded-full flex items-center justify-center'>
      <NavigateIcon/>
    </button>
    <button onClick={() => navigate(+1)} className='w-[40px] rotate-[180deg] navigate-btn h-[40px] rounded-full flex items-center justify-center'>
      <NavigateIcon/>
    </button>
  </div>
  )
}

export default NavigateBtn