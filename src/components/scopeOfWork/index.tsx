import React from 'react'

const ScopeOfWork = () => {
  return (
    <section className='container mx-auto px-4 items-center py-10 pt-12'>
          <h2 className=" text-4xl text-center mb-10 tracking-tight font-bold text-gray-900 ">Scope of work</h2>
          <div className='grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 '>
          {
               scopeofworkData.map((item,idx)=>(
                    <div key={idx} className='border-[2px] relative border-[#C39F2B] rounded-xl text-gray-700 p-10 text-center'>
                         <p>{item.info}</p>
                         <span className='absolute font-semibold text-5xl text-gray-200 top-3 left-3'>{idx+1}</span>
                    </div>
               ))
          }
          </div>
    </section>
  )
}

export default ScopeOfWork



const scopeofworkData = [
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     },
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     },
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     },
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     },
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     },
     {
          info : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis praesentium itaque aliquam quos, ut expedita labore nostrum dolore magnam quisquam.'
     }
]