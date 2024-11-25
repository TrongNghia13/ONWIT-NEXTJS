import * as cheerio from 'cheerio';
import { notFound, redirect } from 'next/navigation';
import qs from 'qs';

import sampleImage from '@/assets/images/sampleImage.jpg';
import apiService from '@/services/apiService';
import { getStrapiData } from '@/services/getStrapiData';

function removeTrailingSlash(str: string) {
  if (str.endsWith('/')) {
    return str.slice(0, -1);
  }
  return str;
}

export function fillAttributesImageObject(imageObject: any) {
  const correctedObject = imageObject?.data?.attributes || imageObject?.attributes || imageObject;
  if (correctedObject && correctedObject.url) {
    return {
      src: `${process.env.NEXT_PUBLIC_API_URL}${correctedObject.url}`,
      width: correctedObject.width,
      height: correctedObject.height,
      alt: correctedObject.alternativeText,
    };
  }

  return sampleImage;
}

export async function redirectOrNotFound(slug: string) {
  const query = qs.stringify(
    {
      pagination: {
        limit: 1000,
      },
      populate: ['items'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  function matchRule(rule: string, str: string) {
    const escapeRegex = (str: string) => str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str);
  }

  const response = await apiService.get(`/api/url-redirect?${query}`);

  const matched = response.data.data.attributes.items
    .sort((a: any, b: any) => b.order - a.order)
    .find((item: any) => {
      if (!item.from) {
        return false;
      }

      if (item.from.indexOf('*') >= 0) {
        return matchRule(removeTrailingSlash(item.from.trim()), `/${slug}`);
      } else {
        return removeTrailingSlash(item.from.trim()) === `/${slug}`;
      }
    });

  if (matched) {
    return redirect(matched.to.trim());
  } else {
    return notFound();
  }
}

export async function getPageSetting(pageSlug: string) {
  const response = await getStrapiData(`/page-settings`, {
    populate: {
      textFields: {
        populate: ['value'],
      },
      imageFields: {
        populate: ['value'],
      },
      fileFields: {
        populate: ['value'],
      },
      jsonFields: {
        populate: ['value'],
      },
      blocks: {
        on: {
          'shared.blog': {
            populate: ['items', 'items.thumbnail'],
          },
          'shared.list': {
            populate: ['items', 'items.icon'],
          },
          'shared.short-list': {
            populate: ['items', 'items.icon'],
          },
          'shared.content': {
            populate: ['icon'],
          },
          'shared.short-content': {
            populate: ['icon', 'file'],
          },
        },
      },
    },

    filters: {
      slug: pageSlug,
    },
    pagination: {
      limit: 1,
    },
  });

  try {
    const finalData: any = {};
    response?.data[0]?.attributes?.blocks?.forEach((block: any) => {
      if (block.__component === 'shared.short-list') {
        finalData[block.key] = block.items;
      } else if (block.__component === 'shared.list') {
        finalData[block.key] = block.items;
      } else {
        finalData[block.key] = block;
      }
    });

    ['textFields'].forEach((key) => {
      response?.data[0]?.attributes[key].forEach((field: any) => {
        if (field.key.split('.').length > 1) {
          const mainKey = field.key.split('.')[0];
          const secondKey = field.key.split('.')[1];

          if (!finalData[mainKey]) {
            finalData[mainKey] = {};
          }

          finalData[mainKey][secondKey] = field.value;
        } else {
          finalData[field.key] = field.value;
        }
      });
    });

    ['jsonFields'].forEach((key) => {
      response?.data[0]?.attributes[key].forEach((field: any) => {
        if (field.key.split('.').length > 1) {
          const mainKey = field.key.split('.')[0];
          const secondKey = field.key.split('.')[1];

          if (!finalData[mainKey]) {
            finalData[mainKey] = {};
          }

          finalData[mainKey][secondKey] = field.value;
        } else {
          finalData[field.key] = field.value;
        }
      });
    });

    ['fileFields'].forEach((key) => {
      response?.data[0]?.attributes[key]?.forEach((field: any) => {
        if (field.key.split('.').length > 1) {
          const mainKey = field.key.split('.')[0];
          const secondKey = field.key.split('.')[1];

          if (!finalData[mainKey]) {
            finalData[mainKey] = {};
          }

          finalData[mainKey][secondKey] = field.value.data;
        } else {
          finalData[field.key] = field.value.data;
        }
      });
    });

    return finalData;
  } catch (e) {
    console.log('DEBUG ERROR e', e);
    return null;
  }
}

export function parseExternalLink(richtext: string) {
  const whitelist = [
    // @ts-ignore
    process.env.NEXT_PUBLIC_API_URL.split('//')[1],
    // @ts-ignore
    process.env.NEXT_PUBLIC_SITE_URL.split('//')[1],
  ]; // Define your whitelist

  // Load the HTML into Cheerio
  const $ = cheerio.load(richtext);

  // Find all <a> tags and process them
  $('a').each((_: any, link: any) => {
    const href: any = $(link).attr('href');

    // If the domain is not in the whitelist, modify the link
    whitelist.forEach((domain) => {
      if (href.includes(domain) || !href.includes('http')) {
        return;
      }

      $(link).attr('target', '_blank');
      $(link).attr('rel', 'nofollow noopener noreferrer');
    });
  });

  // Return the modified HTML
  return $.html();
}
