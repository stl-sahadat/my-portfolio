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

    let animId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isRunning = false;

    const updateSpotlight = () => {
      // Snappy smooth follow on GPU
      currentX += (targetX - currentX) * 0.45;
      currentY += (targetY - currentY) * 0.45;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }

      // Automatically sleep when mouse is resting (within 0.3px)
      if (Math.abs(targetX - currentX) > 0.3 || Math.abs(targetY - currentY) > 0.3) {
        animId = requestAnimationFrame(updateSpotlight);
      } else {
        isRunning = false;
        animId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none">
      <div
        ref={spotlightRef}
        className="w-[500px] h-[500px] rounded-full pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(239, 35, 60, 0.08) 0%, rgba(220, 38, 38, 0.02) 40%, transparent 65%)',
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />
    </div>
  );
}
