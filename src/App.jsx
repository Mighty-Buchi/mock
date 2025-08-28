import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login/Login'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import MainPage from './Pages/MainPage/MainPage'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/user/details/:userid' element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
