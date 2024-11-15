import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import NavigateBtn from '../../components/NavigateBtn'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hook/useEnv'
import { Context } from '../../Context/Context'
import Loading from '../../assets/images/loading.gif'
import { useNavigate } from 'react-router'

const MusicList = lazy(() => new Promise((resolve) => {
  return setTimeout(() => {
    resolve(import("../../components/MusicList"))
  }, 1000);
}))

function Home() {
  const navigate = useNavigate()
  const [homeTopTrack, setHomeTopTrack] = useState([])
  const {accessToken, setPlay, setPlaying} = useContext(Context)
  const spotifyApi = new SpotifyWebApi({
    clientId:CLIENT_ID
  })

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if(accessToken){
      spotifyApi.searchAlbums("Jah Khalib").then(res => {
        setHomeTopTrack(res.body.albums.items.splice(0, 6).map(item => {
          const data = {
            id:item.id,
            trackName:item.name,
            trackImg:item.images[0].url,
            artistsName:item.artists[0].name,
            uri:item.uri
          }
          return data
        }))
      })
    }
  }, [accessToken])

  function handlePlayMusic(item){
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }

  return (
    <div className='bg-login h-auto'>
      <NavigateBtn/>
      <div className='pt-[30px] px-10 pb-[50px]'>
        <h2 className='font-bold mb-[29px] text-[30px] text-white'>Good afternoon</h2>
        <ul className='flex justify-between flex-wrap gap-[16px]'>
          {homeTopTrack.map(item => (
            <li onClick={() => handlePlayMusic(item)}  className='flex duration-300 hover:scale-[1.05] w-[49%] cursor-pointer overflow-hidden bg-item rounded-[6px] items-center space-x-[22px]' key={item.id}>
              <img className='h-[82px]' src={item.trackImg} alt="Track img" width={82} height={82}/>
              <h3 className='font-bold text-[20px] text-white'>{item.trackName}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-[50px] pb-10'>
        <Suspense fallback={<img className='mx-auto' src={Loading} alt='loading...' width={200}/>}>
        <MusicList API={"Miyagi & Эндшпиль"} title={'Miyagi & Эндшпиль'}/>
        </Suspense>
        <Suspense fallback={<img className='mx-auto' src={Loading} alt='loading...' width={200}/>}>
        <MusicList API={"Xcho"} title={'Xcho'}/>
        </Suspense>
        <Suspense fallback={<img className='mx-auto' src={Loading} alt='loading...' width={200}/>}>
        <MusicList API={"Rauf & Faik"} title={'Rauf & Faik'}/>
        </Suspense>
        <Suspense fallback={<img className='mx-auto' src={Loading} alt='loading...' width={200}/>}>
        <MusicList API={"MATRANG"} title={'MATRANG'}/>
        </Suspense>
      </div>
    </div>
  )
}

export default Home