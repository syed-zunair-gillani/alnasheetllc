import React from 'react'

const CardScopeOfWork = ({data}:any) => {
  return (
     data?.benefit?.map((item:any,idx:number)=>(
          <div key={idx} className={`border-[2px] relative border-[#C39F2B] rounded-xl text-gray-700 p-10 text-center ${item.title && 'pl-14 !text-left'}`}>
               <h3 className='font-semibold text-xl text-[#001D49]'>{item.title}</h3>
               <p>{item.info}</p>
               <span className='absolute font-semibold text-5xl text-gray-200 top-3 left-3'>{idx+1}</span>
          </div>
     ))
  )
}

export default CardScopeOfWork