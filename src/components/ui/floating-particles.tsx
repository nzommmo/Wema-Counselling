"use client";

import { useCallback, useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = 35;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacityDir: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        opacityDir: Math.random() > 0.5 ? 0.002 : -0.002,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulse opacity
        p.opacity += p.opacityDir;
        if (p.opacity > 0.5 || p.opacity < 0.05) p.opacityDir *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 72, 153, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines for nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const cleanup = initParticles();
    return () => {
      cleanup?.();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-1"
      aria-hidden="true"
    />
  );
}
