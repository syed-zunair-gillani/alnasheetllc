import Image from 'next/image'
import React from 'react'

function Blogcard() {
  return (
    <main className='container mx-auto px-4 mt-16'>
    <div className=''>
        <h2 className='md:text-[42px] text-[32px] font-[600] text-center'><span className='bg-blue-950 px-2 py-2 text-white'>Our</span> Blog</h2>
    </div>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-12 gap-10'>
           <div className='border rounded-xl border-gray-200 hover:shadow-xl overflow-hidden bg-[#172554] text-white'>
              <Image width={250} height={200} src="/1.webp" alt="" className='w-full h-[250px] object-cover' />
              <div className='px-8 pb-5'>
                 <h2 className='font-medium pt-5 text-lg'>What are the Audit Services for Free zone </h2>
                 <p className='pt-3 pb-3 text-gray-400'>Audit Services for Free zone Companies in Dubai, UAE Several free zones based in UAE have different rules and regulations. The same is the case</p>
                 <a href="#" className='text-[#C6A02E] font-semibold pt-5'>READ MORE</a>
              </div>
           </div>
           <div className='border rounded-xl border-gray-200 hover:shadow-xl overflow-hidden bg-[#172554] text-white '>
              <Image width={250} height={200} src="/2.webp" alt="" className='w-full h-[250px] object-cover' />
              <div className='px-8 pb-5'>
                 <h2 className='font-medium pt-5 text-lg'>What are the Audit Services for Free zone </h2>
                 <p className='pt-3 pb-3 text-gray-400'>Audit Services for Free zone Companies in Dubai, UAE Several free zones based in UAE have different rules and regulations. The same is the case</p>
                 <a href="#" className='text-[#C6A02E] font-semibold pt-5'>READ MORE</a>
              </div>
           </div>
           <div className='border rounded-xl border-gray-200 hover:shadow-xl overflow-hidden bg-[#172554] text-white '>
              <Image width={250} height={200} src="/3.jpeg" alt="" className='w-full h-[250px] object-cover' />
              <div className='px-8 pb-5'>
                 <h2 className='font-medium pt-5 text-lg'>What are the Audit Services for Free zone </h2>
                 <p className='pt-3 pb-3 text-gray-400'>Audit Services for Free zone Companies in Dubai, UAE Several free zones based in UAE have different rules and regulations. The same is the case</p>
                 <a href="#" className='text-[#C6A02E] font-semibold pt-5'>READ MORE</a>
              </div>
           </div>
       </div>
       <div className='text-center py-10'>
        <button className='bg-blue-950 px-6 text-[22px] text-white p-2'>View More</button>
       </div>
    </main>
  )
}

export default Blogcard