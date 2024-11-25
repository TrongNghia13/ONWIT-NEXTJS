import WrapperVideo from '@/app/_shared/WrapVideo';
import HerroBanner from '../../assets/videos/HeroBanner.mp4';
import styles from './HomePageBaner.module.scss';
import { fillAttributesImageObject } from '@/lib/helper';
import { link } from '@nextui-org/theme';
import Link from 'next/link';

interface HomePageBaner {
  currentPageData: any;
}

export default function HomePageBanner({ currentPageData }: HomePageBaner) {
  return (
    <div className={'homepagebaner relative ' + styles.moduleWrapper}>
      <WrapperVideo {...fillAttributesImageObject(currentPageData.heroBannerVideo)} autoPlay loop muted quality={80} className='h-auto w-full rounded-b-[24px]' />
      <div className='content 1280:bg-transparent 1280:absolute bottom-[5%] mx-auto mt-[-24px] flex w-full flex-col items-center gap-[32px] rounded-b-[32px] bg-[#76ABDC] py-[56px] text-center'>
        <h1 className='text-shadow mobileDisplayBoldXS 1280:destopDisplayBoldXL 1280:w-[1280px] w-full text-center text-white'>{currentPageData.heroBannerHeading}</h1>
        <div className='destopMainCTA flex w-full flex-wrap justify-center gap-[32px]'>
          {currentPageData.heroBannerCtas.map((item: any, index: number) => {
            return (
              <Link key={index} href={item.link}>
                <span className={`btn ${index === 0 ? 'btn--bgOrange btn--bgHoverOrange ' : 'btn--bgWhite btn--bgHoverOrange '} 1280:destopMainCTA mobileMainCTA flex-[0_0_50%]`}>
                  {item.text}

                  {index === 0 && (
                    <div className='px-[8px]'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
                        <path d='M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z' fill='' />
                      </svg>
                    </div>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
