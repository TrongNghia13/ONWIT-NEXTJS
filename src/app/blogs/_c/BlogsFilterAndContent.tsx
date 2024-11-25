'use client';

import React, {Fragment, useEffect} from 'react';
import Pagination from '@/app/_shared/Pagination';
import {getStrapiData} from '@/services/getStrapiData';
import {Spinner} from '@nextui-org/react';
import {BlogCard} from '@/app/_shared/BlogCard';

const PAGE_SIZE = 6;

export const BlogsFilterAndContent = ({initData}: any) => {
  const [searchKeyword, setSearchKeyword]: any = React.useState(null);
  const [currentPage, setCurrentPage]: any = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(Math.ceil(initData.pagination.total / PAGE_SIZE));
  const [isLoading, setIsLoading] = React.useState(false);

  const [results, setResults]: any = React.useState(initData.items);

  useEffect(() => {
    if (searchKeyword === null && currentPage === null) {
      return;
    }

    setIsLoading(true);
    const timeoutRef = setTimeout(async () => {
      try {
        const res = await getStrapiData('/blogs', {
          filters: {
            name: {
              $containsi: searchKeyword,
            },
          },
          populate: ['thumbnail'],
          pagination: {
            pageSize: PAGE_SIZE,
            page: currentPage,
          },
          sort: `createdAt:desc`,
        });

        setResults(res.data);
        setTotalPages(Math.ceil(res.meta.pagination.total / PAGE_SIZE));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }, 500);

    return function() {
      clearTimeout(timeoutRef);
    };
  }, [searchKeyword, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword]);

  return (
      <div className="mainContainer">
        <div className={'flex flex-col gap-[32px]'}>
          <div className="400:w-[auto] self-center 400:flex-1 relative w-full">
            <svg className="text-textColor opacity-[0.8] absolute left-[15px] top-[12px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                  fill="currentColor"
              />
            </svg>
            <input
                value={searchKeyword || ''}
                onChange={(event) => {
                  setSearchKeyword(event.target.value);
                }}
                className="placeholder:text-textColor border-textColor border-opacity-[0.5] desktopBodyS16 1280:w-[500px] h-[48px] w-full rounded-[4px] bg-transparent pl-[47px]"
                type="text"
                placeholder="Search by title"
            />
          </div>
          <hr className="border border-mainColor w-full"/>
          <div className="wrapper">
            {results === null && <div className={'flex items-center justify-center w-full py-[80px]'}><Spinner className="text-mainColor"/></div>}

            {results && results.length === 0 && <div className="desktopHeadingH5 text-center text-mainColor">No results found.</div>}

            <div className={`1440:grid-cols-3 768:grid-cols-2 grid grid-cols-1 gap-[32px] ${isLoading ? 'opacity-[50%]' : ''}`}>
              {results &&
                  results.map((item: any, index: number) => {
                    return (
                        <BlogCard
                            isLoading={isLoading}
                            key={index}
                            item={item}
                        />
                    );
                  })}
            </div>
          </div>
        </div>

        {results && results.length > 0 && (
            <Fragment>
              <div className="flex items-center justify-center pagination mt-[40px]">
                <Pagination
                    maxPagesToShow={5}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={(e) => {
                      setCurrentPage(e);
                    }}
                />
              </div>
            </Fragment>
        )}
      </div>
  );
};
