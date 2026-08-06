'use client';

import React, { useRef, useEffect, ReactNode } from 'react';

export interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  isPaused?: boolean;
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 1,
  reverse = false,
  className = '',
  isPaused = false,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId: number;

    const step = () => {
      if (el && !isPaused) {
        const delta = Math.max(0.4, speed * 0.02);
        const totalContentWidth = el.scrollWidth;
        const oneSetWidth = totalContentWidth / 3;

        if (reverse) {
          el.scrollLeft -= delta;
          if (oneSetWidth > 0 && el.scrollLeft <= 0) {
            el.scrollLeft += oneSetWidth;
          }
        } else {
          el.scrollLeft += delta;
          if (oneSetWidth > 0 && el.scrollLeft >= oneSetWidth * 2) {
            el.scrollLeft -= oneSetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, reverse, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <div className="flex w-max items-center py-2" style={{ gap: `${gap}px` }}>
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
