import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const ClientSector = ({ data }: any) => {
  console.log("🚀 ~ ClientSector ~ data:", data)
  return (
    <section className={` px-4 items-center py-10 pb-12`}>
      <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554] ">
        Our Client Sector
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
            {
                data?.map((item:any,id:number)=>(
                    <div className="px-2" key={id} >
                        <Image src={item?.image} alt={item?.title} width={600} className="w-full" height={300} />
                        <h2 className="font-semibold mt-2 text-xl text-center">{item?.title}</h2>
                    </div>
                ))
            }
        </Slider>
      </div>
    </section>
  );
};

export default ClientSector;

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
