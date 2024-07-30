import React from 'react'
import ListScopeOfWork from './ListScopeOfWork'
import CardScopeOfWork from './CardScopeOfWork'

const ScopeOfWork = ({data}:any) => {
  return (
    <section className='container mx-auto px-4 items-center py-10 pt-8 mb-8'>
          <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]">{data?.benefits_title}</h2>
          <div className={`grid grid-col-1 gap-5 md:grid-cols-2 `}>
          <ListScopeOfWork data={data}/> 
          </div>
    </section>
  )
}

export default ScopeOfWork