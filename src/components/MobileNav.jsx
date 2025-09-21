import React from 'react'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from "motion/react"

const MobileNav = ({open}) => {
  return (
    <>
    <AnimatePresence mode='wait'>
    {open && (
        <motion.div 
        initial={{opacity:0 , y: -100}}
        animate={{opacity:1 , y: -40}}
        exit={{opacity:0 , y: -100}}
        transition={{duration: 0.3}}
        className='absolute top-20 left-0  w-full h-screen z-20'
        >
            <div 
            className='text-xl font-semibold uppercase bg-primary text-white py-10 my-6 rounded-3xl'
            >
                <ul className='flex flex-col justify-center items-center gap-10 font-dmsans'>
                            <Link to="/">
                            <li className='cursor-pointer'>Home</li>
                            </Link>
                
                            <Link to="/about">
                            <li className='cursor-pointer'>About</li>
                            </Link>
                
                            <Link to="/menu">
                            <li className='cursor-pointer'>Menu</li>
                            </Link>
                
                            <Link to="/pages">
                            <li className='cursor-pointer'>Pages</li>
                            </Link>
                
                            <Link to="/contact">
                            <li className='cursor-pointer'>Contact</li>
                            </Link>
                
                        </ul>

            </div>

        </motion.div>
    )}
    </AnimatePresence>
    </>
  )
}

export default MobileNav
