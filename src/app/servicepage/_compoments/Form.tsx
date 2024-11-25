import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import React from 'react';
interface IconData {
  icon: string;
  description: string; // Hoặc kiểu cụ thể hơn nếu không phải là string
}

interface CurrentPageData {
  icons: IconData[];
}

interface ServicePage {
  currentPageData?: CurrentPageData; // `?` để cho phép giá trị undefined
}

const Form = ({ currentPageData }: ServicePage) => {
  const iconData = currentPageData?.icons || [
    { icon: 'icon1.png', description: 'House' },
    { icon: 'icon2.png', description: 'Off the Plan Land' },
    { icon: 'icon3.png', description: 'Commercial Building' },
  ];
  return (
    <div className='form flex flex-col justify-center items-center self-stretch pt-[120px] px-[80px] '>
      <div className='content flex flex-col items-center self-stretch'>
        <div className='interactive_form flex w-[712px] flex-col items-end gap-[40px] rounded-[16px]'>
          <div className='interactive_content flex p-[40px] flex-col items-start gap-[40px] rounded-[24px] bg-white'>
            <div className='head flex w-[632px] flex-col items-center gap-[24px]'>
              <p className='text-[#213459] desktopHeadlineSemiboldXL leading-[18px] text-center'>I want to...</p>
            </div>
            <div className='mask_form flex pb-[21px] justify-end items-center'>
              <div className='form flex items-start gap-[40px]'>
                <div className='form_a flex flex-col items-start gap-[27px]'>
                  <div className='form_a_content flex w-[632px] flex-col items-start gap-[24px] rounded-[24px] bg-white'>
                    <div className='what flex flex-col items-center gap-[16px] self-stretch'>
                      <div className='tab-quuote w-[398px] h-[49px]'>
                        <div className='list_tab_quuote flex items-center flex-shrink-0 w-[398px] h-[50px] p-[4px] rounded-full border border-[#76ABDC]'>
                          <div className='list_tag flex h-[46px] p-[12px_16px] justify-center items-center flex-1 bg-[#305FAC] rounded-[100px]'>
                            <p className='text-[#FFF] bodyRegM'>Buy</p>
                          </div>
                          <div className='list_tag flex h-[46px] p-[12px_16px] justify-center items-center flex-1'>
                            <p className='text-[#305FAC] bodyRegM'>Sell</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='type flex flex-col items-start gap-[16px] w-full'>
                      <p className='flex flex-col items-start gap-[16px] w-full desktopHeadlineSemiboldXS '>Property Type</p>
                      <div className='icon flex w-[632px] flex-col items-start gap-[16px]'>
                        <div className='icon_a flex items-center gap-[16px] w-full flex-wrap'>
                          {iconData.map((item, index) => (
                            <div key={index} className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                              <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                                <WrapperImage {...fillAttributesImageObject(item.icon)} alt='icon' className='' />
                                <span className='block text-[#305fac] bodyMedS leading-[16px]'>{item.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* <div className='icon_a flex items-center gap-[16px] w-full'>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[0].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] bodyMedS leading-[16px]'>House</span>
                            </div>
                          </div>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[1].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] bodyMedS leading-[16px]'>Off the Plan Land</span>
                            </div>
                          </div>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[2].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] bodyMedS leading-[16px]'>Commercial Building</span>
                            </div>
                          </div>
                        </div>

                        <div className='icon_b flex items-center gap-[16px] w-full'>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[3].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] text-center bodyMedS leading-[16px]'>Unit / Townhouse</span>
                            </div>
                          </div>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[4].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] text-center bodyMedS leading-[16px]'>Off the Plan Unit / Townhouse</span>
                            </div>
                          </div>
                          <div className='icon_quote flex w-[200px] h-[63px] justify-center items-center rounded-[8px] border border-[#76abdc] bg-white'>
                            <div className='content flex w-[200px] px-[16px] items-center gap-[8px] flex-shrink-0'>
                              <WrapperImage {...fillAttributesImageObject(currentPageData.icons[5].icon)} alt={'icon'} className='' />
                              <span className='block text-[#305fac] text-center bodyMedS leading-[16px]'>Land</span>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className='value flex justify-between items-start w-full'>
                      <div className='value_left flex flex-col items-start gap-[16px]'>
                        <p className='text-[#213459] desktopHeadlineSemiboldXS leading-[22px]'>Property Value</p>
                        <div className='list flex items-center gap-[12px] w-full'>
                          <div className='type flex px-[16px] py-[12px] justify-center items-center rounded-full border border-[#76abdc] bg-white'>
                            <p className='text-[#305fac] bodyRegM leading-[20px]'>Up to $1.5 M</p>
                          </div>
                          <div className='type flex px-[16px] py-[12px] justify-center items-center rounded-full border border-[#76abdc] bg-white'>
                            <p className='text-[#305fac] bodyRegM leading-[20px]'>Up to $2 M</p>
                          </div>
                          <div className='type flex px-[16px] py-[12px] justify-center items-center rounded-full border border-[#76abdc] bg-white'>
                            <p className='text-[#305fac] bodyRegM leading-[20px]'>Over $2 M</p>
                          </div>
                        </div>
                      </div>
                      <div className='value_right flex flex-col items-start gap-[16px]'>
                        <p className='text-[#213459] desktopHeadlineSemiboldXS leading-[22px]'>State</p>
                        <div className='list flex items-center gap-[12px] w-full'>
                          <div className='type flex w-[85px] px-[16px] py-[12px] justify-center items-center rounded-full border border-[#76abdc] bg-white'>
                            <p className='text-[#305fac] bodyRegM leading-[20px]'>QLD</p>
                          </div>
                          <div className='type flex w-[85px] px-[16px] py-[12px] justify-center items-center rounded-full border border-[#76abdc] bg-white'>
                            <p className='text-[#305fac] bodyRegM leading-[20px]'>VIC</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='cta flex justify-center items-center gap-[24px] w-full'>
              <div className='button_cta flex px-[24px] py-[12px] justify-center items-center rounded-full bg-gradient-to-r from-[#f5867c] to-[#ee3625]'>
                <div className='button_cta_content flex justify-center items-center gap-[4px]'>
                  <p className='text-white text-center mainCTA uppercase'>Next</p>
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
    </div>
  );
};

export default Form;
