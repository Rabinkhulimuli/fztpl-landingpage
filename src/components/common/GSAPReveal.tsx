import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

export const GSAPReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  stagger = 0,
}: GSAPRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const x = direction === 'left' ? -30 : direction === 'right' ? 30 : 0;
    const y = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;

    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        x,
        y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [direction, delay, duration, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
