import React from 'react'
import { PATH } from '../hook/usePath'
import { HomeIcon, LbIcon, LikeIcon, PlayList, SearchIcon } from '../assets/images/icon'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='w-[20%] py-[70px] pl-[30px] overflow-y-auto h-[100vh] bg-[#000]'>
        <NavbarItem extraStyle={"mb-[20px]"} Icon={<HomeIcon/>} title={'Home'} path={PATH.home}/>
        <NavbarItem extraStyle={"mb-[20px]"} Icon={<SearchIcon/>} title={'Search'} path={PATH.search}/>
        <NavbarItem extraStyle={"!opacity-[0.6] mb-[49px]"} Icon={<LbIcon/>} title={'Your Library'} path={"#"}/>
        <NavbarItem extraStyle={"!opacity-[0.6] mb-[20px]"} Icon={<PlayList/>} title={'Create Playlist'} path={"#"}/>
        <NavbarItem extraStyle={"opacity-[1]"} Icon={<LikeIcon/>} title={'Liked Songs'} path={PATH.like}/>
    </div>
  )
}

export default Navbar