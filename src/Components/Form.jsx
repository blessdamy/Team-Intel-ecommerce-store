import React from 'react'

const Form = () => {
  return (
    <div className='grid grid-cols-1 sm:grid=cols-2 h-screen w-full'>
      <div className='bg-white flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-[rgba(222,219,219,0.4)] p-8 px-8 rounded-lg' action="">
          <h2 className='text-1xl text-[#0D7D47] font-Inter font-semibold text-center m-2'>How can we help you?</h2>
          <div className='flex font-Inter text-[#000000] py-2 mb-4'>
            <label className='block text-black-400 font-bold mb-1' htmlFor='Email'>Email</label>
            <input className='appearance-none w-full leading-tight py-2 px-4 rounded-lg bg-[#D9D9D9]' type="email" />
          </div>
          <div className='flex font-Inter text-[#000000] py-2 w-full mb-4'>
          <label className='block text-black-400 font-bold mb-1' htmlFor='Title'>Title</label>
            <input className='appearance-none w-full leading-tight py-2 px-4 rounded-lg bg-[#D9D9D9]' type="text" />
          </div>
          <div className='flex font-Inter text-[#000000] py-2 w-full mb-4'>
            <label className='block text-black-400 font-bold mb-1' htmlFor="Message">Message</label>
            <textarea className='appearance-none w-full leading-tight py-2 px-4 rounded-lg bg-[#D9D9D9]' cols="30" rows="10"></textarea>
          </div>
          <div>
            <button className='w-full my-5 py-2 bg-[#DEDBDB] shadow-lg text-[#0D7D47] font-Inter font-semibold rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form