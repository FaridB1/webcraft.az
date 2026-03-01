import type { ReactNode } from 'react';

type Props = {
  direction?: 'left' | 'right';
  blurIntensity?: number;
  className?: string;
  children?: ReactNode;
};

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  className = '',
}: Props) {
  const style: React.CSSProperties = {
    filter: `blur(${blurIntensity}px)`,
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '160px',
    [direction]: 0,
    pointerEvents: 'none',
  };
  return <div className={`progressive-blur ${className}`} style={style} />;
}
