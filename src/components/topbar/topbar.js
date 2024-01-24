import React, { useContext } from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import { HiMailOpen, HiMenuAlt3 } from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { SettingContext } from '@/context/setting-context'
import {RxCross2} from 'react-icons/rx'

function Topbar() {
  const {mobileNav, setMobileNav} = useContext(SettingContext)
  return (
    <div className='container mx-auto px-4 py-5'>
    <div className='flex justify-between items-center'>
      <div>
        <img src="/cropped.webp" alt="" className='md:w-60 w-32' />
      </div>
      <button onClick={()=>setMobileNav(!mobileNav)}>
      {
        mobileNav ? <RxCross2 className="text-3xl md:hidden block"/> : <HiMenuAlt3 className="text-3xl md:hidden block" /> 
      }
      
      </button>
      <div className='hidden md:flex gap-3 text-blue-950'> {/* Hide on screens smaller than md */}
        <FaPhoneAlt className='text-2xl mt-3'/>
        <div>
          <h2 className='font-bold '>Call Us:</h2>
          <p>+971 4 3214855</p>
        </div>
      </div>
      <div className='hidden md:flex gap-3 text-blue-950'> {/* Hide on screens smaller than md */}
        <HiMailOpen className='text-3xl mt-3'/>
        <div>
          <h2 className='font-bold '>Mail Us:</h2>
          <p>Info@alnasheetllc.com</p>
        </div>
      </div>
      <div className='hidden lg:flex gap-5'> {/* Hide on screens smaller than md */}
        <div className='bg-blue-950 px-2 py-2 rounded-full'> <FaFacebook className=' text-white text-2xl'/></div>
        <div className='bg-blue-950 px-2 py-2 rounded-full'> <BsTwitter className=' text-white text-2xl'/></div>
        <div className='bg-blue-950 px-2 py-2 rounded-full'><BsLinkedin className=' text-white text-2xl'/></div>
        <div className='bg-blue-950 px-2 py-2 rounded-full'><AiFillInstagram className=' text-white text-2xl'/></div>
      </div>
    </div>
  </div>
  
  )
}

export default Topbar