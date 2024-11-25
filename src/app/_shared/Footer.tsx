// 'use client';
import * as React from 'react';
import WrapperImage from '@/app/_shared/WrapperImage';
import images from '@/assets/images/image41.webp';
import { fillAttributesImageObject } from '@/lib/helper';
import styles from './Footer.module.scss';
import lawInstituteOfVictoria from '@/assets/images/victoriaLogo.webp';
import pextraLogo from '@/assets/images/PexaLogo.webp';
import qldLawLogo from '@/assets/images/QLDLawLogo.webp';
import Link from 'next/link';

interface FooterProps {
  footerData: any;
}

export default function Footer({ footerData }: FooterProps) {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center '>
        <div className='390:px-[24px] 390:pt-[0px] 390:pb-[60px] w-[1280px] '>
          <div className='bg-custom-radial 968:px-[80px] flex flex-col items-center justify-center gap-[32px] self-stretch rounded-[10px] px-[24px] '>
            <div className='section_banner 390:p-[32px] 1280:h-[250px] 1280:w-[1064px] 390:h-[294px] 390:w-full relative mx-auto flex  justify-center overflow-hidden rounded-[16px]'>
              <div className='content 1024:w-[1064px] 390:gap-[8px]  968:gap-[32px] 1024:gap-[32px] absolute inset-0 z-10 mx-auto flex flex-col items-center justify-center'>
                <div className='frame max-1024:w-[327px] flex flex-col items-start justify-center gap-[2px]'>
                  <div className='head flex w-full flex-col items-center gap-[2px]'>
                    <span className='390:mobileHeadlineBoldM 968:desktopDisplaySemiboldM 1024:desktopDisplaySemiboldM text-center text-white '>We’re Always here to Help!</span>
                  </div>
                  <p className='desktopBodyRegL 390:desktopBodyRegM w-full text-center  text-white'>Reach out to us, and our team will be happy to help with your conveyancing needs</p>
                </div>
                <div className='cta 960:px-[6px] 960:py-[3px] flex  w-full items-center justify-center gap-[24px]'>
                  <div className='button_cta_content flex items-center justify-end gap-[4px]'>
                    <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA'>
                      Get an Instant Quote
                      <div className='icon 390:w-full 1280:w-[32px] flex items-center justify-center gap-[8px] transition-colors group-hover:fill-[#ee3625]'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor' className='group-hover:fill-[#ee3625]'>
                          <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-azure600 mt-[144px] flex flex-col p-[80px]'>
        <div className='1280:w-[1280px] mx-auto flex flex-col gap-[32px]'>
          <div className='items-between 1440:flex-row 1440:items-start 1440:gap-[15px] flex flex-col items-center gap-[50px]'>
            <div className='1440:items-start flex w-[307px] flex-col items-center gap-[50px]'>
              <div className='h-[35px] w-[124.5px]'>
                <WrapperImage {...fillAttributesImageObject(footerData.LogoFooter.icon)} alt={'LogoFooter'} className={''} />
              </div>
              <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA'>Get an instant quote</span>
            </div>

            <div className='flex w-[956px] flex-col items-center gap-[32px]'>
              <div className=''>
                <div className='1440:grid-cols-2 1440:gap-[4px] max-1440:justify-center max-1440:text-center mb-[32px] grid items-center gap-[16px]'>
                  <text className='desktopHeadlineSemiboldS text-white'>
                    Download our Free buying <br />& selling guides
                  </text>
                  <div className='max-1440:gap-[16px] 1440:flex-row max-1440:items-center flex flex-col justify-end'>
                    <label className='sr-only '></label>
                    <input className='w-[331px] rounded-[10px] border bg-[#76ABDC] px-[12px] py-[8px] placeholder:text-[#FFF] ' type='email' placeholder='Email' />
                    <button className='hoverBTNFooter desktopBodyMedM   max-1440:p-[8px_12px] ml-[16px] h-[40px] w-[137px] rounded-full bg-[#FFF] text-[#305FAC]'>DOWNLOAD</button>
                  </div>
                </div>

                <div className='1440:w-[956px] h-[1px] bg-[#77ABDB] opacity-50'></div>
                <div className='1440:grid-cols-5 1440:gap-[12px] mt-[32px] grid grid-cols-2 grid-rows-[auto_auto] gap-[48px]'>
                  <div className='flex w-[165px] flex-col gap-[32px] pr-[24px] text-white'>
                    <p className=' desktopBodySemiboldM'>Services</p>
                    <ul className='flex flex-col gap-[24px]'>
                      <li key='buying'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Buying
                        </a>
                      </li>
                      <li key='selling'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Selling
                        </a>
                      </li>
                      <li key='property'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Property
                        </a>
                      </li>
                      <li key='property developers'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Property Developers
                        </a>
                      </li>
                      <li key='off-the plan'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Off-The Plan
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* column 2 */}
                  <div className='flex w-[165px] flex-col gap-[32px] pr-[24px] text-white'>
                    <p className='desktopBodySemiboldM '>Locations</p>
                    <ul className='flex flex-col gap-[24px]'>
                      <li key='queensland'>
                        <a className='desktopBodyMedS hover:opacity-0 ' href='#'>
                          Queensland
                        </a>
                      </li>
                      <li key='victoria'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Victoria
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* column 3 */}
                  <div className='flex w-[165px] flex-col gap-[32px] pr-[24px] text-white'>
                    <p className='desktopBodySemiboldM'>About Us</p>
                    <ul className='flex flex-col gap-[24px]'>
                      <li key='our story'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Our Story
                        </a>
                      </li>
                      <li key='our team'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Our Team
                        </a>
                      </li>
                      <li key='careers'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* column 4 */}
                  <div className='flex w-[165px] flex-col gap-[32px] pr-[24px] text-white'>
                    <p className='desktopBodySemiboldM'>Information Hub</p>
                    <ul className='flex flex-col gap-[24px] '>
                      <li key='referral-program '>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Referral Program
                        </a>
                      </li>
                      <li key='insights'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          Insights
                        </a>
                      </li>
                      <li key='FAQ'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          FAQ's
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* column 5 */}

                  <div className='flex w-[165px] flex-col gap-[32px] pr-[24px] text-white'>
                    <p className='desktopBodySemiboldM'>Contact Us</p>
                    <ul className='flex flex-col gap-[24px] '>
                      <li key='phone'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          (07) 3807 1522
                        </a>
                      </li>
                      <li key='phone2'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          1300 553 750
                        </a>
                      </li>
                      <li key='email'>
                        <a className='desktopBodyMedS hover:opacity-0' href='#'>
                          hello@Ownit.com.au
                        </a>
                      </li>
                      <li key='follow-us'>
                        <p className='desktopBodySemiboldM '>Follow Us</p>
                      </li>
                      <li key='social-media'>
                        <div className=' flex gap-[16px]'>
                          <Link href={'/'} className='hoverSocialIcon flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-[#FFF]'>
                            <svg width='8' height='16' viewBox='0 0 8 16' className='fill-current'>
                              <path d='M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z' />
                            </svg>
                          </Link>
                          <Link href={'/'} className=' hoverSocialIcon flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-[#FFF]'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                              <path
                                d='M7.00178 3.41031C5.01532 3.41031 3.41287 5.01315 3.41287 7.00008C3.41287 8.98701 5.01532 10.5899 7.00178 10.5899C8.98823 10.5899 10.5907 8.98701 10.5907 7.00008C10.5907 5.01315 8.98823 3.41031 7.00178 3.41031ZM7.00178 9.3335C5.7182 9.3335 4.66892 8.28665 4.66892 7.00008C4.66892 5.71351 5.71552 4.66667 7.00178 4.66667C8.28804 4.66667 9.33464 5.71351 9.33464 7.00008C9.33464 8.28665 8.28535 9.3335 7.00178 9.3335ZM11.5742 3.26326C11.5742 3.7286 11.1996 4.1006 10.737 4.1006C10.2745 4.1006 9.89989 3.72591 9.89989 3.26326C9.89989 2.8006 10.2745 2.42591 10.737 2.42591C11.1996 2.42591 11.5742 2.8006 11.5742 3.26326ZM13.9513 4.11269C13.8983 2.99131 13.6419 1.99751 12.8208 1.17896C12.0018 0.361764 11.0089 0.105256 9.88714 0.0488507C8.73178 -0.0162836 5.26841 -0.0162836 4.11239 0.0488507C2.99396 0.101898 2.00107 0.358406 1.17937 1.17695C0.358335 1.99549 0.105246 2.98862 0.0488542 4.11C-0.0169358 5.26563 -0.0169358 8.73051 0.0488542 9.88614C0.101889 11.0075 0.358335 12.0013 1.17937 12.8199C2.00107 13.6384 2.9906 13.8942 4.11239 13.9506C5.26774 14.0165 8.73178 14.0165 9.88714 13.9506C11.0083 13.8976 12.0018 13.6411 12.8202 12.8199C13.6385 12.0013 13.8943 11.0082 13.9507 9.88614C14.0165 8.73051 14.0165 5.26899 13.9507 4.11269H13.9513ZM12.4583 11.1264C12.2146 11.7388 11.7434 12.2102 11.1277 12.4573C10.2067 12.8225 8.02018 12.7386 7.00178 12.7386C5.98338 12.7386 3.79418 12.8199 2.87581 12.4573C2.26356 12.2135 1.79229 11.7421 1.54524 11.1264C1.18004 10.2051 1.26395 8.01806 1.26395 6.99941C1.26395 5.98077 1.18272 3.79105 1.54524 2.87245C1.78893 2.26006 2.2602 1.78867 2.87581 1.54157C3.79687 1.17628 5.98338 1.26021 7.00178 1.26021C8.02018 1.26021 10.2094 1.17896 11.1277 1.54157C11.74 1.78532 12.2113 2.2567 12.4583 2.87245C12.8235 3.79373 12.7396 5.98077 12.7396 6.99941C12.7396 8.01806 12.8242 10.2078 12.4583 11.1264Z'
                                fill='white'
                              />
                            </svg>
                          </Link>
                          <Link href={'/'} className='hoverSocialIcon flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-[#FFF]'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                              <path
                                d='M3.13391 13.9994H0.231978V4.65238H3.13455V13.9994H3.13391ZM1.68103 3.37785C0.753149 3.37785 0.000488281 2.60853 0.000488281 1.68061C0.000488281 0.752056 0.753149 0 1.68167 0C2.60954 0 3.3622 0.752695 3.3622 1.68061C3.3622 2.60853 2.6089 3.37722 1.68167 3.37722L1.68103 3.37785ZM13.9967 14H11.1005V9.44994C11.1005 8.36534 11.0787 6.97506 9.59132 6.97506C8.1039 6.97506 7.85131 8.15302 7.85131 9.37192V14H4.95193V4.65238H7.73556V5.92755H7.77649C8.16401 5.1934 9.11043 4.41833 10.5224 4.41833C13.4595 4.41833 13.9999 6.35282 13.9999 8.86543V14H13.9967Z'
                                fill='white'
                              />
                            </svg>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* column 6 for Mobile */}
                  <div className='1440:hidden flex w-full flex-col items-start'>
                    <span className='desktopBodySemiboldM text-nowrap text-[#FFF]'>Members of</span>
                    <div className='mt-[15px] flex w-full flex-col items-center justify-between gap-[24px]'>
                      <div className={'w-61px h: 50px relative '}>
                        <WrapperImage {...fillAttributesImageObject(footerData.imagesMember.icon)} alt={'imagesMember'} className={''} />
                      </div>
                      <div className={'w: 61px h: 50px relative mt-[8px]'}>
                        <WrapperImage {...fillAttributesImageObject(footerData.lawInstituteOfVictoria.icon)} alt={'lawInstituteOfVictoria'} className={''} />
                      </div>
                      <div className={'w: 61px h: 50px relative mt-[8px]'}>
                        <WrapperImage {...fillAttributesImageObject(footerData.pextraLogo.icon)} alt={'pextraLogo'} className={''} />
                      </div>
                      <div className='w: 61px h: 50px mt=[8px] relative'>
                        <WrapperImage {...fillAttributesImageObject(footerData.LawSociety.icon)} alt={'LawSociety'} className={''} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='1440:hidden 1440:w-[1280px] mt-[32px] h-[1px] bg-[#77ABDB] opacity-50'></div>
              </div>
            </div>
          </div>
          <div className='1440:block 1440:w-[1280px] hidden h-[1px] bg-[#77ABDB] opacity-50'></div>
          {/* members of */}
          <div className='1440:flex z-20 hidden w-full items-center gap-[35px] pl-[324px]'>
            <span className='desktopBodyMedXS text-nowrap text-[#FFF]'>Members of</span>
            <div className='flex w-full items-center justify-between'>
              <div className={'w-61px h: 50px relative '}>
                <WrapperImage {...fillAttributesImageObject(footerData.imagesMember.icon)} alt={'imagesMember'} className={''} />
              </div>
              <div className={'w: 61px h: 50px relative mt-[8px]'}>
                <WrapperImage {...fillAttributesImageObject(footerData.lawInstituteOfVictoria.icon)} alt={'lawInstituteOfVictoria'} className={''} />
              </div>
              <div className={'w: 61px h: 50px relative mt-[8px]'}>
                <WrapperImage {...fillAttributesImageObject(footerData.pextraLogo.icon)} alt={'pextraLogo'} className={''} />
              </div>
              <div className='w: 61px h: 50px mt=[8px] relative'>
                <WrapperImage {...fillAttributesImageObject(footerData.LawSociety.icon)} alt={'LawSociety'} className={''} />
              </div>
            </div>
          </div>
          <div className='1440:block 1440:w-[1280px] hidden h-[1px] bg-[#77ABDB] opacity-50'></div>
          <div className=''>
            <div className='1440:flex-row max-1440:gap-[60px] flex flex-col items-center justify-between'>
              <p className='desktopBodyMedS text-[#FFF] '>© 2024 Ownit Conveyancing</p>
              <div className='desktopBodyMedS flex space-x-4 text-[#FFF]'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms Of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
