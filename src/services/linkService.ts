export const linkService = {
  contactUs: () => '/contact-us',
  home: () => '/',
  privacyPolicy: () => '/privacy-policy',
  blogDetail: (slug: string) => `/blogs/${slug?.toLowerCase()}`,
  blogs: () => `/blogs`,
};
