import React from 'react';
import Link from 'next/link'
function PageBanner() {
  return (
    <section className='-mt-7'>
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/unit.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center conatiner mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <div className='flex gap-2 justify-center'>
            <Link href="/" className="text-blue-400">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
