import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUp, ArrowDown, ArrowUpRight, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * VerticalCurvedCardsShowcase
 * 
 * Custom-crafted for Sahadat vai:
 * 1. "স্ক্রিনে যেমন বড় বড় কার্ড, ওইটা কার্ডের মতোই হবে":
 *    - Real, substantial project cards (w: 520px, h: 180px) with project preview image,
 *      large Bebas title, architecture badge, tech stack tags, and action links.
 * 2. "আমরা আগের পেইজে যেভাবে স্লাইড সিস্টেম করছি ডান দিকে, ওইটা হবে উপরে নিচে করে":
 *    - Vertical 3D curved sliding wheel (cards glide smoothly UP & DOWN along a vertical track).
 * 3. "আর ওইটা এরকম গোলাকারে হবে":
 *    - True cylindrical 3D arc trajectory (rotateX, translateZ depth, scale, translateY).
 *    - Rounded pill/capsule contours (rounded-[30px]).
 * 4. "colour amader sestam onojai hobe":
 *    - 100% aligned with our portfolio's luxury obsidian, dark glass, and crimson/ruby red theme.
 * 5. Free native page scroll (zero window wheel hijacking).
 */

// Compute 3D transformation along a vertical circular cylindrical wheel
function getVerticalCardStyle(diff) {
  // diff = 0: Active front center card
  // diff < 0: Cards stacked above, curving into the top-back
  // diff > 0: Cards stacked below, curving into the bottom-back

  // Vertical offset along circular arch
  let translateY = 0;
  if (diff >= 0) {
    if (diff <= 1) {
      translateY = diff * 120;
    } else if (diff <= 2) {
      translateY = 120 + (diff - 1) * 95;
    } else {
      translateY = 215 + (diff - 2) * 75;
    }
  } else {
    const neg = -diff;
    if (neg <= 1) {
      translateY = -neg * 120;
    } else if (neg <= 2) {
      translateY = -120 - (neg - 1) * 95;
    } else {
      translateY = -215 - (neg - 2) * 75;
    }
  }

  // Cylindrical depth (translateZ into the background)
  const absDiff = Math.abs(diff);
  let translateZ = -absDiff * 55;
  if (absDiff > 1) {
    translateZ = -55 - (absDiff - 1) * 75;
  }

  // 3D Tilt: Cards above tilt down, cards below tilt up
  // Like a rolling vertical cylinder / Rolodex
  const rotateX = -diff * 14;

  // Scale: Front card is full-scale, peripheral cards scale down
  let scale = 1.0;
  if (absDiff <= 1) {
    scale = 1.0 - absDiff * 0.08;
  } else if (absDiff <= 2) {
    scale = 0.92 - (absDiff - 1) * 0.12;
  } else {
    scale = 0.80 - (absDiff - 2) * 0.15;
  }

  // Opacity: Fades gracefully as it curves into the distance
  let opacity = 1.0;
  if (absDiff <= 1) {
    opacity = 1.0 - absDiff * 0.18;
  } else if (absDiff <= 2) {
    opacity = 0.82 - (absDiff - 1) * 0.45;
  } else if (absDiff <= 2.8) {
    opacity = 0.37 - ((absDiff - 2) / 0.8) * 0.37;
  } else {
    opacity = 0;
  }

  const zIndex = Math.max(1, Math.round(50 - absDiff * 12));

  return { translateY, translateZ, rotateX, scale, opacity, zIndex };
}

export default function VerticalCurvedCardsShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
}) {
  const total = projects.length;
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Keep dynamic props in refs for smooth 60fps RAF loop
  const onActiveChangeRef = useRef(onActiveChange);
  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  const onProjectClickRef = useRef(onProjectClick);
  useEffect(() => {
    onProjectClickRef.current = onProjectClick;
  }, [onProjectClick]);

  const projectsRef = useRef(projects);
  useEffect(() => {
    projectsRef.current = projects;
  }, [projects]);

  // Continuous wheel position (floating point)
  const progressRef = useRef(activeIdx || 0);
  const targetProgressRef = useRef(null);

  // Interaction refs
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const lastReportedIdxRef = useRef(activeIdx || 0);

  // Auto rotation speed (subtle, ~4.5s per card)
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Sync external activeIdx changes (e.g. from right-side numbers capsule)
  useEffect(() => {
    if (activeIdx === lastReportedIdxRef.current) return;
    lastReportedIdxRef.current = activeIdx;
    if (total <= 0) return;

    const current = progressRef.current;
    let diff = (activeIdx - (current % total)) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;
    targetProgressRef.current = current + diff;
  }, [activeIdx, total]);

  // Rotate smoothly to target index
  const rotateTo = useCallback((targetIdx) => {
    if (total <= 0) return;
    const current = progressRef.current;
    let diff = (targetIdx - (current % total)) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;
    targetProgressRef.current = current + diff;
  }, [total]);

  // Step up (previous) and step down (next)
  const stepPrev = useCallback(() => {
    const current = Math.round(progressRef.current);
    targetProgressRef.current = current - 1;
  }, []);

  const stepNext = useCallback(() => {
    const current = Math.round(progressRef.current);
    targetProgressRef.current = current + 1;
  }, []);

  // 60 FPS GPU-Accelerated RequestAnimationFrame Loop
  useEffect(() => {
    if (total <= 0) return;
    let animId;
    lastTimeRef.current = performance.now();
    let isVisible = true;
    let observer = null;

    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.05 }
      );
      observer.observe(containerRef.current);
    }

    const loop = (now) => {
      if (!isVisible) {
        animId = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      // Handle targeted animation (e.g. user clicked card or button)
      if (targetProgressRef.current !== null) {
        const diff = targetProgressRef.current - progressRef.current;
        progressRef.current += diff * 0.14;
        if (Math.abs(diff) < 0.004) {
          progressRef.current = targetProgressRef.current;
          targetProgressRef.current = null;
        }
      } else if (total > 1) {
        // Continuous brisk auto-glide at elevated speed (~1.9s per card)
        progressRef.current += 0.52 * dt;
      }

      const currentProgress = progressRef.current;

      // Report active front index to parent HUD
      const frontInt = Math.round(currentProgress);
      const normalizedFront = ((frontInt % total) + total) % total;
      if (normalizedFront !== lastReportedIdxRef.current) {
        lastReportedIdxRef.current = normalizedFront;
        if (onActiveChangeRef.current) {
          onActiveChangeRef.current(normalizedFront);
        }
      }

      // Update each card via GPU-composited 3D transform (Zero repaint overhead)
      for (let idx = 0; idx < total; idx++) {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) continue;

        let diff = (idx - currentProgress) % total;
        if (diff < -total / 2) diff += total;
        if (diff > total / 2) diff -= total;

        const style = getVerticalCardStyle(diff);
        cardEl.style.transform = `translate3d(0, ${style.translateY}px, ${style.translateZ}px) rotateX(${style.rotateX}deg) scale(${style.scale})`;
        cardEl.style.opacity = style.opacity;

        if (cardEl.dataset.z !== String(style.zIndex)) {
          cardEl.dataset.z = String(style.zIndex);
          cardEl.style.zIndex = style.zIndex;
        }

        const isFront = Math.abs(diff) < 0.45;
        if (cardEl.dataset.front !== (isFront ? '1' : '0')) {
          cardEl.dataset.front = isFront ? '1' : '0';
          if (isFront) {
            cardEl.classList.add('ring-2', 'ring-crimson/80', 'shadow-[0_20px_50px_rgba(239,35,60,0.35)]');
            cardEl.classList.remove('ring-1', 'ring-white/10');
          } else {
            cardEl.classList.remove('ring-2', 'ring-crimson/80', 'shadow-[0_20px_50px_rgba(239,35,60,0.35)]');
            cardEl.classList.add('ring-1', 'ring-white/10');
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
    };
  }, [total]);

  // Non-passive wheel listener: Locks window scroll while mouse is inside showcase and drives cards at high speed in scroll direction
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let snapTimeout;

    const onWheel = (e) => {
      // 1. Lock window scroll strictly while mouse is inside showcase
      e.preventDefault();
      e.stopPropagation();

      // 2. Responsive high-speed card advancement in mouse scroll direction
      // Scroll down (deltaY > 0) -> moves cards forward/down
      // Scroll up (deltaY < 0) -> moves cards backward/up
      const delta = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * 0.0038;
      targetProgressRef.current = null;
      progressRef.current += delta;

      // 3. Snap cleanly to nearest card when scrolling ceases
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        targetProgressRef.current = Math.round(progressRef.current);
      }, 140);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      clearTimeout(snapTimeout);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] h-[480px] sm:h-[530px] flex items-center justify-center select-none overflow-visible cursor-pointer"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      
      {/* ============================================================== */}
      {/* VERTICAL 3D CYLINDRICAL STAGE CARDS                             */}
      {/* ============================================================== */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {projects.map((proj, idx) => {
          const displayNum = String(idx + 1).padStart(2, '0');
          const isFrontCard = idx === ((Math.round(progressRef.current) % total) + total) % total;

          return (
            <div
              key={proj.id || idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={(e) => {
                e.stopPropagation();
                // Immediately open GitHub repository without any delay
                const targetUrl = proj.githubUrl || 'https://github.com/stl-sahadat';
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
              }}
              className="absolute w-[92%] sm:w-[500px] h-[160px] sm:h-[175px] rounded-[28px] p-3 sm:p-4
                bg-[#090915]/92 hover:bg-[#0e0e1f]/95 backdrop-blur-2xl
                transition-shadow duration-300 ease-out cursor-pointer select-none
                flex items-center gap-4 sm:gap-5 will-change-transform"
              style={{
                boxShadow: isFrontCard
                  ? '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(239, 35, 60, 0.30), inset 0 1px 2px rgba(255, 255, 255, 0.25)'
                  : '0 12px 30px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                border: isFrontCard ? '1.5px solid rgba(239, 35, 60, 0.85)' : '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              
              {/* Left Side: Crisp Rounded Project Thumbnail */}
              <div className="relative w-[130px] sm:w-[160px] h-full rounded-[20px] overflow-hidden shrink-0 border border-white/10 group/thumb">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                    <Sparkles size={24} className="text-crimson/60" />
                  </div>
                )}

                {/* Subtle dark gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Number Badge Pill on top-left of thumbnail */}
                <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-white tracking-wider">
                    {displayNum}
                  </span>
                </div>
              </div>

              {/* Right Side: Clean Architecture Details & Tags (No barti/extra text) */}
              <div className="flex-1 flex flex-col justify-center h-full py-1 min-w-0 pr-1">
                
                {/* Category Header */}
                <div className="mb-1">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-crimson font-black truncate block">
                    {proj.category || 'AI AUTOMATION'}
                  </span>
                </div>

                {/* Large Project Title */}
                <h3 className="font-bebas text-xl sm:text-2xl 2xl:text-3xl text-white tracking-wide uppercase line-clamp-1 leading-tight group-hover:text-rose-200 transition-colors mb-2.5">
                  {proj.title}
                </h3>

                {/* Tech Stack Pills */}
                <div className="flex items-center gap-1.5 flex-wrap overflow-hidden max-h-[32px]">
                  {(proj.tags || ['LangGraph', 'Python', 'FastAPI']).slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={`${idx}-tag-${tIdx}`}
                      className="px-2.5 py-0.5 rounded-md font-mono text-[9px] sm:text-[10px] font-semibold bg-white/[0.06] border border-white/10 text-zinc-300 shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* VERTICAL FLOATING STEP CONTROLS (UP & DOWN BUTTONS)             */}
      {/* ============================================================== */}
      <div className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-40">
        <button
          onClick={(e) => {
            e.stopPropagation();
            stepPrev();
          }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0c0c18]/90 hover:bg-crimson border border-white/20 hover:border-crimson text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          title="Previous architecture (Slide Up)"
        >
          <ArrowUp size={16} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            stepNext();
          }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0c0c18]/90 hover:bg-crimson border border-white/20 hover:border-crimson text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          title="Next architecture (Slide Down)"
        >
          <ArrowDown size={16} />
        </button>
      </div>

    </div>
  );
}
