import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import SearchPage from './SearchPage'
import SeeMore from './SeeMore'
import Singledata from './Singledata'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Search" element={<SearchPage/>}></Route>
            <Route path='/more' element={<SeeMore/>}></Route>
            <Route path='/match/:id' element={<Singledata/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute