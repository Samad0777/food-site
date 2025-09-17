import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import MobileNav from './MobileNav';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className='hidden md:flex items-center justify-around text-primary'>

        <div className="logo flex items-center">
            <img src={logo} alt="logo" /> 
            <h2 className='font-semibold text-4xl px-2'>
                Bistro Bliss
            </h2>
        </div>

        <ul className='flex lg:space-x-6 font-dmsans'>

            <Link to="/">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Home
              </li>
            </Link>

            <Link to="/about">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              About
              </li>
            </Link>

            <Link to="/menu">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Menu
              </li>
            </Link>

            <Link to="/pages">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Pages
              </li>
            </Link>

            <Link to="/contact">
            <li className='cursor-pointer hover:bg-[#DBDFD0] rounded-2xl px-4 py-1'>
              Contact
              </li>
            </Link>

        </ul>

        <button className='text-sm font-bold border rounded-3xl xl:px-4  px-2 py-2 cursor-pointer
        transition-all duration-300 ease-in-out hover:bg-primary hover:text-white'>
            Book A Table
            </button>

    </nav>

    {/* mobile navbar  */}

   

    <nav className='relative  md:hidden flex justify-between items-center border px-2 py-1.5'>


    <div className="logo flex items-center">
            <img className='h-7'
             src={logo} alt="logo" /> 
            <h2 className='font-semibold text-2xl px-2 text-primary'>
                Bistro Bliss
            </h2>
        </div>

      <div>
        <button onClick={()=>{
          setOpen(!open);
          console.log(open);
          
        }}>
          <div className='text-2xl'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
     strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </div>
    </button>
    </div>

        <MobileNav open={open} />
    </nav>
    

    

    </>
  )
}

export default Navbar
