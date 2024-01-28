import Image from 'next/image'
import React from 'react'
import { AiOutlineTeam } from "react-icons/ai";
import Heading from '../heading/heading';

const WhyChooseUs = () => {
     return (
          <section className='grid grid-cols-1 lg:grid-cols-[60%_40%] px-3 lg:px-0 justify-between container gap-10 lg:gap-0 mx-auto py-10 lg:py-20'>
               <div className='lg:pr-20'>
                    <h6 className='text-[#C6A02E] mb-3'>WHY CHOOSE US</h6>
                    <Heading>Accounting With Unity</Heading>
                    <p className='mt-4 text-gray-600'>Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae ultricies mixuen. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo erat tempus.</p>
                    <div className='flex my-6 gap-6'>
                         <div className='flex gap-2'>
                              <AiOutlineTeam className="text-7xl text-[#C6A02E]"/>
                              <div>
                                   <h6 className='font-semibold text-xl pt-4'>Experienced</h6>
                                   <p className='text-gray-600'>Etiam luctus suscipit velit nec ultricies augue sed moles.</p>
                              </div>
                         </div>
                         <div className='flex gap-2'>
                              <AiOutlineTeam className="text-7xl text-[#C6A02E]"/>
                              <div>
                                   <h6 className='font-semibold text-xl pt-4'>Free Consultation</h6>
                                   <p className='text-gray-600'>Etiam luctus suscipit velit nec ultricies augue sed moles.</p>
                              </div>
                         </div>
                    </div>
                    {/* progress bar */}
                    <ul className='mt-4'>
                         {
                              progressData?.map((item, idx) => (
                                   <li key={idx} className='mb-6'>
                                        <div className='flex justify-between items-center pr-2 font-medium text-xl mb-2'>
                                             <h6>{item.label}</h6>
                                             <h6>{item.persentage}%</h6>
                                        </div>
                                        <div className='bg-[#172554] h-3 rounded-[4px]'>
                                             <div className='bg-[#C6A02E] h-3 rounded-[4px]' style={{ width: `${item.persentage}%` }} />
                                        </div>
                                   </li>
                              ))
                         }
                    </ul>
               </div>
               <div>
                    <Image src="/cheerful-business-team-discussing-project-L7SEHE4.jpeg" alt="image" width={400} height={400} className='w-full pl-10 lg:pl-0'/>
                    <div className='bg-[#01B7D6] text-white p-7 z-10 relative lg:-ml-10 -mt-24 text-center w-[250px] lg:w-[300px] md:p-12 gap-4 text-xl lg:text-2xl rounded-xl shadow-lg'>
                         <h4 className='text-3xl lg:text-5xl font-semibold mt-2 md:mt-0'>15 <sup className='text-lg'>Th</sup></h4>
                         <p className='mt-2'>Years Experience</p>
                    </div>
               </div>
          </section>
     )
}

export default WhyChooseUs


const progressData = [
     {
          label: "Expertise",
          persentage: "95",
     },
     {
          label: "Reputation",
          persentage: "93",
     },
     {
          label: "Knowledge",
          persentage: "97",
     },
     {
          label: "Communication",
          persentage: "91",
     }
]