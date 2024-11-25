interface ourBenefitsProps {
  global: any;
}

export default function OutrBenefits({ global }: ourBenefitsProps) {
  return (
    <div className='itmes-center flex w-full justify-center pt-[12px]'>
      <div className='1280:w-[1440px] 1280:py-0 1280:h-[682px] flex h-auto w-full items-center justify-center bg-[#F4F8FB] py-[80px]'>
        <div className='1280:mainContainer px-[24px]'>
          <div
            className='content 1280:gap-[16px] text-azure900 1280:flex-row 
           flex flex-col gap-[24px]'
          >
            <div className='heading 1280:items-start 1280:w-[524px] inline-flex w-full flex-col items-center gap-[32px]'>
              <h2 className='1280:text-left desktopHeadlineSemiboldXL text-center'>
                Why Ownit
                <br />
                Conveyancing Should
                <br />
                Be Your #1 Choice
              </h2>
              <span className='btn btn--bgOrange btn--bgHoverOrange  destopMainCTA w-[285px]'>Free Contract Review</span>
            </div>
            <div className='flex '>
              <ul className='1280:w-[524px] flex w-full flex-col items-end gap-[16px]'>
                <li className='desktopBodySemiboldM bg-Azure600 1280:w-auto 1280:py-[8px] flex  w-full items-center justify-center rounded-[6px] px-[16px] py-[19px] text-white'>Ownit</li>
                {global.whyOwnitItems.map((item: any, index: number) => {
                  return (
                    <li key={item.id} className='w-full'>
                      {index === 0 || <div className='h-[1px] w-full bg-[#77ABDB] opacity-20'></div>}
                      <div className='flex h-[48px] self-stretch pt-[16px] '>
                        <div className='1280:gap-0 flex w-full items-center justify-between gap-[8px] pr-[24px]'>
                          <p className='text-azure900 desktopHeadlineSemiboldS'>{item.title}</p>
                          <span className='bg-azure600 1280:h-[32px] 1280:w-[32px] flex h-[24px] w-[24px] items-center justify-center rounded-full '>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                              <mask id='mask0_6558_21874' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                                <rect width='24' height='24' fill='#D9D9D9' />
                              </mask>
                              <g mask='url(#mask0_6558_21874)'>
                                <path d='M9.54961 18.0001L3.84961 12.3001L5.27461 10.8751L9.54961 15.1501L18.7246 5.9751L20.1496 7.4001L9.54961 18.0001Z' fill='white' />
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <ul className=' 1280:w-[216px] flex flex-col justify-end gap-[16px] '>
                <li className='desktopBodySemiboldM 1280:w-auto text-azure900  1280:itmes-end flex w-[110px] items-center justify-center gap-[10px] self-end rounded-[6px] bg-white px-[16px] py-[8px] text-center'>
                  Other Conveyancers
                </li>
                {global.whyOwnitItems.map((item: any, index: number) => {
                  return (
                    <li key={item.id} className=''>
                      {index === 0 || <div className='h-[1px] w-full bg-[#77ABDB] opacity-20'></div>}
                      <div className='flex flex-col items-start gap-[16px] self-stretch pt-[16px] '>
                        <div className='flex w-full items-center justify-center'>
                          <span className='flex h-[32px] w-[32px] items-center justify-center self-stretch rounded-full bg-white'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                              <mask id='mask0_6558_21987' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                                <rect width='24' height='24' fill='#D9D9D9' />
                              </mask>
                              <g mask='url(#mask0_6558_21987)'>
                                <path
                                  d='M6.39951 19L4.99951 17.6L10.5995 12L4.99951 6.4L6.39951 5L11.9995 10.6L17.5995 5L18.9995 6.4L13.3995 12L18.9995 17.6L17.5995 19L11.9995 13.4L6.39951 19Z'
                                  fill='#213459'
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
