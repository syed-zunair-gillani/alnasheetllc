import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { AiFillSignal } from "react-icons/ai";

function Ourstages({background}:any) {
  return (
    <section className={`md:pb-16 pt-12 ${background && 'bg-[#172554] text-white'}`}>
      <div className='grid lg:grid-cols-2 items-center md:grid-cols-2 grid-cols-1 gap-7 container px-4 mx-auto'>
        <div className='order-2'>
          <div className='flex gap-3 items-center'>
            <div className='border py-3 px-3 rounded-md border-[#C6A02E] '>
              <BsFillPersonLinesFill className="text-5xl text-[#C6A02E]  " />
            </div>
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl">Consultation</h3>
              <p className={`${background ? 'text-gray-400' : 'text-gray-600'}`}>Etiam quis tincidunt est et efficitur ipsum nunc mixue. Bibendum ut risus et nec vehicula.</p>
            </div>
          </div>

          <div className='flex gap-3 items-center py-6'>
            <div className='border py-3 px-3 rounded-md border-[#C6A02E] '>
              <BsFileEarmarkBarGraphFill className="text-5xl text-[#C6A02E]  " />
            </div>
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl">Choose a Package</h3>
              <p className={`${background ? 'text-gray-400' : 'text-gray-600'}`}>Etiam quis tincidunt est et efficitur ipsum nunc mixue. Bibendum ut risus et nec vehicula.</p>
            </div>
          </div>

          <div className='flex gap-3 items-center'>
            <div className='border py-3 px-3 rounded-md border-[#C6A02E] '>
              <AiFillSignal className="text-5xl text-[#C6A02E]  " />
            </div>
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl">Get Your Service</h3>
              <p className={`${background ? 'text-gray-400' : 'text-gray-600'}`}>Etiam quis tincidunt est et efficitur ipsum nunc mixue. Bibendum ut risus et nec vehicula.</p>
            </div>
          </div>

        </div>

        <div>
          <h4 className='text-[16px] text-[#C6A02E] font-[500] py-2'>OUR STAGES</h4>
          <h2 className="lg:text-[42px] text-[30px] font-[600] leading-[40px] md:leading-[52px] py-2">Easy Process to Manage Your Finances</h2>
          <p className={`${background ? 'text-gray-400' : 'text-gray-600'}`}>In sed nisi vel tortor ornare venenatis sit amet vel felis. Etiam sit amet odio sed nunc lacinia dictum vel quis est. Vivamus in tempor dolor. Sed eget pharetra ligula. Etiam egestas fringilla lectus, et molestie augue auctor sagittis. Nunc sit amet felis ac ex ultricies lacinia. Praesent quis ligula id tortor maximus laoreet. Fusce ultricies sed ante sollicitudin venenatis. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        </div>

      </div>
    </section>
  )
}

export default Ourstages