export const BlogDetailHeading = ({currentPageData}: any) => {
  return (
      <div className="mainContainer">
        <div className="flex flex-col gap-[48px]">
          <h1 className="desktopHeadingH1 text-center max-w-[1157px] mx-auto">{currentPageData.attributes.name}</h1>
          {currentPageData.attributes.blogTags?.data?.length > 0 && (
              <div className="tags flex flex-row gap-[24px] flex-wrap items-center justify-center">
                {currentPageData.attributes.blogTags?.data?.map((tag: any, index: any) => {
                  return (
                      <div key={index} className="rounded-[100px] text-mainColor bg-white py-8px px-24px">{tag.attributes.name}</div>
                  );
                })}
              </div>
          )}

        </div>
      </div>
  );
};
