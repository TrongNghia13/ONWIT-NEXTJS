import Image from 'next/image';
import styles from './HeroB.module.scss';
import WrapperImage from './WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import banner2 from '../../assets/images/banner2.webp';

interface heroConentProps {
  heroContent: any;
}

export default function HeroB({ heroContent }: heroConentProps) {
  return (
    <div className='flex justify-center'>
      <div className='relative h-[600px] w-[1440px]'>
        <div className='relative h-[435px] overflow-hidden rounded-b-[40px]'>
          <div className='relative mx-[-240px] mt-[-105px] h-[540px] w-[1920px] shrink-0'>
            <div className='absolute left-[-51px] top-[58px] h-[1221px] w-[1221px] shrink-0 rounded-[1221px] bg-white opacity-60 blur-[100px]'></div>
            <div className=' bg-azure600 absolute bottom-0 left-0 h-[1454px] w-[1454px] shrink-0 rounded-[1454px] blur-[450px]'></div>
            <div className='absolute bottom-[-268px] left-[465px] h-[1551px] w-[1551px] shrink-0 rounded-[1551px] bg-[#76ABDC] blur-[400px] '></div>
            <div className='rouned-[646px] absolute bottom-[151px] left-[430px] h-[646px] w-[646px] shrink-0 bg-[#76ABDC] opacity-60 mix-blend-multiply blur-[100px] '></div>
          </div>
          <div className='absolute bottom-0 left-[80px] flex w-[632px] flex-col items-start gap-[14px] pb-[60px] '>
            <p className='desktopHeadlineSemiboldXS text-azure900'>{heroContent.subName}</p>
            <p className='desktopDisplaySemiboldM text-white'>{heroContent.subDescription}</p>
          </div>
        </div>
        <div className='absolute right-0 top-0 h-[600px] w-[656px] overflow-hidden rounded-b-[40px] '>
          <Image src={banner2} alt='banner 2' className='bg-light-gray h-[624px]  w-[1483px] bg-no-repeat object-cover object-[80%_50%] '></Image>
        </div>
        <div className='relative left-[80px] flex w-[632px] flex-col items-start gap-[32px] pt-[32px]'>
          <p className='desktopBodyRegL text-azure900 '>{heroContent.description}</p>
          <div className='flex items-center gap-[16px] self-stretch'>
            <span className='btn btn--bgOrange btn--bgHoverOrange '>Get an Instant Quote</span>
            <span className='btn btn--bgWhite btn--bgHoverBlue  border-azure600 border-[1px]'>Free Contract Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}
