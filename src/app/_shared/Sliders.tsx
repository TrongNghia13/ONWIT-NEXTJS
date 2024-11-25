'use client';

import React, {ReactNode, useEffect, useRef, useState} from 'react';
import SwiperCore, {Swiper as SwiperType} from 'swiper';
import {Autoplay, Grid, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SwiperProps} from 'swiper/swiper-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './Sliders.module.scss';

type MASlidersProps = {
  items: ReactNode[];
  options?: SwiperProps;
};

SwiperCore.use([Pagination, Navigation, Autoplay, Grid]);

const Sliders: React.FC<MASlidersProps> = ({items, options}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (!options?.autoplay) {
      swiperRef.current?.autoplay?.stop();
    } else {
      swiperRef.current?.autoplay?.start();
    }
  }, [options]);

  useEffect(() => {
    const swiper = swiperRef.current;

    const updateArrowsState = () => {
      if (!swiper) return;
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    };

    if (swiper) {
      swiper?.slideTo(0);
      updateArrowsState();
      swiper.on('slideChange', updateArrowsState);
    }

    return () => {
      if (swiper) swiper.off('slideChange', updateArrowsState);
    };
  }, [items]);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
      <div className={styles.moduleWrapper}>
        <Swiper {...options}
                onSwiper={(swiper: any) => (swiperRef.current = swiper)}>
          {items.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-[16px] navigation mt-60px justify-end">
          <div className={`cursor-pointer ${isPrevDisabled ?
              'swiper-button-disabled !cursor-not-allowed text-mainColor opacity-[0.5]' :
              'text-mainColor hover:text-icon'}`} onClick={goPrev}
               aria-disabled={isPrevDisabled}>
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.87501 0.80835H58.1252C58.8866 0.80835 59.5002 1.42199 59.5002 2.18336V58.4335C59.5002 59.1949 58.8866 59.8085 58.1252 59.8085H1.87501C1.11364 59.8085 0.5 59.1949 0.5 58.4335V41.0551C1.95155 41.6967 3.55476 42.0585 5.24377 42.0585C11.7324 42.0585 16.9938 36.7971 16.9938 30.3084C16.9938 23.8198 11.7324 18.5584 5.24377 18.5584C3.55476 18.5584 1.95155 18.9202 0.5 19.5617V2.18336C0.5 1.42199 1.11365 0.80835 1.87501 0.80835Z" fill="white" stroke="currentColor"/>
              <path d="M39.6064 19.3083L28.9998 29.915L39.6064 40.5216" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={`cursor-pointer ${isNextDisabled ?
              'swiper-button-disabled !cursor-not-allowed text-mainColor opacity-[0.5]' :
              'text-mainColor hover:text-icon'}`} onClick={goNext}
               aria-disabled={isNextDisabled}>
            <svg width="77" height="61" viewBox="0 0 77 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1346 58.453L60.1346 40.9875C61.6971 41.8125 63.3258 42.0929 65.2195 42.0929C71.432 42.0929 76.7158 36.5881 76.7158 30.3756C76.7158 24.1631 71.432 18.4371 65.2195 18.4371C63.332 18.4371 61.7034 18.7175 60.1346 19.5425L60.1346 2.18069C60.1346 1.14319 59.1628 0.308349 58.1253 0.308349L1.87531 0.308346C0.837807 0.308346 0.000312769 1.14585 0.000312723 2.18335L0.000310264 58.4334C0.000310219 59.4708 0.837804 60.3083 1.8753 60.3083L58.1253 60.3083C59.1628 60.3083 60.1346 59.4905 60.1346 58.453Z" fill="white" stroke="currentColor"/>
              <path d="M26.6064 40.5215L37.213 29.9149L26.6064 19.3083" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
  );
};

export default Sliders;
