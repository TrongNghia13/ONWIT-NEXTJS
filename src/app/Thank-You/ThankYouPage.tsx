import * as React from 'react';
import { PolygonImage } from '@/app/_shared/PolygonImage';
import { fillAttributesImageObject } from '@/lib/helper';
import WrapperImage from '@/app/_shared/WrapperImage';
import { CommonButton } from '@/app/_shared/CommonButton';

export const ThankYouPage = ({ currentPageData }: any) => {
  return (
    <div className={'mainContainer'}>
      <div className='1024:flex-row 1024:gap-[124px] 1024:my-[80px] my-[100px] flex flex-col items-center justify-between gap-[32px]'>
        <div className='left 1024:pl-[108px] flex flex-col  items-center justify-center text-[#213459]'>
          <WrapperImage className={'mb-[32px]'} alt={'Signature'} {...fillAttributesImageObject(currentPageData.banner.icon)} />
          <div className={'displayBoldM mb-[24px]'}>{currentPageData.banner.name}</div>
          <div className={'headlineSemiboldM mb-[24px]'}>{currentPageData.banner.description}</div>
          <div className={'bodyRegM mb-[32px]'}>{currentPageData.banner.subDescription}</div>

          <CommonButton type={'blue'} link={currentPageData.banner.ctaUrl} text={currentPageData.banner.ctaName} />
        </div>
        <div className='right flex w-[524px] max-w-full items-center justify-center'>
          <PolygonImage imageObject={currentPageData.banner.file.data} />
          {/*{JSON.stringify(currentPageData.banner.file.data)}*/}
        </div>
      </div>
    </div>
  );
};
