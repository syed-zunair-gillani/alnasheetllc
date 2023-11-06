import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },
  {
    id: 1,
    title: 'Audit & Assurance',
    description: 'Your financial statements will carry more.',
    image: '/2.webp',
  },

];

function ServicesCard({ service }: any) {
  return (
    <>
      <div className='w-full !bg-cover rounded-xl overflow-hidden !bg-no-repeat h-[320px]' style={{ background: `url(${service.image})` }}>
        <div className='relative h-full group w-full'>
          <div className='h-full absolute -bottom-[250px] group-hover:bottom-0 text-white transition-all duration-500 ease-in-out w-full bg-[#172554]/70 group-hover:bg-[#172554] border-l-[6px] p-5 border-[#C6A02E]'>
            <h6 className='text-center font-semibold text-lg'>{service?.title}</h6>
            <p className='text-center mt-7'>{service.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ServicesCardContainer() {
  return (
    <div className='max-w-[1000px] mx-auto px-4 items-center py-10 pt-16'>
      <div className='text-center text-5xl font-bold '>
        <h2 className='lg:text-[42px] text-[32px] font-[600] text-blue-950'><span className='px-2 py-2 bg-blue-950 text-[#C6A02E]'>Our</span> Services</h2>
      </div>
      <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-5 lg:gap-10'>
        {servicesData.map((service, idx) => (
          <ServicesCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesCardContainer;
