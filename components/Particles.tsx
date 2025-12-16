// components/Particles.tsx
"use client";

import { useMemo } from "react";

type Dot = {
  top: string;
  left: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
};

function pseudoRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export default function Particles({ count = 36 }: { count?: number }) {
  const dots = useMemo<Dot[]>(() => {
    const arr: Dot[] = [];
    for (let i = 0; i < count; i++) {
      const r1 = pseudoRandom(i * 11 + 1);
      const r2 = pseudoRandom(i * 11 + 2);
      const r3 = pseudoRandom(i * 11 + 3);
      const r4 = pseudoRandom(i * 11 + 4);

      const size = 2 + Math.floor(r3 * 3);
      const opacity = 0.08 + r4 * 0.22;

      arr.push({
        top: `${(r1 * 100).toFixed(2)}%`,
        left: `${(r2 * 100).toFixed(2)}%`,
        delay: `${(r3 * 4.5).toFixed(2)}s`,
        duration: `${(3.5 + r4 * 3.5).toFixed(2)}s`,
        size,
        opacity,
      });
    }
    return arr;
  }, [count]);

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d, idx) => (
        <span
          key={idx}
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}
