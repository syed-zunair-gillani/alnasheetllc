import Image from 'next/image'
import React from 'react'

const AuditProcess = ({data}:any) => {
  return (
    <section className='bg-gray-100 mt-16'>
        <div className='container mx-auto px-4 py-20'>
            <div>
                <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]">{data?.title}</h2>
            </div>
            <div className='flex flex-wrap gap-6'>
            {
                data?.scope?.map((item:any, idx:number)=>(
                    <div key={idx} className={`bg-white flex flex-col h-52 gap-2 w-52 justify-center items-center rounded-full border-[#C39F2B] ${idx%2 !== 0 ? 'flex-col-reverse border-t-[2px] border-r-[2px] ' : 'border-b-[2px] border-l-[2px] ' }`}>
                        <Image src={item.icon} alt={item.title} width={55} height={55}/>
                        <h4 className='text-2xl capitalize text-center'>{item.title}</h4>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default AuditProcess