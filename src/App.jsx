import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login/Login'
import DetailsPage from './components/DetailsPage/DetailsPage'
import MainPage from './components/MainPage/MainPage'
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
