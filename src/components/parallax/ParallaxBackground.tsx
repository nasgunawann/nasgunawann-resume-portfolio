import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  offsetY: number;
  imageUrl: string;
  speed?: number; // default: 0.5
  opacity?: number; // default: 0.15
}

const ParallaxBackground = ({
  offsetY,
  imageUrl,
  speed = 0.5,
  opacity = 0.15,
}: ParallaxBackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<number>(0);
  const frameRef = useRef<number>(0);

  const updateParallax = () => {
    const lerpFactor = 0.1;
    const targetY = offsetY * speed;
    transformRef.current += (targetY - transformRef.current) * lerpFactor;

    if (backgroundRef.current) {
      backgroundRef.current.style.transform = `translateY(${transformRef.current}px)`;
    }

    frameRef.current = requestAnimationFrame(updateParallax);
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updateParallax);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [offsetY, speed]);

  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${transformRef.current}px)`,
        opacity,
        willChange: "transform",
      }}
    />
  );
};

export default ParallaxBackground;
