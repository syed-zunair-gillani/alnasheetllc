import React from 'react'
import Slider from 'react-slick';

function logo() {
  return (
    <main className='container mx-auto px-4'>
      <div className='py-10'>
        <Slider {...settings} className=''>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/ajman-freezone.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/dafz.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/dafz.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/saif-zone.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/dsoa.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/dsoa.png" alt="" /></figure>
          <figure className='h-[100px] !flex justify-center items-center flex-col'><img src="/jafza.png" alt="" /></figure>
        </Slider>
      </div>
    </main>
  )
}

export default logo


const settings = {
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};