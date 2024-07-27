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

function ServicesPage({ service }: any) {
  console.log("🚀 ~ ServicesPage ~ service:", service)

  return (
    <>
      <PageBanner data={{ ...service?.acf?.page_banner_group, title: service.title.rendered }} />
      <div className='max-w-[900px] text-center mx-auto text-gray-700 pt-16 content'>
        <div dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
      </div>
      <FeatureAndBenefits data={service?.acf.features_and_benefits_group} background/>
      <ApprovedAuditors data={service?.acf?.approved_auditors_wrapper}/>

      {
        service?.acf?.scopeprocess?.length > 0 &&
          service?.acf?.scopeprocess.map((item:any,id:number)=>(
              <div key={id}>
                {
                  item.design_type === 'List' && <ScopeOfWork data={item} />
                }
                {
                  item.design_type === 'Card' && <ScopeOfWork data={item} />
                }
                {
                  item.design_type === 'Circle' && <AuditProcess data={item}/>
                }
              </div>
          ))
      }
      {
        service?.acf?.others?.having_trouble_managing_your_finances && <Having data={service?.acf?.call_to_action} />
      }
      
      
      <Services />
     
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