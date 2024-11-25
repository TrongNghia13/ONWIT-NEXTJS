'use client';
import * as React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import { useState } from 'react';

interface HeaderProps {
  headerData: any;
  currentPageData?: CurrentPageData;
}
interface Property {
  img: string;
  title: string;
  description: string;
}
interface Location {
  img: string;
  title: string;
  description: string;
}
interface CurrentPageData {
  Location: Location[];
  Property: Property[];
}
export default function Header({ headerData }: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const toggleMenu1 = () => {
    setOpenMenu1(!openMenu1);
    if (openMenu2) setOpenMenu2(false);
  };

  const toggleMenu2 = () => {
    setOpenMenu2(!openMenu2);
    if (openMenu1) setOpenMenu1(false);
  };
  const Property = [
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Selling Residential Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Buying Residential Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  const Propertys = [
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Stamp Duty Calculator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'QLD Government Fee Calculator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Free Buying & Selling Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  const Location = [
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Selling Residential Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      title: 'Selling Residential Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <>
      <div className={styles.moduleWrapper}>
        <div className={'fixed z-[100] w-[100vw]'}>
          <div className='absolute z-[20] w-full pt-[20px] text-[#305FAC]'>
            <div className='1280:mx-autos mx-[24px] flex justify-center'>
              <div className='1280:w-[1328px] flex h-[68px] w-full items-center justify-between rounded-[12px] bg-white px-[24px] py-[16px] shadow-[16px]'>
                <Link href={'/'}>
                  <WrapperImage {...fillAttributesImageObject(headerData.logo)} alt={'Logo Ownit'} />
                </Link>
                <div className='menu 1280:flex 390:hidden '>
                  <div className='desktopBodySemiboldM relative z-[2] flex items-center justify-start gap-[16px] text-nowrap '>
                    {headerData.menuItems.map((item: any, index: number) => {
                      return (
                        <Link
                          key={index}
                          onClick={() => {
                            if (item.link === 'MEGA_SERVICES') toggleMenu1();
                            else if (item.link === 'MEGA_INFORMATION_HUB') toggleMenu2();
                          }}
                          href={item.link === 'MEGA_SERVICES' || item.link === 'MEGA_INFORMATION_HUB' ? '' : item.link}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className='contact ml-[32px] flex items-center gap-[24px]'>
                    <div className='contact__phone desktopBodySemiboldM flex max-w-[168px] cursor-pointer items-center rounded-[100px] bg-[#F4F8FB] px-[16px] py-[6px]'>
                      <div className=''>
                        <div className=' relative mr-[8px] h-[24px] w-[24px] bg-[#F4F8FB]'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <mask id='mask0_6735_11549' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                              <rect width='24' height='24' fill='#D9D9D9' />
                            </mask>
                            <g mask='url(#mask0_6735_11549)'>
                              <path
                                d='M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z'
                                fill='#ED3525'
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className='text-nowrap'>
                        <Link href={headerData.hotline.split('|')[1].substring(1)}>{headerData.hotline.split('|')[0]}</Link>
                      </div>
                    </div>
                    <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA'>
                      Get an Instant Quote
                      <div className='px-[8px]'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
                          <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' fill='' />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
                <div className='1280:hidden'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <mask id='mask0_807_27005' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                      <rect width='24' height='24' fill='#D9D9D9' />
                    </mask>
                    <g mask='url(#mask0_807_27005)'>
                      <path d='M2.00006 20V17.3333H22.0001V20H2.00006ZM2.00006 13.3333V10.6667H22.0001V13.3333H2.00006ZM2.00006 6.66667V4H22.0001V6.66667H2.00006Z' fill='#305EAB' />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`submenu-items fixed z-[50] flex h-[427px] w-full shrink-0 transform flex-col items-start gap-[10px] rounded-b-[40px] bg-white px-[80px] pb-[60px] pt-[120px] transition-all duration-500 ease-in-out ${
          openMenu1 ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        }`}
      >
        <div className='Content self-strech mx-auto flex w-[1280px] items-start justify-between gap-[24px]'>
          <div className='Menu-list flex w-[216px] flex-col items-start gap-[32px]'>
            <div className='Head w-full gap-[8px] self-stretch '>
              <p className='desktopHeadlineSemiboldS text-[#213459]'>Explore our services</p>
            </div>
            <div className='Menu-list flex flex-col items-start justify-center gap-[24px] self-stretch'>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#213459]'>
                    Selling
                    <span className='Line h-[1px] w-[57px] bg-[#213459]'></span>
                  </div>
                </div>
                <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='10' height='17' viewBox='0 0 10 17' fill='none'>
                    <path d='M1.85669 16.5L0.5 15.08L6.78662 8.5L0.5 1.92L1.85669 0.5L9.5 8.5L1.85669 16.5Z' fill='#305FAC' />
                  </svg>
                </span>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Buying
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Property Transfers
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Property Developer
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Off the Plan
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='Divider h-[256px] w-[1px] bg-[#305FAC]'></div>
          <div className='submenu-items flex w-[848px] items-start gap-[16px] self-stretch'>
            <div className='By-Property flex h-[248px] flex-1 shrink-0 basis-0 flex-col items-start justify-between'>
              <div className='Head flex items-start gap-[8px] self-stretch'>
                <p className='desktopBodyMedM text-[#213459]'>By Property</p>
              </div>
              {Property.map((item, index) => (
                <div key={index} className='Sub-Menu-Item flex h-[103px] items-center self-stretch rounded-[12px] bg-[#F4F8FB]'>
                  <div className='Content flex flex-1 shrink-0 basis-0 items-center self-stretch px-[12px] py-[12px]'>
                    <div className='flex h-[79px] w-[151px] items-center justify-center'>
                      <WrapperImage {...fillAttributesImageObject(item.img)} alt={item.title} className='flex h-[79px] items-center justify-center rounded-[6px] ' />
                    </div>
                    <div className='Content flex flex-1 flex-col items-start justify-center gap-[12px] self-stretch pl-[16px]'>
                      <p className='desktopBodySemiboldS w-[221px] text-[#213459]'>{item.title}</p>
                      <p className='desktopBodyRegS text-[#213459]'>{item.description}</p>
                    </div>
                    <span className='flex w-[32px] items-center justify-center gap-[10px]'>
                      <svg className='h-[16px] w-[16px] shrink-0' xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                        <path d='M12.175 9.5H0V7.5H12.175L6.575 1.9L8 0.5L16 8.5L8 16.5L6.575 15.1L12.175 9.5Z' fill='#213459' />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className='By-Location flex h-[248px] w-[416px] shrink-0 flex-col items-start justify-between'>
              <div className='Head flex items-start gap-[8px] self-stretch'>
                <p className='desktopBodyMedM text-[#213459]'>By Location</p>
              </div>
              {Location.map((item, index) => (
                <div key={index} className='Sub-Menu-Item flex h-[103px] items-center self-stretch rounded-[12px] bg-[#F4F8FB]'>
                  <div className='Content flex flex-1 shrink-0 basis-0 items-center self-stretch px-[12px] py-[12px]'>
                    <WrapperImage {...fillAttributesImageObject(item.img)} alt={item.title} className='flex h-[79px] w-[151px] items-center justify-center rounded-[6px]' />
                    <div className='Content flex flex-1 shrink-0 basis-0 flex-col items-start justify-center gap-[12px] self-stretch px-[16px] py-[16px]'>
                      <p className='desktopBodySemiboldS w-[221px] text-[#213459]'>{item.title}</p>
                      <p className='desktopBodyRegS text-[#213459]'>{item.description}</p>
                    </div>
                    <span className='flex w-[32px] items-center justify-center gap-[10px]'>
                      <svg className='h-[16px] w-[16px] shrink-0' xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                        <path d='M12.175 9.5H0V7.5H12.175L6.575 1.9L8 0.5L16 8.5L8 16.5L6.575 15.1L12.175 9.5Z' fill='#213459' />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Information_Hub-items fixed z-[50] flex h-[427px] w-full shrink-0 transform flex-col items-start gap-[10px] rounded-b-[40px] bg-white px-[80px] pb-[60px] pt-[120px] transition-all duration-500 ease-in-out ${
          openMenu2 ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        }`}
      >
        <div className='Content self-strech mx-auto flex w-[1280px] items-start justify-between gap-[24px]'>
          <div className='Menu-list flex w-[216px] flex-col items-start gap-[32px]'>
            <div className='Head w-full gap-[8px] self-stretch '>
              <p className='desktopHeadlineSemiboldS text-[#213459]'>Explore Information Hub</p>
            </div>
            <div className='Menu-list flex flex-col items-start justify-center gap-[24px] self-stretch'>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Referral Program
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <div className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    Insights
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </div>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
              <div className='CTA-link flex items-center'>
                <div className='Content flex flex-col items-start gap-[6px]'>
                  <p className='desktopBodySemiboldM text-center text-[#305FAC]'>
                    FAQ's
                    <span className='Line h-[1px] w-[57px] bg-[#305FAC]'></span>
                  </p>
                  <span className='Icon flex w-[24px] items-center justify-end gap-[10px]'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='Divider h-[256px] w-[1px] bg-[#305FAC]'></div>
          <div className='submenu-items flex w-[848px] flex-col items-end gap-[16px]'>
            <div className='Head flex items-start gap-[8px] self-stretch'>
              <p className='desktopBodyMedM text-[#213459]'>Tools</p>
            </div>
            <div className='List flex items-center gap-[16px]'>
              {Propertys.map((item, index) => (
                <div key={index} className='menu_item relative h-[207px] w-[272px]'>
                  <div className='photo h-[207px] w-[272px] flex-shrink-0 rounded-[16px] bg-white'>
                    <WrapperImage {...fillAttributesImageObject(item.img)} alt={item.title} className='h-[225px] w-[314px] shrink-0 rounded-[16px]' />
                  </div>
                  <div className='content absolute bottom-0 left-0 right-0 flex items-start pb-[24px] pl-[24px] pr-0 pt-0'>
                    <p className='desktopHeadlineSemiboldS w-[200px] text-center text-[#FFF]'>{item.title}</p>
                    <div className='icon flex w-[32px] shrink-0 items-center justify-center gap-[10px]'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                        <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' fill='white' />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
