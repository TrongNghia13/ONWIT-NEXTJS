import Link from 'next/link';
import * as React from 'react';

import {cn} from '@/lib/utils';

interface CommonButtonProps {
  text: string | React.ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
  type?: 'blue' | 'green' | 'white' | 'outlineBlue' | 'outlineWhite';

  [key: string]: any;
}

export const CommonButton = ({text, link, className, type = 'blue', onClick, ...rest}: CommonButtonProps) => {
  let originClasses;
  if (type === 'blue') {
    originClasses = 'desktopButton bg-mainColor border border-mainColor hover:bg-white text-mainSurface hover:text-mainColor transition-all duration-500 w-fit py-[8px] px-[24px] duration-300 ease-in-out rounded-[100px] cursor-pointer';
  }

  if (type === 'green') {
    originClasses = 'desktopButton bg-[#44C36F] border border-[#44C36F] hover:bg-white text-mainSurface hover:text-[#44C36F] transition-all duration-500 w-fit py-[8px] px-[24px] duration-300 ease-in-out rounded-[100px] cursor-pointer';
  }

  if (type === 'white') {
    originClasses = 'desktopButton bg-white border border-white hover:border-white hover:bg-mainColor text-mainColor hover:text-white transition-all duration-500 w-fit py-[8px] px-[24px] duration-300 ease-in-out rounded-[100px] cursor-pointer';
  }

  if (type === 'outlineBlue') {
    originClasses = 'desktopButton hover:bg-mainColor bg-white border border-mainColor text-mainColor hover:text-white transition-all duration-500 w-fit py-[8px] px-[24px] duration-300 ease-in-out rounded-[100px] cursor-pointer';
  }

  if (type === 'outlineWhite') {
    originClasses = 'desktopButton hover:bg-white bg-mainColor border border-white text-white hover:text-mainColor transition-all duration-500 w-fit py-[8px] px-[24px] duration-300 ease-in-out rounded-[100px] cursor-pointer';
  }

  if (link) {
    return (
        <Link href={link} {...rest}>
          <div
              className={cn(originClasses, className)}

          >
            <div className="pb-[2px]">{text}</div>
          </div>
        </Link>
    );
  }

  const otherProps: any = {};
  if (onClick) {
    otherProps.onClick = onClick;
  }

  return (
      <div
          className={cn(originClasses, className)}
          {...otherProps}
          {...rest}
      >
        <div className="pb-[2px]">{text}</div>
      </div>
  );
};
