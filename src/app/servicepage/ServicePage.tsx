'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './ServicePage.module.scss';
import SingleServicePage from './_compoments/SingleServicePage';
import FAQ from '../_shared/FAQ';
import ReviewsPage from '@/app/_shared/ReviewsPage';
import Form from './_compoments/Form';
import Reasons from './_compoments/Reasons';
import ServiceProcess from './_compoments/ServiceProcess';
import HeroB from '../_shared/HeroB';
import IntroFeat from '../_shared/IntroFeat';

interface ServicePage {
  currentPageData: any;
  singlePageData: any;
  homepageData: any;
}

export default function ServicePage({ currentPageData, singlePageData, homepageData }: ServicePage) {

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (currentPageData && singlePageData && homepageData) {
      setDataLoaded(true);
    }
  }, [currentPageData, singlePageData ,homepageData]);

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className={styles.moduleWrapper}>
        <div className='mx-auto w-[1440px]'>
          <HeroB heroContent={singlePageData.heroContent}></HeroB>
          <IntroFeat introFeat={homepageData.introFeat} />
          <SingleServicePage currentPageData={currentPageData}></SingleServicePage>
          <Form currentPageData={currentPageData}></Form>
          <ServiceProcess currentPageData={currentPageData}></ServiceProcess>
          <Reasons currentPageData={currentPageData}></Reasons>
          <ReviewsPage currentPageData={homepageData}></ReviewsPage>
          <FAQ></FAQ>
        </div>
      </div>
    </main>
  );
}
