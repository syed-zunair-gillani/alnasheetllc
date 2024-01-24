import React from 'react'

function block() {
  return (
    <main className='container px-4 mx-auto'>
      <div className='lg:mt-20 mt-8 text-center'>
        <h2 className='lg:text-[42px] md:text-[32px]  font-[600] text-blue-950'><span className='px-4 py-2 text-white bg-blue-950 '>What</span> We Do</h2>
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

      <div className='lg:px-20'>
        <h2 className='lg:text-[42px] md:text-[32px] mt-12 mb-8 font-[600] text-blue-950'><span className='px-4 py-2 text-white bg-blue-950 '>Our Expert</span> and Experienced Chartered Accountants in Dubai</h2>
        <p>We use this experience and expertise to provide customized solutions that help our clients achieve their goals and reach their full potential. Our customized solutions are according to the needs of our clients and support them in reaching their goals.</p>
        <p className='py-4'>As one of the leading accounting firms in Dubai and chartered accountants in Dubai, we are committed to providing exceptional service at a fair price. Our customer-centric approach and transparent pricing structure make us an ideal choice for businesses of all sizes. Additionally, our expertise in services includes:</p>
        <dir className=''>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Audit and assurance</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Accounting and bookkeeping</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>VAT-related services</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Management consultancy</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Cloud accounting</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Feasibility Report</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Liquidation of company</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Patent and Trademarks Registration</h1>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-black rounded-full"></div>
            <h1>Accounting Software Solutions</h1>
          </div>
        </dir>
        <div>
          <p className='py-4'>We believe that accounting and bookkeeping should be straightforward, efficient, and cost-effective. That’s why we are dedicated to providing our clients with the highest level of service and support.</p>
          <p>In conclusion, if you’re looking for a partner to help you grow, expand, and achieve profitability, look no further than Al Nasheet LLC. With our expertise and commitment to excellence, we are the best choice for accounting and bookkeeping services in Dubai and the UAE. So why wait? Get in touch with us today to discover how we can support the growth of your business.</p>
        </div>
      </div>

    </main>
  )
}

export default block