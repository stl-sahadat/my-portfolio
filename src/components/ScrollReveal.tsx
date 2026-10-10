import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: High-performance scroll-triggered reveal animation wrapper.
 * Features:
 * - IntersectionObserver with configurable threshold and rootMargin
 * - Smooth luxury cubic-bezier easing (Apple-style)
 * - Multiple animation variants: 'fade-up', 'fade-down', 'slide-left', 'slide-right', 'scale-up', 'fade-in'
 * - Stagger delay support for sequential card reveals
 */
export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 500,
  threshold = 0.05,
  rootMargin = '0px 0px -40px 0px',
  once = false,
}) {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin, // Pre-trigger smoothly before scrolling into view
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, once]);

  // Compute subtle luxury transforms & opacity based on animation variant
  const getHiddenVariantClasses = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-4';
      case 'fade-down':
        return 'opacity-0 -translate-y-4';
      case 'slide-left':
        return 'opacity-0 -translate-x-6';
      case 'slide-right':
        return 'opacity-0 translate-x-6';
      case 'scale-up':
        return 'opacity-0 scale-95 translate-y-4';
      case 'fade-in':
      default:
        return 'opacity-0';
    }
  };

  const getVisibleVariantClasses = () => {
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: isIntersecting ? `${duration}ms` : '350ms',
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
      }}
      className={`transition-all ${
        isIntersecting ? getVisibleVariantClasses() : getHiddenVariantClasses()
      } ${className}`}
    >
      {children}
    </div>
  );
}
