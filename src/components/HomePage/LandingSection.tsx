import { useEffect, useRef, useState } from "react";
import LandingText from "./LandingText";
import LandingVideo from "./LandingVideo";

export default function LandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full relative flex-1 max-h-screen transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={sectionRef}
    >
      <LandingVideo />
      <div className="absolute inset-0 flex z-20 items-center justify-center">
        <LandingText />
      </div>
    </div>
  );
}
