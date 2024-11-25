import * as React from 'react';

import metaTagService from '@/services/metaTagService';
import { ThankYouPage } from '@/app/Thank-You/ThankYouPage';
import { getPageSetting } from '@/lib/helper';

export async function generateMetadata({ params }: any) {
  return await metaTagService.getByPath(`/thank-you`);
}
async function getCurrentPageData() {
  return getPageSetting('thank-you-page');
}

export default async function Page() {
  const [currentPageData] = await Promise.all([getCurrentPageData()]);

  return <ThankYouPage currentPageData={currentPageData} />;
}
