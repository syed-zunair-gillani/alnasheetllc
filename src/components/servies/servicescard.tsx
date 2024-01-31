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
    <div className='container mx-auto px-4 items-center py-10 pt-12'>
      {heading && <div className='text-center'>
        <h2 className='lg:text-[42px] text-[32px] font-[600] text-blue-950'>
          <span className='bg-blue-950 text-[#C6A02E] md:py-2 py-1 px-3'>Our</span> Services
        </h2>
      </div>}
      <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4'>
        {servicesData.map((service, idx) => (
          <ServicesCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesCardContainer;
