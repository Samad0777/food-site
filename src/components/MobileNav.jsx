import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "motion/react" 

const MobileNav = ({ open, setOpen }) => {
  const closeMenu = () => setOpen(false);

  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -40 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className='absolute top-20 left-0 w-full h-screen z-20'
        >
          
          <div
            className="fixed inset-0"
            onClick={closeMenu}
            aria-hidden="true"
          />

          
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative mx-auto max-w-md text-xl font-semibold uppercase bg-primary text-white py-10 my-6 rounded-3xl'
          >
            <ul className='flex flex-col justify-center items-center gap-10 font-dmsans'>
              <li><Link to="/" onClick={closeMenu} className='cursor-pointer'>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu} className='cursor-pointer'>About</Link></li>
              <li><Link to="/menu" onClick={closeMenu} className='cursor-pointer'>Menu</Link></li>
              <li><Link to="/blogs" onClick={closeMenu} className='cursor-pointer'>Blogs</Link></li>
              <li><Link to="/contact" onClick={closeMenu} className='cursor-pointer'>Contact</Link></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
