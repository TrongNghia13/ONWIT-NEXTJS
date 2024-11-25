import MaskedImage from '@/app/_shared/MaskedPentagonImage';
import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import Ownit3 from '../../../assets/images/Ownit3.webp';
import Image from 'next/image';
interface section2Props {
  section2: any;
}

export default function Section2({ section2 }: section2Props) {
  return (
    <div className='mainContainer flex flex-col gap-[80px]'>
      <div className='intro flex flex-col items-center gap-[24px]'>
        <h2 className='desktopHeadlineSemiboldXL text-azure900 w-[848px] text-center'>Best Value Property Conveyancing Solicitors in Queensland</h2>
        <p className='desktopBodyRegL text-azure900 w-[848px] text-center'>
          Ownit Conveyancing has been providing conveyancing services in Queensland for over 40 years, with low, fixed rate conveyancing fees from a trusted legal service.
        </p>
      </div>
      <div className='content flex h-[600px] items-center gap-[16px] self-stretch rounded-[40px] bg-[#f4f8fb] px-[92px]'>
        <div>
          <Image src={Ownit3} alt='Ownit 3'></Image>
        </div>
        <div className='w-[648px]'>
          <div className='self stretch flex flex-col gap-[32px] pl-[32px]'>
            <div className='head'>
              <h6 className='desktopBodyMedL text-azure600'>{section2.name}</h6>
              <h2 className='desktopHeadlineSemiboldL text-azure900 self-stretch'>{section2.subName}</h2>
            </div>
            <p className='desktopBodyRegM text-azure900 text-balance'>{section2.description}</p>
            <span className='desktopMainCTA btn btn--bgWhite btn--bgHoverBlue  border-textColor border-[1px]'>find contact review</span>
          </div>
        </div>
      </div>
    </div>
  );
}
