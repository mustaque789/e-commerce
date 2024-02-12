import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
// iterating main carousel 
  const items= mainCarouselData.map((item)=> <img className='cursor-pointer'   // iterating images as loop and putting inside <img src=""
     role='presentation'
     src={item.image}
     alt='' />
    )

// passing into alice carousel
  return (
    <AliceCarousel
        mouseTracking
        items={items}          // passing iterated image component inside aliceCarousel
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
  }


export default MainCarousel;
