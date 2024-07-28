import React from 'react'

export const RequiredDocumentForAudit = ({data, background}:any) => {
  return (
    <section className={`py-16 ${background && 'bg-gray-50'}`}>
        <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554] ">Required Document For Audit</h2>
        <div className='max-w-[1000px] mx-auto text-center' dangerouslySetInnerHTML={{__html: data}}/>
    </section>
  )
}
