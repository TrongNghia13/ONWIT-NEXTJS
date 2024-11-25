import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxPagesToShow?: number;
}

const Pagination: React.FC<PaginationProps> = ({
                                                 totalPages,
                                                 currentPage,
                                                 onPageChange,
                                                 maxPagesToShow = 5,
                                               }) => {
  const getPages = () => {
    const pages = [];
    const halfRange = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - halfRange);
    let endPage = Math.min(totalPages, currentPage + halfRange);

    if (currentPage - halfRange < 1) {
      endPage = Math.min(totalPages, endPage + (halfRange - (currentPage - 1)));
    }
    if (currentPage + halfRange > totalPages) {
      startPage = Math.max(1,
          startPage - (halfRange - (totalPages - currentPage)));
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
      <div className="flex items-center gap-[16px]">
        <button onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1} className={`${currentPage === 1 ?
            'opacity-50 cursor-not-allowed' :
            ''}`}>
          <div className={`${currentPage === 1 ?
              '' :
              'cursor-pointer  hover:text-icon'}`}
               aria-disabled={currentPage === 1}>
            <svg
                className="transition-all duration-500"
                width="56" height="56" viewBox="0 0 56 56" fill="none"
                xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" y="0.25" width="55.5" height="55.5" rx="27.75"
                    stroke="currentColor" strokeWidth="0.5"/>
              <path
                  d="M23.825 27L36 27L36 29L23.825 29L29.425 34.6L28 36L20 28L28 20L29.425 21.4L23.825 27Z"
                  fill="currentColor"/>
            </svg>
          </div>
        </button>
        {getPages().map((page) => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`h-[56px] w-[56px] rounded-full border border-[0.5px] border-textColor ${currentPage ===
                page ? '!border-mainColor !text-mainColor cursor-not-allowed' : 'hover:text-icon hover:border-icon hover:opacity-[100%]'}`}
            >
              {page}
            </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${currentPage === totalPages ?
                    'opacity-50 cursor-not-allowed' :
                    ''}`}>
          <div className={`${currentPage === totalPages ?
              '' :
              'cursor-pointer hover:text-icon'}`}
               aria-disabled={currentPage === totalPages}>
            <svg className="transition-all duration-500" width="56" height="56" viewBox="0 0 56 56" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" y="0.25" width="55.5" height="55.5" rx="27.75"
                    stroke="currentColor" strokeWidth="0.5"/>
              <path
                  d="M32.175 29H20V27H32.175L26.575 21.4L28 20L36 28L28 36L26.575 34.6L32.175 29Z"
                  fill="currentColor"/>
            </svg>
          </div>
        </button>
      </div>
  );
};

export default Pagination;
