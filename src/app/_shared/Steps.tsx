'use client';

import React, { useState } from 'react';
import styles from './Steps.module.scss';
import WrapperImage from './WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';

interface HomePage {
  currentPageData: any;
}

const Steps = ({ currentPageData }: HomePage) => {
  const mockSteps = [
    {
      id: 1,
      title: 'Claim Your Free Quote + Contract Review',
      description:
        "Simply fill out the quick form below and we'll get back to you with a no-strings-attached quote for fast, reliable conveyancing. Plus, for this month we'll also review your contract for FREE (valued at $500).",
    },
    {
      id: 2,
      title: "We'll guide you through your settlement",
      description: 'Our experienced team ensures a smooth and hassle-free process from start to finish.',
    },
    {
      id: 3,
      title: 'Finalize Your Settlement with Confidence',
      description: 'Trust our team to provide expert advice and seamless service.',
    },
    {
      id: 4,
      title: 'Finalize Your Settlement with Confidence',
      description: 'Trust our team to provide expert advice and seamless service.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSteps = mockSteps.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSteps - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSteps - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.moduleWrapper}>
      <div className='1440:w-[1440px] m-auto flex flex-col items-start py-[120px]'>
        <div className='steps 1440:flex-row flex flex-col items-center justify-between gap-[24px] self-stretch'>
          <div className='content flex flex-grow flex-col items-start justify-center gap-[32px] pl-[80px]'>
            <div className='head 968:text-left 968:items-start flex flex-col gap-[32px] self-stretch text-center'>
              <div className='head_top text-azure900 mobileDisplaySemiboldS 968:desktopHeadlineSemiboldXL self-stretch'>How it works</div>
              <div className='head_bot text-azure900 desktopBodyRegM '>Save on contract reviews, drafting, and conveyancing with our discounts for buyers and sellers.</div>
            </div>
            <div className='arrows 1440:flex hidden items-center gap-[16px]'>
              <div className={`slider_left hoverArrow flex h-[40px] w-[40px] items-center justify-center gap-[10px] rounded-full border border-[#76abdc]`} onClick={handlePrev}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                  <path d='M3.825 9.50024L9.425 15.1002L8 16.5002L0 8.50024L8 0.500244L9.425 1.90024L3.825 7.50024H16V9.50024H3.825Z' fill='#76ABDC' />
                </svg>
              </div>
              <div className='slider_center flex items-center gap-[16px]'>
                {mockSteps.map((_, index) => (
                  <svg key={index} xmlns='http://www.w3.org/2000/svg' width='8' height='9' viewBox='0 0 8 9' fill='none'>
                    <circle cx='4' cy='4.50024' r='4' fill={index === currentIndex ? '#EE3625' : '#305FAC'} opacity={index === currentIndex ? '1' : '0.2'} />
                  </svg>
                ))}
              </div>
              <div className={`hoverArrow slider_right flex h-[40px] w-[40px] items-center justify-center gap-[10px] rounded-full border border-[#76abdc]`} onClick={handleNext}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                  <path d='M12.175 9.50024H0V7.50024H12.175L6.575 1.90024L8 0.500244L16 8.50024L8 16.5002L6.575 15.1002L12.175 9.50024Z' fill='#76ABDC' />
                </svg>
              </div>
            </div>
          </div>
          <div className='MASK flex items-center justify-end pl-[30px] '>
            <div className='list flex items-center gap-[24px] px-[80px] '>
              {/* {mockSteps.map((item) => (
                <>
                  <div className='list_steps flex items-center rounded-[16px]'>
                    <div className='decription h-[400px] w-[416px] bg-white'>
                      <div className='bg hoverFeatureService  h-[400px] w-[416px] shrink-0 bg-[#f4f8fb] rounded-[16px]'>
                        <div className='content flex h-[400px] w-[416px] shrink-0 flex-col items-start justify-between p-[32px]'>
                          <div className='icon flex w-[60px] items-center justify-center rounded-full bg-white py-[13px]'>
                            <p className='desktopHeadlineBoldM self-stretch text-center text-[#305fac]'>{item.id}</p>
                          </div>
                          <div className='contetn  flex flex-col items-start gap-[24px] self-stretch'>
                            <div className='content flex flex-col items-start gap-[24px] self-stretch'>
                              <div className='content_top self-stretch text-azure900 desktopHeadlineSemibolM '>{item.title}</div>
                              <div className='content_bot self-stretch text-[#16223b] desktopbodyRegM'>{item.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='photo h-[400px] w-[324px] bg-white '>
                      <WrapperImage {...fillAttributesImageObject(currentPageData.steps[0].icon)} alt={'steps1'} className='rounded-r-[16px]' />
                    </div>
                  </div>
                </>
              ))} */}
              <div className='current-step flex items-center rounded-[16px]'>
                <div className='description h-[400px] w-[416px] rounded-[16px] bg-white'>
                  <div className='content flex h-full flex-col items-start justify-between rounded-[16px] bg-[#f4f8fb] p-[32px]'>
                    <div className='icon flex w-[60px]  items-center justify-center rounded-full bg-white py-[13px]'>
                      <p className='mobileHeadlineBoldM 960:desktopHeadlineBoldM text-center text-[#305fac] '>{mockSteps[currentIndex].id}</p>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                      <h2 className='text-azure900 mobileHeadlineSemiboldS 968:desktopHeadlineSemibolM'>{mockSteps[currentIndex].title}</h2>
                      <p className='desktopbodyRegM text-[#16223b]'>{mockSteps[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
                <div className='photo 968:block hidden h-[400px] w-[324px] bg-white'>
                  <WrapperImage {...fillAttributesImageObject(currentPageData.steps[currentIndex].icon)} alt={`step-${currentIndex}`} className='rounded-r-[16px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
