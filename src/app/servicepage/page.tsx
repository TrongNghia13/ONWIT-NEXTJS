import { unstable_noStore as noStore } from 'next/cache';
import * as React from 'react';

import { getPageSetting } from '@/lib/helper';

import ServicePage from './ServicePage';

export default async function Page() {
  noStore();

  const [currentPageData, singlePageData ,homepageData] = await Promise.all([
    getPageSetting('ServicePage'),
    getPageSetting('singleState'),
    getPageSetting('homepage'),
  ]);
  return <ServicePage currentPageData={currentPageData} singlePageData={singlePageData} homepageData={homepageData} />;
}
