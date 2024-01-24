import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
function Footer() {
    return (
        <main className='bg-[#001D49] '>
            <div className='container mx-auto px-4 items-center justify-center pt-14'>
                <div className='grid lg:grid-cols-4 text-white md:grid-cols-3 '>
                    <div className='justify-center items-center'>
                        <img src="/header.webp" alt="" className='' />
                        <div className='flex gap-4 mt-10'>
                            <MdLocationPin className='text-5xl text-[#C6A02E]' />
                            <p>Office 58-0, Falcon House Building, DIP1
                                Dubai Investment Park-1
                                Dubai, UAE
                                P.O Box 380506</p>
                        </div>
                        <div className='border mt-4'></div>
                        <div className='mt-5'>
                            <div className='flex gap-4'>
                                <BsFillTelephoneFill className='mt-1 text-[#C6A02E]' />
                                <p>+971 4 3214855</p>
                            </div>
                            <div className='flex gap-4 mt-1'>
                                <BsPhoneFill className='mt-1 text-[#C6A02E]' />
                                <p>+971 58 6900536</p>
                            </div>
                        </div>
                        <div className='border mt-4'></div>
                        <div className='flex gap-4 mt-4'>
                            <GrMail className='mt-1 text-[#C6A02E]' />
                            <p>Info@alnasheetllc.com</p>
                        </div>
                        <div className='border mt-4'></div>
                        <div className='flex gap-4 mt-4'>
                            <AiOutlineClockCircle className='mt-1 text-[#C6A02E]' />
                            <p>Monday - Friday 08:00 - 06:00</p>
                        </div>
                    </div>
                    <div className='lg:ml-14 md:ml-10 lg:mt-10 mt-5'>
                        <div>
                            <h3 className='text-2xl font-[600]'>Services</h3>
                        </div>
                        <div className='lg:mt-14 mt-5 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Accounting & Bookkeeping</p>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Audit & Assurance</p>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Vat Related Services</p>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Cloud Accounting</p>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Management Consultancy</p>
                        </div>
                    </div>
                    <div className='lg:mt-10 mt-5 lg:ml-10 md:ml-8'>
                        <h3 className='text-2xl font-[600]'>Quick Links</h3>
                        <div className='lg:mt-14 mt-5 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Contact Us</p>
                        </div><div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Privacy Policy</p>
                        </div><div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Blog</p>
                        </div><div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Testimonials</p>
                        </div><div className='mt-4 flex gap-3'>
                            <IoIosArrowForward className='text-[#C6A02E] text-xl mt-1' />
                            <p>Client</p>
                        </div>
                    </div>
                    <div className='lg:mt-10 mt-5'>
                        <h3 className='text-2xl font-[600]'>Get In Touch</h3>
                        <div className='lg:mt-14 mt-5'>
                            <input type="text" className='lg:w-72 w-full px-3 border py-1 transform bg-[#001D49] outline-none' placeholder='Name' />
                        </div>
                        <div className='mt-4'>
                            <input type="text" className='lg:w-72 w-full px-3 border py-1 transform bg-[#001D49] outline-none' placeholder='Email' />
                        </div>
                        <div className='mt-4'>
                            <textarea name="" id="" rows={3} className='lg:w-72 w-full px-3 border py-1 transform bg-[#001D49] outline-none' placeholder='Message'></textarea>
                        </div>
                        <div>
                            <button className='bg-[#C6A02E] px-6 py-2 rounded-lg'>Send</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border mt-10'></div>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between py-3 md:flex-row'>
                    <div>
                        <p className='text-white text-[10px]'>© 2022 AL NASHEET - DESIGN AND DEVELOPED BY CATCHY DESIGNZ</p>
                    </div>
                    <div className='text-white items-center flex gap-5'>
                        <BsFacebook />
                        <BsTwitter />
                        <BsLinkedin />
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer