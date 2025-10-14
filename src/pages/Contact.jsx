import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="h-auto border border-green-700">

    <div className='text-center m-6 space-y-4'>
      <h1 className='font-playfair text-4xl md:text-7xl text-secondary'>
        Contact Us
      </h1>
      <p className='text-[#495460]'>
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>
    </div>

    <div className='border h-auto'>
    <div className="flex justify-center items-center">
              <form className="rounded-2xl bg-[#F9F9F7] flex flex-col space-x-4 space-y-4  px-8 py-10">
                 
                  <div className='flex justify-between'>
                  <label htmlFor="Name">Name</label>
                  <label className='hidden lg:block' htmlFor="Name">Email</label>
                  </div>

                <div className="md:flex space-x-4 space-y-4">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter your name"
                    className="border border-gray-400 px-8 py-4 rounded-sm md:w-[60%] w-full"
                  />
                

                
                <label className='hidden lg:hidden' htmlFor="Name">Email</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter your Email"
                    className="border border-gray-400 px-8 py-4 rounded-sm md:w-[60%] w-full"
                  />
                  
                </div>
    
                
                <div className='w-full'>

                  <label htmlFor="Phone">Subject</label>
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Write a subject"
                    className="border px-8 py-4 border-gray-400 rounded-sm w-full"
                  />
                </div>
                
    
                <label className="py-4" htmlFor="member">Message</label>
                <input
                  type="text"
                  name="member"
                  placeholder="Write your message"
                  className="border px-8 py-4 w-full h-28 border-gray-400 rounded-sm"
                />
    
                <button
                  type="submit"
                  className="my-4 cursor-pointer hover:bg-[#972730] transition-all ease-in-out duration-300 active:scale-90 w-full bg-red-primary text-white py-4 px-4 rounded-3xl"
                >
                  Send
                </button>
              </form>
            </div>
    </div>

    </section>
    </>
  )
}

export default Contact
