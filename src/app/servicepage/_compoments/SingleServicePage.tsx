import React from 'react';
import styles from './SingleServicePage.module.scss';
import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import MaskedImage from '@/app/_shared/MaskedPentagonImage';
interface IconData {
  icon: string;
  title: string;
}

interface CurrentPageData {
  ServicesFeatures: IconData[];
}

interface ServicePage {
  currentPageData?: CurrentPageData; // `?` để cho phép giá trị undefined
}

const SingleServicePage = ({ currentPageData }: ServicePage) => {
  const iconData = currentPageData?.ServicesFeatures || [
    {
      icon: '',
      title: 'Efficient conveyancing for residential and commercial properties ',
    },
  ];
  const renderItems = [];

  for (let i = 0; i < 2; i++) {
    renderItems.push(
      <div key={i} className='feature flex items-start gap-[16px] self-stretch'>
        <div className='icon flex h-[24px] min-w-[24px] items-center justify-center gap-[10px] rounded-[100px] border border-[#213459]'>
          <WrapperImage {...fillAttributesImageObject(iconData[0].icon)} alt={'icon'} className='' />
        </div>
        <p className='text-[#213459] desktopBodyMedM '>Efficient conveyancing for residential and commercial properties</p>
      </div>
    );
  }
  return (
    <div className='section flex w-full flex-col items-center gap-[80px] px-[80px]'>
      <div className='intro flex w-[1280px] flex-col items-center gap-[20px]'>
        <p className='text-[#213459] text-center desktopHeadlineSemiboldXL w-[766px]'>Buying Commercial Property</p>
        <p className='text-[#16223B] text-center desktopBodyRegL w-[660px]'>With a team of highly skilled experts on hand, we work to give customers an understanding of the overall process.</p>
      </div>
      <div className='content flex h-[600px] items-center justify-center gap-[16px] self-stretch rounded-[40px] bg-[#F4F8FB] px-[92px]'>
        <div className='content_img flex items-center gap-[10px]'>
        <MaskedImage className='col-span-2' width='400'>
            <WrapperImage {...fillAttributesImageObject(iconData[1].icon)} alt='' className='object-cover' />
          </MaskedImage>
        </div>
        <div className='content_content flex w-[648px] flex-col items-start gap-[20px]'>
          <div className='content_top flex flex-col items-start gap-[32px] self-stretch pl-[32px]'>
            <div className='content_top_head flex flex-col items-start gap-[8px] self-stretch'>
              <p className='text-[#305FAC] desktopBodyRegL '>
                Settle It. Ownit. Love It<i className='text-[#ED3525] desktopBodyRegL '>.</i>
              </p>

              <p className='text-[#213459] desktopHeadlineSemiboldL '>What is buying commercial property?</p>
            </div>
            <p className='text-[#213459] desktopBodyMedM"'>
              Ownit Conveyancing offers seamless, stress-free conveyancing services in Queensland, Victoria, and NSW with over 40 years of experience. We provide efficient online conveyancing for both
              residential and commercial properties with a low, fixed rate and no hidden fees.
            </p>
          </div>
          <div className='contetn_bot flex flex-col items-start gap-[20px] self-stretch pl-[32px]'>
            <div className='content_bot_head flex flex-col items-start gap-[8px] self-stretch'>
              <p className='text-[#213459] desktopHeadlineSemiboldXS '>Features</p>
            </div>
            <div className='feature list flex items-start gap-[32px] self-stretch'>
              <div className='feature_list_a flex flex-1 flex-col items-start gap-[32px]'>{renderItems}</div>
              <div className='feature_list_b flex flex-1 flex-col items-start gap-[32px]'>{renderItems}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;
