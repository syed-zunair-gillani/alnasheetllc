import PageBanner from '@/components/servicespage/PageBanner'
import React from 'react'
import Image from "next/image";
import SideBar from '@/components/servicespage/sideBar';
import { BsFolder2Open } from "react-icons/bs";
import { PiFilesLight } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

function Slug() {
  return (
    <>
      {/* <PageBanner /> */}
      <section className='mt-6 mb-10'>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[70%_27%] py-8 gap-10">
            <div>
              <Image
                src="/close.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-full rounded-xl"
              />
              <section>
                <h2 className='font-bold text-[#172554] text-4xl my-4'>About Bookkeeping</h2>
                <div className='flex gap-5 items-center'>
                  <div className='flex items-center text-lg gap-2 group cursor-pointer'>
                    <BsFolder2Open className="text-2xl" />
                    <span className='mt-1 text-[#172554]/50 group-hover:text-[#172554]'>Services</span>
                  </div>
                  <div className='text-[#172554]'>|</div>
                  <div className='flex items-center text-lg gap-2 group cursor-pointer'>
                    <PiFilesLight className="text-3xl" />
                    <span className='mt-1 text-[#172554]/50 group-hover:text-[#172554]'>Service Detail</span>
                  </div>
                  <div className='text-[#172554]'>|</div>
                  <div className='flex items-center text-lg gap-2 cursor-pointer group'>
                    <PiShareFatLight className="text-[26px]" />
                    <span className='mt-1 text-[#172554]/50 group-hover:text-[#172554]'>Share</span>
                  </div>
                </div>
              </section>
              <section className='mt-5 content'>
                <p>Nullam et lacinia diam. Praesent eu pulvinar orci. Praesent in condimentum lacus, hendrerit malesuada nisi. Sed sagittis donec pulvinar velit nec fermentum. Phasellus quis pharetra nibh, quis tincidunt magna. Nam ultrices lacus interdum neque ultricies sagittis. Integer porta sem eu pellentesque facilisis. Vivamus ullamcorper nibh nec urna dignissim, a ullamcorper lectus  lorem porttitor. Nullam dui ex, feugiat a semper vitae, mollis ut elit. Integer vitae nunc eu leo tempor finibus. Suspendisse congue id erat non tempus. Integer dapibus diam justo, vitae euismod risus euismod quis. Suspendisse eget hendrerit ex.</p>
                <p>In sed nisi vel tortor ornare venenatis sit amet vel felis. Etiam sit amet odio sed nunc lacinia dictum vel quis est. Vivamus in nion tempor dolor. Sed eget pharetra ligula. Etiam egestas fringilla lectus, et molestie augue auctor sagittis. Nunc sit amet felis ac ex ultricies lacinia. Praesent quis ligula id tortor maximus laoreet fusce ultricies sed ante sollicitudin.</p>
                <h3>Benefits of Using Bookkeeping Services</h3>
                <p>In sed nisi vel tortor ornare venenatis sit amet vel felis. Etiam sit amet odio sed nunc lacinia dictum vel quis est. Vivamus in nion tempor dolor. Sed eget pharetra ligula. Etiam egestas fringilla lectus, et molestie augue auctor sagittis. Nunc sit amet felis ac ex ultricies lacinia. Praesent quis ligula id tortor maximus laoreet fusce ultricies sed ante sollicitudin.</p>
                <ul>
                  <li className='flex items-center'>
                    <IoIosArrowForward className="text-xl text-[#172554]"/>
                    Nulla congue aliquet vulputate feugiat a semper nibh risus lacinia dolor amatug.
                  </li>
                  <li className='flex items-center'>
                  <IoIosArrowForward className="text-xl text-[#172554]"/>
                    Proin tempus auctor libero tellus sit amet luctus ipsum.</li>
                  <li className='flex items-center'><IoIosArrowForward className="text-xl text-[#172554]"/>Sed venenatis purus sed nibh risus lacinia dolor lacus lorem sit amet.</li>
                  <li className='flex items-center'><IoIosArrowForward className="text-xl text-[#172554]"/>Etiam lobortis sapien amatug tellus sit amet luctus lacinia.</li>
                  <li className='flex items-center'><IoIosArrowForward className="text-xl text-[#172554]"/>Etiam sit amet odio sed nunc lacinia dictum vel quis est augue sed congue.</li>
                </ul>
              </section>
            </div>
            <SideBar />
          </div>
        </div>
      </section>
    </>
  )
}

export default Slug