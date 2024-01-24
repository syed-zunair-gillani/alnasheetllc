import React from 'react'

const ContactForm = () => {
     return (
          <>
               <div className=''>
                    <input type="text" className=' w-full px-3 border py-2 transform bg-transparent border-gray-500 outline-none' placeholder='Name' />
               </div>
               <div className='mt-4'>
                    <input type="text" className=' w-full px-3 border py-2 transform bg-transparent border-gray-500 outline-none' placeholder='Email' />
               </div>
               <div className='mt-4'>
                    <textarea name="" id="" rows={3} className=' w-full px-3 border py-2 transform bg-transparent border-gray-500 outline-none' placeholder='Message'></textarea>
               </div>
               
               <button className='bg-[#C6A02E] px-6 py-3 w-full hover:bg-[#C6A02E]/80 transition-all duration-200 ease-linear mt-2 rounded-md'>Send</button>
               
          </>
     )
}

export default ContactForm