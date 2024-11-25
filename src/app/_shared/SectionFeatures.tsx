import React from 'react';
import styles from './SectionFeatures.module.scss';
import { index } from 'cheerio/lib/api/traversing';
interface HomePage {
  currentPageData?: any;
}
const SectionFeatures = ({ currentPageData }: HomePage) => {
  return (
    <div className={styles.moduleWrapper}>
      <div className='1280:p-[120px_80px] flex flex-col items-center gap-10 self-stretch rounded-[40px] p-[120px_0px]'>
        <div className='content_features 1280:w-[1280px] mx-auto flex w-full flex-col items-center gap-[40px] self-stretch rounded-[40px] bg-[#f4f8fb] py-[80px]'>
          <div className='head flex h-[100px] w-full flex-col items-center gap-[24px] self-stretch'>
            <div className='best_value desktopHeadlineSemiboldXL contents flex-grow self-stretch text-center text-[#213459]'>
              <p className='390:mobileDisplaySemiboldS 968:headlineSemiboldXL w-[500px]'>Best Value Property Conveyancing Solicitors</p>
            </div>
          </div>
          <div className='features 1280:flex-row flex flex-col items-start gap-[70px] '>
            <div className='features_content h-[308px] w-[308px] rounded-[12px] bg-gradient-to-br from-[#eef5ff] to-[#76abdc]'>
              <div className='features_content_detail flex h-[308px] w-[308px] shrink-0 flex-col items-start justify-between p-[24px] '>
                <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                  <rect y='0.000244141' width='60' height='60' rx='30' fill='white' />
                  <path
                    d='M29.6979 16.3401H39.1365C39.5081 19.0094 41.7161 20.7733 44.3897 21.1448V34.6024C44.3897 41.8031 31.5386 48.0001 29.6979 48.0001C27.8571 48.0001 15.0061 41.8031 15.0061 34.6024V21.1448C17.6754 20.7733 19.8834 19.0137 20.2592 16.3401H29.6979Z'
                    fill='#FCD7D3'
                    stroke='#EE3625'
                    stroke-miterlimit='10'
                  />
                  <path
                    d='M38.8418 31.2925C38.8418 36.6824 34.4727 41.0558 29.0786 41.0558C23.6845 41.0558 19.3154 36.6866 19.3154 31.2925C19.3154 25.8984 23.6845 21.5293 29.0786 21.5293C30.3086 21.5293 31.4831 21.7557 32.5636 22.1699'
                    fill='white'
                  />
                  <path
                    d='M38.8418 31.2925C38.8418 36.6824 34.4727 41.0558 29.0786 41.0558C23.6845 41.0558 19.3154 36.6866 19.3154 31.2925C19.3154 25.8984 23.6845 21.5293 29.0786 21.5293C30.3086 21.5293 31.4831 21.7557 32.5636 22.1699'
                    stroke='#EE3625'
                    stroke-miterlimit='10'
                  />
                  <path d='M38.5002 21.5933L29.6979 30.3955L26.0292 26.7269L23.0952 29.6609L29.6979 36.2637L41.4343 24.5274L38.5002 21.5933Z' fill='#76ABDC' stroke='#305FAC' stroke-miterlimit='10' />
                  <path d='M48.3959 28.3582V34.6022C48.3959 39.1421 45.4448 43.4856 39.8627 47.4447' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M48.396 20.3462V21.683' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M48.396 24.0154V25.3522' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M19.5332 47.445C13.9512 43.4858 11 39.1424 11 34.6024V28.3584' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M11 20.3467V21.6835' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M11 24.0156V25.3524' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M34.3746 13.0002H39.7132' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M19.6829 13.0002H25.0215' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M29.0316 13.0002H30.3642' stroke='#76ABDC' stroke-miterlimit='10' />
                </svg>{' '}
                <div className='contetn flex flex-col items-start gap-[24px] self-stretch'>
                  <div className='content flex h-auto w-full flex-col items-start gap-[16px] self-stretch'>
                    <div className='content_tag flex h-[23px] items-center justify-center gap-[10px] rounded-[4px] bg-[#305fac] px-[6px]'>
                      <i className='desktopBodyRegM text-white'>Experience</i>
                    </div>
                    <div className='content_detail desktopHeadlineSemiboldL h-auto w-full self-stretch text-[#213459]'>
                      With over
                      <br />
                      40 years.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='features_content h-[308px] w-[308px] rounded-[12px] bg-gradient-to-br from-[#eef5ff] to-[#76abdc] '>
              <div className='features_content_detail1 flex h-[308px] w-[308px] shrink-0 flex-col items-start justify-between p-[24px] hover:opacity-0 '>
                <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                  <rect y='0.000244141' width='60' height='60' rx='30' fill='white' />
                  <path d='M36.491 48H45.6732V41.8785H36.491V48Z' fill='#FCD7D3' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M24.248 48H36.4909V35.7571H24.248V48Z' fill='white' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M15.0658 48H24.248L24.248 29.6356H15.0658L15.0658 48Z' fill='#FCD7D3' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M12 47.9946H48.7288' stroke='#EE3625' stroke-miterlimit='10' />
                  <path
                    d='M21.6005 17.4644L29.8594 25.7181L34.3026 21.275L45.7395 32.7068L48.2799 30.1664V38.4253H40.021L42.5615 35.8849L34.3026 27.626L29.8594 32.0743L18.4276 20.6373L21.6005 17.4644Z'
                    fill='#76ABDC'
                    stroke='#305FAC'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path d='M12 21.4121L14.1578 23.575L16.3207 21.4121' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M14.1578 23.5751V19.2493' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M28.5279 15.1636L30.6857 17.3214L32.8486 15.1636' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M30.6858 17.321V13.0002' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M44.1378 21.4121L46.2956 23.575L48.4585 21.4121' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M46.2956 23.5751V19.2493' stroke='#76ABDC' stroke-miterlimit='10' />
                </svg>
                <div className='contetn flex flex-col items-start gap-[24px] self-stretch'>
                  <div className='content flex h-auto w-full flex-col items-start gap-[16px] self-stretch'>
                    <div className='content_tag flex h-[23px] items-center justify-center gap-[10px] rounded-[4px] bg-[#305fac] px-[6px]'>
                      <i className='desktopBodyRegM text-white'>Cost</i>
                    </div>
                    <div className='content_detail desktopHeadlineSemiboldL h-auto w-full self-stretch text-[#213459] '>
                      Fixed rate
                      <br />
                      and low fees
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='features_content h-[308px] w-[308px] rounded-[12px] bg-gradient-to-br from-[#eef5ff] to-[#76abdc]'>
              <div className='features_content_detail2 flex h-[308px] w-[308px] shrink-0 flex-col items-start justify-between p-[24px] '>
                <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
                  <rect y='0.000244141' width='60' height='60' rx='30' fill='white' />
                  <path d='M26.1374 44.3599C20.9047 43.0766 16.7994 38.9215 15.5909 33.6638' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path
                    d='M37.0329 32.9344C37.0329 37.0646 33.6876 40.4098 29.5574 40.4098C25.4273 40.4098 22.082 37.0646 22.082 32.9344C22.082 28.8042 25.4273 25.459 29.5574 25.459C33.6876 25.459 37.0329 28.8042 37.0329 32.9344Z'
                    fill='#FCD7D3'
                  />
                  <path
                    d='M15.2296 30.4431C15.2296 22.5316 21.6459 16.1152 29.5574 16.1152C37.4689 16.1152 43.8853 22.5316 43.8853 30.4431C43.8853 38.3546 37.4689 44.771 29.5574 44.771'
                    stroke='#EE3625'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  />
                  <path
                    d='M36.4037 23.8026C33.6565 20.1271 28.4486 19.3734 24.7669 22.1081C23.3964 23.1298 22.4309 24.494 21.9014 25.9953L22.1755 26.2134C22.4869 25.8707 22.8233 25.5468 23.2096 25.2603C26.343 22.9304 30.7597 23.2357 32.9338 26.3193L36.6342 24.1514C36.5594 24.033 36.4846 23.9147 36.4037 23.8026Z'
                    fill='#76ABDC'
                    stroke='#305FAC'
                    stroke-miterlimit='10'
                  />
                  <path
                    d='M38.7086 26.2321L38.3971 25.8396L30.2925 30.5616C30.0558 30.4868 29.8128 30.437 29.5574 30.437C28.1807 30.437 27.0656 31.5521 27.0656 32.9288C27.0656 34.3055 28.1807 35.4206 29.5574 35.4206C30.9341 35.4206 32.0492 34.3055 32.0492 32.9288C32.0492 32.9226 32.0492 32.9101 32.0492 32.9039L38.7086 26.2258V26.2321Z'
                    fill='white'
                    stroke='#EE3625'
                    stroke-linejoin='round'
                  />
                  <path d='M36.6403 14.4953C34.4787 13.5298 32.0803 13.0002 29.5574 13.0002' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path d='M43.8852 20.4941C42.5832 18.6252 40.9262 17.018 39.0075 15.7783' stroke='#76ABDC' stroke-miterlimit='10' />
                  <path
                    d='M13.9836 21.7214L9 30.4427H12.1148C12.1148 40.0736 19.9266 47.8854 29.5574 47.8854C39.1882 47.8854 47 40.0736 47 30.4427C47 27.9323 46.4705 25.5464 45.5174 23.3909'
                    stroke='#76ABDC'
                    stroke-linejoin='round'
                  />
                  <path d='M29.5574 16.1152V17.9841' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M22.3936 18.0334L23.328 19.6531' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M17.1483 23.2788L18.7679 24.2132' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M15.2296 30.4424H17.0984' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M41.9666 37.6068L40.3469 36.6724' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M43.8853 30.4424H42.0165' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M41.9666 23.2788L40.3469 24.2132' stroke='#EE3625' stroke-miterlimit='10' />
                  <path d='M36.7214 18.0334L35.7869 19.6531' stroke='#EE3625' stroke-miterlimit='10' />
                </svg>
                <div className='contetn flex flex-col items-start gap-[24px] self-stretch'>
                  <div className='content flex h-auto w-full flex-col items-start gap-[16px] self-stretch'>
                    <div className='content_tag flex h-[23px] items-center justify-center gap-[10px] rounded-[4px] bg-[#305fac] px-[6px]'>
                      <i className='desktopBodyRegM text-white'>Process</i>
                    </div>
                    <div className='content_detail desktopHeadlineSemiboldL h-auto w-full self-stretch text-[#213459] '>
                      Fast, East
                      <br />& Virtual
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cta flex w-full items-center justify-center gap-[24px]'>
            <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA'>
              Get an Instant Quote
              <div className='icon 1280:w-[32px] flex w-full items-center justify-center gap-[8px] transition-colors group-hover:fill-[#ee3625]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
                  <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' fill='' />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
