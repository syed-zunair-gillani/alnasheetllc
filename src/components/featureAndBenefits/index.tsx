import Image from 'next/image'
import React from 'react'

const FeatureAndBenefits = () => {
  return (
    <>
    <section className='container mx-auto px-4 items-center pt-12'>
          <h2 className=" text-4xl text-center mb-10 tracking-tight font-bold text-gray-900 ">Features and Benefits</h2>
          <div className='mt-20'>
          {
               fbd?.map((item,idx)=>(
                    <div key={idx} className='grid grid-cols-1 gap-5 md:grid-cols-2 mb-12 items-center'>
                         <div className='flex items-center md:items-end relative'>
                              <figure className='border-[2px] border-[#C6A02E] p-5 rounded-full bg-white absolute z-10'>
                                   <Image src={item.icon} alt={item.title} width={40} height={40}/>
                              </figure>
                              <div className='bg-[#001D49] text-white p-5 clippath pl-20 font-medium  ml-5 pr-12 rounded-tl-3xl rounded-bl-3xl'>{item.title}</div>
                         </div>
                         <div>
                              <p className='text-center md:text-left'>{item.info}</p>
                         </div>
                    </div>
               ))
          }
          </div>
    </section>
    </>
  )
}

export default FeatureAndBenefits


const fbd = [
     {
          icon : '/images/graph.png',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia voluptas repellat suscipit, illo animi voluptate sequi           '
     },
     {
          icon : '/images/graph.png',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia voluptas repellat suscipit, illo animi voluptate sequi           '
     },
     {
          icon : '/images/graph.png',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia voluptas repellat suscipit, illo animi voluptate sequi           '
     },
     {
          icon : '/images/graph.png',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia voluptas repellat suscipit, illo animi voluptate sequi           '
     }
]