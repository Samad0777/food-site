import React from 'react'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from "motion/react"
import { div } from 'motion/react-client'

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
            <div onClick={() => setOpen(false) }
            className='text-xl font-semibold uppercase bg-primary text-white py-10 my-6 rounded-3xl'
            >
                <ul  className='flex flex-col justify-center items-center gap-10 font-dmsans'>
                            <Link to="/" onClick={()=>setOpen(false)}>
                            <li className='cursor-pointer'>Home</li>
                            </Link>
                
                            <Link to="/about" onClick={()=>setOpen(false)}>
                            <li className='cursor-pointer'>About</li>
                            </Link>
                
                            <Link to="/menu" onClick={()=>setOpen(false)}>
                            <li className='cursor-pointer'>Menu</li>
                            </Link>
                
                            <Link to="/pages" onClick={()=>setOpen(false)}>
                            <li className='cursor-pointer'>Blogs</li>
                            </Link>
                
                            <Link to="/contact" onClick={()=>setOpen(false)}>
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
