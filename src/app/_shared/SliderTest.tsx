'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import styles from './SliderTest.module.scss';
import { number } from 'yup';

// Định nghĩa kiểu dữ liệu cho Context
interface ContextType {
  reRenderNumber: number;
  page: number;
  handleNext: () => void;
  handlePrev: () => void;
}

// Tạo SliderContext
export const SliderContext = createContext<ContextType | undefined>(undefined);

// Tạo custom hook để sử dụng context
export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSliderContext must be used within a Slider');
  }
  return context;
};

// Props cho Slider component
interface SliderProps {
  children: ReactNode;
  lengthPage: number;
}

// Component Slider
export function Slider({ children, lengthPage }: SliderProps) {
  const [page, setPage] = useState(1);
  const [reRenderNumber, setReRenderNumber] = useState(0);
  console.log(reRenderNumber);
  useEffect(() => {
    if (reRenderNumber <= 1) {
      setReRenderNumber((prevState) => prevState + 1);
    }
  }, [page]);

  const handleNext = () => {
    console.log('hi');
    setPage((prevPage) => (prevPage === lengthPage ? 1 : prevPage + 1));
  };

  const handlePrev = () => {
    console.log('hi');
    setPage((prevPage) => (prevPage === 1 ? lengthPage : prevPage - 1));
  };

  const value: ContextType = {
    reRenderNumber,
    page,
    handleNext,
    handlePrev,
  };

  return (
    <SliderContext.Provider value={value}>
      <div className={styles.moduleWrapper}>{children}</div>
    </SliderContext.Provider>
  );
}

// Props cho Slide component
interface SlideProps {
  pageActive: number;
  children: ReactNode;
}

// Component Slide
export function Slide({ pageActive, children }: SlideProps) {
  const { reRenderNumber, page } = useSliderContext();

  return (
    <div
      className={`slide 
        ${reRenderNumber > 1 ? (page === pageActive + 1 ? 'left active' : 'right unactive') : page === pageActive + 1 ? 'left' : 'right'} 
        flex w-full items-center justify-center `}
    >
      {children}
    </div>
  );
}

// WrapperSlide để gói các Slide
interface WrapperImage {
  width?: any;
  height?: number;
  children: ReactNode;
}
export function WrapperSlide({ children, width, height }: WrapperImage) {
  return <div className='slider flex w-full items-center'>{children}</div>;
}

// Component ButtonSlide

interface ButtonSlideProps {
  className?: string;
}
export function ButtonSlide({ className }: ButtonSlideProps) {
  const { handleNext, handlePrev } = useSliderContext();

  return (
    <div className={'flex gap-[12px] ' + className}>
      <span onClick={handlePrev}>&larr;</span>
      <span onClick={handleNext}>&rarr;</span>
    </div>
  );
}
