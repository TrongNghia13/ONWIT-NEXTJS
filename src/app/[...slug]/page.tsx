import qs from 'qs';
import * as React from 'react';

import {redirectOrNotFound} from '@/lib/helper';

import StandardPage from '@/app/[...slug]/templates/StandardPage';
import {CONFIG} from '@/CONFIG';
import apiService from '@/services/apiService';
import metaTagService from '@/services/metaTagService';
import {unstable_noStore as noStore} from 'next/dist/server/web/spec-extension/unstable-no-store';

async function getData(slug: string) {
  const query = qs.stringify(
      {
        filters: {
          slug,
        },
        populate: [
          'blogTags',
          'thumbnail',
          'dynamicContents',
          'dynamicContents.image',
        ],
      },
      {
        encodeValuesOnly: true,
      },
  );

  try {
    const response = await apiService.get(`/api/single-pages?${query}`);
    return response.data.data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({params}: any) {
  return await metaTagService.getByPath(`/${params.slug}`);
}

export default async function Page(props: any) {
  noStore();

  const pageData = await getData(props.params.slug.join('/'));
  if (!pageData || !pageData.length) {
    return redirectOrNotFound(props.params.slug.join('/'));
  }

  if (pageData[0].attributes.template === CONFIG.pageTemplates.STANDARD) {
    return <StandardPage currentPageData={pageData[0]}/>;
  }

  return (
      <div>TEMPLATE WAS NOT DEFINED YET</div>
  );
}
