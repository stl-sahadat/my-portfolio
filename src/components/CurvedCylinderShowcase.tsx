import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

/**
 * CurvedCylinderShowcase:
 * A true 3D curved glass cylinder showcase for websites.
 * Dual-Engine Architecture:
 * 1. Primary Engine: Three.js WebGL Curved Cylinder (high-fidelity curved geometry).
 * 2. Fallback Engine: CSS 3D Curved Glass Cylinder (100% resilient on all browsers/flags).
 */

function isWebGLAvailable() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
    );
  } catch (e) {
    return false;
  }
}

// ============================================================================
// 1. PRIMARY ENGINE: THREE.JS WEBGL CURVED CYLINDER
// ============================================================================
function WebGLCurvedCylinderShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
  onFallback,
}: any) {
  const mountRef = useRef<HTMLDivElement>(null);
  const currentAngleRef = useRef(0);
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

  // Rotate to specific index when changed externally
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

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let carouselGroup: THREE.Group | null = null;
    let animationId: number;
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
      camera.position.set(0, 0.02, 5.20);
      camera.lookAt(0, 0.02, 0);

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobileDevice,
          powerPreference: 'default',
          failIfMajorPerformanceCaveat: false,
        });
      } catch (e1) {
        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            failIfMajorPerformanceCaveat: false,
          });
        } catch (e2) {
          console.warn('WebGL initialization failed, switching to CSS 3D fallback:', e2);
          onFallback?.();
          return;
        }
      }

      if (!renderer || !renderer.domElement) {
        onFallback?.();
        return;
      }

      renderer.setPixelRatio(isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, heightPx);
      renderer.setClearColor(0x000000, 0);

      const dom = renderer.domElement;
      dom.style.display = 'block';
      dom.style.maxWidth = '100%';
      dom.style.maxHeight = '100%';
      dom.style.borderRadius = '16px';

      // Context lost handler
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        console.warn('WebGL context lost, switching to CSS 3D fallback');
        onFallback?.();
      };
      dom.addEventListener('webglcontextlost', handleContextLost);

      mount.innerHTML = '';
      mount.appendChild(dom);

      carouselGroup = new THREE.Group();
      carouselGroup.rotation.x = -0.035;
      scene.add(carouselGroup);

      // 1. Central Dark Obsidian Core
      const coreRadius = radius * 0.58;
      const coreGeom = new THREE.CylinderGeometry(coreRadius, coreRadius, height * 1.15, isMobileDevice ? 16 : 32, 1, false);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x050508,
        transparent: true,
        opacity: 0.96,
      });
      const coreMesh = new THREE.Mesh(coreGeom, coreMat);
      coreMesh.position.y = 0;
      carouselGroup.add(coreMesh);

      // 2. Panel Canvas Textures
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
          try {
            ctx.save();
            if (scaleFactor !== 1) {
              ctx.scale(scaleFactor, scaleFactor);
            }
            ctx.clearRect(0, 0, 1024, 640);

            // Card Background
            ctx.fillStyle = '#0a0a14';
            ctx.fillRect(0, 0, 1024, 640);

            if (img) {
              try {
                ctx.drawImage(img, 0, 0, 1024, 640);
              } catch (drawErr) {
                // Fallback gradient if drawImage fails
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

            // Glass Vignette Gradient
            const vig = ctx.createLinearGradient(0, 0, 0, 640);
            vig.addColorStop(0, 'rgba(0,0,0,0.65)');
            vig.addColorStop(0.35, 'rgba(0,0,0,0.20)');
            vig.addColorStop(0.7, 'rgba(0,0,0,0.70)');
            vig.addColorStop(1, 'rgba(0,0,0,0.92)');
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, 1024, 640);

            // Vertical Glass Seams
            const seamGrad = ctx.createLinearGradient(0, 0, 0, 640);
            seamGrad.addColorStop(0, 'rgba(239, 35, 60, 0.45)');
            seamGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.28)');
            seamGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.28)');
            seamGrad.addColorStop(1, 'rgba(239, 35, 60, 0.45)');
            ctx.fillStyle = seamGrad;
            ctx.fillRect(0, 0, 2.5, 640);
            ctx.fillRect(1021.5, 0, 2.5, 640);

            // Top Badge
            const badgeText = proj.badge || 'PRODUCTION';
            ctx.font = 'bold 26px monospace';
            const badgeWidth = ctx.measureText(badgeText).width + 36;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
            ctx.beginPath();
            if (typeof (ctx as any).roundRect === 'function') {
              (ctx as any).roundRect(40, 40, badgeWidth, 48, 12);
            } else {
              ctx.rect(40, 40, badgeWidth, 48);
            }
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.fillText(badgeText, 58, 73);

            // Title & Category
            ctx.font = 'bold 58px "Bebas Neue", sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(proj.title || 'PROJECT TITLE', 45, 545);

            ctx.font = 'bold 24px monospace';
            ctx.fillStyle = '#ef233c';
            ctx.fillText(proj.category || 'AI SOFTWARE & ARCHITECTURE', 45, 585);

            // LIVE Action Pill
            const liveText = 'LIVE ↗';
            ctx.font = 'bold 24px monospace';
            const textWidth = ctx.measureText(liveText).width;
            const dotRadius = 4.5;
            const dotGap = 10;
            const pillPadX = 20;
            const pillWidth = pillPadX + dotRadius * 2 + dotGap + textWidth + pillPadX;
            const pillHeight = 46;
            const pillX = 1024 - 58 - pillWidth;
            const pillY = 528;

            const pillGlow = ctx.createRadialGradient(
              pillX + pillWidth / 2, pillY + pillHeight / 2, 4,
              pillX + pillWidth / 2, pillY + pillHeight / 2, pillWidth * 0.75
            );
            pillGlow.addColorStop(0, 'rgba(239, 35, 60, 0.35)');
            pillGlow.addColorStop(1, 'rgba(239, 35, 60, 0)');
            ctx.fillStyle = pillGlow;
            ctx.fillRect(pillX - 18, pillY - 14, pillWidth + 36, pillHeight + 28);

            ctx.fillStyle = 'rgba(7, 7, 14, 0.88)';
            ctx.beginPath();
            if (typeof (ctx as any).roundRect === 'function') {
              (ctx as any).roundRect(pillX, pillY, pillWidth, pillHeight, 14);
            } else {
              ctx.rect(pillX, pillY, pillWidth, pillHeight);
            }
            ctx.fill();

            const borderGrad = ctx.createLinearGradient(pillX, pillY, pillX + pillWidth, pillY + pillHeight);
            borderGrad.addColorStop(0, 'rgba(239, 35, 60, 0.95)');
            borderGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.45)');
            borderGrad.addColorStop(1, 'rgba(239, 35, 60, 0.95)');
            ctx.strokeStyle = borderGrad;
            ctx.lineWidth = 1.8;
            ctx.stroke();

            const dotX = pillX + pillPadX + dotRadius;
            const dotY = pillY + pillHeight / 2;
            ctx.fillStyle = '#ef233c';
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 22px monospace';
            ctx.fillText(liveText, dotX + dotRadius + dotGap, pillY + 31);

            ctx.restore();
            texture.needsUpdate = true;
          } catch (e) {
            console.warn('CurvedCylinder texture update error:', e);
          }
        };

        drawPanel();

        if (proj.image) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => drawPanel(img);
          img.onerror = () => {
            // Keep procedural crisp fallback
            drawPanel(null);
          };
          img.src = proj.image;
        }
      });

      // 3. Create 5 Physical Curved Slot Meshes
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
          map: textures[initialProjIdx]?.texture,
          transparent: true,
          side: THREE.DoubleSide,
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

      // 4. Pointer & Interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const getNormalizedMouse = (e: any) => {
        if (!dom) return;
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
        onPauseChangeRef.current?.(true);
        dragStartXRef.current = e.clientX || e.touches?.[0]?.clientX || 0;
        dragStartAngleRef.current = currentAngleRef.current;
      };

      const handlePointerMove = (e: any) => {
        getNormalizedMouse(e);
        if (isDraggingRef.current) {
          const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
          const deltaX = clientX - dragStartXRef.current;
          currentAngleRef.current = dragStartAngleRef.current + deltaX * 0.018;
        } else if (camera) {
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(cardMeshes);
          if (intersects.length > 0) {
            dom.style.cursor = 'pointer';
          } else {
            dom.style.cursor = 'grab';
          }
        }
      };

      const handlePointerUp = () => {
        isDraggingRef.current = false;
        onPauseChangeRef.current?.(false);
      };

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isSnappingRef.current = false;
        const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (Math.abs(delta) < 0.2) return;
        wheelVelocityRef.current -= delta * 0.0028;
        wheelVelocityRef.current = Math.max(-2.8, Math.min(2.8, wheelVelocityRef.current));
        currentAngleRef.current -= delta * 0.0008;
      };

      const handleClick = (e: any) => {
        if (!camera) return;
        getNormalizedMouse(e);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);
        if (intersects.length > 0) {
          const hit = (intersects[0].object as THREE.Mesh).userData;
          const proj = projects[hit.currentProjIdx] || hit.proj;
          if (onProjectClick) {
            onProjectClick(proj);
          } else if (proj && proj.demoUrl) {
            window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
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

      // Resize handling
      const handleResize = () => {
        if (!mount || !renderer || !camera) return;
        const newWidth = mount.clientWidth || 600;
        const newHeight = mount.clientHeight || 380;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        renderer.render(scene!, camera);
      };
      window.addEventListener('resize', handleResize);

      let resizeObserver: ResizeObserver | null = null;
      if (typeof ResizeObserver !== 'undefined' && mount) {
        resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const w = entry.contentRect.width;
            const h = entry.contentRect.height;
            if (w > 50 && h > 50 && renderer && camera && scene) {
              camera.aspect = w / h;
              camera.updateProjectionMatrix();
              renderer.setSize(w, h);
              try {
                renderer.render(scene, camera);
              } catch (e) {}
            }
          }
        });
        resizeObserver.observe(mount);
      }

      // Initial frame render
      try {
        renderer.render(scene, camera);
      } catch (renderInitErr) {
        console.warn('Initial render failed:', renderInitErr);
      }

      // 60fps Loop
      let lastTime = performance.now();
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
          if (Math.abs(wheelVelocityRef.current) < 0.001) {
            wheelVelocityRef.current = 0;
          }
        }

        if (carouselGroup) {
          carouselGroup.rotation.y = currentAngleRef.current;
        }

        // Texture streaming
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
          onActiveChangeRef.current?.(frontIdx);
        }

        if (renderer && scene && camera) {
          try {
            renderer.render(scene, camera);
          } catch (loopRenderErr) {
            // Ignore temporary frame error to prevent RAF breakdown
          }
        }
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (resizeObserver) resizeObserver.disconnect();
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        dom.removeEventListener('webglcontextlost', handleContextLost);
        dom.removeEventListener('mousedown', handlePointerDown);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('mouseup', handlePointerUp);
        dom.removeEventListener('mouseleave', handlePointerUp);
        dom.removeEventListener('wheel', handleWheel);
        dom.removeEventListener('click', handleClick);
        dom.removeEventListener('touchstart', handlePointerDown);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('touchend', handlePointerUp);
        if (mount.contains(dom)) {
          mount.removeChild(dom);
        }
        renderer?.dispose();
      };
    } catch (err) {
      console.error('Three.js setup error, triggering CSS 3D fallback:', err);
      onFallback?.();
    }
  }, [projects, onFallback]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none overflow-visible"
      title="Drag or swipe to rotate the curved 3D glass cup"
    />
  );
}

// ============================================================================
// 2. BULLETPROOF FALLBACK ENGINE: CSS 3D CURVED GLASS CYLINDER
// ============================================================================
function Css3DCurvedCylinderShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
}: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const activeIdxRef = useRef(activeIdx);
  const lastReportedIdxRef = useRef(activeIdx);
  const isSnappingRef = useRef(false);
  const snapTargetAngleRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const total = projects.length;
  const numSlots = 5;
  const stepDeg = 360 / numSlots;

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    if (activeIdx === lastReportedIdxRef.current) return;
    lastReportedIdxRef.current = activeIdx;
    if (total === 0) return;

    const currentFront = Math.round(-currentAngleRef.current / stepDeg);
    const currentFrontIdx = ((currentFront % total) + total) % total;
    let diff = activeIdx - currentFrontIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    snapTargetAngleRef.current = currentAngleRef.current - diff * stepDeg;
    isSnappingRef.current = true;
  }, [activeIdx, total, stepDeg]);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isSnappingRef.current) {
        const diff = snapTargetAngleRef.current - currentAngleRef.current;
        if (Math.abs(diff) < 0.2) {
          currentAngleRef.current = snapTargetAngleRef.current;
          isSnappingRef.current = false;
        } else {
          currentAngleRef.current += diff * 0.12;
        }
      } else if (!isDraggingRef.current) {
        // Continuous rotation ~9.45 deg/sec matching WebGL baseline
        currentAngleRef.current -= 9.45 * delta;
      }

      if (carouselRef.current) {
        carouselRef.current.style.transform = `rotateX(-2.5deg) rotateY(${currentAngleRef.current}deg)`;
      }

      const stepProgress = -currentAngleRef.current / stepDeg;
      const frontIdx = ((Math.round(stepProgress) % total) + total) % total;
      if (frontIdx !== activeIdxRef.current) {
        activeIdxRef.current = frontIdx;
        lastReportedIdxRef.current = frontIdx;
        onActiveChange?.(frontIdx);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [total, stepDeg, onActiveChange]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isSnappingRef.current = false;
    isDraggingRef.current = true;
    onPauseChange?.(true);
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = currentAngleRef.current;
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    currentAngleRef.current = dragStartAngleRef.current + deltaX * 0.55;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    onPauseChange?.(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none overflow-hidden"
      style={{ perspective: '1100px', perspectiveOrigin: '50% 50%' }}
      title="Drag or swipe to rotate the curved 3D glass cup"
    >
      {/* Central dark obsidian cylinder core */}
      <div className="absolute w-44 h-52 rounded-full bg-gradient-to-b from-[#0a0a14] via-[#050508] to-[#0a0a14] border border-white/5 shadow-[0_0_60px_rgba(239,35,60,0.15)] pointer-events-none" />

      {/* 3D Rotating Cylinder Wheel */}
      <div
        ref={carouselRef}
        className="relative w-0 h-0"
        style={{
          transformStyle: 'preserve-3d',
          transition: isDraggingRef.current ? 'none' : 'transform 0.05s linear',
        }}
      >
        {Array.from({ length: numSlots }).map((_, slotIdx) => {
          const projIdx = slotIdx % total;
          const proj = projects[projIdx];
          if (!proj) return null;
          const slotAngle = slotIdx * stepDeg;

          return (
            <div
              key={slotIdx}
              onClick={() => {
                if (!isDraggingRef.current) {
                  if (onProjectClick) onProjectClick(proj);
                  else if (proj.demoUrl) window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              className="absolute cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              style={{
                width: '320px',
                height: '200px',
                left: '-160px',
                top: '-100px',
                transform: `rotateY(${slotAngle}deg) translateZ(280px)`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'visible',
              }}
            >
              {/* Glass Panel Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-[#0a0a14] shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
                {/* Background Image / Gradient */}
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a0508] via-[#0d0d1a] to-[#050508]" />
                )}

                {/* Glass Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 via-black/70 to-black/95 pointer-events-none" />

                {/* Vertical Seam Glass Dividers */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/50 via-white/30 to-red-500/50" />
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/50 via-white/30 to-red-500/50" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/85 border border-white/30 text-[10px] font-mono font-bold tracking-wider text-white uppercase shadow-sm">
                  {proj.badge || 'PRODUCTION'}
                </div>

                {/* Bottom Bar: Title & Category */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bebas text-2xl text-white tracking-wide truncate drop-shadow-md">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-[10px] font-bold text-red-400 tracking-wider uppercase truncate">
                      {proj.category || 'AI SOFTWARE & ARCHITECTURE'}
                    </p>
                  </div>

                  {/* LIVE Pill */}
                  <div className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07070e]/90 border border-red-500/60 shadow-[0_0_12px_rgba(239,35,60,0.35)]">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-white tracking-wider">LIVE ↗</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// 3. MASTER EXPORT: SEAMLESS AUTO-SWITCHING SHOWCASE
// ============================================================================
export default function CurvedCylinderShowcase(props: any) {
  const [webglFailed, setWebglFailed] = useState(() => !isWebGLAvailable());

  const handleFallback = useCallback(() => {
    setWebglFailed(true);
  }, []);

  if (webglFailed) {
    return <Css3DCurvedCylinderShowcase {...props} />;
  }

  return <WebGLCurvedCylinderShowcase {...props} onFallback={handleFallback} />;
}
