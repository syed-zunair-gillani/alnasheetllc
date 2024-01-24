import React from "react";
import Image from 'next/image'
function partner() {
  return (
    <section className="bg-[#006f93] w-full h-auto py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-col-2 md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-10 items-center">
            <Image src="/Partner-1.png" width={500} height={500} alt="Picture of the author" className=" hover:animate-bounce" />
            <Image src="/Partner-2.png" width={500} height={500} alt="Picture of the author" className="hover:animate-bounce" />
            <Image src="/Partner-3.png" width={500} height={500} alt="Picture of the author" className="hover:animate-bounce" />
            <Image src="/Partner-4.png" width={500} height={500} alt="Picture of the author" className="hover:animate-bounce"/>
            <Image src="/Partner-5.png" width={500} height={500} alt="Picture of the author" className="hover:animate-bounce"/>
            <Image src="/Partner-6.png" width={500} height={500} alt="Picture of the author" className="hover:animate-bounce"/>
            </div>
            <div className="text-white">
                <h4 className="text-blue-300 py-4">PARTNER</h4>
                <h2 className="lg:text-[48px] md:text-[40px] text-[32px] font-[800] leading-[60px] pb-4">Get to Know Our Partners</h2>
                <p>ugue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin erat tempus.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default partner;
