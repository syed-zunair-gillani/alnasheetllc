import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";

function having() {
  return (
    <section className='py-10'>
      <div
        className="relative bg-cover bg-center h-auto py-20 flex items-center justify-center text-white "
        style={{
          backgroundImage: 'url("/top-view.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center conatiner mx-auto px-4">
        <h1 className="text-4xl font-bold">Having Trouble Managing Your Finances?</h1>
        <p className='py-6'>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse. Pharetra <br />finibus condimentum aenean lacinia sem metus Integer dapibus diam justo.</p>
        <Link href=""> 
        <button className='flex gap-3 mx-auto items-center justify-center bg-[#C6A02E] hover:scale-105 transition-all duration-200 ease-linear px-5 py-2 h-16 w-60 rounded-md'>CONTACT US NOW <GoArrowUpRight /></button>
        </Link>
        
        </div>
      </div>
    </section>
  )
}

export default having