import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LiveDemo3DIcon } from './GemActionButton';

/**
 * Ultra-Smooth 60 FPS Circular Turntable Showcase:
 * 
 * Fixes for Sahadat vai:
 * 1. "vi ulta dike ghortese": Corrected rotation direction to natural forward flow
 *    (cards glide forward 01 -> 02 -> 03 -> 04 -> 05 -> 06 along the circular track).
 * 2. "lag lag vab dekhaitese": Eliminated 100% of stutter/lag by:
 *    - Removing React re-renders from the 60fps loop.
 *    - Eliminating CSS repaint thrashing (no boxShadow mutation in loop).
 *    - Removing the feedback loop between activeIdx prop and animation ref.
 *    - Running pure GPU-accelerated compositing (transform + opacity only).
 * 3. Cards never open external links on click.
 * 4. Centered glowing "VISIT LIVE DEMO" button dynamically links to the active front slide.
 * 5. Number navigation (< 01 / 06 >) completely removed.
 */

// Smooth continuous interpolation for circular wheel trajectory
function getCardStyle(diff) {
  // diff = 0 is center front card
  // diff > 0 is upcoming cards on the right
  // diff < 0 is cards exiting to the left
  let translateX = 0;
  if (diff >= 0) {
    if (diff <= 1) {
      translateX = diff * 125;
    } else if (diff <= 2) {
      translateX = 125 + (diff - 1) * 110;
    } else {
      translateX = 235 + (diff - 2) * 110;
    }
  } else {
    const neg = -diff;
    if (neg <= 1) {
      translateX = -neg * 115;
    } else if (neg <= 2) {
      translateX = -115 - (neg - 1) * 95;
    } else {
      translateX = -210 - (neg - 2) * 80;
    }
  }

  // Circular arc curve (highest at center diff 0, dipping downward on both wings)
  let translateY = -10;
  if (diff >= 0) {
    if (diff <= 1) {
      translateY = -10 + diff * 35;
    } else if (diff <= 2) {
      translateY = 25 + (diff - 1) * 40;
    } else {
      translateY = 65 + (diff - 2) * 45;
    }
  } else {
    const neg = -diff;
    if (neg <= 1) {
      translateY = -10 + neg * 38;
    } else if (neg <= 2) {
      translateY = 28 + (neg - 1) * 40;
    } else {
      translateY = 68 + (neg - 2) * 32;
    }
  }

  // Circular Z-rotation angle
  const rotateZ = diff * 12;

  // Scale (center front card is largest)
  const absDiff = Math.abs(diff);
  let scale = 1.05;
  if (absDiff <= 1) {
    scale = 1.05 - absDiff * 0.11;
  } else if (absDiff <= 2) {
    scale = 0.94 - (absDiff - 1) * 0.09;
  } else {
    scale = 0.85 - (absDiff - 2) * 0.10;
  }

  // Opacity: fades completely to 0 on the outer wings
  let opacity = 1;
  if (diff >= 0) {
    if (diff <= 1) {
      opacity = 1 - diff * 0.10;
    } else if (diff <= 2) {
      opacity = 0.90 - (diff - 1) * 0.35;
    } else if (diff <= 2.8) {
      opacity = 0.55 - ((diff - 2) / 0.8) * 0.55;
    } else {
      opacity = 0;
    }
  } else {
    const neg = -diff;
    if (neg <= 1) {
      opacity = 1 - neg * 0.18;
    } else if (neg <= 2) {
      opacity = 0.82 - (neg - 1) * 0.37;
    } else if (neg <= 2.8) {
      opacity = 0.45 - ((neg - 2) / 0.8) * 0.45;
    } else {
      opacity = 0;
    }
  }

  const zIndex = Math.max(1, Math.round(40 - Math.abs(diff) * 10));

  return { translateX, translateY, rotateZ, scale, opacity, zIndex };
}

export default function FanningCardsShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onPauseChange,
}) {
  const total = projects.length;
  const containerRef = useRef(null);
  const dialRef = useRef(null);
  const cardRefs = useRef([]);
  const glowRefs = useRef([]);
  const visitBtnRef = useRef(null);

  // Keep dynamic props in refs so useEffect NEVER tears down or stutters on parent renders
  const onActiveChangeRef = useRef(onActiveChange);
  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  const projectsRef = useRef(projects);
  useEffect(() => {
    projectsRef.current = projects;
  }, [projects]);

  // Continuous wheel position (floating point)
  const progressRef = useRef(activeIdx || 0);
  const targetProgressRef = useRef(null);

  // Interaction refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const lastReportedIdxRef = useRef(activeIdx || 0);

  // Speed: Brisk, fluid ~2.1 seconds per card (faster, snappier, zero sluggishness)
  const rotationSpeed = 0.46;

  // Smoothly rotate to a clicked card
  const rotateToCard = (targetIdx) => {
    if (total <= 0) return;
    const current = progressRef.current;
    let diff = (targetIdx - (current % total)) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff += total;
    targetProgressRef.current = current + diff;
  };

  // Sync external activeIdx changes (e.g., when user clicks 01, 02, 03 on the numbers capsule)
  useEffect(() => {
    if (activeIdx !== lastReportedIdxRef.current) {
      lastReportedIdxRef.current = activeIdx;
      rotateToCard(activeIdx);
    }
  }, [activeIdx, total]);

  // Pure 60 FPS RequestAnimationFrame Loop (Zero React Re-render, Zero Stutter)
  useEffect(() => {
    if (total <= 0) return;
    let animId: number;
    let isRunning = false;
    lastTimeRef.current = performance.now();
    let observer: IntersectionObserver | null = null;

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        lastTimeRef.current = performance.now();
        animId = requestAnimationFrame(loop);
      }
    };

    const stopLoop = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animId);
      }
    };

    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting ?? true;
          if (visible) {
            startLoop();
          } else {
            stopLoop();
          }
        },
        { threshold: 0.02 }
      );
      observer.observe(containerRef.current);
    } else {
      startLoop();
    }

    const loop = (now: number) => {
      if (!isRunning) return;

      // Guard against frame jump on tab switch
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      // Natural forward flow: progress advances smoothly
      if (targetProgressRef.current !== null) {
        const step = (targetProgressRef.current - progressRef.current) * 0.15;
        progressRef.current += step;
        if (Math.abs(targetProgressRef.current - progressRef.current) < 0.005) {
          progressRef.current = targetProgressRef.current;
          targetProgressRef.current = null;
        }
      } else if (!isDraggingRef.current && total > 1) {
        progressRef.current += rotationSpeed * dt;
      }

      const currentProgress = progressRef.current;

      // 100% GPU-accelerated direct DOM transform (ZERO repaint lag)
      for (let idx = 0; idx < total; idx++) {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) continue;

        // Natural forward flow towards the LEFT:
        // Upcoming cards (01 -> 02 -> 03) arrive from the right and glide to the left
        let diff = (idx - currentProgress) % total;
        if (diff < -total / 2) diff += total;
        if (diff > total / 2) diff -= total;

        const style = getCardStyle(diff);
        cardEl.style.transform = `translate3d(${style.translateX}px, ${style.translateY}px, 0) rotate(${style.rotateZ}deg) scale(${style.scale})`;
        cardEl.style.opacity = style.opacity;

        // Only update z-index when integer level changes to prevent compositor thrashing
        if (cardEl.dataset.z !== String(style.zIndex)) {
          cardEl.dataset.z = String(style.zIndex);
          cardEl.style.zIndex = style.zIndex;
        }

        const isClickable = style.opacity > 0.08;
        if (cardEl.dataset.click !== (isClickable ? '1' : '0')) {
          cardEl.dataset.click = isClickable ? '1' : '0';
          cardEl.style.pointerEvents = isClickable ? 'auto' : 'none';
        }

        // GPU-accelerated glow opacity (composite only, zero repaint!)
        const glowEl = glowRefs.current[idx];
        if (glowEl) {
          const glowOpacity = Math.max(0, 1 - Math.abs(diff) * 2.2);
          glowEl.style.opacity = glowOpacity;
        }
      }

      // Rotate circular turntable dial in the background along with cards
      if (dialRef.current) {
        dialRef.current.style.transform = `translate3d(0,0,0) rotate(${-currentProgress * 25}deg)`;
      }

      // Detect active front card (when it crosses center)
      const frontIdx = ((Math.round(currentProgress) % total) + total) % total;
      if (frontIdx !== lastReportedIdxRef.current) {
        lastReportedIdxRef.current = frontIdx;

        // Directly update the VISIT LIVE DEMO button without triggering React re-render!
        const currentProjects = projectsRef.current;
        const frontProj = currentProjects[frontIdx];
        if (visitBtnRef.current && frontProj) {
          const url = (frontProj.demoUrl && frontProj.demoUrl !== 'https://github.com/stl-sahadat')
            ? frontProj.demoUrl
            : (frontProj.githubUrl || frontProj.demoUrl || '#');
          visitBtnRef.current.href = url;
          visitBtnRef.current.title = `Visit ${frontProj.title || 'Live Demo'}`;
        }

        // Notify parent HUD once per card transition
        if (onActiveChangeRef.current) {
          onActiveChangeRef.current(frontIdx);
        }
      }

      if (isRunning) {
        animId = requestAnimationFrame(loop);
      }
    };

    return () => {
      if (observer) observer.disconnect();
      stopLoop();
    };
  }, [total]);

  // Touch & Mouse Drag handlers for manual spin
  const onPointerDown = (e) => {
    isDraggingRef.current = true;
    targetProgressRef.current = null;
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartProgressRef.current = progressRef.current;
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartXRef.current;
    // Natural drag towards left: swipe left -> next card advances
    progressRef.current = dragStartProgressRef.current - (deltaX / 110);
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
  };

  // Wheel listener: trackpad / mouse wheel momentum
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      targetProgressRef.current = null;
      const delta = (e.deltaY || e.deltaX) * 0.0025;
      progressRef.current += delta;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [total]);

  const initialProject = projects[activeIdx] || projects[0];
  const initialUrl = (initialProject?.demoUrl && initialProject?.demoUrl !== 'https://github.com/stl-sahadat')
    ? initialProject.demoUrl
    : (initialProject?.githubUrl || initialProject?.demoUrl || '#');

  return (
    <div
      ref={containerRef}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      className="relative w-full h-[470px] sm:h-[510px] flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Background Soft Radiance Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 3D Rotating Circular Turntable Dial Base */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none select-none">
        <div
          ref={dialRef}
          className="w-full h-full rounded-full border-2 border-dashed border-red-500/20 bg-gradient-to-b from-[#120508]/40 to-transparent flex items-center justify-center relative shadow-[0_0_80px_rgba(239,35,60,0.1)_inset]"
        >
          {/* Inner Dial Ring */}
          <div className="w-[390px] h-[390px] rounded-full border border-white/10 flex items-center justify-center">
            {/* Top Heading */}
            <div className="absolute inset-x-0 top-3 text-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-crimson/80 font-bold">
                ▲ ROTATING CIRCLE WHEEL
              </span>
            </div>
            <div className="w-[280px] h-[280px] rounded-full border border-white/5" />
          </div>
        </div>
      </div>

      {/* Center Fan Stage */}
      <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
        {projects.map((proj, idx) => {
          return (
            <div
              key={proj.id || idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={(e) => {
                e.stopPropagation();
                // NEVER open website or app link on card click!
                // User explicitly requested: "er opore click korle web site dhok be na ba app link ashbe na"
                rotateToCard(idx);
              }}
              style={{
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform, opacity',
                transition: 'none',
              }}
              className="absolute w-[240px] sm:w-[275px] h-[340px] sm:h-[385px] rounded-[24px] p-3.5 bg-gradient-to-b from-[#181824] via-[#0f0f18] to-[#08080f] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer group"
            >
              {/* Active Neon Glow Overlay (Direct composite opacity, zero transition thrashing) */}
              <div
                ref={(el) => (glowRefs.current[idx] = el)}
                className="absolute inset-0 rounded-[24px] border-2 border-red-500/90 pointer-events-none"
                style={{
                  boxShadow: '0 20px 50px rgba(239,35,60,0.4), 0 0 25px rgba(239,35,60,0.25)',
                  opacity: idx === activeIdx ? 1 : 0,
                  willChange: 'opacity',
                }}
              />

              {/* Inner Card Screen Area */}
              <div className="relative w-full h-[62%] rounded-[18px] overflow-hidden bg-black/60 mb-3 border border-white/10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge: Pill like reference */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/85 border border-white/20 text-[9px] font-mono font-bold tracking-wider text-white">
                    {proj.badge || 'APP'}
                  </span>
                </div>
              </div>

              {/* Bottom Info: Editorial Typography */}
              <div className="px-1 space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-crimson truncate">
                    {proj.category || 'APPLICATION'}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide truncate leading-tight group-hover:text-rose-400 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-[11px] font-sans text-zinc-400 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-zinc-400 pointer-events-none">
                <span>PRODUCTION APP</span>
                <span className="text-zinc-500 font-mono text-[9px]">
                  CLOUD & AI SUITE
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Centered VISIT LIVE DEMO Button (Matching Let's Talk 3D Gem Luxury Pill) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 select-none">
        <a
          ref={visitBtnRef}
          href={initialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          title={`Visit ${initialProject?.title || 'Live Demo'}`}
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full overflow-hidden border border-white/20 hover:border-crimson/50 bg-gradient-to-r from-[#14141e] via-[#0d0d14] to-[#181116] text-white text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(220,38,38,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)] cursor-pointer whitespace-nowrap"
        >
          {/* Sweeping Holographic Shimmer Ray on Hover */}
          <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* 3D Holographic Globe & Radar Pulse Live Demo Icon */}
          <LiveDemo3DIcon />

          {/* Clean Modern Typography */}
          <span className="relative z-10 text-white font-bold tracking-wide">
            Visit Live Demo
          </span>

          {/* Sleek Arrow Up Right on Right */}
          <ArrowUpRight
            size={14}
            className="relative z-10 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
          />
        </a>
      </div>
    </div>
  );
}
