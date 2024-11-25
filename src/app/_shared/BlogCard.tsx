import {linkService} from '@/services/linkService';
import {fillAttributesImageObject} from '@/lib/helper';
import React from 'react';
import Link from 'next/link';
import WrapperImage from '@/app/_shared/WrapperImage';

export const BlogCard = ({item, isLoading = false}: any) => {
  return (
      <div
          className={`${
              isLoading ? '' : 'animate-fade-up'
          } 1440:bg-[transparent] 1440:w-full group h-auto boxHover w-auto rounded-[16px] overflow-hidden border border-mc2`}
      >
        <div className={'flex flex-col h-full'}>
          <div className={'h-[216px] relative'}>
            <Link title={item.attributes.name} href={linkService.blogDetail(item.attributes.slug)}>
              <WrapperImage className={'absoluteImageBg'} {...fillAttributesImageObject(item.attributes.thumbnail.data?.attributes.formats.small)} alt={item.attributes.name}/>
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-[60px] flex-1 p-[24px]">
            <div className={'top flex flex-col gap-[12px] flex-1'}>
              <Link title={item.attributes.name} href={linkService.blogDetail(item.attributes.slug)}>
                <h2 className="desktopHeadingH6 line-clamp-3 text-mainColor">{item.attributes.name}</h2>
              </Link>
              <div className="desktopDisplayLink line-clamp-4 text-textColor">{item.attributes.description}</div>
            </div>
          </div>
        </div>
      </div>
  );
};
