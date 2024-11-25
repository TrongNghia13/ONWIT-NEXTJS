import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import * as React from 'react';

import '../styles/globals.scss';

import { getPageSetting } from '@/lib/helper';

import { siteConfig } from '@/constant/config';
import { NextUIProvider } from '@nextui-org/react';
import GeneralLayout from '@/app/layout/GeneralLayout';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.png',
    apple: '/favicon/favicon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    // images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/images/og.png`],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  noStore();

  const [headerData, footerData] = await Promise.all([getPageSetting('common-header'), getPageSetting('footer')]);

  return (
    <html lang='en' suppressHydrationWarning>
      {/*<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />*/}
      {/*<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || ''} />*/}

      <body>
        <div
          dangerouslySetInnerHTML={{
            __html: `<!--
Built with <3 in Melbourne by Mo Works!>
___ _   _        ____                       _           _     _ _    __        __         _
|_ _| |_( )___   / ___|_ __ __ _ _____   _  | |__  _   _| |_  (_) |_  \\ \\      / /__  _ __| | _____
| || __|// __| | |   | '__/ _\` |_  / | | | | '_ \\| | | | __| | | __|  \\ \\ /\\ / / _ \\| '__| |/ / __|
| || |_  \\__ \\ | |___| | | (_| |/ /| |_| | | |_) | |_| | |_  | | |_    \\ V  V / (_) | |  |   <\\__ \\
|___|\\__| |___/  \\____|_|  \\__,_/___|\\__, | |_.__/ \\__,_|\\__| |_|\\__|    \\_/\\_/ \\___/|_|  |_|\\_\\___/
                                    |___/

moworks.com.au  > Creative Agency - Branding Agency - Digital Marketing Agency - Mobile Apps and Web Development Agency - Melbourne and Adelaide, Australia
        -->`,
          }}
        ></div>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || ''} />

        <NextUIProvider>
          <GeneralLayout headerData={headerData} footerData={footerData}>
            {children}
          </GeneralLayout>
        </NextUIProvider>

        {/*<script type="application/ld+json"*/}
        {/*        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>*/}
      </body>
    </html>
  );
}
