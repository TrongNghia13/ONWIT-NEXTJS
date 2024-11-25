declare module '*.mp4';
declare module 'react-scrollama';

type ImageType = any;

type ItemType = {
  name: string;
  description?: string;
  thumbnail?: ImageType;
  background?: ImageType;
  parentKey?: string;
  key?: string;
  subName?: string;
  subDescriptions?: string;
};

declare const window: any;
