'use client';
import { useContext, useEffect, useState } from 'react';

import styles from './HomePage.module.scss';
import HomePageBanner from '@/app/_shared/HomePageBaner';
import IntroFeat from '@/app/_shared/IntroFeat';
import Services from '@/app/_shared/Services';
import OutrBenefits from '@/app/_shared/OurBenefits';
import SectionFeatures from '@/app/_shared/SectionFeatures';
import Steps from '@/app/_shared/Steps';
import Banner from '@/app/_shared/Banner';
import Resources from '@/app/_shared/Resources';
import QuoteForm from '@/app/_shared/QuoteForm';
import FAQ from '@/app/_shared/FAQ';
import ReviewsPage from '@/app/_shared/ReviewsPage';
import NewPart from '@/app/_shared/NewsPart';

interface HomePageProps {
  currentPageData?: any;
  dataOld: any;
  global: any;
}

export default function HomePage({ currentPageData, global, dataOld }: HomePageProps) {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Here we could simulate any additional async operations if needed,
    // but in this case, the data is already passed as props, so we just set loading state to false
    if (currentPageData) {
      setDataLoaded(true);
    }
  }, [currentPageData]);

  if (!dataLoaded) {
    return <div>Loading...</div>; // Display loading state until data is ready
  }
  return (
    <main>
      <div className={styles.moduleWrapper + ' bg-primarySpace50'}>
        <HomePageBanner currentPageData={currentPageData}></HomePageBanner>
        <IntroFeat global={global}></IntroFeat>
        <Services qualityHeading={currentPageData.qualityHeading} qualityItems={currentPageData.qualityItems}></Services>
        <OutrBenefits global={global}></OutrBenefits>
        {/* <Slider lengthPage={currentPageData.qualityItems.length}>
          <WrapperSlide>
            {currentPageData.qualityItems.map((item: any, index: number) => {
              return (
                <Slide key={index} pageActive={index}>
                  <div className=' hoverFeatureService card 1280:w-[416px] w-full rounded-t-[12px] 1280:rounded-[12px] z-10 flex h-[400px] flex-col justify-between p-[32px]'>
                    <div className=''>
                      <WrapperImage {...fillAttributesImageObject(item.icon)} alt='icon services'></WrapperImage>
                    </div>
                    <div className='content text-subAzure600'>
                      <h3 className='desktopHeadlineSemibolM '>{item.key}</h3>
                      <p className='desktopBodyRegM py-[24px]'>{item.description}</p>
                      <span className='desktopBodySemiboldM btnmore text-Azure600'>
                        Learn more <span>&rarr;</span>{' '}
                      </span>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </WrapperSlide>
          <ButtonSlide className='mt-[200px]'></ButtonSlide>
        </Slider> */}

        <SectionFeatures currentPageData={dataOld}></SectionFeatures>
        <Steps currentPageData={dataOld}></Steps>
        <Banner></Banner>
        <Resources currentPageData={dataOld}></Resources>
        <QuoteForm></QuoteForm>
        <ReviewsPage currentPageData={dataOld}></ReviewsPage>
        <NewPart></NewPart>
        <FAQ></FAQ>
      </div>
    </main>
  );
}
