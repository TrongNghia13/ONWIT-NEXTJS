import FeatureList from '@/app/_shared/FeatureList';
import styles from './Section4.module.scss';
import Ownit2 from '../../../assets/images/Ownit2.webp';
import Image from 'next/image';

export default function Section5() {
  const dataList = [
    'We provide efficient online conveyancing for both residential and commercial properties with a low, fixed rate and no hidden fees.',
    'We provide efficient online conveyancing for both residential and commercial properties with a low, fixed rate and no hidden fees.',
    'We provide efficient online conveyancing for both residential and commercial properties with a low, fixed rate and no hidden fees.',
    'We provide efficient online conveyancing for both residential and commercial properties with a low, fixed rate and no hidden fees.',
  ];
  return (
    <div className={styles.moduleWrapper}>
      <div className='flex justify-center px-[80px] pt-[120px] '>
        <div className='flex h-[550px] w-[1280px] flex-row-reverse items-center gap-[124px]'>
          <div className='flex w-[632px] flex-col items-start gap-[48px] '>
            <div className='text-azure600 flex flex-col items-start gap-[8px]'>
              <h6 className='desktopBodyMedL text-[#77ABDB]'>Regulations.</h6>
              <h2 className='text-azure900 desktopHeadlineSemiboldXL'>Why hire a professional Conveyancing solicitor in Queensland?</h2>
            </div>
            <FeatureList dataList={dataList}></FeatureList>
          </div>
          <div className='w-[524px] flex-[1_0_0] '>
            <Image src={Ownit2} alt='Ownit 1'></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
