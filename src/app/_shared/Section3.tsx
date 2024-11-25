import { fillAttributesImageObject } from '@/lib/helper';
import styles from './Section3.module.scss';
import WrapperImage from './WrapperImage';

interface section3Props {
  section3: any;
  icons: any;
}

export default function Section3({ section3, icons }: section3Props) {
  return (
    <div className={styles.moduleWrapper + ' mainContainer '}>
      <div className='py-[120px]'>
        <div className='mb-[40px] flex items-center justify-between  '>
          <div>
            <p className='desktopBodyRegL'>{section3.title}</p>
            <h1 className='desktopHeadlineSemiboldXL'>{section3.description}</h1>
          </div>
          <span className='btn bgWhite hoverBlue border-textColor border-[1px]'>Free Contact Review</span>
        </div>
        <div className='flex gap-[16px]'>
          <div>
            <WrapperImage {...fillAttributesImageObject(section3.icon)} alt='Location' />
          </div>

          <ul className='flex h-[452px] flex-col gap-[32px] overflow-auto px-[32px]'>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>

            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center  gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
            <li className='flex items-center gap-[16px]'>
              <div className='aspect-square w-[60px] bg-black'></div>
              <div className=''>
                <h1 className='desktopBodySemiboldS'>Brisbane Conveyancing</h1>
                <p className='desktopBodyRegS'>71 Alamein Street Beenleigh - QLD, Australia</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: icons.arrow_right }}></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
