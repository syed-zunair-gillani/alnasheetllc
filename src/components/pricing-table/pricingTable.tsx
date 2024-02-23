import Link from 'next/link'
import React from 'react'

const PricingTable = ({ data }: any) => {
     return (
          <section className="bg-gray-50 md:mt-10">
               <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">The Best Price For You</h2>
                         <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on
                              markets where technology, innovation, and capital can unlock long-term value and drive economic
                              growth.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                         {
                              data?.map((item: any, idx: number) => (
                                   <div key={idx}
                                        className="flex flex-col p-6 mx-auto max-w-xl text-center bg-white rounded-lg border border-gray-400 shadow xl:max-w-lg xl:p-8">
                                        <h3 className="mb-4 text-2xl font-medium text-gray-900 capitalize">{item?.type}</h3>
                                        <span className="text-5xl font-extrabold text-gray-900 ">{item.price}</span>
                                        <p className="mt-4 mb-1 text-gray-500 text-light dark:text-gray-400">{item?.short_info}</p>

                                        <Link href={item?.link}
                                             className="text-white bg-[#001D49] hover:bg-[#C39F2B] focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-3 text-center my-8 ">Get
                                             started</Link>
                                        <div role="list" className="space-y-4 text-gray-900 dark:text-gray-400">
                                             <div className=" items-center space-x-3 pricingcard !list-none" dangerouslySetInnerHTML={{__html: item.list_items}}/>
                                        </div>
                                   </div>
                              ))
                         }

                    </div>
               </div>
          </section>
     )
}

export default PricingTable