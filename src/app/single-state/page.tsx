import { getPageSetting } from '@/lib/helper';
import SingleStatePage from './SingleState';
// import MaskedImage from '@/app/_shared/MaskedPentagonImage';

export default async function Page() {
  const [currentPageData, homePage, servicePageData] = await Promise.all([
    getPageSetting('singleState'),
    getPageSetting('homepage'),
    getPageSetting('ServicePage'), // Check field slug in module page setting to know the pageSlug
  ]);
  return (
    <>
      {' '}
      <SingleStatePage singleServicePage={servicePageData} currentPageData={currentPageData} homePage={homePage} />
    </>
  );
}
