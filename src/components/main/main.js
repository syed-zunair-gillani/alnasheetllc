import React from 'react'
import Image from 'next/image'
function Main() {

  return (
    <main className='md:-mt-[60px]'>
      <div className="bg-cover bg-center md:mt-8 py-20 w-full flex flex-col justify-center items-center h-[80vh]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/main.jpg')` }}>
        <div className='container mx-auto px-4 text-white'>
          <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 '><span className=' text-[#C6A02E] py-2 px-3 bg-blue-950 leading-relaxed  '>Accounting</span> & <br />  Bookkeeping</h1>
          <p className='text-base md:text-lg lg:text-lg xl:text-xl mb-6 max-w-[600px] w-full'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eveniet suscipit vero, recusandae deserunt atque quam rerum labore? atque quam rerum labore?
          </p>
          <button className='px-10 hover:scale-105 rounded-md ease-linear py-4 bg-[#C6A02E] hover:bg-blue-950 text-white focus:outline-none transition duration-300 text-[16px]'>
            Read More
          </button>
        </div>
      </div>
    </main>

  )
}

export default Main
