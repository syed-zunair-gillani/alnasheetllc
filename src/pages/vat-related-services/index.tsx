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
import TwoColumnBlock from '@/components/block/TwoColumnBlock'
import AuditProcess from '@/components/AuditProcess/AuditProcess'
import ListScopeOfWork from '@/components/scopeOfWork/ListScopeOfWork'

function ServicesPage({ service }: any) {
  console.log("🚀 ~ ServicesPage ~ service:", service)
  const {query} =  useRouter()

  return (
    <>
       <PageBanner data={{ ...service?.acf?.page_banner_group, title: service.title.rendered }} />
      <div className=' max-w-[900px] text-center mx-auto text-gray-700 pt-16 content'>
        <div dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
      </div>
      <ScopeOfWork data={service?.acf.features_and_benefits_group} />
      <FeatureAndBenefits data={service?.acf.importance_of_vat_group} background/>
      <TwoColumnBlock data={service?.acf?.role_of_vat_consultant_group}/>
      <TwoColumnBlock data={service?.acf?.mondatory_registration_group} rightImage/>
      <ScopeOfWork data={service?.acf.document_for_vat_registration_group} background/>
      <Services heading data={service?.acf?.servies} />
    </>
  )
}

export default ServicesPage


export async function getServerSideProps() {
  const slug = "vat-related-services"
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`);
  const service = await response.json();
  return {
    props: {
      service: service[0],
    },
  };
}