import * as React from 'react';
import { unstable_noStore as noStore } from 'next/cache';

import metaTagService from '@/services/metaTagService';
import { ContactUsPage } from '@/app/contact-us/ContactUsPage';
import FAQ from '../_shared/FAQ';
import Location from './_c/Location';
import { getPageSetting } from '@/lib/helper';

export async function generateMetadata({ params }: any) {
  return await metaTagService.getByPath(`/contact-us`);
}

export default async function Page() {
  noStore();

  const [currentPageData] = await Promise.all([
    getPageSetting('contact'), // Check field slug in module page setting to know the pageSlug
  ]);
  return <ContactUsPage currentPageData={currentPageData} />;
}
