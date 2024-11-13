import React from 'react'
import { CLIENT_ID } from '../../hook/useEnv'

function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`

  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-login'>
        <a className='w-[180px] hover:scale-[1.5] duration-300 p-2 rounded-md bg-green-500 text-center text-white font-semibold' href={AUTH_URL}>Login To Spotify</a>
    </div>
  )
}

export default Login