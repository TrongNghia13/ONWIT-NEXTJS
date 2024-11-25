import {unstable_noStore as noStore} from 'next/cache';
import * as React from 'react';

import {getPageSetting} from '@/lib/helper';

import metaTagService from '@/services/metaTagService';
import DemoPage from '@/app/demo/DemoPage';

export async function generateMetadata({params}: any) {
  return await metaTagService.getByPath(`/demo`);
}

export default async function Page() {
  noStore();

  const [
    currentPageData,
  ] = await Promise.all([
    getPageSetting('demo'), // Check field slug in module page setting to know the pageSlug
  ]);

  return <DemoPage
      currentPageData={currentPageData}
  />;
}
