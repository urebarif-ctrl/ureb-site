"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const animateCount = useCallback(() => {
    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min((now - t0) / 1500, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * level));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [level]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            animateCount();
          }, delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, animateCount]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2.5">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-sm text-accent font-bold tabular-nums">{count}%</span>
      </div>
      <div className="w-full h-2.5 bg-border/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500 relative overflow-hidden bar-shimmer"
          style={{
            width: visible ? `${level}%` : "0%",
            transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}
