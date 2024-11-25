'use client'; // Indicate client-side rendering for this component

import { useEffect, useState } from 'react';
import HeroB from '../_shared/HeroB';
import IntroFeat from '../_shared/IntroFeat';
import Section3 from './_c/Section3';
import Section2 from './_c/Section2';
import Section4 from './_c/Section4';
import Form from '../servicepage/_compoments/Form';
import Section5 from './_c/Section5';
import Steps from '../_shared/Steps';
import Banner from '../_shared/Banner';
import OutrBenefits from '../_shared/OurBenefits';

interface SingleStatePageProps {
  currentPageData: any;
  homePage: any;
  singleServicePage: any;
}

export default function SingleStatePage({ currentPageData, homePage, singleServicePage }: SingleStatePageProps) {
  return (
    <>
      <HeroB heroContent={currentPageData.heroContent} />
      {/* <IntroFeat introFeat={homePage.introFeat} /> */}
      <Section2 section2={currentPageData.section2} />
      <Form currentPageData={singleServicePage}></Form>
      <Section4></Section4>
      <Section5></Section5>
      <Steps currentPageData={homePage}></Steps>
      <Banner className='pb-[120px]'></Banner>
      {/* <OutrBenefits ourBenefits={homePage.ourBenefits}></OutrBenefits> */}
      <Section3 section3={currentPageData.section3} icons={homePage.iconHomePage} />
    </>
  );
}
