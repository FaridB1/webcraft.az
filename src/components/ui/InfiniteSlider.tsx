'use client';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // px per second
  reverse?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50,
  reverse = false,
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;
    const totalWidth = width / 2; // because we duplicate children
    const from = reverse ? -totalWidth : 0;
    const to = reverse ? 0 : -totalWidth;
    const duration = Math.abs(to - from) / speed;

    const controls = animate(translation, [from, to], {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
      onRepeat: () => {
        translation.set(from);
      },
    });

    return controls.stop;
  }, [width, speed, reverse, translation]);

  return (
    <div className="infinite-slider" style={{ overflow: 'hidden' }} ref={ref}>
      <motion.div
        className="slider-track"
        style={{
          display: 'flex',
          gap: `${gap}px`,
          x: translation,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
