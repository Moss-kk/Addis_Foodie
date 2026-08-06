'use client';

import React, { ReactNode } from 'react';

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
  speed = 40,
  direction = 'horizontal',
  reverse = false,
  className = '',
  isPaused = false,
}: InfiniteSliderProps) {
  // Map speed parameter to smooth hardware-accelerated animation duration
  const duration = Math.max(12, Math.round(1400 / Math.max(speed, 1)));

  return (
    <div
      className={`relative w-full overflow-x-auto no-scrollbar select-none group ${className}`}
    >
      <div
        className={`flex w-max items-center animate-infinite-slider-track ${
          isPaused ? 'paused' : 'group-hover:paused'
        }`}
        style={{
          gap: `${gap}px`,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
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

      <style jsx>{`
        @keyframes infiniteSliderScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-infinite-slider-track {
          animation: infiniteSliderScroll linear infinite;
          will-change: transform;
        }
        .animate-infinite-slider-track.paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
