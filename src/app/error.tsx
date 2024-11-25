'use client'; // Error components must be Client Components

import * as React from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Error from Next', error);
  }, [error]);

  return (
    <>
      {/*<Header config={config} latestNews={latestNews} latestProjects={latestProjects} />*/}
      <div className='bg-primarySpace50'>
        <div className='mainContainer'>
          <div className='flex h-[50vh] flex-col items-center justify-center gap-[32px] text-center'>
            <h1 className='HeadingLMedium'>Oops. 5xx server error.</h1>
            <p className='ContentMRegular'>Please try again!</p>
          </div>
        </div>
      </div>
    </>
  );
}
