import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/iu/Footer'
import NavBar from '../components/iu/NavBar'
import Register from '../components/login/Register'
import Login from '../components/login/Login'
import MapView from '../mps/MapWiew'

export default function MainRouter() {
  return (
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/register' element={<Register/>}   />
        <Route path='/login' element={<Login/>}   />
      </Routes>
      <MapView/>
      <Footer/>
      <Footer year={new Date().getFullYear()}/>
    
    </BrowserRouter>
  
  )
}
