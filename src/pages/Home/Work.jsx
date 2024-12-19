import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';



import { Grid, Pagination , Autoplay} from 'swiper/modules';




export const Work = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-frame'>
            <div className='work-section'>
                <div className='work-title section-title'>
                  Work
                </div>
                
            </div>
        </div>
    </div>
  )
}
