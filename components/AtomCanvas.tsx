import React, { useRef, useEffect } from 'react';
import { ParticleType, Particle } from '../types';
import { COLORS, PARTICLE_SIZES } from '../constants';

interface AtomCanvasProps {
  protons: number;
  neutrons: number;
  electrons: number;
}

export const AtomCanvas: React.FC<AtomCanvasProps> = ({ protons, neutrons, electrons }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  // Fixed: Added initial value null to useRef to match expected React signature and handle animation frame ID
  const requestRef = useRef<number | null>(null);

  const getShellRadius = (index: number) => {
    if (index < 2) return 100;
    if (index < 10) return 180;
    if (index < 28) return 260;
    if (index < 60) return 340;
    if (index < 92) return 420;
    return 500;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const newParticles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < protons; i++) {
      newParticles.push({
        id: `p-${i}`,
        type: ParticleType.PROTON,
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }
    for (let i = 0; i < neutrons; i++) {
      newParticles.push({
        id: `n-${i}`,
        type: ParticleType.NEUTRON,
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }
    for (let i = 0; i < electrons; i++) {
      const radius = getShellRadius(i);
      newParticles.push({
        id: `e-${i}`,
        type: ParticleType.ELECTRON,
        x: 0, y: 0, vx: 0, vy: 0,
        targetRadius: radius,
        angle: Math.random() * Math.PI * 2,
      });
    }

    particlesRef.current = newParticles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const shells = [100, 180, 260, 340, 420, 500];
      shells.forEach(r => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = COLORS.ELECTRON_SHELL;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const totalNucleons = protons + neutrons;
      const nucleusRadius = Math.max(25, Math.sqrt(totalNucleons) * 12);
      
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius * 1.5);
      gradient.addColorStop(0, COLORS.NUCLEUS_BG);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      particlesRef.current.forEach(p => {
        if (p.type !== ParticleType.ELECTRON) {
          const dx = cx - p.x;
          const dy = cy - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const force = 0.015;
          p.vx += dx * force;
          p.vy += dy * force;
          
          // Surface tension of nucleus
          if (dist > nucleusRadius) {
            p.vx += dx * 0.05;
            p.vy += dy * 0.05;
          }

          p.vx *= 0.92;
          p.vy *= 0.92;
          p.x += p.vx;
          p.y += p.vy;

          particlesRef.current.forEach(other => {
            if (p.id !== other.id && other.type !== ParticleType.ELECTRON) {
              const rdx = p.x - other.x;
              const rdy = p.y - other.y;
              const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
              const minSize = PARTICLE_SIZES.NUCLEON * 1.6;
              if (rdist < minSize) {
                const overlap = minSize - rdist;
                p.vx += (rdx / rdist) * overlap * 0.1;
                p.vy += (rdy / rdist) * overlap * 0.1;
              }
            }
          });

          ctx.beginPath();
          ctx.arc(p.x, p.y, PARTICLE_SIZES.NUCLEON, 0, Math.PI * 2);
          ctx.fillStyle = p.type === ParticleType.PROTON ? COLORS.PROTON : COLORS.NEUTRON;
          ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          const orbitSpeed = 0.003 + (1 / (p.targetRadius || 100)) * 1.5;
          p.angle = (p.angle || 0) + orbitSpeed;
          const r = p.targetRadius || 100;
          p.x = cx + Math.cos(p.angle) * r;
          p.y = cy + Math.sin(p.angle) * r;

          ctx.beginPath();
          ctx.arc(p.x, p.y, PARTICLE_SIZES.ELECTRON, 0, Math.PI * 2);
          ctx.fillStyle = COLORS.ELECTRON;
          ctx.fill();
          
          ctx.shadowBlur = 8;
          ctx.shadowColor = COLORS.ELECTRON;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [protons, neutrons, electrons]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-slate-950" />;
};