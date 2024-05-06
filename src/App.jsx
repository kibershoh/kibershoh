import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import {  Navbar } from './components'
import { Home } from './pages'
import Experience from './pages/Experience'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import Skills from './pages/Skills'


function App() {
  return (
    <>
   
  <BrowserRouter> 
  <div className="">
    <Navbar/>
    <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/experience'} element={<Experience/>}/>
    <Route path={'/skills'} element={<Skills/>}/>
  </Routes>
  </div> 
    
     
  </BrowserRouter> 
       
    </>
  )
}

export default App
