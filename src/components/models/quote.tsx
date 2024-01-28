import React from 'react'

function Quote() {
  return (
    <main className='container mx-auto px-4 items-center '>
      <div className='py-2'>
        <div>
          <h2 className='text-[32px] text-[#001D49] text-center font-[500]'>Free Quote</h2>
        </div>
        <div>
          <input type="text" className='border border-[#69727d] outline-none w-full py-2  mt-3 px-3' placeholder='Name' />
        </div>
        <div>
          <input type="text" className='border border-[#69727d] outline-none w-full py-2  mt-3 px-3' placeholder='Email' />
        </div>
        <div>
          <input type="number" name="" id="" className='border border-[#69727d] outline-none w-full py-2  mt-3 px-3' placeholder='Phone' />
        </div>
        <div className='grid grid-cols-2 gap-1 py-3'>
          <div className='flex gap-3'>
            <input type="checkbox" name="" id="" className='w-5' />
            <h4>ACCOUNTING & BOOKKEEPING</h4>
          </div>
          <div className='flex gap-3'>
            <input type="checkbox" name="" id="" className='w-5' />
            <h4>AUDIT & ASSURANCE</h4>
          </div>
          <div className='flex gap-3'>
            <input type="checkbox" name="" id="" className='w-5' />
            <h4>VAT RELATED SERVICES</h4>
          </div>
          <div className='flex gap-3'>
            <input type="checkbox" name="" id="" className='w-5' />
            <h4>OTHER SERVICES</h4>
          </div>
        </div>
        <div>
          <textarea name="" id="" cols={2} rows={3} className='border border-[#69727d] outline-none w-full py-2  px-3' placeholder='Message' ></textarea>
        </div>
        <div className='flex justify-end mt-4 '>
          <button className='bg-blue-950 px-9 hover:scale-105 py-3 text-white font-[600] rounded-full'>Send</button>
        </div>
      </div>
    </main>
  )
}

export default Quote