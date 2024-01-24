import React from 'react'

function Blogcard() {
  return (
    <main className='container mx-auto px-4'>
    <div className='mt-14'>
        <h2 className='text-[42px] font-[600] text-center'><span className='bg-blue-950 px-2 py-2 text-white'>Our</span> Blog</h2>
    </div>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-10'>
           <div className='border-2  border-none shadow-xl '>
              <img src="1.webp" alt="" className='w-full' />
              <div className='px-10 py-5 '>
                 <h2 className='font-[600] pt-5 text-[20px]'>What are the Audit Services for Free zone Companies in Dubai, UAE?</h2>
                 <p className='py-5'>Audit Services for Free zone Companies in Dubai, UAE Several free zones based in UAE have different rules and regulations. The same is the case</p>
                 <a href="#" className='text-green-700 font-semibold pt-5'>READ MORE</a>
              </div>
           </div>
           <div className='border-2  border-none shadow-xl '>
              <img src="2.webp" alt="" className='w-full' />
              <div className='px-10 py-5 '>
                 <h2 className='font-[600] pt-5 text-[20px]'>What are the Approved Auditing Firms in Dubai?</h2>
                 <p className='py-5'>Approved Auditing Firms in Dubai You can take many advantages from an audit by audit firms in Dubai with regulated auditors who can handle this</p>
                 <a href="#" className='text-green-700 font-semibold pt-5'>READ MORE</a>
              </div>
           </div>
           <div className='border-2  border-none shadow-xl '>
              <img src="3.jpeg" alt="" className='w-full h-[40vh]' />
              <div className='px-10 py-5 '>
                 <h2 className='font-[600] pt-5 text-[20px]'>Cloud Accounting and Its Rise</h2>
                 <p className='py-5'>The bodies were lying in the streets un-buried. All railroads and vessels carrying food and such things into the great city had ceased runnings and mobs of the hungry poor pillaging.</p>
                 <a href="#" className='text-green-700 font-semibold pt-5'>READ MORE</a>
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