import React from 'react'
import PageBanner from '@/components/servicespage/PageBanner'
import Services from '../../components/servies/servicescard'
import ScopeOfWork from '@/components/scopeOfWork'
import TwoColumnBlock from '@/components/block/TwoColumnBlock'
import OutsourceCorpoateTax from '@/components/OutsourceCorpoateTax'

function ServicesPage({ service }: any) {
console.log("🚀 ~ ServicesPage ~ service:", service)

  return (
    <>
       <PageBanner data={{ ...service?.acf?.page_banner_group, title: service.title.rendered }} />
      <div className=' max-w-[900px] text-center mx-auto text-gray-700 pt-16 content'>
        <div dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
      </div>
      <ScopeOfWork data={service?.acf.features_and_benefits_group} />
      <TwoColumnBlock data={service?.acf?.income_under_corporate_tax_group}/>
      <TwoColumnBlock data={service?.acf?.why_do_you_need_corporte_tax_expert_group} rightImage/>
      <TwoColumnBlock data={service?.acf?.applicabale_rate_of_corporte_tax_group}/>
      <OutsourceCorpoateTax data={service?.acf?.why_outsource_corporate_tax_group}/>
      <Services heading data={service?.acf?.servies} />
    </>
  )
}

export default ServicesPage


export async function getServerSideProps() {
  const slug = "corporate-tax-service"
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`);
  const service = await response.json();
  console.log("🚀 ~ getServerSideProps ~ service:", service)
  return {
    props: {
      service: service[0],
    },
  };
}