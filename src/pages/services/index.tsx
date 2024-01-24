import React from 'react'
import Having from '@/components/servicespage/having'
import Ourstages from '@/components/servicespage/ourstages'
import Partner from '@/components/servicespage/partner'
import PageBanner from '@/components/servicespage/PageBanner'
function Services() {
  return (
    <>
      <PageBanner/>
      <Having/>
      <Ourstages/>
      <Partner/>
    </>
  )
}

export default Services

