import { unstable_noStore as noStore } from 'next/cache';
import * as React from 'react';

import { getPageSetting } from '@/lib/helper';

import HomePage from '@/app/home/HomePage';
import metaTagService from '@/services/metaTagService';

export async function generateMetadata({ params }: any) {
  return await metaTagService.getByPath(`/`);
}

export default async function Page() {
  noStore();

  const [currentPageData, global, dataOld] = await Promise.all([getPageSetting('home-page'), getPageSetting('global'), getPageSetting('homepage')]);

  console.log('DEBUG currentPageData Homepage', currentPageData);

  return (
    <>
      <HomePage currentPageData={currentPageData} dataOld={dataOld} global={global} />
    </>
  );
}
