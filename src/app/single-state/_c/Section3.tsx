import { fillAttributesImageObject } from '@/lib/helper';
import styles from './Section3.module.scss';
import WrapperImage from '../../_shared/WrapperImage';

interface section3Props {
  section3: any;
  icons: any;
}

export default function Section3({ section3, icons }: section3Props) {
  return (
    <div className={styles.moduleWrapper + ' mainContainer '}>
      <div className='flex flex-col gap-[40px] py-[120px] '>
        <div className='flex items-center justify-between gap-[48px]  '>
          <div className='flex flex-[_1_0_0] flex-col gap-[8px]'>
            <p className='desktopBodyRegL'>{section3.title}</p>
            <h3 className='desktopHeadlineSemiboldXL'>{section3.description}</h3>
          </div>
          <span className='btn btn--bgWhite btn--bgHoverBlue  border-textColor border-[1px]'>Free Contact Review</span>
        </div>
        <div className='flex gap-[16px]'>
          <div className='h-[453px] w-[848px]'>
            <WrapperImage {...fillAttributesImageObject(section3.icon)} alt='Location' />
          </div>

          <ul className='flex h-[452px] w-[416px] flex-col gap-[32px] overflow-auto px-[32px]'>
            <li className='text-azure900 flex items-center gap-[16px] p-[8px]'>
              <div className='bg-black'>
                <div className=' h-[65px] w-[76px]'></div>
              </div>
              <div className='flex flex-col gap-[12px]'>
                <h4 className='desktopBodySemiboldS'>Brisbane Conveyancing</h4>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <div className='h-[1px] bg-[#77ABDB] opacity-10'></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
