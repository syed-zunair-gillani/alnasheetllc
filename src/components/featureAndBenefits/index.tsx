import Image from 'next/image'
import React from 'react'

const FeatureAndBenefits = ({data, background}:any) => {
  return (
    <section className={` my-16 pb-12 ${background && 'bg-gray-100'}`}>
    <div className='container mx-auto px-4 items-center pt-16'>
          <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554] ">{data?.benefits_title ? data?.benefits_title : 'Features and Benefits'} </h2>
          
          <div className='mt-20'>
          {
               data?.benefit?.map((item:any,idx:number)=>(
                    <div key={idx} className='grid grid-cols-1 gap-8 md:grid-cols-2 mb-12 items-center'>
                         <div className='flex items-center md:items-end relative'>
                              <figure className='border-[2px] border-[#C6A02E] p-5 rounded-full bg-white absolute z-10'>
                                   <Image src={item.icon?.url} alt={item?.icon?.alt || item.title} width={40} height={40}/>
                              </figure>
                              <div className='bg-[#001D49] text-white p-5 w-full clippath pl-20 font-medium  ml-5 pr-12 rounded-tl-3xl rounded-bl-3xl'>{item.title}</div>
                         </div>
                         <div>
                              <p className='text-center md:text-left'>{item.info}</p>
                         </div>
                    </div>
               ))
          }
          </div>
    </div>
    </section>
  )
}

export default FeatureAndBenefits
