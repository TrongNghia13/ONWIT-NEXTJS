import * as React from 'react';

import {DynamicContents} from '@/app/_shared/DynamicContents';

export default function StandardPage({currentPageData}: any) {
  return (
      <main>
        <div className="1280:py-[120px] py-[60px] bg-mainColor text-white">
          <div className="mainContainer">
            <div className="flex flex-col gap-[48px]">
              <h1 className="1280:desktopHeadingH2 desktopHeadingH4 text-center max-w-[1157px] mx-auto">{currentPageData.attributes.name}</h1>
            </div>
          </div>
        </div>

        <div className="py-[40px] 1280:py-[80px] bg-white text-white mb-[80px]">
          <div className="mainContainer">
            <div className="blogContent 1280:px-[110px] mx-auto relative text-textColor">
              <DynamicContents data={currentPageData.attributes.dynamicContents}/>
            </div>
          </div>
        </div>
      </main>
  );
}
