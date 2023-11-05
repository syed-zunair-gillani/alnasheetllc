import { SettingContext } from '@/context/setting-context'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'


function Navbar() {

  const { mobileNav, setMobileNav } = useContext(SettingContext)
  const [openNav, setOpenNav] = useState<any>()
  const [mobileSubNav, setMobileSubNav] = useState<any>()


  const handleOpenNav = (idx: number) => {
    setOpenNav(idx)
  }
  const handleCloseNav = (idx: number) => {
    setOpenNav(null)
  }

  const handleNavClick = (idx: number) => {
    if(idx === mobileSubNav){
      return setMobileSubNav(null)
    }
    setMobileSubNav(idx)
  }

  return (
     <main className={`container mx-auto md:px-4 absolute md:relative left-0 md:!block right-0 z-50 ${mobileNav ? 'block' : 'hidden'}`}>
      <div className='bg-blue-950 text-white md:rounded-full flex items-center gap-6 md:justify-center py-8 md:py-2 p-5'>
        <ul className='flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto'>
          {
            NavMenu.map((nav: any, idx: number) => {
              return ( 
                // onClick={() => handleNavClick(idx)}
                <li className='relative' key={idx} onMouseEnter={() => handleOpenNav(idx)} onMouseLeave={() => handleCloseNav(idx)}>
                  <Link href="#" className='hover:text-[#C6A02E] flex items-center justify-between gap-2'>
                    {nav.name}
                    {/* {nav?.subNav && <SlArrowDown className="mt-1" />} */}
                  </Link>
                  {
                    openNav === idx &&
                    nav?.subNav?.length > 0 &&
                    <ul className='absolute bg-blue-950 pt-4'>
                      {
                        nav?.subNav?.map((sub: any, id: number) => (
                          <li key={id} className='p-4 hover:bg-[#C6A02E]'><Link href="#" className='whitespace-nowrap'>{sub.name}</Link></li>
                        ))
                      }
                    </ul>
                  }
                  {
                    mobileSubNav === idx &&
                    nav?.subNav?.length > 0 &&
                    <ul className='pt-4'>
                      {
                        nav?.subNav?.map((sub: any, id: number) => (
                          <li key={id} className='p-4 hover:bg-[#C6A02E]'><Link href="#" className='whitespace-nowrap'>{sub.name}</Link></li>
                        ))
                      }
                    </ul>
                  }
                </li>
              )
            })
          }
        </ul>
        <div className='lg:flex items-center gap-12'>
          <a href="#" className='hidden lg:inline-block'>
            <button className='bg-[#C6A02E] px-4 py-2 hover:text-blue-950 rounded-full hover:scale-105'>Free Consultancy</button>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Navbar



const NavMenu = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Audit & Assurance",
    link: "#",
    subNav: [
      {
        name: "Audit 1",
        link: "#"
      },
      {
        name: "Accounting Software Solutions",
        link: "#"
      }
    ]
  },
  {
    name: "Accounting & Bookkeeping",
    link: "#",
    subNav: [
      {
        name: "Audit 1",
        link: "#"
      },
      {
        name: "Accounting Software Solutions",
        link: "#"
      }
    ]
  },
  {
    name: "Management Consultancy",
    link: "#"
  },
  {
    name: "Tax",
    link: "#"
  },
  
]