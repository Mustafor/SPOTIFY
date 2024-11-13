import React from 'react'
import { Route, Routes } from 'react-router'
import { PATH } from '../hook/usePath'
import { Home, Search, Like, Single } from '../pages/Dashboard/index'

function CustomRoutes() {
  return (
    <Routes>
        <Route path={PATH.home} element={<Home/>}/>
        <Route path={PATH.search} element={<Search/>}/>
        <Route path={PATH.like} element={<Like/>}/>
        <Route path={PATH.single} element={<Single/>}/>
    </Routes>
  )
}

export default CustomRoutes