import React from 'react'
import ListScopeOfWork from './ListScopeOfWork'
import CardScopeOfWork from './CardScopeOfWork'

const ScopeOfWork = ({data}:any) => {
  return (
    <section className='container mx-auto px-4 items-center py-10 pt-8'>
          <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]">{data?.title}</h2>
          <div className={`grid grid-col-1 gap-5  ${data?.design_type === 'List' ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {
               data.design_type === 'List' ? <ListScopeOfWork data={data}/> : <CardScopeOfWork data={data}/>
          }          
          </div>
    </section>
  )
}

export default ScopeOfWork