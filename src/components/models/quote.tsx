import Link from 'next/link'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

function Quote() {
  return (
    <main className='container mx-auto px-4 items-center '>
      <div className='py-2'>
        <div className='flex justify-between items-end'>
          <Link href="/">
            <img src="/cropped.webp" alt="" className='md:w-52 w-32' />
          </Link>
        </div>
        <h2 className='text-2xl -mt-7 text-[#001D49] text-center font-[500]'>Free consultation</h2>
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
        <div className='flex justify-end mt-4 gap-2'>
          <Link href="https://wa.me/+97143214855" target="_blank">
            <button className='bg-green-600 px-9 hover:scale-105 py-3 text-white font-[600] flex items-center gap-1 rounded-full'><IoLogoWhatsapp className="text-xl" /> Whatsapp</button>
          </Link>
          <button className='bg-blue-950 px-9 hover:scale-105 py-3 md:w-[180px] text-white font-[600] rounded-full'>Send</button>
        </div>
      </div>
    </main>
  )
}

export default Quote