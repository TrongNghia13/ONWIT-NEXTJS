import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import React from 'react';

interface IconData {
  icon: string;
  title: string;
  description: string; // Hoặc kiểu cụ thể hơn nếu không phải là string
}

interface CurrentPageData {
  ServicesProcess: IconData[];
}

interface ServicePage {
  currentPageData?: CurrentPageData; // `?` để cho phép giá trị undefined
}

const ServiceProcess = ({ currentPageData }: ServicePage) => {
  const iconData = currentPageData?.ServicesProcess || [
    {
      icon: 'path/to/icon1.png',
      alt: 'Final inspection icon',
      title: 'Final Inspection',
      description: 'Duis aute irure dolor in reprehenderit non proident.',
    },
  ];
  return (
    <div className='w-100 flex justify-center'>
      <div className='section flex w-[1440px] flex-col items-center justify-center rounded-[40px] bg-[#F4F8FB] p-[120px_80px_0px_80px]'>
        <div className='content flex flex-col items-center justify-center gap-[60px] py-[80px]'>
          <div className='head flex w-[1280px] flex-col items-center gap-[24px]'>
            <p className='desktopHeadlineSemiboldXL text-[#213459] text-center'>High-level Guide on the Service Process</p>
            <p className='desktopBodyRegL text-[#16223B] text-center'>With a team of highly skilled experts on hand, we work to give customers an understanding of the overall process.</p>
          </div>
          <div className='tab flex flex-col items-center justify-between w-[1064px] h-[281px] gap-[40px]'>
            <div className='tab_quuote w-[880px] h-[52px] flex-shrink-0 rouned-[100px]'>
              <div className='tab_list flex w-[880px] p-[2px] items-center rounded-[100px] border border-[#76ABDC]'>
                <div className='type_tag flex h-[48px] p-[12px_16px] justify-center items-center flex-1 rounded-[100px] bg-[#305FAC]'>
                  <p className='desktopBodyRegM  text-[#fff]'>Stage Task</p>
                </div>
                <div className='type_tag flex h-[48px] p-[12px_16px] justify-center items-center flex-1 rounded-[100px]'>
                  <p className='desktopBodyRegM  text-[#305FAC]'>Responsibilities for Ownit</p>
                </div>
                <div className='type_tag flex h-[48px] p-[12px_16px] justify-center items-center flex-1 rounded-[100px]'>
                  <p className='desktopBodyRegM  text-[#305FAC]'>Responsibilities for Client</p>
                </div>
              </div>
            </div>
            <div className='mask-columns flex items-center justify-end self-stretch'>
              <div className='mask_list flex items-start'>
                <div className='list_columns flex w-[1064px] items-center gap-[16px]'>
                  <div className='columns_left flex w-[524px] shrink-0 flex-col items-start gap-[40px]'>
                    {iconData.map((item, index) => (
                      <div key={index} className='feature flex items-start gap-[16px] self-stretch'>
                        <div className='icon flex h-[24px] w-[24px] items-center justify-center gap-[8px] rounded-full border border-[#213459]'>
                          <WrapperImage {...fillAttributesImageObject(item.icon)} alt={item.title || 'Descriptive icon'} className='' />
                        </div>
                        <div className='content flex flex-col justify-center items-start gap-[8px] flex-1'>
                          <p className='text-[#213459] desktopHeadlineSemiboldXS'>{item.title || 'Default Title'}</p>
                          <p className='desktopBodyRegM text-[#213459]'>{item.description || 'Default description text.'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='columns_right flex w-[524px] shrink-0 flex-col items-start gap-[40px]'>
                    {iconData.map((item, index) => (
                      <div key={index} className='feature flex items-start gap-[16px] self-stretch'>
                        <div className='icon flex h-[24px] w-[24px] items-center justify-center gap-[8px] rounded-full  border border-[#213459]'>
                          <WrapperImage {...fillAttributesImageObject(item.icon)} alt={item.title || 'Descriptive icon'} className='' />
                        </div>
                        <div className='content flex flex-col justify-center items-start gap-[8px] flex-1'>
                          <p className='text-[#213459] desktopHeadlineSemiboldXS'>{item.title || 'Default Title'}</p>
                          <p className='desktopBodyRegM text-[#213459] text-capitalize'>{item.description || 'Default description text.'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cta flex justify-center items-center gap-[24px] w-full mt-[32px]'>
            <div className='button_cta flex px-[24px] py-[12px] justify-center items-center rounded-full bg-gradient-to-r from-[#f5867c] to-[#ee3625]'>
              <div className='button_cta_content flex justify-center items-center gap-[4px]'>
                <p className='text-white text-center mainCTA uppercase'>Get an Instant Quote</p>
                <div className='icon flex w-[32px] justify-center items-center gap-[8px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' fill='white' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
