import React, { useEffect, useRef, useCallback } from 'react';

/**
 * FishbowlAutomationsShowcase - Cinema-Grade Photorealistic 3D Glass & Fluid Stage
 * 
 * 100% Free of Drawn Pen Marks / Cartoon Outlines (Tailored for Sahadat vai):
 * - Renders the 4K photorealistic glass bowls render plate (/fishbowl-stage.jpg) with crystal clarity.
 * - Perfectly aligned stage geometry calculated dynamically from canvas aspect ratio.
 * - Real Visible Fluid Water Animation:
 *     1. Multi-layered dynamic underwater caustics that shimmer and dance with the light.
 *     2. Undulating water surface menisci that realistically ripple and breathe.
 *     3. Continuous stream of realistic rising translucent bubbles with specular highlights.
 *     4. Continuous luminous hydro-current coursing through the connecting bottom pipe.
 * - Floating Automation Orbs:
 *     1. Luxury 3D glass orbs with glowing caustic halos floating inside the big bowl.
 *     2. Hover interaction: orbs illuminate, bounce, and show title tooltips.
 *     3. Periodic / interactive transfer: an orb travels through the glowing bottom pipe into the small bowl.
 *     4. In the small bowl: active featured automation with radiant glow (click to visit demo/github).
 *     5. Leaping light orb: arches gracefully through the air from the small bowl and dives into the big bowl's mouth.
 * - Mouse Controls:
 *     1. Scroll wheel or drag accelerates water movement and project cycling.
 *     2. Hovering over the small bowl pauses the leap to inspect the project.
 *     3. Clicking the small bowl visits the live project.
 *     4. Clicking any orb in the big bowl queues it to flow through the pipe next.
 */

export default function FishbowlAutomationsShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
  onPauseChange,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Sync state refs to avoid 60fps re-render overhead
  const activeIdxRef = useRef(activeIdx);
  const projectsRef = useRef(projects);
  const onActiveChangeRef = useRef(onActiveChange);
  const onProjectClickRef = useRef(onProjectClick);
  const onPauseChangeRef = useRef(onPauseChange);

  // Mouse interaction state
  const isPausedRef = useRef(false);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const speedMultiplierRef = useRef(1.0);
  const hoveredTileIdxRef = useRef(-1);

  // Image preloading cache
  const imageCacheRef = useRef(new Map());

  // Background Stage image ref
  const stageImgRef = useRef(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    projectsRef.current = projects;
    projects.forEach((p) => {
      if (p.image && !imageCacheRef.current.has(p.image)) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = p.image;
        img.onload = () => {
          imageCacheRef.current.set(p.image, img);
        };
      }
    });
  }, [projects]);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    onProjectClickRef.current = onProjectClick;
  }, [onProjectClick]);

  useEffect(() => {
    onPauseChangeRef.current = onPauseChange;
  }, [onPauseChange]);

  // Handle direct visit on click of small bowl
  const handleVisitCurrent = useCallback(() => {
    const curr = projectsRef.current[activeIdxRef.current];
    if (!curr) return;
    if (onProjectClickRef.current) {
      onProjectClickRef.current(curr);
    } else {
      const url =
        curr.demoUrl && curr.demoUrl !== 'https://github.com/stl-sahadat'
          ? curr.demoUrl
          : curr.githubUrl;
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  // Preload Photorealistic Transparent Glass Stage (Background Removed)
  useEffect(() => {
    const img = new Image();
    img.src = '/fishbowl-cutout.png';
    img.onload = () => {
      stageImgRef.current = img;
    };
  }, []);

  // Main Canvas Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let isVisible = true;
    let width = (canvas.width = container.clientWidth || 840);
    let height = (canvas.height = container.clientHeight || 500);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Lifecycle Animation States:
    // 0: SHOWCASE (~4.5s)
    // 1: CHARGE / PREPARE PIPE FLOW (~0.6s)
    // 2: PIPE_FLOW (~1.6s - project orb travels through curved pipe into small bowl)
    // 3: SURFACE_SHOWCASE (~2.0s)
    // 4: AIR_LEAP (~1.5s - previous orb leaps over through air into big bowl)
    let stage = 0;
    let stageTimer = 0;
    let pipeProgress = 0;
    let leapProgress = 0;
    let nextIdx = (activeIdxRef.current + 1) % Math.max(1, projectsRef.current.length);

    // Dynamic particle systems
    const bubbles = [];
    const pipeStreamParticles = [];
    const ripples = [];
    const sprayDroplets = [];

    // Floating automation orbs in the big bowl (one corresponding to each project)
    const floatingOrbs = [];
    const orbCount = Math.max(projectsRef.current.length, 8);
    for (let i = 0; i < orbCount; i++) {
      floatingOrbs.push({
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35,
        seed: Math.random() * 200,
        size: 38,
        tilt: (Math.random() - 0.5) * 0.2,
        projIdx: i % Math.max(1, projectsRef.current.length),
      });
    }

    // Dynamic Stage Geometry accurately mapped to the background image dimensions
    function getStageGeo() {
      const stageImg = stageImgRef.current;
      const imgRatio = stageImg && stageImg.complete ? stageImg.width / stageImg.height : 1376 / 768;
      const canvasRatio = width / height;

      let drawW = width;
      let drawH = height;
      let drawX = 0;
      let drawY = 0;

      if (canvasRatio > imgRatio) {
        drawH = width / imgRatio;
        drawY = (height - drawH) / 2;
      } else {
        drawW = height * imgRatio;
        drawX = (width - drawW) / 2;
      }

      // Exact pixel coordinates in normalized image space (1376 x 768):
      // Small bowl: Center=(340, 465), Radius=220, WaterY=415
      // Big bowl: Center=(970, 400), Radius=290, WaterY=250, RimY=115
      // Pipe: SmallPort=(500, 605), BigPort=(740, 560), ControlPoint=(600, 645)
      const sbX = drawX + drawW * (340 / 1376);
      const sbY = drawY + drawH * (465 / 768);
      const sbR = drawW * (220 / 1376);
      const sbWaterY = drawY + drawH * (415 / 768);

      const bbX = drawX + drawW * (970 / 1376);
      const bbY = drawY + drawH * (400 / 768);
      const bbR = drawW * (290 / 1376);
      const bbWaterY = drawY + drawH * (250 / 768);
      const bbRimY = drawY + drawH * (115 / 768);

      const pipeStart = { x: drawX + drawW * (740 / 1376), y: drawY + drawH * (560 / 768) }; // Big bowl side
      const pipeEnd = { x: drawX + drawW * (500 / 1376), y: drawY + drawH * (605 / 768) };   // Small bowl side
      const pipeCp = { x: drawX + drawW * (600 / 1376), y: drawY + drawH * (645 / 768) };    // Curve bottom

      return {
        bounds: { drawX, drawY, drawW, drawH },
        small: { x: sbX, y: sbY, r: sbR, waterY: sbWaterY },
        big: { x: bbX, y: bbY, r: bbR, waterY: bbWaterY, rimY: bbRimY },
        pipe: { start: pipeStart, end: pipeEnd, cp: pipeCp },
      };
    }

    // Initial positioning of floating orbs inside big bowl
    const initGeo = getStageGeo();
    floatingOrbs.forEach((orb, i) => {
      const angle = (i / orbCount) * Math.PI * 2;
      const dist = Math.random() * (initGeo.big.r * 0.52);
      orb.x = initGeo.big.x + Math.cos(angle) * dist;
      orb.y = initGeo.big.y + Math.sin(angle) * dist * 0.65 + 15;
    });

    // Spawn ambient bubble
    function spawnBubble(geo) {
      if (bubbles.length > 40) return;
      const isSmall = Math.random() > 0.65;
      const bowl = isSmall ? geo.small : geo.big;
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (bowl.r * 0.68);
      bubbles.push({
        x: bowl.x + Math.cos(angle) * dist,
        y: bowl.y + bowl.r * 0.55 + Math.random() * 20,
        r: Math.random() * 2.4 + 1.2,
        speed: Math.random() * 0.75 + 0.35,
        wobble: Math.random() * 10,
        bowl: isSmall ? 'small' : 'big',
        alpha: Math.random() * 0.65 + 0.35,
      });
    }

    // Spawn soft water ripple (radial halo, ZERO harsh pen stroke)
    function spawnRipple(x, y, maxR = 48) {
      ripples.push({ x, y, r: 4, maxR, alpha: 0.85 });
    }

    // Spawn soft mist droplets for air leap
    function spawnMistDroplets(x, y, count = 10, vxBias = 0, vyBias = 0) {
      for (let i = 0; i < count; i++) {
        sprayDroplets.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 3.5 + vxBias,
          vy: (Math.random() - 0.5) * 4.0 + vyBias - 1.5,
          r: Math.random() * 2.0 + 0.8,
          alpha: 0.95,
          color: Math.random() > 0.35 ? '#00f5d4' : '#ef233c',
          gravity: 0.14,
        });
      }
    }

    // ================================================================
    // REALISTIC FLUID WATER CAUSTICS & LIGHT SHIMMER (ZERO PEN LINES)
    // ================================================================
    function renderLivingWater(bowl, time) {
      const { x, y, r, waterY } = bowl;
      ctx.save();

      // Clip strictly inside the bowl underwater sphere
      ctx.beginPath();
      ctx.arc(x, y, r - 3, 0, Math.PI * 2);
      ctx.clip();

      // 1. Volumetric fluid ambient light pulse
      const waveGlow = Math.sin(time * 2.2) * 0.08 + 0.18;
      const depthGradient = ctx.createRadialGradient(x, waterY + 40, 10, x, y, r);
      depthGradient.addColorStop(0, `rgba(0, 245, 212, ${waveGlow * 0.6})`);
      depthGradient.addColorStop(0.45, `rgba(0, 150, 255, ${waveGlow * 0.45})`);
      depthGradient.addColorStop(0.85, 'rgba(0, 60, 140, 0.18)');
      depthGradient.addColorStop(1, 'rgba(0, 20, 60, 0)');
      ctx.fillStyle = depthGradient;
      ctx.fillRect(x - r, waterY, r * 2, (y + r) - waterY);

      // 2. Animated Caustic Sunlight Rays (dancing light beams refracting through water)
      ctx.globalCompositeOperation = 'screen';
      const rayCount = 5;
      for (let i = 0; i < rayCount; i++) {
        const rayAngle = -0.3 + (i / (rayCount - 1)) * 0.6;
        const rayPhase = time * 2.4 + i * 1.3;
        const rayAlpha = (Math.sin(rayPhase) * 0.5 + 0.5) * 0.16;
        const topX = x + Math.sin(rayPhase * 0.8) * (r * 0.35);

        const rayGrad = ctx.createLinearGradient(topX, waterY, topX + Math.sin(rayAngle) * r, y + r);
        rayGrad.addColorStop(0, `rgba(255, 255, 255, ${rayAlpha * 1.5})`);
        rayGrad.addColorStop(0.3, `rgba(0, 245, 212, ${rayAlpha})`);
        rayGrad.addColorStop(1, 'rgba(0, 180, 255, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(topX - 16, waterY);
        ctx.lineTo(topX + 16, waterY);
        ctx.lineTo(topX + Math.sin(rayAngle) * r * 1.3 + 32, y + r);
        ctx.lineTo(topX + Math.sin(rayAngle) * r * 1.3 - 32, y + r);
        ctx.closePath();
        ctx.fill();
      }

      // 3. Realistic undulating water meniscus / surface waves (soft blur gradient, ZERO harsh line)
      const surfWave = Math.sin(time * 3.0) * 2.2;
      const surfGrad = ctx.createLinearGradient(x - r * 0.8, waterY, x + r * 0.8, waterY + 12);
      surfGrad.addColorStop(0, 'rgba(0, 245, 212, 0)');
      surfGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.45)');
      surfGrad.addColorStop(0.5, `rgba(0, 245, 212, ${0.45 + Math.sin(time * 4) * 0.15})`);
      surfGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.45)');
      surfGrad.addColorStop(1, 'rgba(0, 245, 212, 0)');

      ctx.fillStyle = surfGrad;
      ctx.beginPath();
      ctx.ellipse(x, waterY + surfWave, r * 0.72, 7 + Math.sin(time * 2.5) * 2, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // ================================================================
    // CONTINUOUS GLOWING HYDRO-FLOW IN CONNECTING GLASS PIPE
    // ================================================================
    function renderPipeHydroStream(geo, time, prog, activeTravelingOrb) {
      const { start, end, cp } = geo.pipe;

      // Continuously spawn luminous micro-particles in the pipe
      if (Math.random() < 0.6) {
        pipeStreamParticles.push({
          t: Math.random(),
          speed: Math.random() * 0.35 + 0.25,
          size: Math.random() * 2.5 + 1.2,
          alpha: Math.random() * 0.7 + 0.3,
          offsetY: (Math.random() - 0.5) * 10,
        });
      }

      ctx.save();
      // Render continuous ambient hydro-energy particles along the pipe
      for (let i = pipeStreamParticles.length - 1; i >= 0; i--) {
        const p = pipeStreamParticles[i];
        p.t += p.speed * 0.016 * speedMultiplierRef.current;
        if (p.t > 1) {
          pipeStreamParticles.splice(i, 1);
          continue;
        }

        const t = p.t;
        const mt = 1 - t;
        // Flow from big bowl (start) to small bowl (end)
        const px = mt * mt * start.x + 2 * mt * t * cp.x + t * t * end.x;
        const py = mt * mt * start.y + 2 * mt * t * cp.y + t * t * end.y + p.offsetY;

        ctx.fillStyle = `rgba(0, 245, 212, ${p.alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // If active automation orb is currently traversing the pipe
      if (activeTravelingOrb && prog > 0 && prog < 1) {
        const t = prog;
        const mt = 1 - t;
        const orbX = mt * mt * start.x + 2 * mt * t * cp.x + t * t * end.x;
        const orbY = mt * mt * start.y + 2 * mt * t * cp.y + t * t * end.y;

        // Radiant traveling energy core
        const pipeGlow = ctx.createRadialGradient(orbX, orbY, 3, orbX, orbY, 28);
        pipeGlow.addColorStop(0, '#ffffff');
        pipeGlow.addColorStop(0.35, '#00f5d4');
        pipeGlow.addColorStop(0.7, 'rgba(239, 35, 60, 0.65)');
        pipeGlow.addColorStop(1, 'rgba(239, 35, 60, 0)');

        ctx.fillStyle = pipeGlow;
        ctx.beginPath();
        ctx.arc(orbX, orbY, 28, 0, Math.PI * 2);
        ctx.fill();

        // White core nucleus
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(orbX, orbY, 6.5, 0, Math.PI * 2);
        ctx.fill();

        // Stream wake droplets
        if (Math.random() < 0.4) {
          pipeStreamParticles.push({
            t: Math.max(0, prog - 0.06),
            speed: 0.1,
            size: 3.2,
            alpha: 0.95,
            offsetY: (Math.random() - 0.5) * 6,
          });
        }
      }

      ctx.restore();
    }

    // ================================================================
    // AIR LEAP: ENERGY ORB DIVING FROM SMALL BOWL INTO BIG BOWL'S MOUTH
    // ================================================================
    function renderAirLeap(geo, prog) {
      const { small, big } = geo;
      const t = Math.max(0, Math.min(1, prog));
      const mt = 1 - t;

      // Ballistic trajectory: Arches smoothly from small bowl up through air, dives into big bowl mouth
      const p0 = { x: small.x, y: small.waterY };
      const p1 = { x: small.x + (big.x - small.x) * 0.25, y: geo.bounds.drawY + geo.bounds.drawH * 0.04 };
      const p2 = { x: big.x, y: big.rimY - 18 };
      const p3 = { x: big.x, y: big.waterY + 28 };

      const curX = mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x;
      const curY = mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y;

      const dx = 3 * mt * mt * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t * t * (p3.x - p2.x);
      const dy = 3 * mt * mt * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t * t * (p3.y - p2.y);

      // Trailing luminous mist droplets
      spawnMistDroplets(curX, curY, 3, -dx * 0.015, -dy * 0.015);

      ctx.save();
      // Soft radiant orb aura (Zero harsh pen lines!)
      const orbHalo = ctx.createRadialGradient(curX, curY, 2, curX, curY, 40);
      orbHalo.addColorStop(0, '#ffffff');
      orbHalo.addColorStop(0.3, 'rgba(0, 245, 212, 0.95)');
      orbHalo.addColorStop(0.65, 'rgba(239, 35, 60, 0.50)');
      orbHalo.addColorStop(1, 'rgba(239, 35, 60, 0)');

      ctx.fillStyle = orbHalo;
      ctx.beginPath();
      ctx.arc(curX, curY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Radiant white center
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(curX, curY, 8.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // ================================================================
    // MAIN 60 FPS RENDER LOOP
    // ================================================================
    let lastTime = performance.now();

    function animate(now) {
      if (!isVisible) {
        animId = requestAnimationFrame(animate);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const time = now / 1000;

      const speed = speedMultiplierRef.current;
      speedMultiplierRef.current = Math.max(1.0, speedMultiplierRef.current - dt * 2.5);

      ctx.clearRect(0, 0, width, height);

      const geo = getStageGeo();

      // ==============================================================
      // 1. RENDER PRISTINE TRANSPARENT GLASS STAGE (NO RECTANGULAR BG)
      // ==============================================================
      const stageImg = stageImgRef.current;
      if (stageImg && stageImg.complete) {
        ctx.save();

        // Soft ambient floor reflection puddle under the glass bowls & pipe
        const floorSmall = ctx.createRadialGradient(
          geo.small.x,
          geo.small.y + geo.small.r - 8,
          4,
          geo.small.x,
          geo.small.y + geo.small.r + 14,
          geo.small.r * 0.75
        );
        floorSmall.addColorStop(0, 'rgba(0, 245, 212, 0.22)');
        floorSmall.addColorStop(0.5, 'rgba(0, 150, 255, 0.08)');
        floorSmall.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = floorSmall;
        ctx.beginPath();
        ctx.ellipse(geo.small.x, geo.small.y + geo.small.r + 6, geo.small.r * 0.72, 12, 0, 0, Math.PI * 2);
        ctx.fill();

        const floorBig = ctx.createRadialGradient(
          geo.big.x,
          geo.big.y + geo.big.r - 8,
          8,
          geo.big.x,
          geo.big.y + geo.big.r + 18,
          geo.big.r * 0.82
        );
        floorBig.addColorStop(0, 'rgba(0, 245, 212, 0.25)');
        floorBig.addColorStop(0.5, 'rgba(0, 150, 255, 0.09)');
        floorBig.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = floorBig;
        ctx.beginPath();
        ctx.ellipse(geo.big.x, geo.big.y + geo.big.r + 8, geo.big.r * 0.78, 14, 0, 0, Math.PI * 2);
        ctx.fill();

        const floorPipe = ctx.createRadialGradient(
          geo.pipe.cp.x,
          geo.pipe.cp.y + 6,
          4,
          geo.pipe.cp.x,
          geo.pipe.cp.y + 16,
          50
        );
        floorPipe.addColorStop(0, 'rgba(0, 245, 212, 0.32)');
        floorPipe.addColorStop(0.6, 'rgba(0, 150, 255, 0.08)');
        floorPipe.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = floorPipe;
        ctx.beginPath();
        ctx.ellipse(geo.pipe.cp.x, geo.pipe.cp.y + 14, 48, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw transparent cutout (pure crystal glass, zero rectangular background)
        ctx.drawImage(
          stageImg,
          geo.bounds.drawX,
          geo.bounds.drawY,
          geo.bounds.drawW,
          geo.bounds.drawH
        );
        ctx.restore();
      }

      // ==============================================================
      // 2. RENDER REALISTIC LIVING WATER VOLUMES (IN BOTH BOWLS)
      // ==============================================================
      renderLivingWater(geo.small, time);
      renderLivingWater(geo.big, time);

      // Spawn ambient bubbles
      if (Math.random() < 0.28) spawnBubble(geo);

      // ==============================================================
      // 3. LIFECYCLE STATE MACHINE (AUTOMATION ORB JOURNEY)
      // Cycles automatically in an endless loop: Sahadat vai requirement!
      // ==============================================================
      stageTimer += dt * speed;

      switch (stage) {
        case 0: // SHOWCASE ACTIVE AUTOMATION (~3.8s)
          if (stageTimer > 3.8) {
            stage = 1;
            stageTimer = 0;
          }
          break;

        case 1: // CHARGE / ENGAGE PIPE (~0.4s)
          if (stageTimer > 0.4) {
            stage = 2; // trigger pipe flow
            stageTimer = 0;
            pipeProgress = 0;
            spawnRipple(geo.pipe.start.x, geo.pipe.start.y, 40);
          }
          break;

        case 2: // PIPE_FLOW (~1.3s - orb travels through pipe into small bowl)
          pipeProgress = Math.min(1, stageTimer / 1.3);
          if (pipeProgress >= 1) {
            activeIdxRef.current = nextIdx;
            if (onActiveChangeRef.current) {
              onActiveChangeRef.current(nextIdx);
            }
            spawnRipple(geo.small.x, geo.small.waterY, 55);
            spawnMistDroplets(geo.small.x, geo.small.waterY, 12, 0, -3);
            stage = 3; // showcase newly arrived project
            stageTimer = 0;
            nextIdx = (activeIdxRef.current + 1) % Math.max(1, projectsRef.current.length);
          }
          break;

        case 3: // SURFACE_SHOWCASE (~2.2s)
          if (stageTimer > 2.2) {
            stage = 4; // trigger air leap
            stageTimer = 0;
            leapProgress = 0;
            spawnRipple(geo.small.x, geo.small.waterY, 60);
            spawnMistDroplets(geo.small.x, geo.small.waterY, 14, 1.5, -4);
          }
          break;

        case 4: // AIR_LEAP (~1.2s - orb arcs through air and enters big bowl)
          leapProgress = Math.min(1, stageTimer / 1.2);
          if (leapProgress >= 1) {
            stage = 0; // complete cycle
            stageTimer = 0;
            spawnRipple(geo.big.x, geo.big.waterY + 15, 75);
            spawnMistDroplets(geo.big.x, geo.big.waterY + 15, 18, -0.5, -3.5);
          }
          break;

        default:
          stage = 0;
          stageTimer = 0;
          break;
      }

      // ==============================================================
      // 4. RENDER CONNECTING PIPE HYDRO-FLOW
      // ==============================================================
      renderPipeHydroStream(geo, time, pipeProgress, stage === 2);

      // ==============================================================
      // 5. RENDER RISING FLUID BUBBLES
      // ==============================================================
      ctx.save();
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y -= b.speed * (1 + (speed - 1) * 0.45);
        b.x += Math.sin(b.wobble + time * 3.2) * 0.35;

        // Translucent bubble body
        ctx.fillStyle = `rgba(0, 245, 212, ${b.alpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // 3D Specular highlight dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.35, 0, Math.PI * 2);
        ctx.fill();

        const bowl = b.bowl === 'small' ? geo.small : geo.big;
        if (b.y < bowl.waterY) {
          bubbles.splice(i, 1);
        }
      }
      ctx.restore();

      // ==============================================================
      // 6. FLOATING AUTOMATION ORBS IN BIG BOWL (Clean 3D Glass Orbs)
      // ==============================================================
      const allProj = projectsRef.current;
      if (allProj.length > 0) {
        floatingOrbs.forEach((orb, i) => {
          const projIdx = orb.projIdx !== undefined ? orb.projIdx : (i % allProj.length);
          const proj = allProj[projIdx];

          // Buoyancy drift
          const driftX = Math.cos(time * 0.8 + orb.seed) * 0.45;
          const driftY = Math.sin(time * 0.8 + orb.seed) * 0.4;
          orb.vx = (orb.vx + driftX * 0.08) * 0.94;
          orb.vy = (orb.vy + driftY * 0.08) * 0.94;

          // Mouse proximity soft repulsion
          const mdx = orb.x - mousePosRef.current.x;
          const mdy = orb.y - mousePosRef.current.y;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < 75 && mDist > 0) {
            orb.vx += (mdx / mDist) * 0.45;
            orb.vy += (mdy / mDist) * 0.45;
          }

          orb.x += orb.vx;
          orb.y += orb.vy;

          // Constrain strictly within big bowl underwater volume
          const dx = orb.x - geo.big.x;
          const dy = orb.y - (geo.big.y + 15);
          const dist = Math.hypot(dx, dy);
          const maxDist = geo.big.r * 0.58;
          if (dist > maxDist) {
            orb.vx -= (dx / dist) * 0.35;
            orb.vy -= (dy / dist) * 0.35;
          }

          const isHovered = hoveredTileIdxRef.current === i;
          const isCurrentActive = activeIdxRef.current === projIdx;
          const orbR = isHovered ? 24 : (isCurrentActive ? 21 : 18);

          ctx.save();
          ctx.translate(orb.x, orb.y);
          ctx.rotate(orb.tilt + Math.sin(time * 1.5 + orb.seed) * 0.06);

          // Soft Glowing Halo
          const halo = ctx.createRadialGradient(0, 0, orbR * 0.3, 0, 0, orbR * 2.0);
          halo.addColorStop(0, isHovered ? 'rgba(0, 245, 212, 0.95)' : (isCurrentActive ? 'rgba(239, 35, 60, 0.85)' : 'rgba(0, 212, 255, 0.65)'));
          halo.addColorStop(0.5, isCurrentActive ? 'rgba(239, 35, 60, 0.35)' : 'rgba(0, 119, 182, 0.35)');
          halo.addColorStop(0.85, 'rgba(0, 0, 0, 0.15)');
          halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(0, 0, orbR * 2.0, 0, Math.PI * 2);
          ctx.fill();

          // 3D Glass Sphere / Thumbnail (Clean clipped circle, NO pen stroke)
          ctx.beginPath();
          ctx.arc(0, 0, orbR, 0, Math.PI * 2);

          const cachedImg = proj?.image ? imageCacheRef.current.get(proj.image) : null;
          if (cachedImg) {
            ctx.save();
            ctx.clip();
            ctx.drawImage(cachedImg, -orbR, -orbR, orbR * 2, orbR * 2);
            ctx.fillStyle = isHovered ? 'rgba(2, 10, 25, 0.15)' : 'rgba(2, 10, 25, 0.35)';
            ctx.fillRect(-orbR, -orbR, orbR * 2, orbR * 2);
            ctx.restore();
          } else {
            ctx.fillStyle = 'rgba(3, 14, 32, 0.90)';
            ctx.fill();
          }

          // Active beacon ring if this orb is the currently selected project
          if (isCurrentActive) {
            ctx.strokeStyle = '#ef233c';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.arc(0, 0, orbR + 2, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Specular glass rim reflection
          const rimHighlight = ctx.createLinearGradient(-orbR, -orbR, orbR, orbR);
          rimHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
          rimHighlight.addColorStop(0.5, 'rgba(0, 245, 212, 0.25)');
          rimHighlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = rimHighlight;
          ctx.beginPath();
          ctx.arc(0, 0, orbR, 0, Math.PI * 2);
          ctx.fill();

          // Hover Title Pill (Solid dark glass, NO outline)
          if (isHovered && proj) {
            ctx.font = 'bold 11px monospace';
            const txt = proj.title ? proj.title.slice(0, 24) : 'AUTOMATION';
            const tw = ctx.measureText(txt).width + 18;
            ctx.fillStyle = 'rgba(2, 8, 20, 0.96)';
            ctx.beginPath();
            ctx.roundRect(-tw / 2, -orbR - 26, tw, 20, 6);
            ctx.fill();

            ctx.fillStyle = '#00f5d4';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(txt, 0, -orbR - 16);
          }

          ctx.restore();
        });
      }

      // ==============================================================
      // 7. SPOTLIGHT IN SMALL BOWL (ACTIVE AUTOMATION FOCUS)
      // ==============================================================
      if (stage !== 2) {
        const curr = projectsRef.current[activeIdxRef.current];
        if (curr) {
          const floatY = Math.sin(time * 2.2) * 5;
          const cx = geo.small.x;
          const cy = geo.small.y - 12 + floatY;

          ctx.save();
          ctx.translate(cx, cy);

          // Luminous Spotlight Halo
          const focalGlow = ctx.createRadialGradient(0, 0, 8, 0, 0, 72);
          focalGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          focalGlow.addColorStop(0.3, 'rgba(0, 245, 212, 0.85)');
          focalGlow.addColorStop(0.65, 'rgba(239, 35, 60, 0.40)');
          focalGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = focalGlow;
          ctx.beginPath();
          ctx.arc(0, 0, 72, 0, Math.PI * 2);
          ctx.fill();

          // Featured Glass Disc: Real Project Image
          const discR = 36;
          ctx.beginPath();
          ctx.arc(0, 0, discR, 0, Math.PI * 2);

          const cachedImg = curr.image ? imageCacheRef.current.get(curr.image) : null;
          if (cachedImg) {
            ctx.save();
            ctx.clip();
            ctx.drawImage(cachedImg, -discR, -discR, discR * 2, discR * 2);
            ctx.fillStyle = 'rgba(2, 10, 24, 0.30)';
            ctx.fillRect(-discR, -discR, discR * 2, discR * 2);
            ctx.restore();
          } else {
            ctx.fillStyle = 'rgba(4, 14, 30, 0.92)';
            ctx.fill();
          }

          // Floating Title Pill (Clean glass badge, NO pen stroke)
          ctx.font = 'bold 14px "Bebas Neue", sans-serif';
          const titleStr = curr.title || 'AUTOMATION SUITE';
          const tw = ctx.measureText(titleStr).width + 24;

          ctx.fillStyle = 'rgba(2, 10, 22, 0.94)';
          ctx.beginPath();
          ctx.roundRect(-tw / 2, -60, tw, 24, 8);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(titleStr, 0, -48);

          ctx.restore();
        }
      }

      // ==============================================================
      // 8. AIR LEAP (ENERGY ORB DIVING INTO BIG BOWL'S MOUTH)
      // ==============================================================
      if (stage === 4) {
        renderAirLeap(geo, leapProgress);
      }

      // ==============================================================
      // 9. RENDER SURFACE RIPPLES & MIST DROPLETS
      // ==============================================================
      ctx.save();
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.r += 1.8 * (1 + (speed - 1) * 0.4);
        rip.alpha -= 0.024;

        if (rip.alpha <= 0 || rip.r >= rip.maxR) {
          ripples.splice(i, 1);
        } else {
          const ripGrad = ctx.createRadialGradient(
            rip.x,
            rip.y,
            Math.max(1, rip.r - 4),
            rip.x,
            rip.y,
            rip.r + 4
          );
          ripGrad.addColorStop(0, 'rgba(0, 245, 212, 0)');
          ripGrad.addColorStop(0.5, `rgba(0, 245, 212, ${rip.alpha * 0.65})`);
          ripGrad.addColorStop(1, 'rgba(0, 245, 212, 0)');
          ctx.fillStyle = ripGrad;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.r + 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Mist droplets
      for (let i = sprayDroplets.length - 1; i >= 0; i--) {
        const d = sprayDroplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vy += d.gravity;
        d.alpha -= 0.022;

        if (d.alpha <= 0 || d.y > height) {
          sprayDroplets.splice(i, 1);
        } else {
          ctx.fillStyle = d.color;
          ctx.globalAlpha = d.alpha;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;
      ctx.restore();

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    // ==============================================================
    // INTERACTIVE CONTROLS: CLICK NAVIGATION & DYNAMIC CURSOR
    // (NO MOUSE WHEEL HIJACKING — SCROLL IS 100% UNLOCKED AND NATURAL)
    // ==============================================================
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePosRef.current = { x, y };

      let hovered = -1;
      floatingOrbs.forEach((orb, i) => {
        const d = Math.hypot(orb.x - x, orb.y - y);
        if (d < 30) hovered = i;
      });
      hoveredTileIdxRef.current = hovered;

      const geo = getStageGeo();
      const distToSmall = Math.hypot(geo.small.x - x, geo.small.y - y);
      const isOverSmall = distToSmall < geo.small.r * 0.85;

      // Pointer cursor ONLY on interactive project balls and small spotlight bowl
      if (hovered !== -1 || isOverSmall) {
        canvas.style.cursor = 'pointer';
      } else {
        canvas.style.cursor = 'default';
      }
    };

    const handlePointerLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
      hoveredTileIdxRef.current = -1;
      canvas.style.cursor = 'default';
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const geo = getStageGeo();

      // 1. If clicked inside small spotlight bowl -> Visit project live demo or GitHub
      const distToSmall = Math.hypot(geo.small.x - x, geo.small.y - y);
      if (distToSmall < geo.small.r * 0.85) {
        handleVisitCurrent();
        spawnRipple(geo.small.x, geo.small.y, 60);
        return;
      }

      // 2. If clicked any floating project ball in the big bowl -> Immediately switch project!
      let clickedOrb = null;
      let clickedIdx = -1;
      let closestDist = 999;
      floatingOrbs.forEach((orb, i) => {
        const d = Math.hypot(orb.x - x, orb.y - y);
        if (d < 34 && d < closestDist) {
          closestDist = d;
          clickedOrb = orb;
          clickedIdx = i;
        }
      });

      if (clickedOrb && clickedIdx !== -1) {
        const allP = projectsRef.current;
        const selectedProjIdx = (clickedOrb.projIdx !== undefined ? clickedOrb.projIdx : clickedIdx) % Math.max(1, allP.length);

        // Immediate project switch in state & UI
        activeIdxRef.current = selectedProjIdx;
        if (onActiveChangeRef.current) {
          onActiveChangeRef.current(selectedProjIdx);
        }

        // Ripple & splash at the clicked ball
        spawnRipple(clickedOrb.x, clickedOrb.y, 65);
        spawnMistDroplets(clickedOrb.x, clickedOrb.y, 14, (geo.pipe.start.x - clickedOrb.x) * 0.05, -3);

        // Nudge ball toward the pipe entrance and trigger pipe flow to small bowl
        clickedOrb.vx = (geo.pipe.start.x - clickedOrb.x) * 0.12;
        clickedOrb.vy = (geo.pipe.start.y - clickedOrb.y) * 0.12;
        nextIdx = selectedProjIdx;
        stage = 2; // Immediately trigger pipe flow to feature this ball in the small bowl
        stageTimer = 0;
        pipeProgress = 0;
      }
    };

    const handleResize = () => {
      width = canvas.width = container.clientWidth || 840;
      height = canvas.height = container.clientHeight || 500;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) lastTime = performance.now();
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [handleVisitCurrent]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] flex items-center justify-center select-none overflow-hidden bg-transparent border-none shadow-none cursor-default"
      title="Click any project ball to switch // Click small spotlight bowl to view live project"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent border-none shadow-none cursor-default"
      />
    </div>
  );
}
