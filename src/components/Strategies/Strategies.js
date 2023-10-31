import React from 'react'
import CountUp from 'react-countup';

function Strategies() { 
  
  return (
    <main className="bg-cover bg-center h-auto w-full" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/pexels.jpg')` }}>
    <div className='container mx-auto px-4 py-20 mt-10'>
      <div className='flex lg:w-[130vh] w-full gap-3 '>
        <div className='border-l-2 border-yellow-600 border'></div>
        <h2 className='text-[48px] lg:text-[48px] md:text-[36px] font-[700] text-white'>
          Building <span className='bg-blue-950 lg:px-2 py-1 text-white'>Strategies</span> for Your Financial Future
        </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 text-center justify-center items-center mt-10 text-white lg:gap-10'>
        <div className='mb-5 lg:mb-0'>
          <h3 className='text-[40px] lg:text-[40px] md:text-[32px] font-[700] text-yellow-400'><CountUp end={95} />%</h3>
          <p className='text-[20px] lg:text-[20px] md:text-[16px] font-[600]'>Satisfied Clients</p>
        </div>
        <div className='mb-5 lg:mb-0'>
          <h3 className='text-[40px] lg:text-[40px] md:text-[32px] font-[700] text-yellow-400'>20+</h3>
          <p className='text-[20px] lg:text-[20px] md:text-[16px] font-[600]'>Years of Experiences</p>
        </div>
        <div className='mb-5 lg:mb-0'>
          <h3 className='text-[40px] lg:text-[40px] md:text-[32px] font-[700] text-yellow-400'>4,288+</h3>
          <p className='text-[20px] lg:text-[20px] md:text-[16px] font-[600]'>Audits Completed</p>
        </div>
        <div>
          <h3 className='text-[40px] lg:text-[40px] md:text-[32px] font-[700] text-yellow-400'>25+</h3>
          <p className='text-[20px] lg:text-[20px] md:text-[16px] font-[600]'>Dedicated Team</p>
        </div>
      </div>
    </div>
  </main>
  

  )
}

export default Strategies