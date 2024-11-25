import React from 'react';
import styles from './NewsPart.module.scss';

const NewsPart = () => {
  return (
    <div className={styles.moduleWrapper}>
      <div className='flex flex-col items-center justify-center self-stretch px-[80px] py-[120px]'>
        <div className='new_content 1280:w-[1280px] flex flex-col items-start gap-[40px]'>
          <div className='new_content_head 1280:flex-row max-1280:gap-[24px] 1280:items-end flex w-full flex-col items-start justify-between'>
            <p className='desktopHeadlineSemiboldXL text-[#213459]'>Conveyancing News</p>
            <div className='hoverNewPartBtn head_cta_button flex items-center justify-center rounded-full border border-[#305fac] bg-white px-[24px] py-[12px] hover:border-transparent'>
              <div className='cta_button_content 1280:justify-end flex items-center justify-start gap-[4px]'>
                <p className='desktopMainCTA text-center uppercase text-[#305fac]'>All News</p>
              </div>
            </div>
          </div>
          <div className='new_content_new 1280:flex-row flex w-full flex-col items-center gap-[16px] '>
            <div className='new_detail hoverNewPart flex h-[197px] flex-1 items-center rounded-[16px] border border-[#77abdb] bg-white pb-[8px] pr-[28px] pt-0 hover:border-transparent'>
              <div className='new_detail_content  flex h-[189px] flex-col items-start justify-between p-[24px]'>
                <div className='detail_content flex w-full flex-col items-start gap-[16px] '>
                  <div className='content_date flex w-full items-center gap-[8px]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
                      <circle cx='5' cy='5' r='5' fill='#ED3525' />
                    </svg>
                    <div className='date flex items-center gap-[16px]'>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>June 11, 2024</p>
                      <i className='h-[1px] w-[8px] bg-[#2f2f2f]/95'></i>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>2 min read</p>
                    </div>
                  </div>
                  <p className='desktopHeadlineRegS line-clamp-3 w-[340px] overflow-hidden text-ellipsis text-[#16223b]'>A Comprehensive Guide to Conveyancing Fees in Victoria</p>
                </div>
                <div className=' desktopBodySemiboldM text-textColor group flex items-center gap-[8px]'>
                  <span className='desktopBodySemiboldM btnmore text-azure600'>
                    Read article{' '}
                    <span>
                      {' '}
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_6086_6342)'>
                          <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                        </g>
                      </svg>
                    </span>{' '}
                  </span>
                </div>
              </div>
            </div>
            <div className='new_detail hoverNewPart flex h-[197px] flex-1 items-center rounded-[16px] border border-[#77abdb] bg-white pb-[8px] pr-[28px] pt-0 hover:border-transparent'>
              <div className='new_detail_content flex h-[189px] flex-col items-start justify-between p-[24px]'>
                <div className='detail_content flex w-full flex-col items-start gap-[16px]'>
                  <div className='content_date flex w-full items-center gap-[8px]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
                      <circle cx='5' cy='5' r='5' fill='#ED3525' />
                    </svg>
                    <div className='date flex items-center gap-[16px]'>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>June 11, 2024</p>
                      <i className='h-[1px] w-[8px] bg-[#2f2f2f]/95'></i>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>2 min read</p>
                    </div>
                  </div>
                  <p className='desktopHeadlineRegS line-clamp-3 w-[340px] overflow-hidden  text-ellipsis text-[#16223b]'>A Comprehensive Guide to Conveyancing Fees in Queensland</p>
                </div>
                <div className=' desktopBodySemiboldM text-textColor group flex items-center gap-[8px]'>
                  <span className='desktopBodySemiboldM btnmore text-azure600'>
                    Read article{' '}
                    <span>
                      {' '}
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_6086_6342)'>
                          <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                        </g>
                      </svg>
                    </span>{' '}
                  </span>
                </div>
              </div>
            </div>
            <div className='new_detail hoverNewPart flex h-[197px] flex-1 items-center rounded-[16px] border border-[#77abdb] bg-white pb-[8px] pr-[28px] pt-0 hover:border-transparent'>
              <div className='new_detail_content flex h-[189px] flex-col items-start justify-between p-[24px]'>
                <div className='detail_content flex w-full flex-col items-start gap-[16px]'>
                  <div className='content_date flex w-full items-center gap-[8px]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
                      <circle cx='5' cy='5' r='5' fill='#ED3525' />
                    </svg>
                    <div className='date flex items-center gap-[16px]'>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>June 11, 2024</p>
                      <i className='h-[1px] w-[8px] bg-[#2f2f2f]/95'></i>
                      <p className='desktopBodyMedS text-[#2f2f2f]'>2 min read</p>
                    </div>
                  </div>
                  <p className='desktopHeadlineRegS line-clamp-3 w-[340px] overflow-hidden  text-ellipsis text-[#16223b]'>Cheapest Conveyancing in Queensland</p>
                </div>
                <div className=' desktopBodySemiboldM text-textColor group flex items-center gap-[8px]'>
                  <span className='desktopBodySemiboldM btnmore text-azure600'>
                    Read article{' '}
                    <span>
                      {' '}
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_6086_6342)'>
                          <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                        </g>
                      </svg>
                    </span>{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPart;
