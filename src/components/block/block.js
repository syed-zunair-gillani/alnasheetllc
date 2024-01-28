import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Block() {
  return (
    <main className='container px-4 md:pb-10 mx-auto'>
      <div className='lg:mt-14 mt-8 '>
        <h2 className='lg:text-[42px] text-[32px] font-[600] text-blue-950'><span className='px-4 py-2 text-white bg-blue-950 '>What</span> We Do</h2>
      </div>
      <div className='grid gap-8 lg:grid-cols-2 lg:mt-8 mt-3  mx-auto justify-center'>
        <div className='text-[16px] mt-3'>
          <p>Al Nasheet Chartered Accountants in Dubai is a highly regarded and renowned firm based in UAE, specializing in providing a range of accounting and financial consultancy services in Dubai and throughout the UAE. Our reputation is built on our commitment to excellence, professionalism, efficiency, and cost-effectiveness. Our team consists of certified chartered accountants with extensive industry experience.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-1 gap-6'>
            <div className=''>
              <h6 className='font-semibold text-xl pt-4 mb-3'>Our Vision</h6>
              <ul>
                {
                  [1, 2, 3, 4].map((item, idx) => (
                    <li key={idx} className='mt-2 flex gap-1 items-center'>
                      <IoIosArrowForward className='text-[#C6A02E] text-xl ' />
                      <p>Cloud Accounting</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h6 className='font-semibold text-xl pt-4 mb-3'>Our Mission</h6>
              <ul>
                {
                  [1, 2, 3, 4].map((item, idx) => (
                    <li key={idx} className='mt-2 flex gap-1 items-center'>
                      <IoIosArrowForward className='text-[#C6A02E] text-xl ' />
                      <p>Cloud Accounting</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img src="/pic.webp" alt="" className='h-96 w-full' />
        </div>

      </div>

    </main>
  )
}

export default Block