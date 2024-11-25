import { Metadata } from 'next';

import { siteConfig } from '@/constant/config';
import { getStrapiData } from '@/services/getStrapiData';

const metaTagService = {
  getByPath: async (path: string) => {
    const apiRes = await getStrapiData('/meta-tags', {
      filters: {
        path,
      },
      populate: 'image',
    });

    let finalMetaData: Metadata = {};

    if (apiRes.data && apiRes.data.length) {
      const serverAttributes = apiRes.data[0].attributes;

      finalMetaData = {
        robots: {
          index: false,
          follow: false,
        },
        title: serverAttributes.title,
        description: serverAttributes.description,
        keywords: serverAttributes.keywords || siteConfig.keywords,
        openGraph: {
          title: serverAttributes.title,
          description: serverAttributes.description,
          // Default
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og.png`,
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
        alternates: {
          canonical: process.env.NEXT_PUBLIC_SITE_URL + (path || '').toLowerCase(),
        },
      };

      if (finalMetaData?.openGraph && serverAttributes?.image?.data?.attributes?.url) {
        // Override if image existed
        finalMetaData.openGraph.images = [
          {
            url:
              serverAttributes.image.data.attributes.url.indexOf('http') === 0
                ? serverAttributes.image.data.attributes.url
                : `${process.env.NEXT_PUBLIC_API_URL}${serverAttributes.image.data.attributes.url}`,
            width: serverAttributes.image.data.attributes.width,
            height: serverAttributes.image.data.attributes.height,
            alt: serverAttributes.image.data.attributes.alternativeText,
          },
        ];
      }
    }

    return finalMetaData;
  },
};

export default metaTagService;
