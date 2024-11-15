import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router'

function MusicCard({item}) {
  const navigate = useNavigate()
  const {setPlay, setPlaying} = useContext(Context)

  function handlePlayMusic() {
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }

  return (
    <div onClick={handlePlayMusic} className='min-w-[224px] cursor-pointer hover:scale-[1.05] duration-300 p-5 rounded-md music-card-item'>
      <img className='h-[182px] mb-[25px]' src={item.albumImg} alt="Img" width={"100%"} height={182}/>
      <h2 className='text-[20px] font-bold text-white'>{item.albumsName}</h2>
      <p className='text-[18px] font-semibold text-[#B3B3B3 ]'>{item.albumArtistName}</p>
    </div>
  )
}

export default MusicCard