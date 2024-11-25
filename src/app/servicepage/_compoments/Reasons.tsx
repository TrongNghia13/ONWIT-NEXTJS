import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import React from 'react';
interface IconData {
  icon: string;
  title: string;
  description: string; // Hoặc kiểu cụ thể hơn nếu không phải là string
}

interface CurrentPageData {
  IconServices: IconData[];
}

interface ServicePage {
  currentPageData?: CurrentPageData; // `?` để cho phép giá trị undefined
}

const Reasons = ({ currentPageData }: ServicePage) => {
  const iconData = currentPageData?.IconServices || [
    {
      icon: '',
      alt: 'Icon for guaranteed turnaround times',
      title: 'Guaranteed Turnaround Times with Every Contact',
      description: 'Having your own home means gaining a peace of mind and comfort that renting doesn’t always come with.',
    },
  ];
  return (
    <div className='w-100 flex justify-center'>
      <div className='reasons flex flex-col items-start w-[1440px] py-[120px] px-[80px]'>
        <div className='content flex flex-col items-center gap-[60px] self-stretch'>
          <div className='content_content flex flex-col items-center gap-[32px]'>
            <p className='desktopHeadlineSemiboldXL w-[1068px] text-[#213459] text-center'>Why choose Ownit Conveyancing to sell your commercial property?</p>
          </div>
          <div className='card_list flex justify-center items-start w-[1280px] h-[350px] gap-[16px]'>
            {iconData.map((item, index) => (
              <div key={index} className='services w-[308px] h-[350px] flex-shrink-0 rounded-[12px] bg-[#EEF5FF]'>
                <div className='feature flex w-[308px] h-[350px] p-[32px] flex-col justify-between items-start flex-shrink-0'>
                  <WrapperImage {...fillAttributesImageObject(item.icon)} alt={item.title || 'Descriptive icon'} className='' />
                  <div className='content flex flex-col items-start gap-[24px] self-stretch'>
                    <div className='content_content flex flex-col items-start gap-[24px] self-stretch'>
                      <p className='text-[#213459] desktopHeadlineSemiboldXS'>{item.title || 'Default Title'}</p>
                      <p className='text-[#213459] leading-[1.75] text-edge-cap desktopBodyRegM'>{item.description || 'Default description text.'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='bnt_cta_4 flex justify-center items-center px-[24px] py-[12px] rounded-full border border-[#305FAC] bg-white'>
            <div className='content flex justify-end items-center gap-[4]'>
              <p className='mainCTA text-[#305FAC] text-center'>Free Contract Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
