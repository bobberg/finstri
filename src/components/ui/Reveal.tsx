import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  /** Stagger index; each step delays the entrance by 60ms. */
  index?: number;
};

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  index = 0,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={isVisible ? "in" : "out"}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${Math.min(index, 8) * 60}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
