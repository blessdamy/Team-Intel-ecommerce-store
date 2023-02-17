import React from 'react'

const Form = () => {
  return (
    <div className='grid grid-cols-1 sm:grid=cols-2 h-screen w-full'>
      <div className='bg-white flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-[rgba(222,219,219,0.4)] p-8 px-8 rounded-lg' action="">
          <h2 className='text-1xl text-[#0D7D47] font-Inter font-semibold text-center'>How can we help you?</h2>
          <div className='flex flex-col font-Inter text-[#000000] py-2'>
            <label htmlFor="Email">Email</label>
            <input className='rounded-lg bg-[#D9D9D9] mt-2 pt-2' type="email" />
          </div>
          <div className='flex flex-col font-Inter text-[#000000] py-2'>
            <label htmlFor="Title">Title</label>
            <input className='rounded-lg bg-[#D9D9D9] mt-2 pt-2' type="text" />
          </div>
          <div className='flex flex-col font-Inter text-[#000000] py-2'>
            <label htmlFor="Message">Message</label>
            <textarea className='rounded-lg bg-[#D9D9D9] mt-2 pt-2' cols="30" rows="10"></textarea>
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