import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
function hero() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[70%_27%] py-8 gap-5">
          <div>
            <Image
              src="/close.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full rounded-xl"
            />
          </div>
          <div>
            <div className="bg-[#006F93] py-10 px-2 rounded-xl">
              <div className="text-white text-center mx-auto">
                <h3 className=" text-2xl font-[700]">
                  Other Services
                </h3>
                <div className="flex gap-3 items-center mt-2 ml-4 ">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Payroll Services</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Tax Planning</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Audit & Assurance</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Financial Statement</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Tech Consulting</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Business Advisory</h5>
                </div>
                <div className="flex gap-3 items-center ml-4">
                  <MdOutlineKeyboardArrowRight className="text-3xl text-blue-500 font-[800]"/>
                  <h5 className="lg:text-xl font-[600] hover:text-blue-500">Outsourced CFO</h5>
                </div>
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
  <Link href="/" className="bg-[#00B6D6] text-white py-3 rounded-md px-3 w-52 flex items-center gap-4">
    <button>CONTACT US NOW</button>
    <MdOutlineArrowOutward className="text-xl" />
  </Link>
</div>
        </div>
           </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
