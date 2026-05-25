"use client";
import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip";

interface Props {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({ children, animation = "fade-up", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseStyle = "transition-all duration-700 ease-out";
  
  const hiddenStyles: Record<AnimationType, string> = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-down": "opacity-0 -translate-y-10",
    "fade-left": "opacity-0 translate-x-10",
    "fade-right": "opacity-0 -translate-x-10",
    "zoom-in": "opacity-0 scale-90",
    "flip": "opacity-0 rotateY-90",
  };

  const visibleStyle = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`${baseStyle} ${isVisible ? visibleStyle : hiddenStyles[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
