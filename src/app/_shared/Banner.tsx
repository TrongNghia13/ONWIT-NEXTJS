import styles from './Banner.module.scss';
import WrapperVideo from './WrapVideo';
import SaveNowBanner from '../../assets/videos/SaveNowBanner.mp4';

interface BannerProps {
  className?: string;
}

const Banner = ({ className }: BannerProps) => {
  return (
    <div className={styles.moduleWrapper}>
      <div className='968:px-[80px] flex flex-col items-center justify-center gap-[10px] self-stretch px-[24px]'>
        <div className='section_banner 1280:h-[250px] 1280:w-[1280px] relative mx-auto flex h-[294px] w-full justify-center  overflow-hidden rounded-[16px] p-[32px]'>
          <WrapperVideo src={SaveNowBanner} autoPlay loop muted quality={80} className='absolute inset-0 w-full overflow-hidden rounded-[16px]' />
          <div className='content 1024:w-[1064px] 968:gap-[32px]  absolute inset-0 z-10 mx-auto flex flex-col items-center justify-center gap-[32px]'>
            <div className='frame flex w-full flex-col items-start justify-center gap-[2px]'>
              <div className='head flex w-full flex-col items-center gap-[2px]'>
                <p className='mobileHeadlineBoldM 1024:desktopDisplaySemiboldM 968:desktopDisplaySemiboldM text-center text-white '>Save now! Discounts available</p>
              </div>
              <p className='desktopBodyRegM w-full text-center  text-white'>Save on contract reviews, drafting, and conveyancing with our discounts for buyers and sellers.</p>
            </div>
            <div className='cta_button 960:px-[6px]  hoverBanner 960:py-[3px] inline-flex items-center justify-center rounded-full bg-white px-[24px] py-[12px] text-[#305fac]'>
              <div className='content flex items-center justify-center gap-[2px]'>
                <p className=' mainCTA text-center uppercase '>FIND OUT MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
