import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const testimonials = [
  {
    text: "Al Nasheet has the expertise and the ability to scale up our accounting function much more quickly than we could have accomplished if we chose to do it internally. So based on expertise, speed to-scale, and cost, the decision for us was no-brainer.",
    company: "REESHA INTERIORS LLC",
    author: "SAWSAN AL NABOLSI"
  },
  {
    text: "For many of our small and mid-size business clients, it is not cost effective to hire a CPA or full time staff to handle bookkeeping. Al Nasheet cost structure enables us to meet all the financial needs of our clients at a competitive rate. ",
    company: "Jawa Fadhoon",
    author: "SELMA  BENOMAR",
  },
  {
    text: "“I am very grateful to have the Al Nasheet team support my business in the functions of finance/accounting. The process and communication are smooth, I can count on fast response and turnaround for requests and the team is looking out for my best interest",
    company: "ELECTRIFIED TRADING FZC",
    author: "SAJID SALEEM",
  },
  {
    text: "The level of professionalism at Iqbalion just blew me away! Though they follow the remote working strategy, their strong emphasis on data security, willingness to listen, flexibility to quickly change and adapt was a game-changer for me.",
    company: "IDP Engineering Consultancy",
    author: "OMAR ZAHER",
  },
  

];
const Testimonials = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 h-auto w-full py-20">
      <div className='container mx-auto px-4'>
        <div>
          <h2 className='text-2xl text-blue-950 md:text-4xl lg:text-5xl font-bold'><span className='bg-blue-950 py-1 px-3 text-white'>Our</span> Testimonials</h2>
        </div>
        <Slider {...settings} className=''>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='text-center items-center justify-center p-4 mx-auto mt-10'>
              <div className=''>
                <p className='relative overflow-hidden p-6 pt-16 xl:pt-6 xl:pl-16 mb-5 xl:h-[220px] bg-white testimonial'>
                  {testimonial.text}
                  <span className='z-10 absolute top-2 left-2 border p-2 text-4xl w-9 h-9 rounded-full'>”</span>
                  <span className='absolute p-20 px-40 -top-10 -left-56 hidden qouteBg rotate-[135deg] bg-[#C6A02E]'/>
                </p>
                <p className='text-[20px]'>{testimonial.company}</p>
                <p className='text-[#FFBC00] text-[18px]'>{testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

