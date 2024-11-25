import React from 'react';
import styles from './QuoteForm.module.scss';
import Quote from '../../assets/videos/Quote.mp4';
import WrapperVideo from './WrapVideo';

const QuoteForm = () => {
  return (
    <div className={styles.moduleWrapper}>
      <div className='1280:h-[721px]  relative h-auto self-stretch overflow-hidden'>
        <WrapperVideo src={Quote} autoPlay loop muted quality={80} className='1280:h-auto absolute inset-0 h-[1082px] w-full object-cover' />
        <div className='quote 1280:p-[80px] relative z-10  flex items-start p-[80px_24px]'>
          <div className='content 1280:w-[1280px] 1280:flex-row mx-auto flex w-full flex-col items-center justify-between gap-[32px]'>
            <div className='contetn 1280:w-[524px] flex w-full flex-col items-start gap-[24px]'>
              <div className='head flex w-full flex-col items-start gap-[8px]'>
                <p className='1280:desktopDisplayBoldM  1280:text-none  mobileDisplaySemiboldS text-white'>Get your free conveyancing quote in just 17 seconds.</p>
              </div>
              <span className='1280:desktopBodyRegL 390:mobileBodyRegM 1280:text-none text-center  text-white'>
                Simply fill in the details of the property you’re buying or selling, and your quote will appear instantly.
              </span>
            </div>
            <div className='interactive_form 1280:w-[712px] 390:w-full 1280:items-end flex flex-col items-center gap-[40px] rounded-[16px] '>
              <div className='interactive_content 1280:items-start 390:items-center flex flex-col justify-center gap-[40px] rounded-[24px] bg-white p-[40px]'>
                <div className='mask_form flex items-center justify-end pb-[21px]'>
                  <div className='form flex items-start gap-[40px]'>
                    <div className='form_a flex flex-col items-start gap-[27px]'>
                      <div className='form_a_content 1280:w-[632px] 390:w-full flex flex-col items-start gap-[24px] rounded-[24px] bg-white'>
                        <div className='what 390:w-full 1280:w-[462px] 1280:items-start flex flex-col items-center gap-[16px]'>
                          <p className='desktopHeadlineSemiboldXS text-[#213459]'>What would you like to do?</p>
                          <div className='list flex items-start gap-[12px]'>
                            <div className='type 1280:w-[130px] 1024:px-[16px] 1024:py-[12px] flex w-[96px] items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                              <p className='desktopBodyRegM text-[#305FAC]'>Purchase</p>
                            </div>
                            <div className='type 1280:w-[130px] 1024:px-[16px] 1024:py-[12px] flex w-[96px] items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                              <p className='desktopBodyRegM text-[#305FAC]'>Sell</p>
                            </div>
                            <div className='type 1280:w-[130px] 1024:px-[16px] 1024:py-[12px] flex w-[96px] items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                              <p className='desktopBodyRegM text-[#305FAC]'>Transfer</p>
                            </div>
                          </div>
                        </div>
                        <div className='type 390:items-center 1280:items-start flex w-full flex-col items-center gap-[16px]'>
                          <p className='desktopHeadlineSemiboldXS flex flex-col items-start gap-[16px] '>Property Type</p>
                          <div className='icon 390:w-full 1280:w-[632px] flex flex-col items-start gap-[16px]'>
                            <div className='icon_a max-1280:text-center max-1280:h-[96px] flex w-full items-start justify-between gap-[16px]'>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 47 46' fill='none'>
                                      <path d='M13.5601 6.69043V12.6904L7.59326 18.6804V6.69043H13.5601Z' fill='white' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M37.0896 42.6807C37.1791 42.6907 37.2785 42.6907 37.378 42.6907H36.8409C36.9205 42.6907 37.0001 42.6907 37.0697 42.6807H37.0896Z'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M39.4165 26.2305V34.4805C39.3667 34.4705 39.3071 34.4705 39.2573 34.4705C37.9347 34.4705 36.8209 35.4005 36.5126 36.6405C36.1347 36.3205 35.6275 36.1205 35.0905 36.1205C33.8872 36.1205 32.9027 37.0705 32.843 38.2705C31.9679 38.5805 31.3314 39.4205 31.3314 40.4105C31.3314 41.6605 32.3458 42.6905 33.5888 42.6905H7.59326V37.2505H10.2684C12.317 37.2505 13.9778 35.5605 13.9778 33.5005C13.9778 31.7205 12.7446 30.2105 11.0839 29.8405C10.9248 28.0005 9.43304 26.5405 7.59326 26.4405V26.2205L23.5049 10.2305L39.4165 26.2305Z'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M37.378 42.6904H36.8409' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M44.6475 42.6904H41.4453' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M33.5893 42.6904H27.8214H19.1893H7.59373H2.35284' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M22.1724 32.7305H24.8376C26.4884 32.7305 27.821 34.0705 27.821 35.7305V42.6905H19.189V35.7305C19.189 34.0705 20.5216 32.7305 22.1724 32.7305Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M25.3648 21.2706C25.2256 20.3506 24.43 19.6606 23.4952 19.6606C22.5604 19.6606 21.7748 20.3406 21.6256 21.2706L20.84 26.3206H26.1405L25.3549 21.2706H25.3648Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M46 25.3104L42.2508 29.0804L23.505 10.2304L7.59337 26.2204L7.38453 26.4304C5.96243 26.4304 4.71934 27.2404 4.10277 28.4304L1 25.3104L7.59337 18.6904L13.5602 12.6904L23.505 2.69043L46 25.3104Z'
                                        fill='#76ABDC'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M13.9781 33.5007C13.9781 35.5607 12.3173 37.2507 10.2687 37.2507H4.90849C2.85987 37.2507 1.1991 35.5607 1.1991 33.5007C1.1991 31.8707 2.23335 30.4707 3.68528 29.9607C3.71512 29.4107 3.85435 28.8907 4.10297 28.4307C4.71954 27.2407 5.96263 26.4307 7.38473 26.4307C7.45435 26.4307 7.52396 26.4307 7.59357 26.4407C9.43335 26.5407 10.9251 28.0007 11.0842 29.8407C12.745 30.2107 13.9781 31.7207 13.9781 33.5007Z'
                                        fill='white'
                                        stroke='#76ABDC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M6.96686 42.6904V37.6904' stroke='#76ABDC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M44.2696 39.8402C44.2696 41.4002 43.0066 42.6902 41.4453 42.6902H37.3779C37.2784 42.6902 37.179 42.6902 37.0895 42.6802C38.2132 42.5502 39.0884 41.5802 39.0884 40.4102C39.0884 39.3302 38.3326 38.4202 37.3282 38.1902C37.2784 37.5602 36.9702 37.0102 36.5127 36.6402C36.821 35.4002 37.9348 34.4702 39.2574 34.4702C39.3072 34.4702 39.3668 34.4702 39.4166 34.4802C40.8188 34.5502 41.9425 35.6602 42.0619 37.0602C43.3249 37.3402 44.2696 38.4902 44.2696 39.8402Z'
                                        fill='white'
                                        stroke='#76ABDC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M39.0884 40.4106C39.0884 41.5806 38.2133 42.5506 37.0895 42.6806H37.0696C37 42.6906 36.9204 42.6906 36.8409 42.6906H33.5889C32.3459 42.6906 31.3315 41.6606 31.3315 40.4106C31.3315 39.4206 31.968 38.5806 32.8431 38.2706C32.9028 37.0706 33.8873 36.1206 35.0906 36.1206C35.6276 36.1206 36.1348 36.3206 36.5127 36.6406C36.9702 37.0106 37.2784 37.5606 37.3282 38.1906C38.3326 38.4206 39.0884 39.3306 39.0884 40.4106Z'
                                        fill='white'
                                        stroke='#76ABDC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>House</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>House</span>
                              </div>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='46' viewBox='0 0 45 46' fill='none'>
                                      <path
                                        d='M7.18096 13.3447V34.5903C5.27427 34.5903 4.00944 36.1012 4 37.7141V16.4685C4 14.8557 5.27427 13.3447 7.18096 13.3447Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M39 17.0898V40.8381H7.19984C6.32201 40.8381 5.52913 40.4859 4.9439 39.9112C4.86839 39.8463 4.80233 39.7721 4.73625 39.6887C4.53803 39.457 4.38701 39.1974 4.25486 38.9101C4.17935 38.7247 4.11327 38.53 4.06607 38.3354C4.01888 38.1315 4 37.9275 4 37.7143C4.00944 36.1015 5.27427 34.5905 7.18096 34.5905V17.0898H15.0531C15.9026 18.3134 17.2996 20.2878 18.5739 22.0861H13.5429V32.0878H17.9981V35.8326H29.4571V28.964H31.9962V22.0861H24.4261C25.7004 20.2878 27.0974 18.3134 27.9469 17.0898H39Z'
                                        fill='white'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M4.73671 39.6888C4.53849 39.457 4.37802 39.1975 4.25531 38.9101C4.17036 38.7248 4.10428 38.5301 4.06653 38.3354' fill='white' />
                                      <path
                                        d='M4.73671 39.6888C4.53849 39.457 4.37802 39.1975 4.25531 38.9101C4.17036 38.7248 4.10428 38.5301 4.06653 38.3354'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M21.1789 28.9639V32.0877H17.998' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M29.4568 28.9639H26.2759' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M21.5001 3C16.8089 3 13.0049 6.65216 13.0049 11.1478C13.0049 13.0944 13.307 14.4385 14.4586 16.2089C14.5907 16.4221 14.7984 16.7188 15.0532 17.0896C15.9027 18.3131 17.2997 20.2875 18.574 22.0858C20.122 24.2641 21.5001 26.1736 21.5001 26.1736C21.5001 26.1736 22.8782 24.2641 24.4262 22.0858C25.7005 20.2875 27.0974 18.3131 27.947 17.0896C28.2018 16.7188 28.4095 16.4221 28.5416 16.2089C29.6932 14.4385 29.9952 13.0944 29.9952 11.1478C29.9952 6.65216 26.1913 3 21.5001 3ZM21.5095 14.1233H21.4906C19.9332 14.1233 18.6684 12.9461 18.6684 11.3425C18.6684 9.73888 19.9332 8.56166 21.5001 8.56166H21.5095C23.067 8.56166 24.3318 9.73888 24.3318 11.3425C24.3318 12.9461 23.0764 14.1233 21.5095 14.1233Z'
                                        fill='#76ABDC'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>Off the Plan Land</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>Off the Plan Land</span>
                              </div>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='46' viewBox='0 0 45 46' fill='none'>
                                      <path
                                        d='M38.7954 26.8298C36.6238 26.8298 34.6003 24.7798 34.6003 22.5698C34.6003 24.7798 32.5768 26.8298 30.3954 26.8298C28.2139 26.8298 26.2003 24.7798 26.2003 22.5698C26.2003 24.7798 24.1768 26.8298 21.9954 26.8298C19.814 26.8298 17.8003 24.7798 17.8003 22.5698C17.8003 24.7798 15.7768 26.8298 13.5954 26.8298C11.4139 26.8298 9.40032 24.7798 9.40032 22.5698C9.40032 24.7798 7.37682 26.8298 5.19539 26.8298C4.73146 26.8298 4.27741 26.7398 3.85297 26.5698V42.9998H26.7827V34.1198C26.7827 32.4398 28.1251 31.0798 29.7834 31.0798H32.1919C33.8403 31.0798 35.1827 32.4398 35.1827 34.1198V42.9998H40.1477V26.5698C39.7134 26.7398 39.2593 26.8298 38.7954 26.8298ZM21.7486 37.8898H8.80808V31.9298H21.7486V37.8898Z'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M42.9996 43H40.147' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M3.85264 43H1' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M34.5999 17.4602V15.7602L30.395 10.6602V8.9502' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M26.2012 17.4602V15.7602L24.5231 10.6602V8.9502' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M9.40057 17.4602V15.7602L13.5956 10.6602V8.9502' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M17.8004 17.4602V15.7602L19.4784 10.6602V8.9502' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M34.5996 3H9.3996V8.95H34.5996V3Z' fill='#FCD7D3' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M43 15.4502V17.4702H1V15.4502L9.39999 8.9502H34.6L43 15.4502Z' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M43 17.4702V22.5702C43 24.3102 41.7464 25.9502 40.1474 26.5702C39.713 26.7402 39.259 26.8302 38.7951 26.8302C36.6235 26.8302 34.6 24.7802 34.6 22.5702C34.6 24.7802 32.5765 26.8302 30.3951 26.8302C28.2136 26.8302 26.2 24.7802 26.2 22.5702C26.2 24.7802 24.1765 26.8302 21.9951 26.8302C19.8136 26.8302 17.8 24.7802 17.8 22.5702C17.8 24.7802 15.7765 26.8302 13.5951 26.8302C11.4136 26.8302 9.39999 24.7802 9.39999 22.5702C9.39999 24.7802 7.3765 26.8302 5.19506 26.8302C4.73114 26.8302 4.27708 26.7402 3.85264 26.5702C2.25358 25.9502 1 24.3102 1 22.5702V17.4702H43Z'
                                        fill='#76ABDC'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M9.3996 20.8701V22.5701' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M17.8002 20.8701V22.5701' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M26.1998 20.8701V22.5701' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M34.5994 20.8701V22.5701' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M35.1832 34.1201V43.0001H26.7831V34.1201C26.7831 32.4401 28.1256 31.0801 29.7839 31.0801H32.1923C33.8407 31.0801 35.1832 32.4401 35.1832 34.1201Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M21.7493 31.9302H8.80878V37.8902H21.7493V31.9302Z' fill='#FCD7D3' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>Commercial Building</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>Commercial Building</span>
                              </div>
                            </div>
                            <div className='icon_b max-1280:text-center max-1280:h-[96px] flex w-full items-start justify-between gap-[16px]'>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='46' viewBox='0 0 45 46' fill='none'>
                                      <path d='M1.20392 43.5H42.9999' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M22.9612 15.51L5.59399 9.47998V43.5H22.9612V15.51Z' fill='#FCD7D3' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M12.7325 32.1997H15.831C16.4624 32.1997 16.9675 32.7297 16.9675 33.3697V43.4997H11.5961V33.3697C11.5961 32.7197 12.1109 32.1997 12.7325 32.1997Z'
                                        fill='white'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M15.9766 20.7598L15.3064 20.0198C14.6556 19.3098 13.5581 19.3098 12.917 20.0198L12.2468 20.7598V23.4998H15.9864V20.7598H15.9766Z'
                                        fill='white'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M25.1268 17.9099L3.42749 11.1799V6.60986L25.1268 13.3399V17.9099Z' fill='#76ABDC' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M38.4248 13.1499L19.6005 6.60986V43.4999H38.4248V13.1499Z' fill='white' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M27.4684 31.2397H30.567C31.3246 31.2397 31.9365 31.8697 31.9365 32.6497V43.4997H26.1086V32.6497C26.1086 31.8697 26.7205 31.2397 27.4781 31.2397H27.4684Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M31.2273 18.8399C31.0816 17.6999 29.9355 16.8599 29.0127 16.8599C28.09 16.8599 26.9438 17.6999 26.7981 18.8399V21.8099H31.2273V18.8399Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M40.7754 15.75L17.25 8.45V3.5L40.7754 10.79V15.75Z' fill='#76ABDC' stroke='#305FAC' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M8.11008 33.9499C7.99352 32.5399 6.84736 31.4399 5.44866 31.4399C4.04995 31.4399 2.86494 32.5899 2.78723 34.0399C1.74792 34.4199 1 35.4499 1 36.6399C1 38.1599 2.19473 39.3999 3.67114 39.3999H7.52729C9.0037 39.3999 10.1984 38.1599 10.1984 36.6399C10.1984 35.3299 9.30481 34.2199 8.11008 33.9499Z'
                                        fill='white'
                                        stroke='#76ABDC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M5.44873 43.4099V39.3999' stroke='#76ABDC' stroke-width='1.3' stroke-miterlimit='10' />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>Unit / Townhouse</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>Unit / Townhouse</span>
                              </div>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='46' viewBox='0 0 45 46' fill='none'>
                                      <path d='M9.83343 40.745V27.8945H4.04736' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M4.04712 24.3247H9.83319V17.1855' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M13.4485 17.1855V30.7499H35.866' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M13.4485 40.7451V34.3198H35.866' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M39 16.4624V37.7129C38.9906 36.109 37.7163 34.5884 35.8191 34.5884V13.3379C37.7258 13.3379 39 14.8584 39 16.4624Z'
                                        fill='#C8DDF1'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M38.9996 37.7128C38.9996 37.9539 38.9713 38.1949 38.9147 38.4175C38.8958 38.4916 38.8769 38.5658 38.8486 38.64C38.7919 38.8347 38.707 39.0201 38.6032 39.1963C38.4616 39.4652 38.2728 39.7062 38.0557 39.9102C37.4705 40.485 36.6776 40.8374 35.7998 40.8374H4V17.0928H15.053C16.9314 19.8094 21.4998 26.1789 21.4998 26.1789C21.4998 26.1789 26.0683 19.8094 27.9466 17.0928H35.8187V34.5883C37.7159 34.5883 38.9902 36.1088 38.9996 37.7128Z'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path
                                        d='M21.4999 3C16.8088 3 13.0049 6.64375 13.0049 11.1497C13.0049 13.0875 13.3069 14.4412 14.4585 16.212C14.6001 16.4253 14.7983 16.722 15.0531 17.0928C16.9315 19.8094 21.4999 26.179 21.4999 26.179C21.4999 26.179 26.0684 19.8094 27.9467 17.0928C28.2016 16.722 28.3998 16.4253 28.5414 16.212C29.6929 14.4412 29.995 13.0875 29.995 11.1497C29.995 6.64375 26.1911 3 21.4999 3ZM21.5094 14.1259H21.4905C19.9331 14.1259 18.6682 12.9392 18.6682 11.3444C18.6682 9.74973 19.9331 8.56296 21.4999 8.56296H21.5094C23.0668 8.56296 24.3316 9.74046 24.3316 11.3444C24.3316 12.9484 23.0762 14.1259 21.5094 14.1259Z'
                                        fill='#FCD7D3'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>Off the Plan Unit / Townhouse</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>Off the Plan Unit / Townhouse</span>
                              </div>
                              <div className='1280:w-[200px] flex w-[80px] flex-col items-center gap-[8px]'>
                                <div className='icon_quote 1280:w-[200px] 1280:flex-row flex h-[63px] w-[80px] flex-col items-center justify-center rounded-[8px] border border-[#76abdc] bg-white hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                  <div className='content  1280:w-[200px] flex w-[80px] flex-shrink-0 items-center gap-[8px] px-[16px]'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='45' height='46' viewBox='0 0 45 46' fill='none'>
                                      <path
                                        d='M23.6278 4.28999V8.58H20.3731V4.28999C20.3731 3.57999 20.9493 3 21.677 3H22.3239C23.0517 3 23.6278 3.57999 23.6278 4.28999Z'
                                        stroke='#EE3625'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M23.6278 29.8701H20.3731V40.4201H23.6278V29.8701Z' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path
                                        d='M37 10.5801V27.8701C37 28.9701 36.0903 29.8701 34.9784 29.8701H9.02156C7.9097 29.8701 7 28.9701 7 27.8701V10.5801C7 9.47008 7.9097 8.58008 9.02156 8.58008H34.9784C36.0903 8.58008 37 9.47008 37 10.5801Z'
                                        fill='#76ABDC'
                                        stroke='#305FAC'
                                        stroke-width='1.3'
                                        stroke-miterlimit='10'
                                      />
                                      <path d='M31.4502 40.4199H23.6267' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M20.3721 40.4199H15.1565' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M32.7642 40.4199H34.0681' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M35.3721 40.4199H36.676' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M13.8525 40.4199H12.5486' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M7.32288 43H16.4603' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M19.0683 43H24.9308' stroke='#EE3625' stroke-width='1.3' stroke-miterlimit='10' />
                                      <path d='M17.1076 12.4502V14.3902H19.0685V15.6802H17.1076V17.6102H15.8037V11.1602H19.0685V12.4502H17.1076Z' fill='white' />
                                      <path
                                        d='M28.1957 13.1002C28.1957 12.0302 27.3163 11.1602 26.2348 11.1602H24.284V17.6102H25.5879V15.6802C26.3056 15.6802 26.8918 16.2602 26.8918 16.9702V17.6102H28.1957V16.9702C28.1957 16.2902 27.9329 15.6702 27.4983 15.2102C27.9228 14.8602 28.1957 14.3302 28.1957 13.7402V13.1002ZM25.5879 12.4502H26.2348C26.5987 12.4502 26.8918 12.7402 26.8918 13.1002V13.7402C26.8918 14.1002 26.5987 14.3902 26.2348 14.3902H25.5879V12.4502Z'
                                        fill='white'
                                      />
                                      <path
                                        d='M22.3235 17.6102H21.0196C20.3019 17.6102 19.7157 17.0302 19.7157 16.3202V12.4502C19.7157 11.7402 20.3019 11.1602 21.0196 11.1602H22.3235C23.0412 11.1602 23.6274 11.7402 23.6274 12.4502V16.3202C23.6274 17.0302 23.0412 17.6102 22.3235 17.6102ZM21.0196 12.4502V16.3202H22.3235V12.4502H21.0196Z'
                                        fill='white'
                                      />
                                      <path
                                        d='M29.1758 20.1899V22.1299H31.7836V23.4199H29.1758V25.3499H32.4305V26.6399H28.5188C28.165 26.6399 27.8719 26.3599 27.8719 25.9999V19.5499C27.8719 19.1899 28.165 18.8999 28.5188 18.8999H32.4305V20.1899H29.1758Z'
                                        fill='white'
                                      />
                                      <path
                                        d='M14.8232 26.6401H13.5193C12.4378 26.6401 11.5584 25.7701 11.5584 24.7001H12.8623C12.8623 25.0601 13.1554 25.3501 13.5193 25.3501H14.8232C15.1871 25.3501 15.4802 25.0601 15.4802 24.7001V24.3401C15.4802 24.0601 15.2983 23.8201 15.0355 23.7301L12.9027 23.0301C12.1042 22.7701 11.5685 22.0301 11.5685 21.1901V20.8301C11.5685 19.7601 12.4479 18.8901 13.5294 18.8901H14.8333C15.9149 18.8901 16.7943 19.7601 16.7943 20.8301H15.4903C15.4903 20.4701 15.1972 20.1801 14.8333 20.1801H13.5294C13.1655 20.1801 12.8724 20.4701 12.8724 20.8301V21.1901C12.8724 21.4701 13.0544 21.7101 13.3172 21.8001L15.4499 22.5001C16.2484 22.7601 16.7841 23.5001 16.7841 24.3401V24.7001C16.7841 25.7701 15.9048 26.6401 14.8232 26.6401Z'
                                        fill='white'
                                      />
                                      <path
                                        d='M20.6952 18.8999H19.3913C18.3098 18.8999 17.4304 19.7699 17.4304 20.8399V26.6399H18.7343V24.0599H21.3421V26.6399H22.6562V20.8399C22.6562 19.7699 21.7768 18.8999 20.6952 18.8999ZM18.7343 22.7699V20.8399C18.7343 20.4799 19.0275 20.1899 19.3913 20.1899H20.6952C21.0591 20.1899 21.3421 20.4799 21.3421 20.8399V22.7699H18.7343Z'
                                        fill='white'
                                      />
                                      <path d='M27.2155 26.6401H23.9507C23.5868 26.6401 23.2937 26.3501 23.2937 25.9901V18.8901H24.5976V25.3401H27.2054V26.6301L27.2155 26.6401Z' fill='white' />
                                    </svg>
                                    <span className='1280:block desktopBodyMedS hidden text-[#305fac]'>Land</span>
                                  </div>
                                </div>
                                <span className='1280:hidden desktopBodyMedS block  text-[#305fac]'>Land</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='value 1280:flex-row 390:flex-col max-1280:mt-[24px] max-1280:gap-[24px] 1280:items-start flex w-full items-center justify-between'>
                          <div className='value_left 1280:items-start 390:items-center flex flex-col gap-[16px]'>
                            <p className='desktopHeadlineSemiboldXS text-[#213459]'>Property Value</p>
                            <div className='list flex w-full items-center gap-[12px]'>
                              <div className=' type 1024:px-[16px] 1024:py-[12px] flex items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                <p className='desktopBodyRegM text-[#305fac]'>Up to $1.5 M</p>
                              </div>
                              <div className=' type 1024:px-[16px] 1024:py-[12px] flex items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                <p className='desktopBodyRegM text-[#305fac]'>Up to $2 M</p>
                              </div>
                              <div className='type 1024:px-[16px] 1024:py-[12px] flex items-center justify-center rounded-full border border-[#76abdc] bg-white px-[10px] py-[16px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                <p className='desktopBodyRegM text-[#305fac]'>Over $2 M</p>
                              </div>
                            </div>
                          </div>
                          <div className='value_right 1280:items-start flex flex-col items-center gap-[16px]'>
                            <p className='desktopHeadlineSemiboldXS 1280:text-none 390:text-center text-[#213459]'>State</p>
                            <div className='list flex w-full items-center gap-[12px]'>
                              <div className='type 1280:w-[85px] flex w-[80px] items-center justify-center rounded-full border border-[#76abdc] bg-white px-[16px] py-[12px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                <p className='desktopBodyRegM text-[#305fac]'>QLD</p>
                              </div>
                              <div className='type 1280:w-[85px] flex w-[80px] items-center justify-center rounded-full border border-[#76abdc] bg-white px-[16px] py-[12px] hover:cursor-pointer hover:bg-[#C8DDF1]'>
                                <p className='desktopBodyRegM text-[#305fac]'>VIC</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cta 1280:justify-end flex w-full items-center justify-center gap-[24px]'>
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
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
