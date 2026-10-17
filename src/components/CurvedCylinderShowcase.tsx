import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CurvedCylinderShowcaseProps {
  projects: any[];
  activeIdx?: number;
  onActiveChange?: (idx: number) => void;
  onProjectClick?: ((proj: any) => void) | null;
  onPauseChange?: (paused: boolean) => void;
}

/**
 * Checks whether WebGL is supported and can create a valid rendering context.
 */
function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    return Boolean(gl);
  } catch (e) {
    return false;
  }
}

/**
 * ZeroGap3DShowcase:
 * Bulletproof CSS 3D fallback for browsers/PCs where WebGL is disabled or GPU crashed.
 * Cards touch edge-to-edge with ZERO GAP, featuring cylindrical perspective,
 * Bebas Neue typography, red monospace category, and glowing LIVE button.
 */
function ZeroGap3DShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
}: CurvedCylinderShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);

  const currentAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const wheelVelocityRef = useRef(0);

  const activeIdxRef = useRef(activeIdx);
  const lastReportedIdxRef = useRef(activeIdx);
  const onActiveChangeRef = useRef(onActiveChange);
  const onPauseChangeRef = useRef(onPauseChange);

  const isSnappingRef = useRef(false);
  const snapTargetAngleRef = useRef(0);

  const [scale, setScale] = useState(1);
  const scaleRef = useRef(scale);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    onPauseChangeRef.current = onPauseChange;
  }, [onPauseChange]);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 440) setScale(0.70);
      else if (w < 640) setScale(0.80);
      else if (w < 768) setScale(0.88);
      else if (w < 1024) setScale(0.95);
      else setScale(1.0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = projects.length || 1;
  const numSlots = 5;
  const step = (Math.PI * 2) / numSlots;

  useEffect(() => {
    if (activeIdx === lastReportedIdxRef.current) return;
    lastReportedIdxRef.current = activeIdx;
    if (projects.length === 0) return;

    const currentFront = Math.round(-currentAngleRef.current / step);
    const currentFrontIdx = ((currentFront % total) + total) % total;
    let diff = activeIdx - currentFrontIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    snapTargetAngleRef.current = currentAngleRef.current - diff * step;
    isSnappingRef.current = true;
  }, [activeIdx, total, step, projects.length]);

  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      animationId = requestAnimationFrame(animate);
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isSnappingRef.current) {
        const diff = snapTargetAngleRef.current - currentAngleRef.current;
        if (Math.abs(diff) < 0.004) {
          currentAngleRef.current = snapTargetAngleRef.current;
          isSnappingRef.current = false;
        } else {
          currentAngleRef.current += diff * 0.14;
        }
      } else if (!isDraggingRef.current) {
        const baseSpeed = 0.165;
        currentAngleRef.current += (-baseSpeed + wheelVelocityRef.current) * delta;
        wheelVelocityRef.current *= 0.94;
        if (Math.abs(wheelVelocityRef.current) < 0.001) wheelVelocityRef.current = 0;
      }

      if (cylinderRef.current) {
        cylinderRef.current.style.transform = `scale(${scaleRef.current}) rotateX(-3.5deg) rotateY(${currentAngleRef.current}rad)`;
      }

      const stepProgress = -currentAngleRef.current / step;
      const frontIdx = ((Math.round(stepProgress) % total) + total) % total;
      if (frontIdx !== activeIdxRef.current) {
        activeIdxRef.current = frontIdx;
        lastReportedIdxRef.current = frontIdx;
        onActiveChangeRef.current?.(frontIdx);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [step, total]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== undefined && e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = currentAngleRef.current;
    dragDistanceRef.current = 0;
    isSnappingRef.current = false;
    wheelVelocityRef.current = 0;
    onPauseChangeRef.current?.(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(deltaX);
    currentAngleRef.current = dragStartAngleRef.current + deltaX * 0.0075;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    onPauseChangeRef.current?.(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    isSnappingRef.current = false;
    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) < 0.2) return;
    wheelVelocityRef.current -= delta * 0.0028;
    wheelVelocityRef.current = Math.max(-2.5, Math.min(2.5, wheelVelocityRef.current));
  };

  const handleCardClick = (proj: any) => {
    if (dragDistanceRef.current > 6) return;
    if (onProjectClick) {
      onProjectClick(proj);
    } else if (proj?.demoUrl && proj.demoUrl !== 'https://github.com/stl-sahadat') {
      window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
    } else if (proj?.githubUrl) {
      window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const slots = [0, 1, 2, 3, 4];
  const fallbackGradients = [
    'linear-gradient(135deg, #1e1b4b 0%, #0284c7 40%, #f97316 100%)',
    'linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #831843 100%)',
    'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)',
    'linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)',
    'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #3b0764 100%)',
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing overflow-visible"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      title="Drag or swipe to rotate the 3D showcase"
    >
      <div
        className="relative w-full max-w-[620px] h-[340px] flex items-center justify-center overflow-visible"
        style={{
          perspective: '1100px',
          perspectiveOrigin: '50% 50%',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          ref={cylinderRef}
          className="absolute w-0 h-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: `scale(${scale}) rotateX(-3.5deg) rotateY(0rad)`,
          }}
        >
          {/* Central Obsidian Core */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '380px',
              height: '380px',
              left: '-190px',
              top: '-190px',
              transform: 'rotateX(90deg)',
              background: 'radial-gradient(circle at center, #0a0a14 0%, #030306 85%)',
              boxShadow: '0 0 60px rgba(0,0,0,0.95)',
            }}
          />

          {/* 5 Physical Zero-Gap Panels */}
          {slots.map((s) => {
            const slotAngleDeg = s * 72;
            const projIdx = s % total;
            const proj = projects[projIdx] || projects[0] || {};
            const bgGradient = fallbackGradients[s % fallbackGradients.length];

            return (
              <div
                key={`slot-${s}`}
                onClick={() => handleCardClick(proj)}
                className="absolute overflow-hidden cursor-pointer"
                style={{
                  width: '404px',
                  height: '250px',
                  left: '-202px',
                  top: '-125px',
                  transform: `rotateY(${slotAngleDeg}deg) translateZ(275px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  background: '#090912',
                  borderRight: '1.5px solid rgba(255,255,255,0.22)',
                  borderLeft: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.25), inset 0 -1.5px 0 rgba(239,68,68,0.3)',
                }}
              >
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title || 'Project'}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: bgGradient }} />
                )}

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(5,5,10,0.10) 0%, rgba(5,5,10,0.30) 40%, rgba(5,5,10,0.88) 80%, #050508 100%)',
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 22%, transparent 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.45) 100%)',
                  }}
                />

                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-black/85 border border-white/28 text-[10px] font-mono font-bold tracking-widest text-zinc-200 uppercase backdrop-blur-md shadow-md pointer-events-none">
                  {proj.badge || proj.category || 'FEATURED'}
                </div>

                <div className="absolute bottom-3.5 left-5 right-28 pointer-events-none">
                  <div
                    className="uppercase tracking-wider text-white drop-shadow-md leading-none truncate"
                    style={{
                      fontFamily: '"Bebas Neue", "Impact", "Arial Black", sans-serif',
                      fontSize: '28px',
                      letterSpacing: '0.05em',
                      textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                    }}
                  >
                    {proj.title}
                  </div>
                  <div
                    className="font-bold tracking-widest text-red-500 uppercase mt-0.5 drop-shadow truncate"
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
                    }}
                  >
                    {proj.tagline || proj.category || 'WEB PLATFORM'}
                  </div>
                </div>

                <div className="absolute bottom-3.5 right-4 px-3 py-1 rounded-full bg-black/90 border border-red-500/85 shadow-[0_0_12px_rgba(239,68,68,0.45)] flex items-center gap-1.5 text-[11px] font-bold text-white tracking-wider pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]" />
                  <span>LIVE ↗</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curved Glass Rims */}
        <div
          className="absolute top-8 left-6 right-6 h-6 rounded-[50%] pointer-events-none"
          style={{
            borderTop: '1.5px solid rgba(255,255,255,0.22)',
            boxShadow: '0 -2px 12px rgba(255,255,255,0.06)',
          }}
        />
        <div
          className="absolute bottom-8 left-6 right-6 h-6 rounded-[50%] pointer-events-none"
          style={{
            borderBottom: '1.5px solid rgba(239,68,68,0.25)',
            boxShadow: '0 2px 14px rgba(239,68,68,0.12)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * Main CurvedCylinderShowcase:
 * Tries Three.js WebGL for the authentic 100% round ("গোল") curved cylinder.
 * If WebGL is unavailable or fails context creation, seamlessly renders ZeroGap3DShowcase
 * so that PC browsers NEVER see a blank void!
 */
export default function CurvedCylinderShowcase(props: CurvedCylinderShowcaseProps) {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (!isWebGLSupported()) {
      setUseFallback(true);
    }
  }, []);

  if (useFallback) {
    return <ZeroGap3DShowcase {...props} />;
  }

  return <CurvedCylinderWebGL {...props} onFallback={() => setUseFallback(true)} />;
}

/**
 * Authentic Three.js 3D Curved Glass Cylinder (32 Radial Segments - 100% Round)
 */
function CurvedCylinderWebGL({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
  onFallback,
}: CurvedCylinderShowcaseProps & { onFallback?: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const currentAngleRef = useRef(0);
  const isInteractingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const activeIdxRef = useRef(activeIdx);
  const onActiveChangeRef = useRef(onActiveChange);
  const onPauseChangeRef = useRef(onPauseChange);

  const lastReportedIdxRef = useRef(activeIdx);
  const isSnappingRef = useRef(false);
  const snapTargetAngleRef = useRef(0);
  const wheelVelocityRef = useRef(0);

  useEffect(() => {
    onPauseChangeRef.current = onPauseChange;
  }, [onPauseChange]);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    if (activeIdx === lastReportedIdxRef.current) return;
    lastReportedIdxRef.current = activeIdx;
    if (projects.length === 0) return;

    const total = projects.length;
    const numSlots = 5;
    const step = (Math.PI * 2) / numSlots;

    const currentFront = Math.round(-currentAngleRef.current / step);
    const currentFrontIdx = ((currentFront % total) + total) % total;
    let diff = activeIdx - currentFrontIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    snapTargetAngleRef.current = currentAngleRef.current - diff * step;
    isSnappingRef.current = true;
  }, [activeIdx, projects.length]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || projects.length === 0) return;

    let renderer: THREE.WebGLRenderer,
      scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      carouselGroup: THREE.Group,
      animationId: number;
    const cardMeshes: THREE.Mesh[] = [];
    const total = projects.length;

    const numSlots = 5;
    const radius = 2.75;
    const height = 1.55;
    const step = (Math.PI * 2) / numSlots;
    const arcLength = step;

    try {
      scene = new THREE.Scene();
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

      const width = mount.clientWidth || 600;
      const heightPx = mount.clientHeight || 420;

      camera = new THREE.PerspectiveCamera(46, width / heightPx, 0.1, 100);
      camera.position.set(0, 0.02, 5.2);
      camera.lookAt(0, 0.02, 0);

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobileDevice,
          powerPreference: 'default',
        });
      } catch (e) {
        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
          });
        } catch (e2) {
          console.warn('WebGL completely unavailable, activating fallback.');
          onFallback?.();
          return;
        }
      }

      renderer.setPixelRatio(isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, heightPx);
      renderer.setClearColor(0x000000, 0);

      const dom = renderer.domElement;
      dom.style.display = 'block';
      dom.style.maxWidth = '100%';
      dom.style.maxHeight = '100%';
      dom.style.outline = 'none';

      mount.innerHTML = '';
      mount.appendChild(dom);

      carouselGroup = new THREE.Group();
      carouselGroup.rotation.x = -0.035;
      scene.add(carouselGroup);

      // Central obsidian core
      const coreRadius = radius * 0.58;
      const coreGeom = new THREE.CylinderGeometry(
        coreRadius,
        coreRadius,
        height * 1.15,
        isMobileDevice ? 16 : 32,
        1,
        false
      );
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x050508,
        transparent: true,
        opacity: 0.96,
      });
      const coreMesh = new THREE.Mesh(coreGeom, coreMat);
      coreMesh.position.y = 0;
      carouselGroup.add(coreMesh);

      // Textures and panels
      const textures: any[] = [];
      const texWidth = isMobileDevice ? 512 : 1024;
      const texHeight = isMobileDevice ? 320 : 640;
      const scaleFactor = isMobileDevice ? 0.5 : 1;

      projects.forEach((proj: any, idx: number) => {
        const canvas = document.createElement('canvas');
        canvas.width = texWidth;
        canvas.height = texHeight;
        const ctx = canvas.getContext('2d');

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        textures.push({ texture, canvas, ctx, proj, idx, texWidth, texHeight, scaleFactor });

        const drawPanel = (img: HTMLImageElement | null = null) => {
          if (!ctx) return;
          ctx.save();
          if (scaleFactor !== 1) {
            ctx.scale(scaleFactor, scaleFactor);
          }
          ctx.clearRect(0, 0, 1024, 640);

          ctx.fillStyle = '#0a0a14';
          ctx.fillRect(0, 0, 1024, 640);

          if (img) {
            try {
              ctx.drawImage(img, 0, 0, 1024, 640);
            } catch (e) {
              const grad = ctx.createLinearGradient(0, 0, 1024, 640);
              grad.addColorStop(0, '#1a0508');
              grad.addColorStop(0.5, '#0d0d1a');
              grad.addColorStop(1, '#050508');
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, 1024, 640);
            }
          } else {
            const grad = ctx.createLinearGradient(0, 0, 1024, 640);
            grad.addColorStop(0, '#1a0508');
            grad.addColorStop(0.5, '#0d0d1a');
            grad.addColorStop(1, '#050508');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 640);
          }

          const vGrad = ctx.createLinearGradient(0, 0, 0, 640);
          vGrad.addColorStop(0, 'rgba(5, 5, 8, 0.20)');
          vGrad.addColorStop(0.4, 'rgba(5, 5, 8, 0.40)');
          vGrad.addColorStop(0.75, 'rgba(5, 5, 8, 0.88)');
          vGrad.addColorStop(1, 'rgba(5, 5, 8, 0.98)');
          ctx.fillStyle = vGrad;
          ctx.fillRect(0, 0, 1024, 640);

          const hGrad = ctx.createLinearGradient(0, 0, 1024, 0);
          hGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
          hGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.02)');
          hGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
          hGrad.addColorStop(0.8, 'rgba(0, 0, 0, 0.1)');
          hGrad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
          ctx.fillStyle = hGrad;
          ctx.fillRect(0, 0, 1024, 640);

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(1023, 0);
          ctx.lineTo(1023, 640);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(1, 0);
          ctx.lineTo(1, 640);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.20)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, 1);
          ctx.lineTo(1024, 1);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(239, 35, 60, 0.35)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, 639);
          ctx.lineTo(1024, 639);
          ctx.stroke();

          const badgeText = (proj.badge || proj.category || 'FEATURED').toUpperCase();
          ctx.font = 'bold 20px monospace';
          const badgeMetrics = ctx.measureText(badgeText);
          const badgeWidth = badgeMetrics.width + 36;
          const badgeHeight = 36;
          const badgeX = 1024 - badgeWidth - 40;
          const badgeY = 36;

          ctx.fillStyle = 'rgba(7, 7, 14, 0.85)';
          ctx.beginPath();
          ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 18);
          ctx.fill();

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.fillStyle = '#e4e4e7';
          ctx.font = 'bold 18px monospace';
          ctx.fillText(badgeText, badgeX + 18, badgeY + 24);

          const title = (proj.title || 'UNTITLED PROJECT').toUpperCase();
          ctx.fillStyle = '#ffffff';
          ctx.font = '900 52px "Bebas Neue", "Impact", "Arial Black", sans-serif';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 4;

          let displayTitle = title;
          if (ctx.measureText(displayTitle).width > 720) {
            while (ctx.measureText(displayTitle + '...').width > 720 && displayTitle.length > 0) {
              displayTitle = displayTitle.slice(0, -1);
            }
            displayTitle += '...';
          }
          ctx.fillText(displayTitle, 48, 550);

          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;

          const tagline = (proj.tagline || proj.category || 'WEB APPLICATION').toUpperCase();
          ctx.fillStyle = '#ef233c';
          ctx.font = 'bold 22px monospace';
          let displayTagline = tagline;
          if (ctx.measureText(displayTagline).width > 720) {
            while (ctx.measureText(displayTagline + '...').width > 720 && displayTagline.length > 0) {
              displayTagline = displayTagline.slice(0, -1);
            }
            displayTagline += '...';
          }
          ctx.fillText(displayTagline, 48, 588);

          const liveText = 'LIVE ↗';
          const pillWidth = 142;
          const pillHeight = 44;
          const pillX = 1024 - pillWidth - 48;
          const pillY = 548;
          const dotRadius = 5;
          const dotGap = 9;
          const pillPadX = 18;

          ctx.shadowColor = 'rgba(239, 35, 60, 0.5)';
          ctx.shadowBlur = 16;
          ctx.fillStyle = 'rgba(7, 7, 14, 0.88)';
          ctx.beginPath();
          ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 22);
          ctx.fill();

          ctx.strokeStyle = 'rgba(239, 35, 60, 0.95)';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;

          const dotX = pillX + pillPadX + dotRadius;
          const dotY = pillY + pillHeight / 2;
          ctx.fillStyle = '#ef233c';
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 20px monospace';
          ctx.fillText(liveText, dotX + dotRadius + dotGap, pillY + 28);

          ctx.restore();
          texture.needsUpdate = true;
        };

        drawPanel();

        if (proj.image) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => drawPanel(img);
          img.src = proj.image;
        }
      });

      for (let s = 0; s < numSlots; s++) {
        const initialProjIdx = s % total;
        const thetaStart = s * step - arcLength / 2;
        const panelGeom = new THREE.CylinderGeometry(
          radius,
          radius,
          height,
          32,
          1,
          true,
          thetaStart,
          arcLength
        );

        const panelMat = new THREE.MeshBasicMaterial({
          map: textures[initialProjIdx].texture,
          transparent: true,
          side: THREE.FrontSide,
        });

        const panelMesh = new THREE.Mesh(panelGeom, panelMat);
        panelMesh.userData = {
          slotIdx: s,
          currentProjIdx: initialProjIdx,
          proj: projects[initialProjIdx],
        };
        cardMeshes.push(panelMesh);
        carouselGroup.add(panelMesh);
      }

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const getNormalizedMouse = (e: any) => {
        const rect = dom.getBoundingClientRect();
        const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
        const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      };

      const handlePointerDown = (e: any) => {
        if (e.button !== undefined && e.button !== 0 && e.button !== 1) return;
        if (e.button === 1) e.preventDefault();
        isSnappingRef.current = false;
        wheelVelocityRef.current = 0;
        isDraggingRef.current = true;
        isInteractingRef.current = true;
        dragStartXRef.current = e.clientX || e.touches?.[0]?.clientX || 0;
        dragStartAngleRef.current = currentAngleRef.current;
        onPauseChangeRef.current?.(true);
      };

      const handlePointerMove = (e: any) => {
        getNormalizedMouse(e);
        if (isDraggingRef.current) {
          const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
          const deltaX = clientX - dragStartXRef.current;
          currentAngleRef.current = dragStartAngleRef.current + deltaX * 0.018;
        } else {
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(cardMeshes);
          dom.style.cursor = intersects.length > 0 ? 'pointer' : 'grab';
        }
      };

      const handlePointerUp = () => {
        if (isDraggingRef.current) isDraggingRef.current = false;
        isInteractingRef.current = false;
        onPauseChangeRef.current?.(false);
      };

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        isSnappingRef.current = false;
        const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (Math.abs(delta) < 0.2) return;
        wheelVelocityRef.current -= delta * 0.0028;
        wheelVelocityRef.current = Math.max(-2.8, Math.min(2.8, wheelVelocityRef.current));
      };

      const handleClick = (e: any) => {
        getNormalizedMouse(e);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);
        if (intersects.length > 0) {
          const hit = (intersects[0].object as THREE.Mesh).userData;
          const proj = projects[hit.currentProjIdx] || hit.proj;
          if (onProjectClick) {
            onProjectClick(proj);
          } else if (proj?.demoUrl && proj.demoUrl !== 'https://github.com/stl-sahadat') {
            window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
          } else if (proj?.githubUrl) {
            window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
          }
        }
      };

      dom.addEventListener('mousedown', handlePointerDown);
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      dom.addEventListener('mouseleave', handlePointerUp);
      dom.addEventListener('wheel', handleWheel, { passive: false });
      dom.addEventListener('click', handleClick);

      dom.addEventListener('touchstart', handlePointerDown, { passive: true });
      window.addEventListener('touchmove', handlePointerMove, { passive: true });
      window.addEventListener('touchend', handlePointerUp);

      const handleResize = () => {
        if (!mount) return;
        const newWidth = mount.clientWidth || 600;
        const newHeight = mount.clientHeight || 380;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        renderer.render(scene, camera);
      };
      window.addEventListener('resize', handleResize);

      let resizeObserver: ResizeObserver | null = null;
      if (typeof ResizeObserver !== 'undefined' && mount) {
        resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const w = entry.contentRect.width;
            const h = entry.contentRect.height;
            if (w > 50 && h > 50 && renderer && camera) {
              camera.aspect = w / h;
              camera.updateProjectionMatrix();
              renderer.setSize(w, h);
              renderer.render(scene, camera);
            }
          }
        });
        resizeObserver.observe(mount);
      }

      let lastTime = performance.now();
      renderer.render(scene, camera);

      const animate = (now: number) => {
        animationId = requestAnimationFrame(animate);
        const delta = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        if (isSnappingRef.current) {
          const diff = snapTargetAngleRef.current - currentAngleRef.current;
          if (Math.abs(diff) < 0.005) {
            currentAngleRef.current = snapTargetAngleRef.current;
            isSnappingRef.current = false;
          } else {
            currentAngleRef.current += diff * 0.12;
          }
        } else if (!isDraggingRef.current) {
          const baseSpeed = 0.165;
          currentAngleRef.current += (-baseSpeed + wheelVelocityRef.current) * delta;
          wheelVelocityRef.current *= 0.94;
          if (Math.abs(wheelVelocityRef.current) < 0.001) wheelVelocityRef.current = 0;
        }

        carouselGroup.rotation.y = currentAngleRef.current;

        if (total > numSlots) {
          for (let s = 0; s < numSlots; s++) {
            const slotWorldAngle = currentAngleRef.current + s * step;
            if (Math.cos(slotWorldAngle) < -0.15) {
              const k = Math.round((-currentAngleRef.current - s * step) / (Math.PI * 2));
              const targetStep = s + k * numSlots;
              const targetProjIdx = ((targetStep % total) + total) % total;
              const mesh = cardMeshes[s];
              if (mesh && mesh.userData.currentProjIdx !== targetProjIdx) {
                mesh.userData.currentProjIdx = targetProjIdx;
                mesh.userData.proj = projects[targetProjIdx];
                (mesh.material as THREE.MeshBasicMaterial).map = textures[targetProjIdx]?.texture;
                (mesh.material as THREE.MeshBasicMaterial).needsUpdate = true;
              }
            }
          }
        }

        const stepProgress = -currentAngleRef.current / step;
        const frontIdx = ((Math.round(stepProgress) % total) + total) % total;
        if (frontIdx !== activeIdxRef.current) {
          activeIdxRef.current = frontIdx;
          lastReportedIdxRef.current = frontIdx;
          if (onActiveChangeRef.current) onActiveChangeRef.current(frontIdx);
        }

        renderer.render(scene, camera);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (resizeObserver) resizeObserver.disconnect();
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        dom.removeEventListener('mousedown', handlePointerDown);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('mouseup', handlePointerUp);
        dom.removeEventListener('mouseleave', handlePointerUp);
        dom.removeEventListener('wheel', handleWheel);
        dom.removeEventListener('click', handleClick);
        dom.removeEventListener('touchstart', handlePointerDown);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('touchend', handlePointerUp);
        if (mount.contains(dom)) mount.removeChild(dom);
        renderer.dispose();
      };
    } catch (err) {
      console.warn('Three.js initialization failed, switching to zero-gap fallback:', err);
      onFallback?.();
    }
  }, [projects]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none overflow-visible"
      title="Drag or swipe to rotate the curved 3D glass cup"
    />
  );
}
