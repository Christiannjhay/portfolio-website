import { useEffect, useRef, useState } from "react";
import "../../styles/ContactUs.css";

export default function ContactUsSection() {
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
      className={`w-full px-20 py-20 flex justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={sectionRef}
    >
      <h1 className="main-text text-red-500 sm:text-transparent text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-GeomSemiBold">Get in Touch</h1>
    </div>
  );
}
