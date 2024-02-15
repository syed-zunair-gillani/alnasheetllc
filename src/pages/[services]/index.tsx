import React from 'react'
import Having from '@/components/servicespage/having'
import Ourstages from '@/components/servicespage/ourstages'
import Partner from '@/components/servicespage/partner'
import PageBanner from '@/components/servicespage/PageBanner'
import Services from '../../components/servies/servicescard'
import PricingTable from '@/components/pricing-table/pricingTable'
import WhyChooseUs from '@/components/WhyChooseUs'
import ScopeOfWork from '@/components/scopeOfWork'
import FeatureAndBenefits from '@/components/featureAndBenefits'
import { useRouter } from 'next/router'
import Image from 'next/image'

function ServicesPage() {
  const hideSection = ['audit-and-assurance']
  const { query }: any = useRouter()

  return (
    <>
      <PageBanner />
      <div className='pt-20 max-w-[900px] text-center mx-auto text-gray-700'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim sapiente expedita rem quae! Quos reiciendis voluptate sunt, corporis iste accusantium ad fugit ipsam vero id minus voluptas magnam deserunt minima, mollitia animi delectus pariatur explicabo. Id fugit labore eaque nihil reprehenderit dolorem dolores sunt quaerat, atque qui maxime optio ex officiis laboriosam dignissimos. Est doloremque deserunt amet soluta sed.</p>
      </div>
      {
        !hideSection.includes(query?.services) && <ScopeOfWork />
      }
      {
        hideSection.includes(query?.services) &&
        <figure className='container mx-auto px-3 mt-16'>
        <Image src='/process2.jpeg' alt="" width={900} height={600} className='w-full'/>
      </figure>
      }
      
      <FeatureAndBenefits />
      <Services />
      <Having />
      <PricingTable />
      <Ourstages background />
      <WhyChooseUs />
    </>
  )
}

export default ServicesPage

