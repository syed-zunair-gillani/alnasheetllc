import React from 'react'

const ListScopeOfWork = ({ data }: any) => {
     return (
          <>
               {data?.benefit?.map((item: any, idx: number) => (
                    <div key={idx} className={`border-[2px] relative border-[#C39F2B] rounded-xl text-gray-700 w-full p-8 pl-28  ${item.title && 'pl-14 !text-left'}`}>
                         <h3 className='font-semibold text-xl text-[#001D49]'>{item.title}</h3>
                         <p>{item.info}</p>
                         <span className='absolute font-semibold text-5xl shadow-md text-gray-200 -top-3 -left-3 bg-[#C39F2B] w-24 h-20 flex items-center justify-center rounded-xl'>{idx + 1}</span>
                    </div>
               ))}
          </>
     )
}

export default ListScopeOfWork