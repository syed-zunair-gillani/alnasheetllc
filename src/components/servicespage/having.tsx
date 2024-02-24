import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";

function having({data}:any) {
  return (
    <section className='py-10'>
      <div
        className="relative bg-cover bg-center h-auto py-20 flex items-center justify-center text-white "
        style={{
          backgroundImage: 'url("/top-view.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 text-center conatiner mx-auto px-4">
        <h1 className="text-4xl font-bold">{data?.title}</h1>
        <p className='py-6 max-w-[730px] mx-auto'>{data?.info}</p>
        <Link href={data?.button_link}> 
        <button className='flex gap-3 mx-auto items-center justify-center bg-[#C6A02E] hover:scale-105 transition-all duration-200 ease-linear px-5 py-2 h-16 w-60 uppercase rounded-md'>{data?.button_text} <GoArrowUpRight /></button>
        </Link>
        
        </div>
      </div>
    </section>
  )
}

export default having