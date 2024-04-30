import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import {  Navbar } from './components'
import { Home } from './pages'
import Experience from './pages/Experience'


function App() {

  return (
    <>
   
  <BrowserRouter> 
  <div className='dark:bg-bg-slate-900'>
    <Navbar/>
    <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/experience'} element={<Experience/>}/>
  </Routes>
  </div> 
    
     
  </BrowserRouter> 
       
    </>
  )
}

export default App
