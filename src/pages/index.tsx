import Main from '../components/main/main'
import Block from '../components/block/block'
import Services from '../components/servies/servicescard'
import Strategies from '../components/Strategies/Strategies'
import Blogcard from '../components/blog/blogcard'
import Logo from '../components/logo/logo'
import Testimonials from '../components/testimonials/Testimonials'
import { VscGraph } from "react-icons/vsc";
import { GiReceiveMoney } from "react-icons/gi";
import Having from '@/components/servicespage/having'
import WhyChooseUs from '@/components/WhyChooseUs'
import Ourstages from '@/components/servicespage/ourstages'
import Faqs from '@/components/faqs'
import React, { useContext, useEffect } from 'react'
import { SettingContext } from '@/context/setting-context'

export default function Home() {

  const { openModal } = useContext(SettingContext)


  useEffect(()=>{
    setTimeout(() => {
      openModal()
    }, 2000);
  },[])

  return (
    <main>
      <Main />
      <section className='flex flex-col sm:flex-row justify-end container mx-auto gap-5 -mt-28 px-2 md:px-0'>
        <div className='bg-[#006F93] text-white p-7 md:p-10 md:py-16 md:flex gap-4 sm:max-w-[402px] min-h-[217px] rounded-xl shadow-lg'>
            <VscGraph className="text-5xl"/>
            <div>
              <h4 className='text-2xl font-semibold mt-2 md:mt-0'>Time-Saving</h4>
              <p className='mt-2'>Aliquam tincidunt mi vitae odio mixue molestie.</p>
            </div>
        </div>
        <div className='bg-[#01B7D6] text-white p-7 md:p-10 md:py-16 md:flex gap-4 sm:max-w-[400px] min-h-[217px] rounded-xl shadow-lg'>
            <GiReceiveMoney className="text-5xl"/>
            <div>
              <h4 className='text-2xl font-semibold mt-2 md:mt-0'>Cost-Effective</h4>
              <p className='mt-2'>Aliquam tincidunt mi vitae odio mixue molestie.</p>
            </div>
        </div>
      </section>
      <Block />
      <Strategies />
      <Services heading/>
      <Having/>
      <WhyChooseUs/>
      <Ourstages background/>
      <Blogcard />
      <Testimonials />
      <Faqs/>
    </main>
  )
}
