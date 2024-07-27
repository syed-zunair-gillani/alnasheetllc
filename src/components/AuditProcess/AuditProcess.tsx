import Image from 'next/image'
import React from 'react'

const AuditProcess = ({data, background, title}:any) => {
  return (
    <section className={`${background && 'bg-gray-50'}`}>
        <div className='container mx-auto px-4 py-20'>
            <div>
                <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]">{title}</h2>
            </div>
            <div className='flex flex-wrap gap-6'>
            {
                data?.map((item:any, idx:number)=>(
                    <div key={idx} className={`bg-white flex flex-col h-52 gap-2 w-52 justify-center items-center rounded-full border-[#C39F2B] border`}>
                        <Image src={item.icon?.url} alt={item.title} width={55} height={55}/>
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