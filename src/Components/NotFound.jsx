import React from 'react'
import logo from '../Assets/logo.svg'

const NotFound = () => {
  return (
    <div className='h-screen w-full'>
      <div className='bg-white flex justify-center'>
      <img src={logo} alt="logo" />
      </div>
    <div>
      <h1 className='font-Inter font-bold text-2xl text-[#000000] m-4'>404</h1>
      <p className='font-Inter font-semibold text-[#000000]'>Page Not Found!</p>
    </div>
    </div>

  )
}

export default NotFound