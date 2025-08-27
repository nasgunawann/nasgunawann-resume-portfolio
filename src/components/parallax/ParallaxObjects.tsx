import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Spaceship from "@assets/images/spaceship.png";
import Meteor from "@assets/images/meteor.png";
import Satelite from "@assets/images/satelite.png";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxItem {
  src: string;
  alt: string;
  className: string;
  speed: number;
  idleRotate?: boolean;
  floatIdle?: boolean;
}

const parallaxItems: ParallaxItem[] = [
  {
    src: Spaceship,
    alt: "Spaceship big left",
    className:
      "absolute top-[45%] left-[0%] w-[150px] md:w-[250px] lg:w-[200px]",
    speed: -0.9,
    floatIdle: true,
  },
  {
    src: Spaceship,
    alt: "Spaceship bottom right",
    className:
      "absolute bottom-[0%] right-[5%] w-[80px] md:w-[120px] lg:w-[180px]",
    speed: -0.5,
    floatIdle: true,
  },
  {
    src: Satelite,
    alt: "Satelite top right",
    className:
      "absolute top-[0%] right-[0%] w-[100px] md:w-[80px] lg:w-[120px] lg:right-[5%] lg:top-[10%] opacity-75",
    speed: -0.08,
    idleRotate: true,
  },
  {
    src: Meteor,
    alt: "Meteor center",
    className:
      "absolute top-[60%] right-[50%] w-[200px] md:w-[80px] lg:w-[300px] opacity-75",
    speed: -0.05,
    idleRotate: true,
  },
];

const ParallaxObjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll("img") || [];

      elements.forEach((el, index) => {
        const { speed, idleRotate, floatIdle } = parallaxItems[index];

        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Idle rotation
        if (idleRotate) {
          gsap.to(el, {
            rotate: "+=360",
            duration: 60,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center center",
          });
        }

        // Floating idle animation
        if (floatIdle) {
          gsap.to(el, {
            y: "+=10",
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {parallaxItems.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default ParallaxObjects;
