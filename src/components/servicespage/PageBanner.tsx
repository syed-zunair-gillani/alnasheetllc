import React from 'react';
import Link from 'next/link'
function PageBanner({data}:any) {
  return (
    <section className='-mt-7'>
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("${data?.background_image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center conatiner mx-auto px-4">
          <h1 className="text-4xl font-bold">
            <div dangerouslySetInnerHTML={{ __html: data.title }}/>
          </h1>
          <div className='flex gap-2 mt-2 justify-center'>
            <Link href="/" className="text-blue-400">Home</Link>
            <span>/</span>
            <span><div dangerouslySetInnerHTML={{ __html: data.title }}/></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
