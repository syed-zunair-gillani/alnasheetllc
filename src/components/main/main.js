import React from 'react'
import Image from 'next/image'
function main() {

  return (
    <main className='md:-mt-[60px]'>
      <div className="bg-cover bg-center md:mt-8 py-20 w-full flex flex-col justify-center items-center h-[80vh]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/main.jpg')` }}>
        <div className='px-4 container mx-auto text-white'>
          <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 '><span className=' bg-blue-950 py-1 px-3  leading-relaxed  '>Accounting</span> & <br />  Bookkeeping</h1>
          <p className='text-base md:text-lg lg:text-lg xl:text-xl mb-6 sm:w-[80vh] lg:w-[85vh] w-full'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eveniet suscipit vero, recusandae deserunt atque quam rerum labore? atque quam rerum labore?
          </p>
          <button className='px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded focus:outline-none transition duration-300 text-[16px]'>
            Read More
          </button>
        </div>
      </div>
    </main>
  )
}

export default main
