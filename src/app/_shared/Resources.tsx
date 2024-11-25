import React from 'react';
import styles from './Resources.module.scss';
import WrapperImage from './WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
interface HomePage {
  currentPageData?: any;
}
const Resources = ({ currentPageData }: HomePage) => {
  return (
    <div className={styles.moduleWrapper}>
      <div className='flex items-center justify-center self-stretch p-[120px_80px]'>
        <div className='content 1280:h-[590px] 1280:w-[1280px] mx-auto flex items-center gap-[16px] self-stretch'>
          <div className='1280:flex photo_content hidden h-[590px] w-[632px] items-center justify-end self-stretch bg-[#eef5ff]'>
            <WrapperImage {...fillAttributesImageObject(currentPageData.servicesImg[1].icon)} alt={'resources photo'} className='h-[590px] w-[632px] rounded-[12px] bg-cover bg-no-repeat' />
          </div>
          <div className='link_content 1024:items-start flex flex-[1_0_0] flex-col items-center gap-[40px] pl-[40px]'>
            <div className='link_content_head 1280:text-left flex flex-col items-start gap-[12px] self-stretch text-center'>
              <span className='desktopBodyRegL self-stretch overflow-hidden text-[20px] text-[#77abdb]'>Resources.</span>
              <p className='desktopHeadlineSemiboldXL self-stretch text-[#213459]'>Conveyancing Solutions</p>
            </div>

            <div className='link_content_list flex flex-col items-start gap-[12px] '>
              <div className='list_resource hoverLinkResource max-[1024px]:gap[24px] 1024:h-[112px] 1024:w-[592px] mx-auto flex w-[327px] items-center justify-center rounded-[12px] border border-[rgba(118,171,220,0.3)] bg-white'>
                <div className='list_resource_detail 1024:w-[592px] flex w-[327px] flex-shrink-0 items-center gap-[24px] p-[16px]'>
                  <div className='1024:block icon hidden h-[70px] w-[70px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                      <rect width='70' height='70' rx='35' fill='white' />
                      <rect width='70' height='70' rx='35' fill='#FCD7D3' fill-opacity='0.2' />
                      <path
                        d='M48.0786 15H27.3089C26.4604 15 25.7695 15.6909 25.7695 16.5394V53.4606C25.7695 54.3091 26.4604 55 27.3089 55H52.6907C53.5392 55 54.2301 54.3091 54.2301 53.4606V21.1515L48.0786 15Z'
                        fill='white'
                      />
                      <path d='M48.0788 15H47.3091V21.9212H54.2303V21.1515L48.0788 15Z' fill='#FCD7D3' />
                      <path
                        d='M25.7695 24.2303V16.5394C25.7695 15.6909 26.4604 15 27.3089 15H48.0786L54.2301 21.1515V53.4606C54.2301 54.3091 53.5392 55 52.6907 55H27.3089C26.4604 55 25.7695 54.3091 25.7695 53.4606V51.1515'
                        stroke='#EE3625'
                        stroke-linejoin='round'
                      />
                      <path d='M51.9213 21.9214H47.3091V17.3032' stroke='#EE3625' stroke-linejoin='round' />
                      <path d='M14.9999 49.6182H33.4605V26.5394L14.9999 26.5394L14.9999 49.6182Z' fill='white' />
                      <path d='M14.9999 33.4609H33.4605V26.5397L14.9999 26.5397V33.4609Z' fill='#76ABDC' />
                      <path d='M14.9999 49.6182H33.4605V26.5394L14.9999 26.5394L14.9999 49.6182Z' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4606 33.4609H15' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4606 38.8423H15' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4606 44.2305H21.1516' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M27.309 49.6125V33.4609' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M21.1516 49.6125V33.4609' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M35.3879 33.4487H48.4607' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M35.3879 37.2974H42.3092' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M35.3879 29.6064H48.4607' stroke='#EE3625' stroke-miterlimit='10' />
                      <path
                        d='M46.9211 41.1396L48.4605 42.679H49.2302V43.4487L50.7696 44.9881L49.2302 46.5275V47.2972H48.4605L46.9211 48.8366L45.3878 47.2972H44.6181V46.5275L43.0787 44.9881L44.6181 43.4487V42.679H45.3878L46.9211 41.1396Z'
                        fill='#76ABDC'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                    </svg>
                  </div>
                  <div className='1024:hidden icon h-[60px] w-[60px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                      <rect width='60' height='60' rx='30' fill='white' />
                      <path opacity='0.5' d='M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54Z' fill='#FCD7D3' />
                      <path
                        d='M40.463 14H23.8472C23.1684 14 22.6157 14.5527 22.6157 15.2315V44.7685C22.6157 45.4473 23.1684 46 23.8472 46H44.1527C44.8315 46 45.3842 45.4473 45.3842 44.7685V18.9212L40.463 14Z'
                        fill='white'
                      />
                      <path d='M40.4631 14H39.8474V19.537H45.3843V18.9212L40.4631 14Z' fill='#FCD7D3' />
                      <path
                        d='M22.6157 21.3842V15.2315C22.6157 14.5527 23.1684 14 23.8472 14H40.463L45.3842 18.9212V44.7685C45.3842 45.4473 44.8315 46 44.1527 46H23.8472C23.1684 46 22.6157 45.4473 22.6157 44.7685V42.9212'
                        stroke='#EE3625'
                        stroke-linejoin='round'
                      />
                      <path d='M43.5371 19.5372H39.8474V15.8426' stroke='#EE3625' stroke-linejoin='round' />
                      <path d='M14 41.6946H28.7685L28.7685 23.2316L14 23.2316L14 41.6946Z' fill='white' />
                      <path d='M14 28.7688L28.7685 28.7688V23.2318H14V28.7688Z' fill='#76ABDC' />
                      <path d='M14 41.6946H28.7685L28.7685 23.2316L14 23.2316L14 41.6946Z' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7686 28.7688H14.0001' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7686 33.0739H14.0001' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7686 37.3842H18.9213' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M23.8472 41.69V28.7688' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M18.9213 41.69V28.7688' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M30.3105 28.7592H40.7686' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M30.3105 31.8382H35.8474' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M30.3105 25.6853H40.7686' stroke='#EE3625' stroke-miterlimit='10' />
                      <path
                        d='M39.537 34.912L40.7685 36.1435H41.3842V36.7592L42.6157 37.9907L41.3842 39.2223V39.838H40.7685L39.537 41.0695L38.3103 39.838H37.6945V39.2223L36.463 37.9907L37.6945 36.7592V36.1435H38.3103L39.537 34.912Z'
                        fill='#76ABDC'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                    </svg>
                  </div>
                  <div className='content hoverLinkResource 1024:flex-col 1024:items-start flex  flex-[1_0_0] items-center justify-between gap-[16px]'>
                    <div className='content flex flex-col items-start gap-[16px] self-stretch'>
                      <p className='mobileBodySemiboldM 1024:desktopHeadlineSemiboldXS text-[#213459]'>QLD Government Fee Calculator</p>
                      <p className='1024:block desktopBodyRegMLead hidden overflow-hidden text-[#213459]'>Our ensures customers understand the entire process.</p>
                    </div>
                    <div className='content text-azure600 1024:block'>
                      <span className=' desktopBodySemiboldM btnmore text-azure600 flex items-center gap-[8px]'>
                        Find more
                        <span className='flex items-center'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                              <rect width='24' height='24' fill='#D9D9D9' />
                            </mask>
                            <g mask='url(#mask0_6086_6342)'>
                              <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='list_resource hoverLinkResource max-[1024px]:gap[24px] 1024:h-[112px] 1024:w-[592px] mx-auto flex w-[327px] items-center justify-center rounded-[12px] border border-[rgba(118,171,220,0.3)] bg-white'>
                <div className='list_resource_detail 1024:w-[592px] flex w-[327px] flex-shrink-0 items-center gap-[24px] p-[16px]'>
                  <div className='1024:block icon hidden h-[70px] w-[70px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                      <rect width='70' height='70' rx='35' fill='white' />
                      <rect width='70' height='70' rx='35' fill='#FCD7D3' fill-opacity='0.2' />
                      <path
                        d='M48.04 14.8252H27.2703C26.4219 14.8252 25.731 15.5161 25.731 16.3646V53.2858C25.731 54.1343 26.4219 54.8252 27.2703 54.8252H52.6522C53.5006 54.8252 54.1916 54.1343 54.1916 53.2858V20.9767L48.04 14.8252Z'
                        fill='white'
                      />
                      <path d='M48.04 14.8252H47.2703V21.7464H54.1916V20.9767L48.04 14.8252Z' fill='#FCD7D3' />
                      <path
                        d='M25.731 24.0555V16.3646C25.731 15.5161 26.4219 14.8252 27.2703 14.8252H48.04L54.1916 20.9767V53.2858C54.1916 54.1343 53.5006 54.8252 52.6522 54.8252H27.2703C26.4219 54.8252 25.731 54.1343 25.731 53.2858V50.9767'
                        stroke='#EE3625'
                        stroke-linejoin='round'
                      />
                      <path d='M51.8885 21.7466H47.2703V17.1284' stroke='#EE3625' stroke-linejoin='round' />
                      <path d='M14.9673 49.4434H33.4279V26.3646L14.9673 26.3646L14.9673 49.4434Z' fill='white' />
                      <path d='M14.9673 33.2861H33.4279V26.3649L14.9673 26.3649V33.2861Z' fill='#76ABDC' />
                      <path d='M14.9673 49.4434H33.4279V26.3646L14.9673 26.3646L14.9673 49.4434Z' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4218 33.2861H14.9612' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4218 38.6675H14.9612' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4217 44.0557H21.1187' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M27.2703 49.4377V33.2861' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M21.1187 49.4377V33.2861' stroke='#EE3625' stroke-miterlimit='10' />
                      <path
                        d='M39.9612 37.8984C41.4474 37.8984 42.6521 36.6937 42.6521 35.2075C42.6521 33.7214 41.4474 32.5166 39.9612 32.5166C38.4751 32.5166 37.2703 33.7214 37.2703 35.2075C37.2703 36.6937 38.4751 37.8984 39.9612 37.8984Z'
                        stroke='#305FAC'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M48.4218 44.8257C46.937 44.8257 45.7309 43.6196 45.7309 42.1348C45.7309 40.6499 46.937 39.4438 48.4218 39.4438C49.9067 39.4438 51.1127 40.6499 51.1127 42.1348C51.1127 43.6196 49.9067 44.8257 48.4218 44.8257Z'
                        stroke='#305FAC'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path d='M38.8096 44.8257L49.5793 32.5166' stroke='#305FAC' stroke-width='1.5' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='1024:hidden icon h-[60px] w-[60px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                      <rect width='60' height='60' rx='30' fill='white' />
                      <path opacity='0.5' d='M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54Z' fill='#FCD7D3' />
                      <path
                        d='M40.4631 14H23.8473C23.1686 14 22.6158 14.5527 22.6158 15.2315V44.7685C22.6158 45.4473 23.1686 46 23.8473 46H44.1528C44.8316 46 45.3843 45.4473 45.3843 44.7685V18.9212L40.4631 14Z'
                        fill='white'
                      />
                      <path d='M40.4631 14H39.8473V19.537H45.3843V18.9212L40.4631 14Z' fill='#FCD7D3' />
                      <path
                        d='M22.6158 21.3842V15.2315C22.6158 14.5527 23.1686 14 23.8473 14H40.4631L45.3843 18.9212V44.7685C45.3843 45.4473 44.8316 46 44.1528 46H23.8473C23.1686 46 22.6158 45.4473 22.6158 44.7685V42.9212'
                        stroke='#EE3625'
                        stroke-linejoin='round'
                      />
                      <path d='M43.5419 19.5371H39.8473V15.8426' stroke='#EE3625' stroke-linejoin='round' />
                      <path d='M14.0049 41.6946H28.7734L28.7734 23.2316L14.0049 23.2316L14.0049 41.6946Z' fill='white' />
                      <path d='M14.0049 28.7688L28.7734 28.7688V23.2319H14.0049V28.7688Z' fill='#76ABDC' />
                      <path d='M14.0049 41.6946H28.7734L28.7734 23.2316L14.0049 23.2316L14.0049 41.6946Z' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7685 28.7688H14' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7685 33.0739H14' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.7684 37.3842H18.926' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M23.8473 41.69V28.7688' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M18.926 41.69V28.7688' stroke='#EE3625' stroke-miterlimit='10' />
                      <path
                        d='M34.0001 32.4585C35.189 32.4585 36.1528 31.4947 36.1528 30.3058C36.1528 29.1168 35.189 28.153 34.0001 28.153C32.8112 28.153 31.8474 29.1168 31.8474 30.3058C31.8474 31.4947 32.8112 32.4585 34.0001 32.4585Z'
                        stroke='#305FAC'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M40.7685 38.0002C39.5806 38.0002 38.6158 37.0354 38.6158 35.8475C38.6158 34.6596 39.5806 33.6947 40.7685 33.6947C41.9564 33.6947 42.9212 34.6596 42.9212 35.8475C42.9212 37.0354 41.9564 38.0002 40.7685 38.0002Z'
                        stroke='#305FAC'
                        stroke-width='1.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path d='M33.0788 38.0003L41.6945 28.153' stroke='#305FAC' stroke-width='1.5' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='content hoverLinkResource 1024:flex-col 1024:items-start flex flex-[1_0_0] items-center justify-between gap-[16px]'>
                    <div className='content flex flex-col items-start gap-[16px] self-stretch'>
                      <p className='mobileBodySemiboldM 1024:desktopHeadlineSemiboldXS text-[#213459]'>Stamp Duty Calculator</p>
                      <p className='1024:block desktopBodyRegMLead hidden overflow-hidden text-[#213459]'>Our ensures customers understand the entire process.</p>
                    </div>
                    <div className='content text-azure600 1024:block'>
                      <span className=' desktopBodySemiboldM btnmore text-azure600 flex items-center gap-[8px]'>
                        Find more
                        <span className='flex items-center'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                              <rect width='24' height='24' fill='#D9D9D9' />
                            </mask>
                            <g mask='url(#mask0_6086_6342)'>
                              <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='list_resource hoverLinkResource max-[1024px]:gap[24px] 1024:h-[112px] 1024:w-[592px] mx-auto flex w-[327px] items-center justify-center rounded-[12px] border border-[rgba(118,171,220,0.3)] bg-white'>
                <div className='list_resource_detail 1024:w-[592px] flex w-[327px] flex-shrink-0 items-center gap-[24px] p-[16px]'>
                  <div className='1024:block icon hidden h-[70px] w-[70px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                      <rect width='70' height='70' rx='35' fill='white' />
                      <rect width='70' height='70' rx='35' fill='#FCD7D3' fill-opacity='0.2' />
                      <path
                        d='M19.7205 54.9998V41.5948C18.0559 41.5948 16 39.5334 16 37.8743V30.4277C16 28.4599 18.6678 25.9575 21.2143 25.9575H27.1727C29.4877 25.9575 32.3869 28.0686 32.3869 31.1718V37.8743C32.3869 39.5389 30.3255 41.5948 28.6664 41.5948V54.9998H19.7316H19.7205Z'
                        fill='#76ABDC'
                      />
                      <path
                        d='M42.0604 54.9998V41.5948C40.5722 41.5948 38.3398 39.5334 38.3398 37.8743V30.4277C38.3398 28.4599 41.0076 25.9575 43.5541 25.9575H49.5125C51.8275 25.9575 54.7268 28.0686 54.7268 31.1718V37.8743C54.7268 39.5389 52.4944 41.5948 51.0062 41.5948V54.9998H42.0714H42.0604Z'
                        fill='white'
                      />
                      <path
                        d='M24.1906 23.4939C26.186 23.4939 27.9112 21.8623 27.9112 19.845V18.6489C27.9112 16.637 26.186 15 24.1906 15C22.1953 15 20.4701 16.6315 20.4701 18.6489V19.845C20.4701 21.8568 22.1953 23.4939 24.1906 23.4939Z'
                        fill='#76ABDC'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M19.7205 41.5948C18.0559 41.5948 16 39.5334 16 37.8743V31.1718C16 28.0741 18.8993 25.9575 21.2143 25.9575H27.1727C29.7192 25.9575 32.3869 29.1985 32.3869 31.1718'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                      <path d='M19.7205 54.9999V31.1719' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M32.3814 35.6362V37.8686C32.3814 39.5332 30.32 41.5891 28.6609 41.5891V54.9941' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M24.1907 41.5952V55.0002' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M31.6373 33.4043H24.1907' stroke='white' stroke-miterlimit='10' />
                      <path d='M34.6138 33.4043H33.1255' stroke='#305FAC' stroke-miterlimit='10' />
                      <path
                        d='M46.5305 23.4939C44.5352 23.4939 42.81 21.8623 42.81 19.845V18.6489C42.81 16.637 44.5352 15 46.5305 15C48.5259 15 50.2511 16.6315 50.2511 18.6489V19.845C50.2511 21.8568 48.5259 23.4939 46.5305 23.4939Z'
                        fill='white'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M50.9951 41.5948C52.6597 41.5948 54.7157 39.5334 54.7157 37.8743V31.1718C54.7157 28.0741 51.8164 25.9575 49.5014 25.9575H43.543C40.9965 25.9575 38.3287 29.1985 38.3287 31.1718'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path d='M50.9952 54.9999V31.1719' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M38.3398 35.6362V37.8686C38.3398 39.5332 40.5722 41.5891 42.0604 41.5891V54.9941' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M46.5305 41.5952V55.0002' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M39.084 33.4043H46.5306' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M43.5486 37.1302L47.2747 33.4041L43.5486 29.6836' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M27.1671 37.1302L23.4465 33.4041L27.1671 29.6836' stroke='white' stroke-miterlimit='10' />
                      <path d='M36.102 33.4043H37.5957' stroke='#305FAC' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='1024:hidden icon h-[60px] w-[60px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                      <rect width='60' height='60' rx='30' fill='white' />
                      <path opacity='0.5' d='M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54Z' fill='#FCD7D3' />
                      <path
                        d='M17.9764 46V35.276C16.6448 35.276 15 33.6268 15 32.2996V26.3423C15 24.7681 17.1342 22.7662 19.1714 22.7662H23.9381C25.7901 22.7662 28.1095 24.455 28.1095 26.9376V32.2996C28.1095 33.6312 26.4604 35.276 25.1331 35.276V46H17.9853H17.9764Z'
                        fill='#76ABDC'
                      />
                      <path
                        d='M35.8483 46V35.276C34.6577 35.276 32.8719 33.6268 32.8719 32.2996V26.3423C32.8719 24.7681 35.0061 22.7662 37.0433 22.7662H41.81C43.662 22.7662 45.9814 24.455 45.9814 26.9376V32.2996C45.9814 33.6312 44.1956 35.276 43.005 35.276V46H35.8571H35.8483Z'
                        fill='white'
                      />
                      <path
                        d='M21.5525 20.7953C23.1488 20.7953 24.529 19.4901 24.529 17.8762V16.9193C24.529 15.3098 23.1488 14.0002 21.5525 14.0002C19.9563 14.0002 18.5761 15.3054 18.5761 16.9193V17.8762C18.5761 19.4857 19.9563 20.7953 21.5525 20.7953Z'
                        fill='#76ABDC'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M17.9764 35.276C16.6448 35.276 15 33.6268 15 32.2996V26.9376C15 24.4594 17.3194 22.7662 19.1714 22.7662H23.9381C25.9753 22.7662 28.1095 25.359 28.1095 26.9376'
                        stroke='#305FAC'
                        stroke-miterlimit='10'
                      />
                      <path d='M17.9764 45.9998V26.9374' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M28.1051 30.5091V32.295C28.1051 33.6267 26.456 35.2714 25.1287 35.2714V45.9954' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M21.5525 35.2761V46.0001' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M27.5098 28.7233H21.5525' stroke='white' stroke-miterlimit='10' />
                      <path d='M29.891 28.7233H28.7004' stroke='#305FAC' stroke-miterlimit='10' />
                      <path
                        d='M39.4244 20.7953C37.8282 20.7953 36.448 19.4901 36.448 17.8762V16.9193C36.448 15.3098 37.8282 14.0002 39.4244 14.0002C41.0207 14.0002 42.4008 15.3054 42.4008 16.9193V17.8762C42.4008 19.4857 41.0207 20.7953 39.4244 20.7953Z'
                        fill='white'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M42.9961 35.276C44.3278 35.276 45.9725 33.6268 45.9725 32.2996V26.9376C45.9725 24.4594 43.6531 22.7662 41.8011 22.7662H37.0344C34.9972 22.7662 32.863 25.359 32.863 26.9376'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path d='M42.9962 45.9998V26.9374' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M32.8719 30.5091V32.295C32.8719 33.6267 34.6577 35.2714 35.8483 35.2714V45.9954' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M39.4244 35.2761V46.0001' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.4672 28.7233H39.4245' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M37.0389 31.7041L40.0198 28.7233L37.0389 25.7468' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M23.9337 31.7041L20.9572 28.7233L23.9337 25.7468' stroke='white' stroke-miterlimit='10' />
                      <path d='M31.0816 28.7233H32.2765' stroke='#305FAC' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='content hoverLinkResource 1024:flex-col 1024:items-start flex flex-[1_0_0] items-center justify-between gap-[16px]'>
                    <div className='content flex flex-col items-start gap-[16px] self-stretch'>
                      <p className='mobileBodySemiboldM 1024:desktopHeadlineSemiboldXS text-[#213459]'>Referral Program</p>
                      <p className='1024:block desktopBodyRegMLead hidden overflow-hidden text-[#213459]'>Our ensures customers understand the entire process.</p>
                    </div>
                    <div className='content text-azure600 1024:block'>
                      <span className=' desktopBodySemiboldM btnmore text-azure600 flex items-center gap-[8px]'>
                        Find more
                        <span className='flex items-center'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                              <rect width='24' height='24' fill='#D9D9D9' />
                            </mask>
                            <g mask='url(#mask0_6086_6342)'>
                              <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='list_resource hoverLinkResource max-[1024px]:gap[24px] 1024:h-[112px] 1024:w-[592px] mx-auto flex w-[327px] items-center justify-center rounded-[12px] border border-[rgba(118,171,220,0.3)] bg-white'>
                <div className='list_resource_detail 1024:w-[592px] flex w-[327px] flex-shrink-0 items-center gap-[24px] p-[16px]'>
                  <div className='1024:block icon hidden h-[70px] w-[70px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                      <rect width='70' height='70' rx='35' fill='white' />
                      <rect width='70' height='70' rx='35' fill='#FCD7D3' fill-opacity='0.2' />
                      <path d='M22.9441 45.4385L21.76 46.3272' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M25.762 48.3311L24.8477 49.5009' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M29.2245 50.3892L28.6449 51.7548' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M33.1016 51.479L32.8967 52.9501' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M37.1284 51.5244L37.3083 53.0005' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M41.0306 50.5205L41.5802 51.8962' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M44.5378 48.5317L45.4272 49.7217' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M47.4158 45.7051L48.5799 46.6189' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M50.4086 42.8379C51.218 41.7685 51.6626 40.3978 51.6626 38.982C51.6626 37.5661 51.218 36.1954 50.4086 35.126' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M52.5668 31.7925C54.1356 33.7757 54.9999 36.3263 54.9999 38.9772C54.9999 41.6282 54.1456 44.1587 52.5917 46.1319' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M19.5916 42.8379C18.7822 41.7685 18.3375 40.3978 18.3375 38.982C18.3375 37.5661 18.7822 36.1954 19.5916 35.126' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M17.4332 31.7925C15.8643 33.7757 15 36.3263 15 38.9772C15 41.6282 15.8544 44.1587 17.4082 46.1319' stroke='#305FAC' stroke-miterlimit='10' />
                      <path
                        d='M35.08 46.182C37.3979 46.182 39.2769 44.2938 39.2769 41.9645C39.2769 39.6353 37.3979 37.7471 35.08 37.7471C32.7622 37.7471 30.8832 39.6353 30.8832 41.9645C30.8832 44.2938 32.7622 46.182 35.08 46.182Z'
                        fill='white'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M37.3734 20.2995C37.3734 21.5698 36.3492 22.5991 35.0851 22.5991C33.8211 22.5991 32.7968 21.5698 32.7968 20.2995C32.7968 19.0293 33.8211 18 35.0851 18C36.3492 18 37.3734 19.0293 37.3734 20.2995Z'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M35.0851 21.525C35.9044 21.525 37.3733 21.6506 39.0521 22.484C40.2212 23.0614 43.2339 24.889 43.9584 31.1901C44.443 35.3774 45.3424 36.7632 46.1368 37.9732C46.4915 38.5154 46.7913 38.902 47.0361 39.6803C44.8327 41.1614 39.3818 42.0551 35.0851 42.0551H35.0801C30.7833 42.0551 25.3324 41.1664 23.129 39.6853C23.3738 38.907 23.6736 38.4903 24.0283 37.9431C24.8228 36.733 25.7221 35.3774 26.2067 31.1901C26.9362 24.884 29.9489 23.0514 31.113 22.469C32.7918 21.6355 34.2607 21.52 35.0801 21.52L35.0851 21.525Z'
                        fill='#FCD7D3'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path d='M28.8696 31.3354C28.8097 31.953 28.7347 32.4953 28.6498 32.9672' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M33.6961 24.1157C31.8375 24.6529 29.784 26.1592 29.0546 30.0352' stroke='#EE3625' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='1024:hidden icon h-[60px] w-[60px] flex-shrink-0 rounded-full bg-white bg-gradient-to-b from-[rgba(252,215,211,0.2)] to-[rgba(252,215,211,0.2)]'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                      <rect width='60' height='60' rx='30' fill='white' />
                      <path opacity='0.5' d='M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54Z' fill='#FCD7D3' />
                      <path d='M20.3553 37.9509L19.408 38.6618' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M22.6096 40.2647L21.8781 41.2006' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M25.3796 41.9115L24.9159 43.004' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M28.4813 42.7833L28.3174 43.9602' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M31.7027 42.8194L31.8466 44.0003' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M34.8245 42.0163L35.2642 43.1168' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M37.6303 40.4255L38.3418 41.3774' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M39.9326 38.164L40.8639 38.895' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M42.3268 35.8703C42.9744 35.0148 43.3301 33.9183 43.3301 32.7856C43.3301 31.6529 42.9744 30.5563 42.3268 29.7008' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M44.0534 27.034C45.3085 28.6206 45.9999 30.6611 45.9999 32.7818C45.9999 34.9026 45.3165 36.927 44.0734 38.5055' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M17.6733 35.8703C17.0258 35.0148 16.67 33.9183 16.67 32.7856C16.67 31.6529 17.0258 30.5563 17.6733 29.7008' stroke='#305FAC' stroke-miterlimit='10' />
                      <path d='M15.9465 27.034C14.6915 28.6206 14 30.6611 14 32.7818C14 34.9026 14.6835 36.927 15.9266 38.5055' stroke='#305FAC' stroke-miterlimit='10' />
                      <path
                        d='M30.064 38.5457C31.9183 38.5457 33.4215 37.0351 33.4215 35.1717C33.4215 33.3083 31.9183 31.7977 30.064 31.7977C28.2097 31.7977 26.7065 33.3083 26.7065 35.1717C26.7065 37.0351 28.2097 38.5457 30.064 38.5457Z'
                        fill='white'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M31.8987 17.8398C31.8987 18.856 31.0793 19.6794 30.0681 19.6794C29.0568 19.6794 28.2375 18.856 28.2375 17.8398C28.2375 16.8236 29.0568 16.0002 30.0681 16.0002C31.0793 16.0002 31.8987 16.8236 31.8987 17.8398Z'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path
                        d='M30.0681 18.8201C30.7236 18.8201 31.8987 18.9205 33.2417 19.5873C34.177 20.0492 36.5872 21.5113 37.1667 26.5522C37.5544 29.902 38.2739 31.0106 38.9094 31.9786C39.1932 32.4124 39.433 32.7217 39.6289 33.3443C37.8662 34.5292 33.5055 35.2442 30.0681 35.2442H30.0641C26.6266 35.2442 22.2659 34.5332 20.5032 33.3483C20.6991 32.7257 20.9389 32.3924 21.2227 31.9545C21.8582 30.9865 22.5777 29.902 22.9654 26.5522C23.5489 21.5073 25.9591 20.0412 26.8904 19.5753C28.2334 18.9085 29.4085 18.8161 30.0641 18.8161L30.0681 18.8201Z'
                        fill='#FCD7D3'
                        stroke='#EE3625'
                        stroke-miterlimit='10'
                      />
                      <path d='M25.0957 26.6684C25.0477 27.1624 24.9878 27.5962 24.9198 27.9738' stroke='#EE3625' stroke-miterlimit='10' />
                      <path d='M28.9569 20.8927C27.47 21.3225 25.8272 22.5274 25.2437 25.6283' stroke='#EE3625' stroke-miterlimit='10' />
                    </svg>
                  </div>
                  <div className='content hoverLinkResource 1024:flex-col 1024:items-start flex  flex-[1_0_0] items-center justify-between gap-[16px]'>
                    <div className='content flex flex-col items-start gap-[16px] self-stretch'>
                      <p className='mobileBodySemiboldM 1024:desktopHeadlineSemiboldXS text-[#213459]'>Conveyancing News</p>
                      <p className='1024:block desktopBodyRegMLead hidden overflow-hidden text-[#213459]'>Our ensures customers understand the entire process.</p>
                    </div>

                    <div className='content text-azure600 1024:block'>
                      <span className=' desktopBodySemiboldM btnmore text-azure600 flex items-center gap-[8px]'>
                        Find more
                        <span className='flex items-center'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                              <rect width='24' height='24' fill='#D9D9D9' />
                            </mask>
                            <g mask='url(#mask0_6086_6342)'>
                              <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
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

export default Resources;
