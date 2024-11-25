import * as React from 'react';
import {linkService} from '@/services/linkService';
import {CommonButton} from '@/app/_shared/CommonButton';
import {RelatedBlogs} from '@/app/blogs/[slug]/_c/RelatedBlogs';
import {BlogDetailContent} from '@/app/blogs/[slug]/_c/BlogDetailContent';

export default function BlogDetail({currentPageData, relatedItems}: any) {
  return (
      <main>
        <div className="py-[80px] bg-white text-white">
          <BlogDetailContent currentPageData={currentPageData}/>
        </div>

        <div className={'mb-[80px]'}>
          <div className="mainContainer">
            <div className={'flex flex-col gap-[16px]'}>
              <div className={'flex flex-row justify-between items-center'}>
                <div className="left flex flex-row items-center gap-[12px]">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6.96729" r="6" fill="#D9D9D9"/>
                  </svg>
                  <div className={'text-mainColor desktopHeadingH6'}>Related blogs</div>
                </div>

                <CommonButton
                    title={`View all`}
                    link={linkService.blogs()}
                    text={`View all`} type={'blue'}/>
              </div>

              <hr className="border border-mainColor w-full"/>
              <RelatedBlogs items={relatedItems}/>
            </div>
          </div>
        </div>
      </main>
  );
}
