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

function ServicesPage({service}:any) {
  console.log("🚀 ~ ServicesPage ~ service:", service)
  return (
    <>
      <PageBanner data={{...service?.acf?.page_banner, title:service.title.rendered } } />
      <div className=' max-w-[900px] text-center mx-auto text-gray-700 pt-16 content'>
        <div dangerouslySetInnerHTML={{ __html:service?.content?.rendered }}/>
      </div>
      {
        service?.acf.benefits && <FeatureAndBenefits data={service?.acf.benefits}/>
      }
      {
        service?.acf?.scopeprocess?.scope.length > 0 && <ScopeOfWork data={service?.acf?.scopeprocess}/>
      }
      {
        service?.acf?.others?.having_trouble_managing_your_finances && <Having />
      }
      {
        service?.acf?.pricing_plan && <PricingTable data={service?.acf?.pricing_plan}/>
      }
      <Services />
      {
        service?.acf?.others?.our_stages && <Ourstages background />
      }
      {
        service?.acf?.others?.why_choose_us && <WhyChooseUs />
      }
    </>
  )
}

export default ServicesPage


export async function getServerSideProps({ params }: any) {
  const slug = params.services
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`);
  const service = await response.json();
  return {
    props: {
      service : service[0],
    },
  };
}