import {MetadataRoute} from 'next';
import {unstable_noStore as noStore} from 'next/cache';

import {getStrapiData} from '@/services/getStrapiData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  noStore();

  const domain = process.env.NEXT_PUBLIC_SITE_URL || '';

  const allPages = await getStrapiData(`/meta-tags`,
      {
        filters: {
          robotIndex: true,
          isApproved: true,
        },
        fields: ['path', 'sitemapPriority'],
        pagination: {
          limit: 1000,
        },
      });

  return [
    ...allPages.data.map((metaTag: any) => {
      return {
        url: `${domain}${metaTag.attributes.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: metaTag.attributes.sitemapPriority || 0.5,
      };
    }),
  ];
}
