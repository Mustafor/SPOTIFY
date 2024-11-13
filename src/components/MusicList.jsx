import React, { useContext, useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node';
import { Context } from '../Context/Context';
import { CLIENT_ID } from '../hook/useEnv';
import MusicCard from './MusicCard';

function MusicList({API, title}) {
    const [albums, setAlbums] = useState([])
    const {accessToken} = useContext(Context)
    const spotifyApi = new SpotifyWebApi({
        clientId:CLIENT_ID
      })

    useEffect(() => {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])

      useEffect(() => {
        if(accessToken){
            spotifyApi.searchAlbums(API).then(res=> {
                setAlbums(res.body.albums.items.map(item => {
                    const data = {
                        id:item.id,
                        albumsName:item.name,
                        albumArtistName:item.artists[0].name,
                        albumImg:item.images[0].url,
                        uri:item.uri
                    }
                    return data
                }))
            })
        }
      }, [accessToken])

  return (
    <div className='px-10 '>
        <div className='flex items-center mb-[26px] justify-between'>
        <h2 className='font-bold text-[30px] text-white'>{title}</h2>
        <button className='text-[#ADADAD] text-[16px font-semibold]'>SEE ALL</button>
        </div>
        <div className='flex justify-between overflow-x-auto gap-[25px]'>
            {albums.map(item => <MusicCard item={item} key={item.id}/>)}
        </div>
    </div>
  )
}

export default MusicList