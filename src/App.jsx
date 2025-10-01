import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import BookTable from './pages/BookTable'


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
    <Route path='/booktable' element={<BookTable/>} />
    <Route path='/menu/all' element={<Menu/>} />
    <Route path='/menu/breakfast' element={<Menu/>} />
    <Route path='/menu/maindishes' element={<Menu/>} />
    <Route path='/menu/drinks' element={<Menu/>} />
    <Route path='/menu/desserts' element={<Menu/>} />
  </Routes>
  <div >
  </div>
  <Footer/>
  </>
  )
}

export default App
