import React, { useEffect, useRef } from 'react';

/**
 * N8nAutomationBackground - Full-Page Thunder Lightning & AI Workflow Engine
 * 
 * Custom-crafted for Sahadat vai:
 * 1. Full-Page Coverage: Spans the entire "MY AUTOMATIONS" section background.
 * 2. Real Sky Lightning (বৃষ্টি হলে আসমানে যেমন বিজলি চমকায়):
 *    - Procedural fractal branching lightning bolts with electric fork tendrils.
 *    - Multi-stage stroke: Leader -> Blinding return stroke -> Re-strike -> Ionized sky afterglow.
 *    - Atmospheric radial sky illumination: spreads soft glowing light all around the scene.
 * 3. Empty Space AI Node Tags:
 *    - Clean glassmorphic cards placed strictly in empty spaces across the full page:
 *      WEBHOOK INGESTION, LLM REASONING BRAIN, VECTOR RETRIEVAL RAG,
 *      KAFKA STREAM, MULTI-AGENT SWARM, PYTHON PIPELINE,
 *      AI GUARDRAILS, CRM & WEBHOOK DISPATCH.
 * 4. Multi-Line Conduits:
 *    - 3 parallel glowing spline cables linking the nodes, with streaming energy photons.
 * 5. Interactive: Mouse movement sparks electric micro-arcs, wheel scroll triggers thunder strike!
 */

export default function N8nAutomationBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let isVisible = true;
    let width = (canvas.width = container.clientWidth || 1400);
    let height = (canvas.height = container.clientHeight || 850);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = { x: -1000, y: -1000 };

    // ================================================================
    // 8 AI WORKFLOW NODES PLACED THOUGHTFULLY IN EMPTY SPACES ACROSS FULL PAGE
    // ================================================================
    const rawNodes = [
      {
        id: 'webhook',
        type: 'TRIGGER',
        label: 'Webhook Ingest',
        sub: 'POST /api/leads',
        badge: 'LIVE',
        color: '#00f5d4', // Neon Cyan
        rx: 0.08,
        ry: 0.16,
      },
      {
        id: 'ai_brain',
        type: 'AI AGENT',
        label: 'LLM Reasoning Core',
        sub: 'DeepSeek-R1 / Claude',
        badge: 'REASONING',
        color: '#a855f7', // Electric Purple
        rx: 0.44,
        ry: 0.12,
      },
      {
        id: 'vector_db',
        type: 'KNOWLEDGE',
        label: 'Vector Retrieval RAG',
        sub: 'Pinecone Store',
        badge: 'SIM 0.98',
        color: '#6366f1', // Indigo Blue
        rx: 0.78,
        ry: 0.14,
      },
      {
        id: 'stream',
        type: 'STREAM',
        label: 'Kafka Event Stream',
        sub: 'Real-time Message Broker',
        badge: 'STREAMING',
        color: '#00b4d8', // Sky Blue
        rx: 0.07,
        ry: 0.52,
      },
      {
        id: 'swarm',
        type: 'AUTONOMOUS',
        label: 'Multi-Agent Swarm',
        sub: 'Parallel Task Workers',
        badge: 'EXEC 200',
        color: '#10b981', // Emerald Green
        rx: 0.62,
        ry: 0.46,
      },
      {
        id: 'python_code',
        type: 'CODE',
        label: 'Python Automation',
        sub: 'High-Throughput ETL',
        badge: 'READY',
        color: '#f59e0b', // Amber Gold
        rx: 0.14,
        ry: 0.76,
      },
      {
        id: 'guardrail',
        type: 'SECURITY',
        label: 'AI Guardrail & Eval',
        sub: 'Hallucination Filter',
        badge: 'VERIFIED',
        color: '#14b8a6', // Teal
        rx: 0.46,
        ry: 0.78,
      },
      {
        id: 'crm_action',
        type: 'ACTION',
        label: 'CRM & Webhook Sync',
        sub: 'HubSpot / Slack / Action',
        badge: 'DISPATCHED',
        color: '#ef233c', // Crimson
        rx: 0.84,
        ry: 0.76,
      },
    ];

    // Multi-line cable connections linking the nodes
    const cableDefs = [
      { from: 'webhook', to: 'ai_brain', color: '#00f5d4' },
      { from: 'ai_brain', to: 'vector_db', color: '#a855f7' },
      { from: 'webhook', to: 'stream', color: '#00b4d8' },
      { from: 'ai_brain', to: 'swarm', color: '#10b981' },
      { from: 'stream', to: 'python_code', color: '#00b4d8' },
      { from: 'swarm', to: 'guardrail', color: '#14b8a6' },
      { from: 'vector_db', to: 'crm_action', color: '#6366f1' },
      { from: 'guardrail', to: 'crm_action', color: '#ef233c' },
      { from: 'python_code', to: 'guardrail', color: '#f59e0b' },
    ];

    // Data photon packets travelling on cables
    const packets = [];
    cableDefs.forEach((cable, cIdx) => {
      for (let p = 0; p < 2; p++) {
        packets.push({
          cableIdx: cIdx,
          track: p === 0 ? -1 : 1, // -1: upper line, +1: lower line
          progress: (p * 0.5 + Math.random() * 0.4) % 1.0,
          speed: 0.14 + Math.random() * 0.10,
          size: Math.random() * 2.2 + 2.5,
          color: cable.color,
        });
      }
    });

    // ================================================================
    // LIGHTNING BOLT PROCEDURAL ENGINE (REALISTIC SKY THUNDERBOLTS)
    // ================================================================
    let activeBolts = [];
    let skyFlashAlpha = 0;
    let nextStrikeTime = 1.2; // seconds until first strike

    function generateFractalBolt(startX, startY, endX, endY, displace, depth = 0, maxDepth = 5) {
      if (depth >= maxDepth) {
        return [{ x: startX, y: startY }, { x: endX, y: endY }];
      }

      const midX = (startX + endX) / 2 + (Math.random() - 0.5) * displace;
      const midY = (startY + endY) / 2 + (Math.random() - 0.5) * displace;

      const forks = [];
      // 30% chance to generate a branching fork tendril into the sky
      if (Math.random() < 0.32 && depth >= 1 && depth <= 3) {
        const angle = Math.atan2(endY - startY, endX - startX) + (Math.random() - 0.5) * 1.2;
        const forkLen = Math.hypot(endX - startX, endY - startY) * (0.35 + Math.random() * 0.25);
        const forkEndX = midX + Math.cos(angle) * forkLen;
        const forkEndY = midY + Math.sin(angle) * forkLen;
        forks.push(generateFractalBolt(midX, midY, forkEndX, forkEndY, displace * 0.45, depth + 1, maxDepth));
      }

      const left = generateFractalBolt(startX, startY, midX, midY, displace * 0.55, depth + 1, maxDepth);
      const right = generateFractalBolt(midX, midY, endX, endY, displace * 0.55, depth + 1, maxDepth);

      return {
        points: left.points ? left.points.concat(right.points.slice(1)) : (Array.isArray(left) ? left : [left]).concat(Array.isArray(right) ? right.slice(1) : [right]),
        forks: forks.concat(left.forks || []).concat(right.forks || []),
      };
    }

    // Trigger an authentic multi-stroke lightning discharge
    function triggerLightningStrike(forcedStartX, forcedStartY, forcedEndX, forcedEndY) {
      const nodes = getNodePositions();
      
      // Pick random source and target or use sky-to-node
      let x1, y1, x2, y2;
      if (forcedStartX !== undefined) {
        x1 = forcedStartX;
        y1 = forcedStartY;
        x2 = forcedEndX;
        y2 = forcedEndY;
      } else {
        const fromSky = Math.random() < 0.45;
        if (fromSky) {
          x1 = Math.random() * width;
          y1 = -20;
          const targetNode = nodes[Math.floor(Math.random() * nodes.length)];
          x2 = targetNode.x;
          y2 = targetNode.y;
        } else {
          const nA = nodes[Math.floor(Math.random() * nodes.length)];
          let nB = nodes[Math.floor(Math.random() * nodes.length)];
          while (nB === nA) {
            nB = nodes[Math.floor(Math.random() * nodes.length)];
          }
          x1 = nA.x;
          y1 = nA.y;
          x2 = nB.x;
          y2 = nB.y;
        }
      }

      const dist = Math.hypot(x2 - x1, y2 - y1);
      const boltTree = generateFractalBolt(x1, y1, x2, y2, Math.max(45, dist * 0.28), 0, 5);

      activeBolts.push({
        tree: boltTree,
        life: 0.38, // duration in seconds
        maxLife: 0.38,
        color: Math.random() < 0.4 ? '#00f5d4' : Math.random() < 0.5 ? '#a855f7' : '#ffffff',
        startX: x1,
        startY: y1,
        endX: x2,
        endY: y2,
      });

      // Sky flash illumination
      skyFlashAlpha = Math.min(0.32, skyFlashAlpha + 0.24);
    }

    // Helper: compute node pixel rects
    function getNodePositions() {
      const isMobile = width < 768;
      const isTablet = width < 1024;
      const nodeScale = isMobile ? 0.72 : isTablet ? 0.85 : 0.98;
      const w = Math.round(136 * nodeScale);
      const h = Math.round(44 * nodeScale);

      return rawNodes.map((n) => {
        let x = n.rx * width;
        let y = n.ry * height;

        const halfW = w / 2;
        const halfH = h / 2;
        const maxAllowedY = Math.min(height * 0.82 - halfH, height - 70);
        x = Math.max(halfW + 10, Math.min(width - halfW - 10, x));
        y = Math.max(halfH + 10, Math.min(maxAllowedY, y));

        return {
          ...n,
          x,
          y,
          w,
          h,
          scale: nodeScale,
          inPort: { x: x - halfW, y },
          outPort: { x: x + halfW, y },
        };
      });
    }

    function getBezierEndpoints(nMap, cable) {
      const fromNode = nMap.get(cable.from);
      const toNode = nMap.get(cable.to);
      if (!fromNode || !toNode) return null;

      const p0 = fromNode.outPort;
      const p3 = toNode.inPort;

      const dx = Math.abs(p3.x - p0.x);
      const dy = p3.y - p0.y;
      const tension = Math.max(35, dx * 0.42);

      const p1 = { x: p0.x + tension, y: p0.y + dy * 0.05 };
      const p2 = { x: p3.x - tension, y: p3.y - dy * 0.05 };

      return { p0, p1, p2, p3 };
    }

    function evalBezierTrack(p0, p1, p2, p3, t, offset) {
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;

      const bx = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
      const by = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;

      if (offset === 0) return { x: bx, y: by };

      const dx = 3 * mt2 * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t2 * (p3.x - p2.x);
      const dy = 3 * mt2 * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t2 * (p3.y - p2.y);
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;

      return {
        x: bx + nx * offset,
        y: by + ny * offset,
      };
    }

    // Draw procedural branch recursively
    function renderLightningTree(ctx, tree, alpha, color) {
      if (!tree) return;
      const pts = tree.points || (Array.isArray(tree) ? tree : []);

      if (pts.length > 1) {
        // Outer glowing halo
        ctx.strokeStyle = color;
        ctx.lineWidth = 6;
        ctx.globalAlpha = alpha * 0.45;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.stroke();

        // Intense white-hot core
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.0;
        ctx.globalAlpha = alpha * 0.95;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.stroke();
      }

      if (tree.forks && tree.forks.length > 0) {
        tree.forks.forEach((fork) => {
          renderLightningTree(ctx, fork, alpha * 0.65, color);
        });
      }
    }

    let lastTime = performance.now();

    function render(now) {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const time = now / 1000;

      ctx.clearRect(0, 0, width, height);

      // ==============================================================
      // 1. LIGHTNING STRIKE SCHEDULING (NATURAL THUNDERSTORM DISCHARGES)
      // ==============================================================
      nextStrikeTime -= dt;
      if (nextStrikeTime <= 0) {
        triggerLightningStrike();
        // Next strike interval: 2.2 to 4.5 seconds
        nextStrikeTime = 2.2 + Math.random() * 2.3;
      }

      // Decay atmospheric sky flash
      if (skyFlashAlpha > 0) {
        skyFlashAlpha = Math.max(0, skyFlashAlpha - dt * 1.4);
      }

      // ==============================================================
      // 2. ATMOSPHERIC SKY ILLUMINATION ("আলোটা আশেপাশে থাকবে")
      // Soft ambient light washing over the full page when lightning discharges
      // ==============================================================
      if (skyFlashAlpha > 0.005) {
        ctx.save();
        const flashGrad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.35,
          10,
          width * 0.5,
          height * 0.35,
          Math.max(width, height) * 0.85
        );
        flashGrad.addColorStop(0, `rgba(0, 245, 212, ${skyFlashAlpha * 0.55})`);
        flashGrad.addColorStop(0.35, `rgba(168, 85, 247, ${skyFlashAlpha * 0.35})`);
        flashGrad.addColorStop(0.75, `rgba(0, 180, 255, ${skyFlashAlpha * 0.15})`);
        flashGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = flashGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // ==============================================================
      // 3. N8N DOTTED BLUEPRINT CANVAS GRID
      // ==============================================================
      ctx.save();
      const dotSpacing = 28;
      const dotRadius = 0.95;
      for (let x = dotSpacing; x < width; x += dotSpacing) {
        for (let y = dotSpacing; y < height; y += dotSpacing) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      const nodes = getNodePositions();
      const nMap = new Map(nodes.map((n) => [n.id, n]));

      // ==============================================================
      // 4. MULTI-LINE CONDUITS (3 PARALLEL LINES PER PIPELINE BUS)
      // ==============================================================
      ctx.save();
      const trackOffsets = [-5.0, 0, 5.0]; // 3 parallel lines!

      cableDefs.forEach((cable) => {
        const pts = getBezierEndpoints(nMap, cable);
        if (!pts) return;
        const { p0, p1, p2, p3 } = pts;

        // Wide background cable glow aura
        ctx.strokeStyle = `${cable.color}15`;
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.stroke();

        // Draw each of the 3 parallel lines
        trackOffsets.forEach((offset) => {
          const isCenter = offset === 0;
          ctx.strokeStyle = isCenter ? `${cable.color}50` : `${cable.color}28`;
          ctx.lineWidth = isCenter ? 1.5 : 1.0;

          ctx.beginPath();
          const steps = 24;
          for (let s = 0; s <= steps; s++) {
            const pt = evalBezierTrack(p0, p1, p2, p3, s / steps, offset);
            if (s === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          ctx.stroke();
        });
      });
      ctx.restore();

      // ==============================================================
      // 5. ANIMATED DATA PHOTON PACKETS RACING ALONG THE 3 TRACKS
      // ==============================================================
      ctx.save();
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed * dt;
        if (pkt.progress >= 1.0) pkt.progress = 0;

        const cable = cableDefs[pkt.cableIdx];
        if (!cable) return;
        const pts = getBezierEndpoints(nMap, cable);
        if (!pts) return;

        const trackOffset = pkt.track * 5.0;
        const curPt = evalBezierTrack(pts.p0, pts.p1, pts.p2, pts.p3, pkt.progress, trackOffset);
        const trailPt = evalBezierTrack(pts.p0, pts.p1, pts.p2, pts.p3, Math.max(0, pkt.progress - 0.05), trackOffset);

        // Radiant halo
        const halo = ctx.createRadialGradient(curPt.x, curPt.y, 1, curPt.x, curPt.y, 12);
        halo.addColorStop(0, '#ffffff');
        halo.addColorStop(0.35, cable.color);
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(curPt.x, curPt.y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Motion blur line
        ctx.strokeStyle = cable.color;
        ctx.lineWidth = 2.0;
        ctx.globalAlpha = 0.65;
        ctx.beginPath();
        ctx.moveTo(trailPt.x, trailPt.y);
        ctx.lineTo(curPt.x, curPt.y);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // White nucleus
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(curPt.x, curPt.y, pkt.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // ==============================================================
      // 6. RENDER ACTIVE SKY LIGHTNING BOLTS (বিজলি চমকানো)
      // ==============================================================
      ctx.save();
      for (let bIdx = activeBolts.length - 1; bIdx >= 0; bIdx--) {
        const bolt = activeBolts[bIdx];
        bolt.life -= dt;
        if (bolt.life <= 0) {
          activeBolts.splice(bIdx, 1);
          continue;
        }

        const normLife = bolt.life / bolt.maxLife; // 1 -> 0
        // Realistic multi-stroke flicker
        const flicker = Math.sin(normLife * 28) > -0.2 ? 1 : 0.35;
        const alpha = Math.min(1, normLife * 2.5) * flicker;

        renderLightningTree(ctx, bolt.tree, alpha, bolt.color);

        // Flash flare at the strike origin and destination
        [
          { x: bolt.startX, y: bolt.startY },
          { x: bolt.endX, y: bolt.endY },
        ].forEach((pt) => {
          const ptHalo = ctx.createRadialGradient(pt.x, pt.y, 2, pt.x, pt.y, 45);
          ptHalo.addColorStop(0, '#ffffff');
          ptHalo.addColorStop(0.3, bolt.color);
          ptHalo.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = ptHalo;
          ctx.globalAlpha = alpha * 0.6;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 45, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      ctx.globalAlpha = 1.0;
      ctx.restore();

      // ==============================================================
      // 7. RENDER 8 GLASSMORPHIC AI AUTOMATION NODES IN EMPTY SPACES
      // ==============================================================
      nodes.forEach((n) => {
        const { x, y, w, h, scale } = n;
        const halfW = w / 2;
        const halfH = h / 2;

        const mDist = Math.hypot(x - mouse.x, y - mouse.y);
        const isHovered = mDist < 75;
        const hoverLift = isHovered ? Math.sin(time * 3) * 1.5 : 0;

        ctx.save();
        ctx.translate(x, y + hoverLift);

        // Atmospheric node glow
        const nodeGlow = ctx.createRadialGradient(0, 0, 8, 0, 0, halfW * 1.3);
        nodeGlow.addColorStop(0, `${n.color}26`);
        nodeGlow.addColorStop(0.6, `${n.color}06`);
        nodeGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.roundRect(-halfW - 6, -halfH - 6, w + 12, h + 12, 14);
        ctx.fill();

        // Node dark glass card
        ctx.fillStyle = isHovered ? 'rgba(7, 13, 26, 0.92)' : 'rgba(4, 9, 20, 0.82)';
        ctx.beginPath();
        ctx.roundRect(-halfW, -halfH, w, h, 10);
        ctx.fill();

        // Sleek glass border
        ctx.strokeStyle = isHovered ? `${n.color}95` : 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = isHovered ? 1.5 : 1.0;
        ctx.beginPath();
        ctx.roundRect(-halfW, -halfH, w, h, 10);
        ctx.stroke();

        // Input & Output connector port pins
        ctx.fillStyle = '#030712';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(-halfW, 0, 3.8 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(halfW, 0, 3.8 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Node Type Pill Tag
        ctx.font = `bold ${Math.round(7.5 * scale)}px monospace`;
        ctx.fillStyle = n.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(n.type, -halfW + 9 * scale, -halfH + 6 * scale);

        // Status Badge Pill
        ctx.font = `bold ${Math.round(7 * scale)}px monospace`;
        const badgeTxt = n.badge;
        const bw = ctx.measureText(badgeTxt).width + 8 * scale;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.roundRect(halfW - bw - 7 * scale, -halfH + 5 * scale, bw, 11 * scale, 3);
        ctx.fill();

        // Pulsing status dot
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(halfW - bw - 2.5 * scale, -halfH + 10.5 * scale, 2 * scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(badgeTxt, halfW - bw + 3 * scale, -halfH + 6 * scale);

        // Node Title
        ctx.font = `bold ${Math.round(9.5 * scale)}px sans-serif`;
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(n.label, -halfW + 9 * scale, -halfH + 19 * scale);

        // Subtitle
        ctx.font = `${Math.round(8 * scale)}px monospace`;
        ctx.fillStyle = 'rgba(148, 163, 184, 0.78)';
        ctx.fillText(n.sub, -halfW + 9 * scale, -halfH + 30 * scale);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Occasional tiny spark on mouse movement
      if (Math.random() < 0.05) {
        triggerLightningStrike(mouse.x, mouse.y, mouse.x + (Math.random() - 0.5) * 120, mouse.y + (Math.random() - 0.5) * 120);
      }
    };

    const handleWheel = () => {
      // Wheel scroll triggers an instant sky thunder strike!
      if (Math.random() < 0.35) {
        triggerLightningStrike();
      }
    };

    const handleResize = () => {
      width = canvas.width = container.clientWidth || 1400;
      height = canvas.height = container.clientHeight || 850;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) lastTime = performance.now();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('visibilitychange', handleVisibility);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent"
      />
    </div>
  );
}
