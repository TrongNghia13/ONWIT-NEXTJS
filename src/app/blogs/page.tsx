import {unstable_noStore as noStore} from 'next/cache';
import * as React from 'react';

import {getStrapiData} from '@/services/getStrapiData';
import metaTagService from '@/services/metaTagService';
import {CONFIG} from '@/CONFIG';
import BlogsPage from '@/app/blogs/BlogsPage';

export async function generateMetadata({params}: any) {
  return await metaTagService.getByPath(`/blogs`);
}

async function getInitData(blogType: string) {
  const res = await getStrapiData('/blogs', {
    filters: {
      blogType: {
        slug: blogType,
      },
    },
    populate: ['thumbnail'],
    pagination: {
      pageSize: CONFIG.blogPageSize,
      page: 1,
    },
    sort: `createdAt:desc`,
  });

  return {
    items: res.data,
    pagination: res.meta.pagination,
  };
}

export default async function Page({params}: MetadataProps) {
  noStore();

  const [
    initData,
  ] = await Promise.all([
    getInitData(params.blogType),
  ]);

  noStore();
  return <BlogsPage initData={initData}/>;
}
