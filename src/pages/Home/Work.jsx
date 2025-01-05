import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';



import { Grid, Pagination, Autoplay } from 'swiper/modules';




export const Work = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-frame'>
        <div className='work-section'>
          <div className='work-title section-title'>
            Work
          </div>
          <div class="work-wrapper">
            <div class="work-row">
              <div class="work-card" id="graphic-work">
                Graphic
              </div>
              <div class="work-card" id="web-work">
                Web
              </div>
            </div>
            <div class="work-row">
              <div class="work-card" id="sketch-work">
                Sketches
              </div>
              <div class="work-card" id='github-work'>
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
