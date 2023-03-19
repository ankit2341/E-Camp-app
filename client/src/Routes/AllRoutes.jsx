import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Blogs from '../Pages/Blogs'
import Events from '../Pages/Events'
import Explore from '../Pages/Explore'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default AllRoutes