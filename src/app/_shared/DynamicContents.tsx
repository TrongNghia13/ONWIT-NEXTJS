import * as cheerio from 'cheerio';

import {fillAttributesImageObject, parseExternalLink} from '@/lib/helper';
import WrapperImage from '@/app/_shared/WrapperImage';
import {CommonButton} from '@/app/_shared/CommonButton';

export const DynamicContents = ({data}: any) => {
  return (
      <div className="flex flex-col gap-[48px] dynamicContents">
        {data.map((content: any, index: number) => {
          // Image
          if (content.__component === 'blog.image') {
            return (
                <div key={index} className="flex flex-col gap-[8px] px-[100px]">
                  {JSON.stringify(content.image)}
                  <WrapperImage {...fillAttributesImageObject(content.image)} alt={content.alt} className="rounded-[8px]"/>
                  {content.caption && <div className="text-center desktopBodyXS12">{content.caption}</div>}
                </div>
            );
          }

          // Richtext
          if (content.__component === 'blog.richtext') {
            return (
                <div key={index} className="flex flex-col gap-[0px]"
                     dangerouslySetInnerHTML={{
                       __html: parseExternalLink(content.richtext),
                     }}
                >
                </div>
            );
          }

          // Table
          if (content.__component === 'blog.table') {
            const $ = cheerio.load(content.table);
            const tdItems: any = [];
            $('td').each((index, element) => {
              tdItems.push($(element).html());
            });

            if (content.type === 'TWO_COLUMNS') {
              return (
                  <div key={index} className="flex flex-row gap-[0] flex-wrap tableWrapper"
                  >
                    {tdItems.map((tdHtml: any, index: number) => {
                      return (
                          <div className={`${index % 2 ? 'w-[calc(100%-304px)]' : 'w-[304px]'} border-b border-b-mainColor py-16px`} key={index} dangerouslySetInnerHTML={{__html: parseExternalLink(tdHtml)}}/>
                      );
                    })}
                  </div>
              );
            }

            if (content.type === 'THREE_COLUMNS') {
              return (
                  <div key={index} className="grid grid-cols-3 gap-[0] tableWrapper"
                  >
                    {tdItems.map((tdHtml: any, index: number) => {
                      return (
                          <div className={`border border-mainColor p-16px ${index === 1 && 'border-l-0 border-r-0'}`} key={index} dangerouslySetInnerHTML={{__html: parseExternalLink(tdHtml)}}/>
                      );
                    })}
                  </div>
              );
            }
          }

          // Button
          if (content.__component === 'blog.button') {
            return (
                <div key={index} className="flex items-center justify-center buttonWrapper w-full">
                  <CommonButton text={content.text} link={content.link} type={content.type || 'blue'}/>
                </div>
            );
          }

          // richtext-and-image
          if (content.__component === 'blog.richtext-and-image') {
            return (
                <div key={index} className={`flex items-center gap-[60px] ${content.layout === 'TEXT_ON_LEFT_HAND' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="left flex-1"
                       dangerouslySetInnerHTML={{
                         __html: parseExternalLink(content.richtext),
                       }}
                  ></div>
                  <div className="right flex-1">
                    <WrapperImage {...fillAttributesImageObject(content.image)} alt={content.imageAlt} className="rounded-[8px]"/>
                    {content.imageCaption && <div className="text-center desktopBodyXS12">{content.imageCaption}</div>}
                  </div>
                </div>
            );
          }
        })}
      </div>
  );
};
