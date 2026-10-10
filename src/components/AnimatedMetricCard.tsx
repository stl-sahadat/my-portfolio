import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedMetricCard({
  value,
  label,
  isHighlighted = false,
  isLast = false,
  index = 0,
}) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  // Number counting animation on mount / in-view
  useEffect(() => {
    let observer;
    let frameId;

    const startCounting = () => {
      let startTime = null;
      const duration = 1400; // 1.4s smooth count up

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Exponential ease-out curve for natural deceleration
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        if (value === '10X+') {
          const current = Math.floor(easeProgress * 10);
          setDisplayValue(`${current}X+`);
        } else if (value === '70%+') {
          const current = Math.floor(easeProgress * 70);
          setDisplayValue(`${current}%+`);
        } else if (value === '24/7') {
          const hours = Math.floor(easeProgress * 24);
          const days = Math.max(1, Math.floor(easeProgress * 7));
          setDisplayValue(`${hours}/${days}`);
        } else if (value === '100%') {
          const current = Math.floor(easeProgress * 100);
          setDisplayValue(`${current}%`);
        } else {
          setDisplayValue(value);
        }

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
          setHasAnimated(true);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    if (cardRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            const delay = index * 140;
            const timer = setTimeout(startCounting, delay);
            return () => clearTimeout(timer);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, hasAnimated, index]);

  return (
    <div
      ref={cardRef}
      className={`relative group p-4 sm:p-5 rounded-2xl transition-all duration-500 hover:bg-white/[0.03] dark:hover:bg-white/[0.03] light:hover:bg-black/[0.03] border-b md:border-b-0 ${
        !isLast ? 'md:border-r border-white/10 dark:border-white/10 light:border-black/10' : ''
      }`}
    >
      {/* Ambient Breathing Nebula Orb (Continuous in-place glow) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none animate-metric-glow ${
          isHighlighted
            ? 'bg-[radial-gradient(circle,rgba(239,35,60,0.3)_0%,transparent_70%)]'
            : 'bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(220,38,38,0.12)_45%,transparent_70%)]'
        }`}
      />

      {/* Metric Number with Continuous Specular Light Sweep */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className={`font-bebas text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wider tabular-nums transition-transform duration-300 group-hover:scale-[1.03] select-none ${
            isHighlighted
              ? 'animate-metric-crimson-shimmer drop-shadow-[0_0_20px_rgba(239,35,60,0.65)]'
              : 'animate-metric-shimmer drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]'
          }`}
        >
          {displayValue}
        </div>

        {/* Micro Telemetry Indicator & Label */}
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-zinc-200 transition-colors">
          <span
            className={`w-1 h-1 rounded-full ${
              isHighlighted
                ? 'bg-crimson shadow-[0_0_6px_#ef233c] animate-ping'
                : 'bg-zinc-400 group-hover:bg-crimson group-hover:shadow-[0_0_6px_#ef233c] transition-colors'
            }`}
          />
          <span className="font-semibold text-[11px] sm:text-xs">{label}</span>
        </div>
      </div>

      {/* Subtle Bottom Accent Line on Hover */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
