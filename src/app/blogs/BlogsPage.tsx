import React from 'react';

import styles from './BlogsPage.module.scss';
import {BlogsFilterAndContent} from '@/app/blogs/_c/BlogsFilterAndContent';

export default function BlogsPage({initData}: any) {
  return (
      <main>
        <div className={styles.moduleWrapper + ' bg-primarySpace50'}>
          <div className={'flex flex-col items-center gap-[20px] py-[80px]'}>
            <div className={'text-mainColor 1280:desktopHeadingH3 desktopHeadingH5'}>{'Blogs'}</div>
            <div className={'desktopSubTitle text-textColor'}>{'Blogs description'}</div>
          </div>

          <div className={'mb-[80px]'}>
            <BlogsFilterAndContent initData={initData}/>
          </div>
        </div>
      </main>
  );
}
