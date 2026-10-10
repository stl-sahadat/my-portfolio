import React, { useEffect, useRef } from 'react';

/**
 * MouseSpotlight - 100% GPU-Composited Edition
 * Replaces React useState on mousemove with hardware-accelerated translate3d.
 * Zero layout reflow, zero React re-renders, 120 FPS smooth.
 */
export default function MouseSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const isTouch =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);

    if (isTouch) {
      // Don't bind mousemove or run RAF loop on mobile
      return;
    }

    let animId;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateSpotlight = () => {
      // Snappy smooth follow on GPU
      currentX += (targetX - currentX) * 0.45;
      currentY += (targetY - currentY) * 0.45;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }
      animId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none">
      <div
        ref={spotlightRef}
        className="w-[600px] h-[600px] rounded-full pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.16) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)',
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />
    </div>
  );
}
