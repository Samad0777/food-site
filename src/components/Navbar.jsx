import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import MobileNav from './MobileNav';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className='hidden md:flex items-center justify-around text-primary'>

        <NavLink to="/" className="logo flex items-center cursor-pointer">
            <img src={logo} alt="logo" /> 
            <h2 className='font-semibold text-4xl px-2'>
                Bistro Bliss
            </h2>
        </NavLink>

        <ul className='flex lg:space-x-6 font-dmsans'>

            <NavLink className={({isActive})=> `${isActive ? "bg-[#DBDFD0] rounded-2xl" : "bg-white" }`} to="/" >
            <li className="cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1">
              Home
              </li>
            </NavLink>

            <NavLink className={({isActive})=> `${isActive ? "bg-[#DBDFD0] rounded-2xl" : "bg-white" }`} to="/about">
            <li className="cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1">
              About
              </li>
            </NavLink>

            <NavLink className={({isActive})=> `${isActive ? "bg-[#DBDFD0] rounded-2xl" : "bg-white" }`} to="/menu">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Menu
              </li>
            </NavLink>

            <NavLink className={({isActive})=> `${isActive ? "bg-[#DBDFD0] rounded-2xl" : "bg-white" }`} to="/blogs">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Blogs
              </li>
            </NavLink>

            <NavLink className={({isActive})=> `${isActive ? "bg-[#DBDFD0] rounded-2xl" : "bg-white" }`} to="/contact">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Contact
              </li>
            </NavLink>

        </ul>

       <NavLink to='/booktable'>
        <button className='active:scale-95 text-sm font-bold border rounded-3xl xl:px-4  px-2 py-2 cursor-pointer
        transition-all duration-300 ease-in-out hover:bg-primary hover:text-white'>
            Book A Table
            </button>
       </NavLink>

    </nav>

    {/* mobile navbar  */}

   

    <nav className='relative  md:hidden flex justify-between items-center border px-2 py-4'>


    <NavLink to='/' className="logo flex items-center">
            <img className='h-7'
             src={logo} alt="logo" /> 
            <h2 className='font-semibold text-2xl px-2 text-primary'>
                Bistro Bliss
            </h2>
        </NavLink>

      <div>
        <button onClick={()=>{
          setOpen(!open);
          
        }}>
          <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
     strokeWidth="1.5" stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </div>
    </button>
    </div>

        <MobileNav open={open} setOpen={setOpen}/>
    </nav>
    

    

    </>
  )
}

export default Navbar
