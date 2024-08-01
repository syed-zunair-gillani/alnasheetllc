import React from 'react'

const OutsourceCorpoateTax = ({data}:any) => {
  console.log("🚀 ~ OutsourceCorpoateTax ~ data:", data)
  return (
    <section className='bg-gray-50 py-10 md:py-16'>
        <div className='max-w-[900px] px-3 mx-auto'>
            <h2 className='text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]'>Why Outsource Corporate TAX</h2>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:gap-x-32'>
                {
                    data?.map((item:any,idx:number)=>(
                        <div key={idx}>
                            <h5 className='text-7xl font-bold text-gray-300 pl-6'>{idx+1}</h5>
                            <h6 className='capitalize text-xl font-semibold mt-1'>{item?.title}</h6>
                            <p className='mt-3'>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OutsourceCorpoateTax