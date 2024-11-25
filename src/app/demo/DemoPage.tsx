import * as React from 'react';

import styles from './DemoPage.module.scss';
import WrapperImage from '@/app/_shared/WrapperImage';
import sampleImage from '@/assets/images/sampleImage.jpg';
import {fillAttributesImageObject} from '@/lib/helper';
import Sliders from '@/app/_shared/Sliders';

interface HomePageProps {
  currentPageData?: any;
}

export default function DemoPage({currentPageData}: HomePageProps) {
  return (
      <main>
        <div className={styles.moduleWrapper}>
          <div className={'mainContainer'}>

            <div className={'flex flex-col gap-[32px]'}>
              <div className={'py-[20px] space-[10px] mobileHeadingXLDark 1440:desktopHeadingXLDark text-primaryGoldenYellow500 bg-primaryLoyalGreen500'}>Sample content here</div>

              <div className={'desktopContentMBook'}>Desktop content M Book smaller</div>

              <strong>This is sample how we can use the WrapperImage component and class absoluteImageBg to make the image full width and height of the parent container.</strong>
              <div className={'grid grid-cols-3 gap-[16px]'}>
                <div className={'h-[198px] w-full relative'}>
                  <WrapperImage src={sampleImage} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
                </div>
                <div className={'h-[198px] w-full relative'}>
                  <WrapperImage src={sampleImage} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
                </div>
                <div className={'h-[198px] w-full relative'}>
                  <WrapperImage src={sampleImage} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
                </div>
              </div>

              <div>
                This is json of pages data:
                <br/>
                <div className={'max-h-[400px] overflow-auto'}>
                  <code>
                <pre>
                  {
                    JSON.stringify(currentPageData, null, 2)
                  }
                </pre>
                  </code>
                </div>
              </div>

              <strong>This is sample how we use image/file object from api</strong>
              <div className={'h-[300px] w-[400px] relative'}>
                <WrapperImage {...fillAttributesImageObject(currentPageData.testImage)} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
              </div>

              <strong>This is sample a boxed slider</strong>
              <Sliders
                  options={{
                    slidesPerView: 4,
                    spaceBetween: 24,
                    breakpoints: {
                      200: {
                        slidesPerView: 1.14,
                        spaceBetween: 20,
                      },
                      600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    },
                    navigation: {
                      nextEl: '.ld-button-next-care',
                      prevEl: '.ld-button-prev-care',
                    },
                  }}
                  items={[1,2,3,4,5].map((item, index) => {
                    return (
                        <div key={index} className={''}>
                          <div className={'w-full h-[200px] relative'}>
                            <WrapperImage src={sampleImage} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
                          </div>
                        </div>
                    )
                  })}
              />

              <strong>This is sample a slider with overflow effect (wrap inside class .wrapperAutoWidthSlider)</strong>
              <div className={'blockSlider wrapperAutoWidthSlider'}>
                <Sliders
                    options={{
                      loop: false,
                      navigation: false,
                      pagination: false,
                      spaceBetween: 16,
                      slidesPerView: 'auto',
                    }}
                    items={[1,2,3,4,5].map((item, index) => {
                      return (
                          <div key={index} className={'w-[350px] h-[200px] relative'}>
                            <WrapperImage src={sampleImage} alt={'Let’s Adopt a Pet!'} className={'absoluteImageBg'}/>
                          </div>
                      )
                    })}
                />
              </div>

              <br/><br/><br/><br/><br/><br/><br/>

            </div>
          </div>
        </div>
      </main>
  );
}
