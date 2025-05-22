'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const stats = [
  { value: 5000, label: 'Students', suffix: '+' },
  { value: 50, label: 'Programs', suffix: '+' },
  { value: 300, label: 'Faculty Members', suffix: '+' },
  { value: 25, label: 'Years of Excellence', suffix: '' },
];

export function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-[#990000] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {isInView ? (
                    <Counter end={stat.value} duration={2000} />
                  ) : (
                    0
                  )}
                </span>
                <span className="text-4xl md:text-5xl font-bold">{stat.suffix}</span>
              </div>
              <p className="text-lg mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CounterProps {
  end: number;
  duration: number;
}

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0);
  const incrementRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const steps = 60;
    const increment = Math.ceil(end / steps);
    const stepTime = duration / steps;

    incrementRef.current = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          if (incrementRef.current) clearInterval(incrementRef.current);
          return end;
        }
        return newCount;
      });
    }, stepTime);

    return () => {
      if (incrementRef.current) clearInterval(incrementRef.current);
    };
  }, [end, duration]);

  return <>{count}</>;
}