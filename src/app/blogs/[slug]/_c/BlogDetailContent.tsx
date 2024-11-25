import {fillAttributesImageObject} from '@/lib/helper';

import {DynamicContents} from '@/app/_shared/DynamicContents';
import * as React from 'react';
import WrapperImage from '@/app/_shared/WrapperImage';

export const BlogDetailContent = ({currentPageData}: any) => {
  return (
      <div className="mainContainer">
        <div className="flex flex-col gap-[48px]">
          <WrapperImage
              className={'rounded-[12px] w-full'}
              {...fillAttributesImageObject(currentPageData.attributes.thumbnail)}
              alt={currentPageData.attributes?.name || currentPageData.attributes.name}
          />

          <div className={'flex flex-col'}>
            <div className="blogContent 1024:px-[110px] mx-auto relative text-textColor contentArea">
              <h1 className={'desktopHeadingH4 mb-[40px]'}>{currentPageData.attributes.name}</h1>
              <DynamicContents data={currentPageData.attributes.dynamicContents}/>
            </div>

          </div>

        </div>
      </div>
  );
};
