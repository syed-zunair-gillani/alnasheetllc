import React, { useState } from 'react'
import Heading from '../heading/heading'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Faqs = () => {

     const [id, setId] = useState<any>(0)
     const handleFaq = (idx: any) => {
          if (id === idx) return setId(null)
          setId(idx)
     }

     return (
          <section className='container mx-auto px-3 py-20 grid md:grid-cols-2 gap-10'>
               <div>
                    <h6 className='text-[#C6A02E] mb-3'>FAQ</h6>
                    <Heading>Accounting With Unity</Heading>
                    <p className='mt-4 text-gray-600'>Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae ultricies mixuen. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo erat tempus.</p>
               </div>
               <div>
                    <ul className=''>
                         {
                              faqs.map((item, idx) => (
                                   <li key={idx} onClick={() => handleFaq(idx)}>
                                        <h6 className={`font-semibold mb-2 p-4 flex justify-between items-center gap-6 rounded-xl cursor-pointer text-[#001D49] border border-[#001D49] ${id === idx && 'bg-[#001D49] text-white'}`}>
                                             {item.q}
                                             {
                                                  id === idx ? <FaMinus className="text-2xl" /> : <FaPlus className="text-xl" />
                                             }
                                        </h6>
                                        { 
                                             idx === id && <div className='text-gray-600 px-4 pb-5 pt-3 border border-[#001D49] rounded-xl mb-2'>
                                                  <p>{item.a}</p>
                                             </div>
                                        }

                                   </li>

                              ))
                         }
                    </ul>
               </div>
          </section>
     )
}

export default Faqs


const faqs = [
     {
          q: "How can you help clients reduce their tax liability?          ",
          a: "Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus."
     },
     {
          q: "How do you help risk management?",
          a: "Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus."
     },
     {
          q: "What is the process for conducting an audit?",
          a: "Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus."
     },
     {
          q: "What is the process for filing business taxes?",
          a: "Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus."
     },
]