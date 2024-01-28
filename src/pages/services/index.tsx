import React from 'react'
import Having from '@/components/servicespage/having'
import Ourstages from '@/components/servicespage/ourstages'
import Partner from '@/components/servicespage/partner'
import PageBanner from '@/components/servicespage/PageBanner'
import Services from '../../components/servies/servicescard'
import PricingTable from '@/components/pricing-table/pricingTable'
import WhyChooseUs from '@/components/WhyChooseUs'

function ServicesPage() {
  return (
    <>
      <PageBanner/>
      <Services/>
      <Having/>
      <PricingTable/>
      <Ourstages background/>
      <WhyChooseUs/>
    </>
  )
}

export default ServicesPage

