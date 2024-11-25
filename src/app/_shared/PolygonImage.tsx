import { fillAttributesImageObject } from '@/lib/helper';

export const PolygonImage = ({ imageObject }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <svg style="max-width: 100%" width="524" viewBox="0 0 524 551" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_1349_37796" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="524" height="551">
                <path d="M0 157.214C0 131.917 14.4927 108.842 37.3178 97.7792L218.485 9.98219C245.953 -3.3274 278.039 -3.3274 305.515 9.98219L486.682 97.7792C509.507 108.842 524 131.917 524 157.214V484.592C524 521.092 494.302 550.685 457.672 550.685H66.3281C29.6984 550.685 0 521.092 0 484.592V157.214Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_1349_37796)">
                <rect width="524" height="551" fill="url(#pattern0_1349_37796)"/>
            </g>
            <defs>
              <pattern id="pattern0_1349_37796" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1349_37796" transform="scale(0.0019084 0.00181488)"/>
              </pattern>
              <image id="image0_1349_37796" width="${imageObject.attributes.width}" height="${imageObject.attributes.height}" xlink:href="${fillAttributesImageObject(imageObject)?.src}"/>
            </defs>
          </svg>
        `,
      }}
    ></div>
  );
};
