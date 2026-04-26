"use client";

import { useEffect, useRef } from "react";

const GRID = 48;
const BASE_RADIUS = 1.5;
const MAX_RISE = 2;
const INFLUENCE = 140;
const LERP = 0.1;
const DOT_COLOR = "oklch(0.5579 0.0909 318.07 / 0.10)";

export function BackgroundFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let rafId = 0;
    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };

    const drawDots = (mx: number, my: number) => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = DOT_COLOR;
      for (let x = GRID / 2; x < width + GRID; x += GRID) {
        for (let y = GRID / 2; y < height + GRID; y += GRID) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / INFLUENCE);
          const radius = BASE_RADIUS + t * t * MAX_RISE;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (reducedMotion) drawDots(-9999, -9999);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    if (reducedMotion) {
      return () => window.removeEventListener("resize", resize);
    }

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const tick = () => {
      current.x += (target.x - current.x) * LERP;
      current.y += (target.y - current.y) * LERP;
      drawDots(current.x, current.y);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
