import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import { Header, Navbar } from './components'
import { Home } from './pages'


function App() {

  return (
    <>
   
  <BrowserRouter> 
  <div>
    <Navbar/>
    <Header/>    
    <Routes>
    <Route path={'/'} element={<Home/>}/>
  </Routes>
  </div> 
    
     
  </BrowserRouter> 
       
    </>
  )
}

export default App
