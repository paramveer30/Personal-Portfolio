"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const MAX_DIST = 130;
const MOUSE_DIST = 170;

// a light network of drifting nodes and the lines between them, nudged by the cursor
export function TopologyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const isLight = () => {
      const picked = document.documentElement.getAttribute("data-theme");
      if (picked === "light" || picked === "dark") return picked === "light";
      return !darkQuery.matches;
    };

    // on cream the accent washes out, so light mode uses the deeper tone and heavier alpha
    const readPaint = () => {
      const cs = getComputedStyle(document.documentElement);
      const light = isLight();
      return {
        color:
          (light
            ? cs.getPropertyValue("--accent-deep")
            : cs.getPropertyValue("--accent")
          ).trim() || "#d8b27a",
        line: light ? 0.3 : 0.12,
        cursor: light ? 0.34 : 0.18,
        dot: light ? 0.55 : 0.3,
      };
    };
    let paint = readPaint();

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    // arrow consts (not hoisted declarations) so the null checks above stay narrowed inside them
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // node count scales with the area, clamped so it stays cheap
      const count = Math.round(
        Math.min(90, Math.max(28, (width * height) / 30000)),
      );
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));
    };

    const update = () => {
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_DIST && d > 0) {
          const force = (1 - d / MOUSE_DIST) * 0.7;
          p.x += (dx / d) * force;
          p.y += (dy / d) * force;
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];
        if (!a) continue;

        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          if (!b) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX_DIST) {
            ctx.strokeStyle = paint.color;
            ctx.globalAlpha = (1 - d / MAX_DIST) * paint.line;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < MOUSE_DIST) {
          ctx.strokeStyle = paint.color;
          ctx.globalAlpha = (1 - dm / MOUSE_DIST) * paint.cursor;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.globalAlpha = paint.dot;
        ctx.fillStyle = paint.color;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const loop = () => {
      update();
      render();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // recolour on theme toggle, and repaint straight away when the loop is not running
    const onThemeChange = () => {
      paint = readPaint();
      if (reduced) render();
    };
    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    darkQuery.addEventListener("change", onThemeChange);

    resize();
    render();
    if (!reduced) raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      darkQuery.removeEventListener("change", onThemeChange);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
