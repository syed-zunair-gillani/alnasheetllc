import Link from 'next/link'
import React from 'react'

function blogcard() {
   return (
      <main className='container mx-auto px-4'>
         <div className='mt-14'>
            <h2 className='text-[42px] font-[600] text-center'><span className='bg-blue-950 px-2 py-2 text-white'>Our</span> Blog</h2>
         </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-8'>
            {
               [1, 2, 3].map((item, id) => (
                  <div key={id} className='hover:shadow-lg pb-2 border'>
                     <img src="3.jpeg" alt="" className='w-full h-[40vh]' />
                     <div className='px-6 py-2 flex flex-col justify-between'>
                        <h2 className='font-[600] pt-3 text-lg'>Cloud Accounting and Its Rise</h2>
                        <p className='py-5 text-sm lg:text-base'>The bodies were lying in the streets un-buried. All railroads and vessels carrying food and such things into the great city had ceased runnings and mobs of the hungry poor pillaging.</p>
                        <Link href="#" className='text-blue-900 font-semibold hover:underline pt-5'>READ MORE</Link>
                     </div>
                  </div>
               ))
            }

         </div>
         <div className='text-center py-10'>
            <button className='bg-blue-950 px-8 text-[20px] text-white p-2 hover:scale-105'>View More</button>
         </div>
      </main>
   )
}

export default blogcard