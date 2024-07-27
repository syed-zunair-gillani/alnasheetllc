import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/pic (1).png',
  },

];

function ServicesCard({ service }: any) {
  return (

    <div className="flip-box rounded-xl overflow-hidden hover:shadow-xl">
      <div className="flip-box-inner">
        <div className="flip-box-front flex flex-col justify-center items-center">
          <div>
            <img src={service.image} alt={service.title} className='w-28 mx-auto' />
          </div>
          <div className='mt-3 px-3'>
            <h3 className='text-[23px] font-semibold'>{service.title}</h3>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        </div>
        <div className="flip-box-back flex justify-center flex-col items-center rounded-xl">
          <p>services info</p>
        </div>
      </div>
    </div>
  );
}

function ServicesCardContainer({heading}:any) {
  return (
    <div className={`container mx-auto px-4 items-center py-10 pt-10 ${!heading && 'pt-14 pb-16'}`}>
      {heading && <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554] ">Our Services</h2>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4'>
        {servicesData.map((service, idx) => (
          <ServicesCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesCardContainer;
