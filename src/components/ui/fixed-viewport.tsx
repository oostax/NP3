'use client';

import React, { useEffect, useRef, useState } from 'react';

type FixedViewportProps = {
  children: React.ReactNode;
  targetWidth?: number; // default 490
  targetHeight?: number; // default 850
  mobileBreakpointPx?: number; // apply scaling only under this width, default 768
};

export const FixedViewport: React.FC<FixedViewportProps> = ({
  children,
  targetWidth = 490,
  targetHeight = 850,
  mobileBreakpointPx = 768,
}) => {
  const scaleWrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [minContentHeight, setMinContentHeight] = useState<number>(0);

  useEffect(() => {
    const applyScale = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < mobileBreakpointPx;
      setIsMobile(mobile);

      if (!scaleWrapperRef.current) return;

      if (!mobile) {
        scaleWrapperRef.current.style.transform = 'none';
        scaleWrapperRef.current.style.left = '';
        scaleWrapperRef.current.style.top = '';
        scaleWrapperRef.current.style.position = 'relative';
        scaleWrapperRef.current.style.margin = '0 auto';
        scaleWrapperRef.current.style.width = '100%';
        scaleWrapperRef.current.style.height = 'auto';
        return;
      }

      // Scale only by width. Height remains dynamic and scrollable
      const scale = w / targetWidth;

      // Canvas size locked to target and scaled
      scaleWrapperRef.current.style.width = `${targetWidth}px`;
      scaleWrapperRef.current.style.height = 'auto';
      scaleWrapperRef.current.style.position = 'relative';
      scaleWrapperRef.current.style.left = '';
      scaleWrapperRef.current.style.top = '';
      scaleWrapperRef.current.style.margin = '0 auto';
      scaleWrapperRef.current.style.transform = `scale(${scale})`;

      // Ensure inner scroll area is at least viewport height in unscaled units
      setMinContentHeight(Math.ceil(h / scale));
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);
    return () => {
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
    };
  }, [mobileBreakpointPx, targetWidth, targetHeight]);

  // Use native scrolling only; no manual prevention to avoid blocking scroll

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
        touchAction: 'manipulation',
      }}
    >
      <div
        ref={scaleWrapperRef}
        style={{
          transformOrigin: 'top center',
          width: `${targetWidth}px`,
          height: 'auto',
          display: 'flex',
        }}
      >
        <div
          ref={scrollRef}
          style={{
            width: `${targetWidth}px`,
            // allow content to grow; ensure at least viewport-height (in unscaled units)
            minHeight: `${minContentHeight}px`,
            height: 'auto',
            overflowX: 'hidden',
            overflowY: 'auto',
            // prevent scrolling past the bottom (footer)
            overscrollBehaviorY: 'none',
            WebkitOverflowScrolling: 'touch',
            margin: 0,
            padding: 0,
            // Avoid layout jumps when scrollbars show/hide
            scrollbarGutter: 'stable both-edges',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FixedViewport;

