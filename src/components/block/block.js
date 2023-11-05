import Image from 'next/image'
import React from 'react'

function block() {
  return (
    <>
    <section className='container px-4 mx-auto'>
    <div className='my-12'>
            <h2 className='lg:text-[42px] text-[32px] text-center font-[600] text-blue-950'><span className='px-2 py-2  bg-blue-950 text-[#C6A02E]'>What</span> We Do</h2>
          </div>
      <div className='grid gap-5 lg:grid-cols-2 mx-auto justify-center'>
        <div className='lg:text-[18px] mt-3 text-justify'>
          <p>Al Nasheet Chartered Accountants in Dubai is a highly regarded and renowned firm based in UAE, specializing in providing a range of accounting and financial consultancy services in Dubai and throughout the UAE. Our reputation is built on our commitment to excellence, professionalism, efficiency, and cost-effectiveness. Our team consists of certified chartered accountants with extensive industry experience, and we are dedicated to providing our clients with the highest level of service and support. Our services, include Audit Services in Dubai, Accounting and Bookkeeping services in Dubai, VAT Registration in Dubai, Management Consultancy, Cloud Accounting, and more.
            <br /><br />
            We have built a reputation for providing exceptional service and delivering results for our clients. Our team has extensive experience working with some of the world’s top companies and has a deep understanding of the accounting and bookkeeping landscape in Dubai and the UAE. </p>
        </div>
        <div>
          <img src="/pic.webp" alt="" className='h-[95%] w-full' />
        </div>
      </div>
    </section>
    <section className='bg-gray-100'>
       <div className='container px-4 mx-auto'>
        <h2 className='lg:text-[42px] pt-10 text-[32px] mt-12 mb-8 font-[600] text-blue-950 text-center'><span className='px-2 py-2  bg-blue-950 text-[#C6A02E]'>Our</span> Expertise</h2>
        <p>We use this experience and expertise to provide customized solutions that help our clients achieve their goals and reach their full potential. Our customized solutions are according to the needs of our clients and support them in reaching their goals.</p>
        <p className='py-4'>As one of the leading accounting firms in Dubai and chartered accountants in Dubai, we are committed to providing exceptional service at a fair price. Our customer-centric approach and transparent pricing structure make us an ideal choice for businesses of all sizes. Additionally, our expertise in services includes:</p>
        <ul className='grid grid-cols-3 md:grid-cols-4 my-4 gap-4'>
          {
            services.map((item, idx) => (
              <li key={idx} className='border flex flex-col items-center gap-2 p-3 hover:border-[#C6A02E]'>
                <Image src={item.icon} alt={item.name} width={100} height={100} className='rounded-full' />
                <span className='text-center'>{item.name}</span>
              </li>
            ))
          }
        </ul>
        <div className='pb-10'>
          <p className='py-4'>We believe that accounting and bookkeeping should be straightforward, efficient, and cost-effective. That’s why we are dedicated to providing our clients with the highest level of service and support.</p>
          <p>In conclusion, if you’re looking for a partner to help you grow, expand, and achieve profitability, look no further than Al Nasheet LLC. With our expertise and commitment to excellence, we are the best choice for accounting and bookkeeping services in Dubai and the UAE. So why wait? Get in touch with us today to discover how we can support the growth of your business.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default block




const services = [
  {
    name: "Audit and assurance",
    icon: "/images/Audit_and_assurance.png"
  },
  {
    name: "VAT-related services",
    icon: "/images/Vat.png"
  },
  {
    name: "Management consultancy",
    icon: "/images/Management_consultancy.png"
  },
  {
    name: "Cloud accounting",
    icon: "/images/Cloud_Accoutning.png"
  },
  {
    name: "Feasibility Report",
    icon: "/images/Feasibility_Report.png"
  },
  {
    name: "Liquidation of company",
    icon: "/images/Liquidation_of_Company.png"
  },
  {
    name: "Patent and Trademarks Registration",
    icon: "/images/Patent_and_Trademarks_Registration.png"
  },
  {
    name: "Accounting Software Solutions",
    icon: "/images/Accounting_Software_Solutions.png"
  }
]