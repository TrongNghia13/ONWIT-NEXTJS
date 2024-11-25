import {unstable_noStore as noStore} from 'next/cache';
import * as React from 'react';

import {redirectOrNotFound} from '@/lib/helper';

import {getStrapiData} from '@/services/getStrapiData';
import metaTagService from '@/services/metaTagService';
import BlogDetail from '@/app/blogs/[slug]/BlogDetail';

export async function generateMetadata({params}: any) {
  return await metaTagService.getByPath(`/blogs/${params.slug}`);
}

async function getCurrentPageData(params: any) {
  try {
    const data = await getStrapiData(`/blogs`, {
      filters: {
        slug: params.slug,
      },
      populate: [
        'blogTags',
        'thumbnail',
        'dynamicContents',
        'dynamicContents.image',
      ],
    });

    return data.data?.length ? data.data[0] : null;
  } catch (e) {
    return null;
  }
}

async function getRelatedItems(slug: string) {
  const data = await getStrapiData(`/blogs`, {
    filters: {
      slug: {
        $ne: slug,
      },
    },
    pagination: {
      limit: 3,
    },
    populate: [
      'thumbnail',
      'dynamicContents',
      'dynamicContents.image',
    ],
  });

  return data.data;
}

export default async function Page(props: MetadataProps) {
  noStore();

  const [
    currentPageData,
    relatedItems,
  ] = await Promise.all([
    getCurrentPageData(props.params),
    getRelatedItems(props.params.slug),
  ]);

  if (!currentPageData) {
    return redirectOrNotFound(`/blogs/${props.params.slug}`);
  }

  return (
      <BlogDetail
          currentPageData={currentPageData}
          relatedItems={relatedItems}
      />
  );
}
