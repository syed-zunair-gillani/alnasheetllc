import React from 'react'

const ScopeOfWork = ({data}:any) => {
  return (
    <section className='container mx-auto px-4 items-center py-10 pt-8'>
          <h2 className=" text-4xl text-center mb-14 tracking-tight font-bold text-gray-900 ">{data?.title}</h2>
          <div className='grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 '>
          {
               data?.scope?.map((item:any,idx:number)=>(
                    <div key={idx} className={`border-[2px] relative border-[#C39F2B] rounded-xl text-gray-700 p-10 text-center ${item.title && 'pl-14 !text-left'}`}>
                         <h3 className='font-semibold text-xl text-[#001D49]'>{item.title}</h3>
                         <p>{item.info}</p>
                         <span className='absolute font-semibold text-5xl text-gray-200 top-3 left-3'>{idx+1}</span>
                    </div>
               ))
          }
          </div>
    </section>
  )
}

export default ScopeOfWork
