import React from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddClub from './pages/AddClub'
import Clubs from './pages/Clubs/Clubs'
import Club from './pages/Club/Club'
import EditClub from './pages/EditClub'
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import {sortClubsByAvgYards} from './helpers'

import axios from 'axios'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/clubs' element={<Layout />}>
          <Route index element={<Clubs />} />
          <Route path=':id' element={<Club />} />
          <Route path='add' element={<AddClub />} />
          <Route path=':id/edit' element={<EditClub />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
