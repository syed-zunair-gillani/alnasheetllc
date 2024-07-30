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
import ApprovedAuditors from '@/components/approved-auditors/ApprovedAuditors'
import { RequiredDocumentForAudit } from '@/components/RequiredDocumentForAudit/RequiredDocumentForAudit'
import ClientSector from '@/components/clientSector/ClientSector'

function ServicesPage({ service }: any) {
  console.log("🚀 ~ ServicesPage ~ service:", service)

  return (
    <>
      <PageBanner data={{ ...service?.acf?.page_banner_group, title: service.title.rendered }} />
      <div className='max-w-[900px] text-center mx-auto text-gray-700 pt-16 content'>
        <div dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
      </div>
      <ScopeOfWork data={service?.acf.features_and_benefits_group} />
      <ApprovedAuditors data={service?.acf?.approved_auditors_wrapper}/>
      <AuditProcess data={service?.acf?.process} title={service?.acf?.process_section_heading} />
      <RequiredDocumentForAudit data={service?.excerpt?.rendered} background/>
      <ClientSector data={service?.acf?.sector} title="Our Client Sector"/>
      <Services heading data={service?.acf?.servies} background/>
    </>
  )
}

export default ServicesPage


export async function getServerSideProps() {
  const slug = 'audit-assurance'
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`);
  const service = await response.json();
  return {
    props: {
      service: service[0],
    },
  };
}