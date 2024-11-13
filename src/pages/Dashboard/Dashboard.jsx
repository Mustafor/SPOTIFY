import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import useAuth from '../../hook/useAuth'
import CustomRoutes from '../../routes'
import Navbar from '../../components/Navbar'
import SiteBar from '../../components/SiteBar'

function Dashboard({code}) {
  const getCode = useAuth(code)
  const {accessToken} = useContext(Context)

  return (
    <div className='flex justify-between'>
      <Navbar/>
      <div className='w-[60%] h-[100vh] overflow-y-auto'>
      <CustomRoutes/>
      </div>
      <SiteBar/>
    </div>
  )
}

export default Dashboard