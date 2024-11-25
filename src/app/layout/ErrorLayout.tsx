import * as React from 'react';

import {getStrapiData} from '@/services/getStrapiData';

async function getData() {
  const res = await getStrapiData(
      '/configuration',
      {
        populate: '*',
      },
      {next: {revalidate: 3600}},
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function ErrorLayout({
                                    heroBanner,
                                    content,
                                  }: { heroBanner: React.ReactNode; content: React.ReactNode }) {
  const data = await getData();

  return <div>This is sample content of 404 page</div>;
}
