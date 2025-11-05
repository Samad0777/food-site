import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); 

  return (
    <div className='m-20 h-[70vh] flex justify-center items-center flex-col text-center space-y-4'>
      <h1 className='text-3xl md:text-7xl font-dmsans text-red-primary'>
        Oops! Something Went Wrong.
      </h1>
      <p className='text-gray-500 text-lg md:text-2xl'>
       We got the problem and our team will fix it shortly.
      </p>
      
      <p className='text-gray-400 text-sm'>
        <i>Error: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;