import React from 'react'

const ErrorPage = () => {
  return (
    <div className='m-20 h-[70vh] flex justify-center items-center flex-col text-center space-y-4'>
      <h1 className='text-3xl md:text-7xl font-dmsans text-red-primary'>
        404 Sorry Page Not Found
      </h1>
      <p className='text-gray-500 text-lg md:text-2xl'>
        Please check Your internet connection & Refresh the page!
      </p>
    </div>
  )
}

export default ErrorPage
