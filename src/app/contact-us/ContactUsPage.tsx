import * as React from 'react';
import ContactUsForm from '@/app/contact-us/_c/ContactUsForm';
import FAQ from '../_shared/FAQ';
import WrapperImage from '../_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import Location from './_c/Location';
import MaskedImage from '../_shared/MaskedPentagonImage';

interface ContactUsPage {
  currentPageData: any;
}

export const ContactUsPage = ({ currentPageData }: ContactUsPage) => {
  return (
    <div>
      <section className='h-[600px] w-[1440px] flex-shrink-0'>
        <div className='h-[435px]  rounded-b-[40px] bg-[#77AADA]'>
          <div className='mainContainer grid grid-cols-2'>
            <div className='relative top-[30%]'>
              <p className='desktopHeadlineSemiboldXS mb-[14px] text-[#213459]'>{currentPageData.subName}</p>
              <h1 className='desktopDisplaySemiboldM mr-[80px] text-white'>{currentPageData.subDescription}</h1>
            </div>

            <WrapperImage {...fillAttributesImageObject(currentPageData.icon)} alt={currentPageData.key} className=' relative h-[600px] w-[656px] rounded-[20px]'></WrapperImage>
          </div>
        </div>

        <div className='mainContainer'>
          <div className='desktopBodyRegL mt-[32px] flex w-[632px] flex-col'>
            <p className='mb-[16px] text-balance'>{currentPageData.description}</p>
            <div className='z-10 flex justify-center gap-[24px]'>
              <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA gap-[16px]'>Get an Instant Quote</span>
              <span className='btn btn--bgWhite btn--bgHoverBlue  destopMainCTA border-textColor border-[2px] '>Free Contract Review</span>
            </div>
          </div>
        </div>
      </section>

      <div className={'flex flex-row justify-center bg-white py-[80px] text-center '}>
        <div className=''>
          <ContactUsForm currentPageData={currentPageData} />
        </div>
      </div>
      <Location />
      <FAQ />
    </div>
  );
};
