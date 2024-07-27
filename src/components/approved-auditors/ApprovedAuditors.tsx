import Image from 'next/image'
import React from 'react'

const ApprovedAuditors = ({data}:any) => {
  console.log("🚀 ~ ApprovedAuditors ~ data:", data)

  return (
    <section className="py-20 bg-[url('/vat-uae_bg.png')] bg-cover">
        <div className='container mx-auto px-4'>
            <h2 className="text-[30px] text-center mb-3 tracking-tight font-semibold text-[#172554] ">{data?.title}</h2>
            <p className='text-center'>{data?.info}</p>
            <div className='grid grid-cols-1 gap-12 items-center md:grid-cols-2 mt-8'>
                <div className='flex justify-center'>
                    <Image src={data?.image?.url} alt={data?.title} width={500} height={400} />
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                    {
                        data?.items?.map(({item}:any,id:number)=>(
                            <li key={id} className='bg-white p-4 flex items-center rounded-lg gap-4 hover:shadow-2xl'>
                                <Image src="/auditors-icon.png" alt={data?.title} width={40} height={40} />
                                <span>{item}</span>
                            </li>
                        ))
                    }   
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ApprovedAuditors