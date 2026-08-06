'use client';

import { useMotionValue, animate, motion, Transition } from 'framer-motion';
import React, { useState, useEffect, useRef, ReactNode } from 'react';

export interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className = '',
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState<number>(speed);
  const [contentSize, setContentSize] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const translation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered && speedOnHover !== undefined) {
      setCurrentSpeed(speedOnHover);
    } else {
      setCurrentSpeed(speed);
    }
  }, [isHovered, speed, speedOnHover]);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateSize = () => {
      if (contentRef.current) {
        const size = direction === 'horizontal'
          ? contentRef.current.scrollWidth
          : contentRef.current.scrollHeight;
        setContentSize(size);
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [children, direction, gap]);

  useEffect(() => {
    if (contentSize === 0 || currentSpeed === 0) return;

    let animationControls: ReturnType<typeof animate>;

    const target = reverse ? contentSize : -contentSize;
    const distance = Math.abs(target - translation.get());
    const duration = distance / currentSpeed;

    const transition: Transition = {
      ease: 'linear',
      duration: duration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    };

    animationControls = animate(translation, [translation.get(), target], {
      ...transition,
      onComplete: () => {
        translation.set(0);
      },
    });

    return () => {
      if (animationControls) {
        animationControls.stop();
      }
    };
  }, [contentSize, currentSpeed, direction, reverse, translation]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation, flexDirection: 'row', gap: `${gap}px` }
            : { y: translation, flexDirection: 'column', gap: `${gap}px` }),
        }}
      >
        <div
          ref={contentRef}
          className="flex shrink-0 items-center"
          style={{
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          aria-hidden="true"
          style={{
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          aria-hidden="true"
          style={{
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
