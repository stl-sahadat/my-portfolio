import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * CurvedCylinderShowcase:
 * A true WebGL 3D curved cylinder (like a round glass cup / cylindrical vessel).
 * All projects curve seamlessly along the cylinder wall.
 * Built using Three.js CylinderGeometry with high-res Canvas dynamic textures.
 */
export default function CurvedCylinderShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
}) {
  const mountRef = useRef(null);
  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const isInteractingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const activeIdxRef = useRef(activeIdx);
  const onActiveChangeRef = useRef(onActiveChange);
  const onPauseChangeRef = useRef(onPauseChange);

  // Safeguards against cyclical feedback loops:
  const lastReportedIdxRef = useRef(activeIdx);
  const isSnappingRef = useRef(false);
  const snapTargetAngleRef = useRef(0);
  const wheelVelocityRef = useRef(0);

  useEffect(() => {
    onPauseChangeRef.current = onPauseChange;
  }, [onPauseChange]);

  // Sync refs
  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  // Rotate to specific index ONLY when activeIdx is changed EXTERNALLY (e.g. user clicked number button)
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

    let renderer, scene, camera, carouselGroup, animationId;
    const cardMeshes = [];
    const total = projects.length;

    // Compact True Curved Glass Cup Dimensions:
    // Fixed 5 physical slots with radius 2.75 gives the exact gorgeous curved cup proportion
    // of 5 projects, regardless of total project count!
    const numSlots = 5;
    const radius = 2.75;
    const height = 1.55;
    const step = (Math.PI * 2) / numSlots;
    const arcLength = step; // 100% arc - perfectly touching edge-to-edge with ZERO empty gap!

    try {
      scene = new THREE.Scene();

      // Responsive check for mobile optimization (keep 100% full desktop 3D fidelity intact!)
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

      // Camera setup: Perfectly framed with comfortable clearance (no top clipping!)
      const width = mount.clientWidth || 600;
      const heightPx = mount.clientHeight || 420;

      camera = new THREE.PerspectiveCamera(46, width / heightPx, 0.1, 100);
      camera.position.set(0, 0.02, 5.20);
      camera.lookAt(0, 0.02, 0);

      // WebGL Renderer with Alpha & Antialiasing (1x on mobile to save GPU, up to 2x on desktop)
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobileDevice,
          powerPreference: 'default',
          failIfMajorPerformanceCaveat: false,
        });
      } catch (e) {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
          failIfMajorPerformanceCaveat: false,
        });
      }
      renderer.setPixelRatio(isMobileDevice ? 1 : Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, heightPx);
      renderer.setClearColor(0x000000, 0);

      // Clean existing children to prevent ghost/stale canvases
      mount.innerHTML = '';
      mount.appendChild(renderer.domElement);

      carouselGroup = new THREE.Group();
      // Subtle natural 3D tilt without pushing the top beyond the viewport
      carouselGroup.rotation.x = -0.035;
      scene.add(carouselGroup);

      // ============================================================
      // 1. Central Dark Obsidian Core
      // ============================================================
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

      // ============================================================
      // 2. Seamless Curved Glass Panels (CylinderGeometry) with Canvas Textures
      // ============================================================
      const textures = [];
      const texWidth = isMobileDevice ? 512 : 1024;
      const texHeight = isMobileDevice ? 320 : 640;
      const scaleFactor = isMobileDevice ? 0.5 : 1;

      projects.forEach((proj, idx) => {
        // High-DPI 2D Canvas on desktop, lightweight 512x320 on mobile
        const canvas = document.createElement('canvas');
        canvas.width = texWidth;
        canvas.height = texHeight;
        const ctx = canvas.getContext('2d');

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        textures.push({ texture, canvas, ctx, proj, idx, texWidth, texHeight, scaleFactor });

        // Helper to draw the panel contents
        const drawPanel = (img = null) => {
          ctx.save();
          if (scaleFactor !== 1) {
            ctx.scale(scaleFactor, scaleFactor);
          }
          ctx.clearRect(0, 0, 1024, 640);

          // Card Background
          ctx.fillStyle = '#0a0a14';
          ctx.fillRect(0, 0, 1024, 640);

          // Screenshot Image
          if (img) {
            ctx.drawImage(img, 0, 0, 1024, 640);
          } else {
            // Elegant cyber fallback gradient
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

          // Seamless Vertical Glass Seam Dividers
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
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(40, 40, badgeWidth, 48, 12);
          } else {
            ctx.rect(40, 40, badgeWidth, 48);
          }
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.fillText(badgeText, 58, 73);

          // Bottom Bar - Title & Category
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
          const pillWidth = pillPadX + (dotRadius * 2) + dotGap + textWidth + pillPadX;
          const pillHeight = 46;
          const pillX = 1024 - 58 - pillWidth;
          const pillY = 528;

          // Ambient halo glow behind pill
          const pillGlow = ctx.createRadialGradient(
            pillX + pillWidth / 2, pillY + pillHeight / 2, 4,
            pillX + pillWidth / 2, pillY + pillHeight / 2, pillWidth * 0.75
          );
          pillGlow.addColorStop(0, 'rgba(239, 35, 60, 0.35)');
          pillGlow.addColorStop(1, 'rgba(239, 35, 60, 0)');
          ctx.fillStyle = pillGlow;
          ctx.fillRect(pillX - 18, pillY - 14, pillWidth + 36, pillHeight + 28);

          // Glass pill body
          ctx.fillStyle = 'rgba(7, 7, 14, 0.88)';
          ctx.beginPath();
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 14);
          } else {
            ctx.rect(pillX, pillY, pillWidth, pillHeight);
          }
          ctx.fill();

          // Border
          const borderGrad = ctx.createLinearGradient(pillX, pillY, pillX + pillWidth, pillY + pillHeight);
          borderGrad.addColorStop(0, 'rgba(239, 35, 60, 0.95)');
          borderGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.45)');
          borderGrad.addColorStop(1, 'rgba(239, 35, 60, 0.95)');
          ctx.strokeStyle = borderGrad;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Dot
          const dotX = pillX + pillPadX + dotRadius;
          const dotY = pillY + pillHeight / 2;
          ctx.fillStyle = '#ef233c';
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();

          // Label
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 22px monospace';
          ctx.fillText(liveText, dotX + dotRadius + dotGap, pillY + 31);

          ctx.restore();
          texture.needsUpdate = true;
        };

        // Initial draw with fallback
        drawPanel();

        // Load project screenshot asynchronously
        if (proj.image) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => drawPanel(img);
          img.src = proj.image;
        }

      });

      // ============================================================
      // 3. Create Fixed 5 Physical Curved Glass Slot Meshes (True Cup Proportions)
      // ============================================================
      for (let s = 0; s < numSlots; s++) {
        const initialProjIdx = s % total;
        // Three.js CylinderGeometry curved along the circle arc:
        // thetaStart begins at s * step, length is arcLength
        const thetaStart = s * step - arcLength / 2;
        const panelGeom = new THREE.CylinderGeometry(
          radius,
          radius,
          height,
          32, // 32 radial segments across 72deg arc gives butter-smooth curvature
          1,
          true,
          thetaStart,
          arcLength
        );

        // DoubleSide ensures that panels are visible regardless of normal orientation
        const panelMat = new THREE.MeshBasicMaterial({
          map: textures[initialProjIdx].texture,
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

      // ============================================================
      // 4. Raycasting & Interaction (Hover, Drag, Click)
      // ============================================================
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const getNormalizedMouse = (e) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
        const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      };

      const handlePointerDown = (e) => {
        if (e.button !== undefined && e.button !== 0 && e.button !== 1) return;
        if (e.button === 1) e.preventDefault(); // prevent middle-click auto-scroll icon
        isSnappingRef.current = false;
        wheelVelocityRef.current = 0;
        isDraggingRef.current = true;
        isInteractingRef.current = true;
        onPauseChangeRef.current?.(true);
        dragStartXRef.current = e.clientX || e.touches?.[0]?.clientX || 0;
        dragStartAngleRef.current = currentAngleRef.current;
      };

      const handlePointerMove = (e) => {
        getNormalizedMouse(e);
        if (isDraggingRef.current) {
          const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
          const deltaX = clientX - dragStartXRef.current;
          currentAngleRef.current = dragStartAngleRef.current + deltaX * 0.018;
        } else {
          // Check hover for cursor indicator only (does NOT stop all-time rotation)
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(cardMeshes);
          if (intersects.length > 0) {
            renderer.domElement.style.cursor = 'pointer';
          } else {
            renderer.domElement.style.cursor = 'grab';
          }
        }
      };

      const handlePointerUp = () => {
        if (isDraggingRef.current) {
          isDraggingRef.current = false;
        }
        isInteractingRef.current = false;
        onPauseChangeRef.current?.(false);
      };

      const handleMouseLeave = () => {
        if (isDraggingRef.current) {
          isDraggingRef.current = false;
        }
        isInteractingRef.current = false;
        onPauseChangeRef.current?.(false);
      };

      // Mouse Wheel Handler: Locks window scroll inside cylinder & responsive medium speed spin
      const handleWheel = (e) => {
        // Prevent outer browser window from scrolling up/down
        e.preventDefault();
        e.stopPropagation();

        isSnappingRef.current = false;
        const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (Math.abs(delta) < 0.2) return;

        // Dynamic responsive medium speed impulse:
        wheelVelocityRef.current -= delta * 0.0028;
        // Cap max velocity to controlled medium speed (never spins uncontrollably)
        wheelVelocityRef.current = Math.max(-2.8, Math.min(2.8, wheelVelocityRef.current));
        // Instant snappy nudge for tactile response
        currentAngleRef.current -= delta * 0.0008;
      };

      const handleClick = (e) => {
        getNormalizedMouse(e);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);
        if (intersects.length > 0) {
          const hit = intersects[0].object.userData;
          const proj = projects[hit.currentProjIdx] || hit.proj;
          if (onProjectClick) {
            onProjectClick(proj);
          } else if (proj && proj.demoUrl) {
            window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
          }
        }
      };

      const dom = renderer.domElement;
      dom.addEventListener('mousedown', handlePointerDown);
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      dom.addEventListener('mouseleave', handleMouseLeave);
      dom.addEventListener('wheel', handleWheel, { passive: false });
      dom.addEventListener('click', handleClick);

      dom.addEventListener('touchstart', handlePointerDown, { passive: true });
      window.addEventListener('touchmove', handlePointerMove, { passive: true });
      window.addEventListener('touchend', handlePointerUp);

      // ============================================================
      // 5. Responsive Resize
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

      // Robust ResizeObserver so canvas adjusts immediately when parent layout resolves
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
      // 6. Smooth 60fps Animation Loop (Active, Responsive & Continuous)
      // ============================================================
      let lastTime = performance.now();

      // Immediate first-frame render so cylinder is NEVER blank!
      renderer.render(scene, camera);

      const animate = (now: number) => {
        animationId = requestAnimationFrame(animate);

        const delta = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        if (isSnappingRef.current) {
          // Smooth glide to the clicked project
          const diff = snapTargetAngleRef.current - currentAngleRef.current;
          if (Math.abs(diff) < 0.005) {
            currentAngleRef.current = snapTargetAngleRef.current;
            isSnappingRef.current = false;
          } else {
            currentAngleRef.current += diff * 0.12;
          }
        } else if (!isDraggingRef.current) {
          // Brisk, majestic 0.165 rad/sec baseline rotation + wheel momentum
          const baseSpeed = 0.165;
          currentAngleRef.current += (-baseSpeed + wheelVelocityRef.current) * delta;
          // Smoothly decay wheel velocity back to zero over ~1 second
          wheelVelocityRef.current *= 0.94;
          if (Math.abs(wheelVelocityRef.current) < 0.001) {
            wheelVelocityRef.current = 0;
          }
        }

        carouselGroup.rotation.y = currentAngleRef.current;

        // Seamless Virtual Streaming: Silently swap textures when a slot is passing through the dark back
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
                mesh.material.map = textures[targetProjIdx].texture;
                mesh.material.needsUpdate = true;
              }
            }
          }
        }

        // Detect which project card is currently front-facing
        const stepProgress = -currentAngleRef.current / step;
        const frontIdx = ((Math.round(stepProgress) % total) + total) % total;
        if (frontIdx !== activeIdxRef.current) {
          activeIdxRef.current = frontIdx;
          lastReportedIdxRef.current = frontIdx; // CRITICAL: prevents cyclic re-triggering!
          if (onActiveChangeRef.current) {
            onActiveChangeRef.current(frontIdx);
          }
        }

        renderer.render(scene, camera);
      };

      animationId = requestAnimationFrame(animate);

      // Cleanup on unmount
      return () => {
        if (resizeObserver) resizeObserver.disconnect();
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        dom.removeEventListener('mousedown', handlePointerDown);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('mouseup', handlePointerUp);
        dom.removeEventListener('mouseleave', handleMouseLeave);
        dom.removeEventListener('wheel', handleWheel);
        dom.removeEventListener('click', handleClick);
        dom.removeEventListener('touchstart', handlePointerDown);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('touchend', handlePointerUp);
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.error('Three.js Curved Cylinder error:', err);
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
