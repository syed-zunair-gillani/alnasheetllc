import React from 'react'
import PageBanner from '@/components/servicespage/PageBanner'
import Services from '../../components/servies/servicescard'
import PricingTable from '@/components/pricing-table/pricingTable'
import FeatureAndBenefits from '@/components/featureAndBenefits'
import AuditProcess from '@/components/AuditProcess/AuditProcess'
import ClientSector from '@/components/clientSector/ClientSector'

function AccountingPage({ service }: any) {
  console.log("🚀 ~ AccountingPage ~ service:", service)
  return (
    <>
      <PageBanner data={{ ...service?.acf?.page_banner_group, title: service.title.rendered }} />
      <div className=' max-w-[900px] text-center mx-auto text-gray-700 pt-16 content pb-16'>
        <div dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
      </div>
      <FeatureAndBenefits data={service?.acf.features_and_benefits_group} background/>
      <PricingTable data={service?.acf?.plan} title={service?.acf?.plan_main_title} info={service?.acf?.plan_info} />
      <AuditProcess data={service?.acf?.process} title={service?.acf?.process_section_heading} background/>
      <Services heading data={service?.acf?.servies}/>
      <ClientSector data={service?.acf?.sector} title="Our Client Sector"/>
    </>
  )
}

export default AccountingPage


export async function getServerSideProps() {
  const slug = 'accounting'
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`);
  const service = await response.json();
  return {
    props: {
      service: service[0],
    },
  };
}