import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CurvedCylinderShowcaseProps {
  projects: any[];
  activeIdx?: number;
  onActiveChange?: (idx: number) => void;
  onProjectClick?: ((proj: any) => void) | null;
  onPauseChange?: (paused: boolean) => void;
}

/**
 * CurvedCylinderShowcase:
 * 100% Authentic Round ("গোল") 3D Curved Glass Cylinder Showcase.
 * Built using Three.js CylinderGeometry with 32 radial segments per panel,
 * producing a physically round, seamlessly curved cylindrical vessel wall.
 * Zero gap between adjacent panels - cards touch edge-to-edge.
 * Features Bebas Neue typography, red monospace category, top badge pill,
 * glowing LIVE pill, and dark obsidian central core.
 */
export default function CurvedCylinderShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
}: CurvedCylinderShowcaseProps) {
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

  // Rotate to specific index when activeIdx is changed externally (e.g. 01, 02 buttons)
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

    // True Curved Glass Cup Geometry:
    // Fixed 5 physical slots with radius 2.75 produces the round ("গোল") proportion
    const numSlots = 5;
    const radius = 2.75;
    const height = 1.55;
    const step = (Math.PI * 2) / numSlots; // 72 degrees = ~1.2566 rad
    const arcLength = step; // Exactly 100% arc - touching edge-to-edge with ZERO GAP

    try {
      scene = new THREE.Scene();
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

      const width = mount.clientWidth || 600;
      const heightPx = mount.clientHeight || 420;

      // Perspective Camera: perfectly framed clearance
      camera = new THREE.PerspectiveCamera(46, width / heightPx, 0.1, 100);
      camera.position.set(0, 0.02, 5.2);
      camera.lookAt(0, 0.02, 0);

      // WebGL Renderer with Alpha & Antialiasing
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobileDevice,
          powerPreference: 'default',
        });
      } catch (e) {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
        });
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
      // Natural 3D tilt without pushing the top beyond the viewport
      carouselGroup.rotation.x = -0.035;
      scene.add(carouselGroup);

      // ============================================================
      // 1. Central Dark Obsidian Core
      // ============================================================
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

      // ============================================================
      // 2. High-DPI Dynamic 2D Canvas Textures
      // ============================================================
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

          // Card Background
          ctx.fillStyle = '#0a0a14';
          ctx.fillRect(0, 0, 1024, 640);

          // Project Image Screenshot or Cyber Fallback Gradient
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

          // Vertical Dark Glass Vignette Gradient
          const vGrad = ctx.createLinearGradient(0, 0, 0, 640);
          vGrad.addColorStop(0, 'rgba(5, 5, 8, 0.20)');
          vGrad.addColorStop(0.4, 'rgba(5, 5, 8, 0.40)');
          vGrad.addColorStop(0.75, 'rgba(5, 5, 8, 0.88)');
          vGrad.addColorStop(1, 'rgba(5, 5, 8, 0.98)');
          ctx.fillStyle = vGrad;
          ctx.fillRect(0, 0, 1024, 640);

          // Horizontal Cylindrical Glass Fresnel Reflection
          const hGrad = ctx.createLinearGradient(0, 0, 1024, 0);
          hGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
          hGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.02)');
          hGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
          hGrad.addColorStop(0.8, 'rgba(0, 0, 0, 0.1)');
          hGrad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
          ctx.fillStyle = hGrad;
          ctx.fillRect(0, 0, 1024, 640);

          // Sleek Glass Seam Borders
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

          // Top Badge Pill
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

          // Big Bold Title in Bebas Neue font
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

          // Red Monospace Category Subtitle
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

          // Glowing Red LIVE Pill Button
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

          // Glowing dot
          const dotX = pillX + pillPadX + dotRadius;
          const dotY = pillY + pillHeight / 2;
          ctx.fillStyle = '#ef233c';
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();

          // Button label
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

      // ============================================================
      // 3. True Round ("গোল") Curved Cylinder Geometry (32 Radial Segments)
      // ============================================================
      for (let s = 0; s < numSlots; s++) {
        const initialProjIdx = s % total;
        const thetaStart = s * step - arcLength / 2;
        // 32 radial segments along each 72deg arc gives a 100% round ("গোল") curved cylinder
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

      // ============================================================
      // 4. Raycasting & Interactive Handlers (Drag, Swipe, Wheel, Click)
      // ============================================================
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

      // ============================================================
      // 5. Responsive Resize Observer
      // ============================================================
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

      // ============================================================
      // 6. Smooth 60fps Animation Loop (Active & Continuous)
      // ============================================================
      let lastTime = performance.now();
      // Immediate first-frame render
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

        // Texture streaming as slots rotate through the back
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

        // Detect front card and sync activeIdx
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

      // Cleanup
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
      console.error('Three.js WebGL error:', err);
    }
  }, [projects]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none overflow-visible"
      title="Drag or swipe to rotate the curved 3D glass cylinder"
    />
  );
}
