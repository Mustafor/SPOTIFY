import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CLIENT_ID } from '../../hook/useEnv'
import SpotifyWebApi from 'spotify-web-api-node'
import { Context } from '../../Context/Context'
import NavigateBtn from '../../components/NavigateBtn'
import { BottomIcon, LikeSingle, MoreIcon, SingleLike, SingleSearch, StartIcon, Upload } from '../../assets/images/icon'

function Single() {
  const [singleMusic, setSingleMusic] = useState({})
  const { id } = useParams()
  const { accessToken, setPlay, setPlaying } = useContext(Context)
  const [artistsMusic, setArtistsMusic] = useState([])

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID
  })

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (accessToken && id) {
      spotifyApi.getAlbum(id).then((res) => {
        setSingleMusic(res.body)
      })
    }
  }, [accessToken, id])

  useEffect(() => {
    if (accessToken && singleMusic.name) {
      spotifyApi.searchTracks(singleMusic?.artists[0]?.name).then(res => {
        setArtistsMusic(res.body.tracks.items.map(item => {
          const data = {
            id: item.id,
            img: item.album.images[0].url,
            name: item.name,
            artistName: item.artists[0].name,
            date: item.album.release_date,
            uri: item.uri
          }
          return data
        }))
      })
    }
  }, [accessToken, singleMusic])

  function handlePlayMusic(uri) {
    setPlay(uri)
    setPlaying(true)
  }

  const albumImage = singleMusic.images && singleMusic.images[0] ? singleMusic.images[0].url : ""
  const artistName = singleMusic.artists && singleMusic.artists[0] ? singleMusic.artists[0].name : ""
  const releaseDate = singleMusic.release_date || ""

  return (
    <div className='single-music h-auto'>
      <NavigateBtn bg="bg-[#DDf628]" />      
      <div className='flex space-x-[32px] px-[40px] py-[26px] mb-[21px]'>
        {albumImage ? (
          <img className='w-[287px] h-[287px]' src={albumImage} alt="Album Art" width={287} height={287} />
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <p className='text-[18px] text-white uppercase font-bold'>{singleMusic.label}</p>
          <h2 className='text-[70px] leading-[70px] mb-[12px] text-white font-bold'>{singleMusic.name}</h2>
          <p className='text-[20px] text-white font-bold mb-5'>{artistName}</p>
          <p className='text-white font-semibold text-[18px]'>{releaseDate}</p>
        </div>
      </div>

      <div className='flex items-center px-[41px] justify-between'>
        <div className='flex items-center space-x-[25px]'>
          <button className='flex items-center justify-center w-[72px] h-[72px] bg-[#65D36E] rounded-full'>
            <StartIcon />
          </button>
          <button>
            <SingleLike />
          </button>
          <button>
            <Upload />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
        <div className='flex text-white items-center space-x-[45px]'>
          <button>
            <SingleSearch />
          </button>
          <div className='flex items-center space-x-[14px]'>
            <strong className='text-white font-normal text-[18px] '>Custom Order</strong>
            <button>
              <BottomIcon />
            </button>
          </div>
        </div>
      </div>

      <div className='px-[41px]'>
        <table className='w-full mt-[30px]'>
          <thead>
            <tr>
              <th className='py-[14px] border-b-[1px] border-[#666666] text-[#666666] text-[15px]'>#</th>
              <th className='py-[14px] text-start pl-5 border-b-[1px] border-[#666666] text-[#666666] text-[15px]'>TITLE</th>
              <th className='py-[14px] text-start border-b-[1px] border-[#666666] text-[#666666] text-[15px]'>ALBUM</th>
              <th className='py-[14px] text-start border-b-[1px] border-[#666666] text-[#666666] w-[15%] text-[15px]'>DATE ADDED</th>
              <th className='py-[14px] pr-3 text-end border-b-[1px] border-[#666666] text-[#666666] text-[15px]'>TIME</th>
            </tr>
          </thead>
          <tbody>
            {artistsMusic.map((item, index) => {
              return (
                <tr key={item.id} onClick={() => handlePlayMusic(item.uri)} className='cursor-pointer hover:bg-[#000020] hover:scale-[1.05] duration-300 even:bg-[#0000006c]'>
                  <td className='py-[10px] pl-3 rounded-l-md text-[18px] cursor-pointer text-white'>{index + 1}</td>
                  <td className='py-[10px] pl-5'>
                    <div className='flex items-center space-x-[21px]'>
                      <img className='w-[52px] h-[52px]' src={item.img} alt="Track Img" width={52} height={52} />
                      <div>
                        <h2 className='font-semibold line-clamp-1 text-[20px] mb-[2px] text-white'>{item.name}</h2>
                        <p className='font-bold text-[#B3B3B3] text-[18px]'>{item.artistName}</p>
                      </div>
                    </div>
                  </td>
                  <td className='py-[10px] text-[15px] text-white'>{item.name}</td>
                  <td className='py-[10px] text-[15px] text-white'>{item.date}</td>
                  <td className='py-[10px] pr-3 rounded-r-md text-[20px] text-white'>
                    <div className='flex items-center justify-end space-x-[20px]'>
                      <LikeSingle />
                      <span>3:13</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Single
