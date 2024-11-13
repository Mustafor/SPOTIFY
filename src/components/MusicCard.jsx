import React from 'react'

function MusicCard({item}) {
  return (
    <div className='min-w-[224px] p-5 rounded-md music-card-item'>
      <img className='h-[182px] mb-[25px]' src={item.albumImg} alt="Img" width={"100%"} height={182}/>
      <h2 className='text-[20px] font-bold text-white'>{item.albumsName}</h2>
      <p className='text-[18px] font-semibold text-[#B3B3B3 ]'>{item.albumArtistName}</p>
    </div>
  )
}

export default MusicCard