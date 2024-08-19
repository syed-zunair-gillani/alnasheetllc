import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ContactForm from '../contact/form'

const SideBar = ({servicesFromCategory}:any) => {
  return (
    <aside>
      <div className="bg-[#172554] py-10 px-8 rounded-xl">
        <div className="text-white mx-auto">
          <h3 className=" text-2xl font-medium pl-2">
            Other Services
          </h3>
          <ul>
            {
              servicesFromCategory?.map((item:any, idx:number) => (
                <li className="flex gap-3 items-center mt-2 " key={idx}>
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]" />
                  <span className="lg:text-lg font-normal hover:text-blue-500">{item?.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center h-48 flex items-center justify-center text-white mt-5 overflow-hidden rounded-md  "
        style={{
          backgroundImage: 'url("/unit.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center container mx-auto px-4 ">
          <h1 className="text-xl font-bold">Having Trouble Managing Your Finance?</h1>
          <div className='flex items-center justify-center gap-2 text-center mt-4'>
            <Link href="/contact" className="bg-[#C6A02E]/80 hover:bg-[#C6A02E] shadow-xl text-white py-3 rounded-md px-6 flex items-center gap-1">
              <button>CONTACT US NOW</button>
              <MdOutlineArrowOutward className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <div className='border border-[#172554] p-8 rounded-lg mt-7'>
        <h1 className="text-2xl text-[#172554] font-bold mb-5">Get a Free Quote</h1>
          <ContactForm/>
        </div>
    </aside>
  )
}

export default SideBar