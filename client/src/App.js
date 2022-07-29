import React from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddClub from './pages/AddClub'
import Clubs from './pages/Clubs/Clubs'
import Club from './pages/Club/Club'
import EditClub from './pages/EditClub'
import Landing from './pages/Landing'
import Layout from './components/Layout'
// import Login from './pages/Login'
// import Register from './pages/Register'
import NotFound from './pages/NotFound'

import axios from 'axios'

const App = () => {
  const [clubData, setClubData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Call Server to get Club Data
    const getAllClubData = async () => {
      console.log('api call from app')
      try {
        const result = await axios.get(`${process.env.REACT_APP_URL}/api`)
        setClubData(result.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getAllClubData()
  }, [])
  // Url is /clubs route ui to /clubs

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/clubs' element={<Layout />}>
          <Route
            index
            element={
              <Clubs
                clubData={clubData}
                setClubData={setClubData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path=':id' element={<Club />} />
          <Route path='add' element={<AddClub setClubData={setClubData} />} />
          <Route path=':id/edit' element={<EditClub />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
        {/* <Route index element={<Login />} />
        <Route index element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
