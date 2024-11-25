'use client';

import React, {useEffect, useRef, useState} from 'react';

interface AutoHeightOnOpenProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  rest?: any;
  timerToCheck?: number;
  trigger?: any;
  maxCheck?: number;
}

function AutoHeightWithTrigger({
                                 children,
                                 isOpen,
                                 className,
                                 timerToCheck = 250,
                                 trigger,
                                 maxCheck = 20,
                                 rest,
                               }: AutoHeightOnOpenProps) {
  const [height, setHeight]: any = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const updateHeight = () => {
    if (contentRef.current && contentRef.current.querySelector('.heightArea')) {
      setHeight(contentRef.current.querySelector('.heightArea')?.scrollHeight);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        updateHeight();
      }, timerToCheck);
    }
  }, [isOpen, timerToCheck]);

  useEffect(() => {
    if (isOpen) {
      let counter = 0;
      let intervalRef: any = null;
      clearInterval(intervalRef);
      intervalRef = setInterval(() => {
        counter++;
        if (counter > maxCheck) {
          clearInterval(intervalRef);
        }
        updateHeight();
      }, timerToCheck);
    }
  }, [trigger]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', updateHeight);
      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [isOpen]);

  return (
      <div
          ref={contentRef}
          className={className}
          style={{
            overflow: 'hidden',
            height: isOpen ? `${height}px` : '0px',
            opacity: isOpen ? 1 : 0,
            transition: 'all 0.5s ease-in-out',
          }}
          {...rest}
      >
        {children}
      </div>
  );
}

export default AutoHeightWithTrigger;
