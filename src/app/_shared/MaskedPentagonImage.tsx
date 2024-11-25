import styles from './MaskedPentagonImage.module.scss';
import React from 'react';
import { fillAttributesImageObject } from '@/lib/helper';

interface maskedImageProps {
  className?: string;
  children?: any;
  width: string;
}

const MaskedImage = ({ className, children, width }: maskedImageProps) => {
  return (
    <div style={{ width: width.includes('px') ? width : width + 'px' }} className={styles.moduleWrapper + ' ' + className}>
      <svg xmlns='http://www.w3.org/2000/svg' width='0' height='0'>
        <clipPath id='triangleClip' clipPathUnits='objectBoundingBox'>
          <path d='M 0.05 0.35 t 0 -0.05 0.05 -0.08 l 0.30 -0.15 t 0.05 -0.02 0.1 0 l 0.3 0.15 t 0.05 0.03 0.05 0.08 v 0.50 t 0 0.10 -0.10 0.10 h -0.60 t -0.10 0 -0.10 -0.10 z' />
        </clipPath>
      </svg>
      <div className='h-auto w-full' style={{ clipPath: 'url(#triangleClip)' }}>
        {children}
      </div>
    </div>
  );
};

export default MaskedImage;
