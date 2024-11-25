'use client';
import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import { useEffect } from 'react';
import styles from './Services.module.scss';
import qualityImage1 from '../../assets/images/quality1.webp';
import qualityImage2 from '../../assets/images/qualiy2.webp';
import qualityImage3 from '../../assets/images/qualiy3.webp';
import qualityImage4 from '../../assets/images/quality4.webp';
interface servicesProps {
  qualityHeading: any;
  qualityItems: any;
}

export default function Services({ qualityHeading, qualityItems }: servicesProps) {
  const qualityImages: any = [
    {
      image: qualityImage1,
      alt: 'Quality image 1',
    },
    {
      image: qualityImage2,
      alt: 'Quality image 1',
    },
    {
      image: qualityImage3,
      alt: 'Quality image 1',
    },
    {
      image: qualityImage4,
      alt: 'Quality image 1',
    },
  ];

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(`.imgHidden`);

    function handleScroll() {
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top + rect.top / 2 <= windowHeight / 2 && rect.bottom >= 0) {
          if (element.classList.contains('right')) {
            element.classList.add('activeRight');
          } else {
            element.classList.add('activeLeft');
          }
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);
  return (
    <div className={styles.moduleWrapper + ' mainContainer'}>
      <div className='heading 1280:w-[1280px] mx-auto flex w-full flex-col gap-[24px] text-center '>
        <h2 className='desktopHeadlineSemiboldXL 1280:w-[766px] mx-auto w-full text-[#213459]'>{qualityHeading.title}</h2>
        <p className='desktopBodyRegL 1280:w-[660px] mx-auto w-full text-[#16223B]'>{qualityHeading.description}</p>
      </div>
      <ul className='main services 1280:h-auto 1280:gap-[16px] relative flex h-[968px] flex-col items-center gap-0 py-[80px]'>
        {qualityItems.map((item: any, index: number) => {
          return (
            <li className={`1280:relative services__item absolute flex ${index % 2 === 0 && 'services__item--start'} 1280:gap-[16px] w-full flex-wrap justify-center gap-0`} key={item.id}>
              <div className=' hoverFeatureService card 1280:w-[416px] 1280:rounded-[12px] z-10 flex h-[400px] w-full flex-col justify-between rounded-t-[12px] p-[32px]'>
                <div className=''>
                  <WrapperImage {...fillAttributesImageObject(item.icon)} alt='icon services'></WrapperImage>
                </div>
                <div className='content text-azure600'>
                  <h3 className='desktopHeadlineSemibolM '>{item.name}</h3>
                  <p className='desktopBodyRegM py-[24px]'>{item.description}</p>
                  <span className='desktopBodySemiboldM btnmore text-azure600'>
                    Learn more{' '}
                    <span>
                      {' '}
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_6086_6342)'>
                          <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                        </g>
                      </svg>
                    </span>{' '}
                  </span>
                </div>
              </div>

              <div className='z-1 1280:w-[416px] relative h-[400px] w-full'>
                <div className={`${index % 2 === 0 ? 'right' : 'left'} imgHidden absolute h-full w-full rounded-[14px] bg-black `}>
                  <WrapperImage
                    src={qualityImages[index].image}
                    alt={qualityImages[index].alt}
                    className='1280:h-auto 1280:object-center 1280:rounded-[12px] h-[400px] w-full rounded-b-[12px] object-cover object-[50%_25%]'
                  ></WrapperImage>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
