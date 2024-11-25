import {BlogCard} from '@/app/_shared/BlogCard';

export const RelatedBlogs = ({items}: any) => {
  return (
      <div>
        <div className="heading"></div>

        <div className={'grid grid-cols-3 gap-[32px]'}>
          {items.map((item: any) => (
              <BlogCard
                  key={item.id}
                  item={item}
              />
          ))}
        </div>
      </div>
  );
};
