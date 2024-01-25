import React from 'react'

function Block() {
  return (
    <main className='container px-4 mx-auto'>
      <div className='lg:mt-12 mt-8 text-center'>
        <h2 className='lg:text-[42px] text-[32px] font-[600] text-blue-950'><span className='px-4 py-2 text-white bg-blue-950 '>What</span> We Do</h2>
      </div>
      <div className='grid gap-8 lg:grid-cols-2 lg:mt-14 mt-3 lg:px-20 mx-auto justify-center'>
        <div className='text-[16px] mt-3'>
          <p>Al Nasheet Chartered Accountants in Dubai is a highly regarded and renowned firm based in UAE, specializing in providing a range of accounting and financial consultancy services in Dubai and throughout the UAE. Our reputation is built on our commitment to excellence, professionalism, efficiency, and cost-effectiveness. Our team consists of certified chartered accountants with extensive industry experience, and we are dedicated to providing our clients with the highest level of service and support. Our services, include Audit Services in Dubai, Accounting and Bookkeeping services in Dubai, VAT Registration in Dubai, Management Consultancy, Cloud Accounting, and more.
            <br /><br />
            We have built a reputation for providing exceptional service and delivering results for our clients. Our team has extensive experience working with some of the world’s top companies and has a deep understanding of the accounting and bookkeeping landscape in Dubai and the UAE. </p>
        </div>
        <div>
          <img src="/pic.webp" alt="" className='h-96 w-full' />
        </div>

      </div>

    </main>
  )
}

export default Block