import * as React from 'react';

import metaTagService from '@/services/metaTagService';
import { NotFoundLog } from '@/app/_shared/NotFoundLog';
import { CommonButton } from '@/app/_shared/CommonButton';
import { fillAttributesImageObject, getPageSetting } from '@/lib/helper';
import WrapperImage from '@/app/_shared/WrapperImage';

export async function generateMetadata(props: MetadataProps) {
  return await metaTagService.getByPath('/404');
}

export default async function NotFound() {
  const currentPageData = await getPageSetting('not-found-page');

  return (
    <main className='bg-primarySpace50 darkGradientAtTop relative z-[1]'>
      <NotFoundLog />
      <div className='mainContainer'>
        <div className={'1024:flex-row 1024:gap-[158px] 1024:mb-[278px] mb-[60px] mt-[112px] flex flex-col-reverse items-start items-center justify-start gap-[32px]'}>
          <div className='left 1024:w-auto 1024:pl-[75px] 1024:items-start flex w-full flex-col items-center'>
            <WrapperImage {...fillAttributesImageObject(currentPageData.banner.icon)} alt={currentPageData.banner.name} />
          </div>
          <div className='right 1024:w-auto 1024:items-start flex w-full flex-col items-center text-[#213459]'>
            <h1 className={'displayBoldM mb-[24px]'}>{currentPageData.banner.name}</h1>
            <div className={'headlineSemiboldM mb-[24px]'}>{currentPageData.banner.description}</div>
            <div className={'bodyRegM mb-[32px]'}>{currentPageData.banner.subDescription}</div>
            <CommonButton type={'blue'} link={currentPageData.banner.ctaUrl} text={currentPageData.banner.ctaName} />
          </div>
        </div>
      </div>
    </main>
  );
}
