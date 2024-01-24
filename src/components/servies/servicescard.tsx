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

    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front flex flex-col justify-center items-center">
          <div>
            <img src={service.image} alt={service.title} className='w-40 mx-auto' />
          </div>
          <div className='mt-3'>
            <h3 className='text-[23px] font-bold'>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
        <div className="flip-box-back flex justify-center flex-col items-center">
          <p>services info</p>
        </div>
      </div>
    </div>
  );
}

function ServicesCardContainer() {
  return (
    <div className='container mx-auto px-4 items-center py-10'>
      <div className='text-center text-5xl font-bold '>
        <h2 className='text-blue-950'>
          <span className='bg-blue-950 py-1 px-3 text-white'>Our</span> Services
        </h2>
      </div>
      <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-8'>
        {servicesData.map((service, idx) => (
          <ServicesCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesCardContainer;
