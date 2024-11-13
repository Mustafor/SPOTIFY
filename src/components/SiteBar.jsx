import React from 'react'
import { NotIcon, UserIcon, UserProfile } from '../assets/images/icon'

function SiteBar() {
  return (
    <div className='w-[20%] overflow-y-auto h-[100vh] bg-[#000]'>
      <div className='mt-[29px] px-[20px]'>
      <div className='flex mb-[35px] items-center justify-between'>
      <h2 className='text-bold text-[20px] text-[#CCCCCC]'>Friend Activity</h2>
      <div className='flex items-center gap-[20px]'>
        <button>
        <UserIcon/>
        </button>
        <button>
        <NotIcon/>
        </button>
      </div>
      </div>
        <p className='text-[18px] mb-[23px] leading-[24px] text-[#CCCCCC]'>Let friends and followers on Spotify see what you’re listening to.</p>
        <div className='space-y-[20px] mb-[21px]'>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>          
        </div>
        <p className='text-[#CCCCCC] text-[18px] leading-[25px] mb-[23px]'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        <div className='flex items-center justify-center'>
        <button className='bg-white text-[#171717] border-[2px] border-white hover:border-white  hover:bg-transparent duration-300 hover:text-white text-[18px] font-bold py-[18px] w-[233px] rounded-[40px]'>SETTINGS</button>
        </div>
      </div>
    </div>
  )
}

export default SiteBar