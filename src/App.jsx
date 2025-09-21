import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='/pages' element={<Pages/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  <div >
  </div>
  <Footer/>
  </>
  )
}

export default App
