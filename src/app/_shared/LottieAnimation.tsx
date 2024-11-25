'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

interface LottieAnimationProps {
  animationData: any;
  width?: number;
  height?: number;
  loop?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, width = 300, height = 300, loop = true }) => {
  const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

export default LottieAnimation;
