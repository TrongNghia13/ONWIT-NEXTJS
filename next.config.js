/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    optimizePackageImports: ['react-select'],
    // nextScriptWorkers: true,
    // serverComponents: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL || '',

  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API_URL.split('//')[1]?.split('/')[0],
      },
    ],
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      },

      // Add loader for MP4 files
      {
        test: /\.mp4$/,
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/', // Adjust the public path as needed
          outputPath: '../static/videos/',
          name: '[name].[hash].[ext]',
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src *; connect-src *; media-src *; font-src * data:; object-src *; frame-src *;", // Allow all sources, 'unsafe-inline', and 'unsafe-eval'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevents MIME type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade', // Referrer policy configuration
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains', // HSTS
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevents click jacking
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self)', // Permissions policy configuration
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);

// export default withBundleAnalyzer(nextConfig);
