import * as React from 'react';
import Header from '@/app/_shared/Header';
import Footer from '@/app/_shared/Footer';

interface GeneralLayoutProps {
  children: React.ReactNode;
  headerData: any;
  footerData: any;
}

export default function GeneralLayout({ children, headerData, footerData }: GeneralLayoutProps) {
  const layoutProps = {
    headerData,
    footerData,
  };

  const clonedChildren = React.isValidElement(children) ? React.cloneElement(children, layoutProps) : children;

  return (
    <>
      <Header headerData={headerData} />
      <div className='1024:min-h-[calc(100vh-423px)] relative min-h-[calc(100vh-761px)]'>{clonedChildren}</div>
      <Footer footerData={footerData} />
    </>
  );
}
