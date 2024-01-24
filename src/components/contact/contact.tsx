import React from 'react'
import { FaAddressCard } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
function ContactForm() {
  return (
    <main className='container mx-auto px-4 py-10'>
      <div>
        <h2 className='lg:text-5xl font-[700] text-center items-center justify-center py-10 text-blue-950'>Contact Us</h2>
      </div>
      <div className='grid lg:grid-cols-2 gap-10'>
        <div>
          <h3 className='py-3'>Services your are looking for</h3>
          <div className='flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-6'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>Internal Audit</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>External Audit</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>Accounting Services</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>VAT Submission</label>
            </div>
          </div>

          <div className='flex flex-col gap-3 md:flex-row md:gap-6'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>Financial Projection</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" className='mt-1' />
              <label htmlFor="" className='text-sm md:text-base'>Company Formation & Business Setup</label>
            </div>
          </div>

          <div className='mt-3'>
            <h3 className='py-2'>Name <span className='text-red-500'>*</span></h3>
            <input type="text" className='border border-black w-full py-2 rounded-sm px-3 outline-none' placeholder='Name' />
          </div>
          <div className=''>
            <h3 className='py-2'>Email <span className='text-red-500'>*</span></h3>
            <input type="text" className='border border-black w-full py-2 rounded-sm px-3 outline-none' placeholder='Email' />
          </div>
          <div className=''>
            <h3 className='py-2'>Phone Number <span className='text-red-500'>*</span></h3>
            <input type="text" className='border border-black w-full py-2 rounded-sm px-3 outline-none' placeholder='Phone Number' />
          </div>
          <div className=''>
            <h3 className='py-2'>Message <span className='text-red-500'>*</span></h3>
            <textarea name="" id="" placeholder='Message' className='border border-black w-full py-2 rounded-sm px-3 outline-none'></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='bg-[#C6A02E] px-5 py-2 rounded-md text-white'>
              Send Message
            </button>
          </div>
        </div>

        <div className='lg:w-72 w-full mt-10 lg:ml-32'>
          <div className='flex gap-4'>
            <FaAddressCard className='text-[12vh] text-[#C6A02E] ' />
            <p>Office 58-0, Falcon House Building, DIP1 Dubai Investment Park-1
              Dubai, UAE
              P.O Box 380506</p>
          </div>
          <div className='flex gap-4 py-2'>
            <MdPhoneIphone className='text-[4vh] text-[#C6A02E]' />
            <p>+971 58 6900536</p>
          </div>
          <div className='flex gap-4'>
            <FaPhoneSquareAlt className='text-[4vh] text-[#C6A02E]' />
            <p>+971 4 3214855</p>
          </div>
          <div className='flex gap-4 py-2'>
            <GrMail className='text-[4vh] text-[#C6A02E]' />
            <p>Info@alnasheetllc.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactForm