'use client';

import React from 'react';

interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  quality?: number;
  src: string;
}

const WrapperVideo: React.FC<CustomVideoProps> = ({ quality = 100, src, ...props }) => {
  const videoSrc = `${src}?quality=${quality}`;

  return (
    <video src={videoSrc} {...props}>
      Your Browser unsuport this video
    </video>
  );
};

export default WrapperVideo;
