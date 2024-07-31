import Image from 'next/image'
import React from 'react'

const TwoColumnBlock = ({ data, rightImage }: any) => {
     return (
          <div className='container mx-auto px-4 my-16'>
               <h2 className='text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]'>{data?.title}</h2>
               <div className={`grid gap-5 items-center ${data?.image ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    <Image src={data?.image} alt={data?.title} width={600} height={400} className={`rounded-2xl ${rightImage && 'order-2'}`} />
                    <div className='container mx-auto px-4 text-gray-700 content content2'>
                         <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                    </div>
               </div>
          </div>
     )
}

export default TwoColumnBlock