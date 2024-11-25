import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import handcoin from '../../assets/icons/handcoin.json';
import procted from '../../assets/icons/procted.json';
import laptop from '../../assets/icons/laptop.json';
import comment from '../../assets/icons/Comment.json';
import LottieAnimation from './LottieAnimation';

interface IntroFeat {
  global: any;
}

export default function IntroFeat({ global }: IntroFeat) {
  const jsonList = [handcoin, laptop, comment, procted];
  return (
    <div className='desktopHeadlineSemiboldXS 1280:px-[80px] 1280:py-[120px] px-[24px] py-[60px]'>
      <ul className='1280:flex-row 1280:flex-nowrap flex w-full flex-col flex-wrap justify-center gap-[94px]'>
        {global.blockAnimations.map((item: any, index: any) => {
          return (
            <li className='1280:flex-row flex flex-col items-center justify-center gap-[16px]' key={item.id}>
              <div
                className='flex h-[100px] w-[100px] items-center justify-center
rounded-full bg-[#F4F8FB]'
              >
                <div className='flex aspect-square w-[100px] items-center justify-center'>
                  <LottieAnimation width={100} height={100} animationData={jsonList[index]}></LottieAnimation>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.title }} className=' 1280:text-left text-Azure600 text-left'></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
