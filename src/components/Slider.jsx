import React from 'react';
import { Carousel } from 'antd';
import slide2 from '../assets/img/slider2.avif';
import slide3 from '../assets/img/slider3.avif';  
import slide4 from '../assets/img/slider4.avif';
import slide5 from '../assets/img/slider5.avif';
import slide6 from '../assets/img/slider6.avif';
import slide7 from '../assets/img/Slider7.avif';
import slide8 from '../assets/img/Slider8.avif';
import slide9 from '../assets/img/Slider9.avif';
import slide10 from '../assets/img/Slider10.avif';
import slide11 from '../assets/img/Slider11.avif';
import slide12 from '../assets/img/Slider12.avif';
import slide13 from '../assets/img/Slider13.avif';
import slide14 from '../assets/img/Slider14.avif';
import Try from '../assets/img/try.png'

const Slider = () => (
  <div className="bg-[#f4f4f4] py-3">
    {/* Main Container: Flexbox use kiya hai side-by-side karne ke liye */}
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-3 px-2">
      
      {/* LEFT SIDE: Carousel (Slider) */}
      <div className="w-full md:w-[75%] lg:w-[80%] overflow-hidden rounded-md shadow-sm">
        <Carousel 
          autoplay 
          autoplaySpeed={3000} 
          arrows 
          infinite 
          className="main-slider"
        >
          {[slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14].map((img, index) => (
            <div key={index}>
              <div className="h-[300px] md:h-[340px] lg:h-[380px] w-full">
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-fill md:object-cover" 
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* RIGHT SIDE: App Banner (Jaisa image 333.jpg mein hai) */}
      <div className="hidden md:block w-[25%] lg:w-[20%]">
        <div className="h-full rounded-md overflow-hidden shadow-sm transition-transform hover:scale-[1.01] cursor-pointer">
          <img 
            src={Try} 
            alt="Try Daraz App" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

    </div>
  </div>
);

export default Slider;